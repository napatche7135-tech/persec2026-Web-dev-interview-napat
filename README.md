# PERSEC Web Developer Pre-Interview (TypeScript)

Six independent solutions, one file per question in `src/`, with automated tests.

## Run

```bash
npm install
npm test
```

`npm run build` compiles the TypeScript into `dist/`.

## Files

1. `01-brackets.ts`: nested bracket validation using a stack.
2. `02-sort-strings.ts`: natural string sorting, alphabetic then numeric.
3. `03-autocomplete.ts`: case-insensitive matches ranked by prefix, middle, suffix; ties retain original order.
4. `04-roman.ts`: standard Roman numerals from 1 to 3999, both directions.
5. `05-descending-digits.ts`: sort digits from high to low.
6. `06-tribonacci.ts`: build a sequence from 0–3 seed values.

## Assumptions

- Bracket input contains only the six permitted bracket characters. Empty input is valid.
- Natural sorting uses `Intl.Collator('en', { numeric: true })`.
- Empty autocomplete search matches every item, and results preserve original order.
- Roman numerals use the conventional range 1–3999; invalid forms throw errors.
- Missing Tribonacci seed values are filled with zeros. The assignment does not specify this behavior explicitly.
- This submission was generated with AI assistance. See `prompts.md`.
