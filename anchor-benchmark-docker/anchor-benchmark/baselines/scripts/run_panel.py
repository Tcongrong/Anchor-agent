"""Run the baseline suite end-to-end.

The experiment axis is the capability tier; methods are organised by family. Each
prediction is graded by the unified grader (methods never self-score). Training-free
methods run once over all tasks; supervised methods run under application-grouped CV;
Uniform-Random is averaged over seeds. Budget / coverage / capability / leak audits
are emitted, plus capability-sorted analysis slices.

  python scripts/run_panel.py [family ...]
  python scripts/run_panel.py            # all families
  python scripts/run_panel.py classical diagnostic     # subset
"""
import sys, os, json, time, statistics
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE / "src"))
os.environ.setdefault("PYTHONUTF8", "1")

from anchor_eval.core import data, splits
from anchor_eval.core.grader import Grader
from anchor_eval.core.budget import BudgetManager
from anchor_eval.core.capability import CapabilityGate
from anchor_eval.core.registry import get_methods, method_capability_matrix, all_method_names, FAMILY_ORDER
from anchor_eval.eval import report, audits, metrics, stats

# import every method to populate the registry (single source of truth)
import anchor_eval.methods._all  # noqa

ART = BASE / "artifacts"
PRED = ART / "predictions"; PRED.mkdir(parents=True, exist_ok=True)
REPORTS = ART / "reports"; REPORTS.mkdir(parents=True, exist_ok=True)
AUDITS = ART / "audits"; AUDITS.mkdir(parents=True, exist_ok=True)
KS = metrics.KS
RANDOM_SEEDS = 200

# budget limits keyed by capability tier (§8 / §10.8)
BUDGET_LIMITS = {
    "static": {},
    "exec_aware": {"page_triggers": 8},
    "instrumented_exec": {"page_triggers": 8, "instrumented_events": 200000},
    "debugger": {"page_triggers": 8, "distinct_breakpoints": 24, "pause_hits": 500},
}
# the five families read along the capability axis as the main result table
MAIN_FAMILIES = ["classical", "llm_localization", "code_agent", "matched_control"]


def grade_pred(grader, cs, pred):
    mr = grader.score_ranking(cs, pred.ranking, KS)
    # An abstention (no committed top-1: agent never submitted, empty slice /
    # differential) is scored as an explicit top-1 miss so the method is NOT floored
    # at its BM25 fallback. The BM25 ranking is retained only for the recall@k tail.
    if getattr(pred, "abstained", False):
        mr.update({"score": 0.0, "role": "Abstain", "strict_hit": 0, "matched_by": "abstain"})
    return mr


def _row(t, cls, mr, top1=None, status="ok", error=None, budget=None, artifacts=None, fold=None):
    row = {"task_id": t.task_id, "app_id": t.app_id, "category": t.category,
           "method": cls.name, "family": cls.family, "capability": cls.capability,
           "top1_func_id": top1, "score": mr.get("score", 0.0),
           "strict_hit": mr.get("strict_hit", 0), "role": mr.get("role", "Off-chain"),
           "matched_by": mr.get("matched_by"), "status": status, "error": error}
    for k in KS:
        row[f"recall@{k}"] = mr.get(f"recall@{k}", 0)
    if fold is not None:
        row["fold"] = fold
    if budget:
        row["budget_used"] = budget
    if artifacts:
        row["artifacts"] = artifacts
    return row


def run_training_free(cls, tasks, cands, graders):
    m = cls(); m.fit([], {})
    rows, budget_rows = [], []
    for t in tasks:
        cs = cands[t.task_id]
        bm = BudgetManager(cls.name, t.task_id, BUDGET_LIMITS.get(cls.capability, {}))
        try:
            pred = m.localize(t, cs, bm)
        except Exception as e:
            rows.append(_row(t, cls, {"score": 0.0, "role": "error", "strict_hit": 0},
                             status="error", error=str(e)[:160]))
            budget_rows.append(bm.audit_row()); continue
        mr = grade_pred(graders[t.task_id], cs, pred)
        rows.append(_row(t, cls, mr, top1=pred.top1_func_id, status=pred.status,
                         budget=pred.budget_used, artifacts=pred.artifacts))
        budget_rows.append({**bm.audit_row(), **pred.budget_used})
    return rows, budget_rows


