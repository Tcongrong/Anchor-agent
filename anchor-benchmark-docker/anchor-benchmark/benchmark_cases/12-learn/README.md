# 12-learn (real12_learn_request_signature)

Real-site DevTools capture, packaged as an anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

This is a **static localization** task: the page is a real login/search/paging flow
that is not run locally. The observable is a real **network request** field; the
agent must locate the function that constructs it from the visible code only.

- **Anchor:** `_ajax.call` in `captures/learn.open.com.cn/Content/scripts/common.js` (score 1), matching the case 12 code in `1.json`.
- There is no 0.7 nested helper: `_ajax.call` constructs `bust` inline with `(new Date()).getTime()`.
- `jQuery.extend` is a path core utility (0.5). The login request builder,
  login forwarding wrapper, login click handler and `jQuery.ajax` sink are path
  roles (0.2). URL/date-looking helpers outside this path remain off-chain (0).

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
