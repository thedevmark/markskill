# Partner invoice import

Some invoice CSVs from our billing partner fail to import even though their amounts are valid. One example contains ` 12.50 ` in the amount column. Fix the import problem and preserve the existing ingestion contracts. Add useful regression coverage.

## Contracts

- JSON API amount tokens remain strict.
- CSV amount cells are human input; surrounding whitespace is permitted.
- Whitespace inside an amount token remains invalid.
- Importing must not change note text.
- Missing or malformed CSV amounts raise `InvalidCSV` containing the logical row number.
- Existing CSV quoting and embedded-newline handling remain supported.
- Invalid input must never be silently converted to zero.

`parse_amount(value)` accepts strings from `0.00` through `999999.99` with exactly two fractional ASCII digits and returns integer cents. It rejects whitespace, signs, exponent notation, separators, nonstrings, and out-of-range values with `InvalidAmount`.

Run the public suite with:

```text
python -m unittest discover -s tests -v
```
