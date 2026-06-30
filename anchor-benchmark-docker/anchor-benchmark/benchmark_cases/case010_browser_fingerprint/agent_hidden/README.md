# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for `case010_browser_fingerprint`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys (media-capability fingerprint probe) |
| `dist/` | Built page and bundle (served by `npm run serve`) |
| `scripts/` | `build.mjs`, `verify.mjs`, `serve.mjs`, `gen_oracle_spans.mjs`, `grade_submission.mjs` |
| `oracle.hidden.json` | Private gold standard and scoring oracle |
| `build_meta.hidden.json` | Difficulty / analysis metadata |
| `package.json` | Build and verify tooling |

## Anchor (maintainer note)

The anchor is the source function `deriveMediaFingerprint` in `src/z0/k7/q3/t9.js`
(reached through the exported factory `u(config)` → inner closure → the fingerprint
constructor). In the obfuscated bundle every identifier is mangled to a `_0x...`
name, so the agent-visible / grader answer is the **captured-bundle span plus its
mangled `answer_function`**, not the source name. See `oracle.hidden.json`.

## Captures are a frozen snapshot

`agent_visible/captures/` is a frozen capture of one build. `oracle.hidden.json`
coordinates are bound to that snapshot. If you rebuild (which re-obfuscates the
bundle), re-run `gen_oracle_spans.mjs` to recompute every `captured_span`,
`answer_function`, and hash, then re-run `verify.mjs`.

## Commands (run from this directory)

```bash
npm run build      # rebuild dist, sync captures, regenerate oracle spans
npm run verify     # structural + runtime checks
npm run serve      # serve dist for manual inspection
npm run gen        # regenerate oracle spans against current captures
npm run grade -- submission.json   # score one agent answer
```
