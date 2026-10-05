# Product judgment

Use this reference for product surfaces, layout, visual interaction, interface copy, and visual review. Load narrower references only when the task calls for them.

## Choose the operating mode

- **Create:** Ground the brief, choose one direction, then build and verify it. When a question is warranted, ask the one that decides the direction: what success looks like, what must remain untouched, or what would make a polished result feel wrong. Assert the likely reading for the rest and invite correction. Never ask for CSS values or an aesthetic lane.
- **Critique:** Report the few highest-leverage findings without editing. Walk the primary action as an impatient expert, a first-time user, a keyboard and screen-reader user, a deliberate stress tester, and a one-handed interrupted mobile user, and report what specifically broke for each. Do not invent audience detail the product does not show.
- **Revise:** Inspect the current artifact, make the change its underlying problem warrants, then inspect the result.

Do not guess whether AI made an artifact. Name observable patterns and their effects.

## Protect the authored product

- Inspect the real content, design system, nearby components, and accepted user decisions before changing the surface.
- Preserve established typography roles, color roles, interaction behavior, accessibility, and canonical assets unless the user changes the direction.
- Reuse the real component or asset instead of building a lookalike. If a separate runtime needs a port, derive it from the canonical source and verify parity.
- Ground product claims, metrics, testimonials, and examples. Never fill a layout with invented proof. Illustrative content may be authored when it is labeled wherever a visitor could mistake it for real, and the user receives a list of what to replace. Prices, customers, benchmarks, endpoints, and capabilities are never invented.
- If the surface is already distinctive and clear, say so and stop instead of manufacturing a redesign.

## Set the surface mode and refinement intent

Choose the mode from the surface the user is looking at, not the product category:

- **Persuade:** help a visitor decide and act. Landing pages, campaigns, pricing, and product marketing may carry more voice, but every promise still needs evidence.
- **Operate:** help a user complete a task. App UI, dashboards, forms, editors, and settings prioritize scanability, stable terms, honest state, and predictable interaction.
- **Read:** help a reader understand. Documentation, articles, help, and reports prioritize sequence, measure, navigation, and comprehension.
- **Experience:** let the work itself lead. Portfolios, galleries, demos, and showcases keep interface language and chrome subordinate to the artifact.

Then choose the refinement intent that matches the request:

- **Clarify:** fix meaning, labels, system states, actions, or recovery. Establish first: the exact object, state, and next action each string must name.
- **Distill:** remove duplication, competing choices, and cosmetic complexity. Establish first: the one job of the surface and the canonical owner of each repeated fact.
- **Harden:** cover real content, permissions, failure, localization, input, and device extremes. Establish first: the real failure classes and the longest real content.
- **Polish:** resolve local inconsistency without changing the visual world. Establish first: whether each inconsistency is a missing token, a one-off that a shared component replaces, a conceptual mismatch with a comparable area, or a local defect, then fix at the narrowest correct level.
- **Bolder:** strengthen a timid but sound direction. Establish first: which moves the rest of the page already makes that this section opted out of. Raise it to that level in the system's own vocabulary, add no new primitive, then quiet the surroundings so one move reads. If everything got louder, the page got flatter.
- **Quieter:** reduce an aggressive or overstimulating direction. Establish first: the anchors and point of view that must survive. Lower saturation, step weights down, tint the grays, shorten motion, and keep the anchors. Quiet is not grayscale.

Do not run every intent by default. Use critique for human judgment about hierarchy and meaning. For mechanical evidence such as semantics, contrast, overflow, state coverage, and implementation drift, use the source and rendered lanes in `references/evidence-and-testing.md`. A comprehensive review needs both, kept distinct until synthesis.

Read `references/promotional-assets-and-feedback.md` for store listing art, promo tiles, thumbnails, screenshot carousels, ads, social graphics, product demonstrations, or an iterative revision where the user has already established visual rules.

## Workflow for artifact work

Use these as review lenses, not eight mandatory sequential passes. Combine relevant checks and omit those unrelated to the artifact.

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

For iterative revision, keep a compact decision ledger. Separate durable rules (canonical asset, typography roles, density, copy hierarchy) from one-off coordinates or tuning values. Reconcile the next change against the whole ledger before editing; fixing one complaint does not authorize regressing an earlier accepted decision. Durable rules that outlive the task go into the project record (`references/project-record.md`); tuning values do not.

### 2. Separate evidence from judgment

Read `references/evidence-and-testing.md` for implementation, audit, or verification work, especially when the project already has browser, component, accessibility, or visual-regression tests.

- Read the source for semantics, tokens, component contracts, copy, and code-level tells.
- Render or inspect pixels for hierarchy, palette dominance, optical alignment, spacing rhythm, wrapping, and motion whenever possible.
- Label important findings with the labels in `references/evidence-and-testing.md`: **source-confirmed**, **render-observed**, **test-confirmed**, **inferred**, or **reported**. Do not assert a visual defect from source alone when the rendered result could change the judgment.
- Make the design assessment before reading linter or detector findings when practical. Mechanical findings should not anchor the taste judgment.
- Treat a clean detector, linter, or accessibility scan as a floor. It cannot prove that writing is human, hierarchy is clear, or the design is good.

### 3. Commit to one direction

Use the product's existing visual language first. Otherwise define one concrete direction through:

