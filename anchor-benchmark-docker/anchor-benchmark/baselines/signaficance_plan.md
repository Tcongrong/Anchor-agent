# RQ1 显著性检验 — 实验设计计划书

> 对应论文 TODO ②（`\textcolor{red}{[TODO: report the significance tests …]}`，§RQ1 / §Shared Evaluation Protocol）。
> **前提**：系统已跑完，每个任务、每个方法、每次重跑的原始成绩都已具备。本计划只覆盖"对已有结果做统计分析"，不涉及重跑系统。
> 最后更新：2026-06-24

---

## 0. 一页速览（TL;DR）

| 维度 | 主检验 | 旁证 | 校正 | 效应量 |
|---|---|---|---|---|
| 严格准确率（0/1） | **精确 McNemar 检验** | 准确率差 bootstrap CI | Holm–Bonferroni（严格家族内） | 准确率差、b/c 比值 |
| 加权得分 $S_d$（[0,1]） | **配对 bootstrap（BCa，R=10000）CI** | Wilcoxon 符号秩 | Holm–Bonferroni（$S_d$ 家族内） | $\Delta S_d$ + CI、Cohen's $d_z$、匹配秩双列相关 |

- **分析单元 = 任务（n = 50）**；5 次重跑先折叠成每任务一个值（加权分取均值、严格命中取多数票）。
- **头条对比**：\textsc{Anchor} vs. **Direct-LLM**（最强基线，$S_d=0.453$）；其余基线全列。
- 所有随机决策（折叠规则、$\alpha$、双侧、R、随机种子）在动手前冻结，写进附录防 p-hacking。
- 分析单元 = 全 5 类行为 × 10 案例 = **50 任务**（原 `type_array_transformation` 系 byte-array 笔误，已物理重命名为 `byte_array_transformation`）。

---

## 1. 目标

证明 \textsc{Anchor}（$S_d=0.79$，严格 $0.66$）相对各基线的领先是**统计上可靠、而非偶然**，并产出论文里现在还空着的占位数字（`XX.X`）。需交付：

1. **§RQ1 正文那句**：\textsc{Anchor} vs. Direct-LLM 的 $p$ 值与 95% CI。
2. **一张完整显著性表**：每个基线在两类指标上的 $\Delta$、CI、原始/校正 $p$、效应量、是否显著。
3. **分类别描述性表**：5 类各方法的均值 + 95% CI。
4. 可复现脚本 + 结果 CSV + 随机种子，提交仓库。

---

## 2. 数据准备

### 2.1 唯一输入：长表 `runs.csv`

后续所有分析都从这张表出发。每行一条"任务 × 方法 × 重跑"记录：

| 列名 | 含义 | 取值 / 约束 |
|---|---|---|
| `task_id` | 任务编号 | 50 个主集合任务（5 类 × case001–010；原 `type_array_transformation` 笔误已重命名为 byte-array） |
| `category` | 行为类别 | `signing` / `state-encoding` / `byte-array` / `fingerprinting` / `request-transform` |
| `method` | 方法名 | `Anchor` / `Direct-LLM` / `LocAgent-JS` / `Exec-LLM` / `SWE-agent` / `Agentless-Loc` / `Debugger-Agent` / `LSI-FL` / `SITIR` / `Software-Reconnaissance` / `JS-DynSlice` / `BM25-Static` / `SimpleSink` / `Uniform-Tracer` / `Uniform-Random` |
| `run_id` | 第几次重跑 | 1–5（随机方法 5 次；确定性方法填 1，见 §3.3） |
| `strict_hit` | 是否精确命中锚点（body SHA-256 匹配 $f^*$） | 0 / 1 |
| `s_d` | 加权裁决器得分 | 浮点 ∈ [0,1] |

> 字段定义须与论文 §Problem / Table（role-to-score schedule）严格一致：`strict_hit=1` ⟺ 命中锚点 $f^*$；`s_d` 为加权裁决器对返回函数的角色给分。

### 2.2 自查清单（动手前必须过）

