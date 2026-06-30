// Deterministic build for case008_request_signature_token_derivation.
//
// Pipeline: rollup (ES, inlineDynamicImports) -> javascript-obfuscator -> dist bundle ->
// frozen agent_visible/captures snapshot -> gen_oracle_spans.mjs (recompute oracle
// captured_span/answer_function from the captured bundle) -> build_meta.hidden.json.
//
// Obfuscation keeps module-level function names (renameGlobals:false) so the captured
// bundle stays mappable by name; locals are mangled and control flow is flattened. A fixed
// seed makes the obfuscated output byte-reproducible (M9). Only src/ (the puzzle content) has
// line-count floors; infrastructure/doc files carry no floor, so no padding is injected (M8).
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
const bundleName = "filter.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const rawBundlePath = path.join(assetsRoot, "filter.raw.bundle.js");
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHost = "127.0.0.1_4008";
const captureHostRoot = path.join(capturesRoot, captureHost);
const captureAssetsRoot = path.join(captureHostRoot, "assets");
const caseId = "case008_request_signature_token_derivation";

const obfuscationOptions = {
  compact: false,
  simplify: true,
  seed: 8008,
  identifierNamesGenerator: "mangled",
  stringArray: true,
  stringArrayThreshold: 0.65,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayEncoding: ["base64"],
  transformObjectKeys: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.18,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false,
};

// src-only line floors (puzzle content). No floors on task.json/README/scripts/oracle/meta.
const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 20],
  ["src/z8/k7/q3/t9.js", 520],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z8/x/x${String(i).padStart(2, "0")}.js`, 160);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z8/v/v${String(i).padStart(2, "0")}.js`, 220);

