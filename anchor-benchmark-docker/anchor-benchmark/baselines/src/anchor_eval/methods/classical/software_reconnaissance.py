"""Software-Reconnaissance — feature vs control differential (plan v5 §4.1.4 / §10.5).

[C6] Wilde & Scully. *Software Reconnaissance: Mapping Program Features to Code.*
J. Software Maintenance, 1995.

Core computation: `Feature_specific = Executed_feature − Executed_control`, located
strictly by the set difference. To suppress flaky functions we take
`Executed_feature = ∩(R_trace feature runs)` (stable) and
`Executed_control = ∪(R_trace control runs)` (conservative), per §10.5.

Control source priority (§4.1.4), NO hand-crafted control (never edit source /
delete listeners / mask requests): benchmark `control_actions` metadata, else a
non-target legitimate action if provided, else page-load-and-settle only. If the
control trace cannot be produced at all we record `control_scenario_unavailable`.

Whether this enters the main table depends on `control_scenario_unavailable` rate
(>40% → appendix only; SITIR then represents the dynamic family) — that gating is
applied at report time. capability = exec_aware; fidelity = task_adapted.
"""
from __future__ import annotations
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ..shared.executed_set import collect_runs
from ..diagnostics.bm25_static import bm25_ranking


@register_method
class SoftwareReconnaissance(BaseLocalizer):
    name = "Software-Recon"
    family = "classical"
    paper_id = "C6"            # Wilde & Scully 1995
    capability = "exec_aware"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = {"instrument_values", "set_breakpoint", "read_sync_stack",
                 "read_async_stack", "read_vars", "info_gain_probe",
                 "adaptive_breakpoint", "cross_round_async_graph", "value_flow_stitch",
                 "tc1_prior"}
    supervised = False
    needs_evidence = "trace"

    def __init__(self, r_trace=3):
        self.r_trace = r_trace

    def _control_spec(self, task):
        ca = (task.env or {}).get("control_actions")
        if isinstance(ca, list) and ca:
            return ca, "metadata"
        return "load", "page_load_only"      # §4.1.4 priority-3 control

    def localize(self, task, fc, budget) -> Prediction:
        self.require_ops("run_page", "observe_output")
        funcs = fc.functions
        feat_runs, feat_agg, feat_info = collect_runs(task, fc, r_trace=self.r_trace, control=None)
        cspec, csource = self._control_spec(task)
        ctrl_runs, _, ctrl_info = collect_runs(task, fc, r_trace=self.r_trace, control=cspec)
        budget.charge("page_triggers", feat_info["runs"] + ctrl_info["runs"], hard=False)

        diag = {"control_source": csource, "feature_runs": feat_info["runs"],
                "control_runs": ctrl_info["runs"]}
        if not feat_info["ok"]:
            return Prediction(task.task_id, self.name, None, ranking=[], status="error",
                              error="feature_trace_failed", budget_used=budget.finalize(),
                              artifacts={**diag, "control_scenario_unavailable": True})

        executed_feature = set.intersection(*feat_runs) if feat_runs else set()
        executed_control = set().union(*ctrl_runs) if ctrl_runs else set()
        control_unavailable = ctrl_info["runs"] == 0
        feature_specific = executed_feature - executed_control
        diag.update({
            "feature_size": len(executed_feature), "control_size": len(executed_control),
            "feature_specific_size": len(feature_specific),
            "overlap": len(executed_feature & executed_control),
            "control_scenario_unavailable": control_unavailable,
        })

        first_t = feat_agg["first_t"]
        # tie-break: first function entered after the trigger -> canonical file+offset
        # (NOT distance-to-sink, which would be a Ssink near-relative).
        ordered = sorted(feature_specific,
                         key=lambda i: (first_t.get(i, float("inf")), funcs[i].file, funcs[i].start))
        # append the rest only for recall@k completeness; top-1 stays in feature_specific.
        rest_pool = (executed_feature - feature_specific) | (set(range(len(funcs))) - executed_feature)
        rest = sorted(rest_pool, key=lambda i: (first_t.get(i, float("inf")), funcs[i].file, funcs[i].start))
        order = ordered + rest
        ranking = [funcs[i].func_id for i in order]
        abstained = False
        if not feature_specific:
            # the differential isolated nothing; degrade ranking to BM25 for recall@k
            # but abstain on the top-1 (this is exactly the "no useful control" failure
            # mode) so the headline is not floored at the lexical baseline.
            ranking = bm25_ranking(task, fc) or ranking
            diag["feature_specific_empty"] = True
            abstained = bool(ranking)
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, budget_used=budget.finalize(), artifacts=diag,
                          abstained=abstained)
