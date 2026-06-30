"""LSI-FL — Latent Semantic Indexing concept location (plan v5 §4.1.1 / §10.3).

[C1] Marcus, Sergeyev, Rajlich, Maletic. *An Information Retrieval Approach to
Concept Location in Source Code.* WCRE 2004.

Document unit = a complete candidate function. Document content = the source
lexical signal that survives minification (identifiers, property names, string
literals, comments, browser-API names, statically-called function names) — the
SAME tokenizer used for the corpus is applied to the behaviour description `d`,
with NO hand-built keyword expansion (that would inject a task-specific prior and break
fidelity). LSI math lives in `_lsi.py` (shared with SITIR): term×function TF-IDF,
truncated SVD, query fold-in, cosine ranking. Returns the top-1 complete function.

This is the "honest upper bound for a text method": explicitly ALLOWED to use
surviving string literals / standard API names; FORBIDDEN to execute, use sink
distance, call-graph propagation, target-field rewards, or any structural
prior. capability = static; fidelity = faithful_reimplementation.
"""
from __future__ import annotations
import numpy as np
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ._lsi import lsi_scores
from ..diagnostics.bm25_static import bm25_ranking


@register_method
class LSIFeatureLocation(BaseLocalizer):
    name = "LSI-FL"
    family = "classical"
    paper_id = "C1"            # Marcus et al. WCRE 2004
    capability = "static"
    fidelity = "faithful_reimplementation"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = {"run_page", "observe_output", "instrument_values", "set_breakpoint",
                 "read_sync_stack", "read_async_stack", "read_vars", "info_gain_probe",
                 "adaptive_breakpoint", "cross_round_async_graph", "value_flow_stitch",
                 "tc1_prior"}
    supervised = False

    # dimensions frozen on the held-out app group (§10.3); appendix reports {100,200,300}.
    def __init__(self, dimensions=200):
        self.dimensions = dimensions

    def localize(self, task, fc, budget) -> Prediction:
        funcs = fc.functions
        if not funcs:
            return Prediction(task.task_id, self.name, None, budget_used=budget.finalize())
        scores, diag = lsi_scores(task, fc, self.dimensions)
        # neutral tie-break: equal-score functions ordered by canonical file+offset
        order = sorted(range(len(funcs)), key=lambda i: (-scores[i], funcs[i].file, funcs[i].start))
        ranking = [funcs[i].func_id for i in order]
        # deterministic fallback only if LSI produced an all-zero space
        if not np.any(scores):
            ranking = bm25_ranking(task, fc) or ranking
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, budget_used=budget.finalize(), artifacts=diag)
