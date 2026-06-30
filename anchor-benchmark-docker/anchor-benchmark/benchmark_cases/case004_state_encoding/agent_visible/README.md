# Agent-visible corpus

Benchmark agents may read only:

- `task.json` — interaction steps, observable, answer format
- `captures/` — frozen DevTools source dump for this case

Do not assume access to `../agent_hidden/` (source, oracle, build scripts).
