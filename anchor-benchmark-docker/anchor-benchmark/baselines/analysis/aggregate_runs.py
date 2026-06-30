#!/usr/bin/env python3
"""Build the long table `runs.csv` (plan 2.1) from existing run artifacts.

Reads every `case_runs/*/raw.jsonl` produced by the baseline suite and emits one
row per (task_id, method, run_id). This is pure *reading of archived results* --
no system is re-run, no LLM/browser is called (plan 3.5 discipline).

Output schema (plan 2.1, plus audit columns):
    task_id, category, method, run_id, strict_hit, s_d, failed, fail_reason

Missing/failed encoding (plan 2.2): any row whose status is not "ok" is recorded
as strict_hit=0, s_d=0, failed=1, with fail_reason = status (or error). Values
are clamped to their valid ranges.

Also prints the plan 2.2 self-check report to stderr; with --strict the script
exits non-zero if any hard check fails.
"""
from __future__ import annotations

import argparse
import csv
import glob
import json
import os
import sys
from collections import Counter, defaultdict

# Raw artifact categories -> the canonical 5 category names used in the plan.
# (The former "type_array_transformation" mislabel has been physically renamed to
# byte_array_transformation across the benchmark and artifacts, so no remap here.)
CATEGORY_MAP = {
    "request_signature_token_derivation": "signing",
    "state_encoding": "state-encoding",
    "byte_array_transformation": "byte-array",
    "browser_fingerprint": "fingerprinting",
    "request_transformation": "request-transform",
    "real": "real",
}

FIELDS = ["task_id", "category", "method", "run_id",
          "strict_hit", "s_d", "failed", "fail_reason"]


def clamp01(x: float) -> float:
    return 0.0 if x < 0 else (1.0 if x > 1 else x)


def iter_raw_rows(paths):
    for path in paths:
        with open(path, encoding="utf-8") as fh:
            for ln, line in enumerate(fh, 1):
                line = line.strip()
                if not line:
                    continue
                try:
                    yield path, json.loads(line)
                except json.JSONDecodeError as exc:
                    print(f"[warn] {path}:{ln} bad json: {exc}", file=sys.stderr)


def normalize(raw: dict, map_categories: bool) -> dict:
    status = raw.get("status", "ok")
    failed = 0 if status == "ok" else 1
    if failed:
        strict_hit, s_d = 0, 0.0
        fail_reason = raw.get("error") or status
    else:
        strict_hit = 1 if int(raw.get("strict_hit", 0) or 0) == 1 else 0
        s_d = clamp01(float(raw.get("score", 0.0) or 0.0))
        fail_reason = ""
    cat = raw.get("category", "")
    task_id = raw.get("task_id") or ""
    if map_categories:
        cat = CATEGORY_MAP.get(cat, cat)
    return {
        "task_id": task_id,
        "category": cat,
        "method": raw.get("method"),
        "run_id": raw.get("repeat_index", raw.get("run_id", 1)),
        "strict_hit": strict_hit,
        "s_d": s_d,
        "failed": failed,
        "fail_reason": fail_reason,
    }


def self_check(rows) -> bool:
    """Plan 2.2 pre-flight self-check. Returns True if all hard checks pass."""
    ok = True
    by_method = Counter(r["method"] for r in rows)
    runs_per_tm = Counter()
    tasks = set()
    cats = Counter()
    n_failed = 0
    bad_sd = 0
    bad_hit = 0
    for r in rows:
        tasks.add(r["task_id"])
        cats[r["category"]] += 1
        runs_per_tm[(r["task_id"], r["method"])] += 1
        n_failed += r["failed"]
        if not (0.0 <= r["s_d"] <= 1.0):
            bad_sd += 1
        if r["strict_hit"] not in (0, 1):
            bad_hit += 1

    p = lambda *a: print(*a, file=sys.stderr)
    p("=" * 64)
    p("runs.csv self-check (plan 2.2)")
    p("=" * 64)
    p(f"rows: {len(rows)}   tasks: {len(tasks)}   methods: {len(by_method)}")
    p(f"rows per method: {dict(by_method)}")
    p(f"category counts: {dict(cats)}")
    p(f"runs-per-(task,method) distribution: {dict(Counter(runs_per_tm.values()))}")
    p(f"failed/missing rows (strict=0,s_d=0): {n_failed}")

    # determinism heuristic: methods that always have exactly 1 run/task
    det = sorted({m for m in by_method
                  if all(runs_per_tm[(t, m)] <= 1
                         for t in tasks if (t, m) in runs_per_tm)})
    rnd = sorted(m for m in by_method if m not in det)
    p(f"deterministic-looking methods (<=1 run/task): {det}")
    p(f"repeated methods: {rnd}")

    if bad_sd:
        ok = False
        p(f"[FAIL] {bad_sd} rows with s_d outside [0,1]")
    if bad_hit:
        ok = False
        p(f"[FAIL] {bad_hit} rows with strict_hit not in {{0,1}}")
    uneven = {k: v for k, v in runs_per_tm.items()
              if v != max(runs_per_tm.values())}
    if uneven:
        p(f"[note] {len(uneven)} (task,method) pairs have fewer runs than the "
          f"max ({max(runs_per_tm.values())}); folded over available runs "
          f"(plan 11.3 -- not re-run to top up).")
    p(f"self-check: {'PASS' if ok else 'FAIL'}")
    p("=" * 64)
    return ok


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    here = os.path.dirname(os.path.abspath(__file__))
    default_glob = os.path.normpath(
        os.path.join(here, "..", "artifacts", "case_runs", "*", "raw.jsonl"))
    ap.add_argument("--glob", default=default_glob,
                    help="glob for raw.jsonl files (default: artifacts/case_runs/*/raw.jsonl)")
    ap.add_argument("--out", default=os.path.join(here, "runs.csv"),
                    help="output CSV path (default: analysis/runs.csv)")
    ap.add_argument("--no-map-categories", action="store_true",
                    help="keep raw artifact category names instead of plan names")
    ap.add_argument("--strict", action="store_true",
                    help="exit non-zero if the self-check fails")
    args = ap.parse_args(argv)

    paths = sorted(glob.glob(args.glob))
    if not paths:
        print(f"[error] no files matched: {args.glob}", file=sys.stderr)
        return 2
    print(f"[info] reading {len(paths)} raw.jsonl files", file=sys.stderr)

    rows = [normalize(raw, not args.no_map_categories) for _, raw in iter_raw_rows(paths)]
    rows = [r for r in rows if r["task_id"] and r["method"]]

    with open(args.out, "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(rows)
    print(f"[info] wrote {len(rows)} rows -> {args.out}", file=sys.stderr)

    ok = self_check(rows)
    return 0 if (ok or not args.strict) else 1


if __name__ == "__main__":
    raise SystemExit(main())
