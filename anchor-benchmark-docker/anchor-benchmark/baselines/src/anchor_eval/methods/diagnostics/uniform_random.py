"""Uniform-Random over FC (plan v5 §5): diagnostic lower bound."""
from __future__ import annotations
import hashlib, random
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction


@register_method
class UniformRandom(BaseLocalizer):
    name = "Uniform-Random"
    family = "diagnostic"
    paper_id = None
    capability = "static"
    fidelity = "diagnostic"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set()
    supervised = False

    def __init__(self, n_seeds=200):
        self.n_seeds = n_seeds

    def _ranking(self, task, fc, seed):
        h = hashlib.sha256(f"{task.task_id}|{seed}".encode()).hexdigest()
        rng = random.Random(int(h[:8], 16))
        idx = list(range(len(fc.functions)))
        rng.shuffle(idx)
        return [fc.functions[i].func_id for i in idx]

    def localize(self, task, fc, budget) -> Prediction:
        # representative ranking (seed 0); the runner averages metrics over seeds
        ranking = self._ranking(task, fc, 0)
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, budget_used=budget.finalize())
