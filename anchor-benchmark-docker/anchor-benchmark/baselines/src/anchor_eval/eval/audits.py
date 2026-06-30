"""Audit tables (plan v5 §10.2 / §10.11 / §10.12): budget, coverage, split,
capability declaration, leak/fairness."""
from __future__ import annotations
import statistics
from pathlib import Path


def capability_declaration_table(methods):
    """Realise the §10.2 matrix: each method's machine-checked allowed op set."""
    from ..core.capability import CapabilityGate
    lines = ["", "## Capability declaration (machine-checked, §10.2)", "",
             "| method | capability | allowed ops |", "|---|---|---|"]
    for cls in sorted(methods, key=lambda c: (c.capability, c.name)):
        try:
            ops = CapabilityGate(cls.name, cls.capability, cls.forbidden).declared_ops()
        except Exception as e:
            ops = [f"<error: {e}>"]
        lines.append(f"| {cls.name} | {cls.capability} | {', '.join(ops)} |")
    return "\n".join(lines)


def leak_audit():
    """Static leak/fairness check (§10.12): flag any method module that imports the
    grader / hidden oracle or reads cross-method artifacts."""
    methods_dir = Path(__file__).resolve().parents[1] / "methods"
    bad = []
    for p in methods_dir.rglob("*.py"):
        txt = p.read_text(encoding="utf-8", errors="ignore")
        rel = p.relative_to(methods_dir).as_posix()
        touches = ("core.grader" in txt or "load_oracle" in txt or "oracle.hidden" in txt
                   or "import Grader" in txt)
        if touches:
            bad.append(rel)
    lines = ["", "## Leak / fairness audit (§10.12)", ""]
    lines.append(f"- modules importing grader/oracle: **{len(bad)}**")
    lines.append("- leak offenders: **{}**{}".format(len(bad), f" — {bad}" if bad else " ✓"))
    return "\n".join(lines)


def budget_audit_table(budget_rows):
    dims = ["page_triggers", "breakpoints_set", "pause_hits", "llm_calls",
            "llm_input_tokens", "llm_output_tokens", "wall_clock_sec"]
    by_method = {}
    for r in budget_rows:
        by_method.setdefault(r["method"], []).append(r)
    lines = ["", "## Budget audit (per-task means)", "",
             "| method | " + " | ".join(dims) + " |", "|" + "---|" * (1 + len(dims))]
    for m in sorted(by_method):
        rows = by_method[m]
        cells = []
        for d in dims:
            vals = [r.get(d, 0) for r in rows]
            cells.append(f"{statistics.mean(vals):.1f}" if vals else "0")
        lines.append(f"| {m} | " + " | ".join(cells) + " |")
    return "\n".join(lines)


def coverage_table(cov_rows):
    n = len(cov_rows)
    infc = sum(1 for r in cov_rows if r["anchor_in_fc"])
    med = int(statistics.median(r["n_candidates"] for r in cov_rows))
    mx = max(r["n_candidates"] for r in cov_rows)
    miss = [r["task_id"] for r in cov_rows if not r["anchor_in_fc"]]
    lines = ["", "## Candidate coverage", "",
             f"- anchor present in FC: **{infc}/{n}**" + (f" (missing: {miss})" if miss else ""),
             f"- |FC| median **{med}**, max **{mx}**"]
    return "\n".join(lines)


def split_table(split_summary):
    lines = ["", "## Application-grouped split", "",
             f"- apps: **{split_summary['n_apps']}**  | supervised_exploratory: "
             f"**{split_summary['supervised_exploratory']}**",
             "- app sizes: " + ", ".join(f"{a}={n}" for a, n in split_summary["apps"].items())]
    return "\n".join(lines)
