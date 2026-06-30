"""BM25-Static (plan v5 §5): classic IR baseline over the function corpus.

Not a main-table method: it is the **LSI-FL appendix variant** (Okapi BM25 over
the same function doc-builder / tokenizer that LSI-FL reuses). Kept as a
diagnostic so the appendix can report term-frequency IR vs. latent-semantic IR
on the same obfuscated corpus. `bm25_ranking` is the shared lexical prior reused
as a deterministic fallback by several runtime methods.
"""
from __future__ import annotations
import math
from collections import defaultdict
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...core.data import tokenize
from .._common import doc_tokens


def bm25_ranking(task, fc, k1=1.5, b=0.75):
    funcs = fc.functions
    docs = [doc_tokens(f) for f in funcs]
    N = len(docs)
    if N == 0:
        return []
    df = defaultdict(int)
    for d in docs:
        for t in set(d):
            df[t] += 1
    avgdl = sum(len(d) for d in docs) / N
    idf = {t: math.log(1 + (N - n + 0.5) / (n + 0.5)) for t, n in df.items()}
    qset = set(tokenize(task.d))
    scored = []
    for i, d in enumerate(docs):
        tf = defaultdict(int)
        for t in d:
            if t in qset:
                tf[t] += 1
        dl = len(d) or 1
        s = sum(idf.get(t, 0.0) * (tf[t] * (k1 + 1)) / (tf[t] + k1 * (1 - b + b * dl / avgdl))
                for t in qset if tf[t])
        scored.append((s, -dl, i))
    scored.sort(key=lambda x: (-x[0], -x[1], x[2]))
    return [funcs[i].func_id for _, _, i in scored]


@register_method
class BM25Static(BaseLocalizer):
    name = "BM25-Static"
    family = "diagnostic"
    paper_id = None            # Okapi BM25 (Robertson); appendix IR variant, not main table
    capability = "static"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set()
    supervised = False

    def localize(self, task, fc, budget) -> Prediction:
        ranking = bm25_ranking(task, fc)
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, budget_used=budget.finalize())
