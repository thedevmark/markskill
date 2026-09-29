from pathlib import Path
import unittest

from ingest import InvalidCSV, import_entries


ROOT = Path(__file__).resolve().parents[1]


class CSVImportTests(unittest.TestCase):
    def test_ordinary_csv_imports(self):
        text = (ROOT / "examples" / "ordinary.csv").read_text(encoding="utf-8")
        self.assertEqual(
            import_entries(text),
            [
                {"amount_cents": 1250, "note": "monthly fee"},
                {"amount_cents": 0, "note": "free sample"},
            ],
        )

    def test_malformed_amount_reports_logical_row(self):
        with self.assertRaisesRegex(InvalidCSV, r"row 3"):
            import_entries("amount,note\n12.50,ok\n12.5,bad\n")

    def test_note_whitespace_and_quoted_comma_are_preserved(self):
        [entry] = import_entries('amount,note\n12.50,"  setup, then review  "\n')
        self.assertEqual(entry["note"], "  setup, then review  ")

    def test_partner_amount_cells_allow_surrounding_whitespace(self):
        text = (ROOT / "examples" / "partner.csv").read_text(encoding="utf-8")
        self.assertEqual(
            import_entries(text),
            [
                {"amount_cents": 1250, "note": "  keep both sides  "},
                {"amount_cents": 0, "note": "free sample"},
            ],
        )


if __name__ == "__main__":
    unittest.main()