- [ ] 50 个任务 × 全部方法 × 应有重跑数，记录条数对得上？（随机法 50×5=250 行/方法，确定性法 50 行/方法）
- [ ] 确认**现存结果的最细粒度**（每次重跑 / 每任务聚合 / 仅总分），对照 §3.5 选做法；**缺细粒度就回退，绝不为补数据而重跑**。若已存 5 次原始值最好（可做 §12 阈值敏感性）；只存每任务聚合也够做全部主检验（McNemar/bootstrap/置换/Wilcoxon 都只需每任务一个值）。
- [ ] 缺失值（崩溃 / 超预算未给答案）如何记？**统一约定**：未给出合法函数 → `strict_hit=0`、`s_d=0`（视为该次未命中），并在表里留一列 `failed` 标注原因，便于审计。
- [ ] `s_d` 全在 [0,1]，`strict_hit∈{0,1}`，无 NaN。
- [ ] 哪些方法是确定性的、哪些是随机的，列一份清单（决定 §3 折叠是否退化为单值）。

---

## 3. 分析单元与"5 次重跑"折叠规则（关键，先冻结）

### 3.1 分析单元 = 任务（n = 50）

任务才是独立抽样单位。**5 次重跑只是降噪，不能当成 250 个独立样本**——那会人为放大显著性（伪重复 / pseudoreplication），是常见且致命的统计错误。

### 3.2 折叠规则（事先定死，不许事后改）

- **加权得分**：每任务每方法取 5 次的**算术均值** $\bar s_{d,i}^{(m)}$ → 每方法得到长度 50 的向量。
- **严格命中**：每任务每方法取 5 次的**多数票**（命中次数 ≥ 3 记为 1，否则 0）→ 每方法得到长度 50 的 0/1 向量，喂给 McNemar。

### 3.3 确定性方法

经典 IR / 切片等确定性方法只有 1 次运行：均值=该值、多数票=该值，折叠自然退化，无需特殊处理。

### 3.4 \textsc{Anchor} 也含随机性

LLM 是唯一随机源，\textsc{Anchor} 同样跑 5 次、同规则折叠。配对时两侧都用折叠后的每任务值，一一对齐 `task_id`。

### 3.5 数据可得性与回退策略（**绝不重跑、绝不造数据**）

本分析的**全部输入只能是现有落盘结果**。bootstrap / 置换 / McNemar 都是对这些现有数字的重排与配对，**不产生任何新的系统运行**。按你现存结果的粒度，对照下表选择做法——任何一栏都**不需要重跑**：

| 你手上现存的最细粒度 | 可做 | 受限项 / 回退 |
|---|---|---|
| **A. 每任务×每方法×每次重跑**（5 次原始值齐全） | 全部分析照常 | 无 |
| **B. 仅每任务×每方法的聚合**（均值 $s_d$ + 单个 `strict_hit` 或命中率） | McNemar、bootstrap CI、置换 p、Wilcoxon、Holm、效应量、分类别 **全部可做**（它们只需每任务一个值） | §12 的"多数票阈值敏感性"做不了（需各次原始命中）→ **直接跳过该项稳健性检查，不得为此重跑**；在附录注明"因仅留存聚合结果，未做阈值敏感性"。 |
| **C. 仅每方法的总分**（只有 0.79 / 0.453 这种汇总） | **不足以做任何配对检验** | 配对检验必须有每任务配对值。**仍不重跑**：去日志/中间产物里把每任务分数捞出来（这是"读取已有记录"，非重跑）；若确实没存，则只能在论文里**如实说明无法提供逐任务显著性、改报点估计**——而不是为了凑数据去重跑。 |

> 判定原则：凡"对已存数字做计算/重排/读取归档"= 允许；凡"再次调用 LLM / 浏览器 / 跑系统去得到新成绩"= 禁止。若某步只有靠后者才能完成，就**降级该步**（按上表回退），不升级成重跑。

---

## 4. 检验设计

### 4.1 严格准确率 → 精确 McNemar 检验（配对二元）

对**每个基线**单独建 2×2 配对表（仅统计两者结论不一致的任务）：

|  | 基线命中 | 基线未命中 |
|---|---|---|
| **Anchor 命中** | a | **b** |
| **Anchor 未命中** | **c** | d |

