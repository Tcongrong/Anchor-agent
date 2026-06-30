# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for `case006_state_encoding`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys |
| `dist/` | Built page and bundle (served by `npm run serve`) |
| `scripts/` | `build.mjs`, `verify.mjs`, `serve.mjs`, `gen_oracle_spans.mjs`, `grade_submission.mjs` |
| `oracle.hidden.json` | Private gold standard and scoring oracle |
| `build_meta.hidden.json` | Difficulty / analysis metadata |
| `package.json` | Build and verify tooling |

## Agent-visible partition

Public task material is in `../agent_visible/` (`task.json` + `captures/` only).

## Commands (run from this directory)

```bash
npm run build    # rollup -> dist, copy to ../agent_visible/captures, regenerate oracle spans
npm run verify   # static + Playwright runtime checks
npm run serve    # serve dist/ for manual inspection
npm run gen      # regenerate oracle.hidden.json spans from captures
npm run grade    # score an agent submission (stdin or file) against the oracle
```

## Answer (private)

The anchor is `noteStateReducer` — the named function expression returned by
`mkNoteReducer` for the active slot 6 (`_k = 3 + 3`), captured in the bundle and
invoked via `_noteEnc` inside `encodeAnnotationState`. It builds the note state
text and runs the `p`/`h` mixing loop to produce the 12-char base36
`annotation_state_code`. See `oracle.hidden.json: primary_anchor`.
