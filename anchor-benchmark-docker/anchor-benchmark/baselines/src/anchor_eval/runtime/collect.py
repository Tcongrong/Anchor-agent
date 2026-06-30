"""Runtime evidence collection (plan v2 §3.1-3.3) via node/exec_v2.mjs.

Evidence is collected once and cached (keyed on candidate_manifest_hash) so the
methods can read it without re-launching a browser per localize() call. Each
method asserts the runtime ops it will use against its CapabilityGate at the
start of localize() (BaseLocalizer.require_ops) and charges BudgetManager from
the evidence metadata, so capability/budget audits stay honest.
"""
from __future__ import annotations
import json, os, glob, subprocess
from pathlib import Path
from ..core.schema import Evidence

PKG = Path(__file__).resolve().parents[1]
BASE = PKG.parents[1]
EXEC = str(BASE / "node" / "exec_v2.mjs")
EVDIR = BASE / "artifacts" / "evidence"
EVDIR.mkdir(parents=True, exist_ok=True)

# Windows dev machine's bundled Chromium; only used if it actually exists.
_WIN_CHROME = "C:/Users/14590/AppData/Local/ms-playwright/chromium-1208/chrome-win64/chrome.exe"


def chrome_executable() -> str | None:
    """Resolve a Chromium executable cross-platform.

    Priority: explicit $PW_CHROME -> the Windows dev default (if present) ->
    a Linux ms-playwright cache install -> None. Returning None lets the node
    scripts pass executablePath=undefined so Playwright uses its bundled browser
    (the normal case after `playwright install chromium` on Ubuntu).
    """
    env = os.environ.get("PW_CHROME")
    if env:
        return env
    if os.path.exists(_WIN_CHROME):
        return _WIN_CHROME
    cands = sorted(glob.glob(os.path.expanduser(
        "~/.cache/ms-playwright/chromium-*/chrome-linux/chrome")))
    return cands[-1] if cands else None


def _env():
    e = dict(os.environ)
    ch = chrome_executable()
    if ch and not e.get("PW_CHROME"):
        e["PW_CHROME"] = ch
    return e


def _run(case_dir: Path, mode: str, probe_plan=None, timeout=180):
    env = _env()
    if probe_plan is not None:
        env["PROBE_PLAN"] = json.dumps(probe_plan)
    r = subprocess.run(["node", EXEC, str(case_dir), mode], capture_output=True,
                       text=True, encoding="utf-8", env=env, timeout=timeout)
    if not r.stdout.strip():
        return {"ok": False, "error": (r.stderr or "no stdout")[:300]}
    return json.loads(r.stdout)


def collect_external(task, cs, case_dir: Path, force=False) -> Evidence:
    p = EVDIR / f"{task.task_id}.external.json"
    cmh = cs.source_manifest_hash
    if p.exists() and not force:
        blob = json.loads(p.read_text(encoding="utf-8-sig"))
        if blob.get("candidate_manifest_hash") == cmh:
            return Evidence(**blob)
    payload = _run(case_dir, "outputaware")
    ev = Evidence(task.task_id, "external", cmh, cmh, payload)
    p.write_text(json.dumps(ev.to_json()), encoding="utf-8")
    return ev


def collect_fixedprobe(task, cs, case_dir: Path, probe_plan, force=False) -> Evidence:
    p = EVDIR / f"{task.task_id}.debugger.json"
    cmh = cs.source_manifest_hash
    plan_key = ",".join(f"{x['file']}:{x['offset']}" for x in probe_plan)
    if p.exists() and not force:
        blob = json.loads(p.read_text(encoding="utf-8-sig"))
        if blob.get("candidate_manifest_hash") == cmh and blob.get("runtime_manifest_hash") == _hash(plan_key):
            return Evidence(**blob)
    payload = _run(case_dir, "fixedprobe", probe_plan=probe_plan)
    ev = Evidence(task.task_id, "debugger", cmh, _hash(plan_key), payload)
    p.write_text(json.dumps(ev.to_json()), encoding="utf-8")
    return ev


def _hash(s: str) -> str:
    import hashlib
    return hashlib.sha256(s.encode()).hexdigest()[:16]


TRACER = str(BASE / "node" / "exec_tracer.mjs")
VALUE_TRACER = str(BASE / "node" / "value_trace.mjs")


def collect_valueslice(task, cs, case_dir: Path, max_events=200000, force=False) -> Evidence:
    """Value-flow trace for JS-DynSlice (function entry args + return fingerprints)."""
    p = EVDIR / f"{task.task_id}.valueslice.json"
    cmh = cs.source_manifest_hash
    rmh = _hash(f"valueslice:v2:{max_events}")
    if p.exists() and not force:
        blob = json.loads(p.read_text(encoding="utf-8-sig"))
        if blob.get("candidate_manifest_hash") == cmh and blob.get("runtime_manifest_hash") == rmh:
            return Evidence(**blob)
    env = _env()
    r = subprocess.run(["node", VALUE_TRACER, str(case_dir), str(max_events)],
                       capture_output=True, text=True, encoding="utf-8", env=env, timeout=240)
    payload = json.loads(r.stdout) if r.stdout.strip() else {"ok": False, "error": (r.stderr or "no stdout")[:300]}
    ev = Evidence(task.task_id, "valueslice", cmh, rmh, payload)
    p.write_text(json.dumps(ev.to_json()), encoding="utf-8")
    return ev


def collect_trace(task, cs, case_dir: Path, budget=50000, force=False, control=None) -> Evidence:
    """Function-entry trace. control: None -> feature run (task.interaction);
    "load" -> page-load-only control; list -> custom control interaction (Software-Recon)."""
    tag = "trace" if control is None else f"trace.control.{control if isinstance(control, str) else 'custom'}"
    p = EVDIR / f"{task.task_id}.{tag}.json"
    cmh = cs.source_manifest_hash
    ckey = control if isinstance(control, (str, type(None))) else json.dumps(control)
    rmh = _hash(f"trace:{budget}:{ckey}")
    if p.exists() and not force:
        blob = json.loads(p.read_text(encoding="utf-8-sig"))
        if blob.get("candidate_manifest_hash") == cmh and blob.get("runtime_manifest_hash") == rmh:
            return Evidence(**blob)
    env = _env()
    if control is not None:
        env["TRACE_CONTROL"] = control if isinstance(control, str) else json.dumps(control)
    r = subprocess.run(["node", TRACER, str(case_dir), str(budget)], capture_output=True,
                       text=True, encoding="utf-8", env=env, timeout=180)
    payload = json.loads(r.stdout) if r.stdout.strip() else {"ok": False, "error": (r.stderr or "no stdout")[:300]}
    ev = Evidence(task.task_id, tag, cmh, rmh, payload)
    p.write_text(json.dumps(ev.to_json()), encoding="utf-8")
    return ev
