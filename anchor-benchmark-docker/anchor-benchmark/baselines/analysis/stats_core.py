#!/usr/bin/env python3
"""Pure-stdlib statistics core for the RQ1 significance analysis.

Implements every test the plan (signaficance_plan.md) commits to, with **no
third-party dependency** (no numpy / scipy / statsmodels / pandas):

  * paired BCa bootstrap CI      (plan 4.2a)
  * paired sign-flip permutation (plan 4.2b)   -- primary p-value for S_d
  * exact McNemar (binomial)     (plan 4.1)    -- strict accuracy
  * Wilcoxon signed-rank         (plan 4.3)    -- corroboration only
  * Holm-Bonferroni              (plan 5)
  * Cohen's d_z, matched-rank r  (plan 6)

Everything is seeded and deterministic given (seed, R). Kept dependency-free on
purpose so `python3 significance.py` runs on a bare interpreter.
"""
from __future__ import annotations

import math
import random
from typing import Sequence

# --------------------------------------------------------------------------- #
# Normal distribution helpers (Phi and Phi^-1) -- stdlib only.
# --------------------------------------------------------------------------- #
_SQRT2 = math.sqrt(2.0)


def norm_cdf(x: float) -> float:
    """Standard normal CDF via erf."""
    return 0.5 * (1.0 + math.erf(x / _SQRT2))


# Acklam's rational approximation of the inverse normal CDF (|err| < 1.15e-9).
_A = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02,
      1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00]
_B = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02,
      6.680131188771972e+01, -1.328068155288572e+01]
_C = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00,
      -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00]
_D = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00,
      3.754408661907416e+00]
_P_LOW = 0.02425
_P_HIGH = 1.0 - _P_LOW


def norm_ppf(p: float) -> float:
    """Inverse standard normal CDF (quantile)."""
    if p <= 0.0:
        return -math.inf
    if p >= 1.0:
        return math.inf
    if p < _P_LOW:
        q = math.sqrt(-2.0 * math.log(p))
        return (((((_C[0] * q + _C[1]) * q + _C[2]) * q + _C[3]) * q + _C[4]) * q + _C[5]) / \
               ((((_D[0] * q + _D[1]) * q + _D[2]) * q + _D[3]) * q + 1.0)
    if p <= _P_HIGH:
        q = p - 0.5
        r = q * q
        return (((((_A[0] * r + _A[1]) * r + _A[2]) * r + _A[3]) * r + _A[4]) * r + _A[5]) * q / \
               (((((_B[0] * r + _B[1]) * r + _B[2]) * r + _B[3]) * r + _B[4]) * r + 1.0)
    q = math.sqrt(-2.0 * math.log(1.0 - p))
    return -(((((_C[0] * q + _C[1]) * q + _C[2]) * q + _C[3]) * q + _C[4]) * q + _C[5]) / \
            ((((_D[0] * q + _D[1]) * q + _D[2]) * q + _D[3]) * q + 1.0)


# --------------------------------------------------------------------------- #
# Small numeric helpers (replace numpy).
# --------------------------------------------------------------------------- #
def mean(xs: Sequence[float]) -> float:
    return sum(xs) / len(xs)


def std(xs: Sequence[float], ddof: int = 1) -> float:
    n = len(xs)
    if n - ddof <= 0:
        return 0.0
    m = mean(xs)
    return math.sqrt(sum((x - m) ** 2 for x in xs) / (n - ddof))


def percentile(sorted_xs: Sequence[float], q: float) -> float:
    """Linear-interpolated percentile, matching numpy's default ('linear').

    `sorted_xs` MUST already be sorted ascending. `q` in [0, 100].
    """
    n = len(sorted_xs)
    if n == 1:
        return sorted_xs[0]
    rank = (q / 100.0) * (n - 1)
    lo = math.floor(rank)
    hi = math.ceil(rank)
    if lo == hi:
        return sorted_xs[int(rank)]
    frac = rank - lo
    return sorted_xs[lo] * (1.0 - frac) + sorted_xs[hi] * frac


# --------------------------------------------------------------------------- #
# Paired BCa bootstrap CI for the mean of differences d (plan 4.2a).
# --------------------------------------------------------------------------- #
def bca_ci(d: Sequence[float], R: int, alpha: float, rng: random.Random):
    """Return (theta, lo, hi): observed mean diff and BCa 100(1-alpha)% CI."""
    n = len(d)
    theta = mean(d)
    if n < 2:
        return theta, theta, theta

    # 1. bootstrap resamples of the mean
    boot = []
    for _ in range(R):
        s = 0.0
        for _ in range(n):
            s += d[rng.randrange(n)]
        boot.append(s / n)
    boot.sort()

    # 2. bias correction z0 (clamp the proportion away from 0/1 to avoid +-inf)
    n_less = _count_less(boot, theta)
    prop = n_less / R
    prop = min(max(prop, 0.5 / R), 1.0 - 0.5 / R)
    z0 = norm_ppf(prop)

    # 3. acceleration via jackknife
    total = math.fsum(d)
    jk = [(total - d[i]) / (n - 1) for i in range(n)]
    jbar = mean(jk)
    num = sum((jbar - v) ** 3 for v in jk)
    den = 6.0 * (sum((jbar - v) ** 2 for v in jk) ** 1.5)
    a = num / den if den != 0 else 0.0

    # 4. adjusted percentiles
    def adj(zq: float) -> float:
        denom = 1.0 - a * (z0 + zq)
        if denom == 0:
            denom = 1e-12
        p = norm_cdf(z0 + (z0 + zq) / denom)
        return min(max(p, 1e-9), 1.0 - 1e-9)

    a1 = adj(norm_ppf(alpha / 2.0))
    a2 = adj(norm_ppf(1.0 - alpha / 2.0))
    lo = percentile(boot, 100.0 * a1)
    hi = percentile(boot, 100.0 * a2)
    return theta, lo, hi


