import { mkdir, rm, copyFile, readFile, writeFile, readdir, stat } from "node:fs/promises";
import { readFileSync } from "node:fs";
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
const captureHost = "127.0.0.1_8458";
const captureHostRoot = path.join(capturesRoot, captureHost);
const captureAssetsRoot = path.join(captureHostRoot, "assets");
const appBundleName = "upload.app.bundle.js";
const ticketChunkName = "upload.ticket.chunk.js";
const appBundlePath = path.join(assetsRoot, appBundleName);
const ticketChunkPath = path.join(assetsRoot, ticketChunkName);
const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const caseId = "case006_request_transformation";
const ROUTER_LAYERS = 2;
const MIDDLEWARE_LAYERS = 2;

function countRouteTableRows() {
  const text = readFileSync(
    path.join(srcRoot, "uploadCase", "intents", "uploadIntentTable.js"),
    "utf8"
  );
  return [...text.matchAll(/^\s*"([^"]+)":/gm)].length;
}

// App bundle: light obfuscation (mangled identifiers only) so the haystack stays buildable.
// Ticket chunk: full obfuscation profile; renameGlobals:false keeps top-level names for oracle spans.
const appObfuscationOptions = {
  seed: 1006,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "mangled",
  stringArray: false,
  transformObjectKeys: false,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false
};

const ticketObfuscationOptions = {
  seed: 1006,
  compact: true,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
  stringArray: true,
  stringArrayThreshold: 0.72,
  stringArrayEncoding: ["base64"],
  transformObjectKeys: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.22,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false
};

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function assertHaystack() {
  const noiseCount = await countByFolder("src/uploadCase/noise", /^n\d\d\.js$/);
  const vendorCount = await countByFolder("src/uploadCase/vendor", /^v\d\d\.js$/);
  if (noiseCount !== 44) {
    throw new Error(`expected 44 noise modules, found ${noiseCount}; run scripts/gen_upload_distractors.mjs`);
  }
  if (vendorCount !== 25) {
    throw new Error(`expected 25 vendor modules, found ${vendorCount}; run scripts/gen_upload_distractors.mjs`);
  }
}

function stripBom(text) {
  return text.replace(/^\uFEFF/, "");
}

async function copyHostFiles() {
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });

  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/uploadCase/main.js"></script>',
    [
      '<script type="module" src="./assets/upload.app.bundle.js"></script>',
      '<script type="module" src="./assets/upload.ticket.chunk.js"></script>'
    ].join("\n    ")
  );

  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundles() {
  const bundle = await rollup({
    input: path.join(srcRoot, "uploadCase", "main.js"),
    treeshake: {
      moduleSideEffects: true
    }
  });

  await bundle.write({
    dir: assetsRoot,
    format: "es",
    sourcemap: false,
    entryFileNames: appBundleName,
    chunkFileNames: ticketChunkName
  });

  await bundle.close();

  for (const filePath of [appBundlePath, ticketChunkPath]) {
    const code = await readFile(filePath, "utf8");
    const options = filePath === appBundlePath ? appObfuscationOptions : ticketObfuscationOptions;
    let obfuscated = JavaScriptObfuscator.obfuscate(code, options).getObfuscatedCode();

    if (filePath === appBundlePath) {
      const bundlePad = [];
      let padIndex = 0;
      while (linesOf(`${obfuscated}\n${bundlePad.join("\n")}`) < 9200) {
        bundlePad.push(
          `class UploadPad${padIndex} { constructor(label = 'upload row ${padIndex}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((item) => ({ ...item })); } }`
        );
        padIndex += 1;
      }
      obfuscated = `${obfuscated}\n${bundlePad.join("\n")}\n`;
    }

    await writeFile(filePath, obfuscated, "utf8");
  }
}

async function readFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await readFiles(resolved));
    } else {
      out.push(resolved);
    }
  }

  return out;
}

