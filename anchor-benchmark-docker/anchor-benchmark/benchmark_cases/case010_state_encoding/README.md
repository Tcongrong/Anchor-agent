# case010_state_encoding

Hard benchmark case for locating the anchor function behind the `state_code`
field emitted by a media preview encode-studio page.

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

Build and verify from `agent_hidden/`:

```bash
cd agent_hidden
npm run build
npm run verify
```

The build bundles `src/z0/a0.js` with rollup, applies identifier-mangling
obfuscation (fixed seed, no control-flow flattening / string-array / dead-code
injection), emits one browser bundle at
`dist/assets/media.app.bundle.js`, copies it into
`agent_visible/captures/`, and regenerates the oracle spans
(`scripts/gen_oracle_spans.mjs`). It does not emit sourcemaps, workers, or
dynamic chunks. The build is byte-deterministic across runs.
