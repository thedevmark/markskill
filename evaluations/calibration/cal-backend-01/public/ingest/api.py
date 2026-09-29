from .amounts import parse_amount


def create_entry(payload: dict) -> dict:
    return {
        "amount_cents": parse_amount(payload.get("amount")),
        "note": payload.get("note", ""),
    }
