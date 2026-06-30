#!/usr/bin/env python3
"""RQ1 significance analysis (signaficance_plan.md).

Input : runs.csv (plan 2.1, produced by aggregate_runs.py)
Output: significance_results.csv  (per-baseline tests vs the reference method)
        per_category_results.csv  (descriptive mean + 95% bootstrap CI)

Pipeline (plan 3-7):
  fold 5/3 repeats -> per-task value  (s_d: mean ; strict: majority >= 50%)
  for each baseline vs REF:
      strict accuracy -> exact McNemar          (plan 4.1)
      weighted S_d    -> BCa bootstrap CI        (plan 4.2a)
                       + sign-flip permutation p (plan 4.2b, primary)
                       + Wilcoxon signed-rank    (plan 4.3, corroboration)
      effect sizes: Delta+CI, Cohen d_z, matched-rank r, acc diff, b/c (plan 6)
  Holm-Bonferroni within each family, S_d and strict separate (plan 5)
  per-category descriptive mean + 95% percentile CI (plan 7)

Pure stdlib; all randomness seeded (plan 8). Re-runs nothing -- it only
recomputes over existing numbers.
"""
from __future__ import annotations

import argparse
import csv
import os
import random
import sys
from collections import defaultdict

import stats_core as sc

# Frozen defaults (plan 8).
SEED, R, ALPHA = 20260624, 10000, 0.05
DEFAULT_REF = "Anchor"
DEFAULT_HEADLINE = "Direct-LLM"
# RQ1 covers all 5 behaviour categories (the former "typed-array" was a mislabel
# of byte-array and is unified in aggregate_runs.py). "real" is a separate set.
DEFAULT_EXCLUDE_CATEGORIES = []


def load_runs(path):
    rows = []
    with open(path, newline="", encoding="utf-8") as fh:
        for r in csv.DictReader(fh):
            r["strict_hit"] = int(r["strict_hit"])
            r["s_d"] = float(r["s_d"])
            rows.append(r)
    return rows


def fold(rows):
    """Collapse repeats to one value per (method, task). plan 3.2."""
    sd = defaultdict(list)
    hit = defaultdict(list)
    cat = {}
    for r in rows:
        key = (r["method"], r["task_id"])
        sd[key].append(r["s_d"])
        hit[key].append(r["strict_hit"])
        cat[r["task_id"]] = r["category"]
    sd_tv = {k: sc.mean(v) for k, v in sd.items()}                       # mean
    hit_tv = {k: int(sc.mean(v) >= 0.5) for k, v in hit.items()}        # majority
    return sd_tv, hit_tv, cat


def paired(sd_tv, hit_tv, ref, method, tasks):
    """Return (d, ref_hits, base_hits) over tasks both methods scored."""
    d, ah, bh = [], [], []
    for t in tasks:
        kr, km = (ref, t), (method, t)
        if kr in sd_tv and km in sd_tv:
            d.append(sd_tv[kr] - sd_tv[km])
            ah.append(hit_tv[kr])
            bh.append(hit_tv[km])
    return d, ah, bh


def analyze(rows, ref, headline, out_dir, seed=SEED, r_boot=R, alpha=ALPHA):
    sd_tv, hit_tv, cat = fold(rows)
    methods = sorted({m for (m, _) in sd_tv})
    if ref not in methods:
        print(f"[error] reference method {ref!r} not in data. Available: {methods}",
              file=sys.stderr)
        print("[hint] pass --ref <method> to compare against an available method.",
              file=sys.stderr)
        return None
    tasks = sorted({t for (_, t) in sd_tv})
    baselines = [m for m in methods if m != ref]

    print(f"[frozen] seed={seed} R={r_boot} alpha={alpha} sided=two "
          f"fold=mean/majority>=50% ref={ref}", file=sys.stderr)
    print(f"[info] {len(tasks)} tasks, {len(baselines)} baselines vs {ref}",
          file=sys.stderr)

    rng = random.Random(seed)
    results = []
    for m in baselines:
        d, ah, bh = paired(sd_tv, hit_tv, ref, m, tasks)
        n = len(d)
        delta, lo, hi = sc.bca_ci(d, r_boot, alpha, rng)
        p_sd = sc.perm_p(d, r_boot, rng)
        w_p, w_r = sc.wilcoxon_signed_rank(d)
        b = sum(1 for x, y in zip(ah, bh) if x == 1 and y == 0)
        c = sum(1 for x, y in zip(ah, bh) if x == 0 and y == 1)
        p_strict = sc.mcnemar_exact_p(b, c)
        acc_ref = sc.mean(ah) if ah else 0.0
        acc_base = sc.mean(bh) if bh else 0.0
        results.append({
            "baseline": m, "n": n,
            "delta_sd": delta, "ci_lo": lo, "ci_hi": hi,
            "p_sd_raw": p_sd, "wilcoxon_p": w_p,
            "cohen_dz": sc.cohen_dz(d), "matched_rank_r": w_r,
            "mcnemar_b": b, "mcnemar_c": c, "p_strict_raw": p_strict,
            "acc_ref": acc_ref, "acc_base": acc_base,
            "acc_delta": acc_ref - acc_base,
        })

    # Holm within each family, separately (plan 5).
    for fam, key in (("p_sd_raw", "p_sd_holm"), ("p_strict_raw", "p_strict_holm")):
        adj = sc.holm([r[fam] for r in results])
        for r, a in zip(results, adj):
            r[key] = a
    for r in results:
        r["sig_sd"] = r["p_sd_holm"] < alpha
        r["sig_strict"] = r["p_strict_holm"] < alpha

    results.sort(key=lambda r: r["delta_sd"], reverse=True)

    cols = ["baseline", "n", "delta_sd", "ci_lo", "ci_hi",
            "p_sd_raw", "p_sd_holm", "wilcoxon_p", "cohen_dz", "matched_rank_r",
            "mcnemar_b", "mcnemar_c", "p_strict_raw", "p_strict_holm",
            "acc_ref", "acc_base", "acc_delta", "sig_sd", "sig_strict"]
    sig_path = os.path.join(out_dir, "significance_results.csv")
    _write_csv(sig_path, cols, results)
    print(f"[info] wrote {sig_path}", file=sys.stderr)

    # Per-category descriptive (plan 7).
    cat_rows = []
    by_mc = defaultdict(list)
    for (m, t), v in sd_tv.items():
        by_mc[(m, cat[t])].append(v)
    for (m, ct), vals in sorted(by_mc.items()):
        mean, clo, chi = sc.percentile_ci(vals, r_boot, rng, alpha)
        cat_rows.append({"method": m, "category": ct, "n_tasks": len(vals),
                         "mean": mean, "ci_lo": clo, "ci_hi": chi})
    cat_path = os.path.join(out_dir, "per_category_results.csv")
    _write_csv(cat_path, ["method", "category", "n_tasks", "mean", "ci_lo", "ci_hi"],
               cat_rows)
    print(f"[info] wrote {cat_path}", file=sys.stderr)

    _print_table(results, ref, headline, baselines)
    return results


