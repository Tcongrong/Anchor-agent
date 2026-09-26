# case013_query_state_serialization (maintainer notes)

Scenario set member C1 of the scenario-level generalization extension (case011–case013).
Scenario: cache_query_serialization. Mapped paper category: state_encoding.

- Observable: console.log object with action `listing.filter` and field `query_key`, value pattern `^qs_[a-z0-9]{16}$`.
- Interaction: select `#statusFilter` "open" → select `#regionFilter` "west" → type `#minAmount` "500" → select `#sortOrder` "recent" → type `#pageInput` "2" → check `#includeArchived` → click `#applyFilters` (data-k 4:52:2).
- Secondary sink (verify-only): `history.pushState(null, '', '?q=<query_key>&...')` — same key lands in `location.search` as the `q` parameter. No network request anywhere on the target path.
- Anchor: `serializeQueryState(filters, order, page, runtime, config)` at `src/z0/m8/q2/s5.js` — folds the normalized filter cells (status, region, amount, archived bit, sort order, page, query version) through the runtime-selected reducer variant, mixes with the query state frame, and formats the qs_-prefixed 16-char base36 key. Nested helpers: `encodeQueryKey`, `queryStateFrame`, `runFold`, `buildQueryCells`; core utilities: `foldBase36`, `cellShape`, `joinCells`, `fillCells`, `seedBasis`, `mixStep`, `finalMix`, `rotl32`; wrapper/sink: `composeFilterUrl`, `pushQueryState`, `composeFilterEnvelope`, `flushQueue`.
- Scenario decoys per one-pager: generic URLSearchParams-style query serializer `composeQueryString` (reused by share-link builder, Core utility); pagination state collector `collectPageState` (Path-generic-helper); console.info shadow emitter `shadowQueryEmitter` emitting `qs_` + 12 chars (wrong length → never matches pattern); share-link builder `buildShareLink` (Off-chain, writes `__ls_share`).
- Capture host 127.0.0.1:4237, bundle `listing.app.bundle.js`, obfuscator seed 1013.
- Difficulty: call_depth 38, semantic_decoy_count 24, submit_path_decoy_count 15, distractors 44, vendor noise very_high, main-thread only.
- Behavior chain order: delegated click → action table → apply gate → filter collection + numeric normalization (generic) → tuple → MutationObserver/microtask/Promise/rAF/timer scheduling → CustomEvent plane (z0:listing-plane) → 6 router layers (h7..k2) → machine walk + config materialization → ANCHOR → URL assembly (generic) → pushState + console.
- prompt.md example value `qs_0001kbnvvyekcdt5` from a real run of the prescribed interaction.

Pipeline: `npm run build` → `npm run verify` → `node scripts/gen_oracle_spans.mjs` (also run by build) → `node scripts/grade_submission.mjs <submission.json>`.

Oracle self-test (grade_submission): perfect=1.0; all 63 role_oracle decoys score exactly their assigned role values; random off-chain span scores 0.
