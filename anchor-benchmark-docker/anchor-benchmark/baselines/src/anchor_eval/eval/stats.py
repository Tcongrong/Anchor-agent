"""Statistical tests (plan v2 §7.2)."""
from __future__ import annotations
import random
try:
    from scipy.stats import chi2, binomtest
    _HAS_SCIPY = True
except Exception:
    _HAS_SCIPY = False


def paired_bootstrap(deltas, n=10000, seed=42):
    rng = random.Random(seed)
    m = len(deltas)
    if m == 0:
        return (0.0, 0.0, 0.0)
    means = []
    for _ in range(n):
        s = sum(deltas[rng.randrange(m)] for _ in range(m))
        means.append(s / m)
    means.sort()
    return (sum(deltas) / m, means[int(0.025 * n)], means[int(0.975 * n)])


def mcnemar(a_hits, b_hits):
    """exact-ish McNemar. a=method-of-interest, b=reference. Returns (b_only, c_only, stat, p)."""
    b = sum(1 for x, y in zip(a_hits, b_hits) if x == 1 and y == 0)
    c = sum(1 for x, y in zip(a_hits, b_hits) if x == 0 and y == 1)
    if b + c == 0:
        return b, c, 0.0, 1.0
    stat = (abs(b - c) - 1) ** 2 / (b + c)
    if _HAS_SCIPY:
        p = float(binomtest(min(b, c), b + c, 0.5).pvalue) if (b + c) <= 50 else float(chi2.sf(stat, 1))
    else:
        p = float("nan")
    return b, c, stat, p


def holm_bonferroni(pvals: dict, alpha=0.05):
    """pvals: {name: p}. Returns {name: (p, adjusted_significant)}."""
    items = sorted(((k, v) for k, v in pvals.items() if v == v), key=lambda x: x[1])
    m = len(items)
    out = {}
    reject = True
    for i, (k, p) in enumerate(items):
        thresh = alpha / (m - i)
        sig = reject and (p <= thresh)
        if not sig:
            reject = False
        out[k] = (p, sig)
    for k, v in pvals.items():
        out.setdefault(k, (v, False))
    return out