def run_random(cls, tasks, cands, graders):
    m = cls()
    n_seeds = getattr(m, "n_seeds", RANDOM_SEEDS)
    rows, budget_rows = [], []
    for t in tasks:
        cs = cands[t.task_id]
        ss, dd = [], []
        rec = {k: [] for k in KS}
        for seed in range(n_seeds):
            ranking = m._ranking(t, cs, seed)
            mr = graders[t.task_id].score_ranking(cs, ranking, KS)
            ss.append(mr["strict_hit"]); dd.append(mr["score"])
            for k in KS:
                rec[k].append(mr[f"recall@{k}"])
        row = {"task_id": t.task_id, "app_id": t.app_id, "category": t.category,
               "method": cls.name, "family": cls.family, "capability": cls.capability,
               "top1_func_id": None, "score": statistics.mean(dd),
               "strict_hit": statistics.mean(ss), "role": "(random)", "status": "ok"}
        for k in KS:
            row[f"recall@{k}"] = statistics.mean(rec[k])
        rows.append(row)
        budget_rows.append({"task_id": t.task_id, "method": cls.name})
    return rows, budget_rows


def run_supervised(cls, tasks, cands, graders, k=5):
    rows, budget_rows = [], []
    task_by_id = {t.task_id: t for t in tasks}
    for fi, test_apps, train_ids, test_ids in splits.group_kfold_by_app(tasks, k=k):
        m = cls()
        train_tasks = [task_by_id[i] for i in train_ids]
        m.fit(train_tasks, {i: cands[i] for i in train_ids})
        for tid in test_ids:
            t = task_by_id[tid]; cs = cands[tid]
            bm = BudgetManager(cls.name, tid, BUDGET_LIMITS.get(cls.capability, {}))
            try:
                pred = m.localize(t, cs, bm)
            except Exception as e:
                rows.append(_row(t, cls, {"score": 0.0, "role": "error", "strict_hit": 0},
                                 status="error", error=str(e)[:160], fold=fi))
                budget_rows.append(bm.audit_row()); continue
            mr = grade_pred(graders[tid], cs, pred)
            rows.append(_row(t, cls, mr, top1=pred.top1_func_id, status=pred.status,
                             budget=pred.budget_used, artifacts=pred.artifacts, fold=fi))
            budget_rows.append({**bm.audit_row(), **pred.budget_used})
    return rows, budget_rows


def main():
    families = sys.argv[1:] or None       # None -> all
    t0 = time.time()
    tasks, cands, files = data.load_tasks()
    graders = {t.task_id: Grader(data.load_oracle(data.CASES_DIR / t.task_id)) for t in tasks}
    print(f"loaded {len(tasks)} tasks in {time.time()-t0:.1f}s")

    methods = [c for c in get_methods() if families is None or c.family in families]
    all_rows, all_budget, status_notes = [], [], {}
    for cls in methods:
        ts = time.time()
        try:
            if cls.name == "Uniform-Random":
                rows, brows = run_random(cls, tasks, cands, graders)
            elif cls.supervised:
                rows, brows = run_supervised(cls, tasks, cands, graders)
            else:
                rows, brows = run_training_free(cls, tasks, cands, graders)
        except Exception as e:
            status_notes[cls.name] = f"error: {str(e)[:60]}"
            print(f"  {cls.name:18s} FAILED: {str(e)[:120]}"); continue
        if rows and all(r.get("status") == "not_run" for r in rows):
            status_notes[cls.name] = rows[0].get("error", "not_run")
        all_rows += rows; all_budget += brows
        with (PRED / f"{cls.name}.jsonl").open("w", encoding="utf-8") as f:
            for r in rows:
                f.write(json.dumps(r) + "\n")
        summ = metrics.aggregate(rows)
        ms = summ.get("mean_score")
        print(f"  {cls.name:16s} [{cls.capability:17s}] mean_score="
              f"{ms if ms is None else round(ms,3)} "
              f"strict={round(summ.get('strict_accuracy',0),3) if summ.get('n') else 'n/a'} "
              f"({time.time()-ts:.1f}s)")

    write_report(tasks, cands, methods, all_rows, all_budget, status_notes, families, time.time() - t0)


