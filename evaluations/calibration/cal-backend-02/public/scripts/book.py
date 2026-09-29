import argparse
import json

from booking.web import book


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("database")
    parser.add_argument("event_id")
    parser.add_argument("member_id")
    args = parser.parse_args()
    print(json.dumps(book(args.database, args.event_id, args.member_id), sort_keys=True))


if __name__ == "__main__":
    main()
