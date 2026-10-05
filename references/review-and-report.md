# Review and report

Use this reference when writing a critique, a completion report, or any statement that work is done. It is short because it is loaded often.

## Claim gate

Before any statement of success, name the check that would prove it, run it on the final relevant change, and read the whole output. Then claim with the evidence attached. If the sentence needs "should", "probably", or "seems", the claim has outrun the evidence. The false equivalences to avoid are tabled in `references/evidence-and-testing.md`.

## Severity tiers

Rank every finding:

| Tier | Meaning |
| --- | --- |
| P0 | Blocks the task, or breaks truth, safety, or access |
| P1 | Causes significant difficulty, or is an ownership, architecture, or complexity failure |
| P2 | A workaround exists |
| P3 | Polish |

When unsure between two tiers, ask whether a user would contact support. If so, it is at least P1. Decorative cleanup and diff size never displace a broken job.

## Report shapes

- **Critique:** the few findings that would most improve the work, each with tier, location, effect, and exact correction. Name concrete effects rather than guessing who made the artifact. Findings that need the project record go under a "record" heading.
- **Revision:** what changed, what was preserved or replaced, what ran with its outcome, and any material gap. Label each claim source-confirmed, render-observed, test-confirmed, inferred, or reported where confidence matters.
- **Both:** lead with the result. Include only the detail the reader needs to assess it. No narration of the process.

## Delegation

Use subagents only for bounded, independent work where delegation is authorized and the result can be checked against source or artifacts. Context-heavy or tightly coordinated decisions stay in one thread. The brief, return, and review contracts are in `references/execution-and-review.md`.

## Rationalizations

| Excuse | Reality |
| --- | --- |
| "A smaller diff is safer." | A patch that preserves the failure is the larger change once it recurs. |
| "The user said fast, so skip the check." | Fast iteration changes cadence, not correctness. Run the cheapest check that catches the likely mistake. |
| "The test passed, so the owner is fixed." | A test proves its own contract. Exercise the sibling path that separates an owner fix from a symptom patch. |
| "Linter and build are clean." | They prove syntax and types, not behavior. |
| "I ran it earlier." | Evidence applies to the tree it ran on. Re-run after the last relevant change. |
| "The reviewer approved it." | Review output is evidence to verify, not a verdict. |
| "It will be obvious next time." | It was not obvious this time. Write the fact into the record while the evidence is in hand. |
| "This just needs a redesign." | A redesign needs a failure the current composition cannot fix. If the work is fit, say so and stop. |
