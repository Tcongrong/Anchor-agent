# case009_byte_array_transformation (maintainer)

Hidden maintainer materials for the type-array transformation case. Agents never see this directory.

The page is a byte-lane materializer table. After booting the lane, selecting the scope band, ledger slice, floor units, custodian tag and parity lock, binding the scope, and emitting the buffer, the bundle logs a `console.log` object whose `action` is `table.segment.commit` and whose `typed_array_payload` field carries a deterministic `ta_`-prefixed value. That value is constructed by materializing an 18-byte `Uint8Array` from the staged tuple lanes, transit state and statistics, then serializing it.

## Layout

- `src/` — rollup entry `z0/a0.js`; the anchor lives in `src/z0/k7/q3/t9.js` (source `transformTableTypedArray`, reached through exported `u(config)`). In the captured bundle this name is mangled to an `_0x` identifier — the readable source name does not survive.
- `scripts/build.mjs` — rollup (IIFE) + javascript-obfuscator (`identifierNamesGenerator:"hexadecimal"`, `renameGlobals:false`, fixed `seed`), writes `dist/`, syncs `agent_visible/captures/`, then runs `gen_oracle_spans.mjs` and refreshes `build_meta.hidden.json`. The IIFE wrapper plus hexadecimal names mangle every former module-level function, so no `answer_function` carries a semantic hint and no keyword search over the observable nouns narrows the candidates.
- `scripts/gen_oracle_spans.mjs` — recomputes every `captured_span` (offset/line/hash) by resolving each `source_function` STRUCTURALLY against the mangled bundle (call graph + parameter arity + surviving numeric/hex char-code arrays + member access), then writes the resolved mangled `_0x` name back as `answer_function`. There is no name lookup. Fails on duplicate/missing/ambiguous spans.
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

Determinism: the obfuscator uses a fixed `seed` (9009); two clean builds produce a byte-identical bundle. Any change under `src/`, the obfuscation config, or dependency versions requires a rebuild so that `agent_visible/captures/` and `oracle.hidden.json` stay in sync.
