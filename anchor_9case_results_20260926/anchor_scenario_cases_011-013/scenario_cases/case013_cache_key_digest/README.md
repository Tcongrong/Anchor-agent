# case013_cache_key_digest

Scenario-generalization set (client-side cache / query-state serialization), mapped to the original
`request_signature_token_derivation` paper category. Built with the same construction method,
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
npm run verify    # structural + Playwright runtime checks (console + LRU map sink)
npm run gen       # regenerate oracle.hidden.json captured_span coordinates only
npm run grade     # score an agent submission JSON against oracle.hidden.json
```

## Scenario summary

- Observable: `console.log({ action: "cache.materialize", cache_key })` on the
  View Composer page after the prescribed type/select/check/click interaction.
- Secondary sink: the in-memory LRU view cache (`window.__vc_lru` Map) receives
  the view snapshot keyed by the same `cache_key` (verify-only, never a second
  construction site).
- Value pattern: `^ck_[a-f0-9]{16}$`.
- Behavior chain: delegated click routing -> action routing -> materialize
  gate -> view material collection (owner, mode, density, memoize) with
  normalization -> tuple packing -> rAF/microtask/MutationObserver/Promise/timer
  scheduling -> local CustomEvent plane -> 6 router layers -> 3072-step state
  machine -> runtime config materialization -> **anchor** -> LRU put + console
  sink.
- Difficulty contract: `hard_no_worker_main_thread_only`, call depth 38, router
  layers 6, middleware layers 8, async level 6, 44 x-distractors + 25 v-vendor
  modules + 20 w-vendor mounts, main-thread-only runtime boundary.
