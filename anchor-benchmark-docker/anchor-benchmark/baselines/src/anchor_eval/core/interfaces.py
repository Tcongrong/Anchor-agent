"""Localizer protocol for the baseline suite.

The experiment axis is the **capability tier** (Static / Exec-aware /
Instrumented-Exec / Debugger); provenance/paper are attributes.
Every method declares:

  family    : classical | llm_localization | code_agent | matched_control |
              diagnostic
  paper_id  : citation key of the method it reproduces (None for honest baselines)
  capability: static | exec_aware | instrumented_exec | debugger
  fidelity  : original | faithful_reimplementation | task_adapted | diagnostic
  uses      : historical component flags kept for capability-matrix compatibility
  forbidden : runtime ops it must never perform (machine-checked, §10.2)
  supervised: whether fit() consumes train-fold labels (app-grouped CV)

Training-free methods no-op fit(); supervised methods only fit() on the train fold.
"""
from __future__ import annotations
from typing import Protocol, runtime_checkable
from .schema import Task, CandidateSet, Prediction
from .budget import BudgetManager

FAMILIES = ("classical", "llm_localization", "code_agent", "matched_control", "diagnostic")
CAPABILITIES = ("static", "exec_aware", "instrumented_exec", "debugger")
FIDELITIES = ("original", "faithful_reimplementation", "task_adapted", "diagnostic")


@runtime_checkable
class Localizer(Protocol):
    name: str
    family: str
    paper_id: str | None
    capability: str
    fidelity: str
    uses: dict
    forbidden: set
    supervised: bool

    def fit(self, train_tasks: list, train_candidates: dict) -> None: ...

    def localize(self, task: Task, fc: CandidateSet, budget: BudgetManager) -> Prediction: ...


class BaseLocalizer:
    """Convenience base: sane v5 metadata defaults + no-op fit."""
    name = "base"
    family = "diagnostic"
    paper_id = None
    capability = "static"
    fidelity = "diagnostic"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set()
    supervised = False
    needs_evidence = None   # None | "external" | "debugger" | "trace" | "slice" | "valueslice"

    def fit(self, train_tasks, train_candidates):
        return None

    def localize(self, task, fc, budget):
        raise NotImplementedError

    def make_gate(self):
        from .capability import CapabilityGate
        return CapabilityGate(self.name, self.capability, self.forbidden)

    def require_ops(self, *ops):
        """Assert at localize() entry that every runtime op this method will perform
        is authorised by its capability tier + forbidden set. A tier/forbidden that
        contradicts the method's actual behaviour raises CapabilityViolation BEFORE
        any browser launch (machine-checked §10.2 enforcement, not just an audit row)."""
        g = self.make_gate()
        for op in ops:
            g.check(op)
        return g
