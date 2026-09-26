# case013_route_state_rewrite (maintainer notes)

Scenario set member C3 of the scenario-level generalization extension (case011–case013).
Scenario: cache_query_serialization. Mapped paper category: request_transformation (direct structural twin of case001_request_transformation per one-pager: console + fetch header double exit, same 16-char pattern length — pooled same-primitive old/new pairing).

- Observable: console.log object with action `route.rewrite` and field `rewrite_token`, value pattern `^rw_[a-z0-9]{16}$`.
- Interaction: type `#routePath` "/team/inbox" → select `#viewPolicy` "compact" → check `#preserveScroll` → click `#commitRoute` (data-k 7:64:6).
- Secondary sinks (verify-only): `fetch('/api/view/prefetch', { headers: { 'X-Route-Key': <token> } })` and `history.pushState(null, '', '?...&rt=<token>&...')`, both carrying the SAME value downstream of the anchor.
- Anchor: `buildRouteRewriteValue(path, policy, scroll, runtime, config)` at `src/z0/p7/g2/c6.js` — builds the route material cells (path, policy, scroll bit, envelope version, plane, band), selects the reducer variant from path score / tuple score / runtime ticket, folds the material through the reducer, combines with the route state frame and renders the rw_-prefixed 16-char base36 token. Nested helpers: `encodeRouteToken`, `routeStateFrame`, `runFold`, `buildRouteCells`; core utilities: `foldBase36`, `cellShape`, `joinCells`, `fillCells`, `seedBasis`, `foldStep`, `finalMix`, `rotl32`, `encodeContextFrame`, `joinPath`; wrapper/sink: `composeRouteEnvelope`, `stage`, `sendPrefetchFetch`, `pushRouteState`, `composeRouteUrl`, sink `r`.
- Scenario decoys per one-pager: generic URL join utility `joinPath` reused by the breadcrumb builder (Core utility); `route.preview` emitter `shadowRouteEmitter` outputting an `rw_`-styled 12-char shadow value (Off-chain, wrong length → never matches pattern); fetch wrapper `sendPrefetchFetch` (Wrapper); scroll restorer `scrollRestorer` (Path-generic-helper). Non-target route.preview/route.audit side objects carry preview_ref/audit_ref fields plus rw_ fallbacks.
- Capture host 127.0.0.1:4239, bundle `route.app.bundle.js`, obfuscator seed 1013.
- Difficulty: call_depth 39, semantic_decoy_count 24, submit_path_decoy_count 15, distractors 44, vendor noise very_high, main-thread only.
- Behavior chain order: delegated click → action table → commit gate (kind===6) → route material collection + path normalization (generic) → tuple → MutationObserver/Promise/microtask/rAF/timer scheduling → CustomEvent plane (z0:route-plane) → 6 router layers (h7..k2) → machine walk + config materialization → ANCHOR → URL composition (generic) → pushState + fetch X-Route-Key + console.
- prompt.md example value `rw_0000swtg0ppbhc35` from a real run of the prescribed interaction.
- keyRing GOTCHA (inherited): l0.js producer-side and n0.js sink-side keyRing formulas are identical (kind*31 + lane*19 + weight, base [0x68,0x6e,0x74], index*2 % 5, xor 0x53/0xa9).
- headless Playwright on this machine: bundled chromium headless shell is missing; verify.mjs fallback resolves Edge at `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe` (note: the non-x86 Edge path does NOT exist here — x86 must be tried before Program Files list used by older cases).

Pipeline: `npm run build` → `npm run verify` → `node scripts/gen_oracle_spans.mjs` (also run by build) → `node scripts/grade_submission.mjs <submission.json>`.

Oracle self-test (grade_submission import): perfect=1.0; all 61 role_oracle entries score exactly their assigned role values; random off-chain span scores 0.
