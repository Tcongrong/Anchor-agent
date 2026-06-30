# case008_request_transformation

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

The benchmark harness distributes **only** `agent_visible/`.

Build, verify, and regenerate oracle spans from `agent_hidden/`:

```bash
cd agent_hidden
npm run gen:distractors  # regenerate 44 noise + 25 vendor haystack modules (first time or after template edits)
npm run build     # rollup (app bundle + lazy core chunk) + obfuscate (fixed seed) -> dist, sync captures, regenerate oracle spans
npm run verify    # structural + Playwright runtime checks
npm run gen       # regenerate oracle.hidden.json captured_span coordinates only
npm run grade     # score an agent submission JSON against oracle.hidden.json
```

## Task summary

An operations receivables table console served from a large obfuscated main-thread app bundle (69-module
distractor haystack, 9000+ lines) plus a lazy, same-thread request transformation core chunk (no workers,
no source maps). The sink assembles the target field name and action from character-code arrays. Selecting
the audit request profile, open status, west region, a minimum amount, an owner and the aged
filter, clicking `Analyze Scope` to stage the request, clicking the next-page and save-columns
table actions, then clicking `Prepare Request` emits a `console.log` object whose `action` is
`table.filter.request` and whose `request_payload` field is a POST request descriptor (method,
endpoint, profile, stage and a body with filters, projection, page, sort, hydration and matched
scope). The anchor is the first target-specific request-payload value constructor on the dynamic
chain (maintainer source: lazy core chunk export table in `filterRequestPayload.js`, reached
through a resolver registry that dynamically imports the core chunk by slot index). Query-key,
export-stamp, pagination, column, badge and saved-view table
helpers are off-chain decoys or path state mutations below the anchor.
