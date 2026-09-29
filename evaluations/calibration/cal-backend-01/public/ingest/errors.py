class InvalidAmount(ValueError):
    """An amount token does not satisfy the strict money contract."""


class InvalidCSV(ValueError):
    """A CSV document cannot be imported without changing its meaning."""
