# case012_flag_persistence_encoding

Scenario-generalization set (feature flag / A-B testing), mapped to the original
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
npm run verify    # structural + Playwright runtime checks (console + localStorage sink)
npm run gen       # regenerate oracle.hidden.json captured_span coordinates only
npm run grade     # score an agent submission JSON against oracle.hidden.json
```

## Scenario summary

- Observable: `console.log({ action: "flag.persist", assignment_code })` on the
  Assignment Store page after the prescribed type/select/check/click interaction.
- Secondary sink: `localStorage.setItem('ff_state', ...)` carries the same
  `assignment_code` in the persisted record (verify-only, never a second
  construction site).
- Value pattern: `^[a-z0-9]{12}$`.
- Behavior chain: delegated click routing -> action routing -> persist gate ->
  assignment material collection (session key, rollout scope, persist flag) ->
  tuple packing -> Promise/microtask scheduling (mutation -> frame -> then ->
  micro -> timer) -> local CustomEvent plane -> 6 router layers -> 3072-step
  state machine -> runtime config selection -> **anchor** -> storage write +
  console sink.
- Difficulty contract: `hard_no_worker_main_thread_only`, call depth 38, router
  layers 6, middleware layers 8, async level 6, 44 x-distractors + 25 v-vendor
  modules + 20 w-vendor mounts, main-thread-only runtime boundary.
