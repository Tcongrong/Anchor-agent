# RQ1 显著性分析代码

实现 [`../signaficance_plan.md`](../signaficance_plan.md) 的 §9 / §11 runbook。
**纯 Python 标准库**，无需 numpy/scipy/pandas/statsmodels —— `python3` 直接可跑。
全程只读取既有落盘结果并对其重算，**不重跑系统、不调用 LLM/浏览器**（plan §3.5）。

## 文件

| 文件 | 作用 | 对应计划节 |
|---|---|---|
| `stats_core.py` | 统计核心：BCa bootstrap、sign-flip 置换、精确 McNemar、Wilcoxon、Holm、Cohen $d_z$、正态 CDF/PPF、percentile | §4–§6 |
| `aggregate_runs.py` | 扫描 `artifacts/case_runs/*/raw.jsonl` → `runs.csv`（含缺失编码、类别映射、§2.2 自查） | §2 |
| `significance.py` | `runs.csv` → `significance_results.csv` + `per_category_results.csv` | §3–§7 |
| `test_stats.py` | 统计核心自检（14 项，可用 pytest 或 `python3 test_stats.py`） | — |

## 用法（§11 runbook）

```bash
cd baselines/analysis

# Step 1-3: 汇集 + 自查，生成 runs.csv
python3 aggregate_runs.py            # 加 --strict 让自查失败即非零退出

# Step 4-9: 主分析（参照方法默认 Anchor）
python3 significance.py              # --ref Anchor（计划头条对比）

# 自检测试
python3 test_stats.py
```

产出：`runs.csv`、`significance_results.csv`、`per_category_results.csv`。

## 与计划/现实数据的差异（重要）

代码按计划写，但**已落盘的真实数据是 baseline-only**，因此做了如下**参数化**而非硬编码：

1. **参照方法缺 Anchor**：`artifacts/` 里 14 个 baseline 都有真实逐次成绩，但
   `Anchor` 在 `predictions/Anchor.jsonl` 里全是 `status=not_run`（占位）。
   故 `--ref Anchor` 会**友好报错并列出可用方法**。一旦补上 Anchor 的真实
   `raw.jsonl` 行，无需改代码即可直接出头条对比。
   烟测可用任一 baseline 作参照验证全链路，例如：
   ```bash
   python3 significance.py --ref Direct-LLM --headline Uniform-Random
   ```

2. **重跑数是 3 不是 5**：折叠的多数票阈值用 `fraction ≥ 50%` 自适应任意
   `n_runs`（n=3→≥2，n=5→≥3），均值照常。少数只有 2 次的 (task,method) 按现有
   次数折叠（plan §11.3，绝不补跑）。

3. **RQ1 = 全 5 类、共 50 任务**：`significance.py` 默认不排除任何类别
   （`DEFAULT_EXCLUDE_CATEGORIES=[]`）。可用 `--exclude-category` /
   `--include-category` / `--loco-tasks` 自定义。

4. **类别名映射**：`aggregate_runs.py` 把原始 `request_signature_token_derivation`
   等映射成计划里的 `signing` / `state-encoding` / `byte-array` /
   `fingerprinting` / `request-transform`（`--no-map-categories` 可关闭映射）。
   注：原 `type_array_transformation`（case007–010）系 byte-array 笔误，**已在
   基准库与 artifacts 中物理重命名为 `byte_array_transformation`**，故 byte-array
   现含 case001–010 共 10 任务、配对 n=50。

## 冻结参数（plan §8，写死在 `significance.py`，可经 CLI 覆盖）

`seed=20260624`、`R=10000`、`alpha=0.05`、双侧；折叠 = 均值 / 多数票≥50%；
S_d 主 p 值用配对置换，CI 用 BCa；strict 用精确 McNemar；Holm 两族各自校正
（S_d 与 strict 分开；Wilcoxon 仅旁证不进家族）。
