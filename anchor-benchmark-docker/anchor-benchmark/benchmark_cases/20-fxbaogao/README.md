# 20-fxbaogao (real20_fxbaogao_request_signature)

Real-site DevTools capture, packaged as an anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

This is a **static localization** task: the page is a real login/search/paging flow
that is not run locally. The observable is a real **network request** field; the
agent must locate the function that constructs it from the visible code only.

Audit summary:

- Answer match: `1.json` code is a contiguous snippet inside the `_` phone-login submit callback; the oracle anchor is `_`.
- Question direction: the public question asks for the function that reads password/mobile, derives a key, runs the cipher, and submits the phone-login request; it correctly points to `_` and excludes imported helpers plus sibling login components.
- Scoring diversity: role oracle now includes 0.7 credit for the target-specific enclosing phone-login component `J`, 0.5 MD5/key-derivation utilities, 0.2 path/wrapper callbacks, and 0 off-chain QR/modal decoys.

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
