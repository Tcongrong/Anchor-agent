#!/home/luis/miniforge3/envs/locagent/bin/python
"""Run one benchmark case group repeatedly and aggregate the result.

Example:
  python scripts/run_case_group_repeated.py case001
  python scripts/run_case_group_repeated.py case001 --repeats 3 --methods Direct-LLM SWE-agent

The unit of execution is one case group, e.g. ``case001`` = the five
``case001_*`` tasks. Each task-method pair is run ``--repeats`` times and the
summary reports means over all repeated rows.
"""
from __future__ import annotations

import argparse
import fcntl
import json
import os
import re
import shutil
import statistics
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Any

BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE / "src"))
os.environ.setdefault("PYTHONUTF8", "1")
os.environ.pop("ANCHOR_LLM_MAX_TOKENS", None)

from anchor_eval.core import data
from anchor_eval.core.budget import BudgetManager
from anchor_eval.core.grader import Grader
from anchor_eval.core.registry import get_methods
from anchor_eval.eval import metrics

import anchor_eval.methods._all  # noqa: F401

ART = BASE / "artifacts"
OUT_ROOT = ART / "case_runs"
KS = metrics.KS
LLM_TOTAL_TOKEN_LIMIT = 750000
LLM_BUDGET_METHODS = {
    "Direct-LLM",
    "Agentless-Loc",
    "Exec-LLM",
    "SWE-agent",
    "LocAgent-JS",
    "Debugger-Agent",
}


def log(message: str) -> None:
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}", flush=True)


def acquire_case_lock(out_root: Path, case_name: str):
    lock_dir = out_root / ".locks"
    lock_dir.mkdir(parents=True, exist_ok=True)
    lock_path = lock_dir / f"{case_name}.lock"
    lock_file = lock_path.open("w", encoding="utf-8")
    try:
        fcntl.flock(lock_file.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError:
        raise SystemExit(f"case {case_name} is already running; lock={lock_path}")
    lock_file.write(f"pid={os.getpid()} started_at={datetime.now().isoformat(timespec='seconds')}\n")
    lock_file.flush()
    return lock_file

FORMAL_BUDGET_LIMITS = {
    "static": {},
    "exec_aware": {"page_triggers": 8},
    "instrumented_exec": {"page_triggers": 8, "instrumented_events": 200000},
    "debugger": {"page_triggers": 8, "distinct_breakpoints": 24, "pause_hits": 500},
}

FORMAL_METHOD_PARAMS = {
    "Direct-LLM": {"chunk_size": None, "shortlist_max": 25, "body_chars": 1800},
    "Agentless-Loc": {
        "region_size": 80,
        "max_regions": 4,
        "max_suspicious": 20,
        "body_chars": 1800,
    },
    "SWE-agent": {"max_steps": 50, "max_total_tokens": LLM_TOTAL_TOKEN_LIMIT},
    "LocAgent-JS": {"max_steps": 50, "max_total_tokens": LLM_TOTAL_TOKEN_LIMIT},
    "Debugger-Agent": {
        "max_steps": 50,
        "bp_per_round": 6,
        "bp_total": 24,
        "max_tokens": LLM_TOTAL_TOKEN_LIMIT,
        "wall_sec": 1200,
    },
}


def normalize_case_prefix(value: str) -> str:
    value = value.strip()
    m = re.match(r"^(case\d+)(?:_|$)", value)
    if m:
        return m.group(1) + "_"
    case_dir = data.CASES_DIR / value
    if (case_dir / "agent_hidden" / "oracle.hidden.json").exists():
        return value
    raise SystemExit(f"unknown case group or task {value!r}")


def task_matches_case(task_id: str, case_prefix: str) -> bool:
    if case_prefix.endswith("_"):
        return task_id.startswith(case_prefix)
    return task_id == case_prefix


def grade_pred(grader: Grader, cs, pred) -> dict[str, Any]:
    mr = grader.score_ranking(cs, pred.ranking, KS)
    if getattr(pred, "abstained", False):
        mr.update({"score": 0.0, "role": "Abstain", "strict_hit": 0, "matched_by": "abstain"})
    return mr


def make_method(cls):
    params = FORMAL_METHOD_PARAMS.get(cls.name)
    if cls.name == "Debugger-Agent":
        method = cls()
        method.budget_config = dict(params)
        return method
    return cls(**params) if params else cls()


def prepare_method(cls, tasks, cands):
    method = make_method(cls)
    if cls.supervised:
        method.fit(tasks, {t.task_id: cands[t.task_id] for t in tasks})
    else:
        method.fit([], {})
    return method


def raw_log_paths(method: str, task_id: str) -> list[Path]:
    return [
        ART / "prompts" / method / f"{task_id}.json",
        ART / "trajectories" / method / f"{task_id}.json",
    ]


def clear_raw_logs(method: str, task_id: str) -> None:
    for path in raw_log_paths(method, task_id):
        path.unlink(missing_ok=True)


def archive_raw_logs(out_dir: Path, repeat_idx: int, method: str, task_id: str) -> None:
    for path in raw_log_paths(method, task_id):
        if not path.exists():
            continue
        kind = path.parents[1].name
        dst = out_dir / kind / f"repeat_{repeat_idx:02d}" / method / path.name
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, dst)


