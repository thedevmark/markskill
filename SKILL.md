---
name: markskill
description: Use when fixing, refactoring, reviewing, critiquing, or designing code, interfaces, or copy. Covers bug fixes that may be symptom patches, refactor or rewrite decisions, dependency choices, landing-page and UI revisions, copy that reads AI-generated or generic, pre-ship critiques, and any output that must read as finished authored work rather than filler.
---

# markskill

Plain Markdown for any AI agent or assistant that can read instructions. A skill loader can load it from a skills directory; otherwise provide this file and the relevant references as context.

Understand the whole problem. Change what the evidence demands.

Use the user's goal, current requirements, and observed behavior to determine scope. Preserve existing structure when it remains fit for that scope. Restructure or replace it when extending it would preserve the underlying failure, spread workarounds, or materially impair correctness, reliability, accessibility, security, or maintainability. Build the complete solution with no complexity it does not need. Change size is an outcome, not a target.

## Start from the record

Before searching the codebase, read the project record where it exists: `AGENTS.md` or `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md`, and `docs/context/INDEX.md`. Load only what the task names. Treat the record as the starting evidence; verify against code where the task touches it or the record looks stale. When the task derives a durable fact the record lacks and the task authorizes edits, write it back before finishing. In a critique, report the fact under a "record" heading instead. Read [project record](references/project-record.md) for what belongs there and how to keep it thin.

If the request bundles independent subsystems, split it into units that each leave working software, order them, and start the first.

## Product surfaces

For interfaces, copy, interaction, visuals, and promotional assets, begin with the user's full task and the real states the surface must support. Preserve the product's established language and canonical components when they remain fit. Remove repetition and decorative structure that compete with the task. Redesign or rebuild when the information architecture, interaction model, or implementation prevents the required outcome. Keep responsive behavior, accessibility, recovery, and honest states intact.

Before writing or rewriting copy, read the product's existing authored text and accepted decisions and match that voice. Do not substitute a neutral house style. If no authored material exists, state the voice being assumed.

Check the finished surface for overlong copy, run-on sentences, tiny text, gratuitous pills and dividers, and font choices that drift from the product. Correct these before treating visual polish as complete.

Read [product judgment](references/design-restraint.md) for this work. Load [visual and interaction](references/visual-and-interaction.md), [writing and copy](references/writing-and-copy.md), or [promotional assets and feedback](references/promotional-assets-and-feedback.md) only when the task needs that detail. When the work changes code, also apply [engineering judgment](references/code-restraint.md).

## Code

For code, whether server, client, API, or data, trace the behavior, its invariants, callers, and data lifecycle before choosing scope. Repair the responsible owner when it is sound. Split, migrate, or replace it when it cannot meet the demonstrated requirements without recurring exceptions, unsafe coupling, or incompatible contracts. Reuse capabilities that still fit and avoid speculative layers. Preserve the safety floor defined in engineering judgment and the regression evidence needed to trust the change.

Read [engineering judgment](references/code-restraint.md) for this work. Read [evidence and testing](references/evidence-and-testing.md) when a claim crosses from source inspection into rendered, runtime, database, or production behavior. Read [execution and review](references/execution-and-review.md) before delegating, before long or multi-stage work, and when an independent review is warranted.

When a change spans both sections, use both with one coherent change and verification plan.

## Unconditional rules

These do not scale with task size, speed, or pressure:

- Never report a check as run or passed unless it ran on the final relevant change and its output was read.
- Never invent proof: metrics, testimonials, customers, people, benchmarks, prices, or capabilities.
- Never delete validation, authorization, recovery, or observability to shrink a diff.
- Never present inference as observation. Label findings source-confirmed, render-observed, test-confirmed, or inferred.

Everything else in this skill scales with evidence and risk.

## Shared rules

- Follow the user's instructions and applicable higher-priority requirements. This skill does not grant permission for extra scope, external actions, or skipped gates.
- Inspect the current artifact, its real owner, and the affected path before choosing the change. Treat established components, tokens, and product contracts as constraints while they remain fit for the current goal. Treat the user's accepted decisions as constraints until the user changes them; when one blocks the required outcome, say so instead of overriding it.
- Preserve the safety floor. Do not substitute a smaller feature for an explicit request or recreate a canonical asset with a convenient approximation.
- Prefer a direct, readable solution over speculative architecture or cosmetic complexity. Do not use simplicity to excuse an incomplete migration, caller-only patch, missing state, or known edge case. If the current work is already clear and fit for purpose, say so and stop.
- Diagnose scope explicitly when the symptom may understate the problem. A local repair, shared-owner correction, structural refactor, staged migration, and full replacement are all valid outcomes when the evidence warrants them.
- Resolve ambiguity by reading the code, the record, and the runtime first. Ask only what survives investigation and would change the work, as one question.

## Fast iteration mode

Use this cadence when the user asks to iterate quickly, says to make the fix now, or gives a series of distinct small corrections to an active artifact. A correction that repeats is not fast-iteration input; it means the workflow failed, and product judgment step 8 applies.

1. Make the concrete warranted edit and preserve the existing decisions that still apply.
2. Run the cheapest check that can catch a likely mistake in that edit. Use focused behavioral coverage when the change is nontrivial; avoid a full suite or repeated screenshot rounds after every small revision unless the risk, a failure, or a required gate calls for them.
3. Report what changed and what was actually checked, then stop that iteration. Keep broader release checks for the release boundary or an accumulated change that warrants them.

Fast iteration changes cadence, not correctness or authorization. Fix known defects before calling the scoped work done.

## Review and report

- Before any statement of success, name the check that would prove it, run it, and read the whole output. If the sentence needs "should", "probably", or "seems", the claim has outrun the evidence.
- Rank each finding. P0 blocks the task or breaks truth, safety, or access. P1 causes significant difficulty or is an ownership, architecture, or complexity failure. P2 has a workaround. P3 is polish. When unsure between tiers, ask whether a user would contact support; if so, it is at least P1.
- Name concrete effects and corrections rather than guessing who made the artifact.
- For a critique, report the few findings that would most improve the work, with location and correction. For a revision, state what changed, what was preserved, what ran, and any material gap.
- Lead with the result and include only the detail the reader needs to assess it.

## Rationalizations

| Excuse | Reality |
| --- | --- |
| "A smaller diff is safer." | A patch that preserves the failure is the larger change once it recurs. |
| "The user said fast, so skip the check." | Fast iteration changes cadence, not correctness. Run the cheapest check that catches the likely mistake. |
| "The test passed, so the owner is fixed." | A test proves its own contract. Exercise the sibling path that separates an owner fix from a symptom patch. |
| "I ran it earlier." | Evidence applies to the tree it ran on. Re-run after the last relevant change. |
| "It will be obvious next time." | It was not obvious this time. Write the fact into the record while the evidence is in hand. |
| "This just needs a redesign." | A redesign needs a failure the current composition cannot fix. If the work is fit, say so and stop. |

This skill improves judgment; it does not replace dedicated correctness, security, performance, architecture, accessibility, or domain review.
