# Maintainer / grader material (hidden from agents)

This directory is **not** distributed to benchmark agents. It contains the source, build
and judging tooling for `case003_request_transformation`.

## Contents

- `src/` — pre-obfuscation modules (`z0/` chain, `x/` decoys, `v/` vendor noise, `host/` page)
- `scripts/build.mjs` — rollup + javascript-obfuscator (fixed `seed`); writes `dist/`, copies the
  bundle into `../agent_visible/captures/`, then runs `gen_oracle_spans.mjs` and patches `build_meta`
- `scripts/gen_oracle_spans.mjs` — recomputes every `oracle.hidden.json` `captured_span` against the
  captured bundle (in-memory rollup pre-bundle + rename-invariant skeleton match; validates span
  completeness, cross-source-key dedup, and hash)
- `scripts/verify.mjs` — structural checks + Playwright runtime checks (console `filter.apply` /
  `query_pack`, `X-Query-Pack` header, input sensitivity, bundle-required)
- `scripts/serve.mjs` — static server for `dist/` on `:4173`
- `scripts/grade_submission.mjs` — scores an agent submission JSON against the oracle (exports
  `gradeAnswer(submission, oracle, bundleText)`)
- `oracle.hidden.json` — private gold standard (`primary_anchor` + `role_oracle`, dual-track
  `answer_function` / `source_function`)
- `build_meta.hidden.json` — task contract, difficulty and challenge analysis (no answer-bearing data)

## Rebuild / regrade

```bash
cd agent_hidden
npm install
npm run build      # -> dist, captures, regenerated oracle spans, patched build_meta
npm run verify
```

Anchor: `createReducer` (`src/z0/k7/q3/t9.js`), the live slot-23 reducer factory whose returned
closure constructs the `np_<body>.<check>` value written to `X-Query-Pack` and the console.
Because the obfuscator runs with `renameGlobals:false`, top-level function names survive into the
bundle, so `answer_function` usually equals `source_function`; graders must still match by
`captured_span` (offset/hash), not by the identifier string.
