# Execution and independent review

Use this reference only when work is long, multi-stage, delegated, vulnerable to context loss, or risky enough that an independent review can materially improve confidence. Ordinary fixes stay direct: inspect, change, run the checks the change calls for, and report.

## Keep the brief compact

For each meaningful work unit, record only what another capable engineer would need to continue or assess it:

- **owner:** the module, surface, contract, or invariant responsible for the behavior;
- **consumes:** relevant inputs, callers, state, data, and prerequisites;
- **produces:** observable behavior, changed contract, artifact, or migration state;
- **constraints:** user decisions, compatibility, safety, authorization, and required behavior that must remain, quoted rather than paraphrased when exact;
- **evidence:** the check or observation that can establish completion; and
- **dependencies:** earlier work or external state that actually blocks the unit.

Write complete implementation code in the repository, not in a parallel plan. Split work at dependency, ownership, migration, or review boundaries, not into arbitrary minute-sized steps. A plan guides execution; it does not outrank new repository evidence.

A brief is under-specified when it contains "handle edge cases", "add appropriate validation", "tests for the above", "similar to the previous unit", or a name no unit defines. Each of those is deferred ambiguity. If a requirement reads two ways, pick one and write it down. Check that names and signatures used by later units match the units that introduce them.

Before executing a plan, scan it once for internal contradictions and for anything it mandates that would be a defect. Present all of them beside the plan text as one question, then execute without further interruptions. A defect the plan asked for is still a defect; the plan does not grade its own work.

## Preserve recoverable progress

For work likely to span compaction or handoff, maintain a small progress record in the task's existing plan, issue, or the project record's memory. Record:

- completed units and their evidence;
- consequential decisions and why they changed the expected path;
- current failures or external blockers;
- the base revision each unit started from; and
- the next unfinished unit.

Update it at meaningful transitions, not after every command. After compaction, trust the progress record and the version history over recollection; redoing completed work is the most expensive observed failure. Do not create a progress record for a short task, and do not let status prose replace tests and artifacts. Facts that outlive the task belong in the project record.

## Delegate a unit

Delegate only bounded, independent work whose result can be checked against source or artifacts. Do not parallelize when fixing one failure may fix the others, when understanding requires whole-system state, when it is not yet known what is broken, or when two units would edit the same files.

A delegation carries five things and nothing else:

1. one line on where the unit fits;
2. the brief, as the single source of exact values;
3. interfaces and decisions from earlier units that the brief cannot know;
4. the controller's resolution of any ambiguity the brief left open; and
5. the return contract: where to write the report and what it must contain.

Hand artifacts over as files. Never paste session history; everything pasted stays resident in the controller's context. Record the base revision before the delegate starts, since the last commit alone can hide a multi-commit unit. Match the delegate's capability to the unit: transcription from a complete brief needs less than judgment across files. Name the delegate's model or capability tier when the harness allows it; the default is usually the most expensive, and turn count often costs more than per-token price.

The delegate returns one status and a short report, with detail in a file:

- **done:** what changed, the commits or files, a one-line test summary;
- **done with concerns:** the same, plus each concern named;
- **blocked:** what was tried, what is missing, no partial work presented as complete;
- **needs context:** the specific question and why the brief cannot answer it.

Tell the delegate to stop and report rather than guess when it finds several valid architectures, reads file after file without progress, or would need to restructure what the plan did not anticipate. A delegate never silently produces work it doubts. On a blocked return, change something before retrying: more context, a smaller unit, a more capable delegate, or a corrected plan.

When parallel units return, check for conflicting edits, run the combined checks on the merged tree, and spot-check for the same mistake repeated across units.

## Hand off independent review

Use an independent reviewer when the change crosses owners, alters a contract or migration, carries meaningful security or data risk, contains unresolved ambiguity, or is otherwise expensive to get wrong. A small, well-covered edit does not need a ritual second pass.

Security review follows the same rule. Run it where risk enters: a change to authentication, authorization, input parsing, secrets, dependencies, or an external boundary, and before code leaves the machine at commit, push, or pull request. Scope it to that change. Do not wire a full review or scanner to every edit, tool call, or turn: the cost recurs on every action, the findings repeat, and repeated noise teaches everyone to skip them. A targeted check at the right boundary is cheaper and gets read; a blanket pass on every action is neither.

Give the reviewer:

