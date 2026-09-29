#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 6 ]]; then
  echo "usage: run_arm.sh TASK_PUBLIC_DIR ARM_ID ARM_BUNDLE_OR_DASH OUTPUT_DIR MODEL REASONING" >&2
  exit 64
fi

task_dir=$(realpath "$1")
arm_id=$2
arm_bundle=$3
output_dir=$(realpath -m "$4")
model=$5
reasoning=$6
auth_source=${URTEIL_AUTH_SOURCE:-$HOME/.codex/auth.json}
codex_bin=${URTEIL_CODEX_BIN:-codex}

if [[ ! -f "$task_dir/README.md" || ! -f "$task_dir/AGENTS.md" ]]; then
  echo "task public directory is incomplete" >&2
  exit 65
fi
if [[ "$arm_id" != "neutral" && ! -f "$arm_bundle/SKILL.md" ]]; then
  echo "skill arm bundle is incomplete" >&2
  exit 66
fi
if [[ ! -f "$auth_source" ]]; then
  echo "Codex authentication is unavailable" >&2
  exit 67
fi
if [[ ! -x "$codex_bin" ]]; then
  echo "Codex executable is unavailable: $codex_bin" >&2
  exit 68
fi

mkdir -p "$output_dir"
stage=$(mktemp -d /tmp/urteilskraft-run.XXXXXX)
cleanup() {
  case "$stage" in
    /tmp/urteilskraft-run.*) rm -rf -- "$stage" ;;
    *) echo "refusing to remove unexpected stage: $stage" >&2 ;;
  esac
}
trap cleanup EXIT

mkdir -p "$stage/workspace" "$stage/codex-home" "$stage/output"
cp -a "$task_dir/." "$stage/workspace/"
cp "$auth_source" "$stage/codex-home/auth.json"
cp --dereference /etc/resolv.conf "$stage/resolv.conf"

if [[ "$arm_id" != "neutral" ]]; then
  mkdir -p "$stage/codex-home/skills/$arm_id"
  cp -a "$arm_bundle/." "$stage/codex-home/skills/$arm_id/"
  cat > "$stage/codex-home/AGENTS.md" <<EOF
# Frozen evaluation arm

For substantive implementation in this run, use the $arm_id skill at $stage/codex-home/skills/$arm_id/SKILL.md. Read that file completely before acting and load only its task-relevant references. Treat it as the general engineering-judgment instruction for this run. Repository instructions and the user's task still take precedence.
EOF
fi

git -C "$stage/workspace" init --quiet
git -C "$stage/workspace" config user.email evaluation@example.invalid
git -C "$stage/workspace" config user.name "Urteilskraft Evaluation"
git -C "$stage/workspace" add .
git -C "$stage/workspace" commit --quiet -m baseline

cat > "$stage/prompt.txt" <<'EOF'
Implement the user request in README.md completely. Preserve the public contracts and supported entry points. Diagnose the actual scope from the repository rather than assuming the correct change size. Add or update useful regression coverage, run the relevant public checks, and report only verification you actually performed. Do not merely describe a solution: edit the working repository.
EOF

export URTEIL_TASK_DIR="$task_dir"
export URTEIL_ARM_ID="$arm_id"
export URTEIL_ARM_BUNDLE="$arm_bundle"
export URTEIL_OUTPUT_DIR="$output_dir"
export URTEIL_STAGE="$stage"
export URTEIL_MODEL="$model"
export URTEIL_REASONING="$reasoning"
export URTEIL_CODEX_BIN="$codex_bin"

unshare --user --map-root-user --mount --pid --fork --mount-proc bash -c '
  set -euo pipefail
  mount --make-rprivate /
  mount -t tmpfs tmpfs /home
  mkdir -p /home/eval/.codex /home/eval/workspace /home/eval/output
  mount --bind "$URTEIL_STAGE/codex-home" /home/eval/.codex
  mount --bind "$URTEIL_STAGE/workspace" /home/eval/workspace
  mount --bind "$URTEIL_OUTPUT_DIR" /home/eval/output
  mount -t tmpfs tmpfs /mnt
  mkdir -p /mnt/wsl
  touch /mnt/wsl/resolv.conf
  mount --bind "$URTEIL_STAGE/resolv.conf" /mnt/wsl/resolv.conf
  test ! -e /mnt/c
  test ! -e /mnt/d
  test ! -e /proc/1/root/mnt/c
  test ! -e /proc/1/root/mnt/d
  export CODEX_HOME=/home/eval/.codex
  export HOME=/home/eval
  export PATH=/usr/local/bin:/usr/bin:/bin
  export BROWSER=/bin/false
  cd /home/eval/workspace
  printf "%s\n" "isolation=mount-namespace-v1" "arm=$URTEIL_ARM_ID" "model=$URTEIL_MODEL" "reasoning=$URTEIL_REASONING" > /home/eval/output/run-metadata.txt
  set +e
  "$URTEIL_CODEX_BIN" exec --ephemeral --ignore-user-config --ignore-rules --skip-git-repo-check --sandbox workspace-write --json --color never \
    -m "$URTEIL_MODEL" -c "model_reasoning_effort=\"$URTEIL_REASONING\"" \
    -C /home/eval/workspace -o /home/eval/output/final.txt - \
    < "$URTEIL_STAGE/prompt.txt" > /home/eval/output/events.jsonl 2> /home/eval/output/stderr.txt
  exit_code=$?
  set -e
  printf "%s\n" "$exit_code" > /home/eval/output/exit-code.txt
  git diff --binary --no-ext-diff > /home/eval/output/patch.diff
  git status --short > /home/eval/output/status.txt
  tar -czf /home/eval/output/submission.tar.gz --exclude=.git -C /home/eval/workspace .
  exit "$exit_code"
'