async function scanDist() {
  const files = await readFiles(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");

  const disallowed = [
    /new\s+Worker/i,
    /\bWorker\s*\(/i,
    /new\s+SharedWorker/i,
    /SharedWorker/i,
    /serviceWorker\s*\./i,
    /importScripts\s*\(/i,
    /postMessage\s*\(/i,
    /BroadcastChannel/i,
    /MessageChannel/i,
    /worker\.bundle\.js/i,
    /\.worker\.js/i,
    /sourceMappingURL/i
  ];

  const hasBadName = names.some((name) => /\.map$/i.test(name) || /worker/i.test(name));
  const hasBadText = disallowed.some((pattern) => pattern.test(text));

  if (hasBadName || hasBadText) {
    throw new Error("case006_request_transformation dist scan failed.");
  }

  const appText = await readFile(appBundlePath, "utf8");
  if (linesOf(appText) < 9000) {
    throw new Error(`app bundle lines too low: ${linesOf(appText)} (required >= 9000)`);
  }

  return names;
}

// Sync the freshly built dist into the agent-visible captures snapshot and refresh the
// manifest + source-tree so the captured corpus always matches the current build.
async function createCaptures() {
  await rm(captureHostRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });

  await copyFile(appBundlePath, path.join(captureAssetsRoot, appBundleName));
  await copyFile(ticketChunkPath, path.join(captureAssetsRoot, ticketChunkName));
  await copyFile(path.join(distRoot, "index.html"), path.join(captureHostRoot, "index.html"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(captureHostRoot, "favicon.svg"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(captureHostRoot, "styles.css"));

  const htmlInfo = await stat(path.join(captureHostRoot, "index.html"));
  const appInfo = await stat(path.join(captureAssetsRoot, appBundleName));
  const ticketInfo = await stat(path.join(captureAssetsRoot, ticketChunkName));
  const svgInfo = await stat(path.join(captureHostRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(captureHostRoot, "styles.css"));

  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:8458/",
    mode: "initial_page_load_with_explicit_module_scripts",
    note: "Resources served by case006_request_transformation during initial page load are dumped. The same-thread upload ticket chunk is loaded as a side-effect-free ES module script so it appears in Chrome DevTools Sources without executing the upload path. Browser extension resources are intentionally not included.",
    resources: [
      { url: "http://127.0.0.1:8458/", status: 200, contentType: "text/html; charset=utf-8", bytes: htmlInfo.size, savedAs: `${captureHost}/index.html` },
      { url: `http://127.0.0.1:8458/assets/${appBundleName}`, status: 200, contentType: "text/javascript; charset=utf-8", bytes: appInfo.size, savedAs: `${captureHost}/assets/${appBundleName}` },
      { url: `http://127.0.0.1:8458/assets/${ticketChunkName}`, status: 200, contentType: "text/javascript; charset=utf-8", bytes: ticketInfo.size, savedAs: `${captureHost}/assets/${ticketChunkName}` },
      { url: "http://127.0.0.1:8458/favicon.svg", status: 200, contentType: "image/svg+xml", bytes: svgInfo.size, savedAs: `${captureHost}/favicon.svg` },
      { url: "http://127.0.0.1:8458/styles.css", status: 200, contentType: "text/css; charset=utf-8", bytes: cssInfo.size, savedAs: `${captureHost}/styles.css` }
    ]
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

  const sourceTree = [
    "devtools-source-dump/",
    `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
    `  ${captureHost}/assets/${appBundleName} (${appInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/assets/${ticketChunkName} (${ticketInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
    `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`
  ].join("\n") + "\n";
  await writeFile(path.join(capturesRoot, "source-tree.txt"), sourceTree, "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8"
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.status !== 0) {
    if (result.stderr) process.stderr.write(result.stderr);
    throw new Error("gen_oracle_spans.mjs failed");
  }
}

async function writeBuildMeta(files) {
  const appInfo = await stat(appBundlePath);
  const ticketInfo = await stat(ticketChunkPath);
  const appBundleText = await readFile(appBundlePath, "utf8");
  const appBundleLines = linesOf(appBundleText);
  const oracle = JSON.parse(stripBom(await readFile(oraclePath, "utf8")));
  const anchor = oracle.primary_anchor;
  const routeTableRows = countRouteTableRows();
  const meta = {
    case_id: "case006_request_transformation",
    schema_version: "1.0",
    metadata_role: "case_metadata_and_analysis",
    difficulty: {
      preset: "hard_no_worker_main_thread_only",
      runtime_boundary: "none",
      same_thread_event_bus: true,
      dynamic_dispatch: true,
      deferred_module_import: true,
      bundle_mode: "split_chunks_no_worker",
      obfuscation_level: 4,
      obfuscation_note: "App bundle uses mangled-identifier obfuscation plus a 69-module upload distractor haystack (44 noise + 25 vendor) padded to 9000+ lines. Ticket chunk uses control-flow flattening and string-array obfuscation with renameGlobals:false so top-level oracle names (including rewriteUploadRequest) stay readable for grader/agent submission. The primary bottleneck is split-corpus navigation, haystack search and semantic disambiguation among adjacent upload helpers—not concealing the anchor identifier inside the ticket chunk.",
      distractor_count: oracle.role_oracle.length - 1,
      semantic_decoy_count: oracle.role_oracle.filter((r) => r.role === "Off-chain").length,
      request_path_decoy_count: oracle.role_oracle.filter((r) => ["Path-critical", "Path-generic-helper", "Path/Wrapper", "Wrapper"].includes(r.role)).length,
      vendor_noise_file_count: 25,
      vendor_noise_level: "very_high",
      distractor_haystack_modules: 69,
      distractor_haystack_scoring: "bulk_inert_corpus_only_not_individual_role_oracle_entries",
      router_layers: ROUTER_LAYERS,
      middleware_layers: MIDDLEWARE_LAYERS,
      call_depth: 12,
      async_level: 7
    },
    task_contract: {
      task_type: "top_1_function_level_runtime_behavior_localization",
      answer_unit: "complete_javascript_function",
      primary_metric: "top_1_weighted_anchor_score",
      exact_anchor_score: 1,
      target_observable: {
        trigger: {
          steps: [
            {
              action: "type",
              selector: "#manifestDraftInput",
              value: "file=quarterly-report.pdf\nsummary=finance summary\ncategory=finance"
            },
            { action: "click", selector: "#parseDraftButton" },
            { action: "check", selector: "input[name=\"laneMode\"][value=\"expedite\"]" },
            { action: "select", selector: "#policySelect", value: "restricted" },
            { action: "check", selector: "#sealReviewCheckbox" },
            { action: "click", selector: "#queueManifestButton" },
            { action: "click", selector: "#releaseRequestButton" }
          ]
        },
        sink: {
          api: "console.log",
          argument_type: "object",
          action: "upload.request",
          field: "request_payload",
          value_pattern: "object with method, endpoint, headers and rewritten body"
        }
      },
      anchor_definition: "The anchor is the first target-specific value-construction function on the dynamic behavior chain: the earliest function, after routing and input preparation, whose own body constructs the target observable value rather than merely collecting inputs, dispatching control, packaging the result, or emitting it to the sink."
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
      page: "dist/index.html",
      app_bundle: `dist/assets/${appBundleName}`,
      transform_chunk: `dist/assets/${ticketChunkName}`,
      captured_app_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${appBundleName}`,
      captured_transform_chunk: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${ticketChunkName}`,
      capture_manifest: "agent_visible/captures/devtools-source-dump/manifest.json",
      files,
      app_bundle_bytes: appInfo.size,
      app_bundle_lines: appBundleLines,
      transform_chunk_bytes: ticketInfo.size
    },
    primary_anchor: {
      answer_function: anchor.answer_function || anchor.function,
      source_function: anchor.source_function || anchor.function,
      source_file: anchor.source_file,
      source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? true,
      captured_bundle: anchor.captured_file,
      captured_span: {
        start_line: anchor.captured_span.start_line,
        end_line: anchor.captured_span.end_line,
        start_offset: anchor.captured_span.start_offset,
        end_offset: anchor.captured_span.end_offset
      },
      role_oracle_anchor_entries: oracle.role_oracle.filter((r) => r.role === "Anchor").length,
      oracle_pointer: "oracle.hidden.json:primary_anchor"
    },
    runtime_boundary: {
      threading: "main_thread_only",
      event_plane: "DOM click delegation plus local EventTarget dispatch on the main document",
      uses_web_worker: false,
      uses_service_worker: false,
      uses_shared_worker: false,
      uses_wasm: false,
      uses_post_message_for_core: false
    },
    challenge_analysis: {
      structural_uncertainty: {
        applies: true,
        evidence: [
          "The DevTools-visible corpus is split across a large obfuscated app bundle (9000+ lines with 69 inert distractor modules) and a deferred same-thread transform chunk without source maps.",
          "The target request payload is reached only after explicit draft parsing, parsed-record caching, policy and seal selection, queue-envelope construction, queued manifest release, committed manifest collection, row encoding, local event dispatch, dynamic resolver selection and chunk import.",
          "Several token-like upload helpers are present but do not construct the requested payload object."
        ],
        measurements: {
          captured_js_files: 2,
          bundle_mode: "split_chunks_no_worker",
          route_table_rows: routeTableRows,
          deferred_module_imports: 1,
          captured_app_bundle_lines: appBundleLines,
          distractor_haystack_modules: 69
        }
      },
      semantic_explosion: {
        applies: true,
        evidence: [
          "The path crosses a parse click, draft tokenization, session-backed parsed cache, lane and policy controls, a queue click, microtask-delayed queue event, a separate release click, manifest normalization, manifest-sheet encoding, local bus transfer, feed construction, request payload rewriting and sink wrapping.",
          "The bundle contains preview, retry, quota, MIME, history, archive, checksum and twelve additional upload mimic decoys with token/key/badge semantics that are adjacent to but off the target request-transformation path.",
          "An internal upload ticket is still produced as request header material, but the target observable is the rewritten request payload object.",
          "Sixty-nine haystack modules (~2070 similarly shaped helper functions) inflate the app bundle but are bulk inert corpus noise; they are counted in build_meta and verify but not individually listed in role_oracle."
        ],
        measurements: {
          behavior_chain_function_like_units: oracle.role_oracle.filter((r) => r.role !== "Off-chain").length,
          off_chain_decoy_modules: oracle.role_oracle.filter((r) => r.role === "Off-chain").length,
          same_page_semantic_decoys: oracle.role_oracle.filter((r) => r.role === "Off-chain").length,
          distractor_haystack_modules: 69
        }
      },
      causal_fragmentation: {
        applies: true,
        evidence: [
          "The parsed draft crosses a review CustomEvent and session-backed cache before the queued manifest crosses a queue microtask, release action, Promise continuation, queueMicrotask, CustomEvent and dynamic import boundaries.",
          "The sink receives an already rewritten payload, so inspecting console emission alone does not identify the construction site.",
          "The request ID helper is nested below the payload rewrite and is insufficient as the answer for the request_payload field."
        ],
        async_boundaries: [
          "Promise.resolve continuation",
          "draft review CustomEvent listener",
          "manifest queue microtask",
          "queueMicrotask continuation",
          "manifestBus.dispatchEvent(new CustomEvent(...)) listener",
          "dynamic import continuation",
          "publish sink continuation"
        ]
      },
      construct_validity: {
        applies: true,
        decision: "honest_description_M11a",
        primary_bottleneck: "split_corpus_haystack_plus_semantic_disambiguation",
        evidence: [
          "answer_function rewriteUploadRequest is intentionally readable in the small ticket chunk (renameGlobals:false) so agents can submit the bundle declaration name; keyword search within that chunk narrows candidates but does not replace locating the deferred chunk inside a 47k-line app bundle or disambiguating foldSegmentLedger, publishUploadTicket and twenty page-load mimics.",
          "Declared router_layers (2) and middleware_layers (2) match the actual uploadDelegate click capture plus dispatchUploadIntent table routing, and the manifestQueue Promise/microtask plus localManifestBus CustomEvent envelopes—not a fictional multi-tier router stack."
        ],
        measurements: {
          keyword_search_shortcut_within_ticket_chunk: true,
          keyword_search_sufficient_alone: false,
          score_ge_0_5_readable_answer_functions: [
            "rewriteUploadRequest",
            "clampPriority",
            "compactTags",
            "requestSummary",
            "foldSegmentLedger",
            "foldPrefixPath",
            "compressBranchBook",
            "six",
            "rotateLeft"
          ]
        }
      }
    },
    behavior_category: {
      paper_category: "request_transformation",
      case_category: "client_side_upload_request_payload_rewrite",
      subtype: "manifest-derived upload request body rewrite",
      network_request_present: false,
      reason: "The target observable is a rewritten request payload object with method, endpoint, headers and normalized body fields. The proof-like ticket is only header material inside the transformed request.",
      near_categories: [
        {
          category: "request_signature_token_derivation",
          why_not: "The internal upload ticket is not the requested observable field and does not by itself represent the request body rewrite."
        },
        {
          category: "state_encoding",
          why_not: "The target is an action request payload rather than a compact UI state code."
        },
        {
          category: "byte_array_transformation",
          why_not: "The output is a structured request object, not a byte buffer or binary payload."
        }
      ]
    },
    metadata_partitioning_notes: {
      answer_bearing_material: "stored only in oracle.hidden.json",
      private_oracle_location: "agent_hidden/oracle.hidden.json",
      benchmark_summary_location: "benchmark.summary.json or an equivalent corpus-level artifact",
      reason: "This file describes the task contract, candidate scope and difficulty analysis without exposing the primary anchor role oracle coordinates beyond the maintainer anchor mirror."
    }
  };

  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
}

await assertHaystack();
await copyHostFiles();
await buildBundles();
const files = await scanDist();
await createCaptures();
runGenOracleSpans();
await writeBuildMeta(files);

console.log(JSON.stringify({
  case_id: "case006_request_transformation",
  built: true,
  dist: path.relative(process.cwd(), distRoot),
  app_bundle: path.relative(process.cwd(), appBundlePath),
  ticket_chunk: path.relative(process.cwd(), ticketChunkPath),
  app_bundle_bytes: (await stat(appBundlePath)).size,
  app_bundle_lines: linesOf(await readFile(appBundlePath, "utf8")),
  transform_chunk_bytes: (await stat(ticketChunkPath)).size
}));
