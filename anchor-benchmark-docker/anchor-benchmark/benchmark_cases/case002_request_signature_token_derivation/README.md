# case002_request_signature_token_derivation

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

Build and verify from `agent_hidden/`:

```bash
cd agent_hidden
npm run build
npm run verify
```

## What the case is

A local "Byte Packet Builder" page derives a client-side request-signature proof
token. After the user stages and emits a packet, the page writes a single
`console.log` object whose `action` is `packet.emit` and whose `packet_sig` field
holds an `ss_`-prefixed token. The task is to locate the **anchor function**: the
first target-specific value-construction function on the dynamic behavior chain
that itself builds the `packet_sig` value (not the routing, input collection,
reducer factory wrapper, or the console sink).

The agent only sees `agent_visible/captures/` (a frozen DevTools source dump of the
obfuscated bundle). The gold standard, scoring oracle, and source tree live under
`agent_hidden/`.
