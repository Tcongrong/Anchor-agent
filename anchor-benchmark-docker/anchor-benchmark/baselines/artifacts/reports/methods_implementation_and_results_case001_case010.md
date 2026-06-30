# Methods Implementation And Results Summary

Generated: 2026-06-23 16:15:41 

Scope: complete results for `case001` through `case010`.

## Executive Summary

- All active methods completed all available rows: 10 case groups x 5 tasks x 3 repeats = 150 rows per method.
- No method has `budget_exceeded`, `error`, or `not_run` rows in the complete 10-case set.
- `Direct-LLM` remains rank 1 by mean score, but `Exec-LLM` is now very close while using far fewer tokens and one LLM call per row.
- `case009` and `case010` are hard groups that substantially lower all high-scoring LLM/agent methods.
- `LocAgent-JS` remains competitive but has the largest token footprint and high forced-submit count; `SWE-agent` is stable but also forced-submits frequently.

## Coverage

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
| case009 | complete | 210/210 | 2026-06-22T19:20:59 |
| case010 | complete | 210/210 | 2026-06-23T03:12:37 |

## Method Implementations

### LSI-FL

- Category: `classical`
- Capability: `static`
- Implementation file: `src/anchor_eval/methods/classical/lsi_feature_location.py`
- Implementation: Textual feature-location baseline. It builds a query from the task description, observable fields, and interaction selectors, tokenizes candidate function names/bodies, projects query and candidate text into a latent semantic space, and ranks candidate functions by semantic similarity. It is fully static: it does not load the page, observe runtime output, call an LLM, or use oracle-derived supervision.
- Strength: Cheap static semantic matching; useful as a non-LLM feature-location baseline.
- Limitation: Sensitive to obfuscation and weak lexical/semantic clues; cannot exploit runtime behavior.

### SITIR

- Category: `classical`
- Capability: `exec_aware`
- Implementation file: `src/anchor_eval/methods/classical/sitir.py`
- Implementation: Execution-aware IR baseline. It first obtains standardized runtime execution/evidence, then biases IR ranking toward functions observed in or near the executed set. It keeps the idea of combining dynamic coverage with textual retrieval while staying non-LLM and non-agentic.
- Strength: Can benefit when the target function appears in the executed path.
- Limitation: Coverage is coarse; if the executed set is broad or misses the semantic value-construction function, ranking remains weak.

### Software-Recon

- Category: `classical`
- Capability: `exec_aware`
- Implementation file: `src/anchor_eval/methods/classical/software_reconnaissance.py`
- Implementation: Software reconnaissance style baseline. It uses execution/control observations to identify behaviorally relevant regions and ranks functions by participation in observed execution/control evidence. It is reported as an external dynamic baseline rather than a proposed method.
- Strength: Tests whether generic dynamic reconnaissance transfers to minified browser bundles.
- Limitation: Depends heavily on control quality; observed dynamic signal often does not isolate the exact anchor function.

### JS-DynSlice

- Category: `classical`
- Capability: `instrumented_exec`
- Implementation file: `src/anchor_eval/methods/classical/js_dynslice.py`
- Implementation: JavaScript dynamic-slicing baseline. It collects instrumented execution traces and attempts a backward slice from observable behavior to functions on the trace. It is non-LLM and uses runtime instrumentation rather than static-only retrieval.
- Strength: Represents a trace/slicing baseline for dynamic JavaScript behavior.
- Limitation: Very brittle on bundled/minified code and asynchronous/value-flow boundaries; current results show it rarely identifies the exact function.

### Direct-LLM

- Category: `llm_localization`
- Capability: `static`
- Implementation file: `src/anchor_eval/methods/llm_localization/direct_llm.py`
- Implementation: Two-pass strong-model localization baseline. Pass 1 sends all candidate function signatures/skeletons in deterministic adaptive chunks and asks the model to shortlist relevant function ids. Pass 2 sends full bodies of the shortlist and asks for a single top function plus ranking. No runtime evidence, no tool loop, no model-driven navigation.
- Strength: Highest overall score; strong at exploiting semantic names, signatures, and function bodies.
- Limitation: Slow and expensive; performance drops sharply on case009/case010, showing limited robustness when lexical/semantic cues are weak.

### Agentless-Loc

