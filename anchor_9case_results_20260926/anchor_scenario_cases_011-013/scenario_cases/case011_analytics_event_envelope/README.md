# case011_analytics_event_envelope

Scenario-generalization set (analytics / telemetry), mapped to the original
`request_transformation` paper category. Built with the same construction method,
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
npm run verify    # structural + Playwright runtime checks (console + sendBeacon sink)
npm run gen       # regenerate oracle.hidden.json captured_span coordinates only
npm run grade     # score an agent submission JSON against oracle.hidden.json
```

## Scenario summary

- Observable: `console.log({ action: "analytics.track", event_token })` on the
  Metrics Console page after the prescribed type/select/check/click interaction.
- Secondary sink: `navigator.sendBeacon('/api/collect', body)` carries the same
  `event_token` in the outbound body (verify-only, never a second construction site).
- Value pattern: `^an_[a-z0-9]{16}$`.
- Behavior chain: delegated click routing → action routing → track gate → event-property
  collection with page-context snapshot → tuple packing → Promise/microtask scheduling
  (mutation → frame → then → micro → timer) → local CustomEvent plane → 6 router layers →
  runtime config selection → **anchor** → queue push → beacon + console sink.
- Difficulty contract: `hard_no_worker_main_thread_only`, call depth 39, router layers 6,
  middleware layers 8, async level 6, 44 x-distractors + 25 v-vendor modules + 20 w-vendor
  mounts, main-thread-only runtime boundary.
