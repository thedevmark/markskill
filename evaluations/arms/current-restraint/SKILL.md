---
name: restraint
description: Use for restrained front-end and back-end product work. Preserve the product's intent, make the smallest coherent change at the correct owner, and verify only what the evidence supports.
---

# Restraint

Make the smallest coherent change that serves the user's actual goal. Preserve the working product, its established choices, and the evidence needed to trust the result. Restraint is judgment about what earns its place, not a ban on particular styles, libraries, or amounts of code.

## Front end

For interfaces, copy, interaction, visuals, and client-side behavior, preserve the product's established language and make the user's next action clear. Remove repetition and decorative structure that compete with the task. Keep real states, responsive behavior, accessibility, and canonical components intact.

Read [design restraint](references/design-restraint.md) for product surfaces. Load [visual and interaction](references/visual-and-interaction.md), [writing and copy](references/writing-and-copy.md), or [promotional assets and feedback](references/promotional-assets-and-feedback.md) only when the task needs that detail. When the work changes implementation, also apply [code restraint](references/code-restraint.md).

## Back end

For application logic, APIs, data, architecture, dependencies, debugging, and refactoring, trace the real behavior and its callers before changing it. Fix the narrowest owner of the broken invariant, reuse capabilities the product already has, and avoid speculative layers. Preserve validation, authorization, recovery, observability, compatibility, and the regression evidence needed to trust the change.

Read [code restraint](references/code-restraint.md) for implementation work. Read [evidence and testing](references/evidence-and-testing.md) when a claim crosses from source inspection into runtime, rendered, database, or production behavior.

When a product change spans both sections, use both with one coherent change and verification plan.

## Shared rules

- Follow the user's instructions and applicable higher-priority requirements. This skill does not grant permission for extra scope, external actions, or skipped gates.
- Inspect the current artifact and its real owner before changing it. Treat established components, tokens, product contracts, and accepted user decisions as constraints unless current evidence shows they have drifted.
- Preserve functionality, accessibility, truth, recovery, and security. Do not substitute a smaller feature for an explicit request or recreate a canonical asset with a convenient approximation.
- Prefer a direct, readable fix over speculative architecture or cosmetic complexity. If the current work is already clear and fit for purpose, say so and stop.
- Keep claims tied to inspected evidence. A clean test, build, or screenshot proves only what it actually exercised.

## Fast iteration mode

Use this cadence when the user asks to iterate quickly, says to make the fix now, or gives repeated small corrections to an active artifact:

1. Make the concrete scoped edit and preserve the existing decisions that still apply.
2. Run the cheapest check that can catch a likely mistake in that edit. Use focused behavioral coverage when the change is nontrivial; avoid a full suite or repeated screenshot rounds after every small revision unless the risk, a failure, or a required gate calls for them.
3. Report what changed and what was actually checked, then stop that iteration. Keep broader release checks for the release boundary or an accumulated change that warrants them.

Fast iteration changes cadence, not correctness or authorization. Fix known defects before calling the scoped work done, and never report an unrun check as passed.

## Review and report

- Separate source facts, rendered observations, and inference. Name concrete effects and corrections rather than guessing who made the artifact.
- Prioritize truth, task, safety, and access failures; then ownership, complexity, and hierarchy; then local polish. Do not let decorative cleanup displace a broken job.
- For a critique, report the few findings that would most improve the work, with location and correction. For a revision, state what changed, what was preserved, what ran, and any material gap.
- Keep the response easy to scan. Lead with the result and include only the detail the reader needs to assess it.

Use subagents only for bounded, independent work where delegation is authorized and the result can be checked against source or artifacts. Context-heavy or tightly coordinated decisions stay in one thread.
