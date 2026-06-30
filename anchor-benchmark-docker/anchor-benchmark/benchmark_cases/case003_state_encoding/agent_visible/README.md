# Agent-visible corpus

Benchmark agents may read only:

- `task.json` — task prompt, interaction steps, and answer submission schema
- `captures/` — DevTools source dump of the served page bundle

Do not assume access to `src/`, oracle files, build scripts, or other hidden maintainer material.
