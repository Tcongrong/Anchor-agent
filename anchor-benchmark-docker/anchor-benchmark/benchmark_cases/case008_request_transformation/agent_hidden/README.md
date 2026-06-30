# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for `case008_request_transformation`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys (anchor: `src/filterCase/requestCore/filterRequestPayload.js: composeReceivablesSearchBody`) |
| `dist/` | Built page, app bundle and lazy core chunk (served by `npm run serve`) |
| `scripts/build.mjs` | Rollup (app bundle haystack + lazy core chunk) + split obfuscation (fixed `seed: 8008`), sync `dist` into `../agent_visible/captures/`, then run `gen_oracle_spans.mjs` and refresh `build_meta` |
| `scripts/gen_filter_distractors.mjs` | Generate 44 noise + 25 vendor inert haystack modules under `src/filterCase/` |
| `scripts/gen_oracle_spans.mjs` | Regenerate every `captured_span` against the current captured bundles; locates each function by its preserved declaration name (`renameGlobals:false`) in the hinted bundle file |
| `scripts/verify.mjs` | Structural + Playwright runtime checks against `dist/` |
| `scripts/serve.mjs` | Static server for `dist/` |
| `scripts/grade_submission.mjs` | Score an agent submission JSON against `oracle.hidden.json` (file-aware: app bundle vs core chunk) |
| `oracle.hidden.json` | Private grading key: `primary_anchor` + `role_oracle` with `answer_function`/`source_function` dual-track naming and `captured_span` coordinates |
| `build_meta.hidden.json` | Task contract, candidate scope, difficulty analysis, anchor mirror |

## Pipeline

```bash
npm run gen:distractors  # first time or after haystack template edits
npm run build && npm run verify
```

`build` is the only sanctioned way to refresh `agent_visible/captures/` and the oracle
coordinates together — never edit a `captured_span` by hand. The app bundle uses mangled
identifiers plus a 69-module distractor haystack padded to 9000+ lines; the core chunk uses
stronger obfuscation with `renameGlobals:false`, so every top-level function name in the core
chunk is preserved verbatim and `answer_function` equals `source_function` for core-chunk entries.
The sink assembles the target field and action from character-code arrays in the app bundle.
