# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for `case011_analytics_event_envelope`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys (anchor: `src/z0/e6/m3/r7.js: buildAnalyticsEventToken`) |
| `dist/` | Built page and bundle (served by `npm run serve`, default port 4231) |
| `scripts/build.mjs` | Rollup + obfuscate (fixed `seed: 1011`), sync `dist` bundle into `../agent_visible/captures/`, then run `gen_oracle_spans.mjs` and refresh `build_meta` |
| `scripts/gen_oracle_spans.mjs` | Regenerate every `captured_span` against the current captured bundle; derives bundle names from a readable in-memory rollup pre-bundle (no hand-maintained `$N` hints) |
| `scripts/verify.mjs` | Structural + Playwright runtime checks against `dist/` (console + sendBeacon assertions) |
| `scripts/serve.mjs` | Static server for `dist/` |
| `scripts/grade_submission.mjs` | Score an agent submission JSON against `oracle.hidden.json` |
| `oracle.hidden.json` | Private grading key: `primary_anchor` + `role_oracle` with `answer_function`/`source_function` dual-track naming and `captured_span` coordinates |
| `build_meta.hidden.json` | Task contract, candidate scope, difficulty analysis, scenario field, anchor mirror |

## Pipeline

```bash
npm run build && npm run verify
```

`build` is the only sanctioned way to refresh `agent_visible/captures/` and the oracle
coordinates together — never edit a `captured_span` by hand.

## Determinism

The value-construction path (trigger → routing → collection → scheduling → anchor → sink)
contains no `Math.random`, `Date.now`, or `new Date`; the same interaction always yields the
same `event_token`, and changing `#eventName` or `#platformSelect` changes it.
