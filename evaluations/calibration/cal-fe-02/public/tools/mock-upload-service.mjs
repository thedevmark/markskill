const attempts = new Map();

export function handleUpload(payload) {
  if (!payload || typeof payload.correlationId !== "string") return { status: 400, body: { error: "Missing correlation" } };
  if (typeof payload.name !== "string" || typeof payload.bytes !== "string") return { status: 400, body: { error: "Invalid file" } };
  const count = (attempts.get(payload.name) ?? 0) + 1;
  attempts.set(payload.name, count);
  if (payload.name === "retry-once.txt" && count === 1) {
    return { status: 503, body: { error: "Temporary upload failure" } };
  }
  return { status: 200, body: { correlationId: payload.correlationId, acceptedBytes: payload.size } };
}