def artifact_flag(artifacts: dict[str, Any], *keys: str) -> int:
    for key in keys:
        value = artifacts.get(key)
        if value:
            return 1
    return 0


def count_dynamic_evidence(budget: dict[str, Any], artifacts: dict[str, Any]) -> int:
    if budget.get("page_triggers", 0) or budget.get("pause_hits", 0):
        return 1
    if artifacts.get("trigger_count", 0) or artifacts.get("pause_hits", 0):
        return 1
    return 0


def make_row(task, cls, pred, mr, elapsed_sec: float, repeat_idx: int, run_id: str) -> dict[str, Any]:
    budget = dict(getattr(pred, "budget_used", {}) or {})
    artifacts = dict(getattr(pred, "artifacts", {}) or {})
    row = {
        "run_id": run_id,
        "repeat_index": repeat_idx,
        "task_id": task.task_id,
        "app_id": task.app_id,
        "category": task.category,
        "method": cls.name,
        "family": cls.family,
        "capability": cls.capability,
        "status": getattr(pred, "status", "ok"),
        "error": getattr(pred, "error", None),
        "top1_func_id": getattr(pred, "top1_func_id", None),
        "score": mr.get("score", 0.0),
        "strict_hit": mr.get("strict_hit", 0),
        "role": mr.get("role", "Off-chain"),
        "matched_by": mr.get("matched_by"),
        "elapsed_sec": round(elapsed_sec, 3),
        "abstained": bool(getattr(pred, "abstained", False)),
        "budget_used": budget,
        "artifacts": artifacts,
    }
    for k in KS:
        row[f"recall@{k}"] = mr.get(f"recall@{k}", 0)
    for key in (
        "llm_calls",
        "llm_input_tokens",
        "llm_output_tokens",
        "llm_total_tokens",
        "page_triggers",
        "distinct_breakpoints",
        "breakpoints_set",
        "pause_hits",
        "tool_steps",
        "wall_clock_sec",
    ):
        row[key] = budget.get(key, 0)
    row["submitted"] = artifact_flag(artifacts, "submitted")
    row["forced_submit"] = artifact_flag(artifacts, "adapter_forced_submit")
    row["fallback"] = artifact_flag(artifacts, "fallback")
    row["dynamic_evidence_used"] = count_dynamic_evidence(budget, artifacts)
    return row


def error_row(task, cls, repeat_idx: int, run_id: str, elapsed_sec: float, err: Exception) -> dict[str, Any]:
    row = {
        "run_id": run_id,
        "repeat_index": repeat_idx,
        "task_id": task.task_id,
        "app_id": task.app_id,
        "category": task.category,
        "method": cls.name,
        "family": cls.family,
        "capability": cls.capability,
        "status": "error",
        "error": str(err)[:240],
        "top1_func_id": None,
        "score": 0.0,
        "strict_hit": 0,
        "role": "error",
        "matched_by": None,
        "elapsed_sec": round(elapsed_sec, 3),
        "abstained": False,
        "budget_used": {},
        "artifacts": {},
    }
    for k in KS:
        row[f"recall@{k}"] = 0
    for key in (
        "llm_calls",
        "llm_input_tokens",
        "llm_output_tokens",
        "llm_total_tokens",
        "page_triggers",
        "distinct_breakpoints",
        "breakpoints_set",
        "pause_hits",
        "tool_steps",
        "wall_clock_sec",
    ):
        row[key] = 0
    row.update({"submitted": 0, "forced_submit": 0, "fallback": 0, "dynamic_evidence_used": 0})
    return row


