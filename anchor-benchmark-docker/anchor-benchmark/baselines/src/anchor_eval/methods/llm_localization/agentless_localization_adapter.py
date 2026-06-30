"""Agentless-Loc — hierarchical LLM localization (plan v5 §4.2.2 / §10.7).

[L1] Xia, Deng, Dunn, Zhang. *Agentless: Demystifying LLM-based Software
Engineering Agents.* 2024.

We keep ONLY the localization stages of Agentless (no repair / patch sampling /
test generation / validation) and reproduce its hierarchical narrowing. Agentless
localizes file -> related elements -> fine-grained edit locations; on a single
minified bundle there are no files, so per §4.2.2 the file layer becomes a
**bundle-chunk layer**:

  coarse: prune to relevant bundle chunks (regions of contiguous candidates)
  mid:    within kept chunks, pick the suspicious functions (by skeleton)
  fine:   read full bodies of the suspicious set, return the single function

This is Agentless's multi-stage prompting (>2 passes allowed), reusing its staged
prompt shape + a robust id parser, with only the model gateway, JS function
extraction, output format and stop point (complete function) adapted. No dynamic
trace, no CDP, no cross-method ranking, no self-written RAG, no adaptive breakpoints.
capability = static; fidelity = task_adapted. Requires a backbone key; else not-run.
"""
from __future__ import annotations
import json
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...llm.client import LLMClient
from .._common import ANCHOR_DEF
from .direct_llm import _skeleton, _STATIC_FORBIDDEN
from ..diagnostics.bm25_static import bm25_ranking


def _parse_ids(text, valid):
    try:
        obj = json.loads(text[text.find("{"): text.rfind("}") + 1])
    except Exception:
        return []
    for key in ("relevant", "chunks", "functions", "ids", "ranking"):
        if key in obj and isinstance(obj[key], list):
            return [x for x in obj[key] if x in valid]
    return []


@register_method
class AgentlessLoc(BaseLocalizer):
    name = "Agentless-Loc"
    family = "llm_localization"
    paper_id = "L1"            # Xia et al. 2024
    capability = "static"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set(_STATIC_FORBIDDEN)
    supervised = False

    def __init__(self, region_size=80, max_regions=4, max_suspicious=20, body_chars=1800):
        self.client = LLMClient()
        self.region_size = region_size
        self.max_regions = max_regions
        self.max_suspicious = max_suspicious
        self.body_chars = body_chars

    def _coarse(self, task, regions, budget):
        desc = []
        for rid, fns in regions:
            names = ", ".join(f.name for f in fns[:12])
            desc.append(f"- {rid} ({len(fns)} functions): {names}")
        system = ("Stage 1 (file/chunk localization, Agentless). Select the bundle chunks most "
                  "likely to contain the behaviour anchor. " + ANCHOR_DEF + " Return strict JSON.")
        user = (f"Task: {task.d}\nObservable: {json.dumps(task.observable)}\n\n"
                f"Bundle chunks:\n" + "\n".join(desc) +
                "\n\nReturn JSON {\"chunks\": [\"<chunk_id>\", ...]} (most-relevant first).")
        resp = self.client.call(self.name, task.task_id,
                                [{"role": "user", "content": user}], system=system, budget=budget,
                                response_format={"type": "json_object"})
        text = "".join(b.get("text", "") for b in resp.get("content", []) if b.get("type") == "text")
        return _parse_ids(text, {rid for rid, _ in regions})

    def _mid(self, task, fns, budget):
        lines = [f"- {f.func_id} ({f.name}): {_skeleton(f)}" for f in fns]
        system = ("Stage 2 (related-element localization, Agentless). From these functions select the "
                  "suspicious ones that could be the anchor. " + ANCHOR_DEF + " Return strict JSON.")
        user = (f"Task: {task.d}\nObservable: {json.dumps(task.observable)}\n\n"
                f"Functions:\n" + "\n".join(lines) +
                "\n\nReturn JSON {\"functions\": [\"<func_id>\", ...]} (ids from this list).")
        resp = self.client.call(self.name, task.task_id,
                                [{"role": "user", "content": user}], system=system, budget=budget,
                                response_format={"type": "json_object"})
        text = "".join(b.get("text", "") for b in resp.get("content", []) if b.get("type") == "text")
        return _parse_ids(text, {f.func_id for f in fns})

    def _fine(self, task, by_id, suspicious, budget):
        cand_text = [f"### {by_id[fid].func_id} ({by_id[fid].name})\n```js\n{by_id[fid].body[:self.body_chars]}\n```"
                     for fid in suspicious]
        system = ("Stage 3 (fine-grained localization, Agentless). Choose the single anchor function. "
                  + ANCHOR_DEF + " Return strict JSON.")
        user = (f"Task: {task.d}\nObservable: {json.dumps(task.observable)}\n\n"
                f"Suspicious functions:\n" + "\n".join(cand_text) +
                "\n\nReturn JSON {\"top1\":\"<func_id>\",\"ranking\":[\"<func_id>\",...]}.")
        resp = self.client.call(self.name, task.task_id,
                                [{"role": "user", "content": user}], system=system, budget=budget,
                                response_format={"type": "json_object"})
        text = "".join(b.get("text", "") for b in resp.get("content", []) if b.get("type") == "text")
        obj = json.loads(text[text.find("{"): text.rfind("}") + 1])
        return obj.get("top1"), [x for x in obj.get("ranking", []) if x in by_id]

    def localize(self, task, fc, budget) -> Prediction:
        if not self.client.available():
            return Prediction(task.task_id, self.name, None, status="not_run", error="no_api_key")
        funcs = sorted(fc.functions, key=lambda f: (f.file, f.start))
        by_id = fc.by_id()
        bm = bm25_ranking(task, fc)
        regions = [(f"chunk_{i//self.region_size:03d}", funcs[i:i + self.region_size])
                   for i in range(0, len(funcs), self.region_size)]
        rmap = dict(regions)
        try:
            passes = 0
            kept = self._coarse(task, regions, budget); passes += 1
            kept = (kept or [rid for rid, _ in regions])[: self.max_regions]
            pool = [f for rid in kept for f in rmap.get(rid, [])]
            if not pool:
                pool = funcs
            suspicious, seen = [], set()
            for c in range(0, len(pool), 60):
                for fid in self._mid(task, pool[c:c + 60], budget):
                    if fid not in seen:
                        seen.add(fid); suspicious.append(fid)
                passes += 1
            if not suspicious:
                suspicious = [fid for fid in bm if fid in {f.func_id for f in pool}][: self.max_suspicious]
            suspicious = suspicious[: self.max_suspicious]
            top1, ranking = self._fine(task, by_id, suspicious, budget); passes += 1
            ranking = ranking or suspicious
            if top1 in by_id and (not ranking or ranking[0] != top1):
                ranking = [top1] + [r for r in ranking if r != top1]
            ranking += [fid for fid in bm if fid not in set(ranking)]
            return Prediction(task.task_id, self.name, ranking[0], ranking=ranking,
                              budget_used=budget.finalize(),
                              artifacts={"passes": passes, "kept_chunks": len(kept),
                                         "suspicious": len(suspicious)})
        except Exception as e:
            # Invalid/empty visible JSON is a model/protocol failure, not a
            # harness failure. Keep the deterministic static fallback so the
            # method remains scoreable under providers that spend the response
            # budget on hidden tokens.
            return Prediction(task.task_id, self.name, bm[0] if bm else None, ranking=bm,
                              status="ok", error="llm_parse_failed: " + str(e)[:140],
                              budget_used=budget.finalize(),
                              artifacts={"fallback": "bm25_after_agentless_failure"})
