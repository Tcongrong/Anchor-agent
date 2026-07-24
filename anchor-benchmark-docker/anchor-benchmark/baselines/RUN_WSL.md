# WSL2 下安装与运行 Baseline Suite

本文记录在 Windows 11 + WSL2 Ubuntu 24.04、使用 SophNet `DeepSeek-V4-Pro`（DS4-Pro，OpenAI 兼容接口）作为统一 backbone 运行 baseline 套件的流程。与 SWE-agent / LocAgent 的安装文档同构，复用同一份 `~/.config/agents/sophnet.env`。

## 1. 环境信息

```text
Windows 11
WSL2 Ubuntu 24.04
Node.js >= 18（运行 Playwright + acorn AST 提取）
Miniforge / Conda（Python 3.12）
SophNet API Base: https://www.sophnet.com/api/open-apis/v1
统一 backbone: DeepSeek-V4-Pro（原生 function calling）
```

项目目录（仓库根，含 `package.json` / `baselines/` / `benchmark_cases/`）：

```text
~/anchor-benchmark/
├── package.json
├── package-lock.json
├── baselines/          # 框架（src/anchor_eval、node/、scripts/）
└── benchmark_cases/    # 40 个用例
```

> 说明：`baselines/node/*.mjs` 会从仓库根的 `node_modules` 解析依赖，`data.py` 从 `<根>/benchmark_cases` 读用例，所以这三者必须保持同级。

---

## 2. Ubuntu 基础环境

```bash
sudo apt update
sudo apt install -y git curl wget ca-certificates build-essential rsync

# Node.js（Ubuntu 24 自带 18.x 即可；如需 20 LTS 用 nodesource）
sudo apt install -y nodejs npm
node -v        # 必须 >= 18
```

Miniforge / Conda 已在 SWE-agent 文档第 3 节安装，这里直接复用。

---

## 3. 迁移项目到 WSL（务必放到 ext4，不要在 /mnt 上跑）

在 Windows 盘 `/mnt/d` 上运行会很慢，且 Playwright/Chromium 不稳定。复制到原生 Linux 文件系统：

```bash
mkdir -p ~/anchor-benchmark
rsync -a --info=progress2 \
  --exclude node_modules --exclude .venv --exclude __pycache__ \
  /mnt/d/benchmark/package.json /mnt/d/benchmark/package-lock.json \
  /mnt/d/benchmark/baselines /mnt/d/benchmark/benchmark_cases \
  ~/anchor-benchmark/
cd ~/anchor-benchmark
```

> `node_modules` 不复制（Windows 二进制，需重装）；`baselines/artifacts/` 是可再生缓存，会随复制带过来，安装脚本会清掉其中的浏览器 trace 缓存。

---

## 4. API / backbone 配置（复用 sophnet.env，零额外配置）

本套件的 `LLMClient` 与 node Debugger-Agent 会**自动识别** backbone：当检测到 `OPENAI_API_BASE` / `OPENAI_BASE_URL` / `SOPHNET_API_KEY` 时走 OpenAI 兼容协议（即 SophNet/DS4-Pro），否则回退 Anthropic。所以你现有的 `~/.config/agents/sophnet.env` 已经够用：

```bash
source ~/.config/agents/sophnet.env
```

其中关键变量（已存在）：

```bash
export SOPHNET_API_KEY=<your-sophnet-key>
export OPENAI_API_KEY="$SOPHNET_API_KEY"
export OPENAI_API_BASE='https://www.sophnet.com/api/open-apis/v1'
export OPENAI_BASE_URL='https://www.sophnet.com/api/open-apis/v1'
```

可选覆盖项（一般不用设）：

```bash
export ANCHOR_LLM_PROVIDER=openai      # 强制后端（openai | anthropic）
export ANCHOR_LLM_MODEL=DeepSeek-V4-Pro# 模型 id；见下方“模型 id 说明”
export ANCHOR_LLM_MAX_TOKENS=4096      # 单次最大输出 token
```

**模型 id 说明**：SWE-agent / LocAgent 用 litellm，模型写成 `openai/DeepSeek-V4-Pro`（`openai/` 是 litellm 的路由前缀）。本套件是**直连** SophNet 的 `/chat/completions`，所以模型 id 用裸名 `DeepSeek-V4-Pro`（已是默认）。若 SophNet 端要求别的 id，用 `ANCHOR_LLM_MODEL` 覆盖。

---

## 5. 安装依赖