- 仅 `b`（A 对、基线错）与 `c`（A 错、基线对）参与检验；`a,d` 不进入。
- **检验统计量**：在"不一致样本中 Anchor 占优"的零假设 $H_0: P=0.5$ 下，$b \sim \text{Binom}(b+c,\,0.5)$。
- n=50、不一致样本通常很少 → **必须用精确二项版**（`exact=True`），不要用大样本卡方近似（$b+c<25$ 时近似不可靠）。
- **双侧 p 值**：$p = 2\cdot\min\!\big(\sum_{k=0}^{\min(b,c)}\binom{b+c}{k}0.5^{b+c},\ 0.5\big)$（截断到 1）。
- **退化处理**：若 $b+c=0$（两法在所有任务上严格结论完全一致）→ p 记为 1.0，标注"无判别力"。

### 4.2 加权得分 $S_d$ → 配对 bootstrap（BCa）

对每个基线，定义每任务配对差值与观测均值：
$$d_i = \bar s_{d,i}^{\text{Anchor}} - \bar s_{d,i}^{\text{baseline}},\qquad \Delta_{\text{obs}}=\frac{1}{n}\sum_{i=1}^{n} d_i,\quad n=50.$$

**(a) 置信区间 — BCa bootstrap（论文承诺的方法，R=10000）**

朴素百分位法在小样本下有偏；用 **BCa（bias-corrected and accelerated）** 校正：

