# case006_request_transformation

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

The benchmark harness distributes **only** `agent_visible/`.

Build, verify, and regenerate oracle spans from `agent_hidden/`:

```bash
cd agent_hidden
npm run build     # rollup (split app bundle + deferred ticket chunk) + obfuscate (fixed seed) -> dist, sync captures, regenerate oracle spans
npm run verify    # structural + Playwright runtime checks
npm run gen       # regenerate oracle.hidden.json captured_span coordinates only
npm run grade     # score an agent submission JSON against oracle.hidden.json
```

## Task summary

An archive upload intake page served from an obfuscated main-thread app bundle plus a
deferred, same-thread upload transform chunk (no workers, no source maps). Typing a manifest
draft, clicking `Parse draft`, selecting the expedite review lane, the `restricted` policy and
sealing the manifest, clicking `Queue manifest`, then clicking `Release queued request` emits a
`console.log` object whose `action` is `upload.request` and whose `request_payload` field is an
object with `method`, `endpoint`, `headers` and a rewritten `body`. The anchor is the first
target-specific request-payload value constructor on the dynamic chain
(source `rewriteUploadRequest`, reached through a dynamic `import()` of the transform chunk).
Token/key/badge upload helpers (20 page-load mimics including preview, retry, quota, archive,
checksum, dropzone, history, MIME and additional upload-themed decoys) are off-chain decoys.
The app bundle also embeds 69 inert distractor modules (44 noise + 25 vendor) as search
haystack. The internal upload ticket is only request header material.
