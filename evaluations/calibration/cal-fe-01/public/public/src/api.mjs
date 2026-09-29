export async function runSearch(id) {
  const response = await fetch(`/api/searches/${encodeURIComponent(id)}/runs`, { method: "POST" });
  if (!response.ok) throw new Error("Search could not be started");
  return response.json();
}
