# Anchor Causality-Guided Agent

A debugging agent that uses runtime causal graphs and structural priors to automatically select breakpoints, collect observations, update confidence, and converge on **behavior anchor functions** (target-specific functions).

See [整体agent流程.md](./整体agent流程.md) for the design overview. Submodule-specific docs cover structural priors, information-gain breakpoints, reverse recovery, confidence updates, and more.

For **benchmark batch automation** (50 cases, external `benchmark_cases` directory), see [docs/experiment-automation-scheduling.md](./docs/experiment-automation-scheduling.md).

---

## System Architecture

The agent has five stages: **preprocessing (external)**, **TC1 initial prior**, **main loop**, **convergence check**, and **result output**. Preprocessing is not built into `main.js`; AST exports, candidate function logs, and related artifacts must be prepared beforehand.

```
┌─────────────────────────────────────────────────────────────────┐
│  Data preprocessing (external pipeline, not built into Agent)   │
│  deduped logs · AST · static-call-graph · function-dictionary   │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  TC1  Structural prior  →  anchor-selection.json  (distribution H₀) │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
        ┌──────────────────────────────────────────┐
        │  Main loop  t = 1 … T_max (default 10)   │
        │  ┌────────────────────────────────────┐  │
        │  │ TC2  Information-gain breakpoint   │  │
        │  │ TC3  CDP breakpoint + causal G_t   │  │
        │  │      Reverse recovery → f*         │  │
        │  │      Confidence update H_t→H_{t+1} │  │
        │  │      Convergence check             │  │
        │  └────────────────────────────────────┘  │
        │       Not converged & under limit → next │
        └────────────────────────────┬─────────────┘
                                     ▼
┌─────────────────────────────────────────────────────────────────┐
│  Output  anchor-agent-result.json (anchor + evidence + alternates) │
└─────────────────────────────────────────────────────────────────┘
```

### Code layout

| Layer | Path | Description |
|------|------|------|
| **Entry** | `main.js` | CLI; calls `runAnchorAgent()` |
| **Orchestration** | `cdp-workflow/src/modules/anchor-agent/` | `index.js` main loop; `convergence.js`; `output.js`; `paths.js` |
| **TC1** | `select-anchors.js` | Structural / hybrid / value scoring |
| **TC2** | `select-breakpoint.js` → `info-gain-breakpoint/` | Information gain + LLM breakpoint prediction |
| **TC3** | `collect-breakpoint-observations.js` | Chrome CDP breakpoint hits and eval |
| **Causal graph** | `graph build` → `update-causal-graph.js` → `causal-graph-updater.js` | Writes `call-graph.json`, then **incrementally** merges into `causual-graph.json` (adds nodes/edges/observations; does not overwrite history) |
| **Reverse recovery** | `reverse-anchor-recovery.js` → `reverse-anchor-recovery/` | TVN → reverse traverse → LLM anchor scoring |
| **Confidence update** | `update-confidence.js` → `confidence-update/` | Bayesian-style update of `anchor-selection.json` |
| **CDP tooling** | `cdp-workflow/` | Debug CLI, AST pipeline, structural prior implementation |
| **Benchmark harness** | `run-experiment.js`, `run-experiment-range.js` | One-click benchmark runs with optional `--benchmark-dir` |

---

## Prerequisites

### 1. Environment

- **Node.js** 18+
- Install dependencies under `cdp-workflow/`: `npm install`

### 2. Preprocessing artifacts (required)

Before running the Agent, the repo root and `cdp-workflow/cdp-ast-output/` should contain:

| File | Purpose |
|------|---------|
| `cdp-workflow/cdp-ast-output/runtime-function-logs.deduped.json` | Candidate function set F_C |
| `cdp-workflow/cdp-ast-output/static-call-graph.json` | Static call graph, Sink distances |
| `function-dictionary.json` | Function source, observable variables (TC2) |
| `function-call-lookup.json` | Optional; network distance for hybrid mode |

See `cdp-workflow/README.md` for generation (AST analysis, `build-function-dictionary.js`, etc.).

### 3. Full runtime (TC3)

- Chrome started with remote debugging, e.g. `--remote-debugging-port=9222`
- Target page loaded with the bundle under analysis; target behavior triggerable (search, `console.log`, etc.)

