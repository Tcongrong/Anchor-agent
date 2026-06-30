"""Metrics (plan v2 §7.1): mean_score is the primary indicator."""
from __future__ import annotations
import statistics
from collections import defaultdict

KS = (1, 3, 5, 10)


def aggregate(rows):
    """rows: per-task metric dicts for ONE method. Returns summary dict."""
    rows = [r for r in rows if r.get("status") in (None, "ok", "budget_exceeded")]
    if not rows:
        return {"n": 0}
    n = len(rows)
    scores = [r["score"] for r in rows]
    strict = [r["strict_hit"] for r in rows]
    out = {
        "n": n,
        "mean_score": statistics.mean(scores),
        "total_score": sum(scores),
        "strict_accuracy": statistics.mean(strict),
    }
    for k in KS:
        out[f"recall@{k}"] = statistics.mean(r.get(f"recall@{k}", 0) for r in rows)
    roles = defaultdict(int)
    for r in rows:
        roles[r.get("role", "Off-chain")] += 1
    out["role_dist"] = dict(roles)
    return out


def by_strata(rows, key):
    """Group per-task rows by a strata key (e.g. category, app_id) -> {val: summary}."""
    groups = defaultdict(list)
    for r in rows:
        groups[r.get(key)].append(r)
    return {k: aggregate(v) for k, v in sorted(groups.items(), key=lambda x: str(x[0]))}
