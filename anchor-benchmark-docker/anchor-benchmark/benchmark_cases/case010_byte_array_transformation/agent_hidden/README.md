# case010_byte_array_transformation (maintainer)

Hidden maintainer materials for the type-array (byte-array) transformation case. Agents never see this directory.

The page is a staged transcode buffer lab. After priming a session, selecting the codec profile, render mode, frame budget and operator tag, packing frames, and clicking commit, the bundle logs a `console.log` object whose `action` is `transcode.buffer.commit` and whose `typed_array_payload` field carries a deterministic `ta_`-prefixed value. That value is constructed by materializing an 18-byte `Uint8Array` from the staged media tuple lanes, transit state and shadow context, then serializing it as a base64url `ta_` string.

## Layout

- `src/` — rollup entry `z0/a0.js`; the anchor lives in `src/z0/k7/q3/t9.js` (`transformMediaTypedArray`, reached through exported `u(config)`).
- `scripts/build.mjs` — rollup (IIFE) + javascript-obfuscator (`hexadecimal` identifier names, `renameGlobals:false`, fixed `seed`), writes `dist/`, syncs `agent_visible/captures/`, then runs `gen_oracle_spans.mjs` and refreshes `build_meta.hidden.json`.
- `scripts/gen_oracle_spans.mjs` — recomputes every `captured_span` (offset/line/hash) and `answer_function`. Because the obfuscator mangles every identifier to `_0x` names, each `source_function` is resolved **structurally** (call graph + parameter arity + surviving char-code arrays/numeric literals), not by source name. Fails on missing/unresolved spans, more than one Anchor row, or any duplicate span group.
- `scripts/verify.mjs` — Playwright structural + runtime checks (console observable, determinism, input sensitivity, decoys, leakage boundary).
- `scripts/grade_submission.mjs` — reference grader: maps an agent submission (`function_name` + `slice`) to a `role_oracle` row and returns its score. An exact span match wins over containment so a factory (`u`) that encloses its returned closure (`r`) scores as the factory.
- `oracle.hidden.json` — private gold standard. `answer_function` is the mangled captured-bundle name an agent submits (e.g. the anchor is `_0xeb7803`); `source_function` is the private `src/` mapping. They are not aligned here because the bundle is obfuscated.

## Commands

```bash
npm ci
npm run build      # build + sync captures + regenerate oracle spans
npm run verify     # Playwright structural + runtime verification
npm run grade <submission.json>
```

Determinism: the obfuscator config now pins a fixed `seed` (1010) and exact dependency versions (`package-lock.json`), so future clean builds are reproducible. The shipped `agent_visible/captures/` is a frozen snapshot whose oracle spans were regenerated against it; a fresh reseeded rebuild was intentionally not run here so the verified frozen bundle is preserved. Any change under `src/`, the obfuscation config, or dependency versions requires a rebuild so that `agent_visible/captures/` and `oracle.hidden.json` stay in sync.
