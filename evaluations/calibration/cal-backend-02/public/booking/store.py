from pathlib import Path
import sqlite3


SCHEMA = """
CREATE TABLE IF NOT EXISTS events (
    event_id TEXT PRIMARY KEY,
    capacity INTEGER NOT NULL CHECK (capacity >= 0)
);

CREATE TABLE IF NOT EXISTS reservations (
    reservation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id TEXT NOT NULL REFERENCES events(event_id),
    member_id TEXT NOT NULL
);
"""


class ClosingConnection(sqlite3.Connection):
    def __exit__(self, exc_type, exc_value, traceback):
        try:
            return super().__exit__(exc_type, exc_value, traceback)
        finally:
            self.close()


def connect(database_path: str | Path) -> sqlite3.Connection:
    connection = sqlite3.connect(database_path, timeout=2, factory=ClosingConnection)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def initialize(database_path: str | Path) -> None:
    with connect(database_path) as connection:
        connection.executescript(SCHEMA)


def reservation_dict(row: sqlite3.Row) -> dict:
    return {
        "reservation_id": row["reservation_id"],
        "event_id": row["event_id"],
        "member_id": row["member_id"],
    }
