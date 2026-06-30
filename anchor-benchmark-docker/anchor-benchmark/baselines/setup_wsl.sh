#!/usr/bin/env bash
# One-shot WSL / Ubuntu 24 setup for the baseline suite.
#
# Run from the repo ROOT (the directory that contains package.json, baselines/
# and benchmark_cases/) AFTER copying the project onto the native Linux FS:
#
#   bash baselines/setup_wsl.sh
#
# Idempotent: safe to re-run. Needs Node 20+ and python3 (+ python3-venv) already
# installed; everything else (node deps, Chromium, python deps) it sets up itself.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
echo "repo root: $ROOT"

# 0) must be on ext4, not a Windows drive — /mnt/* is slow and breaks Playwright/inotify
case "$ROOT" in
  /mnt/*) echo "!! WARNING: $ROOT is a Windows drive. Copy the project into ~/ (ext4) and re-run." ;;
esac

# 1) prerequisites
command -v node    >/dev/null || { echo "ERROR: install Node.js 20+ first";        exit 1; }
command -v python3 >/dev/null || { echo "ERROR: install python3 first";             exit 1; }
python3 -c 'import venv' 2>/dev/null || { echo "ERROR: run 'sudo apt install python3-venv'"; exit 1; }
echo "node $(node -v) | python $(python3 -V)"

# 2) node deps (acorn + playwright) — baselines/node/*.mjs resolve node_modules from repo root
if [ -f package-lock.json ]; then npm ci; else npm install; fi

# 3) Chromium + its OS libraries (headless works in WSL2, no X server needed).
#    --with-deps runs apt via sudo and may prompt for your password.
npx playwright install --with-deps chromium

# 4) python venv + scientific deps
python3 -m venv .venv
# shellcheck disable=SC1091
. .venv/bin/activate
python -m pip install -U pip
pip install -r baselines/requirements.txt

# 5) drop caches tainted by the prior Windows run: browser traces (must be re-captured
#    on Linux Chromium) and python bytecode. The AST candidate cache is content-hashed
#    and OS-independent, so it is kept for a faster first run.
rm -rf baselines/artifacts/evidence
find baselines -name __pycache__ -type d -prune -exec rm -rf {} + 2>/dev/null || true

# 6) smoke tests
echo "=== pytest ==="
python -m pytest baselines/tests -q

echo "=== deterministic method (no browser, no API key) ==="
python baselines/scripts/run_method.py BM25-Static

echo "=== runtime path: SITIR on ONE case (exercises Playwright Chromium) ==="
python - <<'PY'
import sys; sys.path.insert(0, "baselines/src")
from anchor_eval.core import data
from anchor_eval.core.budget import BudgetManager
from anchor_eval.core.registry import get_method
import anchor_eval.methods._all  # noqa
tasks, cands, files = data.load_tasks()
t = tasks[0]; m = get_method("SITIR")()
bm = BudgetManager("SITIR", t.task_id, {"page_triggers": 8})
p = m.localize(t, cands[t.task_id], bm)
ok = p.artifacts.get("trace_ok")
print(f"SITIR on {t.task_id}: status={p.status} trace_ok={ok} executed={p.artifacts.get('executed_size')}")
assert ok, "Playwright trace failed — re-check 'npx playwright install --with-deps chromium'"
print("PLAYWRIGHT OK")
PY

cat <<'EOF'

setup complete.
  - deterministic + runtime methods are ready.
  - LLM / agent / Debugger-Agent methods:  export ANTHROPIC_API_KEY=<your-anthropic-key>
  - full suite:        source .venv/bin/activate && python baselines/scripts/run_panel.py
  - rebuild report:    python baselines/scripts/make_report.py
EOF
