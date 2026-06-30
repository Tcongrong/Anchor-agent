# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for `case006_request_transformation`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys (anchor: `src/uploadCase/request/rewriteUploadRequest.js: rewriteUploadRequest`) |
| `dist/` | Built page, app bundle and deferred ticket chunk (served by `npm run serve`) |
| `scripts/build.mjs` | Rollup (split app bundle + dynamic transform chunk) + obfuscate (fixed `seed: 1006`), sync `dist` into `../agent_visible/captures/`, then run `gen_oracle_spans.mjs` and refresh `build_meta` |
| `scripts/gen_upload_distractors.mjs` | Generate 44 noise + 25 vendor upload distractor haystack modules and `uploadDistractors.js` |
| `scripts/gen_upload_mimics.mjs` | Regenerate the expanded off-chain upload mimic decoy modules |
| `scripts/gen_oracle_spans.mjs` | Regenerate every `captured_span` against the current captured bundles; locates each function by its preserved declaration name (`renameGlobals:false`) in the hinted bundle file; runs source-mapping checks and `audit_oracle_spans.mjs` post-write |
| `scripts/audit_oracle_spans.mjs` | Independent hash + complete-function-body audit of every `role_oracle` entry against captures (also invoked by `gen` and `verify`) |
| `scripts/verify.mjs` | Structural + Playwright runtime checks against `dist/` |
| `scripts/serve.mjs` | Static server for `dist/` |
| `scripts/grade_submission.mjs` | Score an agent submission JSON against `oracle.hidden.json` (file-aware: app bundle vs ticket chunk) |
| `oracle.hidden.json` | Private grading key: `primary_anchor` + `role_oracle` with `answer_function`/`source_function` dual-track naming and `captured_span` coordinates |
| `build_meta.hidden.json` | Task contract, candidate scope, difficulty analysis, anchor mirror |

## Pipeline

```bash
npm run build && npm run verify
```

`build` is the only sanctioned way to refresh `agent_visible/captures/` and the oracle
coordinates together — never edit a `captured_span` by hand. Because the obfuscator runs with
`renameGlobals:false`, every top-level function name is preserved verbatim into both captured
bundles, so `answer_function` equals `source_function` for every entry in this case.
