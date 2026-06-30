import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const distRoot = path.join(hiddenRoot, "dist");
const port = Number(process.env.PORT || "4173");
const host = "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function resolveRequest(urlPath) {
  const clean = decodeURIComponent(urlPath || "/").replace(/^\/+/, "");
  const resolved = path.resolve(distRoot, clean || "index.html");
  return resolved.startsWith(distRoot) ? resolved : null;
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${host}`);
  if (url.pathname === "/api/fingerprint/scan") {
    response.writeHead(204, { "Cache-Control": "no-store" });
    response.end();
    return;
  }

  const resolved = resolveRequest(url.pathname);
  if (!resolved) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  try {
    const info = await stat(resolved);
    const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved;
    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Serving case004_browser_fingerprint at http://${host}:${port}/`);
});
