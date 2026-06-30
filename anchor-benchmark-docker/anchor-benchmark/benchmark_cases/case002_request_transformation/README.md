# case002_request_transformation

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

A request transform pipeline page served from a single obfuscated main-thread bundle. Selecting
`#methodSelect`, typing `#endpointPath`, selecting `#pipelineMode` and `#authScheme`, checking
`#includeAuth`, and clicking `#runPipeline` (Execute Pipeline) emits a `console.log` object whose
`action` is `request.pipeline` and whose `req_pipeline` field matches `/^rp_[A-Za-z0-9_-]{24}$/`.
The same execute interaction also emits non-target decoys: `request.pipeline` objects carrying
`request_token` / `request_trace`, and `request.inspect` / `request.audit` objects carrying
`req_pipeline`-like values — none of which are the answer. The runtime relay crosses Promise,
`setTimeout`, `MessageChannel` and `window.postMessage` boundaries on the main thread (no workers).
The anchor is the first target-specific request-pipeline value constructor on the dynamic chain
(source `encodeRequestPipelineEnvelope`).
