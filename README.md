# Anchor

This repository contains the Anchor method and its supporting experiments and evaluation resources. It is organized into three main parts:

## [Anchor/](./Anchor/) — Main Method

Anchor is a **causality-guided debugging agent** that combines runtime causal graphs with structural priors to automatically select breakpoints, collect observations, update confidence, and converge on the **behavior anchor function** responsible for a target behavior.

This directory includes:

- **Agent core implementation**: the full pipeline—structural prior (TC1), information-gain breakpoint selection (TC2), CDP runtime collection and causal graph updates (TC3), reverse recovery, and confidence updates (entry point: `main.js`)
- **Experiment automation scripts**: `run-experiment.js`, `run-experiment-range.js`, and related tools for batch benchmark runs; see [docs/experiment-automation-scheduling.md](./Anchor/docs/experiment-automation-scheduling.md)
- **Hyperparameter recovery guide**: how to tune per task family when default settings fail to converge; see [docs/Hyperparameter-Recovery-Experiment-Guide.md](./Anchor/docs/Hyperparameter-Recovery-Experiment-Guide.md)

For full usage details, see [Anchor/README.md](./Anchor/README.md).

## [JavaScript Runtime and Web Platform Terminology/](./Anchor/JavaScript%20Runtime%20and%20Web%20Platform%20Terminology/) — Preliminary Measurement Study

A preliminary study used in the **Introduction** to validate **runtime semantic explosion** in dynamic analysis.

We measure, across 14 real-world web applications: the scale of function invocations triggered by a single user interaction, the number of asynchronous turns, and the fraction of semantically relevant calls. Results show that one interaction typically triggers hundreds of invocations across multiple async stages, while fewer than 5% of calls are semantically relevant—quantitatively motivating behavior-aware localization over exhaustive runtime tracing.

See [READEME.md](./Anchor/JavaScript%20Runtime%20and%20Web%20Platform%20Terminology/READEME.md) in that directory.

## [anchor-benchmark-docker/](./anchor-benchmark-docker/) — Benchmark & Baseline Evaluation

A reproducible Docker environment for the **Anchor Benchmark** we propose and baseline comparison experiments. It includes benchmark cases, evaluation scripts for multiple baselines (Direct-LLM, SWE-agent, LocAgent-JS, etc.), and selected formal results.

- Build and run instructions: [README_DOCKER.md](./anchor-benchmark-docker/README_DOCKER.md)
- Benchmark cases: `anchor-benchmark/benchmark_cases/`

---

**Suggested reading order**: preliminary measurement study → benchmark definition & baselines → Anchor method & automated experiments.
