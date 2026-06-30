# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for `case006_browser_fingerprint`.

## Contents

| Path | Role |
|---|---|
| `src/` | Source implementation and decoys |
| `dist/` | Built page and bundle (served by `npm run serve`) |
| `scripts/` | `build.mjs`, `verify.mjs`, `serve.mjs`, `gen_oracle_spans.mjs` |
| `oracle.hidden.json` | Private gold standard and scoring oracle |
| `build_meta.hidden.json` | Difficulty / analysis metadata |
| `package.json` | Build and verify tooling |

## Agent-visible partition

Public task material is in `../agent_visible/` (`task.json` + `captures/` only).

## Commands (run from this directory)

```bash
npm run build
npm run verify
npm run serve
```
