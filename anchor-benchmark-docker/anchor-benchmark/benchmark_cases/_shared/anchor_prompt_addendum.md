# Shared anchor prompt addendum (all cases)

## General anchor disambiguation rule

A function is **target-specific** with respect to the observable described in the task if at least one statement in its body either constructs or binds the target value, writes the target field, or dispatches the target action — and removing that statement would break the observed target output under the prescribed interaction. A function is **generic** if it is a reusable utility (hash/encode/serialize/normalize/collect-features), a control-flow dispatcher (router/interceptor-pipeline/event-bus/scheduler), or a preparation routine (validate input/collect UI state/lifecycle hook) whose body would look the same regardless of which behavior it currently serves.

The **anchor** is the unique target-specific function on the chain whose immediate caller is generic — equivalently, the shallowest target-specific function on the path from the trigger to the sink. Three situations commonly cause confusion:

- If a target-specific function `C` is called by a generic dispatcher `B` and itself calls a generic utility `D` (for example a hash routine), the anchor is `C`, not `B` (too generic/upstream) and not `D` (too generic/reusable).
- If a generic function `A` merely writes whatever its callee `B` returns into the target field, and `B` is the function dedicated to computing that value, the anchor is `B`, even though the literal field assignment is syntactically inside `A`.
- If the target-specific statement is just one branch or line inside a larger function `F` that also handles unrelated cases, `F` is still target-specific and remains a valid anchor candidate — do not discard it for a "purer" sub-function.

## Worked example (different scenario, for illustration only)

A checkout page emits `body.order_sig_v2` after the user clicks "Submit Order". The runtime chain:

```
click Submit Order
  -> construct order draft                 (generic: prep/state collection)
  -> encode checkout state                  (generic: prep/state collection)
  -> collect async profile receipt          (generic: prep/state collection)
  -> compose request envelope               (generic: prep/state collection)
  -> run interceptor pipeline               (generic: dispatcher)
  -> select sealing interceptor             <-- ANCHOR
  -> canonicalize payload fields            (nested helper, target-specific)
  -> fold payload with receipt + pepper     (nested helper, target-specific)
  -> compute digest                         (core utility: generic SHA-256)
  -> write body.order_sig_v2
  -> send request                           (wrapper/sink: generic)
```

The **sealing interceptor** is the anchor: its immediate caller is the generic interceptor-pipeline dispatcher; its own body is the highest point on the chain whose code, read alone, explains why `order_sig_v2` specifically is produced (it assigns the final signature into the request envelope). Functions below it (canonicalize, fold) are nested helpers (0.7); the digest routine is a core utility (0.5); dispatcher and request sender are path/wrapper (0.2 each). Other same-click values such as `analytics_sig`, `coupon_digest`, `view_cache_key`, `retry_fingerprint` are off-chain decoys (0). Apply the same reasoning to the actual page and bundle below.
