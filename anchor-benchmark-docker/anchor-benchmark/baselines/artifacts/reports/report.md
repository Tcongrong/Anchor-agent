# Anchor Baseline Suite v5 — Report

Tasks: **40** | apps: **19** | primary indicator: **mean_score (S_d)**. Axis: capability tier; rows grouped by family.

## Capability matrix (auto-generated, §2-3)

| method | family | paper | capability | fidelity | TC1 | TC2 | TC3 | loop | sup | forbidden |
|---|---|---|---|---|---|---|---|---|---|---|
| LSI-FL | classical | C1 | static | faithful_reimplementation | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, observe_output, read_async_stack, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| SITIR | classical | C2 | exec_aware | faithful_reimplementation | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, read_async_stack, read_sync_stack, read_vars, set_breakpoint, tc1_prior, value_flow_stitch |
| Software-Recon | classical | C6 | exec_aware | task_adapted | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, read_async_stack, read_sync_stack, read_vars, set_breakpoint, tc1_prior, value_flow_stitch |
| JS-DynSlice | classical | C3 | instrumented_exec | task_adapted | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, set_breakpoint, tc1_prior, value_flow_stitch |
| Agentless-Loc | llm_localization | L1 | static | task_adapted | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, observe_output, read_async_stack, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| Direct-LLM | llm_localization | — | static | task_adapted | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, observe_output, read_async_stack, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| LocAgent-JS | code_agent | A3 | static | task_adapted | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, observe_output, read_async_stack, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| SWE-agent | code_agent | A1 | static | task_adapted | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, observe_output, read_async_stack, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| Debugger-Agent | matched_control | R1+R2 | debugger | task_adapted | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, tc1_prior, value_flow_stitch |
| Anchor | proposed | — | anchor | original | True | True | True | True | - | - |
| FixedProbe-BM25 | ablation | — | debugger | diagnostic | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, tc1_prior, value_flow_stitch |
| Anchor-noLoop | ablation | — | anchor | original | True | True | True | False | - | - |
| Anchor-noTC2 | ablation | — | anchor | original | True | False | True | True | - | adaptive_breakpoint, info_gain_probe |
| Anchor-noTC3 | ablation | — | anchor | original | True | True | False | True | - | cross_round_async_graph, value_flow_stitch |
| TC1-only | ablation | — | anchor | original | True | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, value_flow_stitch |
| BM25-Static | diagnostic | — | static | task_adapted | False | False | False | False | - | - |
| Uniform-Random | diagnostic | — | static | diagnostic | False | False | False | False | - | - |
| Exec-LLM | diagnostic | — | exec_aware | diagnostic | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, read_async_stack, read_sync_stack, read_vars, set_breakpoint, tc1_prior, value_flow_stitch |
| SimpleSink | diagnostic | — | exec_aware | diagnostic | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, read_async_stack, read_sync_stack, read_vars, set_breakpoint, tc1_prior, value_flow_stitch |
| Uniform-Tracer | diagnostic | — | instrumented_exec | diagnostic | False | False | False | False | - | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, read_async_stack, read_sync_stack, read_vars, set_breakpoint, tc1_prior, value_flow_stitch |
| OutputAware | supervised_reference | — | exec_aware | task_adapted | False | False | False | False | Y | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, instrument_values, read_async_stack, read_sync_stack, read_vars, set_breakpoint, tc1_prior, value_flow_stitch |

## Main result table (by capability tier, §3)

| method | family | capability | paper | fidelity | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|---|---|---|---|
| LSI-FL | classical | static | C1 | faithful_reimplementation | 0.105 | 0.000 | 0.000 | 40 |
| SITIR | classical | exec_aware | C2 | faithful_reimplementation | 0.100 | 0.000 | 0.000 | 2 |
| Software-Recon | classical | exec_aware | C6 | task_adapted | n/a (not run) | n/a | n/a | 0 |
| JS-DynSlice | classical | instrumented_exec | C3 | task_adapted | 0.000 | 0.000 | 0.000 | 40 |
| Anchor | proposed | anchor | — | original | n/a (None) | n/a | n/a | 0 |

## Anchor ablations (RQ5)

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| FixedProbe-BM25 | 0.198 | 0.050 | 0.050 | 40 |
| Anchor-noLoop | n/a (None) | n/a | n/a | 0 |
| Anchor-noTC2 | n/a (None) | n/a | n/a | 0 |
| Anchor-noTC3 | n/a (None) | n/a | n/a | 0 |
| TC1-only | n/a (None) | n/a | n/a | 0 |

