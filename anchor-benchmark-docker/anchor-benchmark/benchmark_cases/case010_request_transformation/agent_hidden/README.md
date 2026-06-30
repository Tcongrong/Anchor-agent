# Maintainer / grader material (agent-hidden)

This directory holds everything that must **not** be distributed to benchmark agents
for `case010_request_transformation`.

## Contents

- `src/` - source tree (host page + obfuscation input modules); the answer module is `src/z0/k7/q3/t9.js`
- `scripts/` - `build.mjs`, `gen_oracle_spans.mjs`, `verify.mjs`, `serve.mjs`, `grade_submission.mjs`
- `dist/` - build output (single obfuscated bundle); mirrored into `../agent_visible/captures/`
- `oracle.hidden.json` - private gold standard (`primary_anchor` + `role_oracle`, dual-track `answer_function`/`source_function`)
- `build_meta.hidden.json` - task contract, difficulty analysis, build artifacts
- `package.json` - pinned dev dependencies and scripts

## Pipeline

```bash
npm install
npm run build     # rollup -> obfuscate (seed 1010) -> dist -> captures -> gen_oracle_spans
npm run verify    # serves dist, drives the page with Playwright, checks the observable
npm run grade <submission.json>
```

`build.mjs` is the single source of truth: it rebuilds the bundle, regenerates the
captures, and re-derives the oracle spans so `src/` and `captures/`+`oracle.hidden.json`
never drift. The anchor is the reducer closure `r` returned by `export function u` in
`src/z0/k7/q3/t9.js` (it carries the constant `0x27d4eb2d`); in the obfuscated bundle it
is a mangled `_0x...` name, recorded as `answer_function`.
