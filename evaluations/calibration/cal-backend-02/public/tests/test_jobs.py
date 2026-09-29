import unittest

from booking.jobs import book
from helpers import DatabaseTestCase


class ScheduledBookingTests(DatabaseTestCase):
    def test_scheduled_entry_point_books_normally(self):
        self.add_event("workshop", 2)
        result = book(self.database, "workshop", "member-a")
        self.assertEqual(result["member_id"], "member-a")
        self.assertEqual(self.reservation_count("workshop"), 1)


if __name__ == "__main__":
    unittest.main()
