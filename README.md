# Restraint Framework

A restraint framework for code and product design. It guides implementation, dependencies, interfaces, copy, dashboards, charts, promotional assets, docs, and claims about verification. The code and design paths are distinct, so a small bug fix does not inherit a visual design audit and a visual revision does not collapse into a linter pass.

A [before/after demo](https://thedevmark.github.io/restraint-framework/) shows one product page as agents ship it by default, and the same page after the skill runs.

It runs on any agent that loads the Agent Skills convention (`SKILL.md` plus reference files): Claude Code, Codex, ZCode, and others. The skill is plain markdown, so it also works as a standalone review checklist for a human.

## What it actually does

- **A code path.** Trace the real behavior and its callers, fix the owning invariant, reuse the codebase and suitable platform capabilities, make dependencies earn their cost, and preserve the safety and verification floor.
- **A design path.** Ground the surface in real content and established tokens; choose the right job for a persuasive, operational, reading, or experience surface; then refine hierarchy, copy, visual emphasis, interaction, and accessibility. Create, critique, and revise are design operating modes, not a checklist for every code task.
- **A mixed path when needed.** Product work can use both references with one coherent change and verification plan.
- **Fast iteration mode.** For rapid corrections, make the scoped edit, run the cheapest meaningful check, report, and stop that iteration. Full suites and repeated screenshot rounds wait for an actual risk, failure, or required release gate.
- **Observable patterns, not guesses.** It never claims "an AI made this." It names the pattern and its effect: card soup, synonym cycling, uniform cadence, importance puffery, unearned glow, stacked containers, invented claims.
- **Priorities with an order.** P0 truth, task, safety, and access failures before P1 ownership, complexity, hierarchy, and convergence failures before P2 local clarity and polish.
- **It protects your product.** Established tokens and component contracts are normative, canonical assets get reused rather than imitated, and if the work is already distinctive it says so and stops instead of manufacturing a redesign.

## Scope check

The claim is "everything the agent builds and ships." Check it against the files instead of trusting this README:

| claim | enforced by |
|---|---|
| No fluff in copy | `references/writing-and-copy.md` — semantic redundancy pass, pattern clusters, weak vocabulary |
| Nothing invented | SKILL.md priorities — fabricated claims, invented metrics, testimonials, and outcomes are P0 failures |
| Looks good, not decorated | `references/visual-and-interaction.md` — tell catalog, emphasis rules, squint test |
| Fits your product, not a template | `references/design-restraint.md` — grounding in real content and tokens, one committed direction |
| Survives real use | `references/design-restraint.md` — keyboard, focus, states, zoom, reduced motion |
| Honest about what was verified | `references/evidence-and-testing.md` — labeled evidence; never claim a render or test that did not happen |
| Iterates without thrashing | `SKILL.md` fast iteration mode, decision ledger, feedback handling in `references/promotional-assets-and-feedback.md` |
| Protects accumulated context | direct execution for context-heavy or tightly coordinated work; evidence-backed delegation only for bounded, independent tasks |
| Builds only what earns its keep | `references/code-restraint.md` — comprehension-first ownership, implementation ladder, dependency gate, safety floor, regression evidence |

The boundary, stated plainly: this governs implementation restraint, product surfaces, and verification honesty. It is not a substitute for dedicated correctness, security, performance, or architecture review; it keeps those guards from being traded away in the name of minimalism.

## Install

Clone straight into your agent's skills directory:

```bash
# Claude Code
git clone https://github.com/thedevmark/restraint-framework.git ~/.claude/skills/restraint-framework

# Codex
git clone https://github.com/thedevmark/restraint-framework.git ~/.codex/skills/restraint-framework

# ZCode
git clone https://github.com/thedevmark/restraint-framework.git ~/.zcode/skills/restraint-framework
```

On Windows the same commands work in Git Bash; in PowerShell replace `~/` with your home directory. To share one copy across agents, clone once and symlink the others into it. For a single project only, clone into `.claude/skills/` (or your agent's project-level equivalent) inside the repo.

No skill infrastructure? Open `SKILL.md`, read it, and apply it. That is the whole mechanism.

## Use

Ask your agent, in plain language:

- "Use restraint-framework to critique the pricing page."
- "Revise the empty states on the dashboard. Distill, don't redesign."
- "Audit this store screenshot set for slop before I ship it."
- "Simplify this diff without moving the behavior or deleting its guards."
- "Fast iteration: make this one change, check the affected behavior, and report."

The skill also applies to over-engineering, YAGNI, dependency choice, refactoring, polish, hierarchy, taste, density, clarify, distill, harden, quieter, or bolder. A critique names the few highest-value findings and exact corrections. A revision reports what changed, what was preserved, and what was actually verified.

## Files

| file | job |
|---|---|
| `SKILL.md` | Shared rules, path routing, fast iteration, and reporting |
| `references/design-restraint.md` | Design modes and workflow for product surfaces |
| `references/writing-and-copy.md` | Copy rules, pattern-cluster table, editing tests, example corrections |
| `references/visual-and-interaction.md` | Visual tell catalog and verification matrix |
| `references/evidence-and-testing.md` | Evidence labeling and audit method |
| `references/promotional-assets-and-feedback.md` | Store art, thumbnails, social graphics, iterative feedback handling |
| `references/code-restraint.md` | Implementation ladder, root-cause ownership, dependency restraint, safety floor, and code-review method |
| `agents/openai.yaml` | Interface metadata for OpenAI-compatible agent hosts |

## Where this fits: context engineering

This framework is one public piece of a context-engineering system I am building across my repositories. The premise: you get better agent work by engineering what the agent sees than by writing a cleverer prompt. Each repo carries its own operating context — an `AGENTS.md` that is the single authority, thin tool adapters instead of duplicated instructions, a routing index that loads only task-relevant files on demand, guarded versioned memory for durable facts, compaction and sub-agent isolation conventions, and an executable test that fails when the context layer itself drifts. The repos prompt themselves; the agent arrives routed.

This repo is the shareable surface of that system: the skill that keeps the output honest while the context layer keeps the input honest. The private side is in active development and in daily use.

## License

MIT
