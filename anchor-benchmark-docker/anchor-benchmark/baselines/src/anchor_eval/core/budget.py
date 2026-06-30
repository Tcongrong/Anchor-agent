"""Unified budget + per-task audit (plan v2 §2.7)."""
from __future__ import annotations
import time

DIMENSIONS = [
    "page_triggers", "distinct_breakpoints", "breakpoints_attempted",
    "breakpoints_set", "breakpoints_failed", "pause_hits", "async_stack_reads",
    "object_property_reads", "instrumented_events", "bfs_nodes", "llm_input_tokens",
    "llm_output_tokens", "llm_total_tokens", "llm_calls", "tool_steps", "wall_clock_sec",
]


class BudgetExceeded(RuntimeError):
    def __init__(self, kind, limit, used):
        super().__init__(f"budget {kind} exceeded: limit={limit} used={used}")
        self.kind, self.limit, self.used = kind, limit, used


class BudgetManager:
    def __init__(self, method: str, task_id: str, limits: dict | None = None):
        self.method = method
        self.task_id = task_id
        self.limits = dict(limits or {})
        self.used = {d: 0 for d in DIMENSIONS}
        self._t0 = time.time()
        self.distinct_bp = set()

    def charge(self, kind: str, n: int = 1, note: str | None = None, hard: bool = True):
        if kind not in self.used:
            self.used[kind] = 0
        self.used[kind] += n
        lim = self.limits.get(kind)
        if lim is not None and self.used[kind] > lim:
            if hard:
                raise BudgetExceeded(kind, lim, self.used[kind])
        return self.used[kind]

    def mark_distinct_breakpoint(self, key):
        self.distinct_bp.add(key)
        self.used["distinct_breakpoints"] = len(self.distinct_bp)
        lim = self.limits.get("distinct_breakpoints")
        if lim is not None and self.used["distinct_breakpoints"] > lim:
            raise BudgetExceeded("distinct_breakpoints", lim, self.used["distinct_breakpoints"])

    def finalize(self):
        self.used["wall_clock_sec"] = round(time.time() - self._t0, 2)
        return self.snapshot()

    def snapshot(self) -> dict:
        return {k: v for k, v in self.used.items() if v}

    def audit_row(self) -> dict:
        row = {"task_id": self.task_id, "method": self.method}
        row.update(self.used)
        return row
