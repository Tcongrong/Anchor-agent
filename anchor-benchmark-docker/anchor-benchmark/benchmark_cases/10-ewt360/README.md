# 10-ewt360 (real10_ewt360_request_signature)

Real-site DevTools capture of the ewt360 account-login page, packaged as an
anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

**Static localization task.** The observable is the login POST `password` field,
an AES-256-CBC (fixed key/iv) uppercase-hex token. The agent must locate the
encryptor on the login submit path from the visible code only.

- **Anchor:** `passwordEncrypt` in `captures/cdn.ewt360.com/.../main.ca76481795ca3e337743.js` (score 1), matching the case 10 code in `1.json`.
- The downstream AES helper `encrypt` is a close helper (0.7), the login handler
  `_callee6$` is a wrapper (0.2); a byte-identical duplicate `Encrypt`/`Decrypt`
  in `254.*.chunk.js` are cross-file decoys (0).
- Offline cross-check: AES-256-CBC(key=`20171109124536982017110912453698`,
  iv=`2017110912453698`, Pkcs7) of `13819912565` → `A987B688ACCCDB600F78FE657DF98627`.

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
