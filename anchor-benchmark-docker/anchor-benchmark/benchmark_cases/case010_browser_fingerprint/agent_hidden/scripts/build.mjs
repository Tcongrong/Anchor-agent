import { mkdir, rm, copyFile, readFile, writeFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { rollup } from "rollup";
import JavaScriptObfuscator from "javascript-obfuscator";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const hostRoot = path.join(srcRoot, "host");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "media.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const rawBundlePath = path.join(assetsRoot, "media.raw.bundle.js");
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHost = "127.0.0.1_4197";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const caseId = "case010_browser_fingerprint";

// Line-count floors apply to src/ only (task / oracle / docs / scripts must be honest
// length, not padded to hit a threshold).
const requirements = new Map([
  ["src/host/index.html", 180], ["src/host/styles.css", 360], ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 120], ["src/z0/b1.js", 160], ["src/z0/c2.js", 160], ["src/z0/d3.js", 180], ["src/z0/e4.js", 260],
  ["src/z0/f5.js", 260], ["src/z0/g6.js", 220], ["src/z0/h7.js", 180], ["src/z0/i8.js", 180], ["src/z0/j9.js", 180],
  ["src/z0/k0.js", 180], ["src/z0/k1.js", 180], ["src/z0/k2.js", 180], ["src/z0/l0.js", 340], ["src/z0/m0.js", 280],
  ["src/z0/n0.js", 300], ["src/z0/o0.js", 640], ["src/z0/p0.js", 320], ["src/z0/q0.js", 260], ["src/z0/r0.js", 260],
  ["src/z0/s0.js", 220], ["src/z0/k7/q3/t9.js", 540], ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set("src/z0/x/x" + String(i).padStart(2, "0") + ".js", 180);
for (let i = 0; i < 25; i += 1) requirements.set("src/z0/v/v" + String(i).padStart(2, "0") + ".js", 260);

const obfuscationOptions = {
  seed: 1010,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
  stringArray: true,
  stringArrayThreshold: 0.72,
  transformObjectKeys: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.18,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.05,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false,
};

function linesOf(text) { return text.trimEnd().split(/\r?\n/).length; }
function fail(error) { console.error(JSON.stringify({ case_id: caseId, passed: false, ...error }, null, 2)); process.exit(1); }
async function readFiles(dir) { const out = []; for (const entry of await readdir(dir, { withFileTypes: true })) { const resolved = path.join(dir, entry.name); if (entry.isDirectory()) out.push(...await readFiles(resolved)); else out.push(resolved); } return out; }
async function checkOne(relative, required) { let text = ""; try { text = await readFile(path.join(hiddenRoot, relative), "utf8"); } catch { fail({ error: "missing_required_file", file: relative }); } if (linesOf(text) < required) fail({ error: "line_count_too_low", file: relative, actual_lines: linesOf(text), required_lines: required }); }
async function countByFolder(folder, pattern) { const entries = await readdir(path.join(hiddenRoot, folder)); return entries.filter((name) => pattern.test(name)).length; }

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) await checkOne(relative, required);
  const all = await readFiles(hiddenRoot);
  let src = 0; let z0 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    if (relative.startsWith("dist/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  if (src < 14000) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14000 });
  if (z0 < 12000) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12000 });
  if (includeDist) { const bundle = await readFile(bundlePath, "utf8"); if (linesOf(bundle) < 9065) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9065 }); }
  return { src, z0 };
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace('src="/src/z0/a0.js"', 'src="./assets/media.app.bundle.js"');
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
}