def _count_less(sorted_xs: Sequence[float], v: float) -> int:
    """#{x < v} on an ascending-sorted list, via bisect."""
    import bisect
    return bisect.bisect_left(sorted_xs, v)


# --------------------------------------------------------------------------- #
# Paired sign-flip permutation test (plan 4.2b) -- primary S_d p-value.
# --------------------------------------------------------------------------- #
def perm_p(d: Sequence[float], R: int, rng: random.Random) -> float:
    obs = abs(mean(d))
    n = len(d)
    if n == 0:
        return 1.0
    ge = 0
    for _ in range(R):
        s = 0.0
        for x in d:
            s += x if rng.random() < 0.5 else -x
        if abs(s / n) >= obs - 1e-15:
            ge += 1
    return (1 + ge) / (R + 1)


# --------------------------------------------------------------------------- #
# Exact McNemar (plan 4.1).
# --------------------------------------------------------------------------- #
def mcnemar_exact_p(b: int, c: int) -> float:
    """Two-sided exact McNemar p-value; b+c==0 -> 1.0 ('no discriminating power')."""
    n = b + c
    if n == 0:
        return 1.0
    k = min(b, c)
    tail = math.fsum(math.comb(n, i) for i in range(k + 1)) * (0.5 ** n)
    return min(1.0, 2.0 * tail)


# --------------------------------------------------------------------------- #
# Wilcoxon signed-rank (plan 4.3) -- corroboration only, normal approx with
# tie + continuity correction. Returns (p_two_sided, matched_rank_r).
# --------------------------------------------------------------------------- #
def wilcoxon_signed_rank(d: Sequence[float]):
    nz = [x for x in d if x != 0.0]
    n = len(nz)
    if n == 0:
        return 1.0, 0.0
    order = sorted(range(n), key=lambda i: abs(nz[i]))
    ranks = [0.0] * n
    i = 0
    tie_term = 0.0
    while i < n:
        j = i
        while j + 1 < n and abs(nz[order[j + 1]]) == abs(nz[order[i]]):
            j += 1
        avg = (i + 1 + j + 1) / 2.0  # average of 1-based ranks
        t = j - i + 1
        if t > 1:
            tie_term += t ** 3 - t
        for k in range(i, j + 1):
            ranks[order[k]] = avg
        i = j + 1
    w_plus = sum(ranks[i] for i in range(n) if nz[i] > 0)
    w_minus = sum(ranks[i] for i in range(n) if nz[i] < 0)
    r = (w_plus - w_minus) / (w_plus + w_minus) if (w_plus + w_minus) > 0 else 0.0

    mu = n * (n + 1) / 4.0
    sigma2 = (n * (n + 1) * (2 * n + 1) - tie_term / 2.0) / 24.0
    if sigma2 <= 0:
        return 1.0, r
    z = (w_plus - mu)
    z = (z - math.copysign(0.5, z)) / math.sqrt(sigma2)  # continuity correction
    p = 2.0 * (1.0 - norm_cdf(abs(z)))
    return min(1.0, p), r


# --------------------------------------------------------------------------- #
# Holm-Bonferroni step-down (plan 5).
# --------------------------------------------------------------------------- #
def holm(pvals: Sequence[float]):
    """Return Holm-adjusted p-values, order-aligned with the input."""
    m = len(pvals)
    order = sorted(range(m), key=lambda i: pvals[i])
    adj = [0.0] * m
    running = 0.0
    for rank, idx in enumerate(order):
        val = (m - rank) * pvals[idx]
        running = max(running, val)          # enforce monotonicity
        adj[idx] = min(1.0, running)
    return adj


# --------------------------------------------------------------------------- #
# Effect size (plan 6).
# --------------------------------------------------------------------------- #
def cohen_dz(d: Sequence[float]) -> float:
    s = std(d, ddof=1)
    return mean(d) / s if s > 0 else 0.0


def percentile_ci(xs: Sequence[float], R: int, rng: random.Random,
                  alpha: float = 0.05):
    """Naive percentile bootstrap CI of the mean (plan 7, descriptive)."""
    n = len(xs)
    m = mean(xs)
    if n < 2:
        return m, m, m
    boot = []
    for _ in range(R):
        s = 0.0
        for _ in range(n):
            s += xs[rng.randrange(n)]
        boot.append(s / n)
    boot.sort()
    return m, percentile(boot, 100 * alpha / 2), percentile(boot, 100 * (1 - alpha / 2))