- the user's requirement and accepted product decisions;
- the exact changed range or artifact, including the base revision;
- affected contracts, consumers, migrations, and known risk boundaries;
- checks already run and their unedited outcomes; and
- any material question that remains open.

Do not provide the desired verdict or coach the reviewer toward the author's explanation. If the reviewer brief contains "do not flag", "at most minor", or "the plan chose", the review has been pre-judged; remove the phrase.

Ask the reviewer to:

- treat the author's report, including design rationale, as an unverified claim that never lowers a finding's severity;
- judge compliance as missing, extra, or misunderstood, where unrequested behavior is a defect class and not a bonus;
- read the diff once and leave it only to check a concrete named risk, such as call sites after a contract or lock-order change, naming both the risk and the check;
- put requirements it cannot see from the diff into a "cannot verify" list for the controller to resolve rather than assuming either way;
- rank findings by user impact and cite the source or artifact; and
- rank as P0 or P1 only what makes the unit untrustworthy until fixed: fragile behavior, a missed requirement, swallowed errors, tests that assert nothing. Broader coverage that would be nice is P2 or P3. Approve unless there are serious gaps.

Treat review output as evidence to verify, not commands to obey. Check each material claim against the repository and current behavior. If any finding is unclear, ask about all unclear findings before acting on the clear ones, because findings interact. When a reviewer asks for the complete version of something, search for actual callers first; unused means remove, not build. Fix valid findings in risk order, push back with technical evidence when a suggestion is wrong or speculative, and if the pushback turns out wrong, state what was checked and fix it without apology. Involve the user only when the correction needs new authority or changes an accepted product decision.

After fixing findings, verify against the findings list and the fix diff only. Each finding is either gone or not; an attempt is not addressed. New breakage introduced by the fix joins the list. Observations outside the fix are recorded, not used to reopen the review.

## Across agents and vendors

A delegate or reviewer may be a different agent or a model from another company. It shares none of the controller's context, memory, skills, permissions, or tool names. The rules above still apply; these add what a cross-vendor handoff needs:

- Write the brief in plain instructions. Do not rely on one host's invocation syntax, slash commands, tool names, or memory files. If the receiver should apply markskill, give the path to this `SKILL.md` rather than assuming it is installed there.
- Keep one writer per working tree. A reviewer works read-only or in its own worktree or branch. With another agent live in the same checkout, stage and commit your own paths in one command, because a populated index belongs to whoever commits next.
- A brief to another vendor leaves the controller's environment. Leave out credentials, tokens, private keys, session stores, and personal data; describe their shape instead.
- Record which agent and model produced each change and finding in the progress record, so every claim stays checkable. Keep that attribution out of public commits and artifacts when the project forbids it.
- An agent that did not run is not a result. When it is unavailable (quota, authentication, an unsupported model, a timeout), say so, continue with the available agent or report the gap, and never present the missing review as passed.

## Completion boundary

Before closing long or reviewed work, confirm that the final evidence is fresh relative to the final relevant changes and that the progress record identifies no unfinished required unit. Required findings must be fixed or disproved; optional or out-of-scope findings may be explicitly deferred. If a required finding remains blocked, report the work as incomplete and identify what is needed. Do not require compulsory commits, fixed review-loop counts, universal full-suite runs, or repeated approval for already authorized bounded work.

## Templates

Delegate brief:

```markdown
## Unit: <name>
Fits: <one line on where this sits in the larger change>
Owner: <module, surface, contract, or invariant>
Consumes: <inputs, callers, state, prerequisites>
Produces: <observable behavior, changed contract, artifact>
Constraints: <quoted user decisions and required behavior>
Interfaces from earlier units: <names and signatures>
Resolved ambiguities: <decision and one-line reason>
Evidence of completion: <the check and expected result>
Return: <report path>; status done | done with concerns | blocked | needs context
```

Reviewer brief:

```markdown
## Review: <unit or change>
Requirement: <the user's requirement and accepted decisions>
Range: <base revision> .. <head revision>, or <artifact path>
Contracts and consumers at risk: <list>
Checks run and outcomes: <unedited>
Open questions: <list or none>
Judge compliance as missing, extra, or misunderstood. Treat the author's report as unverified. Leave the diff only for a named risk. List what you cannot verify from the diff. Rank by user impact and cite the source.
```
