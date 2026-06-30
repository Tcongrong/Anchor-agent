# Baseline Suite Plan

This plan tracks only external baselines and diagnostics for function-level
localization on the benchmark cases. Proposed-method experiments and component
ablations have been removed.

## Active Methods

| Method | Family | Capability | Role |
|---|---|---|---|
| LSI-FL | classical | static | Textual feature-location baseline |
| SITIR | classical | exec_aware | Executed-set plus IR baseline |
| Software-Recon | classical | exec_aware | Optional differential-execution baseline; report control quality |
| JS-DynSlice | classical | instrumented_exec | Trace-based dynamic backward slice baseline |
| Direct-LLM | llm_localization | static | Strong-model direct localization baseline |
| Agentless-Loc | llm_localization | static | Hierarchical LLM localization baseline |
| SWE-agent | code_agent | static | General code-agent localization baseline |
| LocAgent-JS | code_agent | static | JS-focused localization agent baseline |
| Debugger-Agent | matched_control | debugger | ReAct/CodeAct agent over CDP debugger tools |
| BM25-Static | diagnostic | static | Static lexical diagnostic |
| Exec-LLM | diagnostic | exec_aware | One execution-summary plus LLM diagnostic |
| SimpleSink | diagnostic | exec_aware | Sink-proximity diagnostic |
| Uniform-Tracer | diagnostic | instrumented_exec | Execution-trace diagnostic |
| Uniform-Random | diagnostic | static | Random lower bound |

## Removed Methods

The following methods are intentionally not implemented, registered, or run:

| Method | Status | Reason |
|---|---|---|
| OutputAware | Removed | Supervised reference; not part of the active comparison |
| FixedProbe-BM25 | Removed | Component-style ablation removed from scope |
| Anchor | Removed | Proposed-method experiments removed from this suite |
| TC1-only | Removed | Component ablation removed from scope |
| Anchor-noTC2 | Removed | Component ablation removed from scope |
| Anchor-noTC3 | Removed | Component ablation removed from scope |
| Anchor-noLoop | Removed | Component ablation removed from scope |

## Experiment Questions

1. Classical and dynamic baselines: compare LSI-FL, SITIR, Software-Recon, and
   JS-DynSlice. Report where dynamic execution helps and where trace slicing
   loses the relevant value-flow dependency.
2. LLM localization: compare Direct-LLM and Agentless-Loc, including token cost,
   wall-clock time, parse failures, and fallback frequency.
3. Code agents: compare SWE-agent, LocAgent-JS, and Debugger-Agent. Report
   submission rate, forced-submit rate, tool steps, debugger usage, token cost,
   and wall-clock time.
4. Diagnostics: report BM25-Static, Exec-LLM, SimpleSink, Uniform-Tracer, and
   Uniform-Random separately from main prior-art comparisons.

## Reporting Requirements

For every method and case group, report:

- mean score and standard deviation over repeats
- strict accuracy
- recall@k
- status counts: ok, error, budget_exceeded, not_run
- fallback and forced-submit counts
- LLM calls, input tokens, output tokens, total tokens
- wall-clock seconds
- dynamic evidence usage: page triggers, breakpoints, pause hits, tool steps

## Default Run Shape

The group runner executes one case group at a time. For a case group such as
`case001`, the default unit is:

- 5 tasks in the case group
- 3 repeats per task-method pair
- all active registered methods unless `--methods` or `--families` is supplied

`scripts/run_case_group_repeated.py` writes incremental `raw.jsonl`,
`status.json`, `summary.md`, `summary_by_method.jsonl`, and
`summary_by_task_method.jsonl` after each completed row.

## Current Scope Notes

- `Software-Recon` remains optional for the main table. If valid control
  scenarios are sparse or low quality, keep it in diagnostics/appendix style
  reporting.
- `JS-DynSlice` is retained even if scores are low, because its failure mode is
  informative for modern bundled JavaScript.
- Existing benchmark terminology still uses “anchor function” to name the target
  function in the oracle and grader. That is task terminology, not an active
  proposed-method experiment.
