# Writing and Copy Reference

Use this reference for interface copy, landing pages, product messages, empty and error states, public writing inside a design, and any request to make copy feel less AI-made.

## Contents

- Start with the communication job
- Match register and tone to the surface
- Set the message hierarchy
- Apply the base rules
- Write by component
- Watch for pattern clusters
- Common weak vocabulary
- Use automated prose checks carefully
- Write for access and localization
- Run the editing tests
- Example corrections

## Start with the communication job

Identify:

- who is reading;
- what they already know;
- what they need to understand or do next;
- the complete interaction or reading path surrounding the text;
- their likely emotional state and the consequence of getting it wrong;
- what evidence the product actually has;
- which voice traits must survive the edit.

The best line is not the cleverest line. It is the shortest truthful line that makes the next decision easier.

## Match register and tone to the surface

- **Persuade:** earn attention with a specific promise, mechanism, tension, or proof. Allow more personality, but do not confuse performance with substance.
- **Operate:** name the object, state, action, consequence, and recovery. Stability beats novelty.
- **Read:** structure for scanning and comprehension. Put the needed answer before background.
- **Experience:** let the work lead. Use labels and orientation only where the artifact cannot explain itself.

Choose the mode from the current surface. A software company's landing page is Persuade; its dashboard is Operate; its documentation is Read.

Keep voice consistent across the product. Change tone for the moment. A routine save can be terse; a payment failure, access loss, privacy decision, or destructive action needs calm precision; an earned milestone can be warm without narrating the user's identity.

## Set the message hierarchy

For each state, decide:

1. the one fact the user needs now;
2. the action available next;
3. supporting context that changes the decision;
4. the tone appropriate to the user's state and stakes.

Say each idea once. If the heading already names the state, the body must add consequence, context, or recovery—or disappear.

## Remove semantic redundancy, not useful repetition

Judge repetition by function and proximity, not matching words alone. For every fact, entity list, claim, status, label, or action that appears more than once in the same scan region or interaction step:

1. Choose the canonical owner: the place where the information is most useful and specific.
2. Ask what each other appearance contributes: new information, local context, disambiguation, state, action, accessibility, comparison, confirmation, or orientation after meaningful distance.
3. If it contributes none of those, delete it, merge it into the canonical owner, or replace it with higher-level information such as the category, scope, count, or verification state.

Common collision points include a heading and subhead, summary and rows, chart title and legend, card label and helper text, button and adjacent instruction, or status banner and inline state. Review the rendered neighborhood together; isolated strings can look justified while the complete surface repeats itself.

Keep repetition when independent items must remain understandable on their own, when a user may enter midway through a flow, when a critical consequence needs confirmation, or when visible and accessible labels must stay aligned. Do not hide required labels, force users to remember distant context, or rotate synonyms merely to avoid repeated wording. Stable terminology is not redundancy.

## Apply the base rules

- Put the point before the setup.
- Keep one idea per sentence, label, or paragraph when possible.
- Prefer active voice and direct verbs.
- Replace abstract nouns with the thing, action, mechanism, or consequence.
- Use familiar product language. Never make users decode an internal metaphor.
- Match the exact names and capitalization of controls, routes, settings, and product objects the user will actually see.
- Repeat the correct term instead of cycling through synonyms.
- Cut adjectives and adverbs that do not change the meaning.
- Keep nuance and real uncertainty. Plain language must not flatten important distinctions.
- Preserve distinctive voice, useful edge, spoken cadence, and honest admissions.
- Do not make every sentence equally polished, equally short, or identically structured.

## Write by component

### Headline

- State the product's real promise, mechanism, or tension.
- Make it specific enough that a competitor could not use it unchanged.
- Avoid a generic aspiration followed by a vague transformation.
- Do not force a rhyme, binary contrast, or aphorism to manufacture importance.

### Subhead

- Explain the missing mechanism or scope, not the headline again.
- Name what the product helps the user do in language visible in the product.
- Remove laundry lists. Pick the few capabilities that prove the headline.
- If the product is a system, describe the system plainly instead of reaching for "workspace," "workflow," "hub," or "copilot" by default.

