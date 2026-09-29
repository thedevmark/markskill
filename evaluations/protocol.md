# markskill evaluation protocol

This protocol specification describes how to test whether the framework improves engineering judgment. It is not an executable benchmark until its immutable arm bundles, task packages, isolated runner, and graders exist. It is designed to detect both failure modes: unnecessary expansion and incomplete under-scoping. The first study is a falsification pilot, not proof that the framework is safe for every decision.

## Questions

1. Does the framework solve more of the actual task correctly?
2. Does it choose appropriate scope, including larger structural changes when warranted?
3. Are any improvements worth the added review, execution, and maintenance costs?

The initial claim boundary is implementation and debugging in the tested model and harness. Design, research, writing, other models, and other harnesses require their own evidence.

## Frozen arms

Hash each instruction bundle before calibration ends. Do not edit an arm after scored runs begin.

- **Neutral:** normal repository, safety, correctness, and verification instructions with no general implementation philosophy.
- **Current Restraint:** the exact pre-markskill installed skill bundle archived under [`arms/current-restraint/`](arms/current-restraint/) and identified in the run manifest rather than inferred from repository `HEAD`.
- **markskill candidate:** the revised skill in this repository. Historical manifests retain the `urteilskraft` arm identifier and bundle path so completed calibration runs remain reproducible.

Each arm receives the same model, reasoning setting, tools, permissions, repository snapshot, task, budget, and verification requirements. Use fresh processes and isolated configuration directories. Record the instructions actually loaded. An agent that has already read one arm cannot be reused as another arm.

Before calibration, create a run manifest containing the complete file inventory and SHA-256 hash of every arm bundle, the model and version, fixed reasoning setting, harness revision, repository snapshot hashes, grader revision, and task-package identifiers. Begin with [`run-manifest.example.json`](run-manifest.example.json) and validate it with `python evaluations/validate_manifest.py <manifest> --strict` before a scored run. Missing or substituted bundles invalidate the comparison.

## Study shape

Run four unscored calibration tasks, one per task family as practical. Repair the harness and graders, freeze them, and exclude calibration output from the result.

The first scored pilot is:

- 12 previously unseen tasks;
- three arms;
- three repetitions per arm;
- 108 scored runs in total.

Repetitions reveal instability but do not become independent tasks. Aggregate repetitions within a task before comparing paired task results.

Use six contrasting pairs across at least three realistic repositories:

| Pair | Restraint is warranted | Expansion is warranted |
| --- | --- | --- |
| Ownership | One caller has legitimately different semantics | Several callers share a broken invariant |
| Architecture | Existing owner fits; a local repair is complete | Existing abstraction causes recurring exceptions or workarounds |
| Dependencies | Platform or installed capability fully meets the contract | A maintained dependency is justified by parsing, compatibility, security, or rich interaction |
| Front end | Repetition can be removed without changing the interaction | Keyboard, responsive, recovery, or richer interaction requires more implementation |
| Data lifecycle | A bounded operation is sufficient | Concurrency, retries, transactions, migration, or durability requires added structure |
| Scope | Nearby defects are unrelated and unauthorized | The reported symptom understates changes required across the authorized workflow |

Where plausible, include missing, empty, malformed, duplicate, stale, and delayed inputs. Structural task oracles define required properties, not a preferred class layout or target file count.

## Task package

Every task follows [`task-template.md`](task-template.md) and contains:

- a frozen repository snapshot and realistic user request;
- explicit requirements and relevant existing contracts;
- a private inventory of plausible implicit requirements;
- hidden behavioral checks outside the agent's readable and writable environment;
- integration or browser checks where unit tests cannot establish the outcome;
- a rationale for why a local repair, structural change, or more than one approach could be valid; and
- known unacceptable outcomes such as lost behavior, a caller-only patch, unnecessary rewrite, unsafe input handling, or incomplete migration.

Tasks must not announce their intended scope. Prefer bounded historical defects and changes. Someone other than the skill author reviews expected outcomes before scoring.

## Scoring

Use a 0–4 anchored score in each dimension:

| Dimension | Weight | Evidence |
| --- | ---: | --- |
| Complete, correct behavior | 35% | Required outcomes, existing contracts, and hidden boundaries work |
| Scope and architectural fit | 25% | The change reaches the cause and affected paths without unrelated expansion |
| Robustness and compatibility | 20% | Relevant failure, recovery, concurrency, accessibility, and deployment constraints hold |
| Maintainability | 10% | Ownership, readability, changeability, dependencies, and migration structure fit the need |
| Verification and honesty | 10% | Checks exercise changed behavior and claims match their coverage |

Anchors: **0** failed or harmful; **1** substantial missing work; **2** partial success with a material weakness; **3** meets the task and relevant constraints; **4** unusually clear, complete, and well-supported without unnecessary complexity.

Security regression, data loss, a missing central requirement, fabricated verification, or an irrecoverably incomplete migration is a critical failure outside the weighted average. Elegance cannot compensate for it.

Record latency, tool calls, tokens, changed lines, touched files, and dependencies as costs and diagnostic evidence, not quality proxies. A 300-line migration may correctly beat a 12-line patch.

## Blinding and controls

Run hidden checks automatically in a separate grading process or container. Before calibration, use a probe task to confirm that the agent cannot list or read private oracles, hidden tests, expected outcomes, or grader instructions. Give the agent only public contracts and public checks.

The included WSL runner uses a fresh user, mount, and PID namespace per run; copies in one public task and at most one frozen arm; mounts controller output separately; and hides Windows drives plus the host home before Codex starts. Run `isolation_probe.sh` against a controller-owned canary before relying on that boundary. This is a local calibration harness, not a general-purpose hostile-code sandbox.

Two independent reviewers score anonymized diffs using the task context, executed command and test records, and a normalized list of the agent's substantive verification claims. Hide arm names, presentation style, and cost totals until quality scores are locked; do not hide the claims needed to assess verification honesty. Reviewers cite evidence for deductions, and material disagreement goes to adjudication. Model-only judging is provisional, even when the graders agree.

- Randomize arm execution order.
- Predeclare treatment of timeouts, incomplete work, and runner failures.
- Keep private oracles, hidden tests, expected outcomes, and scoring rules outside the agent's readable and writable environment.
- Do not reward tests that merely mirror the implementation.
- Permit added code and temporary migration structure when justified.
- Preserve prompts, instruction hashes, diffs, commands, failures, test output, and reviewer rationales after removing secrets.

## Decisions

Predeclare five points on the 100-point quality score as the initial practical improvement threshold. Report paired per-task differences and failure patterns; with 12 tasks, do not hide behind one significance value.

- **Reject or revise:** a reproducible new critical failure, systematic under-scoping, systematic unnecessary restructuring, or material regression in a task family.
- **Provisional benefit:** meaningful improvement across task families, no material correctness loss, and no observed new critical failure.
- **Inconclusive:** uncertainty still permits both improvement and material harm; expand the holdout.
- **Prefer neutral:** the instructions add no meaningful quality while adding material cost or burden.

Stop a harmful arm when a critical regression reproduces on a fresh run, retaining the failure in results. Do not stop early because favorable averages appear. Limit prompt revisions to two cycles before changing the task set.

A provisional winner must pass a fresh 12-task holdout with the same repetitions and frozen harness. Then compare it in shadow mode on upcoming real tasks and record later rework and missed requirements. The strongest honest conclusion remains narrow: this version improved these task families under this model and harness, with these observed weaknesses.
