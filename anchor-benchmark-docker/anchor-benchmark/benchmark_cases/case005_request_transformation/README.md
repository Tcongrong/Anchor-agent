# case005_request_transformation

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

The benchmark harness distributes **only** `agent_visible/`.

Build, verify, and regenerate oracle spans from `agent_hidden/`:

```bash
cd agent_hidden
npm run build     # rollup + obfuscate (fixed seed) -> dist, sync captures, regenerate oracle spans
npm run verify    # structural + Playwright runtime checks
npm run gen       # regenerate oracle.hidden.json captured_span coordinates only
npm run grade     # score an agent submission JSON against oracle.hidden.json
```

## Task summary

A query transform builder served from a single obfuscated main-thread bundle. Typing
`logs-ops` into `#searchScope`, selecting `strict` in `#filterMode`, checking `#filterEnabled`,
and submitting `#queryForm` emits a `console.log` object whose `action` is `request.transform`
and whose `query_payload` field is a `/^qp_[a-z0-9_-]{10,18}$/` value. The submit envelope
crosses delegated submit gating, action routing, a DOM `CustomEvent` bridge, asynchronous
scheduling (Promise / microtask / timer / animation-frame / MutationObserver), form-input
collection, tuple normalization, runtime slot materialization and projection before the value
is built and logged. Decoy modules reachable through the alternate reducer selector emit
`qp_`-like shadow values that are not the requested observable. The anchor is the first
target-specific request-transform value constructor on the dynamic chain (source
`buildQueryPayload`, `src/z0/k7/q3/t9.js`). It runs entirely on the browser main thread with no
worker, no `postMessage`, and no network request.
