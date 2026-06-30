"""Report rendering: capability-axis tables + baseline analysis slices."""
from __future__ import annotations
from .metrics import aggregate, by_strata, KS
from ..core.registry import get_method, CAPABILITY_ORDER

MAIN_FAMILIES = ["classical", "llm_localization", "code_agent", "matched_control"]

FAMILY_TITLE = {
    "classical": "Classical program localization / analysis",
    "llm_localization": "Published LLM code localization",
    "code_agent": "Off-the-shelf code agents (static here)",
    "matched_control": "Debugger-capability code agent",
    "diagnostic": "Diagnostics (lower bounds / probes)",
}

# RQ -> ordered method names (capability-sorted readings of the main table)
RQ_SLICES = {
    "RQ1 — can classical methods localize modern Web runtime behaviour?":
        ["LSI-FL", "SITIR", "Software-Recon", "JS-DynSlice"],
    "RQ2 — do published LLM localization methods transfer?":
        ["Direct-LLM", "Agentless-Loc"],
    "RQ3 — can off-the-shelf code agents do it directly?":
        ["SWE-agent", "LocAgent-JS", "Debugger-Agent"],
}


def _fmt(x, n=3):
    return f"{x:.{n}f}" if isinstance(x, (int, float)) else str(x)


def capability_matrix_table(rows):
    h = ("| method | family | paper | capability | fidelity | TC1 | TC2 | TC3 | loop "
         "| sup | forbidden |")
    s = ["", "## Capability matrix (auto-generated, §2-3)", "", h, "|" + "---|" * 11]
    for r in rows:
        s.append("| {method} | {family} | {paper} | {capability} | {fidelity} | {TC1} | {TC2} | "
                 "{TC3} | {loop} | {sup} | {f} |".format(
                     f=", ".join(r["forbidden"]) or "-", sup="Y" if r["supervised"] else "-", **r))
    return "\n".join(s)


def _scored_row(method, s, cls=None):
    if not s.get("n"):
        return None
    extra = ""
    if cls is not None:
        extra = f" {cls.family} | {cls.capability} | {cls.paper_id or '—'} | {cls.fidelity} |"
    return ("| {m} |{extra} {ms} | {sa} | {r1} | {n} |".format(
        m=method, extra=extra, ms=_fmt(s["mean_score"]),
        sa=_fmt(s["strict_accuracy"]), r1=_fmt(s["recall@1"]), n=s["n"]))


def main_table(method_summaries, status_notes=None):
    """method_summaries: list of (method, summary, cls). Capability-sorted main table."""
    lines = ["", "## Main result table (by capability tier, §3)", "",
             "| method | family | capability | paper | fidelity | mean_score | strict_acc | recall@1 | n |",
             "|" + "---|" * 9]
    def keyf(item):
        m, s, cls = item
        return (CAPABILITY_ORDER.get(cls.capability, 9),
                -(s.get("mean_score", -1) if s.get("n") else -1))
    for m, s, cls in sorted(method_summaries, key=keyf):
        if not s.get("n"):
            note = (status_notes or {}).get(m, "not run")
            lines.append(f"| {m} | {cls.family} | {cls.capability} | {cls.paper_id or '—'} | "
                         f"{cls.fidelity} | n/a ({note}) | n/a | n/a | 0 |")
            continue
        lines.append(f"| {m} | {cls.family} | {cls.capability} | {cls.paper_id or '—'} | {cls.fidelity} | "
                     f"{_fmt(s['mean_score'])} | {_fmt(s['strict_accuracy'])} | {_fmt(s['recall@1'])} | {s['n']} |")
    return "\n".join(lines)


def family_table(family, method_summaries, status_notes=None):
    lines = ["", f"## {FAMILY_TITLE.get(family, family)}", "",
             "| method | mean_score | strict_acc | recall@1 | n |", "|" + "---|" * 5]
    def keyf(ms):
        return ms[1].get("mean_score", -1) if ms[1].get("n") else -1
    for method, s in sorted(method_summaries, key=keyf, reverse=True):
        if not s.get("n"):
            note = (status_notes or {}).get(method, "not run")
            lines.append(f"| {method} | n/a ({note}) | n/a | n/a | 0 |")
            continue
        lines.append(f"| {method} | {_fmt(s['mean_score'])} | {_fmt(s['strict_accuracy'])} | "
                     f"{_fmt(s['recall@1'])} | {s['n']} |")
    return "\n".join(lines)