- hierarchy and focal point;
- density and whitespace;
- geometry and alignment;
- typography and color roles;
- a subject-derived signature element when the surface benefits from one; do not invent decoration to satisfy a quota.

Write the direction as a contract of four short blocks: the one idea this surface owns and the category default it refuses; the palette and component language that stays recognizable with the content removed; what the visitor understands and does; and the first-viewport composition with the primary action's position. A block that reads like a mood is an undecided direction. The finishing review audits the render against this contract.

Avoid vague directions such as "modern," "premium," or "not AI-looking." Do not mix several unrelated aesthetics. Keep the area around the signature element quiet. Check for a second-order default: replacing one cliché with the same tasteful serif, warm-paper palette, asymmetric hero, or stock accent used in every prior cleanup is still convergence.

### 4. Make the words earn their space

Read `references/writing-and-copy.md` when the task rewrites more than a few strings of interface, landing-page, public-facing, or explanatory copy. Review the whole interaction or reading path before rewriting isolated strings.

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
- Treat "too boxy" as feedback on the composition, including control backgrounds, shadows, full-width button stacks, and outer frames. Remove unnecessary enclosing shapes before adjusting corner radii; rounder rectangles can preserve the same problem.
- On a sparse welcome or companion surface, let the character and message lead. One or two short actions can sit together as compact text controls with clear emphasis, hover, focus, and generous hit targets. Use filled or full-width buttons when the task or content earns them, not as the automatic definition of a primary action. Keep the user's chosen typography and canonical character intact.
- Give repeated elements a shared baseline, edge, or grid.
- Use intentional asymmetry only when it strengthens hierarchy or expresses the subject.
- Design for real short, average, long, sparse, dense, loading, empty, and error states.
- Remove duplicated headings, captions, legends, metrics, controls, and navigation concepts.
- When summary copy and detailed content repeat the same examples, keep the details where they do real work and let the summary communicate the category, scope, or state instead.
- Run the squint test: with details blurred, the primary element, secondary element, and major groups should remain obvious in order.
- Vary section rhythm only when the story changes. A different palette over the same hero → three features → proof strip → CTA sequence is not a different design.

### 6. Spend visual emphasis deliberately

Read `references/visual-and-interaction.md` when a finding needs the tell catalog, the numeric floors, or the verification matrix.

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
- Honor reduced motion with an intentional alternative that keeps the state change legible. A global near-zero duration is itself a defect. Avoid `transition: all`.
- Make text and controls survive zoom, translation, long content, and narrow widths.
- Keep DOM, focus, and reading order consistent with responsive visual order. Test complete messages, localization expansion, right-to-left layout, and locale-aware values when relevant.
- Test what becomes visible after interaction, not only the initial page.

Automated accessibility checks are evidence, not proof. Pair them with keyboard, focus-order, screen-reader semantics, contrast, and state review.

### 8. Implement and verify

If the design is implemented in code, apply `references/code-restraint.md` after locating the behavior's real owner and callers. Let the required outcome determine whether the surface needs a local revision, structural recomposition, interaction redesign, or replacement.

1. Name the high-noise elements with selectors, components, annotations, or tight file references.
2. Make surgical edits when the structure works. Rebuild when the information architecture, interaction model, or implementation is the problem and the authorized outcome requires it.
3. Render the result when possible. Inspect desktop and mobile together in one batched pass, including short and long content; add wide or intermediate layouts when the surface needs them.
4. Exercise hover, focus, active, loading, empty, error, success, disabled, and reduced-motion states that exist in scope.
5. Prefer the project's existing test and story stack. Stabilize fonts, assets, motion, data, and environment before treating screenshot differences as product differences.
6. Read visible copy aloud. Remove text that merely restates nearby text or visuals.
7. For web surfaces, inspect the rendered page as a whole for run-on or repeated copy, text shrunk to make a layout fit, serial pills and horizontal rules, and font choices that diverge from the product's established roles. Fix the pattern across the surface, not just the most visible instance. If rendering is unavailable, report that visual check as unverified.
8. Fix scoped findings in a coherent batch and verify the result. Repeat only when a new change, failure, or unresolved concern justifies another pass. Stop when the requested outcome and required checks are complete; do not leave known defects because a pass limit was reached.

During an active Create or Revise task, treat a diagnostic complaint such as "why does this look wrong?" or "this looks bad" as a request to diagnose and repair unless the user explicitly asks for analysis only. Do not answer repeated corrective feedback with agreement alone. Lead the next update with the concrete defect and the change being made; reserve apology or acknowledgment for one short sentence when it adds value.

If feedback reveals that the concept is wrong rather than merely unpolished, stop local nudging. Re-ground the whole surface, remove the invalid premise, and rebuild a coherent direction before generating another round.

## Completion questions

Use only the questions relevant to the surface; they are judgment prompts, not a report template.

- Can a first-time user understand the page's job and next action?
- Are claims grounded, states honest, and actions recoverable?
- Does each text element, container, and visible mark serve structure, state, data, action, or identity?
- Is the hierarchy clear without explanatory filler, and does it use this product's own language?
- Does the surface survive real content, narrow widths, keyboard use, zoom, and reduced motion?
- Did the revision preserve the established choices that remain fit and replace the ones that prevent the required outcome?
