# case007_byte_array_transformation

This benchmark case uses the canonical two-part layout:

- `agent_visible/` contains only the public task file and the captured DevTools
  source dump that a solving agent may inspect (`task.json` + `captures/`).
- `agent_hidden/` contains maintainer-only material: source, build/verify/serve
  scripts, dist output, build metadata, the oracle, and the grader.

Build and verification are run from `agent_hidden/`:

```bash
cd agent_hidden
npm ci
npm run build
npm run verify
```

The build script rebuilds `agent_hidden/dist/` (an obfuscated app bundle plus a
deferred typed-array chunk), synchronizes the public capture under
`agent_visible/captures/`, and refreshes `agent_hidden/oracle.hidden.json` spans
with `scripts/gen_oracle_spans.mjs`. The grader (`scripts/grade_submission.mjs`)
scores an agent submission against the oracle.

Only `agent_visible/` should ever be packaged for a solving agent.
