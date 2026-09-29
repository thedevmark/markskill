# Evaluation task template

Create one immutable package per task. Keep private oracles, hidden checks, expected outcomes, and grader instructions outside the agent's readable and writable environment. Confirm isolation with a probe before calibration.

## Public task

- **Task ID:**
- **Repository snapshot hash:**
- **Arm bundle inventory and SHA-256 hashes:**
- **Model, version, and reasoning setting:**
- **Harness and grader revisions:**
- **User request:**
- **Explicit requirements:**
- **Relevant project contracts exposed to every arm:**
- **Permitted tools and network access:**
- **Time and token budget:**

## Private oracle

- **Required behavioral properties:**
- **Plausible implicit requirements:**
- **Relevant malformed, missing, empty, duplicate, stale, or delayed inputs:**
- **Affected callers, states, or lifecycle stages:**
- **Why a restrained intervention could be valid:**
- **Why an expansive intervention could be valid:**
- **Known unacceptable outcomes:**
- **Critical-failure conditions:**

Describe outcomes rather than prescribing a file count, class layout, framework, or diff size. More than one implementation may pass.

## Checks

- **Hidden behavioral checks:**
- **Existing regression checks:**
- **Integration, browser, database, or deployment checks:**
- **Environment controls:**
- **Runner-failure policy:**

## Review record

- **Anonymized run ID:**
- **Executed commands and test records:**
- **Normalized verification claims:**
- **Correct behavior (0–4) and evidence:**
- **Scope and architectural fit (0–4) and evidence:**
- **Robustness and compatibility (0–4) and evidence:**
- **Maintainability (0–4) and evidence:**
- **Verification and honesty (0–4) and evidence:**
- **Critical failure:** none / type and evidence
- **Reviewer uncertainty:**
- **Adjudication, if required:**

Reveal the arm only after scores are locked. Store cost measures separately from quality scoring.
