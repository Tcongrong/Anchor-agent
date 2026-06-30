# Maintainer / grader materials (agent-hidden)

Everything here is **private** to maintainers, graders and CI. It must never be
distributed to benchmark agents — only `../agent_visible/` is.

## Contents

- `src/` — source tree for the workspace preferences behaviour chain and decoys
- `scripts/` — `build.mjs`, `gen_oracle_spans.mjs`, `gen_prefs_distractors.mjs`, `verify.mjs`, `serve.mjs`, `grade_submission.mjs`
- `dist/` — build output (bundle copied into `../agent_visible/captures/` by the build)
- `oracle.hidden.json` — private gold standard (`primary_anchor` + `role_oracle`)
- `build_meta.hidden.json` — task contract, candidate scope and difficulty analysis
- `package.json` — local scripts and pinned dev dependencies

## Pipeline

`npm run build` runs `scripts/build.mjs`, which:

1. copies host files and bundles `src/prefsCase/main.js` with rollup (ES), then lightly obfuscates it with a fixed seed (mangled locals only; `renameGlobals:false` keeps module-level names) and pads the bundle to a large haystack,
2. scans `dist/` for forbidden constructs (workers, postMessage, sourcemaps, dynamic chunks),
3. copies the bundle + page into `../agent_visible/captures/devtools-source-dump/127.0.0.1_4218/` and writes a fresh `manifest.json` + `source-tree.txt`,
4. runs `scripts/gen_oracle_spans.mjs` to recompute every `captured_span` (offsets, line/col, `sha256`, `normalized_sha256`) and `answer_function` from the captured bundle,
5. mirrors `build_artifacts` and `primary_anchor` into `build_meta.hidden.json`.

`captured_span` is `[start_offset, end_offset)`; `sha256` is computed over exactly that
byte range, so grading by honest re-slice matches the recorded hash.

Grade an agent submission with `npm run grade -- <submission.json>` (or pipe JSON on stdin).
