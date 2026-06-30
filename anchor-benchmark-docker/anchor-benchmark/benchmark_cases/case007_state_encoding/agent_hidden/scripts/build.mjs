import { mkdir, rm, copyFile, readFile, writeFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { rollup } from "rollup";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const hostRoot = path.join(srcRoot, "host");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHost = "127.0.0.1_8077";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "workspace.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case007_state_encoding";

const requirements = new Map([
  ["src/host/index.html", 160],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/k7/q3/t9.js", 500],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 160);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 220);

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

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) {
    const text = await readFile(path.join(hiddenRoot, relative), "utf8");
    if (linesOf(text) < required) {
      fail({ error: "src_line_count_too_low", file: relative, actual_lines: linesOf(text), required_lines: required });
    }
  }
  const all = await readFiles(srcRoot);
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (path.relative(srcRoot, file).replaceAll("\\", "/").startsWith("z0/")) z0 += count;
  }
  if (src < 14060) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14060 });
  if (z0 < 12060) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12060 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9000) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9000 });
  }
  return { src, z0 };
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z0/a0.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`,
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({
    input: path.join(srcRoot, "z0", "a0.js"),
    treeshake: false,
  });
  await bundle.write({
    file: bundlePath,
    format: "es",
    sourcemap: false,
    inlineDynamicImports: true,
  });
  await bundle.close();
  const raw = await readFile(bundlePath, "utf8");
  await writeFile(bundlePath, raw.endsWith("\n") ? raw : `${raw}\n`, "utf8");
}

async function scanDist() {
  const files = await readFiles(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const text = (await Promise.all(files.filter((file) => /\.(html|css|js|svg)$/.test(file)).map((file) => readFile(file, "utf8")))).join("\n");
  const forbidden = [
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
  if (names.some((name) => /\.map$/i.test(name) || /worker/i.test(name))) fail({ error: "forbidden_dist_file", files: names });
  const hit = forbidden.find((pattern) => pattern.test(text));
  if (hit) fail({ error: "forbidden_dist_text", pattern: String(hit) });
}

async function createCaptures() {
  await rm(path.join(visibleRoot, "captures"), { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(capturesRoot, captureHost, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(capturesRoot, captureHost, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(capturesRoot, captureHost, "favicon.svg"));

  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const cssInfo = await stat(path.join(distRoot, "styles.css"));
  const svgInfo = await stat(path.join(distRoot, "favicon.svg"));
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:8077/",
    mode: "initial_page_load_only",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:8077/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:8077/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:8077/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:8077/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size }
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
    generated_at: new Date().toISOString(),
    difficulty: {
      preset: "hard_main_thread_state_encoding",
      runtime_boundary: "main_thread_only",
      call_depth: 38,
      router_layers: 6,
      middleware_layers: 8,
      state_machine_steps: 3112,
      async_level: 6,
      distractor_count: 44,
      semantic_decoy_count: 32,
      semantic_decoy_note: "Count of slot reducer configs in src/z0/k7/q3/t9.js (slots 0-31); only slot 23 is live for workspace state_code.",
      vendor_noise_file_count: 25,
      obfuscation_level: 0,
      construct_validity_note: "The primary challenge is semantic disambiguation among workspace state-encoding reducers and off-chain decoys in the captured bundle; this case preserves callable names so submissions can name captured functions deterministically. semantic_decoy_count counts the 32 slot reducer configs in t9.js (slots 0-31); slot 23 is the live encoder."
    },
    task_contract: {
      task_type: "top_1_function_level_runtime_behavior_localization",
      answer_unit: "complete_javascript_function",
      primary_metric: "top_1_weighted_anchor_score",
      exact_anchor_score: 1.0,
      target_observable: {
        trigger: {
          steps: [
            { action: "fill", selector: "#workspaceKey", value: "project-alpha-2024" },
            { action: "select", selector: "#syncInterval", value: "30" },
            { action: "check", selector: "#offlineMode" },
            { action: "click", selector: "#applyWorkspace" }
          ]
        },
        sink: {
          api: "console.log",
          argument_type: "object",
          action: "workspace.commit",
          field: "state_code",
          value_pattern: "^sc_[a-z0-9]{12}$"
        }
      },
      anchor_definition: oracle.anchor_definition
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
        "WebAssembly modules"
      ]
    },
    build_artifacts: {
      page: "agent_visible/captures/devtools-source-dump/127.0.0.1_8077/index.html",
      dist_bundle: `dist/assets/${bundleName}`,
      captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(bundle),
      captured_bundle_lines: linesOf(bundle)
    },
    runtime_boundary: {
      threading: "main_thread_only",
      event_plane: "DOM CustomEvent on the main document",
      uses_web_worker: false,
      uses_service_worker: false,
      uses_shared_worker: false,
      uses_wasm: false,
      uses_post_message_for_core: false
    },
    primary_anchor: {
      answer_function: anchor.answer_function,
      source_function: anchor.source_function,
      source_file: anchor.source_file,
      captured_bundle: anchor.captured_span.file,
      captured_span: anchor.captured_span,
      oracle_pointer: "oracle.hidden.json:primary_anchor"
    },
    challenge_analysis: {
      structural_uncertainty: {
        applies: true,
        measurements: {
          captured_js_files: 1,
          captured_js_total_bytes: bundleInfo.size,
          captured_bundle_lines: linesOf(bundle),
          workspace_action_table_rows: 12,
          state_machine_steps: 3112
        }
      },
      semantic_explosion: {
        applies: true,
        measurements: {
          behavior_chain_function_like_units: oracle.role_oracle.filter((row) => row.score > 0).length,
          off_chain_decoy_rows: oracle.role_oracle.filter((row) => row.role === "Off-chain").length,
          slot_reducer_configs: 32,
          live_slot: 23,
          vendor_noise_file_count: 25
        }
      },
      causal_fragmentation: {
        applies: true,
        async_boundaries: [
          "queueMicrotask continuation",
          "Promise.all continuation",
          "setTimeout(..., 0)",
          "requestAnimationFrame callback",
          "MutationObserver callback",
          "document.dispatchEvent(new CustomEvent(...)) listener"
        ]
      }
    },
    behavior_category: {
      paper_category: "state_encoding",
      case_category: "client_side_state_encoding",
      subtype: "deterministic compact workspace state code",
      network_request_present: false,
      reason: "The observable value is a deterministic signature token derived from workspace key, sync interval, offline mode, scope flags, route state, and request tuple data."
    },
    counts: {
      src_lines: stats.src,
      z0_lines: stats.z0,
      bundle_lines: linesOf(bundle)
    }
  };
  await writeFile(path.join(hiddenRoot, "build_meta.hidden.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
}

await lineChecks(false);
await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
await scanDist();
const stats = await lineChecks(true);
await createCaptures();
const genOutput = runGenOracleSpans();
await writeBuildMeta(stats);
const bundleInfo = await stat(bundlePath);

console.log(JSON.stringify({
  case_id: caseId,
  built: true,
  dist: path.relative(hiddenRoot, distRoot).replaceAll("\\", "/"),
  bundle: path.relative(hiddenRoot, bundlePath).replaceAll("\\", "/"),
  captured_bundle: `../agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
  bundle_bytes: bundleInfo.size,
  bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
  gen_oracle: JSON.parse(genOutput)
}, null, 2));
