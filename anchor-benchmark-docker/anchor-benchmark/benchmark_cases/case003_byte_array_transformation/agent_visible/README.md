# Agent-visible corpus

This directory is the only material distributed to benchmark agents for `case003_byte_array_transformation`.

## Included

- `task.json` - question, interaction steps, constraints, and required JSON answer format.
- `captures/` - frozen DevTools source dump used as the visible code corpus.

## Not included here

Oracle data, build metadata, source files, scripts, and dist artifacts live under `../agent_hidden/`.
Agents must not rely on paths or names outside this folder.
