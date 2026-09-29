---
name: urteilskraft
description: Use for front-end and back-end product work that needs evidence-led scope judgment. Understand the whole problem, preserve what remains fit, restructure or rebuild what does not, and verify only what the evidence supports.
---

# Urteilskraft

Understand the whole problem. Change what the evidence demands.

Use the user's goal, current requirements, and observed behavior to determine scope. Preserve existing structure when it remains fit for that scope. Restructure or replace it when extending it would preserve the underlying failure, spread workarounds, or materially impair correctness, reliability, accessibility, security, or maintainability. Prefer the least unnecessary complexity within a complete solution. Change size is an outcome, not a target.

## Front end

For interfaces, copy, interaction, visuals, and client-side behavior, begin with the user's full task and the real states the surface must support. Preserve the product's established language and canonical components when they remain fit. Remove repetition and decorative structure that compete with the task. Redesign or rebuild the composition when its information architecture, interaction model, or implementation prevents the required outcome. Keep responsive behavior, accessibility, recovery, and honest states intact.

Read [design restraint](references/design-restraint.md) for product surfaces. Load [visual and interaction](references/visual-and-interaction.md), [writing and copy](references/writing-and-copy.md), or [promotional assets and feedback](references/promotional-assets-and-feedback.md) only when the task needs that detail. When the work changes implementation, also apply [code restraint](references/code-restraint.md).

## Back end

For application logic, APIs, data, architecture, dependencies, debugging, and refactoring, trace the real behavior, invariants, callers, data lifecycle, and operational constraints before choosing a scope. Repair the responsible owner when it is sound. Split, migrate, or replace it when it cannot meet the demonstrated requirements without recurring exceptions, unsafe coupling, or incompatible contracts. Reuse capabilities that still fit and avoid speculative layers. Preserve validation, authorization, recovery, observability, compatibility, and the regression evidence needed to trust the change.

Read [code restraint](references/code-restraint.md) for implementation work. Read [evidence and testing](references/evidence-and-testing.md) when a claim crosses from source inspection into runtime, rendered, database, or production behavior.

When a product change spans both sections, use both with one coherent change and verification plan.

## Shared rules

- Follow the user's instructions and applicable higher-priority requirements. This skill does not grant permission for extra scope, external actions, or skipped gates.
- Inspect the current artifact, its real owner, and the affected path before choosing the change. Treat established components, tokens, product contracts, and accepted user decisions as evidence and constraints only while they remain fit for the current goal.
- Preserve functionality, accessibility, truth, recovery, and security. Do not substitute a smaller feature for an explicit request or recreate a canonical asset with a convenient approximation.
- Prefer a direct, readable solution over speculative architecture or cosmetic complexity. Do not use simplicity to excuse an incomplete migration, caller-only patch, missing state, or known edge case. If the current work is already clear and fit for purpose, say so and stop.
- Diagnose scope explicitly when the symptom may understate the problem. A local repair, shared-owner correction, structural refactor, staged migration, and full replacement are all valid outcomes when the evidence warrants them.
- Keep claims tied to inspected evidence. A clean test, build, or screenshot proves only what it actually exercised.

## Fast iteration mode

Use this cadence when the user asks to iterate quickly, says to make the fix now, or gives repeated small corrections to an active artifact:

1. Make the concrete warranted edit and preserve the existing decisions that still apply.
2. Run the cheapest check that can catch a likely mistake in that edit. Use focused behavioral coverage when the change is nontrivial; avoid a full suite or repeated screenshot rounds after every small revision unless the risk, a failure, or a required gate calls for them.
3. Report what changed and what was actually checked, then stop that iteration. Keep broader release checks for the release boundary or an accumulated change that warrants them.

Fast iteration changes cadence, not correctness or authorization. Fix known defects before calling the scoped work done, and never report an unrun check as passed.

## Review and report

- Separate source facts, rendered observations, and inference. Name concrete effects and corrections rather than guessing who made the artifact.
- Prioritize truth, task, safety, and access failures; then ownership, architecture, complexity, and hierarchy; then local polish. Do not let decorative cleanup or diff size displace a broken job.
- For a critique, report the few findings that would most improve the work, with location and correction. For a revision, state what changed, what was preserved, what ran, and any material gap.
- Keep the response easy to scan. Lead with the result and include only the detail the reader needs to assess it.

Use subagents only for bounded, independent work where delegation is authorized and the result can be checked against source or artifacts. Context-heavy or tightly coordinated decisions stay in one thread.

This skill improves judgment; it does not replace dedicated correctness, security, performance, architecture, accessibility, or domain review. Its claims must stay within the task families and harnesses on which it has actually been evaluated.
