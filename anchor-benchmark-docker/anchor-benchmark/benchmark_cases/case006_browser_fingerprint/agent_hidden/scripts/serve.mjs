import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const distRoot = path.join(hiddenRoot, "dist");
const port = Number(process.env.PORT || process.argv[2] || 8466);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
};

function send(response, status, body) {
  response.writeHead(status, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
  response.end(body);
}

async function resolveFile(requestUrl) {
  const url = new URL(requestUrl || "/", "http://127.0.0.1");
  const clean = decodeURIComponent(url.pathname || "/").replace(/^\/+/, "");
  const target = path.resolve(distRoot, clean || "index.html");
  if (!target.startsWith(distRoot)) return null;
  const info = await stat(target).catch(() => null);
  if (!info) return null;
  if (info.isDirectory()) return path.join(target, "index.html");
  return target;
}

const server = http.createServer(async (request, response) => {
  const filePath = await resolveFile(request.url);
  if (!filePath) {
    send(response, 404, "Not found");
    return;
  }
  response.writeHead(200, {
    "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(
    JSON.stringify(
      {
        case_id: "case006_browser_fingerprint",
        url: `http://127.0.0.1:${port}/`,
        dist: path.relative(hiddenRoot, distRoot).replaceAll("\\", "/"),
      },
      null,
      2,
    ),
  );
});
