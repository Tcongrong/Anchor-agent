#!/usr/bin/env python
"""Rescore archived real-benchmark predictions against the current real cases.

This is for the "old predictions, new cases" comparison: it does not rerun any
method. It reads archived raw.jsonl rows, maps the old top1 function into the
current candidate set where possible, and scores that top1 against the current
oracle.

Only top1 score/strict/role can be recomputed reliably because raw.jsonl does
not store full rankings.
"""
from __future__ import annotations

import argparse
import json
import statistics
import sys
import tarfile
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from typing import Any

BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE / "src"))

from anchor_eval.core import data  # noqa: E402
from anchor_eval.core.grader import Grader  # noqa: E402

REAL_CASES = [
    "1-tzxm",
    "2-yngwypt",
    "3-weidian",
    "4-iquicker",
    "5-oauth",
    "6-37",
    "7-passport",
    "8-xiaomi",
    "9-xiaomi",
    "10-ewt360",
    "11-fuwu",
    "12-learn",
    "13-kuwo",
    "14-cnki",
    "15-appmiu",
    "16-pedata",
    "17-doyo",
    "18-caixin",
    "19-yhd",
    "20-fxbaogao",
]


def read_jsonl(path: Path) -> list[dict[str, Any]]:
    rows = []
    if not path.exists():
        return rows
    with path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                rows.append(json.loads(line))
    return rows


