# Calibration fixtures

These fixtures are unscored harness checks. They remain calibration tasks permanently after their behavior or oracles inform framework revisions.

Each task exposes only its `public/` directory to the coding agent. Private graders and outcome oracles live in a separate controller-owned location and are copied into the grading environment only after the agent process exits. A fixture is not eligible to run until the isolation probe demonstrates that the agent cannot list or read the private location.

Public snapshot hashes are normalized source-tree hashes: ignore generated `.git`, `node_modules`, `__pycache__`, `.pytest_cache`, `test-results`, `.pyc`, and `.pyo` entries; sort every remaining relative file path; hash each UTF-8 file after normalizing line endings to LF; join records as `path + NUL + file_sha256` with LF separators; then SHA-256 the joined bytes.

The starting fixtures intentionally fail a named public reproduction while all unrelated public checks pass. This proves the task is live and prevents a silently repaired or broken baseline from entering a study.

The completed Astra calibration is recorded in [`run-manifest-2026-09-21.json`](run-manifest-2026-09-21.json) and [`results-2026-09-21.md`](results-2026-09-21.md). These tasks remain permanently unscored.
