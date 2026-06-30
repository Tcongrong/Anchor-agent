# CDP Workflow

Standalone CLI extracted from the [CDP](../CDP) project. Provides commands for AST analysis, log collection, and breakpoint debugging workflows.

## Installation

```bash
cd cdp-workflow
npm install
```

## Prerequisites

Chrome must be started with remote debugging enabled:

```powershell
Start-Process -FilePath "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  -ArgumentList "--remote-debugging-port=9222", "--remote-allow-origins=*", "https://your-page.example"
```

## Workflow commands

The following match the original CDP project usage. Run `node bin/cli.js` from this directory:

| Step | Command | Description |
|------|---------|-------------|
| 1 | `node bin/cli.js ast export --reload-before-collect --collect-ms 5000` | Export AST and function tag map (manual page interaction required) |
| 2 | `node bin/cli.js ast inject-fetch --watch-ms 5000` | Inject fetch interceptor for function-tag logging |
| 3 | `node bin/cli.js ast collect-console --watch-ms 3000` | Collect function-tag console logs (manual interaction required) |
| 4 | `node bin/cli.js ast collect-console-all --watch-ms 3000` | Collect all console output (manual interaction required) |
| 5 | `node bin/cli.js ast dedupe-logs` | Deduplicate logs by function tag |
| 6 | `node bin/cli.js graph static` | Build over-approximate static call graph StaticCG (offline; no Chrome) |
| 6b | `node bin/cli.js graph static-explicit` | Build explicit static call graph ExplicitStaticCG (kind=static edges only; offline) |
| 7 | `node ../select-anchors.js --mode structural --task "..." --sink console.log` | Structural prior p_0(f) and Top-K anchors (see below) |
| 7b | `node ../select-breakpoint.js --mock` | TC2 information-gain breakpoint selection → `need_to_break.json` (see below) |
| 8 | `node bin/cli.js breakpoint-exit --input-file ".\need_to_break.json" --save-only` | Persist breakpoints from JSON line/column to `.cdp-breakpoints.json` |
| 9 | `node bin/cli.js click start` | Start breakpoint debug session; on hit enter interactive mode; ANCHOR stacks appended to `anchor-snapshots.jsonl` (manual interaction required) |
| 10 | `node bin/cli.js graph build` | Build runtime sync/async call graph from ANCHOR snapshots (requires step 9) |
| 11 | `node bin/cli.js breakpoint clear` | Clear all breakpoints (including `.cdp-breakpoints.json`) |

## Global parameters

| Parameter | Alias | Description | Default |
|-----------|-------|-------------|---------|
| `--host <host>` | `-h` | Chrome debug host | localhost |
| `--port <port>` | `-p` | Chrome debug port | 9222 |
| `--target <target>` | `-t` | Target page URL or title | First tab auto-selected |

## Output directory

Default output: `cdp-ast-output/`:

- `function-tag-map.json` — Function tag map
- `runtime-function-logs.json` — Runtime function logs
- `runtime-function-logs.deduped.json` — Deduplicated logs
- `static-call-graph.json` — Over-approximate static call graph StaticCG (`graph static`)
- `explicit-static-call-graph.json` — Explicit static call graph ExplicitStaticCG (`graph static-explicit`; static edges only)
- `call-graph/` — Runtime call graph (`graph build`; JSON / DOT / Mermaid)
- `console-output.json` — All console output
- `.cdp-breakpoints.json` — Persisted breakpoints (project root)
- `anchor-snapshots.jsonl` — ANCHOR call stacks on breakpoint hit (JSON Lines; default path)

### ANCHOR call stacks (on breakpoint hit)

`click start` silently collects and appends to `anchor-snapshots.jsonl` on each breakpoint hit by default:

| Field | Meaning | Source |
|-------|---------|--------|
| `Sh` | Synchronous call stack | CDP `Debugger.paused.callFrames` |
| `Ah` | Asynchronous call stack | CDP `asyncStackTrace` (Promise/await/setTimeout ancestor chain, etc.) |

Optional flags:

```bash
node bin/cli.js click start --no-anchor          # Disable ANCHOR collection
node bin/cli.js click start --anchor-out ./other.jsonl
```

### Building the causal graph

See static and runtime graph sections below.

### Static call graph (StaticCG)

`graph static` performs over-approximate static analysis on candidate functions from AST **without Chrome**, builds a directed call graph, and computes shortest distance from each function to the nearest network Sink.

**Inputs** (after steps 1 and 5):

| File | Description |
|------|-------------|
| `cdp-ast-output/runtime-function-logs.deduped.json` | Candidate functions and `functionCode` |
| `cdp-ast-output/function-tag-map.json` | Function tag → range / astFile map |
| `cdp-ast-output/asts/*.ast.json` | Full bundle Acorn AST |

