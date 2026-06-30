# case008_byte_array_transformation (maintainer)

Hidden maintainer materials for the type-array transformation case. Agents never see this directory.

The page is a receivables operations table. After arming a table segment, selecting filters, previewing, and committing, the bundle logs a `console.log` object whose `action` is `table.segment.commit` and whose `typed_array_payload` field carries a deterministic `ta_`-prefixed value. That value is constructed by materializing an 18-byte `Uint8Array` from the staged tuple lanes, transit state and statistics, then serializing it.

## Layout

- `src/` — rollup entry `z8/a0.js`; the anchor lives in `src/z8/k7/q3/t9.js` (`transformTableTypedArray`, reached through exported `u(config)`).
- `scripts/build.mjs` — rollup (ES) + javascript-obfuscator (`mangled`, `renameGlobals:false`, fixed `seed`), writes `dist/`, syncs `agent_visible/captures/`, then runs `gen_oracle_spans.mjs` and refreshes `build_meta.hidden.json`.
- `scripts/gen_oracle_spans.mjs` — recomputes every `captured_span` (offset/line/hash) by resolving each `answer_function` name in the captured bundle. Fails on duplicate/missing/ambiguous spans.
- `scripts/verify.mjs` — Playwright structural + runtime checks (console observable, determinism, input sensitivity, decoys, leakage boundary).
- `scripts/grade_submission.mjs` — reference grader: maps an agent submission (`function_name` + `slice`) to a `role_oracle` row and returns its score.
- `oracle.hidden.json` — private gold standard. `answer_function` is the captured-bundle name an agent submits; `source_function` is the private `src/` mapping.

## Commands

```bash
npm ci
npm run build      # build + sync captures + regenerate oracle spans
npm run verify     # Playwright structural + runtime verification
npm run grade <submission.json>
```

Determinism: the obfuscator uses a fixed `seed`; two clean builds produce a byte-identical bundle. Any change under `src/`, the obfuscation config, or dependency versions requires a rebuild so that `agent_visible/captures/` and `oracle.hidden.json` stay in sync.
