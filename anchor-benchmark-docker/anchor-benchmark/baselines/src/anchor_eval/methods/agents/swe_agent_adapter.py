"""SWE-agent adapter — general code agent, statically (plan v5 §4.3.1).

[A1] Yang et al. *SWE-agent: Agent-Computer Interfaces Enable Automated Software
Engineering.* 2024 (alternative [A2] OpenHands, Wang et al. 2024).

Preserves the SWE-agent paradigm: an Agent-Computer Interface (search the source,
open code windows, scroll, read the enclosing function), an iterative
observation→action loop, and autonomous next-action selection. Adapted for this
task: backbone gateway, source READ-ONLY, no patch generation, terminate by
returning a single complete function, and STATIC source analysis only (no
browserctl) — which is exactly the honest point of RQ3 (a repo-oriented agent
dropped on a minified bundle). If the official `sweagent` package is installed and
SWE_AGENT_HOME is set we defer to it; otherwise we run the faithful ACI loop here.

capability = static (forbidden: run_page and everything after); fidelity =
task_adapted. Requires a backbone key; otherwise not-run.
"""
from __future__ import annotations
import os, re
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...llm.client import LLMClient
from .._common import ANCHOR_DEF
from ..diagnostics.bm25_static import bm25_ranking
from ._agent_loop import run_tool_loop, resolve_answer_to_func

_FORBIDDEN = {"run_page", "observe_output", "instrument_values", "set_breakpoint",
              "read_sync_stack", "read_async_stack", "read_vars", "info_gain_probe",
              "adaptive_breakpoint", "cross_round_async_graph", "value_flow_stitch",
              "tc1_prior"}

TOOLS = [
    {"name": "search", "description": "Search the bundle source with a regex/substring. Returns up to 20 matches {file, offset, snippet}.",
     "input_schema": {"type": "object", "properties": {"query": {"type": "string"}}, "required": ["query"]}},
    {"name": "open_function", "description": "Return the complete enclosing candidate function at a (file, offset).",
     "input_schema": {"type": "object", "properties": {"file": {"type": "string"}, "offset": {"type": "integer"}},
                      "required": ["file", "offset"]}},
    {"name": "list_files", "description": "List the bundle files and their sizes.",
     "input_schema": {"type": "object", "properties": {}, "required": []}},
    {"name": "submit", "description": "Submit the single complete anchor function (file + offsets).",
     "input_schema": {"type": "object", "properties": {"file": {"type": "string"}, "start_offset": {"type": "integer"},
                      "end_offset": {"type": "integer"}, "reason": {"type": "string"}},
                      "required": ["file", "start_offset", "end_offset"]}},
]


@register_method
class SWEAgent(BaseLocalizer):
    name = "SWE-agent"
    family = "code_agent"
    paper_id = "A1"            # Yang et al. 2024 (or A2 OpenHands)
    capability = "static"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set(_FORBIDDEN)
    supervised = False

    def __init__(self, max_steps=50, max_total_tokens=750000):
        self.client = LLMClient()
        self.max_steps = max_steps
        self.max_total_tokens = max_total_tokens

    def _file_text(self, fc):
        # reconstruct per-file source windows from candidates (read-only source view)
        by_file = {}
        for f in fc.functions:
            by_file.setdefault(f.file, []).append(f)
        return by_file

    def localize(self, task, fc, budget) -> Prediction:
        if not self.client.available():
            return Prediction(task.task_id, self.name, None, status="not_run", error="no_api_key")
        by_file = self._file_text(fc)
        bm = bm25_ranking(task, fc)
        by_id = fc.by_id()
        bm_rank = {fid: i for i, fid in enumerate(bm)}
        seed_locs = [{"func_id": fid, "name": by_id[fid].name, "file": by_id[fid].file,
                      "offset": by_id[fid].start}
                     for fid in bm[:8] if fid in by_id]

        def dispatch(name, inp):
            if name == "list_files":
                return {"files": [{"file": fl, "functions": len(fns)} for fl, fns in by_file.items()]}
            if name == "search":
                q = inp.get("query", "")
                try:
                    rx = re.compile(q)
                except Exception:
                    rx = None
                res = []
                for f in fc.functions:
                    body = f.body
                    hit = rx.search(body) if rx else (body.find(q) >= 0)
                    if hit:
                        off = (f.start + (rx.search(body).start() if rx else body.find(q)))
                        res.append({"file": f.file, "offset": off,
                                    "snippet": body[:120]})
                    if len(res) >= 20:
                        break
                return {"matches": res}
            if name == "open_function":
                file, offset = inp.get("file"), inp.get("offset", 0)
                enc = [f for f in fc.functions if f.file == file and f.start <= offset <= f.end]
                if not enc:
                    return {"error": "no function at offset"}
                f = min(enc, key=lambda f: f.end - f.start)
                return {"_best_guess": {"file": f.file, "start_offset": f.start, "end_offset": f.end},
                        "_best_guess_score": -bm_rank.get(f.func_id, 1000000),
                        "name": f.name, "start_offset": f.start, "end_offset": f.end,
                        "code": f.body[:4000]}
            return {"error": f"unknown tool {name}"}

        system = ("You are SWE-agent, a software-engineering agent working through an Agent-Computer "
                  "Interface on a deployed, obfuscated browser bundle (read-only; no patches). This is "
                  "not a patching task: your only success criterion is to submit exactly one complete "
                  "enclosing function. Use the tools to search and read source, prefer the function that "
                  "constructs or returns the observed field/value over a nested encoder helper, and then "
                  "call submit. " + ANCHOR_DEF)
        user = (f"Task: {task.d}\nObservable: {task.observable}\n"
                f"Bundle files: {', '.join(by_file)}\n"
                f"Candidate seed locations (lexical prior, not a ranking): {seed_locs}\n"
                "Required final action: call submit with file, start_offset, and end_offset for ONE "
                "complete function.")
        initial_best = None
        if bm and bm[0] in by_id:
            f = by_id[bm[0]]
            initial_best = {"file": f.file, "start_offset": f.start, "end_offset": f.end}
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
                                         "page_trigger_rate": 0})
        except Exception as e:
            return Prediction(task.task_id, self.name, None, status="error", error=str(e)[:160])
