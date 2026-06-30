# case006_request_signature_token_derivation — agent-hidden (maintainer/grader)

Private material. **Never** ship any of this to the agent; the harness packages
only `../agent_visible/`.

## Contents
- `oracle.hidden.json` — grading key. `primary_anchor` + `role_oracle[]` each
  carry `answer_function` (the bundle slice's leading function name = what the
  agent submits as `function_name`), `source_function` (private src/ name), and a
  `captured_span` (byte offsets + sha256 over the captures bundle). The anchor is
  module-level `requestSignatureTokenDerivation`.
- `build_meta.hidden.json` — difficulty/analysis metadata; `primary_anchor` and
  bundle size are mirrored from the oracle by `gen_oracle_spans.mjs`.
- `src/` — authored source. Entry `src/z0/a0.js`; the request_sig constructor and
  its helpers/decoys live in `src/z0/k7/q3/t9.js`; the console sink is
  `src/z0/n0.js` (reconstructs the field name `request_sig` from char codes).
- `scripts/`
  - `build.mjs` — rollup (es) + javascript-obfuscator (mangled, **fixed seed
    6006**, `renameGlobals:false` so module-level names survive) -> `dist/` ->
    sync into `../agent_visible/captures/` -> run `gen_oracle_spans.mjs`.
  - `gen_oracle_spans.mjs` — re-derives every `captured_span` from the frozen
    captures bundle by resolving each `answer_function` by name (string/brace
    aware parser), with an anchor semantic guard (must wire requestFrame /
    foldRequestFrame / encodeSignatureDigest / hasRequestSignatureEvidence) plus
    duplicate-span and single-Anchor self-checks.
  - `verify.mjs` — structural + Playwright runtime checks (drives validate/lock/
    commit, asserts the `{action:"vault.req.commit", request_sig}` log). Does not
    grade agent answers.
  - `grade_submission.mjs` — reference grader: maps a submission's slice to a
    `role_oracle` row by byte offsets / sha256 (primary) and `function_name` ==
    `answer_function` (secondary), returns its score/role.
  - `serve.mjs` — static server for `dist/` (manual smoke testing).
- `dist/` — build output (regenerated; mirrored into the captures snapshot).

## Reproduce
```bash
npm ci
npm run build && npm run verify
```
Two clean builds are byte-identical. After any change to `src/`, `build.mjs`, the
obfuscator config or dependency versions, you MUST rebuild so captures and the
oracle spans are regenerated together (审查.md §0.1 / M-plan §0.1).