### 4. LLM (optional)

- TC2 and reverse recovery expect an **OpenAI-compatible API** by default
- Use `--mock` without an API key to validate the pipeline (heuristics instead of LLM)

Environment variables (real LLM):

```bash
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.openai.com/v1   # optional
OPENAI_MODEL=gpt-4o-mini                    # optional
```

Some third-party gateways (e.g. DeepSeek on Sophnet) **do not support** `response_format`. The Agent **automatically retries without that parameter** on related 400 errors. You can also disable it explicitly:

```powershell
$env:OPENAI_USE_RESPONSE_FORMAT="false"
```

---

## Quick Start

From the repo root `Anchor/`:

```bash
# Recommended: full Agent run (Chrome + preprocessing data required)
node main.js --task "Find the function that generates search_sig in console.log" --sink console.log

# Development: mock LLM, skip CDP, reuse existing causal graph / observations
node main.js --mock --skip-collect --skip-tc1 --max-iterations 2

# All CLI options
node main.js --help
```

**Benchmark automation** (50 tasks):

```bash
node run-experiment.js --list
node run-experiment.js --id 1
node run-experiment-range.js --from 1 --to 10 --continue-on-error \
  --benchmark-dir "D:\path\to\benchmark_cases"
```

---

## Main entry: `main.js`

`main.js` is the sole orchestration entry. It calls `runAnchorAgent()` from `cdp-workflow/src/modules/anchor-agent` and chains TC2 → TC3 → reverse recovery → confidence update → convergence each turn.

On startup it resets `cdp-workflow/causual-graph.json`, then seeds G_0 with **explicit static call edges** via `buildExplicitStaticCG` (equivalent to `graph static-explicit`). Runtime `call-graph.json` from TC3 is **merged incrementally** (sync/async edges and observations) without overwriting existing static edges. If preprocessing files are missing, it falls back to an empty graph. Use `--no-static-seed` to skip static initialization.

### Common parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `--task <text>` | Built-in example | Behavior description d; used for Sink, TVN, LLM |
| `--sink <api>` | `console.log` | Repeatable; Sink API names |
| `--mode structural\|hybrid\|value` | `structural` | TC1 scoring mode |
| `--max-iterations <n>` | `10` | Main loop limit T_max |
| `--theta-conf <n>` | `0.9` | Convergence: top function confidence threshold |
| `--theta-anchor <n>` | `0.7` | Reverse recovery: Anchor Candidate score threshold |
| `--focus <n>` | `3` | TC2 focus function count |
| `--max-depth <n>` | `7` | Max functions / hops per direction (callers and callees) |
| `--mock` | — | Mock TC2 / reverse recovery |
| `--skip-tc1` | — | Skip TC1; read existing `anchor-selection.json` |
| `--skip-collect` | — | Skip CDP collection (requires existing observations/snapshots) |
| `--no-causal-update` | — | Do not update causal graph |
| `--no-static-seed` | — | Skip explicit static graph init; use empty G_0 |
| `--graph-build` | — | Run `graph build` after collection |
| `--host` / `--port` / `--target` | `localhost:9222` | Chrome debug connection |
| `--auto` / `--browser-url` | — | Automated page interaction (benchmark mode) |
| `--initial-idle-ms <ms>` | `8000` | Timeout waiting for first breakpoint |
| `--keyword <name>` | — | Repeatable; explicit TVN field names |
| `--out <file>` | `anchor-agent-result.json` | Final result path |

### Example scenarios

**Scenario A: End-to-end (with Chrome)**

```bash
node main.js \
  --task "Find which function generates search_sig in console.log output" \
  --sink console.log \
  --max-iterations 5
```

**Scenario B: TC1 already done; run main loop only**

```bash
node select-anchors.js --mode structural --task "..." --sink console.log
node main.js --skip-tc1 --max-iterations 5
```

**Scenario C: No browser; logic validation**

```bash
node main.js --mock --skip-collect --skip-tc1 --max-iterations 1
```

---

## Main loop steps

Each turn `t` runs in order (see `anchor-agent/index.js`):

### TC2 — Information-gain breakpoint selection

