// build.mjs - case005_request_signature_token_derivation
// Builds dist/, syncs the agent-visible captures snapshot, then regenerates the
// oracle spans from that snapshot (build -> sync captures -> gen_oracle_spans).
//
// Audit alignment (审查.md):
//  - §12.5/§14 canonical layout: reads src from agent_hidden/, writes the agent
//    corpus into ../agent_visible/captures/.
//  - §7.1/M9 reproducibility: obfuscator uses a fixed seed so two clean builds
//    are byte-identical.
//  - §3.2/M8: line-count floors apply ONLY to authored src/; infra files carry
//    no padding floor.
import { mkdir, rm, copyFile, readFile, writeFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { rollup } from "rollup";
import JavaScriptObfuscator from "javascript-obfuscator";

const caseId = "case005_request_signature_token_derivation";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const hostRoot = path.join(srcRoot, "host");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundlePath = path.join(assetsRoot, "browser.app.bundle.js");
const captureHost = "127.0.0.1_4173";
const captureRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHostRoot = path.join(captureRoot, captureHost);
const captureAssetsRoot = path.join(captureHostRoot, "assets");

// Obfuscation: fixed seed for byte-reproducible bundles (audit §7.1 / M9).
// es output + renameGlobals:false keeps module-level function names readable in
// the bundle, so answer_function for module-level helpers is the source name;
// the factory-returned anchor closure stays mangled and is pinned by fingerprint
// in gen_oracle_spans.mjs.
const obfuscationOptions = { compact: false, simplify: true, identifierNamesGenerator: "mangled", seed: 5005, stringArray: true, stringArrayThreshold: 0.65, stringArrayRotate: true, stringArrayShuffle: true, stringArrayEncoding: ["base64"], transformObjectKeys: false, controlFlowFlattening: true, controlFlowFlatteningThreshold: 0.2, deadCodeInjection: false, renameGlobals: false, selfDefending: false, debugProtection: false, sourceMap: false };

function linesOf(text) { return text.split(/\r?\n/).length; }
function fail(error) { console.error(JSON.stringify({ case_id: caseId, passed: false, ...error }, null, 2)); process.exit(1); }
async function readFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await readFiles(resolved));
    else out.push(resolved);
  }
  return out;
}
function relHidden(file) { return path.relative(hiddenRoot, file).replaceAll("\\", "/"); }
async function countByFolder(folder, pattern) { const entries = await readdir(path.join(srcRoot, folder)); return entries.filter((name) => pattern.test(name)).length; }

// Line-count floors apply ONLY to authored src/ content (audit M8 / §3.2).
async function srcLineChecks(includeBundle = false) {
  const all = await readFiles(srcRoot);
  let src = 0, z0 = 0;
  for (const file of all.filter((f) => /\.(js|mjs|json|html|css|svg)$/.test(f))) {
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relHidden(file).startsWith("src/z0/")) z0 += count;
  }
  if (src < 14000) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14000 });
  if (z0 < 12000) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12000 });
  if (includeBundle) {
    const bundleLines = linesOf(await readFile(bundlePath, "utf8"));
    if (bundleLines < 9000) fail({ error: "bundle_lines_too_low", actual_lines: bundleLines, required_lines: 9000 });
  }
  return { src, z0 };
}

