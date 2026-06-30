# case009_browser_fingerprint

This benchmark case uses the canonical split layout.

- `agent_visible/` is the only directory intended for measured agents. It contains the public task and captured browser sources.
- `agent_hidden/` contains maintainer-only source, build scripts, verification, grading, oracle data and build metadata.

Build and verify from the hidden directory:

```sh
cd agent_hidden
npm run build
npm run verify
```
