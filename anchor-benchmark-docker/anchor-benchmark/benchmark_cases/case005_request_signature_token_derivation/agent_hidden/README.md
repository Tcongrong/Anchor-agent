# agent_hidden

Maintainer / grader / CI material. **Never shipped to the agent.**

- `oracle.hidden.json` — private gold standard. Each row carries `answer_function`
  (the bundle slice's leading name, the grader's secondary alignment) and
  `source_function` (private `src/` mapping, never graded). `primary_anchor` and
  the single `role:"Anchor"` row are the score-1 target.
- `build_meta.hidden.json` — task contract, difficulty/obfuscation analysis, and a
  mirror of the anchor span. Not answer-bearing.
- `src/` — authored sources bundled by rollup and obfuscated into the captured
  bundle. The anchor `requestSignatureTokenDerivation` is the closure returned by
  `createSignatureReducer` in `src/z0/k7/q3/t9.js`, selected through exported `u`.
- `scripts/`
  - `build.mjs` — rollup (es) + obfuscate (fixed seed 5005) -> `dist/` -> sync
    `../agent_visible/captures/` -> run `gen_oracle_spans.mjs`.
  - `gen_oracle_spans.mjs` — recompute every `captured_span` (0-based byte offsets
    + sha256 + normalized sha) from the captures bundle. 12 module-level rows are
    pinned by `answer_function` (source name survives, renameGlobals:false); the
    anchor closure is pinned by fingerprint (unique fn referencing makeBody +
    makeTape + hasRequestSignatureEvidence + 0x27d4eb2d) and its mangled name is
    written back as `answer_function`.
  - `verify.mjs` — structural + runtime (Playwright) checks; confirms the two-click
    flow logs `{ action:"vault.sign", request_sig }` matching the format. Does not
    grade agent answers.
  - `grade_submission.mjs` — reference grader: maps a submission's `slice` to a
    `role_oracle` row by byte offsets / sha256 (primary) and reports the score.
  - `serve.mjs` — host `dist/` at http://127.0.0.1:4173/ for manual inspection.
- `dist/` — build output (synced into the agent-visible captures snapshot).

Dependencies are pinned to exact versions; the effective lockfile is the
repository-root `package-lock.json` (deps resolve from the repo root).
