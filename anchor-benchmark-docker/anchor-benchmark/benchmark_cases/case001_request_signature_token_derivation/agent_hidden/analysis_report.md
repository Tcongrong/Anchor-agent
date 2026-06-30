# case001_request_signature_token_derivation — maintainer analysis

## Summary

After the case001 difficulty upgrade, the target observable is the `account_proof`
field (`ap_[a-z0-9]{8}`) on the `account.submit` console object. The canonical
anchor is **`encodeAccountProofEnvelope`** in `src/z0/k7/q3/t9.js`, reached
through the exported reducer factory `u(config)` after runtime slot selection,
tuple materialization and async routing across the z0 module graph.

## Architecture (post-upgrade)

| Layer | Module | Role |
|---|---|---|
| Entry | `src/z0/a0.js` | Page boot, decoy initialization |
| Ingress | `src/z0/b1.js` … `src/z0/g6.js` | Delegated click, action routing, tuple prep |
| Runtime | `src/z0/l0.js` | State-machine walk, slot materialization, reducer dispatch |
| Anchor core | `src/z0/k7/q3/t9.js` | `encodeAccountProofEnvelope` constructs the ap_ token |
| Sink | `src/z0/n0.js` | Dynamic field-name assembly, console emission |
| Decoys | `src/z0/x/x00.js` … `x43.js` (44) | Alternate-slot ap_/bp_ generators |
| Vendor noise | `src/z0/v/v00.js` … `v24.js` (25) | Bundle padding and distractor imports |

## Difficulty tier (case001 average)

- Preset: `hard_no_worker_main_thread_only`
- 44 x-file decoys, 25 vendor modules, 3072-step state machine
- ~1.69 MB / ~35k lines obfuscated bundle (seed 1001, port 4191)
- Async boundaries: microtask, Promise, setTimeout, rAF, MutationObserver, CustomEvent

## Verification

```bash
cd agent_hidden
npm run build
npm run verify
```

Expected anchor answer for agents: `encodeAccountProofEnvelope` at the span recorded
in `oracle.hidden.json:primary_anchor.captured_span`.