- Category: `llm_localization`
- Capability: `static`
- Implementation file: `src/anchor_eval/methods/llm_localization/agentless_localization_adapter.py`
- Implementation: Agentless-style hierarchical localization adapted to a single JS bundle. It uses staged prompting: coarse bundle-region selection, mid-level suspicious-function selection, and fine-grained body-level selection. It preserves localization only and stops at one complete function; no patching, tests, or runtime execution.
- Strength: More structured than Direct-LLM and can focus context through staged narrowing.
- Limitation: Costly; if early region pruning misses the target or picks unhelpful regions, later stages cannot recover.

### SWE-agent

- Category: `code_agent`
- Capability: `static`
- Implementation file: `src/anchor_eval/methods/agents/swe_agent_adapter.py`
- Implementation: Task-adapted SWE-agent style Agent-Computer Interface. The agent has read-only source tools: list files, search source, open enclosing function, and submit one function. It runs an observation-action loop with max_steps=50 and max_total_tokens=750000. It is explicitly not a repair/patching task and cannot use runtime tools.
- Strength: All rows now produce results; substantially improved from earlier budget_exceeded/no-submit failures.
- Limitation: Forced-submit rate remains material, indicating the agent often reaches the step cap or fails to submit naturally before adapter convergence.

### LocAgent-JS

- Category: `code_agent`
- Capability: `static`
- Implementation file: `src/anchor_eval/methods/agents/locagent_js_adapter.py`
- Implementation: JavaScript adaptation of LocAgent. It builds a heterogeneous code graph over bundle files/functions with lexical containment, statically resolvable calls, and event/callback-registration edges. The agent uses search_entity, traverse_graph, retrieve_entity, and submit tools in a graph-guided loop with max_steps=50 and max_total_tokens=750000.
- Strength: Near top overall score and much faster than Direct-LLM in wall time.
- Limitation: Highest token consumption and high forced-submit count; graph navigation often does not naturally converge to submit.

### Debugger-Agent

- Category: `matched_control`
- Capability: `debugger`
- Implementation file: `src/anchor_eval/methods/matched_control/debugger_agent.py; node/agent_debugger.mjs`
- Implementation: ReAct/CodeAct-style agent over a generic Chrome DevTools Protocol debugger surface. It can list candidates, read source, set breakpoints, trigger the interaction, inspect sync/async stacks, read captured variables, observe console/DOM/network, and submit. Node drives Playwright/CDP; Python wrapper records budgets and resolves the submitted function.
- Strength: Most capable dynamic agent interface in the suite; useful matched-control comparison against static agents.
- Limitation: Overall score is close to static baselines; despite debugger access, it often does not use dynamic evidence effectively enough to isolate the exact anchor.

### BM25-Static

- Category: `diagnostic`
- Capability: `static`
- Implementation file: `src/anchor_eval/methods/diagnostics/bm25_static.py`
- Implementation: Static lexical diagnostic. It ranks candidate functions by BM25-style lexical overlap between the task query and candidate names/bodies. No runtime evidence and no LLM.
- Strength: Very cheap lower-bound retrieval diagnostic.
- Limitation: Weak under obfuscation and when the task description does not lexically match the target function.

### Exec-LLM

- Category: `diagnostic`
- Capability: `exec_aware`
- Implementation file: `src/anchor_eval/methods/diagnostics/exec_llm.py`
- Implementation: Diagnostic method measuring the marginal value of one external execution summary plus an LLM. It runs the page once, collects console/network/DOM artifacts, combines them with a BM25 shortlist of candidate bodies, and asks the model for top1/ranking. It uses no breakpoints, no stack inspection, and no multi-step agent loop.
- Strength: Best cost-effectiveness overall; after case010 it nearly matches Direct-LLM while using far fewer tokens and calls.
- Limitation: Not a full localization algorithm; depends on BM25 shortlist and concise external artifacts.

### SimpleSink

- Category: `diagnostic`
- Capability: `exec_aware`
- Implementation file: `src/anchor_eval/methods/diagnostics/simple_sink.py`
- Implementation: Non-LLM sink-proximity diagnostic. It uses runtime/execution evidence and simple heuristics around output/sink proximity to rank candidate functions. It is intended as a cheap diagnostic, not a full prior-art localizer.
- Strength: Extremely cheap and competitive on hard sink-heavy cases such as case009/case010.
- Limitation: Low overall score and shallow heuristics; cannot distinguish many upstream value constructors.

### Uniform-Tracer