def write_report(tasks, cands, methods, all_rows, all_budget, status_notes, families, secs):
    cov = data.candidate_coverage_report(tasks, cands)
    ss = splits.split_summary(tasks)
    rows_by_method = {}
    for r in all_rows:
        rows_by_method.setdefault(r["method"], []).append(r)

    out = ["# Baseline Suite Report", "",
           f"Tasks: **{len(tasks)}** | apps: **{ss['n_apps']}** | primary indicator: "
           f"**mean_score (S_d)**. Axis: capability tier; rows grouped by family."]
    out.append(report.capability_matrix_table(method_capability_matrix()))

    # main result table: the five main families, sorted by capability
    main = [(m, metrics.aggregate(rows_by_method.get(m, [])), cls)
            for cls in methods if cls.family in report.MAIN_FAMILIES
            for m in [cls.name]]
    out.append(report.main_table([(m, s, c) for m, s, c in main], status_notes))

    # secondary families
    for fam in ("diagnostic",):
        fam_methods = [cls for cls in methods if cls.family == fam]
        if fam_methods:
            pm = [(cls.name, metrics.aggregate(rows_by_method.get(cls.name, []))) for cls in fam_methods]
            out.append(report.family_table(fam, pm, status_notes))

    # RQ slices (capability-sorted readings of the main table)
    out.append(report.rq_slices(rows_by_method, methods))

    # role distribution + strata + audits
    summaries = [(m, metrics.aggregate(rows_by_method[m])) for m in sorted(rows_by_method)]
    out.append(report.role_distribution_table(summaries))
    scored_rbm = {m: r for m, r in rows_by_method.items() if metrics.aggregate(r).get("n")}
    out.append(report.strata_table("Mean S_d by behaviour category", scored_rbm, "category"))
    out.append(report.method_diagnostics_table(rows_by_method))
    out.append(audits.coverage_table(cov))
    out.append(audits.split_table(ss))
    out.append(audits.budget_audit_table(all_budget))
    out.append(audits.capability_declaration_table(methods))
    out.append(audits.leak_audit())

    # stats vs strongest scored baseline
    scored = [(m, metrics.aggregate(rows_by_method[m])) for m in rows_by_method
              if metrics.aggregate(rows_by_method[m]).get("n")]
    if scored:
        ref = max(scored, key=lambda x: x[1]["mean_score"])[0]
        out += ["", f"## Statistics vs strongest scored method ({ref})", "",
                "Paired bootstrap 95% CI of per-task mean_score delta (ref − method); McNemar on strict hits.",
                "", "| method | ΔmeanScore | 95% CI | McNemar χ² | p |", "|---|---|---|---|---|"]
        ref_by_task = {r["task_id"]: r for r in rows_by_method[ref]}
        scored_names = {m for m, s in scored}
        for m in sorted(rows_by_method):
            if m == ref or m not in scored_names:
                continue
            mr = {r["task_id"]: r for r in rows_by_method[m]}
            common = [tid for tid in ref_by_task if tid in mr]
            if not common:
                continue
            deltas = [ref_by_task[tid]["score"] - mr[tid]["score"] for tid in common]
            mean_d, lo, hi = stats.paired_bootstrap(deltas)
            rh = [1 if ref_by_task[tid]["strict_hit"] >= 0.5 else 0 for tid in common]
            mh = [1 if mr[tid]["strict_hit"] >= 0.5 else 0 for tid in common]
            b, c, chi, p = stats.mcnemar(rh, mh)
            out.append(f"| {m} | {mean_d:+.3f} | [{lo:+.3f}, {hi:+.3f}] | {chi:.2f} | "
                       f"{'%.3f'%p if p==p else 'n/a'} |")

    (REPORTS / "report.md").write_text("\n".join(out), encoding="utf-8")
    with (AUDITS / "budget.jsonl").open("w", encoding="utf-8") as f:
        for r in all_budget:
            f.write(json.dumps(r) + "\n")
    print(f"\nwrote {REPORTS/'report.md'}  ({secs:.1f}s total)")


if __name__ == "__main__":
    main()
