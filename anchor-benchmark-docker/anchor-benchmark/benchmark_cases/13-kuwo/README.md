# 13-kuwo (real13_kuwo_request_signature)

Real-site DevTools capture, packaged as an anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

This is a **static localization** task: the page is a real login/search/paging flow
that is not run locally. The observable is a real **network request** field; the
agent must locate the function that constructs it from the visible code only.

- **Anchor:** `x` in `captures/h5s.kuwo.cn/www/kw-www/4f4f4b5.js` (score 1), matching the case 13 code in `1.json`.
- There is no 0.7 nested helper: `x` calls the generic uuid library and binds
  the returned value to `reqId` inline.
- `uuid.v1`, its random-byte source and string formatter are core utilities
  (0.5). Search trigger/call-site functions and the response-side wrapper are
  path roles (0.2). A sibling request wrapper, Secret-header helper and result
  formatter remain off-chain decoys (0).

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
