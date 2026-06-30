"""Run every registered method on the first benchmark task only.

This is a wiring smoke test, not a paper-quality experiment run. It keeps LLM
agents on small step/chunk limits so we can verify the full method surface before
scheduling an expensive all-case panel.

Usage:
  python scripts/smoke_first_case.py
  python scripts/smoke_first_case.py Agentless-Loc Direct-LLM
"""
from __future__ import annotations

import json
import os
import sys
import time
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE / "src"))
os.environ.setdefault("PYTHONUTF8", "1")

from anchor_eval.core import data
from anchor_eval.core.budget import BudgetManager
from anchor_eval.core.grader import Grader
from anchor_eval.core.registry import get_methods
from anchor_eval.eval import metrics

import anchor_eval.methods._all  # noqa: F401


OUT = BASE / "artifacts" / "smoke" / "first_case_methods.jsonl"
KS = metrics.KS


def clean_method_logs(method: str, task_id: str):
    for root in (BASE / "artifacts" / "prompts", BASE / "artifacts" / "trajectories"):
        p = root / method / f"{task_id}.json"
        if p.exists():
            p.unlink()


def make_method(cls, n_funcs: int):
    """Instantiate with smoke-sized limits for expensive LLM agents."""
    if cls.name == "Direct-LLM":
        return cls(shortlist_max=12, body_chars=1000)
    if cls.name == "Agentless-Loc":
        return cls(region_size=80, max_regions=1, max_suspicious=8, body_chars=700)
    if cls.name in ("SWE-agent", "LocAgent-JS"):
        return cls(max_steps=3, max_total_tokens=30000)
    m = cls()
    if cls.name == "Debugger-Agent":
        m.budget_config = {**m.budget_config, "max_steps": 3, "bp_per_round": 4,
                           "bp_total": 8, "max_tokens": 30000, "wall_sec": 180}
    return m


def budget_for(cls):
    limits = {
        "static": {},
        "exec_aware": {"page_triggers": 8},
        "instrumented_exec": {"page_triggers": 8, "instrumented_events": 200000},
        "debugger": {"page_triggers": 8, "distinct_breakpoints": 24, "pause_hits": 500},
    }
    return limits.get(cls.capability, {})


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    tasks, cands, _ = data.load_tasks()
    task = tasks[0]
    fc = cands[task.task_id]
    grader = Grader(data.load_oracle(data.CASES_DIR / task.task_id))

    print(f"task={task.task_id} category={task.category} candidates={len(fc.functions)}", flush=True)
    rows = []
    selected = set(sys.argv[1:])
    for cls in get_methods():
        if selected and cls.name not in selected:
            continue
        t0 = time.time()
        print(f"RUN {cls.name}", flush=True)
        clean_method_logs(cls.name, task.task_id)
        bm = BudgetManager(cls.name, task.task_id, budget_for(cls))
        try:
            m = make_method(cls, len(fc.functions))
            if cls.supervised:
                # Smoke only: fit on the same first task so we exercise the
                # supervised code path without running a full CV split.
                m.fit([task], {task.task_id: fc})
            pred = m.localize(task, fc, bm)
            mr = grader.score_ranking(fc, pred.ranking, KS)
            if getattr(pred, "abstained", False):
                mr.update({"score": 0.0, "role": "Abstain", "strict_hit": 0,
                           "matched_by": "abstain"})
            row = {"method": cls.name, "family": cls.family, "capability": cls.capability,
                   "task_id": task.task_id, "status": pred.status, "error": pred.error,
                   "top1_func_id": pred.top1_func_id, "score": mr.get("score", 0.0),
                   "strict_hit": mr.get("strict_hit", 0), "role": mr.get("role"),
                   "seconds": round(time.time() - t0, 2),
                   "budget_used": pred.budget_used, "artifacts": pred.artifacts}
            for k in KS:
                row[f"recall@{k}"] = mr.get(f"recall@{k}", 0)
        except Exception as e:
            row = {"method": cls.name, "family": cls.family, "capability": cls.capability,
                   "task_id": task.task_id, "status": "exception", "error": str(e)[:240],
                   "seconds": round(time.time() - t0, 2)}
        rows.append(row)
        print(f"  -> {row['status']} score={row.get('score')} top1={row.get('top1_func_id')} "
              f"{row['seconds']}s error={row.get('error')}", flush=True)

    with OUT.open("w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
    bad = [r for r in rows if r["status"] in ("error", "exception")]
    not_run = [r for r in rows if r["status"] == "not_run"]
    print(f"wrote {OUT}", flush=True)
    print(f"summary: total={len(rows)} errors={len(bad)} not_run={len(not_run)}", flush=True)
    if bad:
        print("errors: " + ", ".join(r["method"] for r in bad), flush=True)
    if not_run:
        print("not_run: " + ", ".join(r["method"] for r in not_run), flush=True)
    return 1 if bad else 0


if __name__ == "__main__":
    raise SystemExit(main())
