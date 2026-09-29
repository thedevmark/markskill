# Event booking

Customers report that retrying checkout can create duplicate bookings. Fix booking so a member gets one reservation for an event and accepted bookings never exceed capacity. Preserve existing data and the application's supported entry points. Add regression coverage.

## Contracts

- A member can hold one reservation per event.
- Repeating a booking returns the existing reservation ID, including when the event is full.
- Web checkout, scheduled booking, and CLI use the same durable reservation state.
- Separate processes may book concurrently.
- Successful bookings cannot exceed capacity.
- Unknown events and invalid member IDs fail through existing exceptions.
- Existing records and reservation IDs survive initialization and any schema update.
- Initialization is safe to repeat.
- A failed database write must not report success or prevent later requests.
- SQLite persistence and the existing `events` and `reservations` table contracts remain available to reporting.

Both public entry points expose:

```text
book(database_path, event_id, member_id) -> {
    reservation_id: int,
    event_id: str,
    member_id: str
}
```

Historical duplicate cleanup is outside this task; the supplied legacy database contains no duplicates.

Run the public suite with:

```text
python -m unittest discover -s tests -v
```
