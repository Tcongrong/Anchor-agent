# Agent-visible corpus

This directory is the **only** material distributed to benchmark agents for
`case002_request_transformation`.

## Included

- `task.json` — question, interaction steps, constraints, and required JSON answer format
- `captures/` — frozen DevTools source dump (agent code corpus per `visible_corpus`)

## Not included (see `../agent_hidden/`)

`src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, and any other
maintainer/grader material. Agents must reason only from the obfuscated bundle under
`captures/` and submit a single JSON object matching `task.json: answer_format.response_schema`.
