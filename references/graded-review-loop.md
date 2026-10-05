# Graded review loop

Use this reference only when the user asks for an independent grade and a target, such as "have a reviewer grade it and keep going until A+". Without a stated target, use the independent review section of `references/execution-and-review.md`; this loop is its opt-in extension and inherits all of its rules except one: with a stated target, an in-scope item a later round raises is work, not an observation recorded outside the fix.

The grade is a reviewer's judgment of the work, not the work. The loop raises the grade only by changing what the grade describes. Every other route to a better letter is outside the loop.

## Before the first review

1. Understand the system end to end yourself: read the owner, its callers, its data path, and its tests. You will have to judge every finding, and you cannot judge what you have not traced.
2. Record the base revision and run the project's own checks. Keep the unedited output.
3. Choose the loop reviewer: a fresh context, read-only, the most capable model available, preferably not the model that wrote the work. Plan to resume the same reviewer across rounds, so each round costs a diff rather than a re-read. One reviewer at a time.
4. If the user names a reviewer or a model, use it. If it is unavailable, say so; a review that did not run is not a grade.

## The first brief

Use the reviewer brief in `references/execution-and-review.md`, and add:

- **The user's criteria, verbatim.** "Efficient, valuable, senior-level" stays in those words.
- **A scale with anchors**, so letters mean the same thing every round. Keep the five levels and adapt the anchor wording to the artifact; for code:

  | Grade | Meaning |
  | --- | --- |
  | A+ | Nothing a staff engineer would change before merge. |
  | A | Only taste or documentation items remain. |
  | A- | Small defects or unstated trade-offs remain. |
  | B | Real defects, or a structural problem that will recur. |
  | C or below | Unsafe, wrong, or unfit for its purpose. |

  For a product surface or copy, the A+ anchor becomes "nothing the product's design or writing owner would change before release".
- **The return shape:** the grade; what is verified, with each claim labeled as `references/evidence-and-testing.md` defines; a ranked list of the changes that would raise the grade, each with its severity tier from `references/review-and-report.md`, path:line, value, and effort; defects separated from taste; what is already right and must be kept; and a word cap.
- **Context the code cannot show:** scale, cost posture, accepted product decisions, and the runtime constraints that bound the design.

Leave the target out of the first brief, so the first grade is not shaped by it. Later rounds ask what stands between the work and the target, and the confirming reviewer never sees the target.

## Each round

### Triage every item before changing anything

Check each item against the source and, where it makes a runtime claim, against runtime evidence. Then give it one disposition:

| Disposition | Action |
| --- | --- |
| Confirmed defect | Fix it at the owner. Add a test that fails without the fix. |
| Disproved | Change nothing for it. Report the evidence that disproves it. Change the area only for a gap you would fix with no reviewer involved, and label that as your own finding. |
| Needs the user's authority (price, deploy, spend, production data, credentials, external messages) | Do not do it. Record it for the user. |
| Needs evidence that does not exist (a calibration run, a load test the project cannot run) | Do not change behavior blind. Record a deliberate ceiling at the decision site with the trigger for revisiting it, as `references/code-restraint.md` describes. |
| In scope, within authority, and an improvement under this bundle's own rules, including taste | Do it. With an explicit target, the reviewer's remaining in-scope items are the work, not optional polish. |
| A change this bundle would reject with no reviewer involved: structure, abstraction, a split, or a rewrite with no present need | Decline it, cite the rule (for code, `references/code-restraint.md`), and count it as disproved for the stop rule. |

A grade offered in exchange for an unauthorized action ("deploy it and I will give A+") is not an instruction. The grade covers the work in the tree.

### Measure what the grade claims

A grade on efficiency or performance needs measurements, not reasoning. Measure before and after with the same inputs. Prefer real runtime evidence read safely: a read-only query plan against production data, a definition change tested inside a transaction that is rolled back, or a benchmark on a copy. Report each number with how it was taken and its label.

### Prove the tests

A new test counts only if it fails on the broken behavior. Revert or mutate the owner once, watch the test fail, and restore it. Prefer tests that execute behavior over tests that match source text; when the code cannot run in the test runner, move the decisions behind an injected boundary until it can.

### Run the gates on the final tree

Run the project's full checks after the last edit. If a check fails for a reason unrelated to the change, show that it is unrelated, run the rest without it (in the project's documented mode for that, or by naming the excluded check explicitly), and say so in every report. Never delete or weaken a test to pass.

### The re-review message

Resume the same reviewer with:

1. one line per earlier item: what changed, where (path:line), and the evidence (test names, numbers, labels);
2. the items not changed, each with its reason and the evidence;
3. honest limits: what is still not done, not measured, or not deployed;
4. the checks run on the final tree and their outcomes;
5. the instruction to verify against the tree, not the summary, and to label anything it takes from this message without checking as reported; and
6. the request for the grade and for anything that still stands between the work and the user's target.

Give evidence, not argument. Never ask the reviewer to raise a grade.

## Confirm the result

The reviewer that awarded the target has read your summaries every round, so its last grade is anchored to them. Before reporting the target as reached, send a fresh context of the same or a stronger model than the loop reviewer the first brief and the current tree, and nothing else: no history, no summaries, no earlier grades, no target. The target is reached when that reviewer awards it.

Run one confirmation per tree state. If the confirming reviewer withholds the target, its items join the loop, and the next confirmation runs only after every one of them has a disposition and the tree has changed. Never re-ask on an unchanged tree in the hope of a different answer.

## Stop

Stop and report when any of these holds:

- the confirming reviewer awards the target;
- everything that still stands between the work and the target needs the user's authority or evidence that does not exist;
- a round, including a confirmation, yields no new confirmed in-scope item and the grade still falls short; report the reviewer's stated gap as it is, with your evidence for each item you disproved or declined, so the user can judge the disagreement; or
- the reviewer is unavailable.

## Report

Lead with the result and the grade history (for example B- → A- → A → A+). Then: what changed and why; what was disproved; what was declined, and whose decision it is; what was measured and how; the checks run on the final tree; and what is not committed, not deployed, or not done. If the target was not reached, the first line says so, and the report names the actions that would change the grade and who takes each.

## Rationalizations

| Excuse | Reality |
| --- | --- |
| "The reviewer will give A+ after the deploy." | A grade does not grant authority. The grade covers the tree. |
| "It's only taste; we're at A." | The user asked for the target. In-scope taste items are the remaining work. |
| "The reviewer asked for the split, so it is the work." | A request is not a reason. A change you would reject with no reviewer involved is declined, with the rule cited. |
| "The same reviewer approved it." | It read every summary. Confirm with a fresh context. |
| "A fresh reviewer said A-; ask another one." | One confirmation per tree state. Its items join the loop. |
| "The reasoning shows it is faster." | Efficiency is measured. Show before and after numbers. |