### 5.1 一键脚本（推荐）

```bash
cd ~/anchor-benchmark
bash baselines/setup_wsl.sh
```

脚本会依次：`npm ci` → `npx playwright install --with-deps chromium`（apt 装系统库，可能要 sudo 密码）→ 建 `.venv` 装 numpy/scipy/scikit-learn → 清理 Windows 跑出来的 trace 缓存 → 跑 pytest + 一个确定性方法 + 用一个用例验证 Playwright Chromium。

### 5.2 手动（与 sweagent/locagent 一致，用 conda）

```bash
cd ~/anchor-benchmark

# 1) node 依赖（acorn + playwright），从仓库根安装
npm ci

# 2) Chromium + 系统库（headless，在 WSL2 无需 X server）
npx playwright install --with-deps chromium

# 3) python 环境
conda create -n anchor python=3.12 -y
conda activate anchor
pip install -r baselines/requirements.txt

# 4) 清掉上一次 Windows 运行的浏览器 trace 缓存（AST 候选缓存是内容哈希、跨系统通用，保留）
rm -rf baselines/artifacts/evidence
find baselines -name __pycache__ -type d -prune -exec rm -rf {} + 2>/dev/null || true
```

---

## 6. 后端连通性自检

先用一次裸 curl 验证 SophNet 可达且模型 id 正确：

```bash
source ~/.config/agents/sophnet.env
curl -s "$OPENAI_BASE_URL/chat/completions" \
  -H "authorization: Bearer $OPENAI_API_KEY" \
  -H "content-type: application/json" \
  -d '{"model":"DeepSeek-V4-Pro","messages":[{"role":"user","content":"reply OK"}],"max_tokens":16}'
```

返回 JSON 且 `choices[0].message.content` 有内容即通；若报 model not found，调整 `ANCHOR_LLM_MODEL`。

---

## 7. 运行测试（分层冒烟）

每次运行前：

```bash
cd ~/anchor-benchmark
conda activate anchor          # 或 source .venv/bin/activate
source ~/.config/agents/sophnet.env
```

**(a) 单元测试 / 不需要后端**

```bash
python -m pytest baselines/tests -q
```

**(b) 确定性方法（无浏览器、无 key）**

```bash
python baselines/scripts/run_method.py BM25-Static
```

**(c) 运行时方法（验证 Playwright Chromium）** —— 用一个用例跑，避免全量很慢。下面这段是通用冒烟模板，把 `M=` 改成任意方法名即可：

```bash
python - <<'PY'
import sys; sys.path.insert(0,"baselines/src")
from anchor_eval.core import data
from anchor_eval.core.budget import BudgetManager
from anchor_eval.core.registry import get_method
import anchor_eval.methods._all          # noqa 注册全部方法
M = "SITIR"                               # 改成想测的方法
tasks, cands, _ = data.load_tasks(); t = tasks[0]
m = get_method(M)(); bm = BudgetManager(M, t.task_id, {"page_triggers":8})
p = m.localize(t, cands[t.task_id], bm)
print(M, "->", "status=", p.status, "top1=", p.top1_func_id,
      "tokens=", p.budget_used.get("llm_input_tokens"), p.budget_used.get("llm_output_tokens"),
      "artifacts=", {k: p.artifacts.get(k) for k in ("trace_ok","executed_size","agent_steps","submitted")})
PY
```

**(d) LLM 定位方法（走 DS4-Pro）** —— 把上面模板的 `M` 改成 `Direct-LLM` 或 `Agentless-Loc`。
> 注意：Direct-LLM 会把全部候选函数签名分块发给模型，单个用例（数千候选）调用次数/费用较高，冒烟建议优先用下一项的 agent。

**(e) Code Agent（验证 OpenAI 原生 function-calling 的工具往返）** —— `M="SWE-agent"` 或 `M="LocAgent-JS"`。这两个走我适配后的 OpenAI 工具调用，step 数有上限，通常几步内 submit，是验证 backbone 接线最划算的一项。

**(f) Debugger-Agent（node + CDP + DS4-Pro）** —— 它由 node 子进程驱动，跑一个用例：

```bash
node baselines/node/agent_debugger.mjs benchmark_cases/case001_browser_fingerprint | python -m json.tool | head -40
```
看到 `"ok": true` 或有 `steps` / `answer` 即说明 node 端的 OpenAI 工具往返打通。

**(g) 全套 + 报告**