**Basic usage**:

```bash
node bin/cli.js graph static
```

Default output: `cdp-ast-output/static-call-graph.json`.

**Optional parameters**:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `--logs <file>` | `cdp-ast-output/runtime-function-logs.deduped.json` | Deduplicated runtime logs |
| `--map <file>` | `cdp-ast-output/function-tag-map.json` | Function tag map |
| `--asts <dir>` | `cdp-ast-output/asts` | Bundle AST directory |
| `--sinks <apis>` | (built-in network Sink list) | Extra Sink APIs, comma-separated |
| `-o, --out <file>` | `cdp-ast-output/static-call-graph.json` | Output JSON path |

**Examples**:

```bash
# Add console as Sink (matches console.log / console.debug, etc.)
node bin/cli.js graph static --sinks console

# Or full API name
node bin/cli.js graph static --sinks console.log

# Custom input/output paths
node bin/cli.js graph static \
  --logs ./cdp-ast-output/runtime-function-logs.deduped.json \
  --map ./cdp-ast-output/function-tag-map.json \
  --asts ./cdp-ast-output/asts \
  -o ./cdp-ast-output/static-call-graph.json
```

**Graph construction logic**:

- Parse AST per candidate (prefer bundle AST by `range`, fallback to `functionCode`)
- Walk `CallExpression` / `NewExpression`; detect direct calls and string-array obfuscated member access
- If callee name hits the candidate set, add edge `(caller_tag, callee_tag)`; mark `overapprox` when multiple tags share a name
- Detect network Sinks via AST patterns (`fetch`, `XMLHttpRequest.send`, `navigator.sendBeacon`, `Request.headers.set`, etc.)
- Reverse BFS on static graph for shortest Sink distance; use large constant `1000000` when unreachable

**Output structure** (`StaticCG` field):

```json
{
  "StaticCG": {
    "nodes": [
      {
        "tag": "http://.../bundle.js::foo@1:100",
        "functionName": "foo",
        "isSink": false,
        "sinkApis": [],
        "sinkDistance": 2,
        "hasAst": true
      }
    ],
    "edges": [
      { "caller_tag": "...", "callee_tag": "...", "kind": "static" }
    ],
    "sinkNodes": ["..."],
    "sinkDistances": { "...": 0 },
    "stats": { "nodeCount": 38, "edgeCount": 23, "sinkNodeCount": 1 }
  }
}
```

### Explicit static call graph (ExplicitStaticCG)

`graph static-explicit` uses the same inputs as `graph static` but **keeps only AST-resolvable call edges** (`kind: "static"`):

- Add `(caller_tag, callee_tag)` only when callee name **uniquely** matches one tag in the candidate set
- **Excludes** over-approximate edges: ambiguous multi-tag names, tail-only matches, “connect to all nodes” on unresolved member access, etc.

Edge count is usually much smaller than `graph static`, but each edge is a definite call relation.

**Basic usage**:

```bash
node bin/cli.js graph static-explicit
```

Default output: `cdp-ast-output/explicit-static-call-graph.json`. Same parameters as `graph static` (`--logs`, `--map`, `--asts`, `--sinks`, `-o`).

**Examples**:

```bash
node bin/cli.js graph static-explicit --sinks console.log
node bin/cli.js graph static-explicit -o ./cdp-ast-output/explicit-static-call-graph.json
```

Root field is `ExplicitStaticCG`, with `mode: "explicit"` and `stats.excludedOverapproxEdges` (edges dropped vs over-approximate graph).

### Runtime call graph (ANCHOR)

Builds sync (`Sh`) and async (`Ah`) call edges from breakpoint-collected `anchor-snapshots.jsonl`:

```bash
node bin/cli.js graph build
```

Optional parameters:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `--anchor <file>` | `anchor-snapshots.jsonl` | ANCHOR snapshot JSONL |
| `--logs <file>` | `cdp-ast-output/runtime-function-logs.deduped.json` | Tag map (does not use callStack) |
| `-o, --out <dir>` | `cdp-ast-output/call-graph` | Output directory |
| `--format <formats>` | `json,dot,mermaid` | Output formats, comma-separated |

Output directory contains `call-graph.json`, `sync-graph.dot`, `async-graph.dot`, and corresponding Mermaid files.

### Structural prior

The structural prior module computes prior probability \(p_0(f)\) that each candidate is a behavior anchor **without relying on function/variable names**. Implementation: `src/modules/structural-prior/`; entry script: `select-anchors.js` at project root.

**Four features** (aligned with the design doc):