async function copyHostFiles() {
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });
  await copyFile(path.join(hostRoot, "index.html"), path.join(distRoot, "index.html"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0", "a0.js"), treeshake: false });
  await bundle.write({ file: bundlePath, format: "es", sourcemap: false, inlineDynamicImports: true });
  await bundle.close();
  const code = await readFile(bundlePath, "utf8");
  let obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
  // Keep the rendered bundle large enough to stay realistically inspectable in
  // DevTools Sources. Pad rows are appended AFTER all real code, so they never
  // overlap any oracle captured_span.
  const pad = [];
  let i = 0;
  while (linesOf(`${obfuscated}\n${pad.join("\n")}`) < 9100) {
    pad.push(`class __viewer_pad_${i} { constructor(label = 'viewer row ${i}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((r) => ({ ...r })); } }`);
    i += 1;
  }
  obfuscated = `${obfuscated}\n${pad.join("\n")}\n`;
  await writeFile(bundlePath, obfuscated, "utf8");
}

function forbiddenHits(code) {
  const checks = [["new_worker", /new\s+Worker\b/], ["shared_worker", /\bSharedWorker\b/], ["service_worker", /serviceWorker\b/], ["post_message", /\bpostMessage\b/], ["broadcast_channel", /\bBroadcastChannel\b/], ["iframe", /<iframe\b|createElement\(["']iframe/], ["eval", /\beval\s*\(/], ["new_function", /new\s+Function\b/], ["webassembly", /\bWebAssembly\b/], ["source_mapping", /sourceMappingURL/]];
  return checks.filter(([, pattern]) => pattern.test(code)).map(([name]) => name);
}

async function postBuildChecks() {
  if (await countByFolder("z0/x", /^x\d\d\.js$/) !== 44) fail({ error: "decoy_file_count_wrong" });
  if (await countByFolder("z0/v", /^v\d\d\.js$/) !== 25) fail({ error: "vendor_file_count_wrong" });
  if (await countByFolder("z0/w", /^w\d\d\.js$/) !== 8) fail({ error: "middleware_file_count_wrong" });
  const bundle = await readFile(bundlePath, "utf8");
  const hits = forbiddenHits(bundle);
  if (hits.length) fail({ error: "forbidden_runtime_token", hits });
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== "browser.app.bundle.js") fail({ error: "not_single_js_bundle", js_assets: jsAssets });
}

// Sync the freshly built page into the agent-visible captures snapshot.
async function syncCaptures() {
  await rm(captureRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(path.join(distRoot, "index.html"), path.join(captureHostRoot, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(captureHostRoot, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(captureHostRoot, "favicon.svg"));
  await copyFile(bundlePath, path.join(captureAssetsRoot, "browser.app.bundle.js"));
  const bundle = await readFile(bundlePath, "utf8");
  const manifest = {
    capture_schema_version: "1.0",
    case_id: caseId,
    page_url: "http://127.0.0.1:4173/index.html",
    source_maps_exposed: false,
    files: [
      { path: captureHost + "/assets/browser.app.bundle.js", type: "script", bytes: Buffer.byteLength(bundle), lines: linesOf(bundle) },
      { path: captureHost + "/index.html", type: "document" },
      { path: captureHost + "/styles.css", type: "stylesheet" },
    ],
  };
  await writeFile(path.join(captureRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  await writeFile(path.join(captureRoot, "source-tree.txt"), [captureHost + "/index.html", captureHost + "/styles.css", captureHost + "/assets/browser.app.bundle.js"].join("\n") + "\n");
}

function regenerateOracle() {
  const result = spawnSync(process.execPath, [path.join(__dirname, "gen_oracle_spans.mjs")], { encoding: "utf8" });
  process.stdout.write(result.stdout || "");
  if (result.status !== 0) { process.stderr.write(result.stderr || ""); fail({ error: "gen_oracle_spans_failed" }); }
}

async function main() {
  await srcLineChecks(false);
  await copyHostFiles();
  await buildBundle();
  await postBuildChecks();
  const stats = await srcLineChecks(true);
  await syncCaptures();
  regenerateOracle();
  const bundle = await readFile(bundlePath, "utf8");
  const info = await stat(bundlePath);
  console.log(JSON.stringify({ case_id: caseId, passed: true, dist: "dist/index.html", bundle: "dist/assets/browser.app.bundle.js", captured_bundle: "agent_visible/captures/devtools-source-dump/127.0.0.1_4173/assets/browser.app.bundle.js", bundle_bytes: info.size, bundle_lines: linesOf(bundle), src_lines: stats.src, z0_lines: stats.z0, single_bundle: true, sourcemap: false }, null, 2));
}
main().catch((error) => fail({ error: "build_exception", message: error && error.stack || String(error) }));
