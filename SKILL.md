---
name: markskill
description: Use when fixing, refactoring, reviewing, critiquing, or designing code, interfaces, or copy. Covers bug fixes that may be symptom patches, refactor or rewrite decisions, dependency choices, landing-page and UI revisions, copy that reads AI-generated or generic, pre-ship critiques, and any output that must read as finished authored work rather than filler.
---

# markskill

Plain Markdown for any AI agent or assistant. A skill loader can load it from a skills directory; otherwise provide this file and the relevant references as context.

Understand the whole problem. Change what the evidence demands.

Use the user's goal, current requirements, and observed behavior to determine scope. Preserve structure that remains fit for that scope. Restructure or replace it when extending it would preserve the underlying failure, spread workarounds, or materially impair correctness, reliability, accessibility, security, or maintainability. Build the complete solution with no complexity it does not need. Change size is an outcome, not a target.

## Start from the record

Before searching the codebase, read the project record where it exists: `AGENTS.md` or `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md`, and `docs/context/INDEX.md`. Load only what the task names and treat it as the starting evidence. When the task derives a durable fact the record lacks and edits are authorized, write it back before finishing; in a critique, report it under a "record" heading. Read [project record](references/project-record.md) for what belongs there.

If the request bundles independent subsystems, split it into units that each leave working software, and start the first.

## Route

- **Product surfaces** (interfaces, copy, interaction, visuals, promotional assets): read [product judgment](references/design-restraint.md). Load [visual and interaction](references/visual-and-interaction.md), [writing and copy](references/writing-and-copy.md), or [promotional assets and feedback](references/promotional-assets-and-feedback.md) only when the task needs that detail. Before writing copy, read the product's authored text and match its voice; if none exists, state the voice assumed.
- **Code** (server, client, API, data, dependencies, debugging, refactoring): read [engineering judgment](references/code-restraint.md). Read [evidence and testing](references/evidence-and-testing.md) when a claim crosses from source into rendered, runtime, database, or production behavior.
- **Long, delegated, or risky work**: read [execution and review](references/execution-and-review.md) before delegating or handing off a review, including to another agent or another vendor's model.
- **Any critique or completion report**: read [review and report](references/review-and-report.md) for the claim gate, severity tiers, and report shapes.

A change that spans surfaces and code uses one coherent change and verification plan.

## Unconditional rules

These do not scale with task size, speed, or pressure:

- Never report a check as run or passed unless it ran on the final relevant change and its output was read.
- Never invent proof: metrics, testimonials, customers, people, benchmarks, prices, or capabilities.
- Never delete validation, authorization, recovery, or observability to shrink a diff.
- Never present inference as observation. Label findings source-confirmed, render-observed, test-confirmed, or inferred.

Everything else scales with evidence and risk.

## Shared rules

- Follow the user's instructions and higher-priority requirements. This skill grants no extra scope, external action, or skipped gate.
- Inspect the artifact, its real owner, and the affected path before choosing the change. Established components, tokens, and contracts are constraints while they remain fit. The user's accepted decisions are constraints until the user changes them; when one blocks the outcome, say so instead of overriding it.
- Preserve the safety floor defined in engineering judgment. Do not substitute a smaller feature for an explicit request or a lookalike for a canonical asset.
- Prefer a direct, readable solution. Do not use simplicity to excuse an incomplete migration, caller-only patch, missing state, or known edge case. If the work is already fit, say so and stop.
- Diagnose scope when the symptom may understate the problem. Local repair, shared-owner correction, structural refactor, staged migration, and replacement are all valid outcomes.
- Resolve ambiguity by reading the code, the record, and the runtime first. Ask only what survives investigation and would change the work, as one question.
- Check the finished surface for overlong copy, run-on sentences, tiny text, gratuitous pills and dividers, and fonts that drift from the product before calling polish complete.

## Fast iteration

When the user asks to iterate quickly or gives a series of distinct small corrections: make the warranted edit, run the cheapest check that catches the likely mistake, report what changed and what ran, then stop. Keep full suites and screenshot rounds for a failure, a real risk, or the release boundary. Cadence changes; correctness and authorization do not. A correction that repeats means the workflow failed; re-ground the surface as product judgment step 8 describes.

This skill improves judgment; it does not replace dedicated correctness, security, performance, architecture, accessibility, or domain review.
