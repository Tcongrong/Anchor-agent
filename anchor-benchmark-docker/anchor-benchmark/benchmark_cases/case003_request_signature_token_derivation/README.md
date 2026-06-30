# case003_request_signature_token_derivation

An outbound relay signing pad with a deterministic, browser-main-thread execution
path. After the user configures a request (route, method, capability scope,
nonce) and presses-and-holds the signing pad past the authorization threshold,
the page emits a `console.log` object whose `action` is `relay.sign` and whose
`request_sig` field carries an `rs_`-prefixed relay proof token. The task is to
locate the anchor function that constructs that token.

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

Build, regenerate the oracle, and verify from `agent_hidden/`:

```bash
cd agent_hidden
npm run build     # builds dist, syncs captures, regenerates oracle.hidden.json
npm run verify    # structural + runtime (Playwright) checks
```

Notes:

- The observable is the `console.log` object with `action: relay.sign` and field
  `request_sig` matching `^rs_[a-z0-9]{12}$`. A short click or early release does
  not emit it; only the authorized long-hold path does.
- The same authorized hold also emits non-target `relay.preview` / `relay.audit`
  objects and an `ap_`-prefixed proof-like decoy. Those are not the answer.
- The bundle is intentionally obfuscated (fixed seed) and multiline; there is no
  remote code loading, no worker/wasm boundary, and no anti-debugging behavior.
- Dependencies are pinned in `agent_hidden/package.json` and resolved through the
  repository-root `package-lock.json` (run `npm ci` at the repo root).
