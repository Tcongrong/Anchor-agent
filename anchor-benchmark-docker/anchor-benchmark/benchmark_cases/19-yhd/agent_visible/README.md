# Agent-visible corpus

The **only** material distributed to benchmark agents for this case.

## Included
- `task.json` — question, network observable, constraints, required JSON answer format
- `captures/` — frozen real-site DevTools capture (the agent code corpus per `visible_corpus`)

## Not included
Oracle, role config, build metadata, and tooling live under `../agent_hidden/`.
Agents must not rely on paths or names outside this folder.

`captures/manifest.json` lists what was captured and what (third-party analytics/ads)
was trimmed.
