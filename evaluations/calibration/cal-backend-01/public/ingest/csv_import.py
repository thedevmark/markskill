import csv
import io

from .amounts import parse_amount
from .errors import InvalidAmount, InvalidCSV


def import_entries(text: str) -> list[dict]:
    reader = csv.DictReader(io.StringIO(text, newline=""))
    if reader.fieldnames is None or not {"amount", "note"}.issubset(reader.fieldnames):
        raise InvalidCSV("missing required headers: amount,note")

    entries: list[dict] = []
    for logical_row, row in enumerate(reader, start=2):
        try:
            amount_cents = parse_amount(row.get("amount"))
        except InvalidAmount as error:
            raise InvalidCSV(f"invalid amount at row {logical_row}") from error
        entries.append({"amount_cents": amount_cents, "note": row.get("note", "")})
    return entries
