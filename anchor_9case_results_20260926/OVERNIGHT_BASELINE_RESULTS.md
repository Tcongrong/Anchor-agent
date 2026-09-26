# Overnight Baseline Results — case011–013 (9 scenario tasks)

- Run date: 2026-09-26 (launched 02:55, completed ~10:40)
- Backbone: SophNet DeepSeek-V4-Pro (reasoning model), temperature 0
- Protocol: 3 task groups x 14 methods x 3 repeats = 378 rows
- Suite: ~/anchor-benchmark (WSL Ubuntu-24.04), client.py with hardened retry (6 attempts, exp backoff)
- Grading: per-case oracle.hidden.json, sha256 span matching, weighted score S_d

## Cross-group summary (all 9 tasks, 3 repeats each)

| method | family | n | mean S_d | strict acc | errors | abstain | mean sec/row |
|---|---|---:|---:|---:|---:|---:|---:|
| LocAgent-JS | code_agent | 27 | 0.789 | 0.667 | 0 | 0 | 655 |
| Direct-LLM | llm_localization | 27 | 0.781 | 0.444 | 0 | 0 | 575 |
| Exec-LLM | diagnostic | 27 | 0.730 | 0.630 | 0 | 0 | 111 |
| SWE-agent | code_agent | 27 | 0.678 | 0.444 | 0 | 0 | 964 |
| Agentless-Loc | llm_localization | 27 | 0.511 | 0.296 | 0 | 0 | 525 |
| Debugger-Agent | matched_control | 27 | 0.396 | 0.185 | 0 | 2 | 127 |
| BM25-Static | diagnostic | 27 | 0.178 | 0.000 | 0 | 0 | 0 |
| SITIR | classical | 27 | 0.156 | 0.000 | 0 | 0 | 23 |
| LSI-FL | classical | 27 | 0.111 | 0.000 | 0 | 0 | 7 |
| Uniform-Tracer | diagnostic | 27 | 0.056 | 0.000 | 0 | 0 | 0 |
| SimpleSink | diagnostic | 27 | 0.044 | 0.000 | 0 | 0 | 0 |
| Software-Recon | classical | 27 | 0.007 | 0.000 | 0 | 21 | 28 |
| Uniform-Random | diagnostic | 27 | 0.005 | 0.000 | 0 | 0 | 0 |
| JS-DynSlice | classical | 27 | 0.000 | 0.000 | 0 | 21 | 19 |

## Per-group mean S_d

| method | case011 | case012 | case013 |
|---|---:|---:|---:|
| LocAgent-JS | 0.622 (n=9) | 0.844 (n=9) | 0.900 (n=9) |
| Direct-LLM | 0.744 (n=9) | 0.700 (n=9) | 0.900 (n=9) |
| Exec-LLM | 0.633 (n=9) | 0.556 (n=9) | 1.000 (n=9) |
| SWE-agent | 0.611 (n=9) | 0.722 (n=9) | 0.700 (n=9) |
| Agentless-Loc | 0.822 (n=9) | 0.256 (n=9) | 0.456 (n=9) |
| Debugger-Agent | 0.489 (n=9) | 0.289 (n=9) | 0.411 (n=9) |
| BM25-Static | 0.133 (n=9) | 0.200 (n=9) | 0.200 (n=9) |
| SITIR | 0.233 (n=9) | 0.233 (n=9) | 0.000 (n=9) |
| LSI-FL | 0.133 (n=9) | 0.067 (n=9) | 0.133 (n=9) |
| Uniform-Tracer | 0.000 (n=9) | 0.000 (n=9) | 0.167 (n=9) |
| SimpleSink | 0.000 (n=9) | 0.000 (n=9) | 0.133 (n=9) |
| Software-Recon | 0.000 (n=9) | 0.011 (n=9) | 0.011 (n=9) |
| Uniform-Random | 0.004 (n=9) | 0.008 (n=9) | 0.004 (n=9) |
| JS-DynSlice | 0.000 (n=9) | 0.000 (n=9) | 0.000 (n=9) |

## Data integrity

- Total rows: 378 / 378
- Rows with errors: 0
- not_run rows: 0

## Notes

- Raw data: WSL ~/anchor-benchmark/baselines/artifacts/case_runs/case01{1,2,3}/{raw.jsonl,summary.md}
- Trajectories: artifacts/trajectories/<Method>/<task>.json; prompts archived under artifacts/prompts/
- Debugger-Agent budget was max_steps=50 / wall 1200s (same caliber as the paper's dbg50 batch, NOT the 20/600 stated in appendix.tex).
- Full ANCHOR (third leg) is graded separately from this WSL batch. The matched 3-repeat run is in `full_anchor/results/repeat{1,2,3}/` (27 rows): mean S_d 0.889, strict 0.889, identical on every repeat. See `README.md` and `ANCHOR_vs_BASELINES_9case.html`.
- Backbone caveat: DeepSeek-V4-Pro with reasoning is much stronger than the backbone behind the paper's baseline numbers (Direct-LLM 0.290 on the original 50); cross-corpus comparison must control for backbone.
