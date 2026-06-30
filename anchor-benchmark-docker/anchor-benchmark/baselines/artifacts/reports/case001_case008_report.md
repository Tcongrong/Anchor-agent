# Baseline Results Report: case001-case008

Generated: 2026-06-22 15:02:04 

Scope: completed synthetic benchmark groups `case001` through `case008` only. `case009` and `case010` are excluded because they are currently running.

## Run Coverage

| case | state | rows | updated_at |
| --- | --- | --- | --- |
| case001 | complete | 210/210 | 2026-06-21T03:47:09 |
| case002 | complete | 210/210 | 2026-06-21T11:05:09 |
| case003 | complete | 210/210 | 2026-06-21T08:03:24 |
| case004 | complete | 210/210 | 2026-06-21T12:47:27 |
| case005 | complete | 210/210 | 2026-06-21T17:44:30 |
| case006 | complete | 210/210 | 2026-06-21T22:59:44 |
| case007 | complete | 210/210 | 2026-06-22T03:49:46 |
| case008 | complete | 210/210 | 2026-06-22T08:52:16 |

Each method has 120 evaluated rows: 8 cases x 5 tasks x 3 repeats. All 14 methods completed all 120 rows with no `budget_exceeded`, `error`, or `not_run` rows.

## Overall Ranking

| rank | method | category | n | ok | mean_score | std | mean_sec | llm_tokens | llm_calls | forced | fallback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Direct-LLM | llm_localization | 120 | 120 | 0.502 | 0.408 | 497.30 | 17,087,790 | 831 | 0 | 0 |
| 2 | LocAgent-JS | code_agent | 120 | 120 | 0.487 | 0.433 | 159.76 | 39,069,091 | 3,681 | 49 | 0 |
| 3 | Exec-LLM | diagnostic_runtime | 120 | 120 | 0.483 | 0.445 | 67.92 | 1,594,040 | 120 | 0 | 1 |
| 4 | SWE-agent | code_agent | 120 | 120 | 0.391 | 0.400 | 113.33 | 24,181,087 | 2,882 | 37 | 0 |
| 5 | Agentless-Loc | llm_localization | 120 | 120 | 0.362 | 0.440 | 333.16 | 4,997,532 | 698 | 0 | 0 |
| 6 | Uniform-Tracer | diagnostic_runtime | 120 | 120 | 0.274 | 0.306 | 0.90 | 0 | 0 | 0 | 0 |
| 7 | Debugger-Agent | debugger_control | 120 | 120 | 0.120 | 0.240 | 51.18 | 8,035,901 | 1,257 | 0 | 1 |
| 8 | BM25-Static | traditional_static | 120 | 120 | 0.118 | 0.170 | 0.10 | 0 | 0 | 0 | 0 |
| 9 | SimpleSink | diagnostic_runtime | 120 | 120 | 0.115 | 0.099 | 0.07 | 0 | 0 | 0 | 0 |
| 10 | LSI-FL | traditional_static | 120 | 120 | 0.105 | 0.136 | 7.20 | 0 | 0 | 0 | 0 |
| 11 | SITIR | traditional_static | 120 | 120 | 0.103 | 0.172 | 20.71 | 0 | 0 | 0 | 0 |
| 12 | Software-Recon | traditional_static | 120 | 120 | 0.012 | 0.043 | 25.24 | 0 | 0 | 0 | 0 |
| 13 | Uniform-Random | traditional_static | 120 | 120 | 0.004 | 0.003 | 0.16 | 0 | 0 | 0 | 0 |
| 14 | JS-DynSlice | diagnostic_runtime | 120 | 120 | 0.000 | 0.000 | 8.04 | 0 | 0 | 0 | 0 |

## Results By Method Category

### llm_localization

| method | n | mean_score | std | mean_sec | llm_tokens | llm_calls | forced | fallback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Direct-LLM | 120 | 0.502 | 0.408 | 497.30 | 17,087,790 | 831 | 0 | 0 |
| Agentless-Loc | 120 | 0.362 | 0.440 | 333.16 | 4,997,532 | 698 | 0 | 0 |

### code_agent

| method | n | mean_score | std | mean_sec | llm_tokens | llm_calls | forced | fallback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LocAgent-JS | 120 | 0.487 | 0.433 | 159.76 | 39,069,091 | 3,681 | 49 | 0 |
| SWE-agent | 120 | 0.391 | 0.400 | 113.33 | 24,181,087 | 2,882 | 37 | 0 |

### diagnostic_runtime

| method | n | mean_score | std | mean_sec | llm_tokens | llm_calls | forced | fallback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exec-LLM | 120 | 0.483 | 0.445 | 67.92 | 1,594,040 | 120 | 0 | 1 |
| Uniform-Tracer | 120 | 0.274 | 0.306 | 0.90 | 0 | 0 | 0 | 0 |
| SimpleSink | 120 | 0.115 | 0.099 | 0.07 | 0 | 0 | 0 | 0 |
| JS-DynSlice | 120 | 0.000 | 0.000 | 8.04 | 0 | 0 | 0 | 0 |

### debugger_control

| method | n | mean_score | std | mean_sec | llm_tokens | llm_calls | forced | fallback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Debugger-Agent | 120 | 0.120 | 0.240 | 51.18 | 8,035,901 | 1,257 | 0 | 1 |

### traditional_static

