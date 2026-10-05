# Visual and Interaction Reference

Use this reference for layouts, component systems, typography, color, dashboards, data visualization, motion, responsive behavior, native platforms, and final visual QA.

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
- Time motion
- Adapt to input and viewport
- Conform to native platforms
- Keep the surface fast
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

The signature should come from the subject, data, interaction, or brand history, not from a stock motif.

## Match structure to the surface mode

- **Persuade:** composition may be expressive, asymmetric, or surprising when the promise and proof remain clear.
- **Operate:** task path, stable density, familiar controls, and state clarity outrank visual novelty.
- **Read:** navigation, sequence, line measure, headings, and information retrieval drive the layout.
- **Experience:** the artifact should dominate the first viewport while interface chrome recedes.

Mode belongs to the surface, not the company. Do not apply a marketing-page hero rhythm to an operating dashboard or dashboard density to a campaign page.

## Separate source evidence from rendered evidence

- Use source to confirm semantics, component contracts, token use, content, DOM order, and code-level defaults.
- Use rendered pixels to judge hierarchy, optical alignment, palette weight, density, wrapping, and motion. Read computed values, not intended ones.
- Mark findings as source-confirmed, render-observed, test-confirmed, inferred, or reported when confidence matters.
- Do not claim a spacing, balance, or visual-emphasis defect as confirmed without seeing the result.
- Keep the first design judgment independent from automated findings. A clean scan cannot prove taste or task clarity.

## Diagnose observable visual tells

No tell is automatically wrong. Flag it when it is repeated, unearned, inconsistent with the subject, or harmful to hierarchy.

| Tell | Typical effect | Correction |
| --- | --- | --- |
| Card soup | Every idea has equal weight | Remove wrappers; regroup by task; use spacing and rules |
| Nested panels | Hierarchy becomes border depth | Flatten levels and keep only functional containment |
| Pill inflation | Everything looks like metadata or a filter | Reserve pills for compact statuses, tags, and toggles |
| Repeated horizontal dividers | The page feels sliced into unrelated strips | Use spacing and headings first; keep a rule only where it clarifies a real boundary |
| Tiny secondary text everywhere | Important content becomes hard to read or disappears into chrome | Give ordinary content a readable body size; reserve smaller text for genuinely secondary metadata |
| Unmotivated font switching | The page loses a coherent voice | Check the brand and existing typography roles before adding or replacing a face |
| Icon-in-rounded-square repetition | Decorative sameness | Remove icons or integrate only meaningful symbols |
| Gradient or glow by reflex | Spends emphasis without meaning | Use flat tone; keep one justified focal effect |
| Glassmorphism by reflex | Weak contrast and generic futurism | Use solid surfaces and explicit depth |
| Centered-everything layout | Erases reading hierarchy | Align content to task and reading direction |
| Hero, three cards, CTA template | Makes different products feel identical | Derive section rhythm from the product story |
| Oversized headline | Pushes proof and product below the fold | Scale to content and viewport; reveal substance sooner |
| Tiny uppercase eyebrow | Adds category noise before every heading | Keep only when it adds orientation |
| Section numbers 01, 02, 03 | Implies a sequence that carries nothing | Remove unless order is the content |
| Uniform spacing | Gives every boundary equal meaning | Use a spacing scale with distinct relationship levels |
| Excess dead space | Hides weak structure as luxury | Spend whitespace around the actual focal point |
| Repeated arrows | Creates weak fake motion | Use one clear affordance tied to interaction |
| Orphan decorative art | Competes without explaining | Connect it to data, identity, or interaction; otherwise remove |
| Default component-library styling | Makes brand disappear | Apply product tokens and component roles |
| Hero-metric template | Big number, small label, stat row, accent; reads as a dashboard skin | Show the comparison the number supports, or state it in a sentence |
| Invented dashboard data | Creates false proof | Use real data, labeled placeholders, or another structure |
| Animation on every child | Adds delay and sameness | Choose one orchestrated moment or none |
| Second-order tasteful default | Every cleanup converges on the same serif, paper tone, accent, and asymmetric split | Return to the subject and choose a different justified system |
| Content hidden at rest | Essential meaning exists only on hover, focus, tooltip, or animation | Keep the core label, value, or action visible; reveal only secondary detail |
| Repeated panel copy | Several cards restate the same heading, metric, or instruction | Say it once at the shared level or make each instance meaningfully distinct |
| Ghost card styling | A thin border plus a broad shadow makes every box look detached and hazy | Choose a clear boundary or clear elevation, not both by reflex |
| Colored halo shadow | A zero-offset tinted shadow reads as a glow, not elevation | Use a neutral offset shadow, or none |
| Thick colored left border | Cards and alerts carry a status stripe above 1px | Carry status with an icon, label, or background tint; keep any rule at 1px |
| Gray text on color | Secondary text loses contrast and looks muddy on tinted surfaces | Derive readable text from the actual background and semantic role |
| Modal for a plain task | Interrupts and traps focus for work that needed neither | Use an inline region, a sheet, or a page |
| Clipped dropdown | A menu is cut off by an ancestor's overflow | Render it in a dialog, popover, or portal layer |
| Design-system drift | Near-duplicate colors, sizes, radii, and spacing accumulate | Classify each: missing token, one-off that a shared component replaces, conceptual mismatch with a comparable area, or local defect; fix at the narrowest correct level |