- Category: `diagnostic`
- Capability: `instrumented_exec`
- Implementation file: `src/anchor_eval/methods/diagnostics/uniform_tracer.py`
- Implementation: Trace-frequency diagnostic. It instruments/collects function-entry execution and ranks functions using generic trace properties such as call presence/frequency and proximity to observed behavior. No LLM.
- Strength: Strong cheap runtime diagnostic on some earlier cases.
- Limitation: Cannot model data dependencies precisely; loses exact target when many functions execute.

### Uniform-Random

- Category: `diagnostic`
- Capability: `static`
- Implementation file: `src/anchor_eval/methods/diagnostics/uniform_random.py`
- Implementation: Random lower-bound baseline over candidate functions. It provides a sanity-check floor for expected random localization performance.
- Strength: Useful calibration floor.
- Limitation: No signal; expected to be near zero.

## Overall Results: case001-case010

| rank | method | category | n | ok | budget | error | not_run | mean_score | std | mean_sec | llm_tokens | llm_calls | submitted | forced | fallback | dynamic |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Direct-LLM | llm_localization | 150 | 150 | 0 | 0 | 0 | 0.414 | 0.414 | 545.56 | 20,242,940 | 1,011 | 0 | 0 | 0 | 0 |
| 2 | Exec-LLM | diagnostic | 150 | 150 | 0 | 0 | 0 | 0.407 | 0.437 | 73.21 | 2,108,303 | 150 | 0 | 0 | 1 | 0 |
| 3 | LocAgent-JS | code_agent | 150 | 150 | 0 | 0 | 0 | 0.404 | 0.430 | 159.16 | 54,581,051 | 4,679 | 150 | 69 | 0 | 0 |
| 4 | SWE-agent | code_agent | 150 | 150 | 0 | 0 | 0 | 0.314 | 0.390 | 111.38 | 29,900,971 | 3,445 | 150 | 53 | 0 | 0 |
| 5 | Agentless-Loc | llm_localization | 150 | 150 | 0 | 0 | 0 | 0.291 | 0.418 | 411.39 | 7,077,690 | 908 | 0 | 0 | 0 | 0 |
| 6 | Uniform-Tracer | diagnostic | 150 | 150 | 0 | 0 | 0 | 0.219 | 0.295 | 0.81 | 0 | 0 | 0 | 0 | 0 | 0 |
| 7 | SimpleSink | diagnostic | 150 | 150 | 0 | 0 | 0 | 0.104 | 0.100 | 0.11 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8 | BM25-Static | diagnostic | 150 | 150 | 0 | 0 | 0 | 0.098 | 0.159 | 0.15 | 0 | 0 | 0 | 0 | 0 | 0 |
| 9 | Debugger-Agent | matched_control | 150 | 150 | 0 | 0 | 0 | 0.096 | 0.220 | 53.98 | 10,696,282 | 1,601 | 0 | 0 | 1 | 0 |
| 10 | LSI-FL | classical | 150 | 150 | 0 | 0 | 0 | 0.084 | 0.129 | 11.24 | 0 | 0 | 0 | 0 | 0 | 0 |
| 11 | SITIR | classical | 150 | 150 | 0 | 0 | 0 | 0.082 | 0.160 | 25.55 | 0 | 0 | 0 | 0 | 0 | 0 |
| 12 | Software-Recon | classical | 150 | 150 | 0 | 0 | 0 | 0.009 | 0.039 | 26.38 | 0 | 0 | 0 | 0 | 0 | 0 |
| 13 | Uniform-Random | diagnostic | 150 | 150 | 0 | 0 | 0 | 0.005 | 0.004 | 0.14 | 0 | 0 | 0 | 0 | 0 | 0 |
| 14 | JS-DynSlice | classical | 150 | 150 | 0 | 0 | 0 | 0.000 | 0.000 | 8.78 | 0 | 0 | 0 | 0 | 0 | 0 |

## Token And Time Cost

