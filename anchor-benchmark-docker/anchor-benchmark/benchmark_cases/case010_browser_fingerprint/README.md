# case010_browser_fingerprint

A local Web benchmark case for a media-capability fingerprint probe. Files are
partitioned by agent visibility:

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

The shipped JavaScript is a single obfuscated bundle under `dist/assets`, mirrored
under `agent_visible/captures/` as the agent-visible corpus. All business logic runs
on the browser main thread; the page uses no Worker, ServiceWorker, SharedWorker,
BroadcastChannel, iframe, eval, `new Function`, WebAssembly, source maps, random
numbers, or network APIs.