function linesOf(text) {
  return text.split(/\r?\n/).length;
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

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(srcRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) {
    const text = await readFile(path.join(hiddenRoot, relative), "utf8");
    if (linesOf(text) < required) {
      fail({ error: "src_line_count_too_low", file: relative, actual_lines: linesOf(text), required_lines: required });
    }
  }
  const all = await readFiles(srcRoot);
  let src = 0;
  let z8 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (path.relative(srcRoot, file).replaceAll("\\", "/").startsWith("z8/")) z8 += count;
  }
  if (src < 20000) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 20000 });
  if (z8 < 19000) fail({ error: "z8_lines_too_low", actual_lines: z8, required_lines: 19000 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 2) fail({ error: "bundle_is_single_line" });
  }
  return { src, z8 };
}

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z8/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "factory_export_missing" });
  if (!/slot:\s*23/.test(source)) fail({ error: "selected_slot_missing" });
  if (!/function\s+deriveRequestSignature\b/.test(source)) fail({ error: "anchor_function_missing" });
  if (!/function\s+encodeSignatureToken\b/.test(source)) fail({ error: "encode_helper_missing" });
  if (/req_sig|request\.sign/.test(source)) fail({ error: "target_observable_leaked_in_factory" });
  const sink = await readFile(path.join(srcRoot, "z8/n0.js"), "utf8");
  if (!/114,\s*101,\s*113,\s*95,\s*115,\s*105,\s*103/.test(sink)) fail({ error: "dynamic_sink_field_missing" });
  if (!/114,\s*101,\s*113,\s*117,\s*101,\s*115,\s*116,\s*46,\s*115,\s*105,\s*103,\s*110/.test(sink)) fail({ error: "dynamic_sink_action_missing" });
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z8/a0.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`,
  );
  if (distHtml === html) fail({ error: "host_script_tag_not_found" });
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z8", "a0.js"), treeshake: false });
  await bundle.write({ file: rawBundlePath, format: "es", sourcemap: false, inlineDynamicImports: true });
  await bundle.close();
  const raw = await readFile(rawBundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/deriveRequestSignature/.test(raw)) {
    fail({ error: "raw_bundle_expected_logic_missing" });
  }
  const obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  const finalCode = obfuscated.endsWith("\n") ? obfuscated : `${obfuscated}\n`;
  await writeFile(bundlePath, finalCode, "utf8");
  await rm(rawBundlePath, { force: true });
}

function forbiddenHits(code) {
  const checks = [
    ["new_worker", /new\s+Worker\b/],
    ["shared_worker", /\bSharedWorker\b/],
    ["service_worker", /serviceWorker\b/],
    ["post_message", /\bpostMessage\b/],
    ["message_channel", /\bMessageChannel\b/],
    ["broadcast_channel", /\bBroadcastChannel\b/],
    ["iframe", /<iframe\b|createElement\(["']iframe/],
    ["eval", /\beval\s*\(/],
    ["new_function", /new\s+Function\b/],
    ["webassembly", /\bWebAssembly\b/],
    ["source_mapping", /sourceMappingURL/],
    ["remote_loading", /https?:\/\//],
  ];
  return checks.filter(([, pattern]) => pattern.test(code)).map(([name]) => name);
}

async function postBuildChecks() {
  if (await countByFolder("z8/x", /^x\d\d\.js$/) !== 44) fail({ error: "shadow_file_count_wrong" });
  if (await countByFolder("z8/v", /^v\d\d\.js$/) !== 25) fail({ error: "vendor_file_count_wrong" });
  const bundle = await readFile(bundlePath, "utf8");
  const hits = forbiddenHits(bundle);
  if (hits.length) fail({ error: "forbidden_runtime_token", hits });
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: jsAssets });
}

async function createCaptures() {
  await rm(path.join(visibleRoot, "captures"), { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(captureHostRoot, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(captureHostRoot, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(captureHostRoot, "favicon.svg"));

  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const cssInfo = await stat(path.join(distRoot, "styles.css"));
  const svgInfo = await stat(path.join(distRoot, "favicon.svg"));
  const manifest = {
    case_id: caseId,
    capture_root: "captures/devtools-source-dump",
    origin: "http://127.0.0.1:4008",
    mode: "initial_page_load_only",
    source_maps_exposed: false,
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4008/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4008/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4008/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4008/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  await writeFile(
    path.join(capturesRoot, "source-tree.txt"),
    [
      "devtools-source-dump/",
      `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
      `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes, text/javascript; charset=utf-8)`,
      `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`,
      `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
    ].join("\n") + "\n",
    "utf8",
  );
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  }
  return result.stdout;
}

async function writeBuildMeta(stats) {
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const anchor = oracle.primary_anchor;
  const meta = {
    case_id: caseId,
    schema_version: "1.0",
    metadata_role: "case_metadata_and_analysis",
    difficulty: {
      preset: "hard_no_worker_main_thread_only",
      runtime_boundary: "main_thread_only",
      call_depth: 44,
      router_layers: 8,
      middleware_layers: 10,
      state_machine_steps: 3128,
      async_level: 7,
      distractor_count: 44,
      semantic_decoy_count: 24,
      submit_path_decoy_count: 14,
      vendor_noise_file_count: 25,
      obfuscation_level: 3,
      obfuscation_compact: false,
      construct_validity_note: "Names of module-level functions are preserved (renameGlobals:false) so submissions can name captured functions deterministically; locals are mangled, strings are array-encoded, and control flow is flattened. The primary challenge is semantic disambiguation among the request-signature reducers, staged gate handlers, sink wrappers and off-chain decoys, not literal keyword search (the target field/action are assembled from character-code arrays at the sink)."
    },
    task_contract: {
      task_type: "top_1_function_level_runtime_behavior_localization",
      public_task_label: "request_signature_token_derivation",
      answer_unit: "complete_javascript_function",
      primary_metric: "top_1_weighted_anchor_score",
      exact_anchor_score: 1,
      target_observable: {
        trigger: {
          steps: [
            { selector: "#apiEndpoint", action: "fill", value: "/api/v2/orders" },
            { selector: "#httpMethod", action: "select", value: "POST" },
            { selector: "#authScheme", action: "select", value: "bearer" },
            { selector: "#requestBody", action: "fill", value: "amount=250&owner=maria" },
            { selector: "#replayGuard", action: "check" },
            { selector: "#stageRequest", action: "click" },
            { selector: "#sealRequest", action: "click" },
            { selector: "#signRequest", action: "click" },
          ],
        },
        sink: {
          api: "console.log",
          argument_type: "object",
          action: "request.sign",
          field: "req_sig",
          value_pattern: "^sig_[a-z0-9]{16}$",
        },
      },
      anchor_definition: oracle.anchor_definition,
    },
    candidate_scope: {
      included: ["captures/devtools-source-dump/**/*.js"],
      execution_context: "main browsing context",
      source_maps_exposed_to_agent: false,
      excluded: [
        "browser-internal scripts",
        "extension scripts",
        "debugger-generated views",
        "source files outside captures",
        "Web Worker scripts",
        "Service Worker scripts",
        "Shared Worker scripts",
        "WebAssembly modules",
      ],
    },
    build_artifacts: {
      page: `agent_visible/captures/devtools-source-dump/${captureHost}/index.html`,
      dist_bundle: `dist/assets/${bundleName}`,
      captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
      capture_manifest: "agent_visible/captures/devtools-source-dump/manifest.json",
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(bundle),
      captured_bundle_lines: linesOf(bundle),
      total_source_lines: stats.src,
      src_lines: stats.src,
      z8_lines: stats.z8,
    },
    runtime_boundary: {
      threading: "main_thread_only",
      event_plane: "staged stage/seal/sign click gate plus async/await handoff, microtask, animation-frame, timer and mutation-observer continuations",
      uses_web_worker: false,
      uses_service_worker: false,
      uses_shared_worker: false,
      uses_wasm: false,
      uses_post_message_for_core: false,
    },
    primary_anchor: {
      answer_function: anchor.answer_function,
      source_function: anchor.source_function,
      source_file: anchor.source_file,
      captured_bundle: anchor.captured_span.file,
      captured_span: anchor.captured_span,
      oracle_pointer: "oracle.hidden.json:primary_anchor",
    },
    challenge_analysis: {
      structural_uncertainty: {
        applies: true,
        evidence: [
          "The DevTools-visible JavaScript corpus is a single obfuscated bundle and no source map is exposed to the agent.",
          "The target field name and action are assembled from character-code arrays at the sink, so direct literal search is insufficient.",
          "The request signature token is carried through a stage/seal/sign staged request flow before the sink wrapper receives it.",
          "The selected slot and config are recovered through a runtime table before the converter is called.",
        ],
        measurements: {
          captured_js_files: 1,
          captured_js_total_bytes: bundleInfo.size,
          captured_bundle_lines: linesOf(bundle),
          router_layers: 8,
          state_machine_steps: 3128,
          shadow_file_count: 44,
          vendor_noise_file_count: 25,
        },
      },
      semantic_explosion: {
        applies: true,
        evidence: [
          "The click path crosses staged session gating, async sign dispatch, action routing, filtering, priority projection, tuple construction, asynchronous scheduling, middleware, table config selection, request signature derivation and console sink wrapping.",
          "Dozens of decoy modules call the same factory with non-target slots, so nearby factory usage is not enough to identify the target anchor.",
        ],
        measurements: {
          behavior_chain_function_like_units: oracle.role_oracle.filter((row) => row.score > 0).length,
          off_chain_decoy_rows: oracle.role_oracle.filter((row) => row.role === "Off-chain").length,
          same_factory_decoy_slots: 31,
        },
      },
      causal_fragmentation: {
        applies: true,
        evidence: [
          "The target value is separated from the commit click by stage and seal state, async/await handoff, queueMicrotask, animation-frame, timer and MutationObserver boundaries.",
          "The final sink receives an already derived sig_ token, so sink inspection alone cannot identify the conversion site.",
        ],
        async_boundaries: [
          "async/await handoff",
          "queueMicrotask continuation",
          "requestAnimationFrame callback",
          "setTimeout(..., 0)",
          "MutationObserver callback",
        ],
      },
    },
    behavior_category: {
      paper_category: "request_signature_token_derivation",
      case_category: "request_signature_token_derivation",
      subtype: "staged table-segment request signature derivation",
      network_request_present: false,
      reason: "The observable value is constructed by deriving a keyed request signature from staged table segment tuple lanes, runtime transit state and statistics, then serializing it as a stable sig_ console token.",
      near_categories: [
        { category: "state_encoding", why_not: "The anchor derives a keyed request signature hash rather than only formatting state fields." },
        { category: "byte_array_transformation", why_not: "The anchor derives a keyed signature token rather than materializing and emitting a raw byte array." },
        { category: "request_transformation", why_not: "No network request body is emitted or rewritten." },
        { category: "browser_fingerprint", why_not: "The target inputs come from local request controls and segment staging state, not browser or device capability collection." },
      ],
    },
    counts: {
      src_lines: stats.src,
      z8_lines: stats.z8,
      bundle_lines: linesOf(bundle),
    },
  };
  await writeFile(path.join(hiddenRoot, "build_meta.hidden.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
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
  const genOutput = runGenOracleSpans();
  await writeBuildMeta(stats);
  const bundleInfo = await stat(bundlePath);
  console.log(JSON.stringify({
    case_id: caseId,
    passed: true,
    bundle: path.relative(hiddenRoot, bundlePath).replaceAll("\\", "/"),
    captured_bundle: `../agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
    bundle_bytes: bundleInfo.size,
    bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
    counts: stats,
    gen_oracle: JSON.parse(genOutput),
  }, null, 2));
}

main().catch((error) => fail({ error: "build_failed", message: String(error && error.stack || error) }));
