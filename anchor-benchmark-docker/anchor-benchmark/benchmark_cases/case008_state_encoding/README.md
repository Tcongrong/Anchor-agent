# case008_state_encoding

Hard benchmark case for locating the anchor function behind the `state_code` field
emitted by a workspace preferences page under the `prefs.save` console action. The
browser bundle is lightly obfuscated (mangled locals only) with a large distractor
haystack; module-level function names are preserved so the captured corpus stays mappable.

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
npm run build:case008_state_encoding
npm run serve:case008_state_encoding
npm run verify:case008_state_encoding
```

The build emits one obfuscated browser bundle at `dist/assets/prefs.app.bundle.js`,
copies it into `agent_visible/captures/`, and regenerates the oracle spans with
`scripts/gen_oracle_spans.mjs`. It does not emit sourcemaps, workers, or dynamic chunks.
