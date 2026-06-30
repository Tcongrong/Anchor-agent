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
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHost = "127.0.0.1_4173";
const captureRoot = path.join(capturesRoot, captureHost);
const captureAssetsRoot = path.join(captureRoot, "assets");
const bundleName = "dashboard.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case004_browser_fingerprint";

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z4/a0.js", 100],
  ["src/z4/b1.js", 140],
  ["src/z4/c2.js", 140],
  ["src/z4/d3.js", 160],
  ["src/z4/e4.js", 240],
  ["src/z4/k0.js", 260],
  ["src/z4/l0.js", 300],
  ["src/z4/m0.js", 600],
  ["src/z4/n0.js", 280],
  ["src/z4/q8/r2/m5.js", 520],
  ["scripts/gen_oracle_spans.mjs", 80]
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z4/x/d${String(i).padStart(2, "0")}.js`, 160);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z4/v/v${String(i).padStart(2, "0")}.js`, 240);

const obfuscationOptions = {
  seed: 1004,
  compact: false,
  simplify: true,
  // mangled + renameGlobals:false + format "es" keeps module-level names so gen resolves by name (acorn).
  // transformObjectKeys off (super-linear GC-thrash root cause); deadCodeInjection off (its injected
  // `return function` decoys would break the anchor-closure AST resolution). cff/stringArray stay for difficulty.
  identifierNamesGenerator: "mangled",
  stringArray: true,
  stringArrayThreshold: 0.72,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayEncoding: ["base64"],
  transformObjectKeys: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.24,
  deadCodeInjection: false,
  deadCodeInjectionThreshold: 0.06,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false
};

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

function fail(error) {
  console.error(JSON.stringify({ case_id: caseId, passed: false, ...error }, null, 2));
  process.exit(1);
}

async function readFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await readFiles(resolved));
    else out.push(resolved);
  }
  return out;
}

function relHidden(file) {
  return path.relative(hiddenRoot, file).replaceAll("\\", "/");
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) {
    const text = await readFile(path.join(hiddenRoot, relative), "utf8");
    const actual = linesOf(text);
    if (actual < required) fail({ error: "line_count_too_low", file: relative, actual_lines: actual, required_lines: required });
  }

  const all = await readFiles(srcRoot);
  let src = 0;
  let z4 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relHidden(file).startsWith("src/z4/")) z4 += count;
  }
  if (src < 14000) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14000 });
  if (z4 < 12000) fail({ error: "z4_lines_too_low", actual_lines: z4, required_lines: 12000 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9000) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9000 });
  }
  return { src, z4 };
}

async function copyHostFiles() {
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z4/a0.js"></script>',
    '<script type="module" src="./assets/dashboard.app.bundle.js"></script>'
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z4", "a0.js"), treeshake: false });
  await bundle.write({ file: bundlePath, format: "es", sourcemap: false, inlineDynamicImports: true });
  await bundle.close();
  const code = await readFile(bundlePath, "utf8");
  const obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, `${obfuscated}\n`, "utf8");
}

