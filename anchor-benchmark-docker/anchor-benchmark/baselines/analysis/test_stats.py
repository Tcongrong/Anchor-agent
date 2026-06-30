#!/usr/bin/env python3
"""Self-checks for stats_core. Runs under pytest *or* plain `python3 test_stats.py`.

Each test pins a statistic against an analytic/known value or a structural
invariant, so correctness does not depend on scipy being installed.
"""
from __future__ import annotations

import math
import random

import stats_core as sc

TOL = 1e-6


def approx(a, b, tol=TOL):
    return abs(a - b) <= tol


# --------------------------------------------------------------------------- #
def test_norm_cdf_known():
    assert approx(sc.norm_cdf(0.0), 0.5)
    assert approx(sc.norm_cdf(1.959963985), 0.975, 1e-6)
    assert approx(sc.norm_cdf(-1.959963985), 0.025, 1e-6)


def test_norm_ppf_known_and_roundtrip():
    assert approx(sc.norm_ppf(0.975), 1.959963985, 1e-5)
    assert approx(sc.norm_ppf(0.5), 0.0, 1e-9)
    for p in (0.001, 0.05, 0.3, 0.5, 0.7, 0.95, 0.999):
        assert approx(sc.norm_cdf(sc.norm_ppf(p)), p, 1e-6)


def test_percentile_linear():
    xs = list(range(11))  # 0..10
    assert approx(sc.percentile(xs, 0), 0.0)
    assert approx(sc.percentile(xs, 100), 10.0)
    assert approx(sc.percentile(xs, 50), 5.0)
    assert approx(sc.percentile(xs, 25), 2.5)  # numpy 'linear' default


def test_mcnemar_exact_known():
    assert sc.mcnemar_exact_p(0, 0) == 1.0          # no discriminating power
    assert approx(sc.mcnemar_exact_p(5, 0), 2 * 0.5 ** 5)   # = 0.0625
    assert approx(sc.mcnemar_exact_p(0, 5), 2 * 0.5 ** 5)   # symmetric in b,c
    assert sc.mcnemar_exact_p(3, 3) == 1.0          # capped at 1
    assert sc.mcnemar_exact_p(1, 0) == 1.0          # 2*0.5 = 1
    assert sc.mcnemar_exact_p(10, 0) < 0.01         # strong, one-sided counts


def test_holm_step_down():
    # classic worked example
    adj = sc.holm([0.01, 0.02, 0.03, 0.04])
    assert approx(adj[0], 0.04)   # 4*0.01
    assert approx(adj[1], 0.06)   # max(0.04, 3*0.02)
    assert approx(adj[2], 0.06)   # max(0.06, 2*0.03)=0.06 (monotone)
    assert approx(adj[3], 0.06)   # max(0.06, 1*0.04)=0.06
    # order independence: shuffled input gives same per-element adjustment
    adj2 = sc.holm([0.04, 0.01, 0.03, 0.02])
    assert approx(adj2[1], 0.04) and approx(adj2[0], 0.06)


def test_cohen_dz():
    d = [1.0, 2.0, 3.0]              # mean 2, sd(ddof1)=1
    assert approx(sc.cohen_dz(d), 2.0)
    assert sc.cohen_dz([2.0, 2.0, 2.0]) == 0.0   # zero variance guard


def test_bca_constant_shift_is_point_ci():
    d = [0.5] * 20
    rng = random.Random(1)
    theta, lo, hi = sc.bca_ci(d, R=500, alpha=0.05, rng=rng)
    assert approx(theta, 0.5) and approx(lo, 0.5) and approx(hi, 0.5)


def test_bca_symmetric_contains_zero():
    d = [(-1) ** i * (i % 5) for i in range(40)]   # symmetric-ish around 0
    rng = random.Random(2)
    _, lo, hi = sc.bca_ci(d, R=3000, alpha=0.05, rng=rng)
    assert lo < 0 < hi


def test_bca_strong_effect_excludes_zero():
    d = [0.4 + 0.05 * math.sin(i) for i in range(40)]   # all well above 0
    rng = random.Random(3)
    _, lo, hi = sc.bca_ci(d, R=3000, alpha=0.05, rng=rng)
    assert lo > 0


def test_bca_deterministic_given_seed():
    d = [0.1 * (i % 7) - 0.2 for i in range(30)]
    a = sc.bca_ci(d, 1000, 0.05, random.Random(42))
    b = sc.bca_ci(d, 1000, 0.05, random.Random(42))
    assert a == b


def test_perm_all_zero_is_one():
    assert approx(sc.perm_p([0.0] * 10, R=500, rng=random.Random(0)), 1.0)


def test_perm_strong_effect_small_p():
    d = [0.5] * 25
    p = sc.perm_p(d, R=5000, rng=random.Random(0))
    assert p < 0.001    # only the all-+ flip reaches |obs|


def test_wilcoxon_all_positive():
    p, r = sc.wilcoxon_signed_rank([1, 2, 3, 4, 5, 6, 7, 8])
    assert approx(r, 1.0)
    assert p < 0.05


def test_wilcoxon_symmetric_zero_r():
    p, r = sc.wilcoxon_signed_rank([1, -1, 2, -2, 3, -3])
    assert approx(r, 0.0)
    assert p > 0.5


def _run_all():
    tests = [v for k, v in sorted(globals().items())
             if k.startswith("test_") and callable(v)]
    passed = 0
    for t in tests:
        t()
        print(f"  ok  {t.__name__}")
        passed += 1
    print(f"\n{passed}/{len(tests)} tests passed")


if __name__ == "__main__":
    _run_all()
