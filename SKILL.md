---
name: restraint-framework
description: Restraint framework for coding agents, applied to implementation, everything they ship that a human sees, and every claim they make about verification - code, dependencies, abstractions, interfaces, dashboards, landing pages, promotional assets, charts, docs, interface copy, and marketing copy, across creating, fixing, critiquing, revising, and reporting. Use when adding, reviewing, simplifying, or refactoring code; choosing dependencies or architecture; revising UI, layouts, visualizations, or copy; when work feels over-engineered, generic, AI-made, over-carded, over-written, decorative, unclear, or templated; or when the user asks for restraint, anti-slop, YAGNI, minimal implementation, taste, hierarchy, accessibility, clarify, distill, harden, polish, bolder, quieter, or surgical refinement.
---

# Restraint Framework

Make the artifact specific to its subject and easy to use. Treat slop as an accumulation of unearned defaults, not a list of forbidden fonts, colors, words, or components.

## Protect the real product

- Inspect the current artifact, real content, style guide, `DESIGN.md` or equivalent design-decision document, tokens, nearby components, and user references before changing anything.
- Treat established tokens and component contracts as normative unless the implementation proves they have drifted. Treat prose rationale as context, not permission to ignore the rendered product.
- Preserve functionality, props, state, routes, accessibility, copy meaning, authored flows, and brand-defining components unless the user explicitly changes the scope.
- Never recreate an existing product or brand component with a hand-built CSS, HTML, canvas, or SVG approximation. Reuse the canonical component or asset. When runtimes cannot share it directly, derive the smallest faithful port from the canonical source and add a parity check against its anatomy, states, typography, and behavior.
- If the canonical component or asset cannot be reused or faithfully ported, state the limitation and omit the imitation. Do not quietly ship a lookalike.
- Prefer the existing design system. Treat deviations as deliberate decisions that need a product reason.
- Do not invent metrics, testimonials, customer names, outcomes, confidence, provenance, or product capabilities to fill a layout.
- If the work is already distinctive and clear, say so and stop. Do not manufacture a redesign.

## Choose the operating mode

- **Create:** Ground the brief, choose one direction, then build and verify it.
- **Critique:** Report the few highest-leverage problems and stop. Do not edit.
- **Revise:** Audit first, make the minimum effective changes, then re-audit the result.

Do not guess whether AI made an artifact. Name observable patterns and their effects.

## Set the surface mode and refinement intent

Choose the mode from the surface the user is looking at, not the product category:

- **Persuade:** help a visitor decide and act. Landing pages, campaigns, pricing, and product marketing may carry more voice, but every promise still needs evidence.
- **Operate:** help a user complete a task. App UI, dashboards, forms, editors, and settings prioritize scanability, stable terms, honest state, and predictable interaction.
- **Read:** help a reader understand. Documentation, articles, help, and reports prioritize sequence, measure, navigation, and comprehension.
- **Experience:** let the work itself lead. Portfolios, galleries, demos, and showcases keep interface language and chrome subordinate to the artifact.

Then choose the smallest refinement intent that matches the request:

- **Clarify:** fix meaning, labels, system states, actions, or recovery.
- **Distill:** remove duplication, competing choices, and cosmetic complexity.
- **Harden:** cover real content, permissions, failure, localization, input, and device extremes.
- **Polish:** resolve local inconsistency without changing the visual world.
- **Bolder:** strengthen a timid but sound direction.
- **Quieter:** reduce an aggressive or overstimulating direction.

Do not run every intent by default. Use critique for human judgment about hierarchy and meaning; use audit for mechanical evidence such as semantics, contrast, overflow, state coverage, and implementation drift. A comprehensive review needs both, kept distinct until synthesis.

Read `references/promotional-assets-and-feedback.md` for store listing art, promo tiles, thumbnails, screenshot carousels, ads, social graphics, product demonstrations, or an iterative revision where the user has already established visual rules.

