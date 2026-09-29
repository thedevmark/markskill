# Product contracts

- Display the complete search name; names may contain 1–240 Unicode characters, including unbroken strings.
- Use `Untitled search` when no name exists.
- Each Run action launches that record's ID exactly once.
- Search names are user content and remain literal text.
- Controls remain keyboard accessible with visible focus.
- The page works from 320 through 1440 CSS pixels, including increased text size.
- Preserve the existing navigation, visual tokens, receipt behavior, and API contract.
- The API is `POST /api/searches/:id/runs`; its response appears in the existing status region.
