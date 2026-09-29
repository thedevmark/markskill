PRAGMA foreign_keys = ON;

CREATE TABLE events (
    event_id TEXT PRIMARY KEY,
    capacity INTEGER NOT NULL CHECK (capacity >= 0)
);

CREATE TABLE reservations (
    reservation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id TEXT NOT NULL REFERENCES events(event_id),
    member_id TEXT NOT NULL
);

INSERT INTO events(event_id, capacity) VALUES ('legacy-full', 1);
INSERT INTO events(event_id, capacity) VALUES ('legacy-open', 3);
INSERT INTO reservations(reservation_id, event_id, member_id)
VALUES (41, 'legacy-full', 'member-existing');
INSERT INTO reservations(reservation_id, event_id, member_id)
VALUES (42, 'legacy-open', 'member-two');
