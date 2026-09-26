# Scenario-Generalization Experiment Results (case011–013, 2026-09-26)

All three legs of the 3-condition matrix on the 9 scenario-generalization tasks
(analytics · feature-flag · cache/query), graded by each case's own oracle
(sha256 span matching, weighted score S_d). Full ANCHOR and every baseline are
now on the same schedule: 9 tasks × 3 repeats.

## Contents

| Path | What it is |
|---|---|
| `ANCHOR_vs_BASELINES_9case.html` | Consolidated chart plus per-task means: 15 methods, mean S_d (bars) + strict top-1 (dots) |
| `OVERNIGHT_BASELINE_RESULTS.md` | Baseline suite report: cross-group + per-group tables, integrity record |
| `full_anchor/results/repeat{1,2,3}/*.json` | Raw Full ANCHOR runs, 9 tasks × 3 repeats (Windows-side harness) |
| `full_anchor/graded.json` | Full ANCHOR grading, 27 rows (score / role / turns / confidence) |
| `full_anchor/graded_summary.json` | Repeat-, group-, and task-level aggregates, plus the miss list |
| `full_anchor/grade_anchor.mjs` | Grading script (span submission through each case's grade_submission.mjs) |
| `baselines_raw/case_runs/case01{1,2,3}/` | WSL baseline suite raw output: raw.jsonl (378 rows), summary.md, status.json, per-task trajectories/, prompts/ |

## Headline numbers

Same oracle, same 9 tasks. ANCHOR n is now 27, matched to each baseline.

| method | mean S_d | strict top-1 | n |
|---|---:|---:|---:|
| Full ANCHOR (ours) | 0.889 | 0.889 | 27 |
| LocAgent-JS | 0.789 | 0.667 | 27 |
| Direct-LLM | 0.781 | 0.444 | 27 |
| Exec-LLM | 0.730 | 0.630 | 27 |
| SWE-agent | 0.678 | 0.444 | 27 |
| Agentless-Loc | 0.511 | 0.296 | 27 |
| Debugger-Agent (matched control) | 0.396 | 0.185 | 27 |
| classical/diagnostic (7 methods) | ≤ 0.178 | 0 | 27 each |

Each ANCHOR repeat has the same mean and the same strict rate (0.889). The
repeat-mean standard deviation is 0. The row-level spread (8 ones and 1 zero
inside every repeat) is a task effect, not run noise.

## Full ANCHOR by repeat

| repeat | mean S_d | strict | hits |
|---|---:|---:|---:|
| repeat1 | 0.889 | 0.889 | 8/9 |
| repeat2 | 0.889 | 0.889 | 8/9 |
| repeat3 | 0.889 | 0.889 | 8/9 |

## Full ANCHOR by task

Score does not move across repeats. Turn count does. Two hits never reach the
convergence threshold and stop at `max_iterations` every time
(`flag_exposure_event` confidence 0.679, `route_state_rewrite` confidence 0.102);
the returned span is still the primary anchor.

| task | S_d ×3 | turns (r1 / r2 / r3) | status | returned |
|---|---:|---|---|---|
| case011_analytics_event_envelope | 1 1 1 | 4 / 5 / 5 | converged | buildAnalyticsEventToken |
| case011_analytics_property_encoding | 1 1 1 | 3 / 3 / 3 | converged | encodePropertyState |
| case011_analytics_batch_flush | 0 0 0 | 10 / 7 / 10 | converged | flushShadowToken (Off-chain) |
| case012_flag_variant_hashing | 1 1 1 | 5 / 4 / 9 | converged | computeVariantBucket |
| case012_flag_persistence_encoding | 1 1 1 | 4 / 4 / 5 | converged | encodeAssignmentEnvelope |
| case012_flag_exposure_event | 1 1 1 | 20 / 20 / 20 | max_iterations | buildExposurePayload |
| case013_query_state_serialization | 1 1 1 | 4 / 4 / 3 | converged | serializeQueryState |
| case013_cache_key_digest | 1 1 1 | 6 / 7 / 6 | converged | digestViewState |
| case013_route_state_rewrite | 1 1 1 | 20 / 20 / 20 | max_iterations | buildRouteRewriteValue |

Mean turns across 27 runs: 8.6. The only score miss is systematic:
`case011_analytics_batch_flush` returns the off-chain decoy `flushShadowToken`
on all 3 repeats (timer-decoupled A3 probe).

## Per-group mean S_d

| method | case011 | case012 | case013 |
|---|---:|---:|---:|
| Full ANCHOR | 0.667 | 1.000 | 1.000 |
| LocAgent-JS | 0.622 | 0.844 | 0.900 |
| Direct-LLM | 0.744 | 0.700 | 0.900 |
| Exec-LLM | 0.633 | 0.556 | 1.000 |
| SWE-agent | 0.611 | 0.722 | 0.700 |

On case011, Direct-LLM (0.744) is ahead of Full ANCHOR (0.667) because it
strict-hits `analytics_batch_flush` on all 3 repeats, the task ANCHOR misses.
ANCHOR leads on case012 (1.000 vs next-best LocAgent-JS 0.844) and ties the
best methods on case013.

## Protocol notes

- Backbone for all LLM methods incl. Full ANCHOR: SophNet DeepSeek-V4-Pro (reasoning model), temperature 0.
- Baselines: 14 methods × 9 tasks × 3 repeats = 378 rows, zero network/parse errors.
- Full ANCHOR: 9 tasks × 3 repeats = 27 rows, graded by `full_anchor/grade_anchor.mjs` against `anchor_scenario_cases_011-013`. 24/27 strict hits.
- Debugger-Agent budget 50 steps / 1200 s — same caliber as the paper's dbg50 batch.
- Caveat: the reasoning-strong backbone lifts every LLM baseline far above the paper's
  original-50 numbers (Direct-LLM 0.290 → 0.781); cross-corpus claims must control for backbone.