- **Script**: `select-breakpoint.js` (module `info-gain-breakpoint`)
- **Input**: `anchor-selection.json` (H_t), `function-dictionary.json`, `static-call-graph.json`, `causual-graph.json`
- **Output**: `cdp-workflow/need_to_break.json` (`selected_breakpoint`, LLM prediction)

### TC3 — Breakpoint execution and causal graph update

- **Script**: `collect-breakpoint-observations.js`
- **Behavior**: Connect Chrome → set breakpoint → eval variables → write observations and ANCHOR snapshots → `graph build` → update `causual-graph.json`
- **Output**:
  - `cdp-workflow/breakpoint-observations.json`
  - `cdp-workflow/anchor-snapshots.jsonl`
  - `cdp-workflow/cdp-ast-output/call-graph/call-graph.json`
  - `cdp-workflow/causual-graph.json`

Update causal graph standalone:

```bash
node update-causal-graph.js
```

### Reverse recovery — Anchor Candidate

- **Script**: `reverse-anchor-recovery.js`
- **Logic**: Identify TVN from observation → reverse traverse causal graph → LLM batch scoring → select f* (score ≥ θ_anchor)
- **Output**: `reverse-anchor-result.json`, `.cache/anchor-history.json`

### Confidence update

- **Script**: `update-confidence.js`
- **Logic**: L_t = L_val × L_anchor × L_pred; update H_t and write back
- **Output**: Updated `anchor-selection.json` (with `confidenceUpdate` metadata)

See [置信度更新.md](./置信度更新.md) for details.

### Convergence check

After each turn, check top function \(\hat f\):

1. **Confidence**: \(p(\hat f) \ge \theta_{conf}\) (default 0.9)
2. **Necessary**: \(\hat f\) was an Anchor Candidate, or historical LLM score ≥ \(\theta_{anchor}\)
3. **Auxiliary** (at least one):
   - Structural prior \(p_0(\hat f)\) ≥ median or top 30%
   - \(\hat f\) connected to Sink on causal graph / observation callChain

If 1+2+3 hold → status `converged` and exit early; otherwise stop at `--max-iterations` with `max_iterations` and still emit the best current result.

---

## Output files

### Final result: `anchor-agent-result.json`

```json
{
  "status": "converged | max_iterations",
  "turn": 3,
  "taskDescription": "...",
  "anchor": {
    "tag": "...",
    "functionName": "...",
    "scriptUrl": "...",
    "runtimeLoc": { "line": 1, "column": 12345 },
    "functionCode": "...",
    "confidence": 0.92
  },
  "evidence": {
    "structuralPrior": { "prob": 0.57, ... },
    "llmJudgments": [...],
    "causalPathDescription": ["runCatalogSearch", "dispatchSearchCommand", ...],
    "convergenceChecks": { ... }
  },
  "alternates": [
    { "tag": "...", "functionName": "...", "confidence": 0.05 }
  ]
}
```

### Process state: `.cache/anchor-agent-state.json`

Per-turn TC2/TC3/reverse recovery/confidence/convergence details for debugging.

### Intermediate artifacts

| File | Stage |
|------|-------|
| `anchor-selection.json` | TC1 + H_t after each confidence update |
| `cdp-workflow/need_to_break.json` | TC2 |
| `cdp-workflow/breakpoint-observations.json` | TC3 |
| `cdp-workflow/anchor-snapshots.jsonl` | TC3 |
| `cdp-workflow/causual-graph.json` | TC3 |
| `reverse-anchor-result.json` | Reverse recovery |
| `.cache/anchor-history.json` | LLM anchor score history |

---

## Manual step-by-step execution

When you do not need the full Agent, invoke scripts individually (same order as the main loop):

