# Browser Fingerprint Probe Case

This hidden directory contains the maintainer-only source, scripts, oracle and build metadata for `case004_browser_fingerprint`.

The public task asks for the anchor function that constructs the `browser_fingerprint` value emitted in the `fingerprint.scan` console object and sent in the `X-Browser-Fingerprint` fetch header.

Standard interaction:

1. Select `full` in `#signalLevel`.
2. Select `hardware` in `#canvasDriver`.
3. Enter `UTC-8` in `#timezoneSeed`.
4. Check `#probeEnabled`.
5. Click `#initiateProbeBtn`.

Run `npm run build` after changing source, obfuscation settings, task paths or oracle mappings. The build script regenerates `dist/`, synchronizes `agent_visible/captures/`, and then runs `scripts/gen_oracle_spans.mjs` to refresh oracle coordinates.

Run `npm run verify` to check the runtime observable, bundle visibility, forbidden runtime features, line-count expectations and oracle hash consistency.