def rq_slices(rows_by_method, methods):
    present = {cls.name for cls in methods}
    lines = ["", "## RQ slices (§6)"]
    for title, names in RQ_SLICES.items():
        rows = [n for n in names if n in present]
        if not rows:
            continue
        lines += ["", f"### {title}", "", "| method | mean_score | strict_acc | recall@1 | n |",
                  "|" + "---|" * 5]
        for n in rows:
            s = aggregate(rows_by_method.get(n, []))
            if not s.get("n"):
                lines.append(f"| {n} | n/a | n/a | n/a | 0 |")
            else:
                lines.append(f"| {n} | {_fmt(s['mean_score'])} | {_fmt(s['strict_accuracy'])} | "
                             f"{_fmt(s['recall@1'])} | {s['n']} |")
    return "\n".join(lines)


# per-method diagnostic artifact fields worth surfacing (§10.11)
_DIAG_KEYS = ["query_corpus_overlap", "executed_size", "trace_ok", "control_scenario_unavailable",
              "feature_specific_size", "break_at_native", "slice_size",
              "backward_path_reaches_target", "slice_truncated", "submitted", "agent_steps",
              "page_trigger_rate", "passes", "shortlist", "suspicious", "breakpoints"]


def method_diagnostics_table(rows_by_method):
    import statistics
    rows = []
    for m in sorted(rows_by_method):
        vals = {}
        for k in _DIAG_KEYS:
            xs = [r["artifacts"][k] for r in rows_by_method[m]
                  if isinstance(r.get("artifacts"), dict) and k in r["artifacts"]
                  and isinstance(r["artifacts"][k], (int, float, bool))]
            if xs:
                vals[k] = statistics.mean(float(x) for x in xs)
        if vals:
            rows.append((m, vals))
    if not rows:
        return ""
    keys = [k for k in _DIAG_KEYS if any(k in v for _, v in rows)]
    lines = ["", "## Per-method diagnostics (artifact means, §10.11)", "",
             "| method | " + " | ".join(keys) + " |", "|" + "---|" * (1 + len(keys))]
    for m, vals in rows:
        cells = [(f"{vals[k]:.2f}" if k in vals else "-") for k in keys]
        lines.append(f"| {m} | " + " | ".join(cells) + " |")
    return "\n".join(lines)


def strata_table(title, method_rows, key):
    strata_vals = sorted({r.get(key) for rows in method_rows.values() for r in rows}, key=str)
    lines = ["", f"## {title}", "", "| method | " + " | ".join(str(v) for v in strata_vals) + " |",
             "|" + "---|" * (1 + len(strata_vals))]
    for m in sorted(method_rows):
        bs = by_strata(method_rows[m], key)
        cells = [(_fmt(bs[v]["mean_score"], 2) if v in bs and bs[v].get("n") else "-") for v in strata_vals]
        lines.append(f"| {m} | " + " | ".join(cells) + " |")
    return "\n".join(lines)


def role_distribution_table(method_summaries):
    roles = ["Anchor", "Nested target-specific helper", "Core utility", "Path-critical",
             "Path/Wrapper", "Wrapper", "Path-generic-helper", "Off-chain", "Abstain", "None"]
    present = [r for r in roles if any(s.get("role_dist", {}).get(r) for _, s in method_summaries)]
    lines = ["", "## Failure matrix — top-1 role distribution", "",
             "| method | " + " | ".join(present) + " |", "|" + "---|" * (1 + len(present))]
    for m, s in method_summaries:
        if not s.get("n"):
            continue
        rd = s.get("role_dist", {})
        lines.append(f"| {m} | " + " | ".join(str(rd.get(r, 0)) for r in present) + " |")
    return "\n".join(lines)