```bash
python baselines/scripts/run_panel.py        # 全部方法（首跑 Playwright 要 trace 全部 40 个用例，较慢）
python baselines/scripts/make_report.py      # 重建 baselines/artifacts/reports/report.md
```

只跑某几族：`python baselines/scripts/run_panel.py classical diagnostic llm_localization`。

---

## 8. 方法 ↔ 依赖对照

| 方法 | family | 需要 DS4-Pro key | 需要 Playwright |
|---|---|---|---|
| LSI-FL, BM25-Static, Uniform-Random | classical / diagnostic | ✗ | ✗ |
| SimpleSink | diagnostic | ✗ | ✗（纯静态调用图）|
| SITIR, Software-Recon, JS-DynSlice, Uniform-Tracer | classical / diagnostic | ✗ | ✓ |
| Direct-LLM, Agentless-Loc | llm_localization | ✓ | ✗ |
| SWE-agent, LocAgent-JS | code_agent | ✓ | ✗ |
| Exec-LLM | diagnostic | ✓ | ✓ |
| Debugger-Agent | matched_control | ✓ | ✓（node + CDP）|

无 key 时，需要 key 的方法返回 `not_run`（不报错，报告里显示 not run）。

---

## 9. 当前结论 / 待办

## 9. 批量不间断运行

大规模实验用批量调度脚本逐个 case group 运行。每个 case 写独立目录：

```text
artifacts/case_runs/case001/
artifacts/case_runs/case002/
...
```

批量本身另有状态目录：

```text
artifacts/batch_runs/<timestamp>/
├── manifest.json
├── status.json
├── summary.md
├── summary.jsonl
└── caseNNN.log
```

推荐命令：

```bash
cd /home/user/anchor-benchmark/baselines || exit 1
set -a
. /home/user/.config/sweagent/sophnet.env
set +a
unset ANCHOR_LLM_MAX_TOKENS
unset ANCHOR_LLM_TIMEOUT_SEC
export ANCHOR_LLM_PROVIDER=openai
export ANCHOR_LLM_MODEL=DeepSeek-V4-Pro
export PYTHONUNBUFFERED=1
mkdir -p artifacts/batch_runs
nohup /home/user/miniforge3/envs/locagent/bin/python scripts/run_case_groups.py --all --repeats 3 --skip-complete > artifacts/batch_runs/nohup_latest.log 2>&1 &
```

查看批量进度：

```bash
ls -td artifacts/batch_runs/* | head -1
cat "$(ls -td artifacts/batch_runs/* | head -1)/status.json"
cat "$(ls -td artifacts/batch_runs/* | head -1)/summary.md"
```

查看当前 case 进度：

```bash
cat artifacts/case_runs/case001/status.json
cat artifacts/case_runs/case001/summary.md
```

中断后继续：

```bash
cd /home/user/anchor-benchmark/baselines || exit 1
set -a
. /home/user/.config/sweagent/sophnet.env
set +a
unset ANCHOR_LLM_MAX_TOKENS
unset ANCHOR_LLM_TIMEOUT_SEC
export ANCHOR_LLM_PROVIDER=openai
export ANCHOR_LLM_MODEL=DeepSeek-V4-Pro
export PYTHONUNBUFFERED=1
mkdir -p artifacts/batch_runs
nohup /home/user/miniforge3/envs/locagent/bin/python scripts/run_case_groups.py --all --repeats 3 --skip-complete > artifacts/batch_runs/nohup_resume.log 2>&1 &
```

`--skip-complete` 会跳过已完整跑完且 repeats 匹配的 case；未完成或失败的 case 会重新跑。

已完成：

```text
WSL2 ext4 迁移
Node + Playwright Chromium（headless）
Python 科学栈（numpy/scipy/scikit-learn）
LLMClient + node Debugger-Agent 接入 SophNet DS4-Pro（OpenAI 兼容、原生 function calling）
确定性 + 运行时方法可跑；LLM/agent 方法走 DS4-Pro
40 用例、capability gate、grader、report 全部可用
```

待办（与迁移无关）：

```text
1) SWE-agent / LocAgent-JS 当前是“忠实复刻的内置 ACI/图搜索循环”（直接调 DS4-Pro），
   并不调用 ~/external-agents 下你装的真实 sweagent / locagent 包——后者面向 SWE-bench 仓库任务，
   与本基准的 JS-bundle 函数级定位任务不同构。若要在主表用真实开源实现，需要另写适配层。
```
