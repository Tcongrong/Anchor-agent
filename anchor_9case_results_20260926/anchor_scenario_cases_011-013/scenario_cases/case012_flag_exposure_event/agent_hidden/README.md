# case012_flag_exposure_event (maintainer notes)

Scenario set member F3 of the scenario-level generalization extension (case011–case013).
Scenario: feature_flag. Mapped paper category: request_transformation.

- Observable: console.log object with action `flag.exposure` and field `exposure_digest`, value pattern `^ex_[a-z0-9]{16}$`.
- Interaction: type `#exposureUser` "user_7361" → select `#exposureFlag` "checkout_redesign" → check `#sendExposure` → click `#recordExposure`.
- Secondary sink (verify-only): `fetch('/api/exposure', { method: 'POST', body })` with the same digest inside the serialized envelope body.
- Anchor: `buildExposurePayload(user, flag, session, runtime, config)` at `src/z0/t3/c7/y4.js` — exposure-triple cells folded through the runtime-selected reducer variant, combined with the exposure state frame and formatted with the `ex_` prefix into the 16-char base36 digest. `encodeExposureDigest`/`exposureStateFrame`/`buildExposureCells`/`runFold` are nested helpers; `foldBase36`/`mixStep` etc. are core utilities; `postExposureFetch` is the transport wrapper.
- Decoys: non-target `flag.assign`/`flag.audit` console.log objects carry `ex_`-styled fallback values (never matching the 16-char target pattern since fallbacks are 17+ chars after prefix); `shadow_exposure` console.debug ctx-styled fake frame; inactive `exposureAuditCandidate` chain; 44 x-lane distractors with remixed `dx_`-prefixed values; diagnostics report reusing the generic serializer.
- Capture host 127.0.0.1:4236, bundle `exposure.app.bundle.js`, obfuscator seed 1012.
- Difficulty: call_depth 39, semantic_decoy_count 24, submit_path_decoy_count 15, distractors 44, vendor noise very_high, main-thread only.

Pipeline: `npm run build` → `npm run verify` → `node scripts/gen_oracle_spans.mjs` (also run by build) → `node scripts/grade_submission.mjs <submission.json>`.

Sensitivity design: user key, flag selection and send-exposure bit each flip the digest; same inputs reproduce it byte-for-byte. The async chain (mutation → frame → then → micro → timer → CustomEvent plane) sits entirely between the click and the anchor.
