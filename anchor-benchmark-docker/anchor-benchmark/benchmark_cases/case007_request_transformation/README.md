# case007_request_transformation

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | Benchmark agents | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | Maintainers and graders | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

The benchmark harness distributes only `agent_visible/`.

Build, verify, and regenerate oracle spans from `agent_hidden/`:

```bash
cd agent_hidden
npm install
npm run build
npm run verify
npm run gen
npm run grade
```

## Task Summary

A request staging page served from a single obfuscated main-thread bundle. Entering the
standard request draft, parsing it, selecting the restricted policy and expedite priority,
staging the envelope, sealing it, queueing the transform, and releasing the request emits a
`console.log` object whose `action` is `request.transform` and whose `request_payload` field
is an object with `method`, `endpoint`, `headers`, and `body`.

The anchor is the first target-specific request payload constructor on the dynamic chain
(source `u(config)` returning reducer `r(input, context = {})` in `src/z0/k7/q3/t9.js`).
Upstream readers, parsers, routers, normalizers, tuple packers, queue/stage wrappers,
ticket-only helpers, shadow emitters, and the final console sink are near-misses.
