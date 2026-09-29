from pathlib import Path

from .errors import InvalidMember, SoldOut, UnknownEvent
from .store import connect, reservation_dict


def book(database_path: str | Path, event_id: str, member_id: str) -> dict:
    if not isinstance(member_id, str) or not member_id.strip():
        raise InvalidMember("member_id is required")

    with connect(database_path) as connection:
        event = connection.execute(
            "SELECT event_id, capacity FROM events WHERE event_id = ?", (event_id,)
        ).fetchone()
        if event is None:
            raise UnknownEvent(event_id)
        count = connection.execute(
            "SELECT COUNT(*) FROM reservations WHERE event_id = ?", (event_id,)
        ).fetchone()[0]
        if count >= event["capacity"]:
            raise SoldOut(event_id)
        cursor = connection.execute(
            "INSERT INTO reservations(event_id, member_id) VALUES (?, ?)",
            (event_id, member_id),
        )
        row = connection.execute(
            "SELECT reservation_id, event_id, member_id FROM reservations WHERE reservation_id = ?",
            (cursor.lastrowid,),
        ).fetchone()
        return reservation_dict(row)
