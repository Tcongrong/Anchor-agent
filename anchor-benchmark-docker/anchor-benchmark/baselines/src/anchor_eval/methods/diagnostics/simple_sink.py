"""SimpleSink (plan v5 §5): heuristic lower bound, diagnostic only.

Locate the sink call function, walk up the name-based call graph 2-3 hops, and
pick the shallowest non-utility field-constructing function near the sink. This
is exactly the kind of self-styled heuristic the v5 plan keeps OUT of the main
table (it has no paper and embeds a "shallowest near sink" bias);
it is retained only as a diagnostic floor. Falls back to BM25 when no sink
neighbourhood exists.
"""
from __future__ import annotations
import re
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from .._common import build_call_graph, is_sink_func, field_action
from .bm25_static import bm25_ranking

_UTIL = re.compile(r"(read|get|to|is|has|fmt|format|rotate|base36|base64|hex|digits|pad|clamp|"
                   r"encode|decode|hash|mix|xor|rol|ror)", re.I)


def _field_write(code):
    return bool(re.search(r"[{,]\s*[A-Za-z_$][\w$]*\s*:", code)) or bool(re.search(r"\.[A-Za-z_$][\w$]*\s*=", code))


@register_method
class SimpleSink(BaseLocalizer):
    name = "SimpleSink"
    family = "diagnostic"
    paper_id = None
    capability = "exec_aware"     # uses one observed sink location
    fidelity = "diagnostic"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = {"set_breakpoint", "read_sync_stack", "read_async_stack", "read_vars",
                 "instrument_values", "info_gain_probe", "adaptive_breakpoint",
                 "cross_round_async_graph", "value_flow_stitch", "tc1_prior"}
    supervised = False

    def localize(self, task, fc, budget) -> Prediction:
        funcs = fc.functions
        if not funcs:
            return Prediction(task.task_id, self.name, None, budget_used=budget.finalize())
        budget.charge("page_triggers", 1, hard=False)
        field, _ = field_action(task)
        _, callers, _ = build_call_graph(funcs)
        sink_idx = [i for i, f in enumerate(funcs) if is_sink_func(f)]
        if not sink_idx and field:
            sink_idx = [i for i, f in enumerate(funcs) if field in f.body]
        if not sink_idx:
            r = bm25_ranking(task, fc)
            return Prediction(task.task_id, self.name, r[0] if r else None, ranking=r, budget_used=budget.finalize())
        hop = {i: 0 for i in sink_idx}
        frontier = list(sink_idx)
        for h in range(1, 4):
            nxt = []
            for i in frontier:
                for j in callers[i]:
                    if j not in hop:
                        hop[j] = h; nxt.append(j)
            frontier = nxt
        scored = []
        for i, h in hop.items():
            if h == 0:
                continue
            f = funcs[i]
            lines = (f.body.count("\n") + 1)
            size_ok = 5 <= lines <= 300 or 80 <= len(f.body) <= 8000
            util_pen = 1 if (_UTIL.search(f.name) and len(f.body) < 200) else 0
            fw = 1 if _field_write(f.body) else 0
            flit = 1 if (field and field in f.body) else 0
            scored.append(((h, util_pen, -(1 if size_ok else 0), -fw, -flit, len(f.body)), i))
        if not scored:
            order = sorted(range(len(funcs)), key=lambda i: (0 if i in sink_idx else 1, len(funcs[i].body)))
        else:
            scored.sort(key=lambda x: x[0])
            order = [i for _, i in scored]
            seen = set(order)
            order += [i for i in sink_idx if i not in seen]
            seen |= set(sink_idx)
            order += [i for i in range(len(funcs)) if i not in seen]
        ranking = [funcs[i].func_id for i in order]
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, budget_used=budget.finalize())
