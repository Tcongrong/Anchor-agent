#!/usr/bin/env bash
set -euo pipefail

ROOT="${ANCHOR_BENCHMARK_ROOT:-/workspace/anchor-benchmark}"
if [[ ! -d "$ROOT" ]]; then
  ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/anchor-benchmark"
fi

cd "$ROOT/baselines"
exec python scripts/run_case_group_repeated.py "$@"
