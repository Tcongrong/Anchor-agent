# case003_request_transformation

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

The benchmark harness distributes **only** `agent_visible/`.

Build, verify, and regenerate oracle spans from `agent_hidden/`:

```bash
cd agent_hidden
npm install      # rollup + javascript-obfuscator + playwright
npm run build    # rollup + obfuscate (fixed seed) -> dist, sync captures, regenerate oracle spans
npm run verify   # structural + Playwright runtime checks
npm run gen      # regenerate oracle.hidden.json captured_span coordinates only
npm run grade    # score an agent submission JSON against oracle.hidden.json
```

## Task summary

A filter query board served from a single obfuscated main-thread bundle. Selecting `tasks`
in `#queryScope`, typing `supplier deadline` in `#queryTerm`, selecting `deep` in
`#queryDepth`, and submitting `#queryForm` emits a `console.log` object whose `action` is
`filter.apply` and whose `query_pack` field is an `np_<body>.<check>` value matching
`/^np_[A-Za-z0-9_-]+\.[A-Za-z0-9]{2}$/`. The same value is written into the `X-Query-Pack`
header of a `POST /api/filter/run` fetch. The anchor is the first target-specific
request-transform value constructor on the dynamic chain (source `createReducer` in
`src/z0/k7/q3/t9.js`, the live slot-23 reducer factory). Inactive reducer slots, the
upstream router/gate/tuple/middleware/trampoline functions, the `u`/`t0` wrappers and the
`n0` sink are all near-misses, not the anchor.