def run_uniform_random(cls, task, cs, grader, repeat_idx: int, run_id: str) -> dict[str, Any]:
    start = time.time()
    method = cls()
    scores, strict = [], []
    recalls = {k: [] for k in KS}
    top1 = None
    for seed in range(getattr(method, "n_seeds", 200)):
        ranking = method._ranking(task, cs, seed)
        if seed == 0 and ranking:
            top1 = ranking[0]
        mr = grader.score_ranking(cs, ranking, KS)
        scores.append(mr["score"])
        strict.append(mr["strict_hit"])
        for k in KS:
            recalls[k].append(mr[f"recall@{k}"])
    row = {
        "run_id": run_id,
        "repeat_index": repeat_idx,
        "task_id": task.task_id,
        "app_id": task.app_id,
        "category": task.category,
        "method": cls.name,
        "family": cls.family,
        "capability": cls.capability,
        "status": "ok",
        "error": None,
        "top1_func_id": top1,
        "score": statistics.mean(scores),
        "strict_hit": statistics.mean(strict),
        "role": "(random)",
        "matched_by": None,
        "elapsed_sec": round(time.time() - start, 3),
        "abstained": False,
        "budget_used": {},
        "artifacts": {"n_seeds": getattr(method, "n_seeds", 200)},
    }
    for k in KS:
        row[f"recall@{k}"] = statistics.mean(recalls[k])
    for key in (
        "llm_calls",
        "llm_input_tokens",
        "llm_output_tokens",
        "page_triggers",
        "distinct_breakpoints",
        "breakpoints_set",
        "pause_hits",
        "tool_steps",
        "wall_clock_sec",
    ):
        row[key] = 0
    row.update({"submitted": 0, "forced_submit": 0, "fallback": 0, "dynamic_evidence_used": 0})
    return row


def mean(values: list[float]) -> float:
    return statistics.mean(values) if values else 0.0


def std(values: list[float]) -> float:
    return statistics.pstdev(values) if len(values) > 1 else 0.0


