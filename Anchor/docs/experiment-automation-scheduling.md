# Anchor Benchmark Experiment Automation — Analysis & Scheduling Guide

This document explains how the benchmark automation scripts work, how `reverse-anchor-result.json` fits into the pipeline, and practical strategies for scheduling unattended experiment runs.

---

## 1. Overview

The Anchor project ships a **benchmark harness** for running 50 anchor-finding tasks (IDs 1–50) against packaged web applications. The harness automates:

1. Serving a benchmark page
2. Preprocessing (AST export, instrumentation, static analysis)
3. Running the Anchor Agent (`main.js`) with browser automation
4. Archiving final results per benchmark

Two entry scripts orchestrate this:

| Script | Role |
|--------|------|
| `run-experiment.js` | Runs **one** benchmark by ID |
| `run-experiment-range.js` | Runs a **sequential batch** of benchmarks by ID range |

Benchmark **web apps** are loaded from a configurable root directory (`--benchmark-dir` or `ANCHOR_BENCHMARK_DIR`); task definitions and automation scripts remain in the Anchor repo. See [§2 Benchmark directory configuration](#benchmark-directory-configuration).

`reverse-anchor-result.json` is **not** produced by `run-experiment-range.js` directly. It is an **intermediate artifact** written during each Agent iteration inside `main.js`, then consumed by the confidence-update step. Understanding it is essential for debugging failed runs and designing result-collection pipelines.

---

## 2. Architecture: End-to-End Pipeline

```
run-experiment-range.js
        │
        ▼ (for each ID in [from..to])
runSingleExperiment()  ← run-experiment.js
        │
        ├─ 1. npm run serve          (<benchmark-dir>/<case>/agent_hidden)
        ├─ 2. copy auto/<case>.js → browser-automation.js
        ├─ 3. run-preprocess.js      (Chrome + AST + static graph + func dict)
        ├─ 4. refresh browser page   (CDP reload)
        ├─ 5. main.js --auto …       (Anchor Agent loop)
        │       │
        │       ├─ TC1  select-anchors.js
        │       └─ loop (up to maxIterations):
        │             TC2  select-breakpoint.js
        │             TC3  collect-breakpoint-observations.js
        │             reverse-anchor-recovery → reverse-anchor-result.json  ◄──
        │             update-confidence.js
        │             convergence check
        │
        ├─ 6. copy anchor-agent-result.json → result_glm/<label>.json
        ├─ 7. cleanup cdp-workflow/cdp-ast-output/asts/
        └─ 8. close Chrome + kill serve process
```

### Benchmark registry

IDs map to cases via `lib/benchmark-registry.js` and `lib/benchmark-tasks.json`:

- **50 benchmarks** = 10 cases × 5 task types each
- ID formula: `caseNum = ceil(id / 5)`, sub-index = `(id - 1) % 5`
- Labels like `2_2` are saved as `result_glm/2_2.json`
- Task metadata (description, reference value / value pattern) lives in `lib/benchmark-tasks.json` under the Anchor repo
- Browser automation scripts always come from `auto/<case>.js` in the Anchor repo (not from the benchmark directory)

List all benchmarks (and confirm the resolved root directory):

```bash
node run-experiment.js --list
node run-experiment.js --list --benchmark-dir "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"
```

### Benchmark directory configuration

By default, case apps are loaded from `Anchor/benchmark/`. You can point the harness at an **external case tree** (e.g. the Docker benchmark package) without moving files into the Anchor repo.

| Mechanism | Precedence | Example |
|-----------|------------|---------|
| `--benchmark-dir <dir>` | Highest (CLI) | `--benchmark-dir "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"` |
| `ANCHOR_BENCHMARK_DIR` | Default when CLI omitted | `$env:ANCHOR_BENCHMARK_DIR = "D:\...\benchmark_cases"` |
| Built-in default | When neither is set | `Anchor/benchmark/` |

Resolution rules (`resolveBenchmarkRoot()` in `lib/benchmark-registry.js`):

- **Absolute paths** are used as-is (normalized)
- **Relative paths** are resolved against the Anchor repo root (`Anchor/`)

For benchmark ID `N` with case name `case002_byte_array_transformation`, the harness expects:

```
<benchmark-dir>/
  case002_byte_array_transformation/
    agent_hidden/              ← npm run serve runs here
      package.json
      dist/ …
```

Everything else in the Anchor pipeline (Agent code, preprocessing, `auto/*.js`, results) still runs from `Anchor/`. Only the **served web app** is loaded from the configured benchmark root.

**Example — external benchmark_cases tree:**

```
D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases\
  case001_browser_fingerprint\agent_hidden\
  case002_byte_array_transformation\agent_hidden\
  …
  case010_type_array_transformation\agent_hidden\
```

At runtime, logs include the resolved serve path, e.g. `Serve 目录: D:\...\benchmark_cases\case002_byte_array_transformation\agent_hidden`.

---

## 3. `run-experiment-range.js` — Detailed Analysis

### Purpose

A thin **batch wrapper** around `runSingleExperiment()` from `run-experiment.js`. It iterates IDs sequentially, aggregates success/failure, and exits with a non-zero code if any experiment failed.

### CLI interface

```bash
node run-experiment-range.js --from <n> --to <n> [options]
```

| Flag | Default | Description |
|------|---------|-------------|
| `--from` / `--to` | *(required)* | Inclusive ID range, **1–50** |
| `--continue-on-error` | off | Continue batch after a failed ID |
| `--benchmark-dir <dir>` | `benchmark/` or `ANCHOR_BENCHMARK_DIR` | Root directory containing `caseNNN_*` folders |
| `--chrome <path>` | `D:\Projects\debug_tool\CDP\chrome-win64\chrome.exe` | Chrome executable |
| `--output-dir <dir>` | `result_glm/` | Per-benchmark result archive |
| `--serve-port <n>` | `4173` | Port for `npm run serve` |
| `--port` / `--host` | `9222` / `localhost` | CDP debug endpoint |
| `--skip-serve` | off | Use existing server; requires `--url` |
| `--skip-preprocess` | off | Skip AST/static preprocessing |
| `--skip-agent` | off | Preprocess only; do not run Agent |

The same flags (except `--from` / `--to`) apply to **`run-experiment.js`** for single-ID runs (`--id` instead of range).

### Execution semantics

1. **Strictly sequential** — one benchmark at a time; no parallelism inside the script.
2. **Isolated lifecycle per ID** — each experiment starts/stops its own serve process and closes Chrome in a `finally` block.
3. **Shared working directory** — intermediate files (`reverse-anchor-result.json`, `causual-graph.json`, etc.) are overwritten on each run. Only the final `anchor-agent-result.json` is copied to `result_glm/<label>.json` before the next ID starts.
4. **Exit codes** — `0` if all succeeded; `1` if validation fails, a single run fails (without `--continue-on-error`), or any run in the batch failed.

### Example commands

```bash
# Full batch, IDs 1–10
node run-experiment-range.js --from 1 --to 10

# Partial rerun with failure tolerance
node run-experiment-range.js --from 25 --to 30 --continue-on-error

# Custom Chrome and output directory
node run-experiment-range.js --from 1 --to 50 \
  --chrome "D:\path\to\chrome.exe" \
  --output-dir "D:\experiments\run-2026-06-30"

# External benchmark_cases directory (e.g. anchor-benchmark-docker)
node run-experiment-range.js --from 1 --to 10 --continue-on-error \
  --benchmark-dir "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"

# Same via environment variable (PowerShell)
$env:ANCHOR_BENCHMARK_DIR = "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"
node run-experiment-range.js --from 1 --to 5 --continue-on-error

# Preprocess-only smoke test (no LLM / Agent)
node run-experiment-range.js --from 1 --to 3 --skip-agent
```

---

## 4. `reverse-anchor-result.json` — Detailed Analysis

### Role in the Agent loop

During each main-loop turn, `runAnchorAgent()` (in `cdp-workflow/src/modules/anchor-agent/index.js`):

1. Runs TC2 (breakpoint selection) and TC3 (CDP collection + causal graph update)
2. Calls `runReverseAnchorRecovery()` → writes **`reverse-anchor-result.json`**
3. Passes that file to `runConfidenceUpdate()` to update `anchor-selection.json`

The file is therefore a **per-turn snapshot of reverse anchor recovery**, not the final experiment output. After convergence, the definitive result lives in `anchor-agent-result.json` (archived to `result_glm/<label>.json` by the harness).

### Top-level schema (key fields)

```json
{
  "turn": 4,
  "taskDescription": "...",
  "observation": {
    "functionTag": "...",
    "varName": "...",
    "value": "...",
    "callChain": ["...", "..."]
  },
  "observationRelevance": { "related": true, "score": 1, "reason": "..." },
  "tvn": {
    "id": "value:...",
    "type": "value",
    "functionTag": "...",
    "varName": "...",
    "value": "...",
    "capturedAt": "..."
  },
  "reverseTraverse": {
    "startTag": "...",
    "maxDepth": 7,
    "candidateCount": 15,
    "paths": { "...": ["...", "..."] },
    "distances": { "...": 0 },
    "directions": { "...": "origin|caller|callee" }
  },
  "candidates": [ { "tag": "...", "functionName": "...", "distance": 1 } ],
  "candidateScores": [ { "tag": "...", "score": 1.0, "reason": "..." } ],
  "anchorCandidate": "...",
  "bestScore": 1,
  "reflection": null,
  "theta": 0.7,
  "anchorHistory": { "version": 1, "turns": [ ... ] },
  "patternC": false,
  "generatedAt": "2026-06-27T08:30:21.339Z"
}
```

### Field guide

| Field | Meaning |
|-------|---------|
| `turn` | Causal-graph turn when this recovery ran |
| `observation` | Breakpoint observation (function, variable, captured value, call chain) |
| `tvn` | **Target Value Node** — the value whose origin the Agent is tracing |
| `reverseTraverse` | BFS over the causal graph (callers + callees) to enumerate candidates |
| `candidateScores` | LLM judgments: how likely each candidate is the anchor function |
| `anchorCandidate` | Selected **f\*** (tag of best candidate with score ≥ `theta`) |
| `bestScore` | Highest score among candidates this turn |
| `reflection` | Optional rejection of an “isolated perfect score” false positive |
| `anchorHistory` | Cumulative LLM scores across all turns (can grow large over many runs) |

### Sample interpretation

The checked-in `reverse-anchor-result.json` corresponds to **benchmark 2_2** (`byte_payload` / `packet.transform`). It shows:

- TVN value: `bp_U3-PAYA8PPiwPIK6Z__bKsrY`
- Anchor candidate: `encodeByteArrayEnvelope@514:0` with `bestScore: 1`
- 15 reverse-traverse candidates scored by the LLM

### Important caveats for automation

1. **Single shared path** — default location is repo root: `Anchor/reverse-anchor-result.json`. Batch runs overwrite it every Agent turn; only the last turn of the last benchmark remains on disk unless you copy it elsewhere.
2. **Large file size** — `anchorHistory` accumulates scores across turns and prior tasks. Long batch runs can produce multi-MB files. Consider archiving per-benchmark if you need post-hoc analysis of reverse recovery.
3. **Not the graded output** — for benchmark evaluation, use `result_glm/<label>.json` (`anchor-agent-result.json` format with `status`, `anchor`, `evidence`, `alternates`).

---

## 5. Prerequisites Before Scheduling

### Environment

| Requirement | Notes |
|-------------|-------|
| **Node.js** | Run from `Anchor/` directory |
| **Chrome** | Remote-debugging build; path via `--chrome` |
| **npm dependencies** | `cd cdp-workflow && npm install`; each `<benchmark-dir>/*/agent_hidden` needs `npm install` |
| **Benchmark cases** | Default: `Anchor/benchmark/`; override with `--benchmark-dir` or `ANCHOR_BENCHMARK_DIR` |
| **LLM API** | Real runs need configured OpenAI-compatible API (env vars used by `cdp-workflow` LLM module). Use `--mock` on `main.js` only for dry runs |
| **Windows paths** | Default Chrome path is Windows-specific; override on other OSes |

### Per-benchmark setup (one-time)

```bash
cd D:\Projects\Anchor\Anchor

# Install CDP workflow deps
cd cdp-workflow && npm install && cd ..

# Install serve deps — default in-repo benchmark tree
for /d %d in (benchmark\*\agent_hidden) do (cd %d && npm install && cd ..\..\..)

# Or — external benchmark_cases tree (adjust path)
for /d %d in ("D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases\*\agent_hidden") do (cd %d && npm install)
```

### Resource expectations

- Each benchmark: serve startup + preprocessing + multiple Agent turns (default max 10)
- Chrome stays open for preprocessing and the full Agent loop
- Typical runtime: **several minutes to tens of minutes per benchmark**, depending on LLM latency and convergence
- Full suite (50 benchmarks): plan for **many hours** in a single sequential batch

---

## 6. How to Schedule Automated Experiments

### 6.1 Manual batch segments (simplest)

Split the 50 benchmarks into chunks to reduce blast radius and allow checkpointing. Add `--benchmark-dir` when cases live outside `Anchor/benchmark/`:

```bash
export BENCH_ROOT="D:/Projects/Anchor/anchor-benchmark-docker/anchor-benchmark/benchmark_cases"

node run-experiment-range.js --from 1  --to 10  --continue-on-error --benchmark-dir "$BENCH_ROOT"
node run-experiment-range.js --from 11 --to 20  --continue-on-error --benchmark-dir "$BENCH_ROOT"
node run-experiment-range.js --from 21 --to 30  --continue-on-error --benchmark-dir "$BENCH_ROOT"
node run-experiment-range.js --from 31 --to 40  --continue-on-error --benchmark-dir "$BENCH_ROOT"
node run-experiment-range.js --from 41 --to 50  --continue-on-error --benchmark-dir "$BENCH_ROOT"
```

Use `--continue-on-error` so one flaky benchmark does not abort the segment.

### 6.2 Windows Task Scheduler

Create a scheduled task that runs a wrapper script:

**`scripts/run-nightly-batch.ps1`**

```powershell
$ErrorActionPreference = "Continue"
$Root = "D:\Projects\Anchor\Anchor"
$LogDir = "D:\Projects\Anchor\Anchor\logs"
$Date = Get-Date -Format "yyyy-MM-dd_HHmm"
$Log = Join-Path $LogDir "batch_$Date.log"

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
Set-Location $Root

# Optional: archive previous intermediates
# Copy-Item reverse-anchor-result.json "$LogDir\reverse-$Date.json" -ErrorAction SilentlyContinue

$BenchmarkCases = "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"

node run-experiment-range.js `
  --from 1 --to 50 `
  --continue-on-error `
  --benchmark-dir $BenchmarkCases `
  --output-dir "D:\Projects\Anchor\Anchor\result_glm\$Date" `
  2>&1 | Tee-Object -FilePath $Log

exit $LASTEXITCODE
```

Task Scheduler settings:

- **Trigger**: daily off-peak (e.g. 02:00)
- **Action**: `powershell.exe -ExecutionPolicy Bypass -File D:\Projects\Anchor\Anchor\scripts\run-nightly-batch.ps1`
- **Conditions**: “Start only if computer is on AC power” (optional)
- **Settings**: “Run task as soon as possible after a scheduled start is missed”

### 6.3 Cron (Linux / WSL / macOS)

```cron
# Every Sunday at 2 AM — full suite with dated output
0 2 * * 0 cd /path/to/Anchor && ANCHOR_BENCHMARK_DIR=/path/to/benchmark_cases node run-experiment-range.js --from 1 --to 50 --continue-on-error --output-dir "./result_glm/$(date +\%F)" >> ./logs/batch.log 2>&1
```

### 6.4 CI pipeline (GitHub Actions / similar)

Benchmark runs need **Chrome + display/GPU + long timeout + LLM secrets**, so CI is viable mainly on self-hosted runners:

```yaml
# Conceptual — adapt to your runner
jobs:
  anchor-benchmark:
    runs-on: [self-hosted, windows, chrome]
    timeout-minutes: 720
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: cd cdp-workflow && npm ci
      - run: node run-experiment-range.js --from ${{ matrix.from }} --to ${{ matrix.to }} --continue-on-error --benchmark-dir ./benchmark_cases
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          ANCHOR_BENCHMARK_DIR: ${{ github.workspace }}/benchmark_cases
        working-directory: Anchor
      - uses: actions/upload-artifact@v4
        with:
          name: results-${{ matrix.from }}-${{ matrix.to }}
          path: Anchor/result_glm/
    strategy:
      matrix:
        include:
          - { from: 1,  to: 10 }
          - { from: 11, to: 20 }
          - { from: 21, to: 30 }
          - { from: 31, to: 40 }
          - { from: 41, to: 50 }
```

Matrix parallelism speeds up total wall time but requires **separate machines or isolated workspaces** — the current scripts assume a single shared working tree and CDP port 9222.

### 6.5 Parallelism strategy (advanced)

`run-experiment-range.js` does **not** support parallel IDs. To parallelize:

| Approach | Isolation needed |
|----------|------------------|
| Multiple VMs / containers | Full copy of repo per worker |
| Git worktrees | Separate `Anchor/` tree per worker |
| Port offsets | Unique `--serve-port`, `--port` (CDP), and `--output-dir` per worker |

Example: four workers, 50 benchmarks → ~12–13 IDs each:

```bash
# Worker A
node run-experiment-range.js --from 1  --to 13 \
  --benchmark-dir "D:\benchmark_cases" \
  --serve-port 4173 --port 9222 --output-dir results/wA

# Worker B
node run-experiment-range.js --from 14 --to 26 \
  --benchmark-dir "D:\benchmark_cases" \
  --serve-port 4183 --port 9232 --output-dir results/wB
```

Ensure only one process binds each CDP port and serve port.

### 6.6 Rerun failed IDs only

After a batch with `--continue-on-error`, inspect the summary log and rerun specific IDs:

```bash
node run-experiment.js --id 7 --benchmark-dir "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"
node run-experiment.js --id 23 --benchmark-dir "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"
```

Or set `ANCHOR_BENCHMARK_DIR` once and rerun without repeating the path.

Or compact ranges for consecutive failures:

```bash
node run-experiment-range.js --from 22 --to 24 --benchmark-dir "D:\...\benchmark_cases"
```

---

## 7. Output Artifacts & Collection Strategy

### What to archive after each batch

| Path | When to save | Purpose |
|------|--------------|---------|
| `result_glm/<label>.json` | **Always** (automatic) | Final anchor + confidence + evidence — primary metric |
| `logs/batch_*.log` | Per scheduled run | stdout/stderr audit trail |
| `reverse-anchor-result.json` | Optional, per ID | Debug last reverse-recovery turn |
| `.cache/anchor-agent-state.json` | Optional | Full per-turn Agent trace |
| `anchor-selection.json` | Optional | Final confidence distribution |

### Recommended dated output layout

```
experiments/
  2026-06-30/
    result_glm/
      1_1.json … 10_5.json
    logs/
      batch.log
    intermediates/          # optional manual copies
      2_2_reverse-anchor-result.json
```

Pass `--output-dir` to isolate final results per run without modifying the harness code.

---

## 8. Failure Modes & Operational Tips

| Symptom | Likely cause | Mitigation |
|---------|--------------|------------|
| `未找到 agent_hidden` | Wrong `--benchmark-dir` or case folder missing | Verify path with `--list --benchmark-dir …`; check `caseNNN_*/agent_hidden/package.json` exists |
| Serve URL timeout | `agent_hidden` missing deps or port conflict | Run `npm install` in the target `agent_hidden`; change `--serve-port` |
| CDP connection failed | Chrome path wrong or port 9222 in use | Set `--chrome`; kill stale Chrome; use unique `--port` per worker |
| Preprocess failure | Page did not load or automation script mismatch | Verify `auto/<case>.js` copied correctly; check `--url` |
| Agent never converges | Weak observations or LLM scores &lt; θ | Increase `--max-iterations` in `buildMainArgs`; tune task/value in `benchmark-tasks.json` |
| Batch stops mid-range | Default fail-fast | Add `--continue-on-error` |
| `reverse-anchor-result.json` huge | Long `anchorHistory` | Periodically archive or use `--no-history` on standalone reverse recovery |
| Process hangs after Agent | Stale CDP WebSocket | Ensure `closeBrowser()` runs (built into `run-experiment.js` finally block) |

### Dry-run / smoke test workflow

Before scheduling a full 50-benchmark night job:

```bash
# 0. Set external cases (optional)
export ANCHOR_BENCHMARK_DIR="/path/to/benchmark_cases"   # Linux/macOS
# $env:ANCHOR_BENCHMARK_DIR = "D:\...\benchmark_cases"  # PowerShell

# 1. List benchmarks and confirm resolved root
node run-experiment.js --list
node run-experiment.js --list --benchmark-dir "D:\Projects\Anchor\anchor-benchmark-docker\anchor-benchmark\benchmark_cases"

# 2. Single ID, preprocess only
node run-experiment.js --id 1 --skip-agent --benchmark-dir "D:\...\benchmark_cases"

# 3. Single ID, full pipeline
node run-experiment.js --id 1 --benchmark-dir "D:\...\benchmark_cases"

# 4. Small range with continue-on-error
node run-experiment-range.js --from 1 --to 3 --continue-on-error --benchmark-dir "D:\...\benchmark_cases"
```

---

## 9. Recommended Scheduling Plan

For a production-style unattended benchmark campaign:

1. **One-time**: install dependencies for `cdp-workflow` and all `agent_hidden` packages under your benchmark root; set `ANCHOR_BENCHMARK_DIR` or decide on `--benchmark-dir`; verify Chrome path and LLM credentials.
2. **Pilot**: run `--list --benchmark-dir …` then `--from 1 --to 3` manually; confirm `Serve 目录` in logs and `result_glm/*.json` look correct.
3. **Segmented nightly jobs**: five tasks × 10 IDs, or ten tasks × 5 IDs, each with `--continue-on-error`, `--benchmark-dir` (or env var), and dated `--output-dir`.
4. **Logging**: tee stdout to `logs/batch_<timestamp>.log`.
5. **Post-run**: script to parse logs for `失败:` lines and enqueue rerun IDs via `run-experiment.js --id N`.
6. **Optional**: copy `reverse-anchor-result.json` after each ID if you need turn-level reverse-recovery forensics (requires a small wrapper — not built in today).

---

## 10. Quick Reference

```bash
# Single experiment
node run-experiment.js --id <1-50> [--benchmark-dir <dir>]

# Batch range
node run-experiment-range.js --from <n> --to <n> [--continue-on-error] [--benchmark-dir <dir>]

# List all benchmark IDs (shows resolved benchmark root)
node run-experiment.js --list [--benchmark-dir <dir>]

# Environment variable (alternative to --benchmark-dir)
export ANCHOR_BENCHMARK_DIR="/path/to/benchmark_cases"
```

**Key files**

| File | Role |
|------|------|
| `run-experiment-range.js` | Batch scheduler (sequential) |
| `run-experiment.js` | Single experiment + shared `runSingleExperiment()` |
| `lib/benchmark-registry.js` | ID → case mapping; `resolveBenchmarkRoot()` |
| `lib/benchmark-tasks.json` | Task text + reference values (always in Anchor repo) |
| `auto/<case>.js` | Per-case browser automation (always in Anchor repo) |
| `<benchmark-dir>/<case>/agent_hidden/` | Served benchmark app (configurable root) |
| `main.js` | Anchor Agent entry (produces intermediate + final JSON) |
| `reverse-anchor-result.json` | Per-turn reverse recovery (intermediate) |
| `anchor-agent-result.json` | Final Agent output (archived to `result_glm/`) |

**Environment variables**

| Variable | Purpose |
|----------|---------|
| `ANCHOR_BENCHMARK_DIR` | Default benchmark case root when `--benchmark-dir` is omitted |
| `OPENAI_API_KEY` (etc.) | LLM credentials for Agent / reverse recovery |

---

*Generated for the Anchor benchmark harness. Adjust benchmark root (`--benchmark-dir` / `ANCHOR_BENCHMARK_DIR`), Chrome path, ports, and API secrets to match your deployment environment.*
