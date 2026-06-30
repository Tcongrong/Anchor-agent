# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for
`case004_request_signature_token_derivation`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys |
| `dist/` | Built page and bundle (served by `npm run serve`) |
| `scripts/` | `build.mjs`, `verify.mjs`, `serve.mjs`, `gen_oracle_spans.mjs`, `grade_submission.mjs` |
| `oracle.hidden.json` | Private gold standard and scoring oracle (byte-offset spans + `answer_function`/`source_function`) |
| `build_meta.hidden.json` | Difficulty / analysis metadata + private `primary_anchor` mirror |
| `package.json` | Build and verify tooling (pinned devDependencies) |

## Agent-visible partition

Public task material is in `../agent_visible/` (`task.json` + `captures/` only).

## Commands (run from this directory)

```bash
npm run build     # build dist, sync captures, regenerate oracle.hidden.json
npm run verify    # structural + Playwright runtime checks
npm run serve     # serve dist locally for manual inspection
npm run gen       # regenerate oracle captured_span coordinates from captures
npm run grade -- <submission.json>   # score one agent submission
```

## Oracle conventions

- `captured_span.start_offset` / `end_offset` are **0-based byte offsets** into the
  captures bundle (the bundle contains non-ASCII bytes, so byte offsets are the
  contract; char offsets would diverge).
- `answer_function` is the bundle slice's leading `function` name (what the agent
  submits as `function_name`). `source_function` is the private `src/` name and is
  never used to grade.
- `npm run gen` locates each function by its unique bundle `answer_function` name
  with a string/brace-aware matcher (no default-parameter truncation), emits byte
  offsets + sha256, and self-checks for duplicate spans and a single Anchor row.
- Two `src/` functions named `keyRing` (in `l0.js` and `n0.js`) deduplicate to
  bundle names `keyRing` and `keyRing$1`; likewise `z` (`a0.js`/`e4.js`) -> `z`/`z$1`
  and `b` (`t9.js`/`m0.js`) -> `b`/`b$1`. The oracle pins the correct variant via
  `answer_function`, so the sink-side and signature-path copies never collapse.