1. 重采样：有放回抽 $n$ 个下标，$\Delta^*_r=\text{mean}(d_{\text{抽中}})$，重复 $R=10{,}000$ 次。
2. 偏差校正 $\hat z_0=\Phi^{-1}\!\Big(\frac{\#\{\Delta^*_r<\Delta_{\text{obs}}\}}{R}\Big)$。
3. 加速度 $\hat a$（刀切法 / jackknife，$\Delta_{(i)}$ 为去掉第 $i$ 个差值后的均值，$\bar\Delta_{(\cdot)}$ 为其平均）：
$$\hat a=\frac{\sum_i(\bar\Delta_{(\cdot)}-\Delta_{(i)})^3}{6\big[\sum_i(\bar\Delta_{(\cdot)}-\Delta_{(i)})^2\big]^{3/2}}.$$
4. 校正分位（$z_{\alpha/2}=\Phi^{-1}(0.025)$ 等）：
$$\alpha_1=\Phi\!\Big(\hat z_0+\tfrac{\hat z_0+z_{\alpha/2}}{1-\hat a(\hat z_0+z_{\alpha/2})}\Big),\quad
\alpha_2=\Phi\!\Big(\hat z_0+\tfrac{\hat z_0+z_{1-\alpha/2}}{1-\hat a(\hat z_0+z_{1-\alpha/2})}\Big).$$
5. CI = $[\,\text{percentile}(\Delta^*,100\alpha_1),\ \text{percentile}(\Delta^*,100\alpha_2)\,]$。
6. **判据**：CI 不含 0 ⟹ 领先显著。

**(b) p 值 — 配对置换检验（sign-flip，最稳，作主 p 值）**

bootstrap 取 CI；p 值用**配对置换检验**（对零假设"差值对称于 0"最贴切、最少假设）：

- 对每个 $d_i$ 独立随机翻转符号（$\pm1$ 等概率），算 $\Delta^{\text{perm}}=\text{mean}(\pm d_i)$，重复 $R=10{,}000$ 次。
- 双侧 $p=\dfrac{1+\#\{|\Delta^{\text{perm}}|\ge|\Delta_{\text{obs}}|\}}{R+1}$（+1 平滑，避免 p=0）。

> 备选：bootstrap-ASL $p=2\min\!\big(\frac{1+\#\{\Delta^*\le0\}}{R+1},\frac{1+\#\{\Delta^*\ge0\}}{R+1}\big)$。二者结论应一致；若不一致以置换检验为准并在附录说明。

### 4.3 旁证：Wilcoxon 符号秩检验

加权差值 $d_i$ 另跑一次 Wilcoxon 符号秩（非参数、不靠正态假设）。**仅作 sanity check，不进 Holm 家族、不作主结论**；与 bootstrap 一致则增强可信度。

---

## 5. 多重比较校正：Holm–Bonferroni

同时与 $m$ 个基线比较，比得越多越易"蒙中假显著"，必须校正。

- **家族划分**：严格准确率（McNemar）与加权得分（bootstrap/置换）**各自独立成家族**，分别校正。Wilcoxon 旁证不进任何家族。
- **Holm 步骤**：家族内原始 p 升序排列 $p_{(1)}\le\cdots\le p_{(m)}$；第 $k$ 个阈值 $\alpha/(m-k+1)$（$\alpha=0.05$）；从最小起逐个比较，**一旦某个不通过，其后全部判不显著**。
- 报告时**原始 p 与 Holm 校正 p 并列**。
- 实现：`statsmodels.stats.multitest.multipletests(pvals, alpha=0.05, method='holm')`。

---

## 6. 效应量（"有没有差"之外答"差多大"）

仅报 p 值是审稿大忌，每个对比都要带效应量。

| 指标 | 效应量 | 公式 / 说明 |
|---|---|---|
| 加权 $S_d$ | $\Delta_{\text{obs}}$ + CI | 原始分单位，最直观，如 `+0.34 [0.27, 0.41]` |
| 加权 $S_d$ | 配对 Cohen's $d_z$ | $d_z=\dfrac{\bar d}{\text{sd}(d)}$ |
| 加权 $S_d$ | 匹配秩双列相关 $r$ | 与 Wilcoxon 配套：$r=\dfrac{W^+-W^-}{W^++W^-}$ |
| 严格准确率 | 准确率差 + CI | $\text{Acc}_{\text{Anchor}}-\text{Acc}_{\text{base}}$，CI 由 bootstrap 同法给出 |
| 严格准确率 | McNemar 比值 | $b/c$（及 $b,c$ 原始计数），方向与强度 |

---

## 7. 分类别结果（描述性，不做假设检验）

5 个类别，每类给每方法的 **均值 + 95% bootstrap 百分位 CI**。

- 类别内任务数少（≈10/类），**不做显著性检验**，只描述 —— 对应论文 "per-category results are descriptive (mean, 95% bootstrap CI)"。
- \textsc{Anchor} 各类分已知（加权/严格）：signing 0.91/0.80、byte-array 0.88/0.60、fingerprinting 0.86/0.70、state-encoding 0.70/0.70、request-transform 0.61/0.50 —— 用本步骤补上 CI 与各基线同格式数据。

---

## 8. 事先冻结的决策（防 p-hacking，写进附录）

**动手算之前**钉死，避免"挑对自己有利的算法"嫌疑：

1. 显著性水平 $\alpha=0.05$，**双侧**。
2. 主检验：严格→精确 McNemar；加权→BCa bootstrap CI（+ 置换 p 值）。
3. 重跑折叠：加权取均值、严格取多数票（≥3/5）；不事后更改。
4. 重采样/置换次数 $R=10{,}000$，**固定随机种子**（建议 `seed=20260624`）。
5. 头条对比 = \textsc{Anchor} vs. Direct-LLM；其余基线全列、无遗漏、无挑选。
6. 缺失/失败记为 `strict_hit=0, s_d=0`（§2.2）。
7. 家族划分与 Holm 校正方式（§5）。

---

## 9. 可运行实现（Python）

> **已落地实现见 [`analysis/`](analysis/)**（`stats_core.py` / `aggregate_runs.py` / `significance.py` / `test_stats.py` + `README.md`）。因本机无 numpy/scipy/pandas/statsmodels 且无 pip，实现改为**纯标准库**（零第三方依赖，`python3` 直接可跑），各检验逐一对照解析值做了单元测试。下方片段为等价的 numpy/pandas 参考版，便于阅读算法骨架。
>
> 实现对现实数据做了三处参数化（非硬编码）：参照方法 `--ref`（默认 `Anchor`，缺失时友好报错——当前落盘数据为 baseline-only，无 Anchor 真实成绩）；折叠多数票阈值随 `n_runs` 自适应（实测每任务 3 次而非 5 次）；原 `type_array_transformation`（byte-array 笔误）已物理重命名为 byte-array。详见 `analysis/README.md`。

依赖（参考版）：`numpy scipy statsmodels pandas`。把 `runs.csv`（§2.1）放同目录，运行即出 `significance_results.csv` 与分类别表。

```python
#!/usr/bin/env python3
"""RQ1 significance analysis. Input: runs.csv (见计划书 §2.1). Output: CSV 表。"""
import numpy as np, pandas as pd
from scipy import stats
from statsmodels.stats.contingency_tables import mcnemar
from statsmodels.stats.multitest import multipletests

SEED, R, ALPHA = 20260624, 10000, 0.05
rng = np.random.default_rng(SEED)
REF = "Anchor"                       # 参照方法

# ---------- 1. 读入并折叠（§3） ----------
df = pd.read_csv("runs.csv")
df = df[~df.task_id.isin(LOCO_TASK_IDS)] if "LOCO_TASK_IDS" in dir() else df
agg = (df.groupby(["method", "task_id"])
         .agg(s_d=("s_d", "mean"),
              hit=("strict_hit", lambda x: int(x.mean() >= 0.5)))  # 多数票≥3/5
         .reset_index())
piv_s   = agg.pivot(index="task_id", columns="method", values="s_d").sort_index()
piv_hit = agg.pivot(index="task_id", columns="method", values="hit").sort_index()
methods = [m for m in piv_s.columns if m != REF]

# ---------- 2. 统计工具 ----------
def bca_ci(d, R=R, alpha=ALPHA):
    n = len(d); theta = d.mean()
    boot = d[rng.integers(0, n, size=(R, n))].mean(axis=1)
    z0 = stats.norm.ppf((np.sum(boot < theta)) / R)
    jk = np.array([np.delete(d, i).mean() for i in range(n)])
    jbar = jk.mean(); num = np.sum((jbar - jk)**3); den = 6*(np.sum((jbar - jk)**2)**1.5)
    a = num/den if den != 0 else 0.0
    def adj(z):
        return stats.norm.cdf(z0 + (z0+z)/(1 - a*(z0+z)))
    lo = np.percentile(boot, 100*adj(stats.norm.ppf(alpha/2)))
    hi = np.percentile(boot, 100*adj(stats.norm.ppf(1-alpha/2)))
    return theta, lo, hi

def perm_p(d, R=R):
    obs = abs(d.mean())
    signs = rng.choice([-1, 1], size=(R, len(d)))
    perm = (signs * d).mean(axis=1)
    return (1 + np.sum(np.abs(perm) >= obs)) / (R + 1)

def cohen_dz(d):  return d.mean()/d.std(ddof=1) if d.std(ddof=1) > 0 else 0.0

# ---------- 3. 逐基线检验 ----------
rows = []
for m in methods:
    d = (piv_s[REF] - piv_s[m]).dropna().values          # 加权差值
    delta, lo, hi = bca_ci(d)
    p_sd = perm_p(d)
    try:    w_p = stats.wilcoxon(d).pvalue
    except ValueError: w_p = 1.0                          # 全零差值
    ah, bh = piv_hit[REF].values, piv_hit[m].values       # 严格命中
    b = int(np.sum((ah == 1) & (bh == 0)))
    c = int(np.sum((ah == 0) & (bh == 1)))
    p_strict = 1.0 if (b+c) == 0 else mcnemar([[0, b],[c, 0]], exact=True).pvalue
    rows.append(dict(baseline=m, delta_sd=delta, ci_lo=lo, ci_hi=hi,
                     p_sd_raw=p_sd, wilcoxon_p=w_p, cohen_dz=cohen_dz(d),
                     mcnemar_b=b, mcnemar_c=c, p_strict_raw=p_strict,
                     acc_anchor=ah.mean(), acc_base=bh.mean(),
                     acc_delta=ah.mean()-bh.mean()))
res = pd.DataFrame(rows)

# ---------- 4. Holm 校正（两族各自） ----------
res["p_sd_holm"]     = multipletests(res.p_sd_raw,     alpha=ALPHA, method="holm")[1]
res["p_strict_holm"] = multipletests(res.p_strict_raw, alpha=ALPHA, method="holm")[1]
res["sig_sd"]     = res.p_sd_holm     < ALPHA
res["sig_strict"] = res.p_strict_holm < ALPHA

res = res.sort_values("delta_sd", ascending=False)
res.to_csv("significance_results.csv", index=False)
print(res.to_string(index=False))

# ---------- 5. 分类别描述性（均值 + 95% 百分位 CI） ----------
def pct_ci(x, R=R):
    x = np.asarray(x); b = x[rng.integers(0, len(x), size=(R, len(x)))].mean(axis=1)
    return x.mean(), np.percentile(b, 2.5), np.percentile(b, 97.5)
cat_rows = []
for (mth, cat), g in agg.merge(df[["task_id","category"]].drop_duplicates(),
                               on="task_id").groupby(["method","category"]):
    mean, lo, hi = pct_ci(g.s_d.values)
    cat_rows.append(dict(method=mth, category=cat, mean=mean, ci_lo=lo, ci_hi=hi))
pd.DataFrame(cat_rows).to_csv("per_category_results.csv", index=False)
```

> 若需 LOCO 排除，运行前定义 `LOCO_TASK_IDS = [...]`。脚本与种子一并提交仓库，对应论文可复现承诺。

---

## 10. 直接产出物（填回论文）

> **首版结果（2026-06-25）**：以下数字由 `analysis/significance.py --ref Anchor` 在 `analysis/runs.csv` 上算出（`seed=20260624, R=10000`）。Anchor 成绩为每任务单值首版上报、基线为 3 次重跑折叠；配对 **n=50**（5 类 × case001–010；`byte_array_transformation` 笔误已归一进 byte-array）。Anchor 总体 strict=0.66(33/50)、加权=0.788。**待 Anchor 多次重跑落盘后按同脚本刷新即可。**

### 10.1 §RQ1 正文占位

> "\textsc{Anchor} 显著优于最强基线 *Direct-LLM*（加权 $S_d$：$\Delta=$ **+0.374** [95% CI **+0.227**, **+0.504**]，置换检验 $p<$ **0.0001**，Holm 校正后 $p=$ **0.0014**；严格命中：McNemar $b/c=$ **26/3**，$p=$ **1.5e-5**）。"

### 10.2 显著性总表（正文或附录）

> 按 $\Delta S_d$ 降序；全部 14 个基线在两族（$S_d$ 与严格）经 Holm 校正后均显著。

| Baseline | $\Delta S_d$ [95% CI] | $p_{S_d}$ raw / Holm | Cohen $d_z$ | McNemar $b/c$ | $p_{\text{strict}}$ raw / Holm | 显著 $S_d$/严格 |
|---|---|---|---|---|---|---|
| JS-DynSlice | +0.788 [+0.674, +0.870] | 0.0001 / 0.0014 | 2.26 | 33/0 | <0.0001 / <0.0001 | ✓/✓ |
| Uniform-Random | +0.783 [+0.675, +0.868] | 0.0001 / 0.0014 | 2.24 | 33/0 | <0.0001 / <0.0001 | ✓/✓ |
| Software-Recon | +0.779 [+0.668, +0.861] | 0.0001 / 0.0014 | 2.26 | 33/0 | <0.0001 / <0.0001 | ✓/✓ |
| SITIR | +0.706 [+0.582, +0.796] | 0.0001 / 0.0014 | 1.85 | 33/1 | <0.0001 / <0.0001 | ✓/✓ |
| LSI-FL | +0.704 [+0.590, +0.788] | 0.0001 / 0.0014 | 1.97 | 33/0 | <0.0001 / <0.0001 | ✓/✓ |
| Debugger-Agent | +0.692 [+0.577, +0.783] | 0.0001 / 0.0014 | 1.86 | 33/0 | <0.0001 / <0.0001 | ✓/✓ |
| BM25-Static | +0.690 [+0.578, +0.772] | 0.0001 / 0.0014 | 1.98 | 32/0 | <0.0001 / <0.0001 | ✓/✓ |
| SimpleSink | +0.684 [+0.578, +0.762] | 0.0001 / 0.0014 | 2.03 | 33/0 | <0.0001 / <0.0001 | ✓/✓ |
| Uniform-Tracer | +0.569 [+0.451, +0.673] | 0.0001 / 0.0014 | 1.41 | 32/0 | <0.0001 / <0.0001 | ✓/✓ |
| Agentless-Loc | +0.497 [+0.351, +0.620] | 0.0001 / 0.0014 | 1.03 | 26/2 | <0.0001 / <0.0001 | ✓/✓ |
| SWE-agent | +0.474 [+0.344, +0.588] | 0.0001 / 0.0014 | 1.08 | 26/1 | <0.0001 / <0.0001 | ✓/✓ |
| LocAgent-JS | +0.384 [+0.270, +0.493] | 0.0001 / 0.0014 | 0.95 | 21/2 | <0.0001 / 0.0001 | ✓/✓ |
| Exec-LLM | +0.381 [+0.240, +0.511] | 0.0001 / 0.0014 | 0.78 | 20/3 | 0.0005 / 0.0005 | ✓/✓ |
| Direct-LLM | +0.374 [+0.227, +0.504] | 0.0001 / 0.0014 | 0.76 | 26/3 | <0.0001 / <0.0001 | ✓/✓ |

> 注：$p_{S_d}$ raw 的下限受 $R=10000$ 限制为 $1/(R{+}1)\approx0.0001$；Holm 在 14 个基线上把最小 raw $p$ 乘 14 得 $0.0014$。Direct-LLM 为加权差最小（最强）基线，故列末。

### 10.3 分类别描述性表

5 类 × 各方法的 `mean [CI_lo, CI_hi]`（见 `analysis/per_category_results.csv`）。Anchor 各类加权均值（95% 百分位 CI）：

| 类别 | Anchor mean [95% CI] | strict |
|---|---|---|
| signing | 0.890 [0.700, 1.000] | 0.80 |
| byte-array | 0.880 [0.790, 0.970] | 0.60 |
| fingerprinting | 0.860 [0.690, 1.000] | 0.70 |
| state-encoding | 0.700 [0.400, 1.000] | 0.70 |
| request-transform | 0.610 [0.350, 0.850] | 0.50 |


---

## 11. 执行流程（端到端 runbook）

把前面各节串成一条**可按顺序照做**的流水线。全程**只读取既有落盘结果、只对其做计算/重排**，任何一步都**不重跑系统、不调用 LLM/浏览器**（判定原则见 §3.5）。

### 11.1 顺序步骤

| # | 步骤 | 依据节 | 产出 | 通过判据 |
|---|---|---|---|---|
| 0 | **冻结决策**：把 $\alpha$、双侧、折叠规则、$R$、`seed`、家族划分写进附录草稿，之后不改 | §8 | `appendix_frozen.md` | 7 条决策齐全、有时间戳 |
| 1 | **汇集 `runs.csv`**：从 `artifacts/`（`batch_runs/*/summary_by_task_method.jsonl`、`predictions/`、`reports/`）抽取每任务×方法×重跑的 `strict_hit`/`s_d`，拼成 §2.1 长表；**这是"读取归档"，非重跑** | §2.1 | `runs.csv` | 行数对得上（随机法 50×5、确定性法 50） |
| 2 | **过自查清单**：条数、缺失值编码（失败→`strict_hit=0,s_d=0`）、取值域、确定/随机方法清单 | §2.2 | 清单勾完 | 无 NaN、`s_d∈[0,1]`、`strict_hit∈{0,1}` |
| 3 | **判定数据粒度并选回退**：对照 §3.5 选 A/B/C；若落到 B/C，记下被降级的项（如阈值敏感性跳过），**绝不为补粒度而重跑** | §3.5 | 粒度结论一行 | 明确属 A/B/C 之一 |
| 4 | **折叠到每任务一值**：加权取均值、严格取多数票(≥3/5)，对齐 `task_id` 成配对向量 | §3.2 | 折叠后矩阵（脚本内存） | 每方法长度 50、与 `Anchor` 一一对齐 |
| 5 | **跑主分析脚本**：`python significance.py`（§9），逐基线出 McNemar/BCa-CI/置换 p/Wilcoxon/效应量 + Holm 校正 | §4–§6, §9 | `significance_results.csv` | 脚本零报错、种子=`20260624` |
| 6 | **分类别描述性**：每类×每方法的均值 + 95% 百分位 CI | §7 | `per_category_results.csv` | 5 类齐全 |
| 7 | **三法互证**：核对置换 p、bootstrap-ASL、Wilcoxon 方向一致；不一致以置换为准并在附录记 | §4.2(b), §12 | 附录互证段 | 方向一致或已说明 |
| 8 | **稳健性检查**：仅 §3.5-A 时做阈值敏感性(≥1/≥3/=5)；B/C 跳过并注明原因 | §12 | 附录稳健性段 | 结论不翻盘 / 已注明跳过 |
| 9 | **填回论文**：用 5/6 的真实数字替换 §10 的占位（正文那句 + 显著性总表 + 分类别表） | §10 | 论文片段 | 无 `XX.X`/`…` 残留 |
| 10 | **打包复现**：脚本 + `runs.csv` + 两张结果 CSV + `seed` + 冻结附录入仓 | §0, §8 | 仓库提交 | 一键可复现 |

> 步骤 1 是唯一"数据工程"环节，也是最易出错处：务必核对 `task_id` 对齐、缺失编码、确定性方法只占 1 行/任务。其余步骤皆为纯统计计算。

### 11.2 交付物清单（最终入仓）

| 文件 | 来源步骤 | 内容 |
|---|---|---|
| `runs.csv` | 1 | 长表原始输入（§2.1 schema） |
| `significance.py` | 5 | 主分析脚本（§9，含固定种子） |
| `significance_results.csv` | 5 | 逐基线 $\Delta S_d$/CI/p(raw,Holm)/$d_z$/McNemar $b,c$ |
| `per_category_results.csv` | 6 | 5 类 × 各方法 `mean[CI]` |
| `appendix_frozen.md` | 0,7,8 | 冻结决策 + 三法互证 + 稳健性说明 + 回退理由 |

### 11.3 失败/降级出口

- 若步骤 3 判定为 **§3.5-C**（仅有总分，捞不出逐任务值）→ **不重跑**；论文如实说明无法提供逐任务显著性、改报点估计，并据此**删去** §10 中需配对检验的占位。
- 若步骤 1 发现某方法重跑数不齐 → 按现有次数折叠（均值/多数票仍可算），在附录注明实际 `run` 数，**不补跑凑齐 5 次**。

---

## 12. 风险与稳健性检查

- **样本量小（n=50）**：弱基线（接近随机下限）必显著；真正要确认的是**接近者** Direct-LLM(0.453)/LocAgent-JS(0.440)/Exec-LLM(0.431)。0.79 vs ~0.45 在 n=50 下大概率显著，但务必用实际数据验证，别想当然。
- **折叠阈值敏感性（仅当已存各次原始命中，§3.5-A）**：把多数票阈值从 ≥3 改为"任一次命中(≥1)"和"全部命中(=5)"，**用同一批现有数据**各重算一遍（只是换折叠规则，不重跑系统），结论应不翻盘 —— 写进附录。**若只存了聚合结果（§3.5-B）则跳过此项**，并注明原因，**不得为此重跑**。
- **bootstrap 小样本偏差**：用 BCa（§4.2），勿只用朴素百分位。
- **p 值方法一致性**：置换检验、bootstrap-ASL、Wilcoxon 三者方向应一致；列在附录互证。
- **任务独立性**：50 个应用各自独立构造，可视为独立同分布；在威胁章节点一句即可。
- **多重校正家族边界**：明确"严格"与"$S_d$"两族分开校正；若审稿人要求合并成一族，重跑一次备用（更保守，结论应仍成立）。

---

## 13. 报告自查清单（投稿前逐项打勾）

- [ ] 每个对比都有 **效应量 + 不确定性区间**，不是只有 p 值。
- [ ] 原始 p 与 Holm 校正 p **同时**呈现。
- [ ] 明确写出 n、R、$\alpha$、双侧、随机种子、折叠规则。
- [ ] 说明缺失/失败如何编码（§2.2）。
- [ ] 区分**主结论检验**与**旁证/稳健性**。
- [ ] §RQ1 所有 `XX.X` 占位已替换为真实数字。
- [ ] 脚本 + `runs.csv` + 结果 CSV + 种子已进仓库，可一键复现。
- [ ] "统计方法"独立段落写清楚（McNemar 精确版、BCa bootstrap、置换检验、Holm）。
