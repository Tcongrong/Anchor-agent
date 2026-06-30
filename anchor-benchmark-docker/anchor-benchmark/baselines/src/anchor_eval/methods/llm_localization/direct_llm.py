"""Direct-LLM — honest "just ask the strong model" lower bound (plan v5 §4.2.1 / §10.7).

No paper: this is the reference every reviewer expects, reported as a project
baseline (not a paper reproduction). FIXED 2-pass, NO agent loop, NO model-decided
navigation (that is what separates it from Agentless and the agents):

  pass-1 (shortlist): ALL candidate functions' signatures / one-line skeletons are
    sent in DETERMINISTIC chunks (file+offset order, chunk size B); the model marks
    relevant ids per chunk; the union is the shortlist S (capped at S_max).
  pass-2 (select): the full bodies of S are sent; the model returns one function.

No dynamic trace, no CDP, no retrieval, no cross-method intermediate. capability =
static; fidelity = task_adapted. Requires a backbone key; otherwise not-run.
"""
from __future__ import annotations
import json
import math
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...llm.client import LLMClient
from .._common import ANCHOR_DEF
from ..diagnostics.bm25_static import bm25_ranking

_STATIC_FORBIDDEN = {"run_page", "observe_output", "instrument_values", "set_breakpoint",
                     "read_sync_stack", "read_async_stack", "read_vars", "info_gain_probe",
                     "adaptive_breakpoint", "cross_round_async_graph", "value_flow_stitch",
                     "tc1_prior"}


def _skeleton(f):
    head = f.body[: f.body.find("{")] if "{" in f.body else f.body
    return " ".join(head.split())[:160]


@register_method
class DirectLLM(BaseLocalizer):
    name = "Direct-LLM"
    family = "llm_localization"
    paper_id = None            # honest lower bound, not a paper reproduction
    capability = "static"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set(_STATIC_FORBIDDEN)
    supervised = False

    def __init__(self, chunk_size=None, shortlist_max=25, body_chars=1800):
        self.client = LLMClient()
        self.B = chunk_size
        self.S_max = shortlist_max
        self.body_chars = body_chars

    def _chunk_size(self, funcs):
        if self.B:
            return self.B
        n = max(len(funcs), 1)
        avg_body = sum(len(f.body) for f in funcs) / n
        # Keep the number of first-pass LLM calls bounded on huge bundles while
        # still using smaller chunks for compact cases where signatures are cheap.
        target_calls = 12 if n > 2500 else 8 if n > 1000 else 5
        by_count = math.ceil(n / target_calls)
        by_size = 240 if avg_body > 2500 else 360 if avg_body > 1200 else 600
        return max(80, min(900, max(by_count, by_size)))

    def _mark_chunk(self, task, chunk, budget):
        lines = [f"- {f.func_id} ({f.name}): {_skeleton(f)}" for f in chunk]
        system = ("You shortlist candidate functions that could be the behaviour anchor in an "
                  "obfuscated browser bundle. " + ANCHOR_DEF + " Return strict JSON only.")
        user = (f"Task: {task.d}\nObservable: {json.dumps(task.observable)}\n\n"
                f"Function signatures:\n" + "\n".join(lines) +
                "\n\nReturn JSON {\"relevant\": [\"<func_id>\", ...]} (ids from this list only).")
        resp = self.client.call(self.name, task.task_id,
                                [{"role": "user", "content": user}], system=system, budget=budget,
                                response_format={"type": "json_object"})
        text = "".join(b.get("text", "") for b in resp.get("content", []) if b.get("type") == "text")
        try:
            obj = json.loads(text[text.find("{"): text.rfind("}") + 1])
            return [x for x in obj.get("relevant", []) if isinstance(x, str)]
        except Exception:
            return []

    def localize(self, task, fc, budget) -> Prediction:
        if not self.client.available():
            return Prediction(task.task_id, self.name, None, status="not_run", error="no_api_key")
        funcs = sorted(fc.functions, key=lambda f: (f.file, f.start))   # deterministic order
        by_id = fc.by_id()
        try:
            # pass-1: deterministic chunked shortlist (no model-decided navigation)
            shortlist, seen = [], set()
            chunk_size = self._chunk_size(funcs)
            pass1_calls = 0
            for c in range(0, len(funcs), chunk_size):
                pass1_calls += 1
                for fid in self._mark_chunk(task, funcs[c:c + chunk_size], budget):
                    if fid in by_id and fid not in seen:
                        seen.add(fid); shortlist.append(fid)
            bm = bm25_ranking(task, fc)
            if not shortlist:
                shortlist = bm[: self.S_max]
            shortlist = shortlist[: self.S_max]
            # pass-2: full bodies of the shortlist -> single function
            cand_text = [f"### {by_id[fid].func_id} ({by_id[fid].name})\n```js\n{by_id[fid].body[:self.body_chars]}\n```"
                         for fid in shortlist]
            system = ("You locate the single behaviour-anchor function. " + ANCHOR_DEF +
                      " Return strict JSON only.")
            user = (f"Task: {task.d}\nObservable: {json.dumps(task.observable)}\n\n"
                    f"Shortlisted functions:\n" + "\n".join(cand_text) +
                    "\n\nReturn JSON {\"top1\":\"<func_id>\",\"ranking\":[\"<func_id>\",...]}.")
            resp = self.client.call(self.name, task.task_id,
                                    [{"role": "user", "content": user}], system=system, budget=budget,
                                    response_format={"type": "json_object"})
            text = "".join(b.get("text", "") for b in resp.get("content", []) if b.get("type") == "text")
            obj = json.loads(text[text.find("{"): text.rfind("}") + 1])
            top1 = obj.get("top1")
            ranking = [fid for fid in obj.get("ranking", []) if fid in by_id] or shortlist
            if top1 in by_id and (not ranking or ranking[0] != top1):
                ranking = [top1] + [r for r in ranking if r != top1]
            ranking += [fid for fid in bm if fid not in set(ranking)]
            return Prediction(task.task_id, self.name, ranking[0], ranking=ranking,
                              budget_used=budget.finalize(),
                              artifacts={"passes": 2, "shortlist": len(shortlist),
                                         "chunk_size": chunk_size,
                                         "pass1_calls": pass1_calls,
                                         "candidate_count": len(funcs)})
        except Exception as e:
            bm = bm25_ranking(task, fc)
            return Prediction(task.task_id, self.name, bm[0] if bm else None, ranking=bm,
                              status="ok", error="llm_parse_failed: " + str(e)[:140],
                              budget_used=budget.finalize(),
                              artifacts={"fallback": "bm25_after_direct_llm_failure"})
