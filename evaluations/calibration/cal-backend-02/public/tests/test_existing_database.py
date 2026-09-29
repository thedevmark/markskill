from pathlib import Path
import sqlite3
import tempfile
import unittest

from booking.store import connect, initialize


ROOT = Path(__file__).resolve().parents[1]


class ExistingDatabaseTests(unittest.TestCase):
    def test_initialization_preserves_legacy_records_and_ids(self):
        with tempfile.TemporaryDirectory() as directory:
            database = Path(directory) / "legacy.sqlite3"
            script = (ROOT / "fixtures" / "legacy_v1.sql").read_text(encoding="utf-8")
            connection = sqlite3.connect(database)
            try:
                connection.executescript(script)
                connection.commit()
            finally:
                connection.close()

            initialize(database)
            initialize(database)

            with connect(database) as connection:
                rows = connection.execute(
                    "SELECT reservation_id, event_id, member_id FROM reservations ORDER BY reservation_id"
                ).fetchall()
            self.assertEqual(
                [tuple(row) for row in rows],
                [
                    (41, "legacy-full", "member-existing"),
                    (42, "legacy-open", "member-two"),
                ],
            )


if __name__ == "__main__":
    unittest.main()