Read `references/code-restraint.md` whenever the task adds, fixes, refactors, reviews, or removes implementation; changes a dependency; introduces an abstraction; or moves behavior between layers. Trace the real flow before applying its implementation ladder.

## Keep context-heavy work in one thread

Default to direct execution when the work depends on accumulated judgment. Do not delegate merely because parallelism is available.

Keep the work with the primary agent when it:

- depends on prior decisions, rejected directions, user corrections, or a decision ledger;
- requires several changes to stay coherent across the same architecture, files, or visual system;
- is small or straightforward enough to complete directly;
- would make another agent reread substantially the same context; or
- cannot be reviewed from durable artifacts, diffs, test output, or source evidence.

Use subagents only for bounded, independent work with a clear return contract. Read-heavy inventory, source lookup, and isolated audit passes are good candidates when their outputs can be checked without trusting a compressed summary. Partition file ownership before parallel implementation; overlapping edits and primary design decisions stay with one agent.

When delegation is justified:

- pass the relevant raw constraints and canonical references, not only a paraphrase;
- require locations, evidence, assumptions, and unresolved questions in the result;
- inspect the cited source, produced artifact, diff, and verification output in the primary thread;
- reconcile the result against the full decision ledger before accepting or implementing it; and
- stop delegating when coordination, duplicated reading, or review costs exceed the saved time.

A subagent report is input, not verification. Never turn its summary into a claim about code, rendered quality, tests, or production state without checking the underlying evidence.

## Run the eight-pass workflow

### 1. Ground the artifact

Write down, at least internally:

- the audience;
- the surface mode and refinement intent;
- the single job of the page or surface;
- the primary action;
- the full interaction or reading path in scope;
- the user's likely knowledge, emotional state, and stakes at each important moment;
- the real states and content it must support;
- the implementation and design-system constraints;
- the voice traits worth preserving.
- the user's accepted decisions and repeated corrections that must not regress in the next pass.

If the page's job is unclear, determine it from the product before styling. Real content is a design constraint, not placeholder material.

For iterative revision, keep a compact internal decision ledger. Separate durable rules (canonical asset, typography roles, density, copy hierarchy) from one-off coordinates or tuning values. Reconcile the next change against the whole ledger before editing; fixing one complaint does not authorize regressing an earlier accepted decision.

### 2. Separate evidence from judgment

Read `references/evidence-and-testing.md` for implementation, audit, or verification work, especially when the project already has browser, component, accessibility, or visual-regression tests.

- Read the source for semantics, tokens, component contracts, copy, and code-level tells.
- Render or inspect pixels for hierarchy, palette dominance, optical alignment, spacing rhythm, wrapping, and motion whenever possible.
- Label important findings **source-confirmed**, **render-observed**, or **inferred**. Do not assert a visual defect from source alone when the rendered result could change the judgment.
- Make the design assessment before reading linter or detector findings when practical. Mechanical findings should not anchor the taste judgment.
- Treat a clean detector, linter, or accessibility scan as a floor. It cannot prove that writing is human, hierarchy is clear, or the design is good.

### 3. Commit to one direction

Use the product's existing visual language first. Otherwise define one concrete direction through:

- hierarchy and focal point;
- density and whitespace;
- geometry and alignment;
- typography and color roles;
- one subject-derived signature element.

Avoid vague directions such as "modern," "premium," or "not AI-looking." Do not mix several unrelated aesthetics. Keep the area around the signature element quiet. Check for a second-order default: replacing one cliché with the same tasteful serif, warm-paper palette, asymmetric hero, or stock accent used in every prior cleanup is still convergence.

### 4. Make the words earn their space

Read `references/writing-and-copy.md` whenever the task includes interface, landing-page, public-facing, or explanatory copy. Review the whole interaction or reading path before rewriting isolated strings.

