# Elephant and goldfish

Adapted from Google's [Elephant-Goldfish Model](https://github.com/google/elephant-goldfish-model) (Apache 2.0) and Dave Rensin's essay [Elephants, Goldfish, and the New Golden Age of Software Engineering](https://medium.com/@drensin/elephants-goldfish-and-the-new-golden-age-of-software-engineering-c33641a48874). The wording and the scaling rules below are markskill's own.

A single long session that interviews the user, designs the change, writes it, and reviews it validates its own assumptions. The fix is a split by context:

- **Elephant:** the working session. It holds the user's goal, the project record, the conversation, and the codebase map. It explores the problem, writes the plan, and implements.
- **Goldfish:** fresh reviewers with no conversation history. Each gets only the written artifact, the repository, and one lens. What the artifact does not say, the goldfish does not know, so every unstated assumption surfaces as a finding.
- **User:** owns product trade-offs and accepted decisions. Everything else the elephant resolves itself, as `SKILL.md` "Own the outcome" requires.

## When to use it

Use it for most work: features, refactors, migrations, contract or schema changes, multi-file fixes whose cause is not yet proven, new tools or surfaces, and any plan another session or agent will execute.

Skip it for short tasks, where the review costs more than the mistake it could catch:

- a one-line or single-file fix with an obvious cause and an existing check;
- a copy, style, or config tweak;
- fast iteration (`SKILL.md` "Fast iteration");
- a question, a lookup, or a read-only explanation;
- work the user explicitly asked to keep quick.

When unsure, ask whether a fresh reader of the plan could plausibly find something the elephant missed. If yes, run at least the light pass.

## The loop

1. **Elephant writes the plan to a file.** Not chat. Keep it at architecture altitude: problem, goals and non-goals, the chosen approach and the alternatives it beat, risks and failure modes, the exact files to create, change, or delete, phases that each leave working software, and the checks that prove each phase. Implementation code belongs in the repository, not in the plan (see [execution and review](execution-and-review.md#keep-the-brief-compact)).
2. **Goldfish review the plan** through the lenses below, sized to the work.
3. **Elephant triages the findings.** Verify each against the repository. Fix the plan for valid findings, reject wrong ones with evidence, and carry only genuine product trade-offs to the user, together, as one question.
4. **Elephant implements** against the triaged plan. The plan's file list is the write boundary; a change outside it is either a plan correction (record why) or scope creep (drop it).
5. **Goldfish review the result** when the change meets the independent-review bar in [execution and review](execution-and-review.md#hand-off-independent-review).
6. **Check drift** before finishing: does the plan, design doc, or project record still match what shipped? Correct whichever is wrong, per [record maintenance](project-record.md#reconcile-the-record).

## Lenses

Each goldfish takes one lens. Give it the lens text, not a persona name.

- **Zoom out.** Does the plan solve the root problem, not a symptom? Is anything built for a speculative future need? Does something in the codebase or a maintained library already do this? Search before answering. Is the new logic in the right layer? Does the plan drop into implementation detail where it should state interfaces and data flow?
- **Comprehension.** Paraphrase first: what the plan proposes, and how the existing system works according to the plan, in two to five sentences each. A section that cannot be paraphrased is a blocker. Then flag project-specific terms, prerequisites, and "the system handles this" claims the plan never defines or links. The elephant compares the paraphrase with the intent; a wrong paraphrase is a finding.
- **Critic.** Were real alternatives considered, and were they rejected for concrete reasons? What are the failure modes, security and data risks, scale limits, and recovery paths? What happens on retry, duplicate, partial failure, and rollback?
- **Readiness.** Could a capable engineer new to the codebase execute this on the first attempt with zero design decisions left to them? Are the exact file paths listed? Does every phase leave a buildable, checkable state? Does each phase name the check that proves it?
- **Drift** (for result review or maintenance). Compare the named documents with the current source and list every divergence with both locations. The goldfish reports; the elephant decides which side is wrong.

## Size the swarm

- **Light pass** (a moderate change in one owner): one goldfish with the zoom-out and readiness lenses together.
- **Standard** (a feature, refactor, or cross-file change): zoom out, comprehension, critic, and readiness as parallel goldfish.
- **Heavy** (a cross-owner contract, migration, security boundary, or data risk): the standard set, plus a second zoom-out pass after the plan absorbs the critic's additions, since fixes tend to add complexity. Run duplicate goldfish on the critic lens when recall matters more than cost.

Goldfish are read-only and cheap; still respect [share the machine](execution-and-review.md#share-the-machine).

## Brief a goldfish

The brief is the isolation. Anything the elephant adds beyond the artifact leaks its bias back in.

Give it:

- the artifact path (and the base revision, for result review);
- the repository, read-only;
- the one lens, verbatim;
- the project record files that a newcomer would be pointed to; and
- the return contract.

Never give it the conversation, a summary of the reasoning, the elephant's preferred answer, or phrases such as "the user already decided" that are not written in the artifact. If the plan relies on a decision, the plan must state it; a goldfish that flags it as missing has found a real gap.

```markdown
## Goldfish: <lens>
Artifact: <path> (base <revision>, if reviewing a result)
Read first: <project record files>
Lens: <the lens text above>
You have no other context. Do not edit files. Report findings ranked Blocker, Major, Nit. For each: affected section or lines, what is wrong, why it matters, and the evidence (file and line) for any claim about the code. List what you could not verify.
```

## Handle the returns

- A goldfish that timed out, failed, or returned nothing did not review. Retry once; then mark it "not run". Never count it as a clean lens.
- Merge the returns into one findings file grouped by severity, with duplicates collapsed and each finding tagged with its lens. Keep long reports out of chat; point to the file.
- Findings are evidence to verify, not commands. Apply the triage rules in [execution and review](execution-and-review.md#hand-off-independent-review): check each claim against the repository, push back with evidence, and search for real callers before building anything a reviewer called incomplete.
- Fix blockers before implementing. Majors are fixed or disproved. Nits are taken when cheap, otherwise dropped without ceremony.
- Do not loop the plan review until silence. One pass, triage, one targeted re-check of changed sections when blockers were fixed. A graded target is the exception (`references/graded-review-loop.md`).

## Without subagents

When the host cannot start a fresh context, a review in the same session is not a goldfish; say so instead of presenting it as independent. Use another agent or vendor per [across agents and vendors](execution-and-review.md#across-agents-and-vendors), or run the lenses as a self-check and label the result "self-reviewed".
