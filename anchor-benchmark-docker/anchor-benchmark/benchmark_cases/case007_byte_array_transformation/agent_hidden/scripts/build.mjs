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
const captureHost = "127.0.0.1_10879";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "markdown.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case007_byte_array_transformation";

const requirements = new Map([
  ["src/host/index.html", 80],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 120],
  ["src/z0/b1.js", 160],
  ["src/z0/c2.js", 160],
  ["src/z0/d3.js", 180],
  ["src/z0/e4.js", 260],
  ["src/z0/f5.js", 260],
  ["src/z0/g6.js", 220],
  ["src/z0/h7.js", 180],
  ["src/z0/i8.js", 180],
  ["src/z0/j9.js", 180],
  ["src/z0/k0.js", 180],
  ["src/z0/k1.js", 180],
  ["src/z0/k2.js", 180],
  ["src/z0/l0.js", 340],
  ["src/z0/m0.js", 280],
  ["src/z0/n0.js", 300],
  ["src/z0/o0.js", 640],
  ["src/z0/p0.js", 320],
  ["src/z0/q0.js", 220],
  ["src/z0/k7/q3/t9.js", 540],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 7007,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "mangled",
  stringArray: true,
  stringArrayThreshold: 0.7,
  transformObjectKeys: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.2,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false,
};

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

function rel(file) {
  return path.relative(hiddenRoot, file).replaceAll("\\", "/");
}

async function checkOne(relative, required) {
  const file = path.join(hiddenRoot, relative);
  let text = "";
  try {
    text = await readFile(file, "utf8");
  } catch {
    fail({ error: "missing_required_file", file: relative });
  }
  if (linesOf(text) < required) fail({ error: "line_count_too_low", file: relative, actual_lines: linesOf(text), required_lines: required });
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) await checkOne(relative, required);
  const all = await readFiles(hiddenRoot);
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = rel(file);
    if (relative.startsWith("dist/")) continue;
    if (!relative.startsWith("src/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  if (src < 14000) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14000 });
  if (z0 < 12000) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12000 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9000) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9000 });
  }
  return { total: src, src, z0 };
}

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "factory_export_missing" });
  if (!/slot:\s*29/.test(source)) fail({ error: "selected_slot_missing" });
  if (!/Uint8Array/.test(source) || !/transformMediaTypedArray/.test(source)) fail({ error: "typed_array_anchor_missing" });
  if (/typed_array_payload|markdown\.preview/.test(source)) fail({ error: "target_observable_leaked_in_factory" });
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  if (!/116,\s*121,\s*112,\s*101,\s*100,\s*95,\s*97,\s*114,\s*114,\s*97,\s*121,\s*95,\s*112,\s*97,\s*121,\s*108,\s*111,\s*97,\s*100/.test(sink)) fail({ error: "dynamic_sink_field_missing" });
  if (!/109,\s*97,\s*114,\s*107,\s*100,\s*111,\s*119,\s*110,\s*46,\s*112,\s*114,\s*101,\s*118,\s*105,\s*101,\s*119/.test(sink)) fail({ error: "dynamic_sink_action_missing" });
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z0/a0.js"></script>',
    '<script type="module" src="./assets/markdown.app.bundle.js"></script>',
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0/a0.js"), treeshake: false });
  await bundle.write({
    file: bundlePath,
    format: "es",
    sourcemap: false,
    inlineDynamicImports: true,
  });
  await bundle.close();
  const raw = await readFile(bundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/3112/.test(raw) || !/Uint8Array/.test(raw)) fail({ error: "raw_bundle_expected_logic_missing" });
  const output = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  const bundlePad = [];
  let padIndex = 0;
  while (linesOf(`${output}\n${bundlePad.join("\n")}`) < 9100) {
    const name = `__case007_markdown_pad_${padIndex}`;
    bundlePad.push(
      `class ${name} { constructor(label = 'markdown row ${padIndex}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((item) => ({ ...item })); } }`,
    );
    padIndex += 1;
  }
  await writeFile(bundlePath, `${output}\n${bundlePad.join("\n")}\n`);
}

async function scanDist() {
  const bundle = await readFile(bundlePath, "utf8");
  const bad = [
    /sourceMappingURL/i,
    /new\s+Worker/i,
    /SharedWorker/i,
    /serviceWorker\s*\./i,
    /BroadcastChannel/i,
    /postMessage\s*\(/i,
    /<iframe/i,
    /eval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /blob:/i,
    /data:text\/javascript/i,
  ];
  const hit = bad.find((pattern) => pattern.test(bundle));
  if (hit) fail({ error: "forbidden_dist_text", pattern: String(hit) });
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: jsAssets });
}

