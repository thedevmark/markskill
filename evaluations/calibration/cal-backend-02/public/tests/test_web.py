import unittest

from booking import InvalidMember, SoldOut, UnknownEvent
from booking.web import book
from helpers import DatabaseTestCase


class WebBookingTests(DatabaseTestCase):
    def test_first_booking_succeeds(self):
        self.add_event("workshop", 2)
        result = book(self.database, "workshop", "member-a")
        self.assertEqual(result["event_id"], "workshop")
        self.assertEqual(result["member_id"], "member-a")

    def test_different_member_is_rejected_when_full(self):
        self.add_event("keynote", 1)
        book(self.database, "keynote", "member-a")
        with self.assertRaises(SoldOut):
            book(self.database, "keynote", "member-b")

    def test_invalid_inputs_use_existing_exceptions(self):
        self.add_event("workshop", 1)
        with self.assertRaises(InvalidMember):
            book(self.database, "workshop", "  ")
        with self.assertRaises(UnknownEvent):
            book(self.database, "missing", "member-a")

    def test_retry_returns_original_reservation(self):
        self.add_event("workshop", 2)
        first = book(self.database, "workshop", "member-a")
        second = book(self.database, "workshop", "member-a")
        self.assertEqual(second, first)
        self.assertEqual(self.reservation_count("workshop"), 1)


if __name__ == "__main__":
    unittest.main()
