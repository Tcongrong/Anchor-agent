#!/usr/bin/env bash
set -euo pipefail

cd /workspace/anchor-benchmark/baselines

cat <<'EOF'
Anchor benchmark reproducible environment

Common commands:
  /workspace/docker/run_case_group.sh case001 --repeats 3
  /workspace/docker/run_batch.sh --all --repeats 3 --skip-complete
  /workspace/docker/summarize_results.sh

LLM methods require runtime API variables, for example:
  -e ANCHOR_LLM_PROVIDER=openai
  -e ANCHOR_LLM_MODEL=GLM-5.2
  -e OPENAI_API_BASE=https://...
  -e OPENAI_API_KEY=...

No API key is baked into this image.
EOF
