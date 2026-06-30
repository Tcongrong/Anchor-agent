# 19-yhd (real19_yhd_request_signature)

Real-site DevTools capture, packaged as an anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

This is a **static localization** task: the page is a real login/search/paging flow
that is not run locally. The observable is a real **network request** field; the
agent must locate the function that constructs it from the visible code only.

Audit summary:

- Answer match: `1.json` code is a contiguous snippet inside `double_submit`; the oracle anchor is `double_submit`.
- Question direction: the public question asks for the function that reads `#pwd`, binds the public key, RSA-encrypts it, and assembles `credentials.password`; it correctly points to `double_submit`.
- Scoring diversity: role oracle includes 0.5 JSEncrypt/RSA utility credit, 0.2 path/wrapper credit, and 0 off-chain decoys. The 0.7 tier is recorded empty because there is no separate target-specific helper below/around `double_submit`.

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
