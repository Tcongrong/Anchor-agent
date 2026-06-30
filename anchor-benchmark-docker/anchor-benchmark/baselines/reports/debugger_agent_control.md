# 匹配对照 Debugger-Agent：配置、失败归因与"非稻草人"论证

> 目的：完整记录 matched-control（Debugger-Agent）的全部配置，定位其 ≈0.10 低分的核心
> 原因，并给出失败归因总结，证明它是**有效的强对照**而非被做弱的稻草人（strawman）。
> 证据均来自代码与落盘轨迹：`src/.../matched_control/debugger_agent.py`、
> `node/agent_debugger.mjs`、`configs/*.yaml`、`artifacts/trajectories/Debugger-Agent/`。
> 统计口径 = RQ1 五类（n=50 配对任务；原 `type_array_transformation` 系 byte-array 笔误，已物理重命名）。最后更新：2026-06-25。

---

## 1. 完整配置记录

Debugger-Agent 是 **ReAct [Yao'23] + CodeAct [Wang'24]** 范式跑在通用 CDP 调试器工具面上的
agent（`paper_id = R1+R2`），**与 Anchor 共享同一 backbone、同一预算、同一锚点定义**——
这正是"匹配对照"的含义：唯一被拿掉的是 Anchor 的策略算子（TC1/TC2/TC3 与外层 loop，
`uses = {TC1:F, TC2:F, TC3:F, loop:F}`，`forbidden = STRATEGY_OPS`）。

### 1.1 迭代步数 / 预算（与 Anchor 统一的"匹配预算"）

| 旋钮 | 值 | 来源 |
|---|---|---|
| 迭代步数上限 `max_steps`（LLM/ReAct 轮数） | **20** | `matched_budget.max_steps` / `DBG_MAX_STEPS` |
| 每轮断点上限 `bp_per_round` | 6 | `matched_budget.bp_per_round` |
| 任务总断点上限 `bp_total` | 24 | `matched_budget.bp_total` |
| LLM token 预算 `max_tokens`（整任务） | **750,000** | `matched_budget.max_tokens` = Anchor/agent 协议同值 |
| 单次调用 `max_tokens` | 1500 | `node/agent_debugger.mjs` `llm()` |
| 墙钟 `wall_sec` | 600 | `matched_budget.wall_sec` |
| 重复次数 `repetitions` | 3 | `agent_protocol.repetitions` |
| backbone / 温度 / top_p | `claude-opus-4-8` / 0 / 1 | `configs/llm.yaml`、`experiment.yaml` |
| `source_read_only` | true | `agent_protocol`（只读源码，与各 agent 一致） |

> **关于"Tmax 统一"的口径更正**：实际统一的迭代上限是 **20 步 / 24 断点**，不是 10。
> 这与 Anchor 本批观测到的迭代数（3–20 次，最高 case009_signing=20）落在同一量级——
> 即两者**确实预算匹配**（同 backbone、同 750k token 上限、同 600s 墙钟、同量级迭代）。
> 若论文要严格写 "Tmax"，应写 20 而非 10，否则与 `configs/experiment.yaml` 不符。

### 1.2 工具面（通用 CDP，无 benchmark 特定策略算子）

`node/agent_debugger.mjs` 暴露 7 个工具：`list_candidates`、`read_source`、
`set_breakpoint`（支持 0-based offset + 可选 JS 条件）、`trigger`（重放任务交互一次，
返回有序断点命中的 sync/async 栈与浅层 locals）、`read_vars`（读第 i 个命中点的
局部/闭包变量）、`observe`（console/network/dom）、`submit`。

### 1.3 提示词模板（逐字）

**System：**
> "You are a debugging agent locating the single behaviour-anchor function in a deployed,
> obfuscated browser bundle. You may set breakpoints, replay the interaction, and inspect
> paused sync/async stacks and local/closure variables. The anchor is the first
> target-specific value-construction function on the dynamic chain (not routing, input
> collection, a wrapper, the sink, or a generic utility). Reason step by step (ReAct) and,
> when confident, call submit with the complete enclosing function's file and offsets."

**User：** `Task: {question}\nObservable: {observable}\nInteraction: {interaction}\nBundle files: {files}`

> 注意：该 system 提示**给出了与 Anchor 完全相同的锚点定义**（"动态链上第一个
> target-specific 的值构造函数，排除路由/取值/包装/sink/通用工具"）。对照组并未被喂
> 模糊或误导性的任务定义——这是"非稻草人"的关键前提之一。

### 1.4 接口重试策略

- **无重试 / 无退避**：`llm()` 中 `if (!r.ok) throw`——任何非 200（429 限流、5xx）
  直接抛出，在主循环 `catch` 落为 `out.error`，wrapper 据此对 top-1 弃权。
