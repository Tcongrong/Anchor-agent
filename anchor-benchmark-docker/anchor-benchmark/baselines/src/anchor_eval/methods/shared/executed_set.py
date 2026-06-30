"""Shared executed-function-set collector (plan v5 §10.1 / §10.4 / §10.5).

Turns the function-entry trace (node/exec_tracer.mjs, via runtime.collect.collect_trace)
into the candidate functions that executed during a scenario. This is the shared
runtime substrate for the exec-aware classical methods (SITIR, Software-Recon);
Uniform-Tracer is demoted to a diagnostic that also reuses it.

Trace non-determinism (§10.1): collect_trace caches per run, so repeats force
fresh launches. Recall-oriented consumers take the UNION over runs; the
precision-oriented Software-Reconnaissance differential takes feature ∩ runs and
control ∪ runs (§10.5).
"""
from __future__ import annotations
from ...core.data import CASES_DIR
from ...runtime.collect import collect_trace


def collect_runs(task, fc, r_trace=3, control=None):
    """Run the scenario r_trace times; return (runs, agg, info).

    runs : list[set[int]]   — executed candidate indices per run
    agg  : {"count","first_t","last_t"} aggregated across runs
    info : {"ok","runs","main_rel"}
    """
    funcs = fc.functions
    off_to_idx = {(f.file, f.start): i for i, f in enumerate(funcs)}
    runs, count, first_t, last_t = [], {}, {}, {}
    main_rel = None
    ok_any = False
    for r in range(max(1, r_trace)):
        ev = collect_trace(task, fc, CASES_DIR / task.task_id,
                           force=(r > 0), control=control).payload
        if not ev.get("ok") or not ev.get("trace"):
            continue
        ok_any = True
        main_rel = ev.get("mainBundleRel")
        run_set = set()
        for off, t in ev["trace"]:
            i = off_to_idx.get((main_rel, off))
            if i is None:
                continue
            run_set.add(i)
            count[i] = count.get(i, 0) + 1
            if i not in first_t:
                first_t[i] = t
            last_t[i] = t
        runs.append(run_set)
    return runs, {"count": count, "first_t": first_t, "last_t": last_t}, \
        {"ok": ok_any, "runs": len(runs), "main_rel": main_rel}


def executed_indices(task, fc, r_trace=3, control=None):
    """Recall-oriented UNION of executed candidate indices over r_trace runs."""
    runs, agg, info = collect_runs(task, fc, r_trace=r_trace, control=control)
    executed = set().union(*runs) if runs else set()
    return executed, {**info, "count": agg["count"],
                      "first_t": agg["first_t"], "last_t": agg["last_t"]}
