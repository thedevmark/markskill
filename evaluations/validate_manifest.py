#!/usr/bin/env python3
"""Validate an Urteilskraft evaluation run manifest and its frozen bundles."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
from typing import Any


REQUIRED_NEUTRAL_ARM = "neutral"
PLACEHOLDER_FRAGMENTS = ("replace-", "record-", "fixed-before-")


def normalized_sha256(path: Path) -> str:
    text = path.read_text(encoding="utf-8").replace("\r\n", "\n").replace("\r", "\n")
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def normalized_tree_sha256(root: Path) -> str:
    def is_source_file(path: Path) -> bool:
        relative = path.relative_to(root)
        ignored_directories = {".git", ".pytest_cache", "__pycache__", "node_modules", "test-results"}
        return (
            path.is_file()
            and not any(part in ignored_directories for part in relative.parts)
            and path.suffix not in {".pyc", ".pyo"}
        )

    records = [
        f"{path.relative_to(root).as_posix()}\0{normalized_sha256(path)}"
        for path in sorted(candidate for candidate in root.rglob("*") if is_source_file(candidate))
    ]
    return hashlib.sha256("\n".join(records).encode("utf-8")).hexdigest()


def find_placeholders(value: Any, location: str = "manifest") -> list[str]:
    found: list[str] = []
    if isinstance(value, dict):
        for key, child in value.items():
            found.extend(find_placeholders(child, f"{location}.{key}"))
    elif isinstance(value, list):
        for index, child in enumerate(value):
            found.extend(find_placeholders(child, f"{location}[{index}]"))
    elif isinstance(value, str) and any(fragment in value for fragment in PLACEHOLDER_FRAGMENTS):
        found.append(location)
    return found


def validate(manifest_path: Path, strict: bool) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    root = manifest_path.parent
    data = json.loads(manifest_path.read_text(encoding="utf-8"))

    if data.get("format_version") != 1:
        errors.append("format_version must be 1")

    arms = data.get("arms")
    if not isinstance(arms, list):
        return ["arms must be a list"], warnings

    arm_ids = [arm.get("id") for arm in arms if isinstance(arm, dict)]
    if len(arm_ids) != len(set(arm_ids)):
        errors.append("arm ids must be unique")
    if REQUIRED_NEUTRAL_ARM not in arm_ids:
        errors.append("arms must include the neutral control")
    if len(arm_ids) < 2:
        errors.append("arms must include at least one skill arm beside neutral")

    for arm in arms:
        if not isinstance(arm, dict):
            errors.append("every arm must be an object")
            continue
        arm_id = arm.get("id", "<missing>")
        bundle = arm.get("bundle")
        files = arm.get("files")
        if arm_id == "neutral":
            if bundle is not None or files != []:
                errors.append("neutral arm must not provide an extra skill bundle")
            continue
        if not isinstance(bundle, str) or not bundle:
            errors.append(f"{arm_id}: bundle must be a non-empty relative path")
            continue
        bundle_path = (root / bundle).resolve()
        if not bundle_path.is_dir():
            errors.append(f"{arm_id}: bundle directory is missing: {bundle}")
            continue
        if not isinstance(files, list) or not files:
            errors.append(f"{arm_id}: files must inventory the frozen bundle")
            continue
        inventoried: set[str] = set()
        for item in files:
            if not isinstance(item, dict) or not isinstance(item.get("path"), str):
                errors.append(f"{arm_id}: invalid file inventory entry")
                continue
            relative = item["path"].replace("\\", "/")
            inventoried.add(relative)
            candidate = (bundle_path / relative).resolve()
            try:
                candidate.relative_to(bundle_path)
            except ValueError:
                errors.append(f"{arm_id}: file escapes bundle: {relative}")
                continue
            if not candidate.is_file():
                errors.append(f"{arm_id}: missing file: {relative}")
                continue
            actual = normalized_sha256(candidate)
            if actual != item.get("sha256"):
                errors.append(f"{arm_id}: hash mismatch: {relative}")
        actual_files = {
            path.relative_to(bundle_path).as_posix()
            for path in bundle_path.rglob("*")
            if path.is_file()
        }
        for extra in sorted(actual_files - inventoried):
            errors.append(f"{arm_id}: unmanifested bundle file: {extra}")

    phase = data.get("phase")
    tasks = data.get("tasks")
    if phase not in {"calibration", "primary", "holdout", "shadow"}:
        errors.append("phase must be calibration, primary, holdout, or shadow")
    if not isinstance(tasks, list):
        errors.append("tasks must be a list")
    else:
        expected = 4 if phase == "calibration" else 12 if phase in {"primary", "holdout"} else 1
        if len(tasks) < expected:
            message = f"{phase} requires at least {expected} task entries; found {len(tasks)}"
            (errors if strict else warnings).append(message)
        task_ids: set[str] = set()
        for task in tasks:
            if not isinstance(task, dict) or not isinstance(task.get("id"), str):
                errors.append("every task must be an object with an id")
                continue
            task_id = task["id"]
            if task_id in task_ids:
                errors.append(f"duplicate task id: {task_id}")
            task_ids.add(task_id)
            manifest_value = task.get("manifest")
            if not isinstance(manifest_value, str):
                errors.append(f"{task_id}: manifest must be a relative path")
                continue
            task_manifest_path = (root / manifest_value).resolve()
            try:
                task_manifest_path.relative_to(root)
            except ValueError:
                errors.append(f"{task_id}: task manifest escapes evaluation root")
                continue
            if not task_manifest_path.is_file():
                errors.append(f"{task_id}: task manifest is missing")
                continue
            task_manifest = json.loads(task_manifest_path.read_text(encoding="utf-8"))
            if task_manifest.get("task_id") != task_id:
                errors.append(f"{task_id}: task manifest id does not match")
            public_value = task_manifest.get("public_root")
            if not isinstance(public_value, str):
                errors.append(f"{task_id}: public_root must be a relative path")
                continue
            public_root = (task_manifest_path.parent / public_value).resolve()
            try:
                public_root.relative_to(task_manifest_path.parent)
            except ValueError:
                errors.append(f"{task_id}: public_root escapes task directory")
                continue
            if not public_root.is_dir():
                errors.append(f"{task_id}: public_root is missing")
                continue
            actual_tree_hash = normalized_tree_sha256(public_root)
            declared_hashes = {
                task.get("public_tree_sha256"),
                task_manifest.get("public_tree_sha256"),
            }
            if declared_hashes != {actual_tree_hash}:
                errors.append(f"{task_id}: public tree hash mismatch")
            private_ids = {task.get("private_grader_id"), task_manifest.get("private_grader_id")}
            if len(private_ids) != 1 or not all(isinstance(value, str) for value in private_ids):
                errors.append(f"{task_id}: private grader id mismatch")
            else:
                private_id = next(iter(private_ids))
                prefix, separator, digest = private_id.partition("@")
                if prefix != task_id or not separator or len(digest) != 64 or any(
                    character not in "0123456789abcdef" for character in digest
                ):
                    errors.append(f"{task_id}: invalid private grader id")

    isolation = data.get("isolation", {})
    for key in (
        "fresh_process_per_run",
        "isolated_config_per_arm",
        "private_material_unreadable",
        "isolation_probe_passed",
    ):
        if isolation.get(key) is not True:
            message = f"isolation.{key} must be true before a scored run"
            (errors if strict else warnings).append(message)

    placeholders = find_placeholders(data)
    for location in placeholders:
        message = f"placeholder remains at {location}"
        (errors if strict else warnings).append(message)

    if data.get("status") != "frozen":
        message = "status must be frozen before a scored run"
        (errors if strict else warnings).append(message)

    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--strict", action="store_true", help="fail on draft fields and incomplete task sets")
    args = parser.parse_args()
    errors, warnings = validate(args.manifest.resolve(), args.strict)
    for warning in warnings:
        print(f"WARNING: {warning}")
    for error in errors:
        print(f"ERROR: {error}")
    if errors:
        return 1
    print("Manifest structure and frozen bundle hashes are valid.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
