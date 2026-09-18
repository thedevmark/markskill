# Visual and Interaction Reference

Use this reference for layouts, component systems, typography, color, dashboards, data visualization, motion, responsive behavior, and final visual QA.

## Contents

- Write a small design brief
- Match structure to the surface mode
- Separate source evidence from rendered evidence
- Diagnose observable visual tells
- Build hierarchy
- Align deliberately
- Control spacing and geometry
- Use typography intentionally
- Use color and effects intentionally
- Make structure truthful
- Design data displays
- Design interaction states
- Run the viewport and content matrix
- Verify accessibility manually
- Final visual questions

## Write a small design brief

Before styling, identify:

- audience and page job;
- content hierarchy and primary action;
- real content and states;
- existing tokens and components;
- density target;
- visual direction in concrete terms;
- a subject-derived signature element when useful;
- one intentional risk or exception, if any.

The signature should come from the subject, data, interaction, or brand history—not from a stock AI motif.

## Match structure to the surface mode

- **Persuade:** composition may be expressive, asymmetric, or surprising when the promise and proof remain clear.
- **Operate:** task path, stable density, familiar controls, and state clarity outrank visual novelty.
- **Read:** navigation, sequence, line measure, headings, and information retrieval drive the layout.
- **Experience:** the artifact should dominate the first viewport while interface chrome recedes.

Mode belongs to the surface, not the company. Do not apply a marketing-page hero rhythm to an operating dashboard or dashboard density to a campaign page.

## Separate source evidence from rendered evidence

- Use source to confirm semantics, component contracts, token use, content, DOM order, and code-level defaults.
- Use rendered pixels to judge hierarchy, optical alignment, palette weight, density, wrapping, and motion.
- Mark findings as source-confirmed, render-observed, or inferred when confidence matters.
- Do not claim a spacing, balance, or visual-emphasis defect as confirmed without seeing the result.
- Keep the first design judgment independent from automated findings. A clean scan cannot prove taste or task clarity.

## Diagnose observable visual tells

No tell is automatically wrong. Flag it when it is repeated, unearned, inconsistent with the subject, or harmful to hierarchy.

| Tell | Typical effect | Correction |
| --- | --- | --- |
| Card soup | Every idea has equal weight | Remove wrappers; regroup by task; use spacing and rules |
| Nested panels | Hierarchy becomes border depth | Flatten levels and keep only functional containment |
| Pill inflation | Everything looks like metadata or a filter | Reserve pills for compact statuses, tags, and toggles |
| Icon-in-rounded-square repetition | Decorative sameness | Remove icons or integrate only meaningful symbols |
| Gradient/glow by reflex | Spends emphasis without meaning | Use flat tone; keep one justified focal effect |
| Glassmorphism by reflex | Weak contrast and generic futurism | Use solid surfaces and explicit depth |
| Centered-everything layout | Erases reading hierarchy | Align content to task and reading direction |
| Hero + three cards + CTA template | Makes different products feel identical | Derive section rhythm from the product story |
| Oversized headline | Pushes proof and product below the fold | Scale to content and viewport; reveal substance sooner |
| Tiny uppercase eyebrow | Adds category noise before every heading | Keep only when it adds orientation |
| Uniform spacing | Gives every boundary equal meaning | Use a spacing scale with distinct relationship levels |
| Excess dead space | Hides weak structure as luxury | Spend whitespace around the actual focal point |
| Repeated arrows | Creates weak fake motion | Use one clear affordance tied to interaction |
| Orphan decorative art | Competes without explaining | Connect it to data, identity, or interaction; otherwise remove |
| Default component-library styling | Makes brand disappear | Apply product tokens and component roles |
| Invented dashboard data | Creates false proof | Use real data, labeled placeholders, or another structure |
| Animation on every child | Adds delay and sameness | Choose one orchestrated moment or none |
| Second-order tasteful default | Every cleanup converges on the same serif, paper tone, accent, and asymmetric split | Return to the subject and choose a different justified system |
| Content hidden at rest | Essential meaning exists only on hover, focus, tooltip, or animation | Keep the core label, value, or action visible; reveal only secondary detail |
| Repeated panel copy | Several cards restate the same heading, metric, or instruction | Say it once at the shared level or make each instance meaningfully distinct |
| Ghost card styling | A thin border plus a broad shadow makes every box look detached and hazy | Choose a clear boundary or clear elevation, not both by reflex |
| Gray text on color | Secondary text loses contrast and looks muddy on tinted surfaces | Derive readable text from the actual background and semantic role |
| Design-system drift | Near-duplicate colors, sizes, radii, and spacing accumulate | Reuse the established token or document the intentional exception |

## Build hierarchy

- Make one element dominant per viewport.
- Keep the primary action visually and semantically clear.
- Use heading level, placement, size, weight, contrast, and whitespace as a system.
- Keep secondary information available without giving it primary contrast.
- De-emphasize supporting elements before making the primary element larger, brighter, heavier, and louder.
- Avoid two separate areas both claiming to be "next," "up next," "priority," or the primary action.
- Use progressive disclosure only when it reduces decision load without hiding necessary context.
- Run the squint test: blur detail and confirm the dominant element, supporting element, and major groups still read in order.
- Run a grayscale check when color is carrying too much of the hierarchy; structure, type, and spacing should still reveal the reading order.

## Align deliberately