| method | mean_score | mean_sec_per_row | total_wall_sec | llm_input_tokens | llm_output_tokens | llm_total_tokens | llm_calls | tokens_per_row |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Direct-LLM | 0.414 | 545.56 | 81834.05 | 12,863,506 | 7,379,434 | 20,242,940 | 1,011 | 134952.93 |
| Exec-LLM | 0.407 | 73.21 | 10981.78 | 1,071,261 | 1,037,042 | 2,108,303 | 150 | 14055.35 |
| LocAgent-JS | 0.404 | 159.16 | 23874.18 | 52,822,989 | 1,758,062 | 54,581,051 | 4,679 | 363873.67 |
| SWE-agent | 0.314 | 111.38 | 16706.63 | 28,657,824 | 1,243,147 | 29,900,971 | 3,445 | 199339.81 |
| Agentless-Loc | 0.291 | 411.39 | 61708.09 | 1,727,333 | 5,350,357 | 7,077,690 | 908 | 47184.60 |
| Uniform-Tracer | 0.219 | 0.81 | 121.64 | 0 | 0 | 0 | 0 | 0.00 |
| SimpleSink | 0.104 | 0.11 | 17.02 | 0 | 0 | 0 | 0 | 0.00 |
| BM25-Static | 0.098 | 0.15 | 22.74 | 0 | 0 | 0 | 0 | 0.00 |
| Debugger-Agent | 0.096 | 53.98 | 8096.64 | 10,114,584 | 581,698 | 10,696,282 | 1,601 | 71308.55 |
| LSI-FL | 0.084 | 11.24 | 1685.34 | 0 | 0 | 0 | 0 | 0.00 |
| SITIR | 0.082 | 25.55 | 3831.98 | 0 | 0 | 0 | 0 | 0.00 |
| Software-Recon | 0.009 | 26.38 | 3956.38 | 0 | 0 | 0 | 0 | 0.00 |
| Uniform-Random | 0.005 | 0.14 | 21.55 | 0 | 0 | 0 | 0 | 0.00 |
| JS-DynSlice | 0.000 | 8.78 | 1316.26 | 0 | 0 | 0 | 0 | 0.00 |

## Per-Case Winners

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
| case009 | SimpleSink (0.080) | LocAgent-JS (0.067) | Direct-LLM (0.060) | BM25-Static (0.040) | Agentless-Loc (0.013) |
| case010 | Exec-LLM (0.193) | LocAgent-JS (0.080) | Direct-LLM (0.060) | SimpleSink (0.040) | Agentless-Loc (0.007) |

## Method x Case Score Matrix

| method | case001 | case002 | case003 | case004 | case005 | case006 | case007 | case008 | case009 | case010 | overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Direct-LLM | 0.753 | 0.727 | 0.387 | 0.407 | 0.340 | 0.713 | 0.147 | 0.547 | 0.060 | 0.060 | 0.414 |
| Exec-LLM | 0.733 | 0.593 | 0.173 | 0.440 | 0.167 | 0.940 | 0.180 | 0.640 | 0.013 | 0.193 | 0.407 |
| LocAgent-JS | 0.667 | 0.540 | 0.500 | 0.220 | 0.300 | 0.747 | 0.420 | 0.500 | 0.067 | 0.080 | 0.404 |
| SWE-agent | 0.473 | 0.327 | 0.387 | 0.360 | 0.100 | 0.747 | 0.367 | 0.367 | 0.013 | 0.000 | 0.314 |
| Agentless-Loc | 0.573 | 0.500 | 0.113 | 0.600 | 0.220 | 0.347 | 0.093 | 0.447 | 0.013 | 0.007 | 0.291 |
| Uniform-Tracer | 0.447 | 0.487 | 0.380 | 0.240 | 0.140 | 0.100 | 0.160 | 0.240 | 0.000 | 0.000 | 0.219 |
| SimpleSink | 0.160 | 0.120 | 0.160 | 0.080 | 0.040 | 0.200 | 0.080 | 0.080 | 0.080 | 0.040 | 0.104 |
| BM25-Static | 0.280 | 0.080 | 0.160 | 0.040 | 0.020 | 0.200 | 0.080 | 0.080 | 0.040 | 0.000 | 0.098 |
| Debugger-Agent | 0.273 | 0.153 | 0.140 | 0.113 | 0.180 | 0.040 | 0.000 | 0.060 | 0.000 | 0.000 | 0.096 |
| LSI-FL | 0.120 | 0.040 | 0.140 | 0.080 | 0.000 | 0.200 | 0.180 | 0.080 | 0.000 | 0.000 | 0.084 |
| SITIR | 0.120 | 0.080 | 0.060 | 0.080 | 0.200 | 0.120 | 0.040 | 0.120 | 0.000 | 0.000 | 0.082 |
| Software-Recon | 0.000 | 0.040 | 0.020 | 0.000 | 0.000 | 0.013 | 0.000 | 0.020 | 0.000 | 0.000 | 0.009 |
| Uniform-Random | 0.005 | 0.003 | 0.006 | 0.004 | 0.005 | 0.004 | 0.005 | 0.004 | 0.009 | 0.002 | 0.005 |
| JS-DynSlice | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |

## case009 Effect

`case009` is a hard case group where all methods score low relative to the first eight cases.