## Diagnostics (lower bounds / probes)

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| BM25-Static | 0.118 | 0.025 | 0.025 | 40 |
| SimpleSink | 0.115 | 0.000 | 0.000 | 40 |
| Uniform-Tracer | 0.092 | 0.000 | 0.000 | 40 |
| Uniform-Random | 0.004 | 0.001 | 0.001 | 40 |
| Exec-LLM | n/a (not run) | n/a | n/a | 0 |

## Supervised reference (appendix)

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| OutputAware | 0.147 | 0.025 | 0.025 | 40 |

## RQ slices (§6)

### RQ1 — can classical methods localize modern Web runtime behaviour?

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| LSI-FL | 0.105 | 0.000 | 0.000 | 40 |
| SITIR | 0.100 | 0.000 | 0.000 | 2 |
| Software-Recon | n/a | n/a | n/a | 0 |
| JS-DynSlice | 0.000 | 0.000 | 0.000 | 40 |
| Anchor | n/a | n/a | n/a | 0 |

### RQ2 — do published LLM localization methods transfer?

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| Anchor | n/a | n/a | n/a | 0 |

### RQ3 — can off-the-shelf code agents do it directly?

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| Anchor | n/a | n/a | n/a | 0 |

### RQ4 — does causal-guidance strategy add value BEYOND capability?

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| Anchor | n/a | n/a | n/a | 0 |

### RQ5 — per-component contribution & is the benchmark statically trivial?

| method | mean_score | strict_acc | recall@1 | n |
|---|---|---|---|---|
| TC1-only | n/a | n/a | n/a | 0 |
| Anchor-noTC2 | n/a | n/a | n/a | 0 |
| Anchor-noTC3 | n/a | n/a | n/a | 0 |
| FixedProbe-BM25 | 0.198 | 0.050 | 0.050 | 40 |
| Anchor-noLoop | n/a | n/a | n/a | 0 |
| Anchor | n/a | n/a | n/a | 0 |

## Failure matrix — top-1 role distribution

| method | Anchor | Nested target-specific helper | Path-critical | Path/Wrapper | Wrapper | Path-generic-helper | Off-chain | Abstain |
|---|---|---|---|---|---|---|---|---|
| BM25-Static | 1 | 0 | 12 | 0 | 5 | 3 | 19 | 0 |
| FixedProbe-BM25 | 2 | 4 | 6 | 0 | 8 | 3 | 17 | 0 |
| JS-DynSlice | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 39 |
| LSI-FL | 0 | 1 | 3 | 7 | 7 | 1 | 21 | 0 |
| OutputAware | 1 | 3 | 12 | 2 | 0 | 0 | 22 | 0 |
| SITIR | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| SimpleSink | 0 | 0 | 8 | 9 | 6 | 0 | 17 | 0 |
| Uniform-Random | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Uniform-Tracer | 0 | 0 | 12 | 0 | 5 | 3 | 20 | 0 |

## Mean S_d by behaviour category

| method | browser_fingerprint | byte_array_transformation | request_signature_token_derivation | request_transformation | state_encoding | byte_array_transformation |
|---|---|---|---|---|---|---|
| BM25-Static | 0.20 | 0.08 | 0.10 | 0.12 | 0.10 | 0.00 |
| FixedProbe-BM25 | 0.21 | 0.27 | 0.16 | 0.16 | 0.12 | 0.50 |
| JS-DynSlice | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| LSI-FL | 0.03 | 0.07 | 0.10 | 0.20 | 0.10 | 0.20 |
| OutputAware | 0.08 | 0.13 | 0.08 | 0.16 | 0.15 | 0.70 |
| SITIR | 0.00 | - | 0.20 | - | - | - |
| SimpleSink | 0.10 | 0.20 | 0.10 | 0.12 | 0.10 | 0.00 |
| Uniform-Random | 0.01 | 0.01 | 0.00 | 0.00 | 0.00 | 0.00 |
| Uniform-Tracer | 0.08 | 0.08 | 0.10 | 0.12 | 0.10 | 0.00 |

## Per-method diagnostics (artifact means, §10.11)

| method | query_corpus_overlap | executed_size | trace_ok | control_scenario_unavailable | break_at_native | slice_size | backward_path_reaches_target | slice_truncated |
|---|---|---|---|---|---|---|---|---|
| JS-DynSlice | - | - | 0.00 | - | 0.50 | 16.00 | 0.50 | 0.05 |
| LSI-FL | 0.34 | - | - | - | - | - | - | - |
| SITIR | 0.34 | 22.18 | 0.05 | - | - | - | - | - |
| Software-Recon | - | - | - | 1.00 | - | - | - | - |
| Uniform-Tracer | - | - | 0.00 | - | - | - | - | - |

