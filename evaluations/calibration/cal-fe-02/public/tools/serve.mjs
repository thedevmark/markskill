import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { handleUpload } from "./mock-upload-service.mjs";

const root = fileURLToPath(new URL("../public/", import.meta.url));
const types = new Map([[".css", "text/css; charset=utf-8"], [".html", "text/html; charset=utf-8"], [".mjs", "text/javascript; charset=utf-8"]]);

const server = createServer(async (request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  if (request.method === "POST" && url.pathname === "/api/uploads") {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    let payload;
    try { payload = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
    catch { payload = null; }
    const result = handleUpload(payload);
    response.writeHead(result.status, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify(result.body));
    return;
  }
  const relative = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
  const normalized = normalize(relative);
  if (normalized.startsWith("..")) { response.writeHead(403).end(); return; }
  const path = join(root, normalized);
  try {
    if (!(await stat(path)).isFile()) throw new Error("not a file");
    response.writeHead(200, { "content-type": types.get(extname(path)) ?? "application/octet-stream" });
    createReadStream(path).pipe(response);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(4174, "127.0.0.1", () => console.log("fixture ready on 4174"));
