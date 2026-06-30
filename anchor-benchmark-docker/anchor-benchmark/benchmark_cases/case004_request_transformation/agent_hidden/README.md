# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for `case004_request_transformation`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys (anchor: `src/z4/q8/r2/m5.js: buildExportQueryPayload`) |
| `dist/` | Built page and bundle (served by `npm run serve`) |
| `scripts/build.mjs` | Rollup + obfuscate (fixed `seed: 1001`), sync `dist` bundle into `../agent_visible/captures/`, then run `gen_oracle_spans.mjs` and refresh `build_meta` |
| `scripts/gen_oracle_spans.mjs` | Regenerate every `captured_span` against the current captured bundle; derives bundle names from a readable in-memory rollup pre-bundle (no hand-maintained `$N` hints) |
| `scripts/verify.mjs` | Structural + Playwright runtime checks against `dist/` |
| `scripts/serve.mjs` | Static server for `dist/` |
| `scripts/grade_submission.mjs` | Score an agent submission JSON against `oracle.hidden.json` |
| `oracle.hidden.json` | Private grading key: `primary_anchor` + `role_oracle` with `answer_function`/`source_function` dual-track naming and `captured_span` coordinates |
| `build_meta.hidden.json` | Task contract, candidate scope, difficulty analysis, anchor mirror |

## Pipeline

```bash
npm run build && npm run verify
```

`build` is the only sanctioned way to refresh `agent_visible/captures/` and the oracle
coordinates together — never edit a `captured_span` by hand.
