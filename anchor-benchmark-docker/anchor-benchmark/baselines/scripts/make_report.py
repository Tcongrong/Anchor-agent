"""Re-build the report from cached predictions (plan v5) without re-running.

  python scripts/make_report.py
"""
import sys, json
from pathlib import Path
BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE / "src"))

from anchor_eval.core import data, splits
from anchor_eval.eval import metrics, report, audits
from anchor_eval.core.registry import method_capability_matrix, get_methods, get_method
import anchor_eval.methods._all   # noqa  (populate registry)

PRED = BASE / "artifacts" / "predictions"
REPORTS = BASE / "artifacts" / "reports"


def main():
    rows_by_method = {}
    for p in sorted(PRED.glob("*.jsonl")):
        rows = [json.loads(l) for l in p.read_text(encoding="utf-8").splitlines() if l.strip()]
        if rows:
            rows_by_method[rows[0]["method"]] = rows
    tasks, cands, files = data.load_tasks()
    cov = data.candidate_coverage_report(tasks, cands)
    ss = splits.split_summary(tasks)
    methods = get_methods()
    out = ["# Baseline Suite Report (from cached predictions)", "",
           f"Tasks: **{len(tasks)}** | apps: **{ss['n_apps']}** | primary indicator: **mean_score**."]
    out.append(report.capability_matrix_table(method_capability_matrix()))
    main = [(cls.name, metrics.aggregate(rows_by_method.get(cls.name, [])), cls)
            for cls in methods if cls.family in report.MAIN_FAMILIES]
    out.append(report.main_table(main))
    for fam in ("diagnostic",):
        pm = [(cls.name, metrics.aggregate(rows_by_method.get(cls.name, [])))
              for cls in methods if cls.family == fam]
        if pm:
            out.append(report.family_table(fam, pm))
    out.append(report.rq_slices(rows_by_method, methods))
    summaries = [(m, metrics.aggregate(r)) for m, r in sorted(rows_by_method.items())]
    out.append(report.role_distribution_table(summaries))
    out.append(report.strata_table("Mean S_d by behaviour category", rows_by_method, "category"))
    out.append(report.method_diagnostics_table(rows_by_method))
    out.append(audits.coverage_table(cov))
    out.append(audits.split_table(ss))
    out.append(audits.capability_declaration_table(methods))
    out.append(audits.leak_audit())
    REPORTS.mkdir(parents=True, exist_ok=True)
    (REPORTS / "report.md").write_text("\n".join(out), encoding="utf-8")
    print("wrote", REPORTS / "report.md")


if __name__ == "__main__":
    main()
