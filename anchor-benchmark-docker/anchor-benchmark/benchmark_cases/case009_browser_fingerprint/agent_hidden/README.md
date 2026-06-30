# Maintainer Notes

This is the hidden maintainer side for `case009_browser_fingerprint`.

The public task asks for the anchor function that constructs the `browser_fp` value in the `console.log` object whose action is `fingerprint.collect`. The standard interaction is:

1. Fill `#vendorHint` with `chromium`.
2. Select `active` in `#scanMode`.
3. Select `2` in `#hashRounds`.
4. Fill `#entropyDepth` with `8`.
5. Check `#extendedSignals`, `#canvasProbe` and `#strictMode`.
6. Click `#warmCacheButton`, then `#lockConfigButton`, then `#generateFingerprintButton`.

The canonical answer is maintained in `oracle.hidden.json` as `primary_anchor.answer_function` plus `primary_anchor.captured_span`, both relative to the agent-visible captures corpus. The private source mapping is `primary_anchor.source_function` in `src/z0/k7/q3/t9.js`.

Run `npm run build` after changing source, build options, or hidden metadata that affects the bundle. The build copies `dist/` output into `../agent_visible/captures/` and regenerates oracle coordinates. Run `npm run verify` to exercise the page and console observable.
