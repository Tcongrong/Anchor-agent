# case006_state_encoding

Hard benchmark case for locating the anchor function behind the `annotation_state_code`
field emitted by an annotation workspace page.

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

Or from the repository root:

```bash
npm run build:case006_state_encoding
npm run serve:case006_state_encoding
npm run verify:case006_state_encoding
```

The build emits one browser bundle at
`dist/assets/annotation.app.bundle.js`, copies it into
`agent_visible/captures/`, and regenerates the oracle spans. It does not emit
sourcemaps, workers, dynamic chunks, or obfuscated code.