def _write_csv(path, cols, rows):
    with open(path, "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=cols, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow({k: (round(v, 6) if isinstance(v, float) else v)
                        for k, v in r.items()})


def _print_table(results, ref, headline, baselines):
    print()
    print(f"RQ1 significance vs {ref}  (* = Holm-significant @0.05)")
    hdr = f"{'baseline':<16} {'dSd':>7} {'95% CI':>17} {'p_sd(raw/holm)':>20} " \
          f"{'dz':>6} {'b/c':>7} {'p_str(raw/holm)':>20}"
    print(hdr)
    print("-" * len(hdr))
    for r in results:
        star = "*" if r["sig_sd"] else " "
        ci = f"[{r['ci_lo']:+.3f},{r['ci_hi']:+.3f}]"
        print(f"{r['baseline']:<16} {r['delta_sd']:+7.3f} {ci:>17} "
              f"{r['p_sd_raw']:.4f}/{r['p_sd_holm']:.4f}{star:>2} "
              f"{r['cohen_dz']:6.2f} {r['mcnemar_b']:>3}/{r['mcnemar_c']:<3} "
              f"{r['p_strict_raw']:.4f}/{r['p_strict_holm']:.4f}")
    print()
    hl = next((r for r in results if r["baseline"] == headline), None)
    if hl:
        print(f"[headline] {ref} vs {headline}: "
              f"dSd={hl['delta_sd']:+.3f} [{hl['ci_lo']:+.3f},{hl['ci_hi']:+.3f}], "
              f"perm p={hl['p_sd_raw']:.4g} (Holm {hl['p_sd_holm']:.4g}); "
              f"McNemar b/c={hl['mcnemar_b']}/{hl['mcnemar_c']}, "
              f"p={hl['p_strict_raw']:.4g}")


def main(argv=None):
    here = os.path.dirname(os.path.abspath(__file__))
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--runs", default=os.path.join(here, "runs.csv"))
    ap.add_argument("--out-dir", default=here)
    ap.add_argument("--ref", default=DEFAULT_REF,
                    help=f"reference method (default {DEFAULT_REF})")
    ap.add_argument("--headline", default=DEFAULT_HEADLINE,
                    help=f"headline baseline for the narrative line (default {DEFAULT_HEADLINE})")
    ap.add_argument("--exclude-category", action="append", default=None,
                    help="category to exclude (repeatable; default excludes none)")
    ap.add_argument("--include-category", action="append", default=None,
                    help="if given, keep ONLY these categories")
    ap.add_argument("--loco-tasks", default="",
                    help="comma-separated task_ids to exclude")
    ap.add_argument("--seed", type=int, default=SEED)
    ap.add_argument("--R", type=int, default=R)
    ap.add_argument("--alpha", type=float, default=ALPHA)
    args = ap.parse_args(argv)

    rows = load_runs(args.runs)
    exclude = (DEFAULT_EXCLUDE_CATEGORIES if args.exclude_category is None
               else args.exclude_category)
    if args.include_category:
        rows = [r for r in rows if r["category"] in set(args.include_category)]
    else:
        rows = [r for r in rows if r["category"] not in set(exclude)]
    loco = {t for t in args.loco_tasks.split(",") if t}
    if loco:
        rows = [r for r in rows if r["task_id"] not in loco]
    if not rows:
        print("[error] no rows left after filtering", file=sys.stderr)
        return 2

    res = analyze(rows, args.ref, args.headline, args.out_dir,
                  seed=args.seed, r_boot=args.R, alpha=args.alpha)
    return 0 if res is not None else 1


if __name__ == "__main__":
    raise SystemExit(main())
