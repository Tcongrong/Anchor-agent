# case004_request_signature_token_derivation

A client-side vault request signing console with a deterministic, browser-main-thread
execution path. After the user configures a protected resource, selects the production
environment and an approve grant, enables replay guard, and drags the challenge slider
past the committed authorization threshold, the page emits a `console.log` object whose
`action` is `vault.sign` and whose `request_sig` field carries an `rs_`-prefixed vault
proof token. The task is to locate the anchor function that constructs that token.

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

- The observable is the `console.log` object with `action: vault.sign` and field
  `request_sig` matching `^rs_[a-z0-9]{12}$`. A partial slider sweep below the
  authorization threshold does not emit it; only the committed challenge-slider path does.
- The same authorized sweep also emits non-target `vault.preview` / `vault.audit`
  objects and an `ap_`-prefixed proof-like decoy. Those are not the answer.
- The bundle is intentionally obfuscated (fixed seed 3003) and multiline; there is no
  remote code loading, no worker/wasm boundary, and no anti-debugging behavior.
- Dependencies are pinned in `agent_hidden/package.json`; resolve them with `npm ci`
  (a lockfile must be generated in a network-connected environment before first build).
