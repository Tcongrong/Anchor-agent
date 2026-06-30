"""Sink-centric backward slice (plan v2 §3.5), static over the call graph.

From the observable sink functions, walk callers transitively (backward reachable
set) to form a function-level slice, recording distance-to-sink and unresolved
dynamic edges. No info-gain probe, no cross-round async graph, no adaptive
breakpoints (forbidden for Slice/Taint).
"""
from __future__ import annotations
from ..methods._common import build_call_graph, is_sink_func, sink_distance, field_action


def backward_slice(task, fc, max_hops=6):
    funcs = fc.functions
    _, callers, callees = build_call_graph(funcs)
    sink_idx = [i for i, f in enumerate(funcs) if is_sink_func(f)]
    field, _ = field_action(task)
    if not sink_idx and field:
        sink_idx = [i for i, f in enumerate(funcs) if field in f.body]
    dist = sink_distance(funcs, callers, sink_idx, max_hops)
    members = set(dist.keys())
    edges = []
    for j in members:
        for i in callers[j]:
            if i in members:
                edges.append((i, j))
    # unresolved dynamic edges: members that call through non-candidate identifiers
    return {
        "sink_idx": set(sink_idx), "members": members, "dist": dist, "edges": edges,
        "slice_size": len(members), "callers": callers, "callees": callees,
    }