| rank | method | n | mean_score | std | mean_sec | llm_tokens | forced |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SimpleSink | 15 | 0.080 | 0.098 | 0.32 | 0 | 0 |
| 2 | LocAgent-JS | 15 | 0.067 | 0.094 | 156.71 | 7,214,035 | 10 |
| 3 | Direct-LLM | 15 | 0.060 | 0.178 | 699.08 | 1,438,536 | 0 |
| 4 | BM25-Static | 15 | 0.040 | 0.080 | 0.33 | 0 | 0 |
| 5 | Agentless-Loc | 15 | 0.013 | 0.050 | 873.07 | 1,157,386 | 0 |
| 6 | Exec-LLM | 15 | 0.013 | 0.050 | 111.94 | 269,556 | 0 |
| 7 | SWE-agent | 15 | 0.013 | 0.050 | 105.42 | 2,065,759 | 5 |
| 8 | Uniform-Random | 15 | 0.009 | 0.008 | 0.07 | 0 | 0 |
| 9 | Debugger-Agent | 15 | 0.000 | 0.000 | 61.94 | 1,214,531 | 0 |
| 10 | JS-DynSlice | 15 | 0.000 | 0.000 | 10.94 | 0 | 0 |
| 11 | LSI-FL | 15 | 0.000 | 0.000 | 22.71 | 0 | 0 |
| 12 | SITIR | 15 | 0.000 | 0.000 | 40.10 | 0 | 0 |
| 13 | Software-Recon | 15 | 0.000 | 0.000 | 28.53 | 0 | 0 |
| 14 | Uniform-Tracer | 15 | 0.000 | 0.000 | 0.44 | 0 | 0 |

## case010 Effect

`case010` is a hard case group where all methods score low relative to the first eight cases.

| rank | method | n | mean_score | std | mean_sec | llm_tokens | forced |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Exec-LLM | 15 | 0.193 | 0.267 | 76.82 | 244,707 | 0 |
| 2 | LocAgent-JS | 15 | 0.080 | 0.251 | 156.80 | 8,297,925 | 10 |
| 3 | Direct-LLM | 15 | 0.060 | 0.178 | 778.14 | 1,716,614 | 0 |
| 4 | SimpleSink | 15 | 0.040 | 0.080 | 0.29 | 0 | 0 |
| 5 | Agentless-Loc | 15 | 0.007 | 0.025 | 575.55 | 922,772 | 0 |
| 6 | Uniform-Random | 15 | 0.002 | 0.001 | 0.07 | 0 | 0 |
| 7 | BM25-Static | 15 | 0.000 | 0.000 | 0.40 | 0 | 0 |
| 8 | Debugger-Agent | 15 | 0.000 | 0.000 | 68.36 | 1,445,850 | 0 |
| 9 | JS-DynSlice | 15 | 0.000 | 0.000 | 12.47 | 0 | 0 |
| 10 | LSI-FL | 15 | 0.000 | 0.000 | 32.01 | 0 | 0 |
| 11 | SITIR | 15 | 0.000 | 0.000 | 49.71 | 0 | 0 |
| 12 | SWE-agent | 15 | 0.000 | 0.000 | 101.73 | 3,654,125 | 11 |
| 13 | Software-Recon | 15 | 0.000 | 0.000 | 33.34 | 0 | 0 |
| 14 | Uniform-Tracer | 15 | 0.000 | 0.000 | 0.49 | 0 | 0 |

## Interpretation

1. Direct prompting is strongest but costly. `Direct-LLM` remains rank 1, but its score advantage over `Exec-LLM` is now small while its wall time and token costs are much higher.
2. `Exec-LLM` is the strongest cost-performance point. It ranks second overall, uses only one model call per row, and is far cheaper than Direct-LLM or the code agents.
3. Code agents now complete reliably, but convergence is still an issue. `LocAgent-JS` and `SWE-agent` have no missing results, yet forced-submit counts remain high.
4. Debugger access alone does not guarantee localization quality. `Debugger-Agent` has the richest dynamic interface, but remains close to static diagnostics in mean score.
5. Trace/slicing baselines are informative negative controls. `JS-DynSlice` and `Software-Recon` do not recover the exact semantic anchor in these bundled JavaScript cases.

## Files

- Raw rows: `artifacts/case_runs/case*/raw.jsonl`
- Per-case summaries: `artifacts/case_runs/case*/summary.md`
- Current report: `artifacts/reports/methods_implementation_and_results_case001_case010.md`
