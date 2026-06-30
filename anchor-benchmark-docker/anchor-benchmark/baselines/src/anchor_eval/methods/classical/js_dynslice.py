"""JS-DynSlice — trace-based dynamic backward slice (plan v5 §4.1.3 / §10.6).

Algorithm core [C3] Korel & Laski, *Dynamic Program Slicing*, IPL 1988; JS/Web
modelling [C4] Maras et al. ASE 2011, [C5] Ye et al. SANER 2016.

We instrument a SINGLE execution at function granularity
(node/value_trace.mjs: entry argument fingerprints + return-value
fingerprints over a content-hashed shadow), build the dynamic value-flow graph
(consumer function -> producer function for each value hand-off), then do a
backward BFS from the observable criterion (the value written into the request
body / observable field) to the functions that produced it.

Scope (task_adapted, faithful to §4.1.3's explicit non-promises): trace-based,
function-level output granularity, NO async stitching. By construction it CANNOT
cross native/opaque transforms (SubtleCrypto.digest, TextEncoder, native JSON,
WASM): those values have no JS-level def event, so the backward chain breaks
there, so it cannot bridge the gap. Output mapping is neutral (no "first
non-infrastructure function" rule). It reports anchor_in_slice,
backward_path_reaches_target, avg path length, slice_truncated, and whether the
break point was a native transform.
"""
from __future__ import annotations
import json, math
from collections import defaultdict
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...core.data import CASES_DIR
from ...runtime.collect import collect_valueslice
from .._common import field_action
from ..diagnostics.bm25_static import bm25_ranking


def _fnv1a(s: str) -> str:
    h = 2166136261
    for ch in s:
        h ^= ord(ch) & 0xFFFF
        h = (h * 16777619) & 0xFFFFFFFF
    return format(h, "x")


def _fp_scalar(v):
    """Replicate node/value_trace.mjs __VFP for scalars so criterion values match."""
    if v is None:
        return None
    if isinstance(v, bool):
        return "b:" + ("true" if v else "false")
    if isinstance(v, str):
        return ("s:" + v) if len(v) <= 64 else ("s#" + _fnv1a(v) + ":" + str(len(v)))
    if isinstance(v, int):
        return "n:" + str(v)
    if isinstance(v, float):
        return "n:" + (str(int(v)) if v.is_integer() else repr(v))
    return None


def _entropy(s):
    if not s:
        return 0.0
    from collections import Counter
    n = len(s)
    return -sum((c / n) * math.log2(c / n) for c in Counter(s).values())


def _criterion_values(payload, task):
    """Scalar values observed at the sink that are plausible constructed outputs.
    Returns (all_fps:set, primary_fp). primary = the observable field value if
    present, else the highest-entropy long string in the request body."""
    field, _ = field_action(task)
    all_vals, primary = [], None

    def _add(k, v):
        if isinstance(v, (str, int, float, bool)):
            all_vals.append(v)
            nonlocal_set(k, v)

    def nonlocal_set(k, v):
        nonlocal primary
        if field and k == field:
            primary = v

    for r in payload.get("requests", []):
        body = r.get("bodySample")
        if body:
            try:
                obj = json.loads(body)
            except Exception:
                obj = None
            if isinstance(obj, dict):
                for k, v in obj.items():
                    _add(k, v)
            if isinstance(body, str) and len(body) >= 8:
                all_vals.append(body)
        # query-string params (fingerprints/tokens often ride here, not in a POST body)
        url = r.get("url", "") or ""
        if "?" in url:
            for pair in url.split("?", 1)[1].split("&"):
                if "=" in pair:
                    k, v = pair.split("=", 1)
                    if len(v) >= 6:
                        _add(k, v)
        # long / high-entropy header values (signatures, derived tokens)
        for hk, hv in (r.get("headers") or {}).items():
            if isinstance(hv, str) and len(hv) >= 12:
                all_vals.append(hv); nonlocal_set(hk, hv)
    # console-emitted constructed values
    for c in payload.get("console", []):
        txt = c.get("text", "") or ""
        if 8 <= len(txt) <= 200:
            all_vals.append(txt)
    if primary is None:
        strs = [v for v in all_vals if isinstance(v, str) and len(v) >= 8]
        if strs:
            primary = max(strs, key=lambda s: (_entropy(s), len(s)))
    fps = {fp for v in all_vals if (fp := _fp_scalar(v))}
    return fps, _fp_scalar(primary)