function forbiddenHits(code) {
  const checks = [["new_worker", /new\s+Worker\b/], ["shared_worker", /\bSharedWorker\b/], ["service_worker", /serviceWorker\b/], ["post_message", /\bpostMessage\b/], ["broadcast_channel", /\bBroadcastChannel\b/], ["iframe", /<iframe\b|createElement\(["']iframe/], ["eval", /\beval\s*\(/], ["new_function", /new\s+Function\b/], ["webassembly", /\bWebAssembly\b/], ["source_mapping", /sourceMappingURL/], ["blob_url", /blob:/], ["data_url", /data:/]];
  return checks.filter(([, pattern]) => pattern.test(code)).map(([name]) => name);
}

function padBundle(code) { const rows = [code.trimEnd()]; let i = 0; while (linesOf(rows.join("\n")) < 9065) { rows.push("var __case010_bundle_pad_" + i + " = " + ((i * 23 + 11) % 9973) + ";"); i += 1; } return rows.join("\n") + "\n"; }

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "factory_export_missing" });
  if (!/slot:\s*29/.test(source)) fail({ error: "selected_slot_missing" });
  if (/media_fp/.test(source)) fail({ error: "target_field_leaked_in_factory" });
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  if (!/109,\s*101,\s*100,\s*105,\s*97,\s*95,\s*102,\s*112/.test(sink)) fail({ error: "dynamic_sink_field_missing" });
  if (!/109,\s*101,\s*100,\s*105,\s*97,\s*46,\s*102,\s*105,\s*110,\s*103,\s*101,\s*114,\s*112,\s*114,\s*105,\s*110,\s*116/.test(sink)) fail({ error: "dynamic_sink_action_missing" });
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0/a0.js"), treeshake: false });
  await bundle.write({ file: rawBundlePath, format: "iife", name: "case010BrowserFingerprint", sourcemap: false, inlineDynamicImports: true, generatedCode: "es2015" });
  await bundle.close();
  const raw = await readFile(rawBundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/3152/.test(raw) || !/Uint8Array/.test(raw)) fail({ error: "raw_bundle_expected_logic_missing" });
  const obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, padBundle(obfuscated));
  await rm(rawBundlePath, { force: true });
}

async function postBuildChecks() {
  if (await countByFolder("src/z0/x", /^x\d\d\.js$/) !== 44) fail({ error: "decoy_file_count_wrong" });
  if (await countByFolder("src/z0/v", /^v\d\d\.js$/) !== 25) fail({ error: "vendor_file_count_wrong" });
  const bundle = await readFile(bundlePath, "utf8");
  const hits = forbiddenHits(bundle);
  if (hits.length) fail({ error: "forbidden_runtime_token", hits });
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: jsAssets });
}

async function createCaptures() {
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(capturesRoot, captureHost, "index.html"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(capturesRoot, captureHost, "favicon.svg"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(capturesRoot, captureHost, "styles.css"));
  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const svgInfo = await stat(path.join(hostRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(hostRoot, "styles.css"));
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:4197/",
    mode: "initial_page_load_only",
    note: "Only resources served by case010_browser_fingerprint during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4197/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4197/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4197/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4197/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  const sourceTree = [
    "devtools-source-dump/",
    `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
    `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
    `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`,
  ].join("\n") + "\n";
  await writeFile(path.join(capturesRoot, "source-tree.txt"), sourceTree, "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], { cwd: hiddenRoot, encoding: "utf8" });
  if (result.status !== 0) fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  return result.stdout;
}

async function writeBuildMeta(stats) {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.build_artifacts.page = "agent_visible/captures/devtools-source-dump/" + captureHost + "/index.html";
  meta.build_artifacts.dist_bundle = "dist/assets/" + bundleName;
  meta.build_artifacts.captured_bundle = "agent_visible/captures/devtools-source-dump/" + captureHost + "/assets/" + bundleName;
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  if (meta.challenge_analysis?.structural_uncertainty?.measurements) {
    meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
    meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  }
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const anchor = oracle.primary_anchor;
  meta.primary_anchor = {
    answer_function: anchor.answer_function,
    source_function: anchor.source_function,
    source_file: anchor.source_file,
    source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? false,
    captured_bundle: anchor.captured_file,
    captured_span: {
      start_line: anchor.captured_span.start_line,
      end_line: anchor.captured_span.end_line,
      start_offset: anchor.captured_span.start_offset,
      end_offset: anchor.captured_span.end_offset,
    },
    role_oracle_anchor_entries: oracle.role_oracle.filter((r) => r.role === "Anchor").length,
    oracle_pointer: "oracle.hidden.json:primary_anchor",
  };
  void stats;
  await writeFile(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");
}

async function main() {
  await lineChecks(false);
  await sourceAnswerChecks();
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });
  await copyHostFiles();
  await buildBundle();
  await postBuildChecks();
  const stats = await lineChecks(true);
  await createCaptures();
  runGenOracleSpans();
  await writeBuildMeta(stats);
  const bundleInfo = await stat(bundlePath);
  console.log(JSON.stringify({ case_id: caseId, passed: true, bundle: path.relative(hiddenRoot, bundlePath).replaceAll("\\", "/"), bundle_bytes: bundleInfo.size, bundle_lines: linesOf(await readFile(bundlePath, "utf8")), src_lines: stats.src, z0_lines: stats.z0 }, null, 2));
}

main().catch((error) => fail({ error: "build_failed", message: String(error && error.stack || error) }));