def write_jsonl(path: Path, rows: list[dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")


def mean(xs: list[float]) -> float:
    return statistics.mean(xs) if xs else 0.0


def pstdev(xs: list[float]) -> float:
    return statistics.pstdev(xs) if len(xs) > 1 else 0.0


def extract_old_cases(archive_root: Path, out_dir: Path) -> Path:
    target = out_dir / "old_cases"
    marker = target / ".extracted"
    if marker.exists():
        return target
    target.mkdir(parents=True, exist_ok=True)
    tar_path = archive_root / "old_real_benchmark_cases.tar.gz"
    with tarfile.open(tar_path, "r:gz") as tar:
        tar.extractall(target)
    marker.write_text(datetime.now().isoformat(timespec="seconds") + "\n", encoding="utf-8")
    return target


def build_case(case_dir: Path, cache_dir: Path):
    old_cache = data.CACHE_DIR
    try:
        data.CACHE_DIR = cache_dir
        return data._build(case_dir)
    finally:
        data.CACHE_DIR = old_cache


def function_maps(cs):
    by_id = cs.by_id()
    by_sha: dict[str, list] = defaultdict(list)
    by_nsha: dict[str, list] = defaultdict(list)
    by_off: dict[tuple[str, int, int], list] = defaultdict(list)
    for f in cs.functions:
        by_sha[f.body_sha256].append(f)
        by_nsha[f.normalized_sha256].append(f)
        by_off[(f.file, f.start, f.end)].append(f)
    return by_id, by_sha, by_nsha, by_off


def map_old_top1(old_top1: str | None, old_by_id: dict, new_by_id: dict, new_by_sha: dict, new_by_nsha: dict, new_by_off: dict):
    if not old_top1:
        return None, "no_top1"
    if old_top1 in new_by_id:
        return old_top1, "same_func_id"
    old_func = old_by_id.get(old_top1)
    if old_func is None:
        return None, "old_func_id_not_found"
    if old_func.body_sha256 in new_by_sha:
        return new_by_sha[old_func.body_sha256][0].func_id, "body_sha256"
    if old_func.normalized_sha256 in new_by_nsha:
        return new_by_nsha[old_func.normalized_sha256][0].func_id, "normalized_sha256"
    off_key = (old_func.file, old_func.start, old_func.end)
    if off_key in new_by_off:
        return new_by_off[off_key][0].func_id, "offset"
    return None, "not_mapped"


def score_top1(row: dict[str, Any], mapped_id: str | None, new_cs, grader: Grader) -> dict[str, Any]:
    if row.get("abstained"):
        return {
            "score": 0.0,
            "strict_hit": 0,
            "role": "Abstain",
            "matched_by": "abstain",
            "recall@1": 0,
            "recall@3": 0,
            "recall@5": 0,
            "recall@10": 0,
        }
    mr = grader.score_ranking(new_cs, [mapped_id] if mapped_id else [], (1, 3, 5, 10))
    return mr


def summarize(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    out = []
    for method in sorted({r["method"] for r in rows}):
        rs = [r for r in rows if r["method"] == method]
        scores = [float(r["score"]) for r in rs]
        out.append({
            "method": method,
            "family": rs[0].get("family"),
            "capability": rs[0].get("capability"),
            "n_runs": len(rs),
            "n_tasks": len({r["task_id"] for r in rs}),
            "ok": sum(1 for r in rs if r.get("status") == "ok"),
            "budget_exceeded": sum(1 for r in rs if r.get("status") == "budget_exceeded"),
            "not_run": sum(1 for r in rs if r.get("status") == "not_run"),
            "error": sum(1 for r in rs if r.get("status") == "error"),
            "mean_score": mean(scores),
            "std_score": pstdev(scores),
            "strict_acc": mean([float(r.get("strict_hit", 0) or 0) for r in rs]),
            "mean_sec_old": mean([float(r.get("elapsed_sec", 0) or 0) for r in rs]),
            "llm_tokens_total_old": sum(int(r.get("llm_total_tokens", 0) or 0) for r in rs),
            "llm_calls_total_old": sum(int(r.get("llm_calls", 0) or 0) for r in rs),
            "mapped": sum(1 for r in rs if r.get("mapped_top1_func_id")),
            "not_mapped": sum(1 for r in rs if not r.get("mapped_top1_func_id")),
            "abstained": sum(1 for r in rs if r.get("abstained")),
        })
    return sorted(out, key=lambda r: (-r["mean_score"], r["method"]))


def write_markdown(path: Path, summary: list[dict[str, Any]], rows: list[dict[str, Any]]) -> None:
    lines = [
        "# Old Results Rescored On Current Real Cases",
        "",
        "旧结果没有保存完整 ranking，因此这里重算的是 top1 score/strict/role；recall@3/5/10 不能严格复原。",
        "",
        "| method | n | mean_score | std | strict | ok | budget | error | mapped | not_mapped | old_tokens | old_calls |",
        "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
    ]
    for r in summary:
        lines.append(
            f"| {r['method']} | {r['n_runs']} | {r['mean_score']:.3f} | {r['std_score']:.3f} | "
            f"{r['strict_acc']:.3f} | {r['ok']} | {r['budget_exceeded']} | {r['error']} | "
            f"{r['mapped']} | {r['not_mapped']} | {r['llm_tokens_total_old']} | {r['llm_calls_total_old']} |"
        )
    lines.extend(["", "## Per Case Mean Score", ""])
    methods = [r["method"] for r in summary]
    cases = sorted({r["task_id"] for r in rows}, key=lambda s: int(s.split("-", 1)[0]))
    by_key = defaultdict(list)
    for r in rows:
        by_key[(r["task_id"], r["method"])].append(float(r["score"]))
    lines.append("| case | " + " | ".join(methods) + " |")
    lines.append("|---|" + "|".join(["---:"] * len(methods)) + "|")
    for c in cases:
        vals = [f"{mean(by_key[(c, m)]):.3f}" if by_key[(c, m)] else "" for m in methods]
        lines.append("| " + c + " | " + " | ".join(vals) + " |")
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--archive-root", type=Path, default=BASE / "artifacts" / "archives" / "real_benchmarks_before_replace_20260626_190933")
    p.add_argument("--out-dir", type=Path, default=BASE / "artifacts" / "rescoring" / "old_real_results_on_current_cases_20260626_1916")
    return p.parse_args()


def main() -> int:
    args = parse_args()
    args.out_dir.mkdir(parents=True, exist_ok=True)
    old_cases_root = extract_old_cases(args.archive_root, args.out_dir)
    old_runs_root = args.archive_root / "moved_active_case_runs"
    rows_out = []
    coverage = []

    for case in REAL_CASES:
        old_task, old_cs, _ = build_case(old_cases_root / case, args.out_dir / "cache_old")
        new_task, new_cs, _ = build_case(data.CASES_DIR / case, args.out_dir / "cache_new")
        old_by_id, _, _, _ = function_maps(old_cs)
        new_by_id, new_by_sha, new_by_nsha, new_by_off = function_maps(new_cs)
        grader = Grader(data.load_oracle(data.CASES_DIR / case))
        anchor_idx = grader.anchor_index(new_cs)
        coverage.append({
            "task_id": case,
            "old_candidates": len(old_cs.functions),
            "new_candidates": len(new_cs.functions),
            "new_anchor_in_fc": anchor_idx >= 0,
        })
        for row in read_jsonl(old_runs_root / case / "raw.jsonl"):
            mapped_id, map_mode = map_old_top1(row.get("top1_func_id"), old_by_id, new_by_id, new_by_sha, new_by_nsha, new_by_off)
            mr = score_top1(row, mapped_id, new_cs, grader)
            out = dict(row)
            out.update({
                "original_score": row.get("score", 0.0),
                "original_strict_hit": row.get("strict_hit", 0),
                "original_role": row.get("role"),
                "original_matched_by": row.get("matched_by"),
                "old_top1_func_id": row.get("top1_func_id"),
                "mapped_top1_func_id": mapped_id,
                "top1_map_mode": map_mode,
                "score": mr.get("score", 0.0),
                "strict_hit": mr.get("strict_hit", 0),
                "role": mr.get("role", "None"),
                "matched_by": mr.get("matched_by"),
                "rescored_against": "current_real_cases",
            })
            for k in (1, 3, 5, 10):
                out[f"recall@{k}"] = mr.get(f"recall@{k}", 0)
            rows_out.append(out)

    summary = summarize(rows_out)
    write_jsonl(args.out_dir / "rescored_raw.jsonl", rows_out)
    write_jsonl(args.out_dir / "summary_by_method.jsonl", summary)
    write_jsonl(args.out_dir / "candidate_coverage.jsonl", coverage)
    write_markdown(args.out_dir / "summary.md", summary, rows_out)
    manifest = {
        "archive_root": str(args.archive_root),
        "old_runs_root": str(old_runs_root),
        "current_cases_dir": str(data.CASES_DIR),
        "out_dir": str(args.out_dir),
        "cases": REAL_CASES,
        "rows": len(rows_out),
        "note": "Top1-only rescoring; archived raw.jsonl does not contain full rankings.",
    }
    (args.out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(args.out_dir)
    print(f"rows={len(rows_out)} methods={len(summary)} cases={len(REAL_CASES)}")
    for r in summary:
        print(f"{r['method']}\t{r['mean_score']:.3f}\tn={r['n_runs']}\tmapped={r['mapped']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