@register_method
class JSDynSlice(BaseLocalizer):
    name = "JS-DynSlice"
    family = "classical"
    paper_id = "C3"            # Korel-Laski 1988 (+ C4 Maras'11, C5 Ye'16 for JS/Web)
    capability = "instrumented_exec"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = {"set_breakpoint", "info_gain_probe", "adaptive_breakpoint",
                 "cross_round_async_graph", "value_flow_stitch", "tc1_prior"}
    supervised = False
    needs_evidence = "valueslice"

    def __init__(self, max_events=200000, max_bfs_nodes=4000):
        self.max_events = max_events
        self.max_bfs_nodes = max_bfs_nodes

    def localize(self, task, fc, budget) -> Prediction:
        self.require_ops("run_page", "observe_output", "instrument_values")
        funcs = fc.functions
        ev = collect_valueslice(task, fc, CASES_DIR / task.task_id, self.max_events).payload
        budget.charge("page_triggers", 1, hard=False)
        budget.charge("instrumented_events", len(ev.get("events", [])), hard=False)
        diag = {"slice_truncated": bool(ev.get("truncated")), "events": len(ev.get("events", []))}
        if not ev.get("ok") or not ev.get("events"):
            r = bm25_ranking(task, fc)
            return Prediction(task.task_id, self.name, r[0] if r else None, ranking=r,
                              status="ok" if r else "error", error=None if ev.get("ok") else ev.get("error"),
                              budget_used=budget.finalize(), artifacts={**diag, "trace_ok": False},
                              abstained=bool(r))

        main_rel = ev.get("mainBundleRel")
        off_to_idx = {f.start: i for i, f in enumerate(funcs) if f.file == main_rel}

        # producers[fp] -> list of (ord, idx) ; per-execution arg uses for edges
        producers = defaultdict(list)
        enters = []   # (idx, ord, [argfp,...])
        for e in ev["events"]:
            kind, off, order, data = e[0], e[1], e[2], e[3]
            idx = off_to_idx.get(off)
            if idx is None:
                continue
            if kind == 1:            # return: a def of value `data`
                if data is not None:
                    producers[data].append((order, idx))
            else:                    # enter: arg uses
                enters.append((idx, order, [a for a in (data or []) if a is not None]))
        for fp in producers:
            producers[fp].sort()

        def latest_producer(fp, before_ord):
            lst = producers.get(fp)
            if not lst:
                return None
            lo, hi, best = 0, len(lst) - 1, None
            while lo <= hi:
                mid = (lo + hi) // 2
                if lst[mid][0] < before_ord:
                    best = lst[mid][1]; lo = mid + 1
                else:
                    hi = mid - 1
            return best

        # data-dependency edges: consumer function idx -> producer function idx
        depends = defaultdict(set)
        edge_count = defaultdict(int)
        for idx_c, ord_c, argfps in enters:
            for fp in argfps:
                p = latest_producer(fp, ord_c)
                if p is not None and p != idx_c:
                    depends[idx_c].add(p)
                    edge_count[idx_c] += 1; edge_count[p] += 1

        crit_fps, primary_fp = _criterion_values(ev, task)
        # criterion functions: those that produced a criterion value (def of crit fp)
        crit_funcs = set()
        for fp in crit_fps:
            for _, idx in producers.get(fp, []):
                crit_funcs.add(idx)
        # native/opaque break: the primary observed output value has no JS producer.
        # Only trust this as a genuine native boundary when the trace was NOT truncated
        # (a capped trace can drop the producer event and mimic a native break).
        break_at_native = bool(primary_fp) and not producers.get(primary_fp)
        diag["break_at_native"] = break_at_native
        diag["break_at_native_confident"] = break_at_native and not diag["slice_truncated"]
        diag["criterion_values"] = len(crit_fps)

        # backward BFS over depends edges from the criterion functions
        slice_set, depth = set(crit_funcs), {i: 0 for i in crit_funcs}
        frontier = list(crit_funcs)
        while frontier and len(slice_set) < self.max_bfs_nodes:
            nxt = []
            for i in frontier:
                for j in depends.get(i, ()):
                    if j not in slice_set:
                        slice_set.add(j); depth[j] = depth[i] + 1; nxt.append(j)
            frontier = nxt
        budget.charge("bfs_nodes", len(slice_set), hard=False)

        reaches = len(slice_set) > 0
        avg_path = (sum(depth.values()) / len(depth)) if depth else 0.0
        diag.update({"slice_size": len(slice_set), "backward_path_reaches_target": reaches,
                     "avg_backward_path_len": round(avg_path, 2),
                     "n_criterion_functions": len(crit_funcs)})

        if not slice_set:
            # the backward slice reached nothing (typically a native-transform break):
            # honest miss — degrade ranking to BM25 for recall@k but flag it.
            r = bm25_ranking(task, fc)
            return Prediction(task.task_id, self.name, r[0] if r else None, ranking=r,
                              budget_used=budget.finalize(),
                              artifacts={**diag, "slice_empty": True}, abstained=bool(r))

        # neutral output: prefer functions containing the criterion or its nearest data
        # definition (smallest BFS depth), tie by slice-edge coverage, tie file+offset.
        order = sorted(slice_set,
                       key=lambda i: (depth.get(i, 1 << 30), -edge_count.get(i, 0),
                                      funcs[i].file, funcs[i].start))
        rest = sorted((i for i in range(len(funcs)) if i not in slice_set),
                      key=lambda i: (-edge_count.get(i, 0), funcs[i].file, funcs[i].start))
        ranking = [funcs[i].func_id for i in (order + rest)]
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, budget_used=budget.finalize(), artifacts=diag)