def summarize_by_method(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    out = []
    methods = sorted({r["method"] for r in rows})
    for method in methods:
        rs = [r for r in rows if r["method"] == method]
        scored = rs
        scores = [float(r["score"]) for r in scored]
        summary = {
            "method": method,
            "family": rs[0]["family"],
            "capability": rs[0]["capability"],
            "n_runs": len(rs),
            "n_tasks": len({r["task_id"] for r in rs}),
            "ok": sum(1 for r in rs if r["status"] == "ok"),
            "budget_exceeded": sum(1 for r in rs if r["status"] == "budget_exceeded"),
            "not_run": sum(1 for r in rs if r["status"] == "not_run"),
            "error": sum(1 for r in rs if r["status"] == "error"),
            "mean_score": mean(scores),
            "std_score": std(scores),
            "strict_acc": mean([float(r["strict_hit"]) for r in scored]),
            "mean_sec": mean([float(r["elapsed_sec"]) for r in rs]),
            "total_sec": sum(float(r["elapsed_sec"]) for r in rs),
            "llm_calls_total": sum(int(r.get("llm_calls", 0) or 0) for r in rs),
            "llm_input_tokens_total": sum(int(r.get("llm_input_tokens", 0) or 0) for r in rs),
            "llm_output_tokens_total": sum(int(r.get("llm_output_tokens", 0) or 0) for r in rs),
            "llm_tokens_total": sum(
                int(r.get("llm_input_tokens", 0) or 0) + int(r.get("llm_output_tokens", 0) or 0)
                for r in rs
            ),
            "page_triggers_total": sum(int(r.get("page_triggers", 0) or 0) for r in rs),
            "breakpoints_total": sum(int(r.get("distinct_breakpoints", 0) or 0) for r in rs),
            "pause_hits_total": sum(int(r.get("pause_hits", 0) or 0) for r in rs),
            "tool_steps_total": sum(int(r.get("tool_steps", 0) or 0) for r in rs),
            "submitted": sum(int(r.get("submitted", 0) or 0) for r in rs),
            "forced_submit": sum(int(r.get("forced_submit", 0) or 0) for r in rs),
            "fallback": sum(int(r.get("fallback", 0) or 0) for r in rs),
            "abstained": sum(1 for r in rs if r.get("abstained")),
            "dynamic_evidence_used": sum(int(r.get("dynamic_evidence_used", 0) or 0) for r in rs),
        }
        for k in KS:
            summary[f"recall@{k}"] = mean([float(r.get(f"recall@{k}", 0) or 0) for r in scored])
        out.append(summary)
    return sorted(out, key=lambda r: (-r["mean_score"], r["method"]))


def summarize_by_task_method(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    out = []
    keys = sorted({(r["task_id"], r["method"]) for r in rows})
    for task_id, method in keys:
        rs = [r for r in rows if r["task_id"] == task_id and r["method"] == method]
        scored = rs
        out.append({
            "task_id": task_id,
            "method": method,
            "n_runs": len(rs),
            "ok": sum(1 for r in rs if r["status"] == "ok"),
            "budget_exceeded": sum(1 for r in rs if r["status"] == "budget_exceeded"),
            "not_run": sum(1 for r in rs if r["status"] == "not_run"),
            "error": sum(1 for r in rs if r["status"] == "error"),
            "mean_score": mean([float(r["score"]) for r in scored]),
            "strict_acc": mean([float(r["strict_hit"]) for r in scored]),
            "mean_sec": mean([float(r["elapsed_sec"]) for r in rs]),
            "llm_tokens_total": sum(
                int(r.get("llm_input_tokens", 0) or 0) + int(r.get("llm_output_tokens", 0) or 0)
                for r in rs
            ),
        })
    return out


def fmt_float(value: Any, ndigits: int = 3) -> str:
    try:
        return f"{float(value):.{ndigits}f}"
    except Exception:
        return str(value)


def markdown_summary(case_prefix: str, repeats: int, summaries: list[dict[str, Any]]) -> str:
    lines = [
        f"# Case Group Result: {case_prefix.rstrip('_')}",
        "",
        f"Repeats per task-method: **{repeats}**",
        "",
        "| method | n | ok | budget | not_run | error | mean_score | std | strict | mean_sec | llm_tokens | llm_calls | submitted | forced | fallback | dynamic |",
        "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
    ]
    for r in summaries:
        lines.append(
            "| {method} | {n_runs} | {ok} | {budget_exceeded} | {not_run} | {error} | "
            "{mean_score} | {std_score} | {strict_acc} | {mean_sec} | {llm_tokens_total} | "
            "{llm_calls_total} | {submitted} | {forced_submit} | {fallback} | {dynamic_evidence_used} |".format(
                **{
                    **r,
                    "mean_score": fmt_float(r["mean_score"]),
                    "std_score": fmt_float(r["std_score"]),
                    "strict_acc": fmt_float(r["strict_acc"]),
                    "mean_sec": fmt_float(r["mean_sec"], 2),
                }
            )
        )
    return "\n".join(lines) + "\n"


def write_summary_outputs(out_dir: Path, case_prefix: str, repeats: int, rows: list[dict[str, Any]]) -> None:
    if not rows:
        return
    by_method = summarize_by_method(rows)
    by_task = summarize_by_task_method(rows)
    write_jsonl(out_dir / "summary_by_method.jsonl", by_method)
    write_jsonl(out_dir / "summary_by_task_method.jsonl", by_task)
    (out_dir / "summary.md").write_text(markdown_summary(case_prefix, repeats, by_method), encoding="utf-8")
    (out_dir / "task_matrix.md").write_text(markdown_task_matrix(by_task), encoding="utf-8")


def write_status(
    out_dir: Path,
    *,
    run_id: str,
    case_prefix: str,
    repeats: int,
    total_rows: int,
    completed_rows: int,
    state: str,
    current: dict[str, Any] | None = None,
) -> None:
    payload = {
        "run_id": run_id,
        "case_prefix": case_prefix,
        "repeats": repeats,
        "state": state,
        "completed_rows": completed_rows,
        "total_rows": total_rows,
        "updated_at": datetime.now().isoformat(timespec="seconds"),
        "current": current,
    }
    (out_dir / "status.json").write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")


def markdown_task_matrix(task_rows: list[dict[str, Any]]) -> str:
    methods = sorted({r["method"] for r in task_rows})
    tasks = sorted({r["task_id"] for r in task_rows})
    by_key = {(r["task_id"], r["method"]): r for r in task_rows}
    lines = ["# Per Task Mean Score", "", "| task | " + " | ".join(methods) + " |"]
    lines.append("|---|" + "|".join(["---:"] * len(methods)) + "|")
    for task_id in tasks:
        vals = []
        for method in methods:
            row = by_key.get((task_id, method))
            vals.append(fmt_float(row["mean_score"]) if row else "")
        lines.append("| " + task_id + " | " + " | ".join(vals) + " |")
    return "\n".join(lines) + "\n"


def write_jsonl(path: Path, rows: list[dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")


def read_jsonl(path: Path) -> list[dict[str, Any]]:
    if not path.exists():
        return []
    rows = []
    with path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                rows.append(json.loads(line))
    return rows


def select_methods(method_names: list[str] | None, families: list[str] | None):
    methods = get_methods()
    if families:
        allowed = set(families)
        methods = [m for m in methods if m.family in allowed]
    if method_names:
        wanted = set(method_names)
        methods = [m for m in methods if m.name in wanted]
        missing = wanted - {m.name for m in methods}
        if missing:
            raise SystemExit(f"unknown method(s): {', '.join(sorted(missing))}")
    return methods


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("case", help="case group, e.g. case001, or an exact one-task benchmark id such as 1-tzxm")
    p.add_argument("--repeats", type=int, default=3, help="repeats per task-method")
    p.add_argument("--methods", nargs="*", help="optional method names")
    p.add_argument("--families", nargs="*", help="optional family filter")
    p.add_argument("--out-root", type=Path, default=OUT_ROOT)
    p.add_argument("--append", action="store_true", help="append to an existing output directory")
    return p.parse_args()


def main() -> None:
    args = parse_args()
    if args.repeats < 1:
        raise SystemExit("--repeats must be >= 1")

    case_prefix = normalize_case_prefix(args.case)
    case_name = case_prefix.rstrip("_")
    lock_file = acquire_case_lock(args.out_root, case_name)
    run_id = datetime.now().strftime("%Y%m%d_%H%M%S")
    out_dir = args.out_root / case_name
    if out_dir.exists() and not args.append:
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    tasks, cands, _files = data.load_tasks()
    tasks = [t for t in tasks if task_matches_case(t.task_id, case_prefix)]
    if not tasks:
        raise SystemExit(f"no tasks matched {case_prefix!r}")
    graders = {t.task_id: Grader(data.load_oracle(data.CASES_DIR / t.task_id)) for t in tasks}
    methods = select_methods(args.methods, args.families)
    total_rows = args.repeats * len(tasks) * len(methods)

    manifest = {
        "run_id": run_id,
        "case_prefix": case_prefix,
        "n_tasks": len(tasks),
        "task_ids": [t.task_id for t in tasks],
        "expected_tasks_per_case": 5 if case_prefix.endswith("_") else 1,
        "repeats": args.repeats,
        "methods": [m.name for m in methods],
        "formal_method_params": FORMAL_METHOD_PARAMS,
        "budget_limits": FORMAL_BUDGET_LIMITS,
    }
    (out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    write_status(
        out_dir,
        run_id=run_id,
        case_prefix=case_prefix,
        repeats=args.repeats,
        total_rows=total_rows,
        completed_rows=0,
        state="starting",
        current=None,
    )
    log(
        f"starting {case_prefix.rstrip('_')}: tasks={len(tasks)} methods={len(methods)} "
        f"repeats={args.repeats} total_rows={total_rows} out={out_dir}"
    )

    raw_path = out_dir / "raw.jsonl"
    rows: list[dict[str, Any]] = read_jsonl(raw_path) if args.append else []
    completed_rows = len(rows)
    completed_keys = {
        (int(r.get("repeat_index", 0) or 0), str(r.get("task_id")), str(r.get("method")))
        for r in rows
    }
    if rows:
        write_summary_outputs(out_dir, case_prefix, args.repeats, rows)
    try:
        with raw_path.open("a" if args.append else "w", encoding="utf-8") as raw:
            for repeat_idx in range(1, args.repeats + 1):
                log(f"preparing methods for repeat {repeat_idx}/{args.repeats}")
                prepared = {cls.name: prepare_method(cls, tasks, cands) for cls in methods if cls.name != "Uniform-Random"}
                log(f"prepared methods for repeat {repeat_idx}/{args.repeats}")
                for task in tasks:
                    cs = cands[task.task_id]
                    grader = graders[task.task_id]
                    for cls in methods:
                        row_key = (repeat_idx, task.task_id, cls.name)
                        if row_key in completed_keys:
                            continue
                        current = {
                            "repeat_index": repeat_idx,
                            "task_id": task.task_id,
                            "method": cls.name,
                            "row_index": completed_rows + 1,
                        }
                        write_status(
                            out_dir,
                            run_id=run_id,
                            case_prefix=case_prefix,
                            repeats=args.repeats,
                            total_rows=total_rows,
                            completed_rows=completed_rows,
                            state="running",
                            current=current,
                        )
                        log(
                            f"row {completed_rows + 1}/{total_rows} start "
                            f"repeat={repeat_idx}/{args.repeats} task={task.task_id} method={cls.name}"
                        )
                        clear_raw_logs(cls.name, task.task_id)
                        if cls.name == "Uniform-Random":
                            row = run_uniform_random(cls, task, cs, grader, repeat_idx, run_id)
                        else:
                            limits = dict(FORMAL_BUDGET_LIMITS.get(cls.capability, {}))
                            if cls.name in LLM_BUDGET_METHODS:
                                limits["llm_total_tokens"] = LLM_TOTAL_TOKEN_LIMIT
                            bm = BudgetManager(cls.name, task.task_id, limits)
                            start = time.time()
                            try:
                                pred = prepared[cls.name].localize(task, cs, bm)
                                mr = grade_pred(grader, cs, pred)
                                row = make_row(task, cls, pred, mr, time.time() - start, repeat_idx, run_id)
                            except Exception as err:
                                row = error_row(task, cls, repeat_idx, run_id, time.time() - start, err)
                        rows.append(row)
                        completed_keys.add(row_key)
                        completed_rows += 1
                        raw.write(json.dumps(row, ensure_ascii=False) + "\n")
                        raw.flush()
                        archive_raw_logs(out_dir, repeat_idx, cls.name, task.task_id)
                        write_summary_outputs(out_dir, case_prefix, args.repeats, rows)
                        write_status(
                            out_dir,
                            run_id=run_id,
                            case_prefix=case_prefix,
                            repeats=args.repeats,
                            total_rows=total_rows,
                            completed_rows=completed_rows,
                            state="running",
                            current=current,
                        )
                        log(
                            f"row {completed_rows}/{total_rows} done method={cls.name} "
                            f"status={row['status']} score={fmt_float(row['score'])} "
                            f"elapsed={fmt_float(row['elapsed_sec'], 2)}s"
                        )
    except BaseException as err:
        write_summary_outputs(out_dir, case_prefix, args.repeats, rows)
        write_status(
            out_dir,
            run_id=run_id,
            case_prefix=case_prefix,
            repeats=args.repeats,
            total_rows=total_rows,
            completed_rows=completed_rows,
            state="interrupted",
            current=None,
        )
        log(f"interrupted after {completed_rows}/{total_rows} rows: {err}")
        raise

    write_status(
        out_dir,
        run_id=run_id,
        case_prefix=case_prefix,
        repeats=args.repeats,
        total_rows=total_rows,
        completed_rows=completed_rows,
        state="complete",
        current=None,
    )
    log(f"wrote {out_dir}")


if __name__ == "__main__":
    main()
