# 17-doyo (real17_doyo_request_signature)

Real-site DevTools capture, packaged as an anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

This is a **static localization** task: the page is a real login/search/paging flow
that is not run locally. The observable is a real **network request** field; the
agent must locate the function that constructs it from the visible code only.

Audit summary:

- Answer match: `1.json` and `oracle.primary_anchor` point to the same anonymous
  `$.get("/User/Passport/token", ...)` success callback, which computes the
  final salted SHA-1 password and posts it.
- Question direction: the public question asks for the function whose own body
  combines nonce/ts with the hashed password and excludes the SHA-1 primitive and
  unrelated page helpers. It correctly points to the token callback.
- Scoring diversity: the role oracle now includes 0.7 enclosing submit-handler
  credit, 0.5 SHA-1/UTF-8 utility credit, 0.2 path/wrapper credit, and 0
  off-chain decoys.

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
