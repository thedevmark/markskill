# Frozen instruction arms

`current-restraint/` is the pre-Urteilskraft skill bundle that was installed at `C:\Users\mark\.codex\skills\anti-slop-design` on 2026-09-21 immediately before the rewrite. The archive preserves the text exactly after normalizing line endings to LF. It is not inferred from repository `HEAD`.

The neutral arm is not a deliberately weakened prompt. It consists of the same task, repository instructions, permissions, safety requirements, tools, and verification contract as the candidate, with no additional general engineering-judgment skill.

`urteilskraft-candidate/` is the first candidate bundle produced by the rewrite and Astra audit on 2026-09-21. The example run manifest records its complete inventory and hashes. Later edits to the working skill do not change this frozen candidate; a revision must become a newly identified arm.

## Current Restraint normalized SHA-256

Hashes use UTF-8 without BOM and LF line endings.

```text
agents/openai.yaml  bf8e98d6709676b4b48e091f70b3fb48e0455656481764304330e67155a629fc
references/code-restraint.md  1b7f2a1930812fe5bb09090c940a0eb0eac23d825602d13deaf40ca72b9f9764
references/design-restraint.md  d4327bac909913c45301c54224c9f2cd7f0772b2d18bf1f3699f6cbff7f84ab0
references/evidence-and-testing.md  ea63484f5b00fe69cd8b9b2a5b3308770bd98f7af6e0bb0edfe85ca56da0080b
references/promotional-assets-and-feedback.md  535569e581fef9bbd9cdfa4aa398571647f2f0e605393a0009127abf591684e8
references/visual-and-interaction.md  b7dc9484eaa6490eb801c7b74b162b7a949c1be7344f33fcb2525c7ba971b478
references/writing-and-copy.md  e6cfc8e74883e6f9d638414a36cfacc54587130f66e8b01e060af5b592ce235c
SKILL.md  0d6073f70bb1268ff0d5486d74b132c99a7820376ba0b4c8c5625f6c9b10756e
```