## Build hierarchy

- Make one element dominant per viewport.
- Keep the primary action visually and semantically clear.
- Use heading level, placement, size, weight, contrast, and whitespace as a system.
- Keep secondary information available without giving it primary contrast.
- De-emphasize supporting elements before making the primary element larger, brighter, heavier, and louder.
- Avoid two separate areas both claiming to be "next," "up next," "priority," or the primary action.
- Treat more than roughly four simultaneous options at one decision point as a signal: one primary action, one or two secondary, the rest in a menu.
- Watch for two load traps: a memory bridge, where the user must recall information from an earlier step to complete a later one, and a context switch, where the inputs for one decision are gathered across several screens.
- Use progressive disclosure only when it reduces decision load without hiding necessary context.
- Run the squint test: blur detail and confirm the dominant element, supporting element, and major groups still read in order.
- Run the skeleton test: strip the copy and confirm the structure alone still says what the section is and why it matters.
- Run a grayscale check when color is carrying too much of the hierarchy; structure, type, and spacing should still reveal the reading order.

## Align deliberately

- Align every element to a grid, baseline, edge, or optical center.
- Allow a small optical adjustment when visual weight beats mathematical centering.
- Balance icons and text by perceived weight, not bounding-box equality.
- Keep repeated controls and metrics on stable baselines.
- Use intrinsic flex and grid behavior before JavaScript measurement.
- Fix overflow at the source. Do not hide accidental horizontal scrolling.

## Control spacing and geometry

- Define a small spacing scale and map it to relationships: inside control, inside group, between groups, between sections. A 4-unit base gives the middle steps an 8-only scale lacks.
- Put more space above a heading than below it, so the heading binds to what follows.
- Use fewer, stronger section breaks instead of repeated containers.
- Do not add a horizontal rule between sections by default. Use one only when spacing and hierarchy cannot make the boundary clear, then check the full page for a repeated stripe pattern.
- Keep child radii less than or equal to parent radii when nested.
- Reserve circles and pills for shapes whose meaning benefits from them, such as a status, filter, or tag. Do not turn every label, link, action, or metadata item into a pill.
- Make hit areas generous even when the visual target is compact.

## Use typography intentionally

- Inspect the product's current fonts, tokens, and nearby pages before choosing typography. Reuse established font roles when they serve the content; if they do not, explain the change through the brand, subject, and reading needs.
- A common font is not a failure when it is established, performant, legible, or intentionally neutral.
- Scrutinize faces that appear by reflex in generated interfaces: Fraunces, Playfair, Cormorant, Lora, Space Grotesk, Space Mono, IBM Plex, DM Sans and DM Serif, Outfit, Plus Jakarta, Instrument Sans, and Inter used as a display face. Any of them may be right; each needs a reason no other face satisfies. "Books want a serif" and "tech wants a mono" are associations, not reasons.
- Add a display face only when it creates useful identity and the implementation can support it. Do not import a new font or mix faces simply to make a section feel different.
- Hold checkable floors: body text at 16px or larger; prose measure between 45 and 75 characters; line height rising with measure; letter-spacing no tighter than -0.04em; display sizes at or below 6rem. Verify at actual viewport sizes and at 200% zoom.
- On Operate surfaces, one family is usually right, a fixed rem scale beats a fluid clamp, step ratios between 1.125 and 1.2 keep hierarchy calm, and paragraphs take spacing or indent but not both. Load only the weights in use, with metric-compatible fallbacks.
- Light text on a dark surface needs slightly more line height and tracking and often one weight step up. A dark theme is composed, not inverted.
- Use monospace for code, identifiers, timestamps, data, or an established brand-voice role. Preserve authored typography roles; avoid generic "technical" decoration.
- Use tabular numerals for aligned comparisons.
- Check real wraps, widows, truncation, localization, and user-generated content.

## Use color and effects intentionally

