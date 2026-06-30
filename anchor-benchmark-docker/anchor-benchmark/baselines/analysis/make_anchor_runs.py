#!/usr/bin/env python3
"""Encode the hand-reported Anchor RQ1 results into a raw.jsonl the pipeline reads.

Source: user-provided per-case Anchor results (5 behaviours x case001..case010).
Each entry is (case_no, iterations, strict_hit, s_d):
  strict_hit = 1 iff the correct anchor was found ("得到正确锚点")
  s_d        = the weighted adjudicator score for that task

Anchor is reported as a single deterministic value per task (1 run); the fold in
significance.py reduces a single value to itself. Output goes under
artifacts/case_runs/ so aggregate_runs.py picks it up via its default glob.
"""
from __future__ import annotations

import json
import os

# raw artifact category name -> per-case (iterations, strict_hit, s_d)
ANCHOR = {
    "browser_fingerprint": [
        (10, 1, 1.0), (8, 1, 1.0), (5, 1, 1.0), (7, 0, 0.2), (6, 1, 1.0),
        (3, 1, 1.0), (4, 1, 1.0), (4, 1, 1.0), (4, 0, 0.7), (5, 0, 0.7),
    ],
    "byte_array_transformation": [
        (5, 1, 1.0), (6, 1, 1.0), (3, 1, 1.0), (2, 1, 1.0), (3, 0, 0.7),
        (3, 1, 1.0), (9, 0, 0.7), (6, 0, 0.7), (6, 1, 1.0), (5, 0, 0.7),
    ],
    "request_signature_token_derivation": [
        (3, 1, 1.0), (4, 0, 0.7), (6, 1, 1.0), (6, 1, 1.0), (6, 0, 0.2),
        (5, 1, 1.0), (3, 1, 1.0), (8, 1, 1.0), (20, 1, 1.0), (4, 1, 1.0),
    ],
    "request_transformation": [
        (10, 0, 0.5), (8, 1, 1.0), (4, 1, 1.0), (7, 0, 0.0), (10, 0, 0.1),
        (5, 1, 1.0), (3, 1, 1.0), (8, 1, 1.0), (9, 0, 0.0), (10, 0, 0.5),
    ],
    "state_encoding": [
        (10, 0, 0.0), (6, 1, 1.0), (4, 1, 1.0), (10, 0, 0.0), (4, 1, 1.0),
        (2, 1, 1.0), (10, 0, 0.0), (2, 1, 1.0), (7, 1, 1.0), (4, 1, 1.0),
    ],
}


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.normpath(
        os.path.join(here, "..", "artifacts", "case_runs", "anchor_rq1"))
    os.makedirs(out_dir, exist_ok=True)
    out = os.path.join(out_dir, "raw.jsonl")

    rows = []
    for cat, cases in ANCHOR.items():
        for i, (iters, hit, s_d) in enumerate(cases, start=1):
            rows.append({
                "run_id": "anchor_rq1", "repeat_index": 1,
                "task_id": f"case{i:03d}_{cat}",
                "app_id": "anchor", "category": cat,
                "method": "Anchor", "family": "proposed", "capability": "anchor",
                "status": "ok", "error": None,
                "top1_func_id": None, "strict_hit": hit, "score": s_d,
                "role": None, "matched_by": "reported", "iterations": iters,
            })
    with open(out, "w", encoding="utf-8") as fh:
        for r in rows:
            fh.write(json.dumps(r) + "\n")

    # sanity echo of the per-category summary
    print(f"wrote {len(rows)} Anchor rows -> {out}")
    for cat, cases in ANCHOR.items():
        acc = sum(h for _, h, _ in cases) / len(cases)
        mean = sum(s for _, _, s in cases) / len(cases)
        print(f"  {cat:38s} strict={acc:.2f}  mean_s_d={mean:.3f}")
    allcases = [c for cs in ANCHOR.values() for c in cs]
    print(f"  OVERALL strict={sum(h for _,h,_ in allcases)/len(allcases):.3f} "
          f"mean_s_d={sum(s for _,_,s in allcases)/len(allcases):.3f}")


if __name__ == "__main__":
    main()
