# case001_request_transformation

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

An authorization portal served from a single obfuscated main-thread bundle. Filling
`#accountId`, `#secretCode`, checking `#acceptPolicy`, and clicking `#confirmSubmit` emits a
`console.log` object whose `action` is `account.submit` and whose `transform_key` field is a
16-character `/^[a-z0-9]{16}$/` value. The same value is written into the `X-Transform-Key`
header of a `POST /api/account/submit` fetch. The submit interaction also emits non-target
`request.prepare` / `request.audit` decoys (`req_token`, `req_trace`) with transform_key-like
values that must not be treated as the answer. The anchor is the first target-specific
request-transform value constructor on the dynamic chain (source `buildRequestTransform`).
