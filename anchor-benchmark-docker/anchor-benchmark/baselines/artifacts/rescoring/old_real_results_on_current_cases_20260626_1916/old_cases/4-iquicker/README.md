# 4-iquicker (real04_iquicker_request_signature)

Real-site DevTools capture of the iQuicker login page, packaged as an
anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

**Static localization task.** The page is a real AngularJS login flow; it is not
run locally. The observable is the POST `password` field, which is the base64 of
the raw password. The agent must locate the encoder function from the visible
code only.

- **Anchor:** `base64Encode` in `captures/js/app.min.js` (score 1).
- Call-site wrapper `doLogin` in `captures/login/js/controllers.js` scores 0.2;
  the inverse `base64Decode` scores 0.
- Offline cross-check: `base64Encode('13819912565') === 'MTM4MTk5MTI1NjU='`.

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
