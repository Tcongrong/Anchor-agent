# case005_byte_array_transformation (maintainer notes)

This directory is maintainer-only. It holds the source tree, build/verify/grade scripts, dist output, build metadata and the private oracle.

The browser page is a batch data encoder. It accepts a batch key and compression mode, then emits one observable `console.log` object with action `batch.encode` and a deterministic `batch_payload` field after clicking Encode Package.

## Layout

- `src/z0/` — module source. Entry is `src/z0/a0.js`; the byte-array anchor lives in `src/z0/k7/q3/t9.js` as `serializePackedBytes`.
- `scripts/build.mjs` — rolls up `src/z0/a0.js`, obfuscates (seed 1005), writes `dist/`, syncs captures, runs `gen_oracle_spans.mjs`, refreshes `build_meta.hidden.json`.
- `scripts/gen_oracle_spans.mjs` — re-derives `captured_span` rows from `answer_function` in the captured bundle.
- `scripts/verify.mjs` — structural and runtime checks (Playwright).
- `scripts/grade_submission.mjs` — scores agent submissions against the oracle.
- `oracle.hidden.json` — private gold standard (anchor + role oracle).
- `build_meta.hidden.json` — task contract, difficulty analysis, anchor mirror.

## Commands

```bash
npm ci
npm run build
npm run verify
npm run grade -- <submission.json>
```

## Difficulty profile (case005 average)

- call_depth 38, router_layers 6, middleware_layers 8
- distractor_count 44, semantic_decoy_count 26
- obfuscation_level 4, vendor_noise_level very_high
- single captured bundle ~35079 lines (~1.69MB)
