# Agent-visible corpus

Benchmark agents may read only:

- `task.json` — task statement, interaction steps, and answer submission schema
- `captures/` — DevTools source dump of the served page and bundle

Do not assume access to `agent_hidden/`, source files, or oracle metadata.