- Align every element to a grid, baseline, edge, or optical center.
- Allow a small optical adjustment when visual weight beats mathematical centering.
- Balance icons and text by perceived weight, not bounding-box equality.
- Keep repeated controls and metrics on stable baselines.
- Use intrinsic flex and grid behavior before JavaScript measurement.
- Fix overflow at the source. Do not hide accidental horizontal scrolling.

## Control spacing and geometry

- Define a small spacing scale and map it to relationships: inside control, inside group, between groups, between sections.
- Use fewer, stronger section breaks instead of repeated containers.
- Keep child radii less than or equal to parent radii when nested.
- Reserve circles and pills for shapes whose meaning benefits from them.
- Make hit areas generous even when the visual target is compact.

## Use typography intentionally

- Choose typography from the existing brand or the subject's tone and reading needs.
- A common font is not a failure when it is established, performant, legible, or intentionally neutral.
- Add a display face only when it creates useful identity and the implementation can support it.
- Keep a coherent type scale and readable line length.
- Use monospace for code, identifiers, timestamps, data, or an established brand-voice role. Preserve authored typography roles; avoid generic "technical" decoration.
- Use tabular numerals for aligned comparisons.
- Check real wraps, widows, truncation, localization, and user-generated content.

## Use color and effects intentionally

- Establish background, surface, text, border, accent, and semantic roles.
- Concentrate contrast where attention or action belongs.
- Keep status cues redundant with text, icon, shape, or pattern.
- Meet contrast requirements in default, hover, active, focus, and disabled states.
- Use shadows to explain elevation, not to make flat content look expensive.
- Use gradients, texture, glow, blur, or illustration only when they express identity, depth, data, or focus.
- Check dark gradients for banding and dark surfaces for muddy border ladders.

## Make structure truthful

- Use containers only when they encode a shared boundary, interaction, or background.
- Use real information architecture; do not decorate a list until it resembles a dashboard.
- Keep navigation names distinct from content headings and status labels.
- Remove redundant legends when direct labels work.
- Do not use a visual break, metric row, logo strip, testimonial, or proof bar without real content that earns it.
- Evaluate section topology as well as styling. A palette swap over the same hero, three-card row, proof strip, CTA, and four-column footer remains template-shaped.

## Design data displays

- Start with the comparison or decision the user needs to make.
- Preserve common baselines and honest scales.
- Show uncertainty, missingness, thin samples, and unavailable data explicitly.
- Prefer direct labels to legend lookup.
- Reduce gridlines, axes, fills, and annotations until each remaining mark earns its place.
- Do not duplicate the same number in a card, label, chart, and caption.
- Use accessible palettes and non-color cues.
- Provide a textual or tabular equivalent when the chart contains essential information.

## Design interaction states

- If it looks clickable, make it clickable.
- Use links for navigation and buttons for actions.
- Keep visible focus and return focus correctly after dialogs or menus.
- Put validation by the field and focus the first invalid field after submit.
- Keep loading controls stable in width and label; prevent duplicate submission after the request begins.
- Do not use an unexplained disabled control as the only validation model. Explain what is missing, or allow submission to reveal specific field errors.
- Do not put essential instructions or data only in a tooltip. Tooltips are secondary disclosure, not a repair for missing interface copy.
- Confirm destructive actions or provide a genuine undo path.
- Ensure empty, sparse, dense, loading, error, success, disabled, hover, focus, and active states do not collapse the layout.
- Honor `prefers-reduced-motion`; animate `transform` and `opacity` rather than layout properties when possible.
- Never use `transition: all`.

## Run the viewport and content matrix

Choose representative cases that can expose failures in the changed surface; do not mechanically multiply every combination:

| Axis | Cases |
| --- | --- |
| Width | narrow mobile, common mobile, laptop, wide desktop |
| Content | empty, sparse, typical, dense, very long |
| Input | mouse, keyboard, touch where relevant |
| State | default, hover, focus, active, loading, error, success, disabled |
| Preference | reduced motion; high zoom where practical |
| Theme | every supported theme |
| Locale | text expansion, locale formats, and right-to-left when relevant |

Check the above-the-fold composition at a common laptop height. The next section may peek into view when that helps orientation, but do not compress the hero until it loses hierarchy.

Batch the first visual review across representative desktop and mobile states. Fix scoped findings together and verify the result. Repeat only for new changes, failures, or unresolved concerns; stop when the requested outcome and required checks are complete.

For repeatable capture, use `evidence-and-testing.md`. A screenshot taken before fonts, images, data, or motion settle is not dependable visual evidence.

## Verify accessibility manually

Automated tools catch only part of the problem. Also verify:

- heading and landmark order;
- accessible names and relationships;
- focus order, focus visibility, focus trapping, and focus return;
- keyboard activation and escape behavior;
- status announcements;
- contrast in all states;
- zoom and reflow;
- semantic table and chart alternatives;
- controls exposed in the accessibility tree.

For custom dialogs, comboboxes, menus, tabs, grids, trees, and similar composite widgets, test the exact pattern's focus movement, arrow-key behavior, escape behavior, selection model, and focus return. A role without its behavioral contract is incomplete.

Test each state when it appears. Hidden dialogs, menus, errors, and toasts cannot be cleared by testing only the initial render.

## Final visual questions

- What is the first thing seen, and is it the right thing?
- Which element can be deleted with no loss of meaning?
- Are two surfaces competing to describe the same next step?
- Does the layout still make sense with no gradients, shadows, or icons?
- Does the signature element belong to this product?
- Could this page be reskinned into an unrelated startup with only noun changes?
- Are the remaining imperfections intentional, or merely unfinished?
