# Agent-visible corpus

This directory is the **only** material distributed to benchmark agents for
`case005_browser_fingerprint`.

## Included

- `task.json` — question, interaction steps, constraints, and required JSON answer format
- `captures/` — frozen DevTools source dump (agent code corpus per `visible_corpus`)

## Not included here

Oracle, build metadata, source tree, scripts, and dist live under `../agent_hidden/`.
Agents must not rely on paths or names outside this folder.
