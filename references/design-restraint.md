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

### 3. Pass the pre-composition gate

Before creating or revising a surface, settle these decisions in a compact internal note or sketch. For a small correction, recheck only what it changes. This is working reasoning, never copy to paste into the product.

- **Job and identity:** Name the user's task, next action, and the product's authored visual anchors. State what each reference supplies: workflow, behavior, layout, or visual identity. Borrowing a workflow does not authorize replacing the product's character, assets, typography, or color roles.
- **Requirement ownership:** Map each requirement to the behavior, data, control, or state that satisfies it. Admit visible copy only when the user needs that information to act or understand a consequence. A requirement is not satisfied by a sentence describing it; a new requirement does not imply a new paragraph, badge, or card.
- **Visible content:** Choose the necessary labels, values, actions, and state feedback. Apply the text admission rule below before drafting supporting copy. Name the existing element that owns each fact; do not add an explainer above and below the same control.
- **Composition:** Establish the focal point, reading order, primary action, grouping, and readable type roles with real content at the intended display size. Give every enclosing box a distinct functional boundary. Use spacing and alignment where no boundary exists. Name what makes the composition belong to this product beyond swapped nouns and colors.

Do not start composing with an unresolved content or hierarchy problem. Remove unsupported elements or change the structure; do not plan to rescue it later with helper copy, nested cards, or smaller type. Keep existing visual choices that remain fit. When creating a direction, specify concrete relationships rather than moods such as "modern" or "premium"; replacing one generic template with another is not authorship.

### Text admission rule

Before adding text, name the information the user lacks now and the task, decision, or consequence that depends on it. If there is none, omit the element. Space needs no caption. "Polish," "orientation," "reassurance," and "branding" alone do not establish a need.

Put needed meaning in its owning element first: an action in its button, selection in its control, a unit beside its value, and a correctable error by its field. Fix unclear behavior or visuals before adding an explanation. Do not overload labels with prose or hide essential guidance until after a preventable mistake. Keep instructions, disclosures, and warnings visible in time to act, with accessible names and feedback intact.

For each line, ask what the user can do, decide, or correct because they read it now. Remove lines that merely report internal rules, repeat the build brief, or explain an already clear control. Reject decorative corner captions, repeated branding, eyebrow labels, footer mottos, redundant subheads, ambient status, and obvious tooltips. These are content defects: resizing, relocating, rewording, or hiding them behind hover does not fix them. Delete the element without a replacement.

Preserve necessary labels, scores, timers, actionable errors, consequential warnings, and fictional-example disclosures. Preserve explicitly requested authored text and established voice; do not surround them with more explanation. For example, keep an approved title-screen tagline, leave its empty corners unlettered, and do not repeat the wordmark in its footer. A "Save image" control needs no "Download your image below" caption; it still needs real failure feedback. A live countdown and voting command stay visible at useful reading sizes because players need them to act.

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

Identify defects with selectors, components, annotations, or tight file references. Make local edits when the structure works; recompose when the information architecture or interaction is the problem. Use the project's existing test and story stack. Stabilize fonts, assets, motion, data, and environment before judging screenshot differences.

#### Rendered design gate

Before claiming visual completion, inspect the final whole surface at its intended display size, not only a thumbnail, enlarged crop, DOM tree, or bounding-box report. Batch relevant desktop and mobile widths and real short and long content. Inspect changed interaction states and sibling exports where they can repeat the defect. Judge these separately from functional and overflow checks:

- **Identity and hierarchy:** Compare the render with the pre-composition decisions. Name what the eye sees first and the next action. Confirm that authored product character survived borrowed workflows, and that grouping and emphasis still read when detail is blurred. A generic form or dashboard does not pass merely because it uses the brand color.
- **Text admission:** Read every visible line in context, including text above and below controls, corners, cards, tooltips, and end states. Temporarily remove secondary copy. If no necessary meaning or requested authored content is lost, leave it removed. No requirement narration or duplicate explanation may remain.
- **Readable type:** Inspect actual sizes, weight, contrast, and wrapping at normal scale; on web surfaces, check computed values against established type roles and the [typography floors](visual-and-interaction.md#use-typography-intentionally). Necessary labels, guidance, and actions must be comfortably readable. Do not shrink text to preserve a crowded layout, or enlarge filler to justify keeping it.
- **Structure:** Trace the visible enclosure depth. Remove boxes without distinct functional boundaries and repeated pills or dividers without a structural job. Spacing, alignment, and type must carry the reading order without a card for each requirement or an explainer for each control.

Record a concrete rendered observation for each applicable check, not just "browser checked" or "no overflow." Fix failures in one coherent batch, then recheck the affected result. Repeat only for a new change, failure, or unresolved concern. If a render cannot be inspected, mark visual verification incomplete; source review and geometry checks cannot pass this gate.

During an active Create or Revise task, treat a diagnostic complaint such as "why does this look wrong?" or "this looks bad" as a request to diagnose and repair unless the user explicitly asks for analysis only. Do not answer repeated corrective feedback with agreement alone. Lead the next update with the concrete defect and the change being made; reserve apology or acknowledgment for one short sentence when it adds value.

If feedback reveals that the concept is wrong rather than merely unpolished, stop local nudging. Re-ground the whole surface, remove the invalid premise, and rebuild a coherent direction before generating another round.
