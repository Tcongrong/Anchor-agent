#!/home/luis/miniforge3/envs/locagent/bin/python
"""Run multiple case groups sequentially with per-case persistence.

This is a thin scheduler around scripts/run_case_group_repeated.py. Each case
group writes its own artifacts/case_runs/caseNNN directory, so a later failure
does not invalidate earlier completed cases.

Examples:
  python scripts/run_case_groups.py --all --repeats 3
  python scripts/run_case_groups.py --start case002 --end case010 --repeats 3
  python scripts/run_case_groups.py case001 case003 --methods Direct-LLM Exec-LLM
  python scripts/run_case_groups.py 1-tzxm 2-yngwypt --repeats 3
"""
from __future__ import annotations

import argparse
import fcntl
import json
import os
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE / "src"))
RUN_ONE = BASE / "scripts" / "run_case_group_repeated.py"
CASES_DIR = BASE.parent / "benchmark_cases"
ART = BASE / "artifacts"
BATCH_ROOT = ART / "batch_runs"
CASE_RUNS = ART / "case_runs"

import anchor_eval.methods._all  # noqa: E402,F401
from anchor_eval.core.registry import get_methods  # noqa: E402


def log(message: str) -> None:
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}", flush=True)


def acquire_batch_lock():
    lock_dir = BATCH_ROOT / ".locks"
    lock_dir.mkdir(parents=True, exist_ok=True)
    lock_path = lock_dir / "run_case_groups.lock"
    lock_file = lock_path.open("w", encoding="utf-8")
    try:
        fcntl.flock(lock_file.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError:
        raise SystemExit(f"another batch run is already active; lock={lock_path}")
    lock_file.write(f"pid={os.getpid()} started_at={datetime.now().isoformat(timespec='seconds')}\n")
    lock_file.flush()
    return lock_file


def discover_cases() -> list[str]:
    cases = set()
    for path in CASES_DIR.iterdir():
        if not path.is_dir() or path.name.startswith("_"):
            continue
        if path.name.startswith("case") and "_" in path.name:
            cases.add(path.name.split("_", 1)[0])
            continue
        if (path / "agent_hidden" / "oracle.hidden.json").exists():
            cases.add(path.name)
    return sorted(cases, key=case_sort_key)


def case_sort_key(value: str) -> tuple[int, int, str]:
    if value.startswith("case") and len(value) >= 7 and value[4:7].isdigit():
        return (0, int(value[4:7]), value)
    head = value.split("-", 1)[0]
    if head.isdigit():
        return (1, int(head), value)
    return (2, 0, value)


def selected_method_names(args: argparse.Namespace) -> list[str]:
    methods = get_methods()
    if args.families:
        allowed = set(args.families)
        methods = [m for m in methods if m.family in allowed]
    if args.methods:
        wanted = set(args.methods)
        methods = [m for m in methods if m.name in wanted]
        missing = wanted - {m.name for m in methods}
        if missing:
            raise SystemExit(f"unknown method(s): {', '.join(sorted(missing))}")
    return [m.name for m in methods]


def case_complete(case: str, repeats: int, expected_methods: list[str]) -> bool:
    status_path = CASE_RUNS / case / "status.json"
    manifest_path = CASE_RUNS / case / "manifest.json"
    if not status_path.exists():
        return False
    try:
        status = json.loads(status_path.read_text(encoding="utf-8"))
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except Exception:
        return False
    if sorted(manifest.get("methods", [])) != sorted(expected_methods):
        return False
    return (
        status.get("state") == "complete"
        and int(status.get("repeats", 0) or 0) == repeats
        and int(status.get("completed_rows", 0) or 0) == int(status.get("total_rows", -1) or -1)
    )


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")


def write_batch_summary(batch_dir: Path, rows: list[dict]) -> None:
    lines = [
        "# Batch Run Summary",
        "",
        "| case | status | returncode | seconds | rows | out_dir |",
        "|---|---|---:|---:|---:|---|",
    ]
    for row in rows:
        lines.append(
            "| {case} | {status} | {returncode} | {seconds:.1f} | {rows} | {out_dir} |".format(
                **{
                    **row,
                    "seconds": float(row.get("seconds", 0.0) or 0.0),
                    "rows": row.get("rows", ""),
                }
            )
        )
    (batch_dir / "summary.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    with (batch_dir / "summary.jsonl").open("w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")


def raw_rows_for(case: str) -> int:
    raw = CASE_RUNS / case / "raw.jsonl"
    if not raw.exists():
        return 0
    with raw.open("r", encoding="utf-8") as f:
        return sum(1 for line in f if line.strip())


def select_cases(args: argparse.Namespace) -> list[str]:
    available = discover_cases()
    if args.all:
        selected = available
    elif args.cases:
        selected = [normalize_case(c) for c in args.cases]
    else:
        selected = available
    if args.start:
        start = normalize_case(args.start)
        selected = [c for c in selected if c >= start]
    if args.end:
        end = normalize_case(args.end)
        selected = [c for c in selected if c <= end]
    unknown = sorted(set(selected) - set(available))
    if unknown:
        raise SystemExit(f"unknown case group(s): {', '.join(unknown)}")
    return selected


def normalize_case(value: str) -> str:
    value = value.strip()
    if value.startswith("case"):
        case_value = value.split("_", 1)[0]
        if len(case_value) == 7 and case_value[4:].isdigit():
            return case_value
    case_dir = CASES_DIR / value
    if (case_dir / "agent_hidden" / "oracle.hidden.json").exists():
        return value
    raise SystemExit(f"unknown case group or task {value!r}")


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("cases", nargs="*", help="case groups or exact one-task benchmark ids")
    p.add_argument("--all", action="store_true", help="run all discovered case groups and exact one-task benchmark dirs")
    p.add_argument("--start", help="first case group to run, inclusive")
    p.add_argument("--end", help="last case group to run, inclusive")
    p.add_argument("--repeats", type=int, default=3)
    p.add_argument("--methods", nargs="*", help="optional method names passed to the single-case runner")
    p.add_argument("--families", nargs="*", help="optional family filter passed to the single-case runner")
    p.add_argument("--skip-complete", action="store_true", help="skip case dirs already complete for this repeat count")
    p.add_argument("--append", action="store_true", help="pass --append to the single-case runner")
    p.add_argument("--stop-on-failure", action="store_true", help="stop the batch after a failed case")
    p.add_argument("--dry-run", action="store_true", help="print planned commands without running them")
    p.add_argument("--batch-dir", type=Path, help="override artifacts/batch_runs/<timestamp>")
    return p.parse_args()


def main() -> int:
    args = parse_args()
    lock_file = acquire_batch_lock()
    cases = select_cases(args)
    expected_methods = selected_method_names(args)
    if not cases:
        raise SystemExit("no case groups selected")

    run_id = datetime.now().strftime("%Y%m%d_%H%M%S")
    batch_dir = args.batch_dir or (BATCH_ROOT / run_id)
    batch_dir.mkdir(parents=True, exist_ok=True)
    status_path = batch_dir / "status.json"
    rows: list[dict] = []

    manifest = {
        "run_id": run_id,
        "cases": cases,
        "repeats": args.repeats,
        "methods": expected_methods,
        "families": args.families,
        "skip_complete": args.skip_complete,
        "append": args.append,
        "stop_on_failure": args.stop_on_failure,
        "batch_dir": str(batch_dir),
    }
    write_json(batch_dir / "manifest.json", manifest)
    log(
        f"batch start cases={len(cases)} methods={len(expected_methods)} "
        f"repeats={args.repeats} batch_dir={batch_dir}"
    )

    for idx, case in enumerate(cases, start=1):
        if args.skip_complete and case_complete(case, args.repeats, expected_methods):
            row = {
                "case": case,
                "status": "skipped_complete",
                "returncode": 0,
                "seconds": 0.0,
                "rows": raw_rows_for(case),
                "out_dir": str(CASE_RUNS / case),
            }
            rows.append(row)
            write_batch_summary(batch_dir, rows)
            write_json(status_path, {"state": "running", "current": None, "completed_cases": len(rows), "total_cases": len(cases)})
            log(f"[{idx}/{len(cases)}] skip complete {case}")
            continue

        cmd = [sys.executable, str(RUN_ONE), case, "--repeats", str(args.repeats)]
        if args.methods:
            cmd.extend(["--methods", *args.methods])
        if args.families:
            cmd.extend(["--families", *args.families])
        if args.append:
            cmd.append("--append")

        log_path = batch_dir / f"{case}.log"
        current = {"case": case, "index": idx, "total_cases": len(cases), "log": str(log_path)}
        write_json(status_path, {"state": "running", "current": current, "completed_cases": len(rows), "total_cases": len(cases)})
        log(f"[{idx}/{len(cases)}] start {case}: {' '.join(cmd)}")
        if args.dry_run:
            row = {"case": case, "status": "dry_run", "returncode": 0, "seconds": 0.0, "rows": "", "out_dir": str(CASE_RUNS / case)}
            rows.append(row)
            write_batch_summary(batch_dir, rows)
            continue

        start = time.time()
        with log_path.open("w", encoding="utf-8") as log_file:
            log_file.write(f"$ {' '.join(cmd)}\n")
            log_file.flush()
            proc = subprocess.run(
                cmd,
                cwd=str(BASE),
                env=os.environ.copy(),
                stdout=log_file,
                stderr=subprocess.STDOUT,
                text=True,
            )
        seconds = round(time.time() - start, 3)
        case_status_path = CASE_RUNS / case / "status.json"
        case_state = "unknown"
        if case_status_path.exists():
            try:
                case_state = json.loads(case_status_path.read_text(encoding="utf-8")).get("state", "unknown")
            except Exception:
                case_state = "status_parse_failed"
        status = "complete" if proc.returncode == 0 and case_state == "complete" else "failed"
        row = {
            "case": case,
            "status": status,
            "case_state": case_state,
            "returncode": proc.returncode,
            "seconds": seconds,
            "rows": raw_rows_for(case),
            "out_dir": str(CASE_RUNS / case),
            "log": str(log_path),
        }
        rows.append(row)
        write_batch_summary(batch_dir, rows)
        write_json(status_path, {"state": "running", "current": None, "completed_cases": len(rows), "total_cases": len(cases)})
        log(f"[{idx}/{len(cases)}] done {case} status={status} returncode={proc.returncode} seconds={seconds:.1f}")
        if status != "complete" and args.stop_on_failure:
            write_json(status_path, {"state": "failed", "current": None, "completed_cases": len(rows), "total_cases": len(cases)})
            return proc.returncode or 1

    failed = [r for r in rows if r["status"] == "failed"]
    final_state = "complete" if not failed else "complete_with_failures"
    write_json(status_path, {"state": final_state, "current": None, "completed_cases": len(rows), "total_cases": len(cases)})
    write_batch_summary(batch_dir, rows)
    log(f"batch {final_state}: wrote {batch_dir}")
    return 0 if not failed else 1


if __name__ == "__main__":
    raise SystemExit(main())
