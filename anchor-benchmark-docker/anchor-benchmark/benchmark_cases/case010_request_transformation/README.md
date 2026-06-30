# case010_request_transformation

A local Web benchmark case for a media play request-transformation probe. The page
rewrites the media play form fields (filter, playlist, quality) plus a derived
signature into a canonical request body that is logged under `media.play` and sent as
the POST body of a `fetch` to `/api/media/play`. Files are partitioned by agent
visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

Build and verify from `agent_hidden/`:

```bash
cd agent_hidden
npm install
npm run build
npm run verify
```

`npm run build` rebuilds the obfuscated bundle (fixed obfuscator seed `1010`), mirrors
`dist/` into `agent_visible/captures/`, then runs `gen_oracle_spans.mjs` to re-derive
every `captured_span` + `answer_function` in `oracle.hidden.json` against the freshly
captured bundle. `npm run grade <submission.json>` scores an agent answer against the
oracle.

The shipped JavaScript is a single obfuscated bundle under `dist/assets`, mirrored
under `agent_visible/captures/` as the agent-visible corpus. All business logic runs on
the browser main thread; the page uses `fetch` for request dispatch but no Worker,
ServiceWorker, SharedWorker, BroadcastChannel, iframe, eval, `new Function`,
WebAssembly, source maps, random numbers, or remote code loading.
