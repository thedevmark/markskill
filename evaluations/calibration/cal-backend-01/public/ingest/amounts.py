import re

from .errors import InvalidAmount


_AMOUNT = re.compile(r"[0-9]{1,6}\.[0-9]{2}\Z")


def parse_amount(value: str) -> int:
    if not isinstance(value, str) or _AMOUNT.fullmatch(value) is None:
        raise InvalidAmount(f"invalid amount: {value!r}")
    whole, fraction = value.split(".")
    return int(whole) * 100 + int(fraction)
