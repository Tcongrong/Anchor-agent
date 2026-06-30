"""Uniform-Tracer (plan v5 §5): demoted to a diagnostic, reuses the shared collector.

Function-entry instrumentation + a non-LLM score over the trace (call frequency +
temporal proximity to the sink + value-construction prior, sink penalised). In v5
this is no longer a main-table baseline — its execution-set collection role moved
to methods.shared.executed_set, and SITIR provides the principled exec-aware
classical comparison. Kept as a diagnostic for the appendix.
"""
from __future__ import annotations
import re
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from .._common import is_sink_func
from .bm25_static import bm25_ranking
from ..shared.executed_set import executed_indices

_TOKPFX = re.compile(r"['\"]([a-z]{2,4})_")


def _value_prior(code):
    s = 0.0
    if "`" in code: s += 0.4
    if re.search(r"<<|>>>|\^|&(?!&)", code): s += 0.3
    if re.search(r"TextEncoder|btoa|crypto|charCodeAt|Uint8Array", code, re.I): s += 0.3
    if _TOKPFX.search(code): s += 0.3
    if re.search(r"[{,]\s*[A-Za-z_$][\w$]*\s*:", code): s += 0.2
    return s


@register_method
class UniformTracer(BaseLocalizer):
    name = "Uniform-Tracer"
    family = "diagnostic"
    paper_id = None
    capability = "instrumented_exec"
    fidelity = "diagnostic"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = {"set_breakpoint", "read_sync_stack", "read_async_stack", "read_vars",
                 "info_gain_probe", "adaptive_breakpoint", "cross_round_async_graph",
                 "value_flow_stitch", "tc1_prior"}
    supervised = False
    needs_evidence = "trace"

    def __init__(self, r_trace=1):
        self.r_trace = r_trace

    def localize(self, task, fc, budget) -> Prediction:
        self.require_ops("run_page", "observe_output")
        funcs = fc.functions
        executed, info = executed_indices(task, fc, r_trace=self.r_trace)
        budget.charge("page_triggers", max(info["runs"], 1), hard=False)
        if not info["ok"] or not executed:
            r = bm25_ranking(task, fc)
            return Prediction(task.task_id, self.name, r[0] if r else None, ranking=r,
                              status="ok" if r else "error",
                              budget_used=budget.finalize(), artifacts={"trace_ok": False})
        count, last_t = info["count"], info["last_t"]
        sink_idx = {i for i, f in enumerate(funcs) if is_sink_func(f)}
        sink_times = [last_t[i] for i in sink_idx if i in last_t]
        sink_t = max(sink_times) if sink_times else (max(last_t.values()) if last_t else 0)
        span = (max(last_t.values()) - min(last_t.values())) if len(last_t) > 1 else 1.0
        span = span or 1.0
        scores = {}
        for i, t in last_t.items():
            prox = 1.0 - min(abs(sink_t - t), span) / span
            sc = (0.6 * min(count[i], 5) / 5 + 1.0 * prox
                  + 1.0 * _value_prior(funcs[i].body) - 2.0 * (1 if i in sink_idx else 0))
            scores[i] = sc
        order = sorted(scores, key=lambda i: -scores[i])
        bm = bm25_ranking(task, fc)
        rest = [fc.index_of(fid) for fid in bm if fc.index_of(fid) not in set(order)]
        ranking = [funcs[i].func_id for i in (order + rest)]
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, budget_used=budget.finalize(),
                          artifacts={"executed_funcs": len(executed)})