```bash
# TC1
node select-anchors.js --mode structural --task "..." --sink console.log

node select-anchors.js --mode structural --task '请定位页面完成探测标签输入、点击 Prepare、再点击 Collect 后 action 为 account.submit 的 console 输出对象中 browser_fingerprint 字段（其可能值02onzagbuggy）的锚点函数。锚点函数指动态行为链上第一个目标特异性的浏览器指纹值构造函数：它位于预备态事件、采集按钮路由、运行时状态采集、多层路由推进、浏览器能力面采集和输入准备之后，其函数体本身构造目标 observable 的浏览器指纹摘要值，而不是仅收集 navigator/screen/canvas 等原始特征、转发控制、包装返回值或输出到 console。请返回一个完整函数及其代码位置，不要返回通用工具、事件处理器、完整调用链、原始特征采集器或最终 sink。' --sink console.log

node select-anchors.js --mode structural --task "请定位提交账户信息后 action 为 account.submit 的 console 输出对象中 byte_payload 字段(可能生成值bp_XAYge9wTYyPoBHEvbgTpEo6z）的锚点函数。锚点函数指动态行为链上第一个目标特异性的字节数组转换值构造函数：它位于路由、点击运行时采集、表单状态收集和输入准备之后，其函数体本身构造目标 observable 字节数组转换值，而不是仅收集输入、转发控制、包装返回值或输出到 console。请返回一个完整函数及其代码位置，不要返回通用工具、事件处理器、完整调用链或最终 sink。" --sink console.log

node select-anchors.js --mode structural --task "请定位提交账户信息后 action 为 account.submit 的 console 输出对象中 transform_key 字段的锚点函数。该字段值同时被写入发出的 fetch 请求 X-Transform-Key header。锚点函数指动态行为链上第一个目标特异性的请求转换值构造函数：它位于路由、点击运行时采集、表单状态收集和输入准备之后，其函数体本身构造目标 observable 请求转换值，而不是仅收集输入、转发控制、包装返回值或输出到 console 或 fetch。请返回一个完整函数及其代码位置，不要返回通用工具、事件处理器、完整调用链或最终 sink。" --sink console.log

node select-anchors.js --mode structural --task "Locate the anchor function for the req_pipeline field in the console.log object whose action is request.pipeline, observed after selecting the HTTP method, typing the endpoint path, selecting the pipeline mode and auth scheme, attaching credentials, and clicking Execute Pipeline on the page. The anchor function is the first target-specific request-transform value constructor on the dynamic behavior chain: after delegated click routing, action routing, the request gate, form-state tuple collection, asynchronous scheduling (Promise, timer, MessageChannel and window.postMessage) and runtime config selection, its function body itself constructs the target observable request pipeline value rather than merely collecting inputs, dispatching control, wrapping a return value, or writing the value to the console sink. The req_pipeline value matches /^rp_[A-Za-z0-9_-]{24}$/. Return exactly one complete function as a single JSON object (see answer_format). Do not return generic utilities, event handlers, the full call chain, or the final console sink. Note: you may only inspect code under captures; the full codebase is not accessible."

# One main-loop iteration
node select-breakpoint.js --mock
node collect-breakpoint-observations.js
node reverse-anchor-recovery.js --mock
node update-confidence.js
```

---

## Programmatic API

Import the orchestration module from your own scripts:

```javascript
const { runAnchorAgent, buildDefaultPaths } = require('./cdp-workflow/src/modules/anchor-agent');

const paths = buildDefaultPaths(__dirname);

const payload = await runAnchorAgent({
  root: __dirname,
  paths,
  taskDescription: 'Find the function that generates search_sig',
  sinks: ['console.log'],
  maxIterations: 5,
  mock: false,
  skipCollect: false,
  host: 'localhost',
  port: '9222'
});

console.log(payload.result.anchor);
console.log(payload.convergence);
```

Single-step APIs:

| Capability | Module / export |
|------------|-----------------|
| TC1 | `runSelectAnchors()` from `select-anchors.js` |
| TC2 | `selectInfoGainBreakpoint()` from `info-gain-breakpoint` |
| TC3 | `runCollectBreakpointObservations()` from `collect-breakpoint-observations.js` |
| Causal graph | `updateCausalGraphFromFiles()` from `causal-graph-updater` |
| Reverse recovery | `runReverseAnchorRecovery()` from `reverse-anchor-recovery` |
| Confidence | `runConfidenceUpdate()` from `confidence-update` |

---

## Tests

```bash
cd cdp-workflow
npm test
```

Agent-related tests: `test/anchor-agent.test.js`, `test/confidence-update.test.js`, `test/reverse-anchor-recovery.test.js`, `test/info-gain-breakpoint.test.js`.

