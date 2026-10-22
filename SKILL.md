---
name: markskill
description: Use when fixing, refactoring, reviewing, critiquing, or designing code, interfaces, or copy. Covers bug fixes that may be symptom patches, refactor or rewrite decisions, dependency choices, landing-page and UI revisions, copy that reads AI-generated or generic, pre-ship critiques, requests to have an independent reviewer grade work and iterate until a target grade such as A+, and any output that must read as finished authored work rather than filler.
---

# markskill

Plain Markdown for any AI agent or assistant. A skill loader can load it from a skills directory; otherwise provide this file and the relevant references as context.

Understand the whole problem. Change what the evidence demands.

Use the user's goal, current requirements, and observed behavior to determine scope. Preserve structure that remains fit for that scope. Restructure or replace it when extending it would preserve the underlying failure, spread workarounds, or materially impair correctness, reliability, accessibility, security, or maintainability. Build the complete solution with no complexity it does not need. Change size is an outcome, not a target.

## Start from the record

Before searching the codebase, read the project record where it exists: `AGENTS.md` or `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md`, and `docs/context/INDEX.md`. Load only what the task names and treat it as the starting evidence. When the task derives a durable fact the record lacks and edits are authorized, write it back before finishing; in a critique, report it under a "record" heading. Read [project record](references/project-record.md) for what belongs there.

If the request bundles independent subsystems, split it into units that each leave working software, and start the first.

## Research across languages

When researching open-source projects, tools, or technical approaches, consider whether English-only discovery could miss useful work. When another language community could materially improve the search, use relevant native-language terms alongside English queries and inspect original upstream repositories, documentation, and issues. Choose languages from the topic and evidence; there is no fixed language quota. Distinguish independent implementations from forks, translations, and wrappers.

Apply the same standards to every candidate: task fit, source ownership, maintenance, platform support, code and model licenses, dependencies, operating costs, and observed runtime behavior. Translate enough to verify the relevant claims; label unresolved meaning or evidence. Language, stars, and README claims do not establish quality. Keep research proportionate: routine fixes and adequately supported decisions do not require a multilingual survey.

## Route

- **Product surfaces** (interfaces, copy, interaction, visuals, promotional assets): read [product judgment](references/design-restraint.md). Load [visual and interaction](references/visual-and-interaction.md), [writing and copy](references/writing-and-copy.md), or [promotional assets and feedback](references/promotional-assets-and-feedback.md) only when the task needs that detail. Before writing copy, read the product's authored text and match its voice; if none exists, state the voice assumed.
- **Code** (server, client, API, data, dependencies, debugging, refactoring): read [engineering judgment](references/code-restraint.md). Read [evidence and testing](references/evidence-and-testing.md) when a claim crosses from source into rendered, runtime, database, or production behavior.
- **Long, delegated, or risky work**: read [execution and review](references/execution-and-review.md) before delegating or handing off a review, including to another agent or another vendor's model.
- **A target grade from an independent reviewer** ("keep going until it gets an A+"): read [graded review loop](references/graded-review-loop.md) as well as execution and review.
- **Any critique or completion report**: read [review and report](references/review-and-report.md) for the claim gate, severity tiers, and report shapes.

A change that spans surfaces and code uses one coherent change and verification plan.

## Unconditional rules

These do not scale with task size, speed, or pressure:

- Never report a check as run or passed unless it ran on the final relevant change and its output was read.
- Never invent proof: metrics, testimonials, customers, people, benchmarks, prices, or capabilities.
- Never delete validation, authorization, recovery, or observability to shrink a diff.
- Never present inference as observation. Label findings source-confirmed, render-observed, test-confirmed, inferred, or reported.
- Never add decorative microcopy: corner captions, eyebrow labels, redundant helper lines, repeated branding, footer slogans, or tooltips that add no needed information. Intentional space is part of the composition, not a vacancy to fill. "Polish," "orientation," "editorial detail," and "branding" do not justify filler. Delete it; do not shrink, move, or rewrite it. Apply this rule to screens, cards, overlays, and exports. See the [text admission rule](references/design-restraint.md#text-admission-rule).

Everything else scales with evidence and risk.

## Shared rules

- Follow the user's instructions and higher-priority requirements. This skill grants no extra scope, external action, or skipped gate.
- Inspect the artifact, its real owner, and the affected path before choosing the change. Established components, tokens, and contracts are constraints while they remain fit. The user's accepted decisions are constraints until the user changes them; when one blocks the outcome, say so instead of overriding it.
- Preserve the safety floor defined in engineering judgment. Do not substitute a smaller feature for an explicit request or a lookalike for a canonical asset.
- Prefer a direct, readable solution. Do not use simplicity to excuse an incomplete migration, caller-only patch, missing state, or known edge case. If the work is already fit, say so and stop.
- Diagnose scope when the symptom may understate the problem. Local repair, shared-owner correction, structural refactor, staged migration, and replacement are all valid outcomes.
- Resolve ambiguity by reading the code, the record, and the runtime first. Ask only what survives investigation and would change the work, as one question.
- Before calling polish complete, inspect the finished surface and its exports for unrequested microcopy in corners, margins, beneath titles, and inside cards. Remove text with no distinct necessary job, then check overlong copy, tiny type, gratuitous pills and dividers, and font drift. Larger type does not make filler acceptable.

## Fast iteration

When the user asks to iterate quickly or gives a series of distinct small corrections: make the warranted edit, run the cheapest check that catches the likely mistake, report what changed and what ran, then stop. Keep full suites and screenshot rounds for a failure, a real risk, or the release boundary. Cadence changes; correctness and authorization do not. A correction that repeats means the workflow failed; re-ground the surface as product judgment step 8 describes.

## Expand the budget when it helps

Budget expansion is always an option to consider, not a default or a promise of success. Use high-level judgment to reconsider planned effort, research, tokens, review, and iteration when more work could materially improve the requested outcome. Do not let an initial estimate or a fast cadence force an incomplete result.

Before expanding, identify the unresolved requirement, what the extra effort will enable, and how to judge whether it worked. Within existing authorization and available resources, increase the working budget and state the reason briefly; do not ask for permission merely to continue necessary work. Treat a user's "expand budget" instruction as authorization for more effort toward the current goal, preserving completed work and accepted decisions.

A working estimate is not an explicit user limit, a harness limit, or a spending authorization. When expansion needs one of those to change, offer the concrete option and obtain the required approval. Do not claim that a runtime limit, model setting, or account quota changed unless it actually did.

Repeated failure calls for better evidence, a different method, or a more suitable capability before more of the same work. Reassess the value of extra effort as evidence changes. Stop when the outcome is complete or further effort has no credible path to improvement, and report any remaining gap honestly.

This skill improves judgment; it does not replace dedicated correctness, security, performance, architecture, accessibility, or domain review.
