# case005_byte_array_transformation

This benchmark case uses the canonical split layout:

- `agent_visible/` contains the public task and captured browser resources. This is the only directory intended for the solving agent.
- `agent_hidden/` contains source code, build scripts, verification scripts, oracle data, build metadata, and generated `dist/` output for maintainers and graders.

The public task asks for the anchor function that constructs the `batch_payload` value emitted in a `console.log` object with action `batch.encode` after the prescribed batch encoder interaction.

Difficulty is aligned with other case005 benchmarks: deep call chains, 44 off-chain decoys, 25 vendor-noise modules, obfuscation level 4, and a single large captured bundle (~35000 lines).

Maintainer commands:

```bash
cd benchmark_cases/case005_byte_array_transformation/agent_hidden
npm ci
npm run build
npm run verify
```

`npm run build` rebuilds the hidden `dist/` bundle, refreshes `agent_visible/captures/`, and regenerates oracle spans from the captured bundle.
