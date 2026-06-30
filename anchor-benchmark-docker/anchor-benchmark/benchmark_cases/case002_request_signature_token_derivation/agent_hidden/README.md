# Maintainer / grader material (agent-invisible)

This directory holds everything agents **must not** see for
`case002_request_signature_token_derivation`.

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

## Frozen capture note

`../agent_visible/captures/` is a frozen DevTools dump. `oracle.hidden.json`
coordinates are bound to that exact bundle. `npm run build` rebuilds `dist/`,
re-copies it into `captures/`, then runs `gen_oracle_spans.mjs` to re-derive every
`captured_span`/`answer_function`. After any change under `src/` or to the
obfuscation config, you **must** rerun the full `npm run build` so captures and
oracle stay in sync.
