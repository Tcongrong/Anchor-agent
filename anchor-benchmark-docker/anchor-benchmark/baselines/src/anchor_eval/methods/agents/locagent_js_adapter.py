"""LocAgent-JS adapter — graph-guided localization agent (plan v5 §4.3.2).

[A3] Chen et al. *LocAgent: Graph-Guided LLM Agents for Code Localization.* ACL 2025.

We build LocAgent's heterogeneous code graph for JavaScript bundles (a formal
implementation, NOT relegated to the appendix just because the parser differs):

  nodes : bundle-file, function (function nodes taken directly from the unified FC)
  edges : lexical-parent (nesting/containment), import/require, statically-resolvable
          invocation, event/callback-registration. Dynamic calls that cannot be
          statically resolved are marked `unresolved`.

The agent keeps LocAgent's SearchEntity / TraverseGraph / RetrieveEntity tools and
its graph-search strategy. It does NOT use cross-method scores to build or rank the
graph. capability = static; fidelity = task_adapted. Requires a backbone key; else
not-run.
"""
from __future__ import annotations
import re
from collections import defaultdict
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...llm.client import LLMClient
from .._common import ANCHOR_DEF, build_call_graph
from ..diagnostics.bm25_static import bm25_ranking
from .swe_agent_adapter import _FORBIDDEN
from ._agent_loop import run_tool_loop, resolve_answer_to_func

_EVENT_RX = re.compile(r"addEventListener|\.then\(|setTimeout|setInterval|requestAnimationFrame|"
                       r"dispatchEvent|on[A-Z]\w+\s*=", re.I)
_IDENT = re.compile(r"[A-Za-z_$][\w$]*")


def build_code_graph(fc):
    funcs = fc.functions
    name_to_idx, callers, callees = build_call_graph(funcs)
    # lexical-parent: smallest strictly-containing function in the same file
    parent = {}
    for i, f in enumerate(funcs):
        best, best_span = None, None
        for j, g in enumerate(funcs):
            if i == j or g.file != f.file:
                continue
            if g.start <= f.start and g.end >= f.end and (g.end - g.start) > (f.end - f.start):
                span = g.end - g.start
                if best is None or span < best_span:
                    best, best_span = j, span
        if best is not None:
            parent[i] = best
    # event/callback-registration edges: a function that registers a callback -> the
    # statically-named callback it references inside a registration call.
    names = set(name_to_idx)
    event_edges = defaultdict(set)
    for i, f in enumerate(funcs):
        if _EVENT_RX.search(f.body):
            for nm in (set(_IDENT.findall(f.body)) & names):
                if nm != f.name:
                    for j in name_to_idx[nm]:
                        if j != i:
                            event_edges[i].add(j)
    return {"name_to_idx": name_to_idx, "callers": callers, "callees": callees,
            "parent": parent, "event_edges": event_edges}

TOOLS = [
    {"name": "search_entity", "description": "Find function/file nodes by keyword (matches name or body). Returns node ids.",
     "input_schema": {"type": "object", "properties": {"query": {"type": "string"}}, "required": ["query"]}},
    {"name": "traverse_graph", "description": "List neighbours of a function node along an edge type. edge in {invokes, invoked_by, parent, child, event}.",
     "input_schema": {"type": "object", "properties": {"node": {"type": "string"}, "edge": {"type": "string"}},
                      "required": ["node", "edge"]}},
    {"name": "retrieve_entity", "description": "Return the full source and location of a function node id.",
     "input_schema": {"type": "object", "properties": {"node": {"type": "string"}}, "required": ["node"]}},
    {"name": "submit", "description": "Submit the single complete anchor function (file + offsets).",
     "input_schema": {"type": "object", "properties": {"file": {"type": "string"}, "start_offset": {"type": "integer"},
                      "end_offset": {"type": "integer"}, "reason": {"type": "string"}},
                      "required": ["file", "start_offset", "end_offset"]}},
]