## Candidate coverage

- anchor present in FC: **40/40**
- |FC| median **2220**, max **20801**

## Application-grouped split

- apps: **19**  | supervised_exploratory: **False**
- app sizes: account=5, annotation=1, batch=2, browser=2, dashboard=2, filter=4, fingerprint=2, markdown=1, note=4, notify=1, packet=2, prefs=1, query=1, relay=2, request=2, search=2, statebench=1, upload=4, workspace=1

## Budget audit (per-task means)

| method | page_triggers | breakpoints_set | pause_hits | llm_calls | llm_input_tokens | llm_output_tokens | wall_clock_sec |
|---|---|---|---|---|---|---|---|
| Anchor | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| Anchor-noLoop | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| Anchor-noTC2 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| Anchor-noTC3 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| BM25-Static | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.1 |
| Exec-LLM | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| FixedProbe-BM25 | 1.0 | 15.1 | 34.1 | 0.0 | 0.0 | 0.0 | 1.5 |
| JS-DynSlice | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 10.8 |
| LSI-FL | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 8.6 |
| OutputAware | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.9 |
| SITIR | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 21.8 |
| SimpleSink | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.1 |
| Software-Recon | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 22.2 |
| TC1-only | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| Uniform-Random | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| Uniform-Tracer | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.2 |

## Capability declaration (machine-checked, §10.2)

| method | capability | allowed ops |
|---|---|---|
| Anchor | anchor | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, observe_output, read_async_stack, read_static, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| Anchor-noLoop | anchor | adaptive_breakpoint, cross_round_async_graph, info_gain_probe, observe_output, read_async_stack, read_static, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| Anchor-noTC2 | anchor | cross_round_async_graph, observe_output, read_async_stack, read_static, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior, value_flow_stitch |
| Anchor-noTC3 | anchor | adaptive_breakpoint, info_gain_probe, observe_output, read_async_stack, read_static, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior |
| TC1-only | anchor | observe_output, read_async_stack, read_static, read_sync_stack, read_vars, run_page, set_breakpoint, tc1_prior |
| FixedProbe-BM25 | debugger | observe_output, read_async_stack, read_static, read_sync_stack, read_vars, run_page, set_breakpoint |
| Exec-LLM | exec_aware | observe_output, read_static, run_page |
| OutputAware | exec_aware | observe_output, read_static, run_page |
| SITIR | exec_aware | observe_output, read_static, run_page |
| SimpleSink | exec_aware | observe_output, read_static, run_page |
| Software-Recon | exec_aware | observe_output, read_static, run_page |
| JS-DynSlice | instrumented_exec | instrument_values, observe_output, read_static, run_page |
| Uniform-Tracer | instrumented_exec | instrument_values, observe_output, read_static, run_page |
| BM25-Static | static | read_static |
| LSI-FL | static | read_static |
| Uniform-Random | static | read_static |

## Leak / fairness audit (§10.12)

- modules importing grader/oracle: **1** (sanctioned supervised-reference: 1)
- unsanctioned leak offenders: **0** ✓
- sanctioned (train-fold labels only): ['supervised_reference/outputaware.py']

## Statistics vs strongest scored method (FixedProbe-BM25)

Paired bootstrap 95% CI of per-task mean_score delta (ref − method); McNemar on strict hits.

| method | ΔmeanScore | 95% CI | McNemar χ² | p |
|---|---|---|---|---|
| BM25-Static | +0.080 | [-0.025, +0.190] | 0.00 | 1.000 |
| JS-DynSlice | +0.198 | [+0.118, +0.290] | 0.50 | 0.500 |
| LSI-FL | +0.092 | [+0.015, +0.180] | 0.50 | 0.500 |
| OutputAware | +0.050 | [-0.023, +0.128] | 0.00 | 1.000 |
| SITIR | +0.193 | [+0.110, +0.285] | 0.50 | 0.500 |
| SimpleSink | +0.082 | [-0.003, +0.180] | 0.50 | 0.500 |
| Uniform-Random | +0.193 | [+0.114, +0.285] | 0.50 | 0.500 |
| Uniform-Tracer | +0.105 | [+0.020, +0.202] | 0.50 | 0.500 |