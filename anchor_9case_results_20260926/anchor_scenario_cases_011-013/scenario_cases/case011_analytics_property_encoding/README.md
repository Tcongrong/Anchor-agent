# case011_analytics_property_encoding

Scenario-generalization set (analytics / telemetry), mapped to the original
`state_encoding` paper category. Built with the same construction method,
pipeline, and difficulty contract as the 50 existing cases.

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `prompt.md`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

The benchmark harness distributes **only** `agent_visible/`.

Build, verify, and regenerate oracle spans from `agent_hidden/`:

```bash
cd agent_hidden
npm run build     # rollup + obfuscate (fixed seed) -> dist, sync captures, regenerate oracle spans
npm run verify    # structural + Playwright runtime checks (console + fetch sink)
npm run gen       # regenerate oracle.hidden.json captured_span coordinates only
npm run grade     # score an agent submission JSON against oracle.hidden.json
```

## Scenario summary

- Observable: `console.log({ action: "analytics.properties", props_code })` on the
  Property Encoder page after the prescribed type/select/check/click interaction.
- Secondary sink: `fetch('/api/collect/props', { method: 'POST', body })` carries the
  same `props_code` in the outbound body (verify-only, never a second construction site).
- Value pattern: `^[a-z0-9]{12}$`.
- Behavior chain: delegated click routing → action routing → encode gate → property
  collection with PII scrubbing + key-order normalization → tuple packing →
  Promise/microtask scheduling (mutation → frame → then → micro → timer) → local
  CustomEvent plane → 6 router layers → 8-step middleware → 3072-step state machine →
  runtime config selection → **anchor** → queue push → fetch + console sink.
- Difficulty contract: `hard_no_worker_main_thread_only`, call depth 38, router layers 6,
  middleware layers 8, async level 6, 44 x-distractors + 25 v-vendor modules + 20 w-vendor
  mounts, main-thread-only runtime boundary.
- Why state_encoding (not request_transformation): the primary observable is the locally
  computed 12-char property state code; the fetch is a mirror outlet whose body reuses the
  same value, so the value semantics do not change with transport.
- Why not token_derivation: the code is a normalized encoding of property state that a
  receiver can decode and verify, not a one-way digest or seal.
