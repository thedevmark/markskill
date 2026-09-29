import unittest

from ingest import InvalidAmount, create_entry


class APITests(unittest.TestCase):
    def test_strict_amount_is_converted_to_cents(self):
        self.assertEqual(
            create_entry({"amount": "12.50", "note": "membership"}),
            {"amount_cents": 1250, "note": "membership"},
        )

    def test_api_rejects_noncanonical_amounts(self):
        for value in (" 12.50 ", "12.5", "1e2"):
            with self.subTest(value=value), self.assertRaises(InvalidAmount):
                create_entry({"amount": value})


if __name__ == "__main__":
    unittest.main()
