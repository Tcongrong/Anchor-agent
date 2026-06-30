# Agent-visible corpus

This directory is the only material distributed to benchmark agents for
`case007_request_transformation`.

## Included

- `task.json` - question, interaction steps, constraints, and required JSON answer format
- `captures/` - frozen DevTools source dump, which is the only code corpus in scope

## Not Included

`src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, and all
maintainer or grader material live under `../agent_hidden/`. Agents must reason only from
the obfuscated bundle under `captures/` and submit one JSON object matching
`task.json: answer_format.response_schema`.
