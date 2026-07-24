# Anchor: Causality-Guided Behavior Localization for Modern Web Runtimes

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/Version-1.0-green.svg)
![Node](https://img.shields.io/badge/Node.js-18%2B-339933.svg)
![Runtime](https://img.shields.io/badge/Runtime-Chrome%20DevTools%20Protocol-000000.svg)

**Anchor** is a **causality-guided debugging agent** that automatically localizes the **behavior anchor function** responsible for a target runtime behavior in real-world web applications. Instead of exhaustively tracing execution, it fuses **structural priors** with **runtime causal graphs** to select breakpoints, collect observations, update confidence, and converge on the single function that first constructs the target-specific value.

Beyond the method itself, this repository is a complete **research artifact**: it bundles the agent implementation, a **reproducible benchmark with baseline evaluations**, and a **preliminary measurement study** that quantitatively motivates the whole approach.

---

## Why Anchor? (The Runtime Semantic Explosion)

Localizing "which function is responsible for this behavior" in a modern web app is fundamentally different from localizing a bug in a self-contained program. A single user interaction detonates into a storm of runtime activity that overwhelms both classical dynamic analysis and off-the-shelf LLM agents:

- **C1: Invocation volume.** A single interaction triggers a median of **493.5** function-invocation events across named functions, closures, arrow functions, and dynamically generated code.

- **C2: Asynchronous fragmentation.** The relevant logic is scattered across a median of **7** asynchronous turns (Promise reactions, timers, `postMessage`, network callbacks), so a naive synchronous stack tells only a fraction of the story.

- **C3: Extreme signal sparsity.** Fewer than **4.2%** of invocation events are semantically relevant to any particular target behavior. Generic utilities, framework dispatchers, and reusable crypto primitives dominate the trace.

- **C4: Wrapper / sink confusion.** The value observed at the sink (`console.log`, `fetch` header, local storage) is usually produced far upstream. The naive "closest to sink" heuristic consistently mislocalizes to wrappers and event plumbing rather than the true constructor.

Together these define **runtime semantic explosion**: hundreds of invocations across many async stages, of which only a tiny fraction matters. This quantitatively motivates *behavior-aware localization* over exhaustive runtime tracing — the core thesis Anchor sets out to validate.

### Preliminary Measurement (14 production websites)

*Measured on 14 production-grade web applications, each with one externally observable target behavior (login signing, request signing, encrypted payload generation, local state encoding, etc.). See [the measurement protocol](./Anchor/JavaScript%20Runtime%20and%20Web%20Platform%20Terminology/README.md).*

| Metric | Definition | Median |
| :--- | :--- | :---: |
| **N_inv** (Invocation events) | Function entries per single interaction | **493.5** |
| **T_async** (Asynchronous turns) | Event-loop continuations per interaction | **7** |
| **σ** (Semantic relevance ratio) | Fraction of invocations relevant to the target | **< 4.2%** |

---

## Repository Overview

This repository is organized into three complementary parts, meant to be read in order:

| Part | Path | Role |
| :--- | :--- | :--- |
| **Preliminary Study** | [`JavaScript Runtime and Web Platform Terminology/`](./Anchor/JavaScript%20Runtime%20and%20Web%20Platform%20Terminology/) | Quantifies *runtime semantic explosion* (used in the Introduction) |
| **Main Method** | [`Anchor/`](./Anchor/) | The causality-guided agent (TC1 → TC2 → TC3 → reverse recovery → confidence) |
| **Benchmark & Baselines** | [`anchor-benchmark-docker/`](./anchor-benchmark-docker/) | Reproducible Docker environment, benchmark cases, and baseline comparisons |

---

## The Anchor Method

Anchor is a five-stage pipeline: **preprocessing (external)**, **TC1 initial prior**, **main loop**, **convergence check**, and **result output**. Each turn of the main loop tightens a confidence distribution over candidate functions until it converges on the behavior anchor.

```text
┌─────────────────────────────────────────────────────────────────┐
│  Data preprocessing (external): deduped logs · AST ·            │
│  static-call-graph · function-dictionary                        │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  TC1  Structural prior  →  anchor-selection.json (distribution H₀)│
└────────────────────────────┬────────────────────────────────────┘
                             ▼
        ┌──────────────────────────────────────────┐
        │  Main loop  t = 1 … T_max (default 10)    │
        │  TC2  Information-gain breakpoint         │
        │  TC3  CDP breakpoint + causal graph G_t   │
        │       Reverse recovery → anchor f*        │
        │       Confidence update H_t → H_{t+1}     │
        │       Convergence check                   │
        └────────────────────────────┬─────────────┘
                                     ▼
┌─────────────────────────────────────────────────────────────────┐
│  Output  anchor-agent-result.json (anchor + evidence + alternates)│
└─────────────────────────────────────────────────────────────────┘
```

### Core Components

| Stage | Description |
| :--- | :--- |
| **TC1 — Structural prior** | Scores candidate functions (structural / hybrid / value modes) into an initial confidence distribution H₀. |
| **TC2 — Information-gain breakpoint** | Selects the breakpoint that maximally reduces uncertainty over the current distribution, with optional LLM prediction. |
| **TC3 — Causal graph collection** | Sets Chrome DevTools Protocol breakpoints, evaluates variables, and **incrementally** merges runtime edges/observations into the causal graph. |
| **Reverse recovery** | Identifies the target value node (TVN), reverse-traverses the causal graph, and uses LLM scoring to select the anchor candidate f*. |
| **Confidence update** | Bayesian-style update `L_t = L_val × L_anchor × L_pred` that reshapes H_t for the next turn. |

For the full design, parameters, and per-module docs, see [`Anchor/README.md`](./Anchor/README.md).

---

## Quick Start

### Prerequisites

- **Node.js** 18+
- **Chrome** started with remote debugging (`--remote-debugging-port=9222`) and the target page loaded
- Preprocessing artifacts prepared under `cdp-workflow/cdp-ast-output/` (deduped logs, static call graph, function dictionary)
- *(Optional)* an OpenAI-compatible LLM API for TC2 and reverse recovery

### Run the agent

From the repo root [`Anchor/`](./Anchor/):

```bash
# Install dependencies
cd Anchor/cdp-workflow && npm install && cd ..

# Full run (Chrome + preprocessing data required)
node main.js --task "Find the function that generates search_sig in console.log" --sink console.log

# Development: mock LLM, skip CDP, reuse existing causal graph / observations
node main.js --mock --skip-collect --skip-tc1 --max-iterations 2

# All CLI options
node main.js --help
```

### Batch benchmark automation

```bash
node run-experiment.js --list
node run-experiment.js --id 1
node run-experiment-range.js --from 1 --to 10 --continue-on-error \
  --benchmark-dir "/path/to/benchmark_cases"
```

See [docs/experiment-automation-scheduling.md](./Anchor/docs/experiment-automation-scheduling.md) for scheduling details and [docs/Hyperparameter-Recovery-Experiment-Guide.md](./Anchor/docs/Hyperparameter-Recovery-Experiment-Guide.md) when default settings fail to converge.

---

## The Anchor Benchmark

The benchmark evaluates behavior localization on real and synthetic web applications, isolating **capability** (what runtime information a method may access) from **strategy** (how it uses that information). Baselines span classical fault-localization, LLM localization, code agents, matched controls, and diagnostic lower bounds.

### Evaluation Metrics

| Metric | Definition |
| :--- | :--- |
| **mean_score** (S_d) | Primary indicator: graded localization quality against the oracle anchor (higher is better). |
| **strict_acc** | Fraction of tasks where the top-1 prediction is exactly the anchor function. |
| **recall@1** | Whether the anchor appears as the top-ranked candidate. |

### Baseline Families

| Family | Representative methods | Capability tier |
| :--- | :--- | :--- |
| **Proposed** | Anchor (+ ablations: noLoop, noTC2, noTC3, TC1-only) | anchor |
| **Classical FL** | LSI-FL, SITIR, JS-DynSlice, Software-Recon | static → instrumented exec |
| **LLM localization** | Direct-LLM, Agentless-Loc | static |
| **Code agents** | SWE-agent, LocAgent-JS | static |
| **Matched control** | Debugger-Agent, FixedProbe-BM25 | debugger |
| **Diagnostics** | BM25-Static, SimpleSink, Uniform-Tracer, Uniform-Random | lower bounds |

**Key takeaway:** the benchmark is deliberately hard. Across capability-limited baselines, `mean_score` stays at or below **~0.2** and strict accuracy near zero — confirming that neither closest-to-sink heuristics nor static/LLM localization suffice, and that behavior-aware causal guidance is required. See [`anchor-benchmark-docker/anchor-benchmark/baselines/artifacts/reports/report.md`](./anchor-benchmark-docker/anchor-benchmark/baselines/artifacts/reports/report.md) for the full capability matrix, RQ slices, failure matrix, and bootstrap significance tests.

### Reproduce with Docker

```bash
cd anchor-benchmark-docker
docker build -t anchor-benchmark:repro .

# Inspect included results without any LLM keys
docker run --rm -it anchor-benchmark:repro /workspace/docker/summarize_results.sh

# Run an LLM baseline by passing keys at runtime
docker run --rm -it \
  -e ANCHOR_LLM_PROVIDER=openai \
  -e ANCHOR_LLM_MODEL=GLM-5.2 \
  -e OPENAI_API_BASE="$OPENAI_API_BASE" \
  -e OPENAI_API_KEY="$OPENAI_API_KEY" \
  anchor-benchmark:repro \
  /workspace/docker/run_case_group.sh case001 --repeats 3
```

Full build/run instructions: [README_DOCKER.md](./anchor-benchmark-docker/README_DOCKER.md).

---

## Directory Structure

```text
Anchor/
├── Anchor/                                       # Main method
│   ├── main.js                                   # CLI entry → runAnchorAgent()
│   ├── select-anchors.js                         # TC1 structural prior
│   ├── select-breakpoint.js                      # TC2 information-gain breakpoint
│   ├── collect-breakpoint-observations.js        # TC3 CDP collection
│   ├── reverse-anchor-recovery.js                # Reverse recovery (TVN → anchor)
│   ├── update-confidence.js                      # Bayesian-style confidence update
│   ├── run-experiment.js / run-experiment-range.js  # Benchmark harness
│   ├── cdp-workflow/                             # CDP tooling, AST pipeline, agent orchestration
│   ├── docs/                                     # Automation & hyperparameter-recovery guides
│   └── JavaScript Runtime and Web Platform Terminology/  # Preliminary measurement study
├── anchor-benchmark-docker/                      # Benchmark & baselines
│   ├── Dockerfile                                # Reproducible evaluation environment
│   ├── README_DOCKER.md                          # Build & run instructions
│   └── anchor-benchmark/baselines/               # Cases, baseline code, and formal result sets
└── README.md                                     # This file
```

---

## Suggested Reading Order

1. **Preliminary measurement study** — understand *why* runtime semantic explosion makes exhaustive tracing infeasible.
2. **Benchmark definition & baselines** — see the task formulation and why prior methods fall short.
3. **Anchor method & automated experiments** — the causality-guided agent that closes the gap.

---

## Citation

```bibtex
@inproceedings{anchor2027,
  title     = {Anchor: Causality-Guided Behavior Localization for Modern Web Runtimes},
  author    = {Anonymous},
  booktitle = {Proceedings of the International Conference on Software Engineering},
  year      = {2027},
}
```

## License & Double-Blind Compliance

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

In compliance with the **Double-Blind Review Policy**, author identities, email addresses, and organizational affiliations have been omitted from this repository, datasets, and scripts.
