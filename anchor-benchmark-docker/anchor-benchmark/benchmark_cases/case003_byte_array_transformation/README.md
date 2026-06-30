# case003_byte_array_transformation

This case uses the canonical benchmark partition:

- `agent_visible/` is the only directory distributed to benchmark agents. It contains the public task and the frozen DevTools source dump.
- `agent_hidden/` contains maintainer-only source code, build scripts, verification scripts, build metadata, and oracle data.

Run maintainer checks from `agent_hidden/`:

```bash
npm run build
npm run verify
```
