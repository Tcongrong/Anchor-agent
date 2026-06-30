# case003_browser_fingerprint

This case uses the canonical benchmark partitioning layout.

- `agent_visible/` is the only directory intended for benchmark agents. It contains the public task file and captured DevTools corpus.
- `agent_hidden/` is maintainer-only material. It contains source, build output, scripts, oracle metadata and build metadata.

Maintainer workflow:

1. `cd agent_hidden`
2. `npm install`
3. `npm run build`
4. `npm run verify`

The build script writes `agent_hidden/dist/`, synchronizes `agent_visible/captures/`, and regenerates `agent_hidden/oracle.hidden.json` spans.
