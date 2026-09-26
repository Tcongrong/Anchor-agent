# case012_flag_variant_hashing (maintainer notes)

Scenario set member F1 of the scenario-level generalization extension (case011–case013).
Scenario: feature_flag. Mapped paper category: request_signature_token_derivation.

- Observable: console.log object with action `flag.assign` and field `variant`, value pattern `^variant_[a-h]$` (8-arm experiment).
- Interaction: type `#userKey` "user_4471" → select `#flagSelect` "checkout_redesign" → check `#stickyToggle` → click `#assignVariant`.
- Secondary sink (verify-only): `localStorage.setItem('ff_assignment', ...)`, written before the console emission and carrying the same variant.
- Anchor: `computeVariantBucket(userKey, flagKey, salt)` at `src/z0/h4/r8/n2.js` — murmur-style fold of user+flag+runtime salt → avalanche → modulo-8 bucket → arm-table lookup with `variant_` prefix. Hash step (`mixStep`) and `spread` are core utilities; `armName`/`variantArms`/`avalanche` are nested helpers; `writeAssignment` is the storage wrapper.
- No network egress anywhere on the target path (no fetch/sendBeacon); only console + localStorage.
- Capture host 127.0.0.1:4234, bundle `assign.app.bundle.js`, obfuscator seed 1012.
- Difficulty: call_depth 39, semantic_decoy_count 24, submit_path_decoy_count 15, distractors 44, vendor noise very_high, main-thread only.

Pipeline: `npm run build` → `npm run verify` → `node scripts/gen_oracle_spans.mjs` (also run by build) → `node scripts/grade_submission.mjs <submission.json>`.

Bucket distribution (construction-time): the 8 fixed verify probe keys `user_probe_{7000,7037,7148,7222,7296,7407,7518,7629}` cover all 8 arms under the shipped runtime salt; target `user_4471`/`checkout_redesign`/sticky-on lands on `variant_e`.
