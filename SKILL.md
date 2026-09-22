---
name: markskill
description: Use for restrained code changes or product design work. Route implementation, dependencies, and refactoring through the code path; route interfaces, copy, visuals, and artifacts through the design path. Apply proportionate verification and honest reporting, including fast iteration when the user asks for it.
---

# markskill

Make the smallest coherent change that serves the user's actual goal. Preserve the working product, its established choices, and the evidence needed to trust the result. Restraint is judgment about what earns its place, not a ban on particular styles, libraries, or amounts of code.

## Choose the path

- **Code:** For implementation, debugging, architecture, dependencies, and refactoring, read [references/code-restraint.md](references/code-restraint.md). Trace the behavior and its callers, fix the owning invariant, reuse existing capabilities, and keep necessary safeguards and regression evidence.
- **Design:** For layouts, interaction, copy, charts, promotional assets, and visual review, read [references/design-restraint.md](references/design-restraint.md). Ground the surface in its real content and design system, then use only the narrower references relevant to the task.
- **Both:** A product change often needs code and design judgment. Read both paths, but use one coherent change and verification plan. Do not run the design workflow as ceremony for an internal code fix or reduce a visual task to a linter result.

The design path routes to [visual and interaction](references/visual-and-interaction.md), [writing and copy](references/writing-and-copy.md), and [promotional assets and feedback](references/promotional-assets-and-feedback.md) when applicable. Read [evidence and testing](references/evidence-and-testing.md) when rendered or content claims need a clear evidence boundary.

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
