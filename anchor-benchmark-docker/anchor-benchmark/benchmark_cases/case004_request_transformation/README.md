# case004_request_transformation

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

Dependencies are installed once at the repository root (`benchmark-case-builder`), which carries the
committed `package-lock.json`; `agent_hidden/package.json` pins the exact versions used for a
reproducible bundle.

## Task summary

An operations report-export console served from a single obfuscated main-thread bundle. Typing
`#reportScope`, selecting `#outputFormat`, typing `#targetEnv`, and clicking `#exportButton`
(`data-action="report.export"`) emits a `console.log` object whose `action` is `report.export` and
whose `query_payload` field is a 16-character `/^[a-z0-9]{16}$/` value. The same value is written into
the `X-Query-Payload` header of a `POST /api/report/export` fetch. The submit interaction also emits
non-target `report.shadow` / `report.preview` decoys (`shadow_key`, `preview_key`) that must not be
treated as the answer. The anchor is the first target-specific request-transform value constructor on
the dynamic chain (source `buildExportQueryPayload`); a 32-slot reducer factory builds slot-compatible
sibling reducers that resemble the anchor but never run on the live export path.