- Establish background, surface, text, border, accent, and semantic roles.
- Name the color strategy before choosing colors: restrained, neutrals plus one accent, the default for Operate and Read; committed, one saturated color owning a large region of the surface; full palette, three or four named roles; or drenched, where the surface is the color. Persuade and Experience surfaces may take the bolder strategies when the brief allows. Color commits at region scale, not as accents scattered over a neutral ground.
- Choose light or dark from the use scene, not the category. Write one sentence on who uses this, where, and under what light, and let it decide.
- Concentrate contrast where attention or action belongs.
- Keep status cues redundant with text, icon, shape, or pattern.
- Meet contrast requirements in default, hover, active, focus, and disabled states.
- Use shadows to explain elevation, not to make flat content look expensive.
- Use gradients, texture, glow, blur, or illustration only when they express identity, depth, data, or focus.
- When deriving a ramp, reduce chroma near white and near black. Prefer explicit colors over stacked transparency when contrast would depend on what sits underneath.
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
- Scale celebration to frequency and consequence. A flourish that satisfies on the first completion must still be acceptable on the hundredth. Never fake work or delay completion to stage one. Sound needs consent.

## Time motion

Plan the focal moment, continuity, feedback, and budget before implementing. Then hold these ranges unless the product's established motion says otherwise:

| Purpose | Duration |
| --- | --- |
| Feedback on press or toggle | 100 to 150ms |
| State change within a component | 150 to 300ms |
| Layout shift, overlay, or sheet | 300 to 500ms |
| One authored entrance | 500 to 800ms |

Exits run faster than entrances. Ease out by default; bounce and overshoot need a reason. Cap the total of any stagger so the last item does not arrive after the user has moved on. Operate surfaces stay in the 150 to 250ms band with no page-load choreography.

Animate `transform` and `opacity` rather than layout properties. Never use `transition: all`. Honor `prefers-reduced-motion` with an intentional alternative: a global near-zero duration kills the feedback that told the user a state changed. Replace movement with an opacity or color change that carries the same meaning.

## Adapt to input and viewport

- Detect input, not screen size. Use `pointer: coarse` and `hover: none` to decide hit targets and hover-dependent behavior; use width only for layout.
- Let content set breakpoints. Break where the layout fails, not at device names.
- Keep one information architecture across contexts. Never hide core functionality on small screens.
- Respect safe areas with `env()` insets on notched and gesture-navigation devices.
- Give flex and grid children `min-width: 0` where long content must shrink instead of overflowing.
- Use logical properties for right-to-left layouts and budget 30 to 40% text expansion for translation.
- Format dates, numbers, and plurals through the platform's internationalization APIs, never by string concatenation.
- Preserve state across a mid-flow refresh and guard rapid repeated submission.

## Conform to native platforms

When the surface is a native iOS or Android app, the test is whether a fluent platform user would trust it or pause at an off-spec control. Web habits transplanted into a native shell read as slop to that user.

| Concern | iOS | Android |
| --- | --- | --- |
| Hit target | 44pt minimum | 48dp minimum |
| Type | Dynamic Type; never fixed point sizes for body | sp units; never fixed dp for body |
| Color | Semantic system colors that adapt to appearance | Theme roles from the platform color system |
| Navigation | Never disable the system back gesture or replace the navigation bar's expected behavior | Never disable the system back gesture or predictive back |
| Larger screens | Restructure with size classes rather than stretching the phone layout | Restructure with window size classes rather than stretching |
| Idioms | Translate a pattern into the platform's equivalent; do not transplant the other platform's control | Same |

Use the platform's own components before custom ones. A custom control must reproduce the platform's focus, accessibility, and gesture behavior, not only its look.

## Keep the surface fast

- Give media explicit dimensions or `aspect-ratio` so nothing shifts as it loads.
- Lazy-load only below the fold. Above-the-fold content loads eagerly.
- Set `font-display` deliberately and subset fonts to the characters in use.
- Batch DOM reads before writes; avoid layout thrash in scroll and resize handlers.
- Measure before and after a performance change and fix the measured bottleneck, not the assumed one.

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

For repeatable capture, use `evidence-and-testing.md`. A screenshot taken before fonts, images, data, or motion settle is not dependable visual evidence. Checks that need a physical device, a throttled network, or a screen reader that cannot run in the current environment are reported as not run, or handed to the user by name, never assumed.

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
- If the visitor left after one viewport, what would they describe an hour later? If the honest answer is a mood, the concept has not committed.
- Which element can be deleted with no loss of meaning?
- Are two surfaces competing to describe the same next step?
- Does the layout still make sense with no gradients, shadows, or icons?
- Does the signature element belong to this product?
- Could this page be reskinned into an unrelated startup with only noun changes?
- Are the remaining imperfections intentional, or merely unfinished?
