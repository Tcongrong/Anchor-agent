import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const distRoot = path.join(hiddenRoot, "dist");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
};

function handler(request, response) {
  const url = new URL(request.url || "/", "http://127.0.0.1");
  const clean = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const resolved = path.resolve(distRoot, clean || "index.html");
  if (!resolved.startsWith(distRoot)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  stat(resolved)
    .then((info) => {
      const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved;
      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      createReadStream(filePath).pipe(response);
    })
    .catch(() => {
      response.writeHead(404);
      response.end("Not found");
    });
}

function listen(port) {
  const server = http.createServer(handler);
  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") listen(port + 1);
    else throw error;
  });
  server.listen(port, "127.0.0.1", () => {
    console.log(`http://127.0.0.1:${port}/`);
  });
}

listen(Number(process.env.PORT || 4173));
