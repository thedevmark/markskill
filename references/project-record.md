# Project record

Use this reference at the start of any task inside a repository, and again whenever a task establishes a durable fact that the code does not carry. The record exists so the skill's requirements are met from a few small files instead of a fresh search of the codebase every session.

## What the record is

A small set of files that already have a conventional home. Reuse whatever the repository has before creating anything.

| File | Owns | Never holds |
| --- | --- | --- |
| `AGENTS.md` (or `CLAUDE.md`) | Operating rules, non-negotiables, precedence, and a pointer to the routing index | Product copy, design tokens, session history |
| `PRODUCT.md` | Product truth: users and their job, positioning, capabilities and constraints, terminology, voice with exemplar lines and their source paths, evidence on hand, absences that must not be fabricated | Visual recipes, invented proof, undecided facts presented as decided |
| `DESIGN.md` | The visual system: where tokens live, typography and color roles, canonical assets by path, component contracts, the committed direction, and the command that renders the surface | Copies of token values that live in code |
| `docs/context/INDEX.md` | Task routing: for each kind of task, the minimum files to load and the commands that prove the result | Any content those files own |
| `docs/context/memory/` | Versioned entries for durable, non-derivable facts, with a one-line-per-entry `MEMORY.md` index | Anything derivable from code, tests, or git history |

The index points to the owning file and holds no copies. A file that misdescribes verified behavior loses to the code and is corrected in the same change.

If the repository already carries this information under other names, use those files and do not create a parallel authority. Point to the existing owner instead of duplicating it.

## Read first

1. Look for `AGENTS.md`, `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md`, and `docs/context/INDEX.md`. Load only the routes and entries the current task names.
2. Treat the record as the starting evidence. Verify against code where the task touches it or where the record looks stale: a dated decision, a path that no longer exists, a contract the code contradicts.
3. When the record answers a question, do not re-derive the answer by searching. When it lacks an answer the task needs, derive it once from source and write it back before finishing.

## Write on learn

At the end of a task, or at a meaningful transition in a long one, record each fact that meets all three tests:

- it was derived from source, a render, a run, or the user at real cost;
- it cannot be re-derived cheaply, or it is a decision that is not visible in code; and
- it will matter to a future task in this repository.

Facts that usually qualify: voice traits with two or three exemplar lines and the path they came from; the owner of an invariant and its callers; the command that actually proves a behavior; an accepted decision with the rejected alternatives and the date; a recorded ceiling and its trigger; a canonical asset path; a contract between components or services.

Facts that never qualify: anything a grep, test run, or `git log` returns; session narrative; token values, constants, or configuration that live in code; guesses about product truth.

Write each fact into the existing file and section that owns it. When no owner exists, add one memory entry and one index line. Create only the smallest missing piece: a `PRODUCT.md` with the sections that are actually confirmed, or a `docs/context/memory/` directory with its first entry and `MEMORY.md`. Report what was created or updated.

Updating the record inside the repository is part of applying this skill and needs no separate approval unless the user or the repository's own rules restrict documentation writes. Never write the record outside the repository. Mark inferred facts as inferred.

## Keep it thin

- Entry files stay short enough to load on every task. When one grows past what an agent reads carefully, move the content to an owned file and route to it.
- One fact per memory entry. Update the entry when the fact changes; delete it when it is wrong. Do not append contradictions.
- Date every decision as an absolute date.
- Prefer a path over a description. `src/tokens.css` beats "the tokens file".

## Reconcile the record

At meaningful completion points in substantial work, integrations, and releases, review the touched documentation and its entry links. Also do this when conflicting instructions, broken paths, completed plans still marked pending, or repeated rediscovery reveal drift. Do not inventory every Markdown file after every small edit.

Keep one current authority for each contract. Compare integration specs, setup instructions, ownership maps, release notes, and pending-work lists with the final source and observed result. Correct stale commands and paths, merge duplicate current guidance into its owner, and update incoming links in the same change. Close fulfilled requirements explicitly. Keep unfinished requirements visible; deleting the plan does not complete them.

Distinguish working guidance from historical evidence. Date and mark a superseded spec as historical, with a pointer to its replacement, when its decisions or evidence still matter. Remove temporary or redundant notes only after checking references and confirming that they contain no unique requirement, accepted decision, recovery information, or required audit history. Respect retention and ownership restrictions; uncertain deletion is not routine cleanup.

Do not add another status report to explain conflicting status reports. Reconcile the existing owner, then record only the remaining decisions, proof boundaries, and unfinished work. Summarize the maintenance performed with the task result; no separate audit document is required for a routine cleanup.

## Bootstrapping a record

On the first task in a repository without a record, do not run an interview by default. Derive the confirmed facts from the README, existing copy, tokens, tests, and package configuration, write only those, and list open questions under an `Undecided` heading. Ask the user only the questions whose answers change the current task. Never fill a section with plausible generic prose to make the record look complete.

## Templates

`PRODUCT.md`, sections omitted when unconfirmed:

```markdown
# Product

## Users
## Purpose
## Positioning
## Capabilities and constraints
## Voice
Traits, then two or three exemplar lines with their source paths.
## Evidence on hand
Real content, data, assets, and proof, by path. State absences that future work must not fabricate.
## Undecided
```

Memory entry:

```markdown
---
name: <kebab-case-slug>
type: decision | owner | verification | voice | asset | ceiling
updated: <YYYY-MM-DD>
summary: <one line, used by the index>
---

<the fact, why it holds, and how to apply it>
```

Index line in `docs/context/memory/MEMORY.md`:

```markdown
- [<title>](<slug>.md) — <summary>
```

Routing row in `docs/context/INDEX.md`:

```markdown
| <task id> | <when this route applies> | <files to load> | <commands that prove the result> |
```
