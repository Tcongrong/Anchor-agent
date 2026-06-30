# Anchor Benchmark Docker Context

This directory is a cleaned Docker build context for the benchmark and baseline
experiments. It includes experiment code, benchmark cases, and selected formal
results. It excludes local virtual environments, node modules, caches, smoke
artifacts, backup cases, API key files, and unrelated logs.

Build:

```bash
cd /home/luis/anchor-benchmark-docker
docker build -t anchor-benchmark:repro .
```

Run without LLM keys, useful for static methods and result inspection:

```bash
docker run --rm -it anchor-benchmark:repro
docker run --rm -it anchor-benchmark:repro /workspace/docker/summarize_results.sh
```

Run LLM experiments by passing keys at runtime:

```bash
docker run --rm -it \
  -e ANCHOR_LLM_PROVIDER=openai \
  -e ANCHOR_LLM_MODEL=GLM-5.2 \
  -e OPENAI_API_BASE="$OPENAI_API_BASE" \
  -e OPENAI_API_KEY="$OPENAI_API_KEY" \
  anchor-benchmark:repro \
  /workspace/docker/run_case_group.sh case001 --repeats 3
```

Included result sets:

- `baselines/artifacts/case_runs/case001..case010`: DS4Pro synthetic 50-case results.
- `baselines/artifacts/model_comparison/glm52_synthetic50`: GLM-5.2 synthetic 50-case results from the separate GLM clone.
- `baselines/artifacts/case_runs_real_glm52_nothink`: GLM-5.2 no-thinking real 20-case results.
- `baselines/artifacts/results_ds4pro_real20_original`: original DS4Pro real 20-case results.
- `baselines/artifacts/rescoring`: rescored old real outputs on the current real cases.