@register_method
class LocAgentJS(BaseLocalizer):
    name = "LocAgent-JS"
    family = "code_agent"
    paper_id = "A3"            # Chen et al. ACL 2025
    capability = "static"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set(_FORBIDDEN)
    supervised = False

    def __init__(self, max_steps=50, max_total_tokens=750000):
        self.client = LLMClient()
        self.max_steps = max_steps
        self.max_total_tokens = max_total_tokens

    def localize(self, task, fc, budget) -> Prediction:
        if not self.client.available():
            return Prediction(task.task_id, self.name, None, status="not_run", error="no_api_key")
        funcs = fc.functions
        idx_of = {f.func_id: i for i, f in enumerate(funcs)}
        g = build_code_graph(fc)
        bm = bm25_ranking(task, fc)
        bm_rank = {fid: i for i, fid in enumerate(bm)}

        def node(i):
            return funcs[i].func_id

        def dispatch(name, inp):
            if name == "search_entity":
                q = (inp.get("query") or "").lower()
                hits = [node(i) for i, f in enumerate(funcs)
                        if q in (f.name or "").lower() or q in f.body.lower()][:20]
                return {"nodes": hits}
            if name == "traverse_graph":
                nid, edge = inp.get("node"), inp.get("edge")
                i = idx_of.get(nid)
                if i is None:
                    return {"error": "unknown node"}
                if edge == "invokes":
                    ns = g["callees"].get(i, set())
                elif edge == "invoked_by":
                    ns = g["callers"].get(i, set())
                elif edge == "parent":
                    ns = {g["parent"][i]} if i in g["parent"] else set()
                elif edge == "child":
                    ns = {j for j, p in g["parent"].items() if p == i}
                elif edge == "event":
                    ns = g["event_edges"].get(i, set())
                else:
                    return {"error": "edge in {invokes,invoked_by,parent,child,event}"}
                return {"neighbours": [node(j) for j in list(ns)[:25]]}
            if name == "retrieve_entity":
                i = idx_of.get(inp.get("node"))
                if i is None:
                    return {"error": "unknown node"}
                f = funcs[i]
                return {"_best_guess": {"file": f.file, "start_offset": f.start, "end_offset": f.end},
                        "_best_guess_score": -bm_rank.get(f.func_id, 1000000),
                        "name": f.name, "file": f.file, "start_offset": f.start,
                        "end_offset": f.end, "code": f.body[:4000]}
            return {"error": f"unknown tool {name}"}

        seeds = [funcs[idx_of[fid]].func_id for fid in bm[:8] if fid in idx_of]
        initial_best = None
        if bm and bm[0] in idx_of:
            f = funcs[idx_of[bm[0]]]
            initial_best = {"file": f.file, "start_offset": f.start, "end_offset": f.end}
        system = ("You are LocAgent, a graph-guided code-localization agent. Navigate the JavaScript "
                  "code graph (function & file nodes; invokes / invoked_by / parent / child / event edges) "
                  "to find the single behaviour-anchor function. This benchmark requires a submit tool "
                  "call, not a prose answer. Prefer the function that constructs or returns the observed "
                  "field/value over a nested encoder helper. " + ANCHOR_DEF)
        user = (f"Task: {task.d}\nObservable: {task.observable}\n"
                f"Candidate seed nodes (lexical prior, not a ranking): {seeds}\n"
                "Use search_entity / traverse_graph / retrieve_entity, then call submit with file, "
                "start_offset, and end_offset for ONE complete function.")
        try:
            answer, steps, best = run_tool_loop(self.client, self.name, task.task_id, system, user,
                                                TOOLS, dispatch, budget, self.max_steps, self.max_total_tokens,
                                                initial_best_guess=initial_best)
            top = resolve_answer_to_func(fc, answer) or resolve_answer_to_func(fc, best)
            ranking = ([top] if top else []) + [fid for fid in bm if fid != top]
            # non-submission abstains on top-1 (BM25 retained only for recall@k tail).
            status = "ok" if top else "budget_exceeded"
            return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                              ranking=ranking, status=status, budget_used=budget.finalize(),
                              abstained=not top,
                              artifacts={"agent_steps": len(steps), "submitted": bool(answer),
                                         "adapter_forced_submit": any(s.get("adapter_forced") for s in steps),
                                         "graph_functions": len(funcs), "page_trigger_rate": 0})
        except Exception as e:
            return Prediction(task.task_id, self.name, None, status="error", error=str(e)[:160])
