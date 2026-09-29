from pathlib import Path
import tempfile
import unittest

from booking.store import connect, initialize


class DatabaseTestCase(unittest.TestCase):
    def setUp(self):
        self._temp = tempfile.TemporaryDirectory()
        self.database = Path(self._temp.name) / "booking.sqlite3"
        initialize(self.database)

    def tearDown(self):
        self._temp.cleanup()

    def add_event(self, event_id: str, capacity: int) -> None:
        with connect(self.database) as connection:
            connection.execute(
                "INSERT INTO events(event_id, capacity) VALUES (?, ?)",
                (event_id, capacity),
            )

    def reservation_count(self, event_id: str) -> int:
        with connect(self.database) as connection:
            return connection.execute(
                "SELECT COUNT(*) FROM reservations WHERE event_id = ?", (event_id,)
            ).fetchone()[0]
