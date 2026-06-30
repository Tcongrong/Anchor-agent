"""Single candidate-space entry point (plan v2 §2.2).

load_tasks / extract_fc / load_oracle / build_query / candidate_coverage_report.
FC comes from the AST extractor (node/ast_extract.mjs); candidate cache is keyed
on source-files hash + extractor-code hash + oracle hash + schema version.
"""
from __future__ import annotations
import json, os, re, subprocess
from pathlib import Path
from .schema import Task, Function, CandidateSet
from .cache import dir_js_hash, file_hash, cache_get, cache_put

PKG = Path(__file__).resolve().parents[1]          # src/anchor_eval
BASE = PKG.parents[1]                                # baselines/
ROOT = BASE.parent                                   # repo root
CASES_DIR = ROOT / "benchmark_cases"
NODE = "node"
AST_EXTRACT = str(BASE / "node" / "ast_extract.mjs")
CACHE_DIR = BASE / "artifacts" / "candidates"
SCHEMA_VERSION = "v2.1"
EXTRACTOR_VERSION = "ast-acorn-1"

# No cases are excluded: case007_browser_fingerprint (previously dropped for a
# mid-statement oracle span) was rebuilt and its anchor now matches an extracted
# FC function exactly (score 1.0), so the suite runs on all 40 valid cases.
EXCLUDE = set()


def category_of(case_id: str) -> str:
    if not case_id.startswith("case"):
        return "real"
    return re.sub(r"^case\d+_", "", case_id)


def _main_bundle(files: list) -> str:
    js = [f["file"] for f in files]
    app = [f for f in js if "app.bundle" in f]
    if app:
        return app[0]
    bundle = [f for f in js if ".bundle." in f]
    if bundle:
        return bundle[0]
    return max(js, key=lambda f: next(len(x["text"]) for x in files if x["file"] == f)) if js else ""


def app_id_of(files: list) -> str:
    mb = _main_bundle(files)
    if not mb:
        return "unknown"
    base = mb.rsplit("/", 1)[-1]
    return base.split(".")[0]   # account.app.bundle.js -> account ; notify.state.bundle.js -> notify


def _extract_raw(case_dir: Path) -> dict:
    # large V8 stack so the recursive AST walk survives huge single-line bundles
    out = subprocess.run([NODE, "--stack-size=8000", AST_EXTRACT, str(case_dir)],
                         capture_output=True, text=True, encoding="utf-8")
    if out.returncode != 0:
        raise RuntimeError(f"ast_extract failed for {case_dir.name}: {out.stderr[:300]}")
    data = json.loads(out.stdout)
    # guard: a parse failure on the main bundle yields a degenerate FC; never cache it
    main = _main_bundle(data["files"])
    if main and not any(c["file"] == main for c in data["candidates"]):
        raise RuntimeError(f"ast_extract degenerate for {case_dir.name}: main bundle "
                           f"{main!r} produced 0 functions (parse failure)")
    return data


def discover_case_dirs():
    out = []
    for d in sorted(CASES_DIR.iterdir()):
        if not d.is_dir() or d.name.startswith("_"):
            continue
        if d.name in EXCLUDE:
            continue
        if not (d / "agent_hidden" / "oracle.hidden.json").exists():
            continue
        out.append(d)
    return out


def load_oracle(case_dir: Path) -> dict:
    return json.loads((case_dir / "agent_hidden" / "oracle.hidden.json").read_text(encoding="utf-8-sig"))


def load_prompt(case_dir: Path) -> str:
    """Agent-visible natural-language task prompt (agent_visible/prompt.md).

    This is the model-facing task description; it supersedes the query synthesised
    from task.json fields (build_query). Returns "" when no prompt.md is present so
    callers can fall back to build_query.
    """
    p = case_dir / "agent_visible" / "prompt.md"
    if not p.exists():
        return ""
    return p.read_text(encoding="utf-8-sig").strip()


