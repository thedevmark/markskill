export function normalizeSearch(record) {
  if (!record || typeof record.id !== "string" || !record.id) throw new TypeError("search id is required");
  if (record.name != null && typeof record.name !== "string") throw new TypeError("search name must be text");
  return { id: record.id, name: record.name || "Untitled search", query: String(record.query ?? "") };
}
