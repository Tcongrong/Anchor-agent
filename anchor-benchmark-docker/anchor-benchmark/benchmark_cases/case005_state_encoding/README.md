# case005_state_encoding

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

Build and verify from `agent_hidden/`:

```bash
cd agent_hidden
npm install
npm run build
npm run verify
```

## Interaction

```text
#notifyFrequency = daily
#notifyFormat = digest
check #enableDigest
click #saveSettingsBtn
```

The observable is a `console.log` object with `action: notify.save` and a 12-character
alphanumeric `state_code` field. Agents locate the anchor function that constructs that
value in the captured bundle.

## Constraints

Main thread only: no Web Worker, Service Worker, Shared Worker, postMessage, remote code,
dynamic import, sourcemap, or obfuscation. The captured bundle is
`captures/devtools-source-dump/127.0.0.1_4195/assets/notify.state.bundle.js`.

Difficulty is aligned with `case007_request_signature_token_derivation`: a large captured
bundle with slot-reducer semantic decoys, shadow reducers, vendor noise, async boundaries,
and a single inner reducer at slot 23 as the canonical anchor answer.
