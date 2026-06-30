"""Exec-LLM (plan v5 §5): diagnostic — "does one execution summary help?".

One standardized trigger, collect console/network/DOM, hand d + BM25 shortlist +
external artifacts to the backbone. No breakpoints / stacks / variable reads.
Reported as a diagnostic (not a main-table baseline): it isolates the marginal
value of appending a single external-execution summary to Direct-LLM.
Requires a backbone key; otherwise returns a not-run Prediction.
"""
from __future__ import annotations
import json
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...core.data import CASES_DIR
from ...llm.client import LLMClient
from ...runtime.collect import collect_external
from .._common import ANCHOR_DEF
from .bm25_static import bm25_ranking


def _extract_json_obj(text: str) -> dict:
    start, end = text.find("{"), text.rfind("}")
    if start < 0 or end < start:
        raise ValueError("response contained no visible JSON object")
    return json.loads(text[start:end + 1])


@register_method
class ExecLLM(BaseLocalizer):
    name = "Exec-LLM"
    family = "diagnostic"
    paper_id = None
    capability = "exec_aware"
    fidelity = "diagnostic"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = {"set_breakpoint", "read_sync_stack", "read_async_stack", "read_vars",
                 "instrument_values", "info_gain_probe", "adaptive_breakpoint",
                 "cross_round_async_graph", "value_flow_stitch", "tc1_prior"}
    supervised = False
    needs_evidence = "external"

    def __init__(self, shortlist_k=32):
        self.client = LLMClient()
        self.shortlist_k = shortlist_k

    def localize(self, task, fc, budget) -> Prediction:
        if not self.client.available():
            return Prediction(task.task_id, self.name, None, status="not_run", error="no_api_key")
        self.require_ops("run_page", "observe_output")
        budget.charge("page_triggers", 1, hard=False)
        ev = collect_external(task, fc, CASES_DIR / task.task_id).payload
        bm = bm25_ranking(task, fc)
        by_id = fc.by_id()
        cand_text = [f"### {by_id[fid].func_id} ({by_id[fid].name})\n```js\n{by_id[fid].body[:800]}\n```"
                     for fid in bm[: self.shortlist_k]]
        artifacts = {"console": ev.get("console", [])[:10], "requests": ev.get("requests", [])[:10],
                     "domMutations": ev.get("domMutations", 0)}
        system = ("You locate the behaviour-anchor function using the code shortlist AND the "
                  "external runtime artifacts observed after the interaction. " + ANCHOR_DEF +
                  " Return strict JSON only. Do not include reasoning, markdown, or prose.")
        user = (f"Task: {task.d}\nObservable: {json.dumps(task.observable)}\n\n"
                f"External runtime artifacts:\n```json\n{json.dumps(artifacts)[:2500]}\n```\n\n"
                f"Candidate functions:\n" + "\n".join(cand_text) +
                "\n\nReturn JSON {\"top1\":\"<func_id>\",\"ranking\":[\"<func_id>\",...]}.")
        try:
            resp = self.client.call(self.name, task.task_id,
                                    [{"role": "user", "content": user}], system=system, budget=budget,
                                    response_format={"type": "json_object"})
            text = "".join(b.get("text", "") for b in resp.get("content", []) if b.get("type") == "text")
            obj = _extract_json_obj(text)
            top1 = obj.get("top1")
            ranking = [fid for fid in obj.get("ranking", []) if fid in by_id] or bm[: self.shortlist_k]
            if top1 in by_id:
                ranking = [top1] + [r for r in ranking if r != top1]
            ranking += [fid for fid in bm if fid not in set(ranking)]
            return Prediction(task.task_id, self.name, ranking[0], ranking=ranking,
                              budget_used=budget.finalize(),
                              artifacts={"shortlist": self.shortlist_k,
                                         "runtime_console": len(artifacts["console"]),
                                         "runtime_requests": len(artifacts["requests"])})
        except Exception as e:
            # Exec-LLM is a diagnostic "execution summary + BM25 shortlist" method.
            # If the model emits hidden/empty text or malformed JSON, keep the
            # executable diagnostic result by falling back to the BM25 shortlist
            # instead of recording an abstention with no score.
            return Prediction(task.task_id, self.name, bm[0] if bm else None, ranking=bm,
                              status="ok", error="llm_parse_failed: " + str(e)[:140],
                              budget_used=budget.finalize(),
                              artifacts={"fallback": "bm25_after_exec",
                                         "shortlist": self.shortlist_k,
                                         "runtime_console": len(artifacts["console"]),
                                         "runtime_requests": len(artifacts["requests"])})
