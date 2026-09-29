export async function encodeFileRequest(file, correlationId) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return { correlationId, name: file.name, size: file.size, bytes: btoa(binary) };
}

export async function uploadFile(file, correlationId) {
  const payload = await encodeFileRequest(file, correlationId);
  const response = await fetch("/api/uploads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "Upload failed");
  if (result.correlationId !== correlationId) throw new Error("Upload response mismatch");
  return result;
}
