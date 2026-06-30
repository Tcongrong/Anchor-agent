#!/usr/bin/env bash
set -euo pipefail

ROOT="${ANCHOR_BENCHMARK_ROOT:-/workspace/anchor-benchmark}"
if [[ ! -d "$ROOT" ]]; then
  ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/anchor-benchmark"
fi

cd "$ROOT/baselines"

python - <<'PY'
from pathlib import Path
import json

root = Path("artifacts")
targets = [
    ("ds4pro_synthetic50", root / "case_runs"),
    ("glm52_real20_nothink", root / "case_runs_real_glm52_nothink"),
    ("ds4pro_real20_original", root / "results_ds4pro_real20_original"),
    ("glm52_synthetic50", root / "model_comparison" / "glm52_synthetic50" / "case_runs"),
]

for label, base in targets:
    print(f"\n== {label} ==")
    if not base.exists():
        print(f"missing: {base}")
        continue
    total_rows = 0
    complete = 0
    cases = []
    for d in sorted(p for p in base.iterdir() if p.is_dir() and not p.name.startswith(".")):
        raw = d / "raw.jsonl"
        status = d / "status.json"
        rows = sum(1 for line in raw.open(encoding="utf-8") if line.strip()) if raw.exists() else 0
        state = "unknown"
        if status.exists():
            try:
                state = json.loads(status.read_text(encoding="utf-8")).get("state", "unknown")
            except Exception:
                state = "bad_status"
        total_rows += rows
        complete += int(state == "complete")
        cases.append((d.name, state, rows))
    print(f"cases={len(cases)} complete={complete} rows={total_rows}")
    for name, state, rows in cases[:30]:
        print(f"  {name}: {state}, rows={rows}")
PY