### Button and link

- Start action labels with a specific verb when space allows.
- Predict the result: "Save API key" beats "Continue."
- Keep the same verb in confirmation feedback: "Publish" becomes "Published."
- Distinguish navigation from mutation in wording and semantics.
- Use unique link text. Avoid "Click here," "Learn more," and repeated "Get started" when a concrete destination fits.
- Use an ellipsis only when the action opens another decision or form.

### Label and help text

- Make the label name the field or control. Do not make it also carry instructions, marketing, and status.
- Put persistent essential guidance inline. Use tooltips for secondary help, not missing product explanation.
- Remove helper copy that repeats the label or obvious placeholder.

### Loading and progress

- Say what is happening in user terms when that knowledge helps.
- Keep the original action label visible while loading when possible.
- Do not invent pseudo-scientific stages, confidence, or countdowns.
- If a threshold is real, name the concrete input and consequence: "Add 5 outcomes to see company trends." Do not say a hidden system is "calibrating" unless calibration is real and meaningful to the user.

### Empty state

- Explain why the area is empty only if the reason is not obvious.
- Offer the next useful action.
- Do not celebrate emptiness, joke at the user, or fill the space with generic motivation.

### Error

- Say what failed.
- Preserve anything the user needs to avoid losing work.
- Explain how to recover or what happens next.
- Do not blame the user or substitute "Oops," humor, or a reflexive apology for an explanation. Preserve established voice when it fits the stakes and leaves the failure and recovery clear.
- Example: "Couldn’t save the report. Check your connection and try again."

### Success and achievement

- Name the completed action or concrete milestone.
- Avoid narrating the user's feelings, superiority, luck, or identity.
- Prefer "10 applications tracked" to "You are past the point where most people quit."
- Do not inflate routine activity into a heroic transformation.

### Metrics and claims

- Use real numbers with provenance or omit them.
- Name what was measured, over what period, and against what baseline when relevant.
- Never turn unavailable data into zero, certainty, a trend, or a precise score.
- Replace "faster," "smarter," and "better" with the actual changed behavior or evidence.

## Watch for pattern clusters

These patterns are editing signals, not proof of who wrote the text. One instance can be intentional. Several stacked together usually make the copy feel generated.

Do not accept a low detector score as proof of quality. Pattern matchers commonly miss short, domain-specific slop such as vague achievement narration, pseudo-system language, unsupported speed claims, and polished slogans. Semantic fit, truth, and usefulness require reading.

| Signal | Why it fails | Better move |
| --- | --- | --- |
| Throat-clearing: "Here’s the thing" | Delays the point | Start with the point |
| Binary contrast: "It’s not X. It’s Y." | Manufactures drama | State Y and support it |
| Faux insight: "What most people miss" | Claims authority without evidence | Make the actual claim |
| Symmetrical slogan: "From X to Y" | Optimizes cadence before meaning | Name the mechanism or result |
| Rule-of-three list | Creates artificial completeness | Keep only distinct necessary items |
| Colon reveal | Turns ordinary information into a reveal | Use a direct sentence |
| Dramatic fragments | Gives every point the same fake weight | Restore natural sentence rhythm |
| Uniform cadence | Sounds assembled from a template | Let sentence shape follow thought |
| Importance puffery | Tells the reader what to feel | Show the fact or consequence |
| Abstract benefit stack | Could describe any product | Name actions, objects, and states |
| Synonym cycling | Makes the product model unstable | Repeat the clear term |
| Treadmill restatement | Adds words without new information | Delete the duplicate sentence |
| Fake-profound ending | Ends on a transferable aphorism | End on a fact or next action |
| Sycophancy or narration | Talks about the conversation instead of the work | Give the answer |
| Unsupported breadth | Claims "every" or "all" without proof | Narrow to what the product handles |

## Common weak vocabulary

Scrutinize, but do not mechanically ban:

`elevate`, `unlock`, `empower`, `seamless`, `powerful`, `intelligent`, `effortless`, `transform`, `reimagine`, `streamline`, `robust`, `dynamic`, `holistic`, `comprehensive`, `personalized`, `tailored`, `game-changing`, `next-level`, `journey`, `ecosystem`, `workspace`, `workflow`, `hub`, `copilot`, `momentum`, `opportunity`, `insights`, `calibrating`, `surfacing`.

Keep a term when it is literal, established in the product, or more precise than the alternative. Cut it when it substitutes for an explanation.

## Use automated prose checks carefully

- Run the project's configured prose or inclusive-language linter when one exists and the changed files are in scope. Do not install a new writing tool as a side effect of a copy edit.
- Treat a pattern hit as a review prompt, not a verdict. Names, quotations, domain terms, reclaimed language, code, and literal descriptions can trigger valid-looking false positives.
- Configure or suppress a rule narrowly and explain why. Do not weaken the whole style gate to clear one contextual phrase.
- Keep human judgment responsible for truth, product fit, hierarchy, tone, humor, dialect, and spoken cadence. A linter can catch repetition, jargon, mechanics, or risky terms; it cannot certify that a line sounds human.
- Review only the changed or relevant surface when possible. Do not turn a scoped edit into an unrelated repository-wide rewrite.

## Write for access and localization

- Write complete messages instead of concatenating fragments that translators cannot reorder.
- Keep variables, dates, numbers, units, and plurals structured and locale-aware.
- Expect text expansion and right-to-left layout. Do not force copy to fit a brittle width.
- Keep visible labels and accessible names aligned so voice-control and screen-reader users encounter the same action.
- Prefer inclusive, direct language without sanding away a deliberate speaker, community term, or brand voice. When identity language is involved, use the affected person's or community's stated term where known.
- Make alt text convey the image's information; use empty alt text for decoration.
- Do not rely on punctuation, iconography, position, or color to carry meaning alone.
- Check copy at target widths and 200% zoom with long names and dynamic values.

## Run the editing tests

### Portability test

For claims and descriptive copy, could the line move unchanged to another product or company? If so, look for a fact, mechanism, consequence, or judgment specific to this one. Keep familiar functional labels such as "Save" or "Cancel" when they already describe the action clearly.

### Deletion test

Delete the sentence. If no information or action disappears, leave it deleted.

### Canonical-owner test

For every nearby repeated fact, example, label, status, or action, point to its canonical owner and name the distinct job of each remaining appearance. If an appearance has no distinct job, remove it. If the detail already exists in rows or artifacts, let the summary communicate category, scope, count, or state instead of replaying the same details.

### Same-term test

Trace the main nouns and verbs through the flow. Rename only when the underlying object or action changes.

### Truth test

Underline every claim. For each one, locate product behavior, user-provided evidence, or a source. Narrow or remove anything unsupported.

### Read-aloud test

Read the copy once at normal speed. Fix breathless lists, repeated rhythms, accidental rhyme, tongue-twisting noun stacks, and lines no person would say.

### Shuffle test

Temporarily reorder paragraphs or cards. If the piece still means the same thing, the structure may be generic. Restore a sequence based on task, cause, time, or decision.

### Screenshot test

Read the copy in its rendered layout. A good sentence can still fail because it wraps badly, competes with nearby text, or arrives at the wrong moment.

### Flow test

Read arrival, action, loading, success, failure, empty, and return states in sequence. Check that nouns and verbs remain stable, consequences arrive before decisions, and no two surfaces compete to announce the next step.

## Example corrections

- "Keep every opportunity moving" → "Track each application through interviews and follow-ups."
- "Pipeline insights are calibrating" → "Add 5 outcomes to see company trends."
- "Your intelligent job-search workspace" → "Track applications, follow-ups, interviews, and offers in one place."
- "From the role you find to the answer you get" → state the concrete product action instead; do not repair the rhyme.
- "Apply 3× faster" → remove it unless the measurement and baseline exist.

Treat these as demonstrations of specificity, not reusable landing-page templates.
