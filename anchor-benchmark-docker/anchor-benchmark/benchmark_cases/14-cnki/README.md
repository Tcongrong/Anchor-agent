# 14-cnki (real14_cnki_request_transformation)

Real-site DevTools capture, packaged as an anchor-localization benchmark case.

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `oracle.hidden.json`, `build_meta.hidden.json`, `roles.config.json`, `scripts/` |

This is a **static localization** task: the page is a real login/search/paging flow
that is not run locally. The observable is a real **network request** field; the
agent must locate the function that constructs it from the visible code only.

Audit summary:

- Answer match: `1.json` points at the call-site `(0,h.encrypto)(e)` used to fill
  `words`; the oracle anchor is the callee `encrypto`, minified as `s`, so the
  answer is consistent at function level.
- Question direction: the public question asks for the function whose own body
  transforms the input into the encrypted URL-safe token and excludes the
  handler, generic block cipher and inverse decoder. It correctly points to `s`.
- Scoring diversity: the role oracle now includes 0.7 target-module credit,
  0.5 CryptoJS utility credit, 0.2 path/wrapper credit, and 0 off-chain decoys.

Build / check from `agent_hidden/`:

```bash
npm run freeze    # regenerate oracle.hidden.json from roles.config.json
npm run verify    # static self-consistency checks
npm run grade -- <submission.json>
```