| Feature | Symbol | Task-related | Description |
|---------|--------|--------------|-------------|
| AST subtree fingerprint | \(S_{\text{ast}}\) | No | Template hits (XorShiftLoop, TableLookupStringFold, etc.) |
| API call signature | \(S_{\text{api}}\) | No | Inverse-frequency weighted Web API calls |
| Value-operation entropy | \(S_{\text{ent}}\) | No | Bit/mod arithmetic density and high-entropy constant arrays |
| Sink proximity | \(S_{\text{sink}}\) | Yes | Shortest distance to task Sink on static call graph |

**Inputs** (after steps 1, 5, 6):

| File | Description |
|------|-------------|
| `cdp-ast-output/runtime-function-logs.deduped.json` | Candidate set \(F_C\) |
| `cdp-ast-output/function-tag-map.json` | tag → range / astFile |
| `cdp-ast-output/asts/*.ast.json` | Bundle AST (preferred over functionCode) |
| `cdp-ast-output/static-call-graph.json` | Pre-built over-approximate static graph (optional; reused if present) |

**Basic usage** (from project root `Anchor/`):

```bash
# Pure structural prior
node select-anchors.js \
  --mode structural \
  --task "寻找控制台console.log输出的{action: 'catalog.search', search_sig: 'ss_bh9g_30'}" \
  --sink console.log \
  --top 5

# Hybrid: value scoring + structural prior
node select-anchors.js \
  --mode hybrid \
  --object '{"action":"catalog.search","search_sig":"ss_bh9g_30"}' \
  --task "寻找 console.log 输出中的 search_sig" \
  --sink console.log \
  --top 5 \
  --out anchor-selection.json
```

**Optional parameters**:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `--mode` | `hybrid` | `structural` / `value` / `hybrid` |
| `--task <text>` | — | Task description \(d\); Sink API inference |
| `--sink <api>` | — | Explicit Sink API; repeatable |
| `--top <n>` | 5 | Console shows Top-N only; JSON always lists all confidences |
| `--deduped <file>` | `cdp-workflow/cdp-ast-output/runtime-function-logs.deduped.json` | Candidates |
| `--cache <file>` | `.cache/structural-prior-cache.json` | Offline feature cache (\(S_{\text{ast}}\)/\(S_{\text{api}}\)/\(S_{\text{ent}}\)/call graph) |
| `--no-cache` | — | Disable cache; force recompute |
| `--out <file>` | `anchor-selection.json` | Output JSON |

**Output**: `distribution` lists all candidates sorted by `confidence` (0–1, sums to 1); `anchors` mirrors `distribution` (legacy field). `--top` only limits console display.

### Information-gain breakpoint selection (TC2)

Selects the observation breakpoint with highest information-gain / cost ratio from current distribution \(H_t\), function dictionary, and LLM prediction. Implementation: `src/modules/info-gain-breakpoint/`; entry: `select-breakpoint.js` at project root.

**Inputs** (after step 7):

| File | Description |
|------|-------------|
| `anchor-selection.json` | Current distribution \(H_t\) and task \(d\) |
| `function-dictionary.json` | FuncDict (observable variables, runtime_loc) |
| `cdp-ast-output/static-call-graph.json` | StaticCG (Sink distances) |
| `causual-graph.json` | Current causal graph \(G_t\) (may start empty) |

**Basic usage** (from project root `Anchor/`):

```bash
# Mock mode (no API key; offline validation)
node select-breakpoint.js --mock

# Real LLM (requires OPENAI_API_KEY)
node select-breakpoint.js

# Inject precomputed LLM response
node select-breakpoint.js --llm-response-file ./fixtures/llm-candidates.json
```

**Optional parameters**:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `--mock` | — | Heuristic mock; no LLM call |
| `--llm-response-file <file>` | — | Inject LLM JSON response |
| `--focus <n>` | 3 | Focus function count |
| `--out <file>` | `cdp-workflow/need_to_break.json` | Output path |

**Output** (`need_to_break.json`): `selected_breakpoint` (`var_name`, `runtime_loc`, `condition`), `llmResponse`, and `breakpointTasks` array for `breakpoint-exit`.

## Project structure

```
cdp-workflow/
├── bin/cli.js
├── src/
│   ├── index.js
│   ├── commands/
│   │   ├── ast.js
│   │   ├── graph.js
│   │   ├── click.js
│   │   ├── breakpoint.js
│   │   └── breakpoint-exit.js
│   └── modules/
│       ├── connection-manager.js
│       ├── file-system.js
│       ├── file-viewer.js
│       ├── debugger.js
│       ├── anchor-collector.js
│       ├── call-graph-builder.js
│       ├── static-cg-builder.js
│       ├── ast-analyzer.js
│       ├── info-gain-breakpoint/   # TC2 information-gain breakpoint selection
│       └── structural-prior/       # AST parsing, Sink detection, static CG core
└── package.json
```

## Tests

Logic-only tests (no Chrome required):

```bash
npm test
```