- Give each text element one job.
- Run a semantic redundancy pass across the rendered region, not a string-deduplication pass. Give each fact, entity list, claim, status, and action one canonical owner; remove or merge nearby repetitions that add no new information, context, state, or action. Preserve repetition when it is needed for local comprehension, accessibility, comparison, confirmation, or orientation after distance or a context change.
- Lead with the outcome, fact, or action. Cut throat-clearing.
- Use the words the user recognizes and controls, not internal system language.
- Prefer concrete nouns and direct verbs to abstract benefits.
- Keep the same term throughout a flow. Do not rotate synonyms for variety.
- Name actions by their result. A button should predict what happens next.
- Make errors specific and recoverable. Make empty states invite the next useful action.
- Keep useful uncertainty. Never turn missing evidence into confidence or zero.
- Keep voice stable while adapting tone to consequence: celebration, blocked work, payment, privacy, deletion, and ordinary progress should not sound alike.
- Preserve intentional humor, bluntness, fragments, profanity, or roughness when they belong to the voice.
- On persuasive surfaces, lead with what the product does and the outcome it creates. Do not spend the dominant headline on a limitation, refusal, setup detail, safety boundary, or absence of capability when a stronger grounded capability exists. Keep consequential limits visible where the decision or action requires them; do not market them as the main feature.

Treat phrases and punctuation as signals, not automatic violations. A cluster of interchangeable slogans, binary contrasts, fake insight, symmetrical phrasing, uniform cadence, and abstract claims is stronger evidence than one em dash or one common adjective.

### 5. Make structure carry meaning

- Establish one dominant idea and a clear reading order.
- Group by task and relationship, not by a desire to create more cards.
- Use proximity, alignment, whitespace, rules, and typography before containers.
- Do not stack decorative containers. A box inside another box must earn a distinct functional boundary through interaction, clipping, scrolling, selection, state, or a genuinely different content context. Otherwise remove the inner wrapper and carry the hierarchy with spacing, alignment, typography, or one rule.
- Audit border depth, not only card count. If a surface reads as panel -> card -> sub-card -> pill, flatten it until one primary surface remains; preserve boxes only for real controls, states, messages, or artifacts.
- Give repeated elements a shared baseline, edge, or grid.
- Use intentional asymmetry only when it strengthens hierarchy or expresses the subject.
- Design for real short, average, long, sparse, dense, loading, empty, and error states.
- Remove duplicated headings, captions, legends, metrics, controls, and navigation concepts.
- When summary copy and detailed content repeat the same examples, keep the details where they do real work and let the summary communicate the category, scope, or state instead.
- Run the squint test: with details blurred, the primary element, secondary element, and major groups should remain obvious in order.
- Vary section rhythm only when the story changes. A different palette over the same hero → three features → proof strip → CTA sequence is not a different design.

### 6. Spend visual emphasis deliberately

Read `references/visual-and-interaction.md` for the visual tell catalog and verification matrix.

- Use a small, coherent type scale and spacing scale. Let role determine size and weight.
- Ground font and palette choices in the brand, subject, or existing system. Do not replace a justified choice merely because it is common.
- Reserve accent color for focus, action, or meaning. Do not make every block compete.
- Use radius, border, shadow, blur, gradient, glow, and iconography only when they clarify grouping, depth, state, or identity.
- Keep motion interruptible, purposeful, and limited to cause and effect or one meaningful moment.
- For charts, preserve honest scales, common baselines, uncertainty, direct labels, and accessible redundant cues.

### 7. Pass the interaction and accessibility gate

- Use native semantics before ARIA.
- For a custom composite widget, follow the keyboard, focus, role, state, and property contract for that exact pattern; a generic "keyboard accessible" check is not enough.
- Make all actions keyboard reachable with visible focus.
- Give icon-only controls accessible names and adequate hit targets.
- Never rely on color alone for status.
- Keep loading labels stable; place errors by the affected control; offer recovery or undo where appropriate.
- Honor reduced motion and avoid `transition: all`.
- Make text and controls survive zoom, translation, long content, and narrow widths.
- Keep DOM, focus, and reading order consistent with responsive visual order. Test complete messages, localization expansion, right-to-left layout, and locale-aware values when relevant.
- Test what becomes visible after interaction, not only the initial page.

