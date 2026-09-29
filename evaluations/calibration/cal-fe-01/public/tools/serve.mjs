import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../public/", import.meta.url));
const types = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".svg", "image/svg+xml"],
]);

const server = createServer(async (request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  if (request.method === "POST" && /^\/api\/searches\/[^/]+\/runs$/.test(url.pathname)) {
    const id = decodeURIComponent(url.pathname.split("/")[3]);
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ id, status: "started" }));
    return;
  }
  const relative = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
  const normalized = normalize(relative);
  if (normalized.startsWith("..")) {
    response.writeHead(403).end();
    return;
  }
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

server.listen(4173, "127.0.0.1", () => console.log("fixture ready on 4173"));
