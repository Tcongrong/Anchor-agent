# case010_byte_array_transformation

This benchmark case uses the canonical two-part layout:

- `agent_visible/` contains only the public task file and the captured DevTools source dump that a solving agent may inspect.
- `agent_hidden/` contains maintainer-only source, build scripts, verification scripts, dist output, build metadata and oracle data.

Build and verification are run from `agent_hidden/`:

```bash
npm ci
npm run build
npm run verify
```

The build script regenerates `agent_hidden/dist/`, synchronizes the public capture under `agent_visible/captures/`, and refreshes `agent_hidden/oracle.hidden.json` spans with `scripts/gen_oracle_spans.mjs`.

`agent_visible/captures/` is a frozen snapshot of the obfuscated bundle; the oracle spans are bound to it. Any change under `src/`, the obfuscation config, or dependency versions requires a rebuild so the capture and oracle stay in sync.