- **打分口径与兜底**：`debugger_agent.py` 取 top-1 = `resolve(answer) or resolve(best_guess)`。
  本批 agent **全程未显式 `submit`**（150/150 行 `submitted=False`），故评分落在
  **best_guess = 末次 `read_source` 读到的函数**上，按角色给分。仅当 best_guess 也无法
  解析时才退到 **BM25 补 recall 尾部 + top-1 弃权**——该兜底在本批**从未触发**
  （`abstained=False`、`status=ok` 全部 150 行）。
- **影响评估**：本批 RQ1 五类 `failed%=0`、`abstained=0`、无 API 错误——低分**不是**弃权、
  重试缺失或崩溃造成的，而是 agent 给出的（静态）top-1 真实定位失败（见 §2）。重试缺失
  只在网络抖动时才会伤害，本批未触发。

---

## 2. ≈0.10（折叠 mean $S_d$=0.096、strict=0.00）低分的核心原因 —— **断点观测选择错误**（非"运行时证据解读错误"）

二选一明确选 **断点/观测选择错误**。证据（50 个 RQ1 任务、150 次重跑）：

| 指标 | 数值 | 含义 |
|---|---|---|
| 显式 `submit` 的run | **0 / 50（150/150 `submitted=False`）** | **从不收敛提交**；评分落在 best_guess(末次 read_source 的函数)上 |
| run 级命中锚点 $f^*$ | **4 / 150**；折叠多数票后 **0 / 50** | 静态 best_guess 偶中、但跨 3 次不稳定（46 任务 0 中、4 任务仅 1/3 中）→ folded strict=0.00 |
| best_guess 解析到某*角色*函数 | 49 / 150 | 多落在 wrapper/sink/role 上拿部分分（0.2/0.5/0.7），非锚点 → mean $S_d$=0.096 |
| 重放交互 `trigger` ≥1 | 47 / 50 | 它**确实在跑动态**，不是退化成纯静态 |
| 设过断点 `bp_total>0` | 49 / 50；均值 **5.1 / 24** | 用了断点，但**远未耗尽**预算 |
| **读过暂停变量 `read_vars` ≥1** | **7 / 50** | **关键**：绝大多数run从未真正读取断点捕获的运行时证据 |
| 静态 `read_source` 主导 | 46 / 50 | 退化为"读源码 + 猜" |
| 工具调用总量 | read_source 690、set_breakpoint 327、trigger 69、observe 38、**read_vars 15** | read_vars 极少 |

**机理（来自 agent 自己的推理文本，`case009_request_transformation`）：**
> *"The breakpoints didn't hit, so those functions aren't on the dynamic chain for this
> interaction. Let me look at more candidate functions…"*

即典型链路：**断点下错位置 → 重放时不命中 → 拿不到暂停现场 → 放弃动态、回退到静态读源码
→ 步数耗尽，只能拿末次静态 read_source 的函数充当 top-1（从不显式 submit）**。失败发生在
**"选择在哪儿观测"这一步**：agent 无法把断点稳定地落在
混淆 bundle 中那个"动态链上的值构造函数"，因此**根本没拿到运行时证据**——谈不上"解读
错误"（read_vars 仅 7/50 用到，多数run无证据可读）。这排除了"运行时证据解读错误"。

---

## 3. 失败归因总结（"非稻草人"论证，可直接入论文）

Debugger-Agent 的低分是**能力内生的失败**，而非对照被故意削弱：

1. **同源、同预算**：同一 backbone（`claude-opus-4-8`, T=0）、同一 750k token 上限、
   同 600s 墙钟、20 步/24 断点的匹配预算、3 次重复——与 Anchor 同台。
2. **完整工具面 + 公平打分**：拿到 set_breakpoint / trigger / read_vars / 同步异步栈 /
   observe 的全套 CDP 能力；未显式提交时按其 best_guess(静态末次 read_source)如实评分，
   不被额外惩罚（BM25 兜底本批未触发，故也未冒功）。
3. **相同任务定义**：system 提示给出与 Anchor 一致的锚点定义，没有误导。
4. **失败点正是 Anchor 所补的能力**：它在 49/50 上**用了**断点（47/50 重放），却在 43/50 上
   连暂停变量都没读到——因为**无法把断点选在动态值构造链上**（"breakpoints didn't hit"），
   于是退化为静态猜测（从不显式提交，按末次 read_source 评分）。这恰好是 Anchor 的 TC/loop
   策略算子要解决的"在混淆链上定位并迭代收敛观测点"的问题。

> **一句话结论**：给定与 Anchor 相同的模型、预算、工具与任务定义，一个标准 ReAct+CodeAct
> 调试器 agent 在混淆 JS 上**有能力执行动态调试、却无能力选对观测点**（0/50 提交、
> read_vars 仅 7/50、断点频繁不命中后回退静态），因此得分≈0.10。这是对照组的**真实
> 能力上限**，而非稻草人——也正是 Anchor 相对其 **+0.692 [CI 0.577, 0.783]、McNemar 33/0**
> 领先的来源。