async function scanDist() {
  const files = await readFiles(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const text = (await Promise.all(files.filter((file) => /\.(html|css|js|svg)$/.test(file)).map((file) => readFile(file, "utf8")))).join("\n");
  const bad = [
    /sourceMappingURL/i,
    /new\s+Worker/i,
    /Worker\s*\(/i,
    /SharedWorker/i,
    /serviceWorker\.register/i,
    /BroadcastChannel/i,
    /postMessage\s*\(/i,
    /<iframe/i,
    /createElement\(['"]iframe/i,
    /eval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /blob:/i,
    /data:text\/javascript/i,
    /data:application\/javascript/i
  ];
  if (names.some((name) => /\.map$/i.test(name) || /worker/i.test(name))) fail({ error: "forbidden_dist_file", files: names });
  const hit = bad.find((pattern) => pattern.test(text));
  if (hit) fail({ error: "forbidden_dist_text", pattern: String(hit) });
  return names;
}

async function createCaptures() {
  await rm(capturesRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(captureRoot, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(captureRoot, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(captureRoot, "favicon.svg"));

  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const cssInfo = await stat(path.join(distRoot, "styles.css"));
  const svgInfo = await stat(path.join(distRoot, "favicon.svg"));
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:4173/",
    mode: "initial_page_load_only",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4173/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4173/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4173/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
      { contentType: "image/svg+xml; charset=utf-8", status: 200, url: "http://127.0.0.1:4173/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size }
    ]
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  await writeFile(
    path.join(capturesRoot, "source-tree.txt"),
    [
      "devtools-source-dump/",
      `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
      `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes, text/javascript; charset=utf-8)`,
      `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`,
      `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml; charset=utf-8)`
    ].join("\n") + "\n",
    "utf8"
  );
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8"
  });
  if (result.status !== 0) fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  return result.stdout.trim();
}

async function writeBuildMeta(lineSummary, distFiles, genSummaryText) {
  const sourceFiles = (await readFiles(srcRoot)).map((file) => relHidden(file)).sort();
  const bundleText = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const genSummary = genSummaryText ? JSON.parse(genSummaryText) : null;
  const meta = {
    case_id: caseId,
    bundle: "dist/assets/dashboard.app.bundle.js",
    captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
    entry: "src/z4/a0.js",
    core_source: "src/z4/q8/r2/m5.js",
    core_export: "u",
    core_slot: 23,
    target_field: "browser_fingerprint",
    source_map: false,
    compact: false,
    devtools_visible: true,
    task_contract: {
      task_file: "agent_visible/task.json",
      primary_metric: "top_1_weighted_anchor_score",
      target_observable: {
        sink: "console.log object and fetch request header",
        action: "fingerprint.scan",
        field: "browser_fingerprint",
        trigger: {
          steps: [
            { action: "select", selector: "#signalLevel", value: "full" },
            { action: "select", selector: "#canvasDriver", value: "hardware" },
            { action: "type", selector: "#timezoneSeed", value: "UTC-8" },
            { action: "check", selector: "#probeEnabled" },
            { action: "click", selector: "#initiateProbeBtn" }
          ]
        }
      }
    },
    candidate_scope: {
      visible_corpus: "agent_visible/captures/devtools-source-dump/**/*.js",
      answer_unit: "complete_javascript_function",
      answer_fields: ["function_name", "file", "slice"]
    },
    anchor_definition: oracle.anchor_definition,
    primary_anchor: {
      answer_function: oracle.primary_anchor.answer_function,
      source_function: oracle.primary_anchor.source_function,
      source_file: oracle.primary_anchor.source_file,
      captured_span: oracle.primary_anchor.captured_span
    },
    source_files: sourceFiles,
    dist_files: distFiles.map((file) => `dist/${file}`),
    line_count_summary: lineSummary,
    build_artifacts: {
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(bundleText),
      captured_bundle_lines: linesOf(bundleText)
    },
    decoy_file_count: 44,
    vendor_file_count: 25,
    forbidden_runtime_features: ["Worker", "SharedWorker", "ServiceWorker", "BroadcastChannel", "iframe", "postMessage", "eval", "new Function", "WebAssembly"],
    forbidden_token_scan_result: { passed: true, files: distFiles },
    sourcemap_scan_result: { passed: true, exposed: false },
    core_visibility: { source_in_bundle: true, callsite_in_bundle: true, sink_in_bundle: true },
    obfuscation_config: obfuscationOptions,
    oracle_generation: genSummary,
    difficulty: {
      obfuscation_level: "fixed-seed javascript-obfuscator with string array and control-flow transformations",
      decoy_file_count: 44,
      vendor_file_count: 25,
      main_thread_only: true,
      active_slot: 23
    },
    challenge_analysis: {
      construct_validity_note: "Key answer and decoy functions keep visible captured-bundle identifiers for grader compatibility; the intended challenge is semantic disambiguation inside a small candidate set.",
      measurements: {
        src_lines: lineSummary.src,
        z4_lines: lineSummary.z4,
        bundle_bytes: bundleInfo.size,
        bundle_lines: linesOf(bundleText),
        role_oracle_entries: oracle.role_oracle.length
      }
    }
  };
  await writeFile(path.join(hiddenRoot, "build_meta.hidden.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
}

await lineChecks(false);
await copyHostFiles();
await buildBundle();
const distFiles = await scanDist();
const lineSummary = await lineChecks(true);
await createCaptures();
const genSummary = runGenOracleSpans();
await writeBuildMeta(lineSummary, distFiles, genSummary);

const bundleInfo = await stat(bundlePath);
console.log(JSON.stringify({
  case_id: caseId,
  passed: true,
  bundle: "dist/assets/dashboard.app.bundle.js",
  captured_bundle: `../agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
  bundle_bytes: bundleInfo.size,
  bundle_lines: linesOf(await readFile(bundlePath, "utf8"))
}, null, 2));