| method | n | mean_score | std | mean_sec | llm_tokens | llm_calls | forced | fallback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BM25-Static | 120 | 0.118 | 0.170 | 0.10 | 0 | 0 | 0 | 0 |
| LSI-FL | 120 | 0.105 | 0.136 | 7.20 | 0 | 0 | 0 | 0 |
| SITIR | 120 | 0.103 | 0.172 | 20.71 | 0 | 0 | 0 | 0 |
| Software-Recon | 120 | 0.012 | 0.043 | 25.24 | 0 | 0 | 0 | 0 |
| Uniform-Random | 120 | 0.004 | 0.003 | 0.16 | 0 | 0 | 0 | 0 |

## Per-Case Top Methods

| case | top1 | top2 | top3 | top4 | top5 |
| --- | --- | --- | --- | --- | --- |
| case001 | Direct-LLM (0.753) | Exec-LLM (0.733) | LocAgent-JS (0.667) | Agentless-Loc (0.573) | SWE-agent (0.473) |
| case002 | Direct-LLM (0.727) | Exec-LLM (0.593) | LocAgent-JS (0.540) | Agentless-Loc (0.500) | Uniform-Tracer (0.487) |
| case003 | LocAgent-JS (0.500) | Direct-LLM (0.387) | SWE-agent (0.387) | Uniform-Tracer (0.380) | Exec-LLM (0.173) |
| case004 | Agentless-Loc (0.600) | Exec-LLM (0.440) | Direct-LLM (0.407) | SWE-agent (0.360) | Uniform-Tracer (0.240) |
| case005 | Direct-LLM (0.340) | LocAgent-JS (0.300) | Agentless-Loc (0.220) | SITIR (0.200) | Debugger-Agent (0.180) |
| case006 | Exec-LLM (0.940) | LocAgent-JS (0.747) | SWE-agent (0.747) | Direct-LLM (0.713) | Agentless-Loc (0.347) |
| case007 | LocAgent-JS (0.420) | SWE-agent (0.367) | Exec-LLM (0.180) | LSI-FL (0.180) | Uniform-Tracer (0.160) |
| case008 | Exec-LLM (0.640) | Direct-LLM (0.547) | LocAgent-JS (0.500) | Agentless-Loc (0.447) | SWE-agent (0.367) |

## Per-Case Method Matrix

| method | case001 | case002 | case003 | case004 | case005 | case006 | case007 | case008 | overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Direct-LLM | 0.753 | 0.727 | 0.387 | 0.407 | 0.340 | 0.713 | 0.147 | 0.547 | 0.502 |
| LocAgent-JS | 0.667 | 0.540 | 0.500 | 0.220 | 0.300 | 0.747 | 0.420 | 0.500 | 0.487 |
| Exec-LLM | 0.733 | 0.593 | 0.173 | 0.440 | 0.167 | 0.940 | 0.180 | 0.640 | 0.483 |
| SWE-agent | 0.473 | 0.327 | 0.387 | 0.360 | 0.100 | 0.747 | 0.367 | 0.367 | 0.391 |
| Agentless-Loc | 0.573 | 0.500 | 0.113 | 0.600 | 0.220 | 0.347 | 0.093 | 0.447 | 0.362 |
| Uniform-Tracer | 0.447 | 0.487 | 0.380 | 0.240 | 0.140 | 0.100 | 0.160 | 0.240 | 0.274 |
| Debugger-Agent | 0.273 | 0.153 | 0.140 | 0.113 | 0.180 | 0.040 | 0.000 | 0.060 | 0.120 |
| BM25-Static | 0.280 | 0.080 | 0.160 | 0.040 | 0.020 | 0.200 | 0.080 | 0.080 | 0.118 |
| SimpleSink | 0.160 | 0.120 | 0.160 | 0.080 | 0.040 | 0.200 | 0.080 | 0.080 | 0.115 |
| LSI-FL | 0.120 | 0.040 | 0.140 | 0.080 | 0.000 | 0.200 | 0.180 | 0.080 | 0.105 |
| SITIR | 0.120 | 0.080 | 0.060 | 0.080 | 0.200 | 0.120 | 0.040 | 0.120 | 0.103 |
| Software-Recon | 0.000 | 0.040 | 0.020 | 0.000 | 0.000 | 0.013 | 0.000 | 0.020 | 0.012 |
| Uniform-Random | 0.005 | 0.003 | 0.006 | 0.004 | 0.005 | 0.004 | 0.005 | 0.004 | 0.004 |
| JS-DynSlice | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |

## Cost And Stability Notes

- Best mean score: `Direct-LLM` at `0.502`, but it is expensive at `497.30s/row` and `17,087,790` total LLM tokens.
- `Exec-LLM` is the strongest cost-effective method: mean score `0.483`, `67.92s/row`, `1,594,040` total tokens, and only `1` fallback row.
- `LocAgent-JS` is close to the top score at `0.487`, but uses the most tokens: `39,069,091`, with `49/120` forced submits.
- `SWE-agent` is stable in the sense that every row completed, but still has `37/120` forced submits and mean score `0.391`.
- `Debugger-Agent` drops to `0.120` over the full 8-case set, close to static baselines, so its high early-case result does not generalize well.

## Artifacts

- Source raw rows: `artifacts/case_runs/case*/raw.jsonl`
- Per-case summaries: `artifacts/case_runs/case*/summary.md`
- This report: `artifacts/reports/case001_case008_report.md`
