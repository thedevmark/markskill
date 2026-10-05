# Evidence and Testing Reference

Use this reference when a claim depends on rendered, runtime, or behavioral evidence rather than source inspection alone. The state and viewport material targets interfaces; the evidence lanes and reporting rules apply to any change, including database and production behavior. It keeps taste judgment, source inspection, and automated testing from being confused with one another.

## Contents

- Keep three evidence lanes separate
- Establish runtime and data claims
- Respect project authority
- Review in a useful order
- Build a representative state matrix
- Stabilize visual evidence
- Test behavior, not only appearance
- Test accessibility by state and pattern
- Use automation without outsourcing judgment
- Report verification precisely

## Keep three evidence lanes separate

### Human critique

Judge task clarity, hierarchy, composition, voice, emotional fit, product specificity, and whether the design feels earned. A linter or screenshot diff cannot make this judgment.

### Source audit

Confirm content, semantics, design tokens, component contracts, DOM order, routes, state coverage, and code-level patterns. Source can prove what was implemented, but not always how it reads optically.

### Rendered and behavioral evidence

Inspect pixels, wrapping, contrast, focus, motion, interaction, and complete states in a real browser or faithful component environment. This is where source assumptions meet actual behavior.

Keep findings labeled:

- **source-confirmed** — directly established by code or product content;
- **render-observed** — visible in the inspected artifact;
- **test-confirmed** — reproduced by an executed check or user path;
- **inferred** — plausible but not yet verified;
- **reported** — taken from another party's account, such as an author's summary or a measurement the labeler did not run, and not re-checked.

## Establish runtime and data claims

A claim about a database, a job, a service, or production behavior needs the same discipline as a rendered one. For each such claim, record:

- the query, log line, metric, or command output that shows the behavior, not a description of it;
- the environment and revision it was observed against;
- whether the observation came after the final relevant change; and
- for a migration, the row counts or invariants checked before and after, and the rollback path exercised or explicitly not exercised.

Label these **test-confirmed** when a check ran, **render-observed** when a dashboard or log was read, **reported** when the number comes from someone else's run or dashboard, and **inferred** otherwise. A migration that ran on a fixture is not evidence about production data.

## Respect project authority

- Inspect the repository's style guide, `DESIGN.md`, tokens, shared components, stories, tests, and nearby usage before inventing a local rule.
- Treat design tokens and documented component contracts as normative until evidence shows drift or an intentional migration.
- Treat rationale and examples as context. Verify that current implementation still matches them.
- Preserve unknown sections and authored decisions. Do not replace or broadly rewrite design documentation during a scoped UI cleanup unless asked. Recording a durable fact the task established belongs in the project record (`references/project-record.md`) and is not a rewrite.
- When documentation is the task, lead each entry with the description and put the exact value in parentheses; say where and why a token is used; write short named rules rather than long bullet lists; document only tokens that are reused and components that exist; never overwrite an existing file unasked. Two observed failures: a prohibition that bans a device the system itself uses, and a token added only to silence a check.
- Prefer the project's configured tools. Do not install axe, Storybook, a prose linter, or a visual-regression service merely because it could be useful.

## Review in a useful order

1. Read the artifact and make an independent design and content assessment.
2. Inspect source, tokens, component contracts, and real states.
3. Run the project's relevant static, prose, or accessibility checks.
4. Render representative states and widths.
5. Exercise the changed user path with keyboard and pointer input.
6. Compare visual baselines only after the page is stable.

This order prevents a detector from deciding what the reviewer is allowed to notice. Merge the lanes only when prioritizing the final corrections.

## Build a representative state matrix

Cover the changed surface rather than mechanically multiplying every possible combination.

| Axis | Representative cases |
| --- | --- |
| Content | empty, typical, long, dense, missing or unavailable |
| State | default, hover, focus, active, loading, error, success, disabled |
| Width | narrow mobile, common laptop, wide only when behavior changes |
| Input | keyboard and pointer; touch when the interaction differs |
| Preference | reduced motion, zoom/reflow, every supported theme |
| Locale | text expansion, locale formats, right-to-left when relevant |
| Data | zero, missing, thin-sample, delayed, stale, or permission-blocked when real |

Choose cases that threaten the design's assumptions. A single ideal-data desktop screenshot proves very little.

## Stabilize visual evidence

Before relying on a screenshot or pixel diff:

- fix the viewport, device scale, browser, theme, locale, timezone, and operating environment;
- wait for fonts, images, application hydration, and meaningful network requests;
- freeze clocks, random values, animation, carousels, cursors, and changing data where the existing test stack permits it;
- seed or mock data deliberately and label it as fixture data;
- wait for the specific ready state, not an arbitrary sleep;
- capture the same route, authentication state, and component state;
- compare baselines produced in a compatible environment.

Mask only nondeterministic regions that are irrelevant to the assertion. Do not mask a real defect, hide half the page, or loosen thresholds until a change disappears.

A visual baseline can preserve an existing bad design. Review the baseline itself before accepting it as truth.

## Test behavior, not only appearance

- Follow the complete path from arrival through action, loading, success or failure, and return.
- Assert the result of an action, not just that a control received a click.
- Test recovery, preserved input, retry, cancel, undo, and destructive consequences where they exist.
- Verify duplicate submission prevention without making the interface a silent dead end.
- Test content revealed by menus, dialogs, tabs, accordions, tooltips, toasts, validation, and asynchronous updates.
- Confirm that responsive reordering preserves reading and focus order.

Component stories are useful for controlled state coverage. Page and end-to-end tests remain necessary for layout relationships, routing, focus transitions, and real workflows.

## Test accessibility by state and pattern

- Run the project's existing automated accessibility checks after each important state becomes visible; hidden menus, dialogs, errors, and toasts are not covered by an initial-page scan.
- Review every automated **incomplete** or manual-review result instead of treating it as a pass.
- Test keyboard reachability, visible focus, logical focus order, focus trapping and return, escape behavior, announcements, names, descriptions, landmarks, headings, contrast, zoom, and reflow.
- Use native HTML when it satisfies the interaction.
- For a custom composite widget, follow the exact WAI-ARIA Authoring Practices pattern for roles, states, properties, focus management, and keys. Dialog, combobox, menu, tab, grid, and tree behavior are not interchangeable.
- Check that the visual state and accessibility state agree. Do not mark a dialog modal, a control disabled, or an item selected unless it behaves that way for every user.

Automated accessibility results are a floor. They do not prove keyboard usability, screen-reader comprehension, cognitive clarity, or that the right pattern was chosen.

## Use automation without outsourcing judgment

Use existing tools for the evidence they can actually produce:

- prose linters: mechanics, configured terminology, repetition, risky phrases;
- static design detectors: code-level defaults, token drift, possible overflow, repeated styling patterns;
- axe-style checks: deterministic WCAG and best-practice violations in rendered states;
- component stories: controlled props, content, states, and interaction cases;
- visual regression: unintended rendered changes against a reviewed baseline;
- end-to-end tests: task completion and cross-component behavior.

No clean result proves that copy is human, the design is specific, the hierarchy is right, or the product claim is true. Investigate false positives and false negatives before changing the artifact to please the tool.

## Report verification precisely

Before any statement of success, name the check that would prove it, run it on the final relevant change, and read the whole output. Then claim with the evidence attached. Common false equivalences:

| Claim | Insufficient | Sufficient |
| --- | --- | --- |
| It builds | Linter or type check passed | The build command ran and exited clean |
| Tests pass | Tests passed earlier, or on another tree | The suite ran on this tree after the last change |
| Requirements met | Tests pass | Each requirement mapped to a check or observation |
| Delegate finished | The delegate's report says done | The diff and its checks were inspected |
| It renders correctly | Source looks right | The rendered state was observed at the relevant widths |

Hedge words are the tell: if the sentence needs "should", "probably", or "seems", the claim has outrun the evidence. Answer each verification item with a file, selector, computed value, command output, or rendered observation, never with "yes".

Report enough detail to support the claim and expose material gaps. Summarize routine checks; include the following details when they affect confidence or reproducibility:

- commands, tests, stories, routes, states, viewports, and browsers inspected;
- whether the evidence was produced after the final relevant change and against the environment or revision being claimed;
- whether screenshots were visually reviewed or only generated;
- whether accessibility was automated, manual, or both;
- whether content was checked in source, rendered context, or the full flow;
- remaining inferred risks and untested states.

Evidence remains applicable only while the relevant code, inputs, target, and environment remain unchanged. Rerun checks whose claim coverage may have changed; unrelated edits do not invalidate earlier results.

Fix scoped findings in a coherent batch and verify them. Repeat when new changes, failures, or unresolved concerns justify it; stop once the outcome and required checks are complete. If a tool is unavailable or the environment cannot render faithfully, say so instead of upgrading inference into proof.