Automated accessibility checks are evidence, not proof. Pair them with keyboard, focus-order, screen-reader semantics, contrast, and state review.

### 8. Implement and verify

For code changes, use the implementation ladder in `references/code-restraint.md` after locating the behavior's real owner and callers. Optimize for the smallest coherent change, not the smallest line count.

1. Name the high-noise elements with selectors, components, annotations, or tight file references.
2. Make surgical edits when the structure works. Rebuild only when the structure itself is the problem and the scope permits it.
3. Render the result when possible. Inspect desktop and mobile together in one batched pass, including short and long content; add wide or intermediate layouts when the surface needs them.
4. Exercise hover, focus, active, loading, empty, error, success, disabled, and reduced-motion states that exist in scope.
5. Prefer the project's existing test and story stack. Stabilize fonts, assets, motion, data, and environment before treating screenshot differences as product differences.
6. Read visible copy aloud. Remove text that merely restates nearby text or visuals.
7. Fix everything found in one coherent batch, then make at most one confirmation pass. Stop polishing when the scoped defects are resolved; an endless self-review loop spends time without improving the product.

During an active Create or Revise task, treat a diagnostic complaint such as "why does this look wrong?" or "this looks bad" as a request to diagnose and repair unless the user explicitly asks for analysis only. Do not answer repeated corrective feedback with agreement alone. Lead the next update with the concrete defect and the change being made; reserve apology or acknowledgment for one short sentence when it adds value.

If feedback reveals that the concept is wrong rather than merely unpolished, stop local nudging. Re-ground the whole surface, remove the invalid premise, and rebuild the smallest coherent direction before generating another round.

## Prioritize findings

- **P0 — truth, task, safety, or access failure:** fabricated claim, broken behavior, lost validation, misleading state, hidden recovery, unreadable content, or accessibility blocker.
- **P1 — ownership, complexity, hierarchy, or convergence failure:** symptom patch, duplicated implementation, speculative abstraction, unearned dependency, unclear primary action, card soup, or template-shaped output.
- **P2 — local clarity or polish failure:** confusing name, needless wrapper, weak optical alignment, inconsistent rhythm, unnecessary effect, awkward wrap, or minor copy friction.

Fix P0 before P1 and P1 before P2. Do not spend the pass polishing decoration while the page's job remains unclear.

## Return useful work

For a critique, lead with the verdict, then list only the three to five highest-leverage findings with location, effect, evidence type, and exact correction. Keep design judgment separate from mechanical audit results until the synthesis.

For a revision, summarize what materially changed, what was preserved, and what was actually verified. Do not claim a render, test, screenshot, or accessibility check that did not happen.

For a new design, briefly state the audience, page job, chosen direction, and signature element before implementation. Do not expose a long mood-board monologue.

## Completion gate

- Can a first-time user name the page's job and next action in five seconds?
- Does the surface behave like Persuade, Operate, Read, or Experience work should?
- Is every claim grounded and every state honest?
- Does each text element add information or enable action?
- Does every nearby repetition have a distinct job, with one clear canonical owner for each fact, label, status, or action?
- Does every visible mark encode structure, state, data, action, or identity?
- Does every product demonstration use the real component or canonical asset instead of an invented approximation?
- Is any box nested inside another only to create hierarchy that spacing or a rule could carry?
- Is the hierarchy clear without explanatory filler?
- Does the artifact survive real content, narrow widths, keyboard use, and reduced motion?
- Does it survive the real distribution context: thumbnail scale, carousel crop, projected size, viewing distance, or capture viewport?
- Does it feel specific to this product rather than transferable to any startup?
- Did the revision preserve the working product underneath it?
- Did the revision preserve every accepted user decision that remains in scope, including the semantic role of each font, color, asset, and text level?
- If work was delegated, was it genuinely independent, evidence-backed, and reconciled against the primary context?
- For code changes, is this the smallest coherent implementation at the correct owner, with every necessary guard and proportionate regression evidence intact?
