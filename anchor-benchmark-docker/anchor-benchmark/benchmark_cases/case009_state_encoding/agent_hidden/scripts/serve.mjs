import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const distRoot = path.join(hiddenRoot, "dist");
const port = Number(process.env.PORT || 4196);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function resolveRequest(urlText) {
  const url = new URL(urlText || "/", "http://127.0.0.1");
  const clean = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const resolved = path.resolve(distRoot, clean || "index.html");
  if (!resolved.startsWith(distRoot)) return null;
  return resolved;
}

async function sendFile(response, filePath) {
  const info = await stat(filePath);
  const finalPath = info.isDirectory() ? path.join(filePath, "index.html") : filePath;
  response.writeHead(200, {
    "Content-Type": types[path.extname(finalPath)] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(finalPath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  const resolved = resolveRequest(request.url);
  if (!resolved) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  try {
    await sendFile(response, resolved);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(JSON.stringify({ case_id: "case009_state_encoding", serving: true, url: "http://127.0.0.1:" + port + "/" }, null, 2));
});
