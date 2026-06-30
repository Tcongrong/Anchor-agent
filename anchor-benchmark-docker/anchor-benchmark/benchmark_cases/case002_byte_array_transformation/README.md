# case002_byte_array_transformation

This case uses the canonical benchmark layout.

- `agent_visible/` is the only directory intended for measured agents. It contains the public task file and captured DevTools source dump.
- `agent_hidden/` contains maintainer-only source, build scripts, verification scripts, oracle data, build metadata, and dist output.

Do not package `agent_hidden/` into the measured agent corpus.
