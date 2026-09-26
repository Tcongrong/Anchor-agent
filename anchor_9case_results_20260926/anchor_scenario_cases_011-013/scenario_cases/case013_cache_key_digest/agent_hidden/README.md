# case013_cache_key_digest (maintainer notes)

Scenario set member C2 of the scenario-level generalization extension (case011–case013).
Scenario: cache_query_serialization. Mapped paper category: request_signature_token_derivation.

- Observable: console.log object with action `cache.materialize` and field `cache_key`, value pattern `^ck_[a-f0-9]{16}$`.
- Interaction: type `#viewOwner` "owner_3912" → select `#viewMode` "board" → select `#density` "balanced" → check `#memoize` → click `#materializeView` (data-k 3:67:5).
- Secondary sink (verify-only): the in-memory LRU view cache (`window.__vc_lru` Map, LRU_LIMIT 7) receives the view snapshot keyed by the same `cache_key`. No network request, URL write or persistent storage anywhere on the target path.
- Anchor: `digestViewState(view, mode, density, runtime, config)` at `src/z0/y6/g4/z1.js` — builds the normalized view cells (owner, memoize bit, mode, density, schema version), selects the reducer variant from the materialized runtime config, folds the view material through murmur-style hex steps, avalanches the accumulator, and renders the ck_-prefixed 16-hex digest. Nested helpers: `encodeCacheKey`, `viewFrame`, `runFold`, `buildViewCells`, `avalanche`; core utilities: `hexStep`, `hexWord`, `rotl32`, `seedBasis`, `cellShape`, `joinCells`, `fillCells`, `finalMix`, `encodeContextFrame`; wrapper/sink: `lruPut`, `composeSnapshot`, `composeCacheEnvelope`, `flushQueue`.
- Scenario decoys per one-pager: static-asset cache-key generator `assetCacheKey` (Off-chain, as_-prefixed, never matches pattern); generic hex digest step `hexStep` (Core utility); LRU eviction scheduler `scheduleEviction` (Path-generic-helper); console.debug shadow emitter `shadowCacheEmitter` emitting `ck_` + 14 non-hex glyph chars (wrong charset+length → never matches pattern); non-target cache.evict/cache.audit side objects with evict_ref/asset_ref fields.
- Capture host 127.0.0.1:4238, bundle `viewcache.app.bundle.js`, obfuscator seed 1013.
- Difficulty: call_depth 38, semantic_decoy_count 24, submit_path_decoy_count 15, distractors 44, vendor noise very_high, main-thread only.
- Behavior chain order: delegated click → action table → materialize gate → view collection + normalization (generic) → tuple → rAF/microtask/MutationObserver/Promise/timer scheduling → CustomEvent plane (z0:viewcache-plane) → 6 router layers (h7..k2) → machine walk + config materialization → ANCHOR → LRU put (generic wrapper) → console.
- prompt.md example value `ck_d6ac3d0ea8b057d7` from a real run of the prescribed interaction.
- keyRing GOTCHA (inherited from F1): l0.js producer-side and n0.js sink-side keyRing formulas must stay identical (kind*23 + lane*17 + weight, base [0x63,0x76,0x64], index*2 % 7, xor 0x4d/0xb2) or the recovered transport cell is undefined.

Pipeline: `npm run build` → `npm run verify` → `node scripts/gen_oracle_spans.mjs` (also run by build) → `node scripts/grade_submission.mjs <submission.json>`.

Oracle self-test (grade_submission): perfect=1.0; all 68 role_oracle decoys score exactly their assigned role values; random off-chain span scores 0.
