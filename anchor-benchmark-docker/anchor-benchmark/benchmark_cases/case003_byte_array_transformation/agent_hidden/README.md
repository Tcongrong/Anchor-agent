# Byte Stream Composer Behavior Case

This maintainer-only directory contains the source, build pipeline, oracle, and verification tools for `case003_byte_array_transformation`.

## Behavior

The page lets a user choose a byte stream format, choose a stream mode, enter byte data, and click Transform. The target observable is a `console.log` object with `action: "stream.push"` and a `byte_payload` field. The same value is sent as the `X-Byte-Pack` header on a local fetch request to `/api/stream/push`.

The target value is deterministic for identical inputs. Changing the selected format, selected mode, or byte data changes the value.

## Maintainer Commands

Run from this directory:

```bash
npm run build
npm run verify
npm run grade -- path/to/submission.json
```

`npm run build` bundles and obfuscates the browser code, syncs `../agent_visible/captures/`, updates `build_meta.hidden.json`, and regenerates oracle spans. `npm run verify` performs the browser interaction and checks console output, fetch header behavior, capture synchronization, and oracle span hashes.

## Visibility Boundary

Only `../agent_visible/` is public. The source tree, oracle, build metadata, and scripts in this directory are private maintainer and grader material.