async function createCaptures() {
  await rm(captureAssetsRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(capturesRoot, captureHost, "index.html"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(capturesRoot, captureHost, "favicon.svg"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(capturesRoot, captureHost, "styles.css"));
  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const svgInfo = await stat(path.join(hostRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(hostRoot, "styles.css"));
  const origin = "http://127.0.0.1:10879/";
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: origin,
    mode: "initial_page_load_only",
    note: "Only resources served by case007_byte_array_transformation during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: origin, savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `${origin}assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: `${origin}favicon.svg`, savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: `${origin}styles.css`, savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  const sourceTree = [
    "devtools-source-dump/",
    `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
    `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
    `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`,
  ].join("\n") + "\n";
  await writeFile(path.join(capturesRoot, "source-tree.txt"), sourceTree, "utf8");
}

async function updateBuildMeta(stats) {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
  const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
  const anchor = oracle.primary_anchor;
  const meta = {
    case_id: caseId,
    schema_version: "1.0",
    metadata_role: "case_metadata_and_analysis",
    generated_at: new Date().toISOString(),
    difficulty: {
      preset: "hard_no_worker_main_thread_only",
      runtime_boundary: "none",
      call_depth: 38,
      router_layers: 6,
      middleware_layers: 8,
      state_machine_steps: 3112,
      async_level: 7,
      distractor_count: 44,
      semantic_decoy_count: 20,
      submit_path_decoy_count: 12,
      vendor_noise_level: "very_high",
      obfuscation_level: 4,
      obfuscation_compact: false,
      bundle_mode: "single_app_bundle",
    },
    task_contract: {
      task_type: "top_1_function_level_runtime_behavior_localization",
      public_task_label: "byte_array_transformation",
      answer_unit: "complete_javascript_function",
      primary_metric: "top_1_weighted_anchor_score",
      exact_anchor_score: 1,
      target_observable: {
        trigger: {
          steps: [
            { action: "type", selector: "#markdownInput", value: "# Array Plan\n\n- stage benchmark\n- transform output\n\n> verify typed payload" },
            { action: "select", selector: "#previewMode", value: "reader" },
            { action: "select", selector: "#arrayProfile", value: "header-biased" },
            { action: "set", selector: "#byteWindow", value: "21" },
            { action: "check", selector: "#autoToc" },
            { action: "check", selector: "#scrambleWhitespace" },
            { action: "click", selector: "#stageButton" },
            { action: "click", selector: "#transformButton" },
          ],
        },
        sink: {
          api: "console.log",
          argument_type: "object",
          action: "markdown.preview",
          field: "typed_array_payload",
          value_pattern: "^ta_[A-Za-z0-9_-]{24}$",
        },
      },
      anchor_definition: oracle.anchor_definition,
    },
    primary_anchor: {
      answer_function: anchor.answer_function || anchor.captured_function,
      source_function: anchor.function || "transformMediaTypedArray",
      source_file: anchor.source_file,
      source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? false,
      captured_file: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
      captured_span: {
        start_line: anchor.captured_span.start_line,
        end_line: anchor.captured_span.end_line,
        start_offset: anchor.captured_span.start_offset,
        end_offset: anchor.captured_span.end_offset,
      },
      role_oracle_anchor_entries: 1,
      oracle_pointer: "oracle.hidden.json:primary_anchor",
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
      total_source_lines: stats.total,
      src_lines: stats.src,
      z0_lines: stats.z0,
    },
    runtime_boundary: {
      threading: "main_thread_only",
      event_plane: "two-click staged markdown controls plus envelope routing, promise, microtask, timer, animation-frame and mutation-observer continuations",
      uses_web_worker: false,
      uses_service_worker: false,
      uses_shared_worker: false,
      uses_wasm: false,
      uses_post_message_for_core: false,
    },
    challenge_analysis: {
      structural_uncertainty: {
        applies: true,
        evidence: [
          "The DevTools-visible JavaScript corpus is a single obfuscated bundle and no source map is exposed to the agent.",
          "The target field name is assembled from character-code arrays at the sink, so direct literal search is insufficient.",
          "The typed-array payload is carried through staged markdown routing, tuple normalization and slot-29 config selection before the sink wrapper receives it.",
          "Dozens of decoy factory slots reuse the same converter shape, so nearby factory usage is not enough to identify the target anchor.",
        ],
        measurements: {
          captured_js_files: 1,
          captured_bundle_lines: linesOf(bundle),
          router_layers: 6,
          state_machine_steps: 3112,
          decoy_files: 44,
          vendor_noise_file_count: 25,
        },
      },
      semantic_explosion: {
        applies: true,
        evidence: [
          "The commit path crosses staged markdown session control, envelope routing, markdown tuple construction, asynchronous scheduling, middleware, config selection, Uint8Array materialization, ta_ encoding and console sink wrapping.",
          "Decoy modules produce plausible markdown-like values but those values are not assigned to the target typed_array_payload field.",
          "Vendor-like modules provide executable local noise and are imported by the boot path.",
        ],
        measurements: {
          behavior_chain_function_like_units: 26,
          off_chain_decoy_modules: 44,
          same_factory_decoy_slots: 31,
        },
      },
      causal_fragmentation: {
        applies: true,
        evidence: [
          "The target value is separated from the transform click by Promise, microtask, timer, animation-frame and MutationObserver boundaries.",
          "The final sink receives an already encoded ta_ payload, so sink inspection alone cannot identify the conversion site.",
          "The converter receives tuple rows plus transit, shadow and mid context that were prepared in earlier layers.",
        ],
        async_boundaries: [
          "Promise continuation",
          "queueMicrotask continuation",
          "setTimeout(..., 0)",
          "requestAnimationFrame callback",
          "MutationObserver callback",
        ],
      },
    },
    behavior_category: {
      paper_category: "byte_array_transformation",
      case_category: "byte_array_transformation",
      subtype: "staged markdown typed-array payload materialization",
      network_request_present: false,
      reason: "The observable value is constructed by materializing an 18-byte Uint8Array from markdown tuple lanes, transit and shadow context, then serializing it as a stable ta_ console payload.",
    },
    counts: {
      total_source_lines: stats.total,
      src_lines: stats.src,
      z0_lines: stats.z0,
      bundle_lines: linesOf(bundle),
    },
  };
  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.status !== 0) {
    fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  }
}

await sourceAnswerChecks();
await lineChecks(false);
await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
await scanDist();
const stats = await lineChecks(true);
await createCaptures();
runGenOracleSpans();
await updateBuildMeta(stats);
const bundleInfo = await stat(bundlePath);
console.log(
  JSON.stringify(
    {
      case_id: caseId,
      built: true,
      dist: path.relative(process.cwd(), distRoot),
      bundle: path.relative(process.cwd(), bundlePath),
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
    },
    null,
    2,
  ),
);
