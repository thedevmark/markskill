import argparse

from booking.store import connect, initialize


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("database")
    args = parser.parse_args()
    initialize(args.database)
    with connect(args.database) as connection:
        connection.executemany(
            "INSERT OR IGNORE INTO events(event_id, capacity) VALUES (?, ?)",
            [("workshop", 2), ("keynote", 1)],
        )


if __name__ == "__main__":
    main()
