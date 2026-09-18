# Code restraint

Use this reference when a task adds, fixes, refactors, reviews, or removes code; changes a dependency; introduces an abstraction; or moves behavior between layers. The goal is the smallest coherent implementation that preserves the product contract. This is not code golf, and it does not replace correctness, security, performance, or architecture review.

## Understand before simplifying

Trace the real path before choosing the small solution:

- identify the user-visible behavior and the invariants that must remain true;
- find the owning module, its callers, state boundaries, and existing tests;
- search for canonical helpers, components, types, and patterns before creating another;
- inspect installed dependencies and relevant language, framework, browser, operating-system, and database capabilities; and
- separate the reported symptom from the shared cause.

Reading is not overhead to minimize. A tiny patch in the wrong owner creates a second bug and often more code later.

## Climb the implementation ladder

Stop at the first rung that fully satisfies the requested behavior:

1. **No new behavior:** remove a speculative requirement, duplicate path, or unnecessary layer only when doing so still fulfills the user's request.
2. **Reuse the product:** use the existing owner, helper, component, type, or pattern. Extend the canonical path instead of creating a sibling implementation.
3. **Use the language or platform:** prefer a well-supported standard-library, browser, framework, operating-system, or database capability when it meets the real semantics and compatibility contract.
4. **Use what is already installed:** let an existing dependency earn reuse when it handles the needed edge cases better than local code.
5. **Write the minimum custom implementation:** add only the code, files, states, and configuration required by the traced flow.

Higher rungs are not automatically better. A native control that breaks required interaction, accessibility, browser support, styling, or product behavior does not satisfy the task. A dependency that hides important semantics or adds more lifecycle risk than it removes has not earned its place.

## Keep the diff coherent

- Optimize for the smallest correct ownership change, not the lowest line count. Readability, locality, debuggability, and explicit invariants may justify more lines.
- Do not add interfaces, factories, configuration, or extension points for hypothetical future needs. A single implementation can still justify a boundary for current testing, isolation, compatibility, or lifecycle requirements; name the present need.
- Do not merge code merely because it looks similar. Share it when the behavior, change cadence, and ownership are genuinely the same.
- Prefer deletion when behavior, compatibility, observability, and required checks remain intact. Never delete a guard or recovery path to improve the diff statistic.
- Keep the number of touched files low when ownership permits it; do not force unrelated concerns into one file to win a file-count contest.

One clear expression is better than a wrapper that only renames another call. A small named helper is better than a dense one-liner when the name carries domain meaning or the compact form hides failure behavior.

## Fix the owner, not the named symptom

A bug report usually identifies one failing path. Before patching it:

1. Find every caller and sibling route through the affected behavior.
2. Locate the narrowest shared owner of the broken invariant.
3. Fix the invariant there when all callers should receive the behavior.
4. Keep a caller-specific fix only when that path truly has different semantics.
5. Add regression evidence through a sibling path when that is what distinguishes the root-cause fix from a symptom patch.

Do not broaden a fix merely because shared code exists. Ownership is proven by intended behavior, not proximity.

## Make dependencies earn their cost

Before adding a package, check:

- whether the repository, standard library, runtime, platform, or database already covers the need;
- whether the package replaces enough correct code to reduce total maintenance burden;
- whether its accessibility, security, browser/runtime support, bundle, licensing, and update surface fit the product;
- whether the repository already has a preferred dependency for the same job; and
- whether a small local implementation would be clearer without recreating a hard problem.

Do not replace a mature dependency with hand-written code solely to reduce dependency count. Parsing, cryptography, internationalization, rich interaction, and other edge-case-heavy domains often justify maintained libraries.

## Preserve the safety floor

Never simplify away:

- validation and authorization at trust boundaries;
- error handling, transactions, idempotency, recovery, and observability that prevent silent failure or data loss;
- security, privacy, rate limits, and abuse controls;
- accessibility semantics, keyboard behavior, focus, reduced motion, and honest UI states; or
- calibration and compatibility required by real devices, browsers, runtimes, locales, and deployment environments.

Explicit requirements and verified product invariants are part of the floor. If the simplest approach cannot preserve them, it is not the simplest valid approach.

## Record deliberate ceilings

A consciously limited implementation is acceptable when the current scale and risk justify it. Make the limit reviewable at the decision site:

```text
restraint: <chosen simplification>; ceiling: <known limit>; revisit when: <observable trigger>
```

Use this only for a real tradeoff such as a global lock, linear scan, bounded in-memory cache, or temporary compatibility adapter. Do not annotate ordinary code or vague future work. A marker without a measurable trigger is deferred ambiguity, not a decision.

For a debt review, search `restraint:` markers and report location, current ceiling, trigger, and whether the trigger has been reached. The review is read-only unless the user asks to change the implementation or persist a ledger.

## Verify in proportion to behavior

- Non-trivial logic needs focused evidence that would fail under the old behavior and pass under the new one.
- Prefer the repository's existing test level and harness. Add the smallest regression coverage that proves the invariant; do not impose an arbitrary one-test cap.
- For a bug fix, exercise the named path and the sibling or boundary path that proves the owner was fixed.
- For deletions and dependency removal, search callers, imports, configuration, generated output, and runtime entry points before declaring the path unused.
- Pair code checks with rendered, browser, device, database, or production evidence when the claim crosses into those environments.

A passing narrow test proves only its contract. A shorter diff, clean linter, successful build, or benchmark result cannot by itself prove product correctness.

## Review code for restraint

Keep complexity findings separate from correctness findings until synthesis. Report only changes with a concrete replacement:

- **Remove:** dead behavior, duplicated paths, unused flexibility, or speculative scaffolding.
- **Reuse:** local code that duplicates a canonical repository owner.
- **Platform:** custom code or a package that a suitable language or platform capability replaces.
- **Collapse:** a wrapper, layer, abstraction, flag, or configuration point with no earned boundary.
- **Re-home:** a symptom patch that belongs at the shared invariant owner.

For each finding, name the location, effect, evidence, exact correction, and any guard that must remain. Do not estimate lines saved unless measured from an actual patch. If the implementation is already direct and well-owned, say so and stop.

## Completion check

- Does every added behavior and layer serve the requested job now?
- Did the change reuse the canonical owner before introducing another implementation?
- Is each custom abstraction or dependency justified by a current boundary or edge case?
- Was the root invariant fixed without removing safety, accessibility, recovery, or observability?
- Does the verification prove the changed behavior rather than merely show that the code compiles?
