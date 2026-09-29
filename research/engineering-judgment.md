# External evidence behind markskill

This note records the evidence that changed the framework. It is not a popularity argument and does not treat GitHub stars as proof of engineering quality.

## What the restraint-style evidence establishes

[Ponytail](https://github.com/DietrichGebert/ponytail) is a prominent coding-agent minimalism project with public benchmarks. Its later agentic benchmark is useful evidence that an explicit simplicity instruction can substantially reduce unnecessary implementation on over-build traps while remaining close to neutral on already-irreducible work. The same repository also documents that an earlier safety comparison was invalid because the supposedly neutral arm accidentally loaded the plugin. That failure directly informs markskill's requirement to inspect loaded instructions and isolate every arm.

An independent [480-build execution-graded evaluation](https://github.com/Deepusleepy/ponytail-benchmark) found roughly 44% less code at Ponytail's default level with no measured correctness or security loss on its task set. It also found the important counterexample: ordinary bad-input robustness fell on 5 of 24 jobs when those edge cases were not stated, and stronger minimalism made those cases more fragile. That supports retaining simplicity as one possible outcome while rejecting it as the governing target.

[Colin Eberhardt's benchmark critique](https://blog.scottlogic.com/2026/06/16/ponytail-yagni-and-the-problem-with-prompt-benchmarks.html) showed that the original comparison counted baseline answers that offered multiple options and included prose, and that some checks did not reflect a realistic coding-agent harness. The Ponytail project subsequently narrowed its public claims and added a more realistic agentic comparison. The lesson is methodological: markskill must beat a competent neutral agent under the same harness, not a deliberately under-specified or conversational baseline.

The open [performance-tradeoff issue](https://github.com/DietrichGebert/ponytail/issues/100) articulates the user's central concern: a rule that rewards the first lazy solution can reduce exploration of better approaches, while shallow structural correctness checks may miss that loss. markskill therefore scores complete behavior and architectural fit ahead of code size, and its task pairs include cases where the correct solution becomes larger.

## Established engineering guidance

Martin Fowler's [YAGNI explanation](https://martinfowler.com/bliki/Yagni.html) limits the principle to extra capability for presumed future features. It explicitly excludes refactoring and other work that makes software easier to change. YAGNI therefore cannot justify preserving an unfit abstraction or avoiding a warranted migration.

Google's engineering practices distinguish solution scope from review packaging. The [small change guidance](https://google.github.io/eng-practices/review/developer/small-cls.html) recommends self-contained review units and explicitly allows a larger change to be decomposed into a sequence. The governing review standard is [overall code health](https://google.github.io/eng-practices/review/reviewer/standard.html), while the review checklist asks reviewers to examine the design and the system as a whole, including edge cases and concurrency. Small review units do not imply a locally scoped solution.

## Consequences for this framework

- Evidence and requirements determine solution scope; neither preservation nor replacement is the default winner.
- Change size is recorded as a cost, never used as a quality proxy.
- Plausible malformed, missing, empty, duplicate, stale, delayed, and boundary inputs are considered even when a ticket omits them.
- A neutral arm must receive the same ordinary engineering obligations and must be demonstrably free of candidate instructions.
- Evaluation includes matched tasks where local repair is correct and where structural expansion is correct.
- Passing one model and harness supports only a narrow claim about those tested task families.

These sources motivate the candidate. They do not validate it. Validation begins only when the frozen protocol produces scored, reproducible runs.