def _build(case_dir: Path):
    """Return (Task, CandidateSet, raw_files_dict). Cached on input hashes."""
    cap = case_dir / "agent_visible" / "captures"
    oracle_p = case_dir / "agent_hidden" / "oracle.hidden.json"
    keys = {
        "schema": SCHEMA_VERSION, "extractor": EXTRACTOR_VERSION,
        "src": dir_js_hash(cap),
        "extractor_code": file_hash(Path(AST_EXTRACT)),
        "oracle": file_hash(oracle_p),
    }
    cpath = CACHE_DIR / (case_dir.name + ".json")
    blob = cache_get(cpath, keys)
    if blob is None:
        raw = _extract_raw(case_dir)
        cache_put(cpath, keys, raw)
        blob = raw
    files = blob["files"]
    task_json = blob["task"] or {}
    cid = case_dir.name
    funcs = [Function.make(cid, c["file"], c["start_offset"], c["end_offset"],
                           c.get("name", "(anon)"), c.get("kind", ""), c["code"])
             for c in blob["candidates"]]
    # dedup identical (file,start,end)
    seen, uniq = set(), []
    for f in funcs:
        k = (f.file, f.start, f.end)
        if k in seen:
            continue
        seen.add(k); uniq.append(f)
    cs = CandidateSet(cid, uniq, keys["src"], EXTRACTOR_VERSION)
    task = Task(
        task_id=cid, app_id=app_id_of(files), category=category_of(cid),
        d=load_prompt(case_dir) or build_query(task_json),
        observable=task_json.get("observable") or {},
        interaction=task_json.get("interaction") or [],
        env={"page": task_json.get("page", ""),
             "control_actions": task_json.get("control_actions")},
        oracle_ref=str(oracle_p), page=task_json.get("page", ""),
    )
    return task, cs, {f["file"]: f["text"] for f in files}


def load_tasks():
    tasks, cands, files = [], {}, {}
    for d in discover_case_dirs():
        t, cs, fl = _build(d)
        tasks.append(t); cands[t.task_id] = cs; files[t.task_id] = fl
    return tasks, cands, files


def extract_fc(case_dir: Path) -> CandidateSet:
    return _build(case_dir)[1]


API_KEEP = {"fetch", "xmlhttprequest", "sendbeacon", "crypto", "subtle", "textencoder",
            "textdecoder", "btoa", "atob", "uint8array", "dataview", "navigator",
            "canvas", "webgl", "localstorage", "json", "base64", "hex", "console",
            "header", "body", "query", "param", "token", "signature", "fingerprint",
            "encode", "decode", "payload"}
STOP = {"the", "a", "an", "of", "to", "in", "on", "for", "and", "or", "is", "are",
        "be", "that", "this", "it", "its", "as", "at", "by", "with", "from", "into",
        "after", "before", "not", "do", "does", "return", "function", "value",
        "page", "object", "field", "code", "one", "complete", "single", "anchor",
        "target", "first"}


def tokenize(text: str):
    text = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", text or "")
    toks = []
    for t in re.split(r"[^A-Za-z0-9]+", text):
        t = t.lower()
        if not t or (t in STOP and t not in API_KEEP) or (len(t) <= 1 and t not in API_KEEP):
            continue
        toks.append(t)
    return toks


def build_query(task_json: dict) -> str:
    if not task_json:
        return ""
    parts = [task_json.get("question", "")]
    obs = task_json.get("observable") or {}
    parts.append(" ".join(str(v) for v in obs.values() if v))
    for step in task_json.get("interaction", []) or []:
        parts.append(str(step.get("selector", "")))
    return "  ".join(p for p in parts if p)


def candidate_coverage_report(tasks, cands):
    """For each task, whether the primary anchor is present in FC (plan §2.2)."""
    import hashlib
    from .grader import Grader
    rows = []
    for t in tasks:
        oracle = load_oracle(CASES_DIR / t.task_id)
        g = Grader(oracle)
        cs = cands[t.task_id]
        ai = -1
        for i, f in enumerate(cs.functions):
            if g.lookup_func(f)[2]:
                ai = i; break
        rows.append({"task_id": t.task_id, "app_id": t.app_id, "category": t.category,
                     "n_candidates": len(cs.functions), "anchor_in_fc": ai >= 0})
    return rows
