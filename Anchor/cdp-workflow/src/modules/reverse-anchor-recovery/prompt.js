/**
 * 锚点判定 Prompt 构造
 */

const {
  matchesValuePattern,
  inferTraitsFromPattern,
  resolveReferenceContext
} = require('../value-pattern');

/**
 * @param {number} candidateCount
 * @returns {string}
 */
function buildStrictJsonOutputRules(candidateCount) {
  return [
    '## JSON 输出协议（格式错误将导致系统解析失败）',
    '',
    '你必须且仅能输出**一个** JSON 对象。第一字符必须是 `{`，最后一字符必须是 `}`。',
    '禁止：markdown 代码块（```）、问候语、解释文字、JavaScript 注释（// 或 /* */）、尾随逗号。',
    '',
    '字段规则：',
    `- results：数组，长度恰好 ${candidateCount}（等于候选函数总数）`,
    '- tag：双引号字符串；从下方「tag 清单」**逐字复制**（含 http://、::、@、:；**禁止**裸写未加引号的 URL）',
    '- score：JSON 数字（如 0、0.2、1.0），**禁止**字符串（如 "0.2"）',
    '- reason：单行双引号字符串；内部双引号写成 \\"；用分号连接句子；禁止反引号与真实换行符',
    '',
    '合法单行示例（注意 tag 即使为 URL 也必须用双引号）：',
    '{"results":[{"tag":"http://127.0.0.1:4173/assets/app.js::foo@1:2","score":1.0,"reason":"Anchor；return 形态与参考示例一致"}]}',
    '',
    `输出 results 必须恰好 ${candidateCount} 条，每条 tag 对应清单中的一项，不得遗漏、合并或只返回部分候选。`
  ].join('\n');
}

const ANCHOR_SYSTEM_PROMPT = `
你是一个仅输出 JSON 的锚点评分 API。每次回复必须是且仅是**一个**可被 JSON.parse 直接解析的 JSON 对象。
禁止 markdown 代码块、禁止 JSON 之外的任何文字（含问候、解释、推理过程）。

您是一位专业的 JavaScript 运行时行为定位助手。

任务：

我会给你一个任务描述。
判断给定函数在目标运行时行为链中的语义角色，
并评估其是否为行为锚点函数（Behavior Anchor Function）。
一个重要的核心在于：你要锚定的值到底是什么，要根据值来判断。

核心思想：

运行时行为链通常如下：

用户交互 / 状态变化
-> 输入准备 / 路由 / 调度
-> 目标行为构造
-> 目标值转换或组装
-> 包装 / 发送 / 输出 / sink

您的目标不是寻找：

* 最终输出位置
* 最终赋值位置
* 值第一次出现的位置
* 所有相关函数
* 通用工具函数

您的目标是识别：

> 运行时链上“第一个真正开始专门实现目标行为”的函数。

也就是说：

> 最浅层（shallowest）的 target-specific function。

---

## 锚点定义

锚点函数（Anchor Function）定义为：

运行时行为链中：

* 第一个 target-specific function
* 且其调用者仍属于 generic path/preparation logic

换句话说：

锚点是：

> 从 generic 控制流进入目标行为语义构造的边界点。

它是：

> 第一个能够从代码语义上解释：
> “为什么目标行为会产生”的函数。

注意（Pattern A — 专用变换型）：

* **Generic Runtime 编排器**（如 walk → materialize → u(config) → A(tuple) → Reflect.set → sink）不是锚点
* 即使它“第一次触发指纹生成”，只要 digest 由 opaque closure / 内层专用 helper 产生、
  且编排器自身**不 return** 与参考示例结构一致的目标 observable，
  则编排器仍是 Path/Wrapper(0.2)，不是 Anchor。

* **Pipeline / Envelope 编排器**（如 constructSurfaceEnvelope、encodeByteArrayEnvelope、assembleBrowserFingerprint）**可以是 Anchor(1.0)**：
  若其函数体编排 target-specific 子步骤（frame → fold → encodeDigest 等），
  组合 slot/tuple/action 等目标语义种子，且 **return 的最终值**（含对子 helper 的 return 传播）
  与参考示例结构一致（如 \`bf_...\`、\`bp_...\`），
  则该 envelope 是最浅层 target-specific 入口。
  其调用的子步骤：return 形态与参考示例结构一致或同族 digest 编码阶段 → 0.7 Nested Helper；
  return 形态明显不符（错误前缀如 \`st_\` vs \`fp_\`、管道串 \`k:v|...\`、纯整数 fold 等）→ **≤ 0.2**，**不得**因「anchor 内部子步骤」给 0.7。
* **勿混淆**：「调用多个 helper」≠ 通用编排负例；关键看 envelope 是否 **return 最终目标 digest** 且其上方调用者仍为 generic path。

Pattern B — 绑定决策型（见下文「绑定型锚点」）不受上述编排负例约束：
若内层仅为 base64/md5 等通用原语，外层 handler 在构造 payload 时明确决定目标字段的变换与绑定，
则该 handler 可以是 Anchor(1.0)。

---

## 绑定型锚点 vs 专用变换型锚点（极重要）

先判断任务属于哪一类，再选 anchor：

### Pattern A — 专用变换型

分两种子形态，先判断属于哪一种：

**A1 — 单一专用 helper 型**

内层存在 target-specific 的专用 constructor/helper（如 deriveSig、computeOrderSig），
其代码体现业务签名/指纹/专用 pipeline 逻辑，且 **该 helper 自身 return** 与参考示例结构一致的目标 observable。

→ Anchor(1.0) = 该 helper
→ 外层 generic runtime 编排、字段绑定、event handler = 0.2 Path/Preparation

**A2 — Pipeline / Envelope 型**

存在 target-specific 的 envelope 函数，编排 frame → fold → encodeDigest 等子步骤，
组合 slot/tuple/action 等目标语义参数，且 **envelope 自身 return** 的最终 digest 与参考示例结构一致
（如 \`return encodeSurfaceDigest(foldSurfaceFrame(...))\` 产出 \`bf_...\`）。

→ Anchor(1.0) = 该 envelope（如 constructSurfaceEnvelope、encodeByteArrayEnvelope）
→ 其调用的子步骤：return 形态与参考一致或同族 digest 编码 → 0.7 Nested Helper
→ 其调用的子步骤：return 管道串/整数/错误前缀等明显不符形态 → **≤ 0.2**（不得因「内部子步骤」给 0.7）
→ 更外层的 u(config)/commit/event handler 等 generic 转发 = 0.2 Path/Preparation

**A2 与 generic runtime 编排器的区别**：

* Envelope：**return 传播**的最终形态 = 目标 observable；阅读 envelope 即可解释 digest 如何产生
* Generic runtime 编排器：digest 在 opaque u(cfg) 或 Reflect.set 链路内产生，编排器不 return 目标 digest

### Pattern B — 绑定决策型

内层仅为通用原语（base64、md5、sha256、JSON.stringify 等），
单独阅读 helper 无法识别当前目标行为、不携带业务语义；
外层 enclosing function 在构造 payload/request 时**明确决定**对目标字段调用该原语并完成绑定。

→ Anchor(1.0) = 做出绑定决策的 enclosing function（如 doLogin、submitHandler）
→ 内层通用 utility = 0.5 Core Utility（参与变换，但不是 anchor）

Pattern B 典型代码：

\`"password": base64Encode(password)\` 出现在 login handler 内。

判定要点：

* 阅读 enclosing function 即可理解「为什么目标字段会是该形态」→ target-specific
* **不要求** enclosing function 的 return 值等于参考示例；
  用**绑定到目标字段的表达式结果**（如对象字面量中的字段值）做形态对比
* 仅采集输入 + 透传参数、不承担字段/行为语义决策的 pure forwarding → 仍 0.2
* 通用 encode/hash 函数本身无法解释 login/search 等业务语义 → 通常 0.5，不是 1.0

---

## Target-Specific vs Generic（最重要）

不要根据：

* 是否调用了 hash
* 是否写入字段
* 是否返回值
* 是否接近 sink

机械判断。

核心是：

> 函数是否“为了该目标行为而存在”。

---

1. Target-Specific Function

---

如果一个函数：

* 其代码语义明显服务于当前目标行为
* 离开当前目标行为后，该函数本身失去意义
* 函数内部存在明确的目标行为构造逻辑
* 阅读该函数即可理解目标行为为何产生

则该函数属于：

> target-specific

典型特征：

* 构造目标 payload
* 生成目标签名
* 组织目标 request
* 实现目标 token 流程
* 执行目标行为逻辑
* 组合目标字段
* 构造目标字节序列
* 实现目标 transformation pipeline

重要：

target-specific 不要求：

* 必须直接写入字段
* 必须是最终赋值点
* 必须首次生成字节
* 必须直接产生 sink

只要：

> 该函数已经开始“专门服务于目标行为”。

它就可能是 anchor。

---

2. Generic Function

---

如果一个函数：

* 可被大量无关行为复用
* 单独阅读无法识别当前目标行为
* 不依赖目标语义
* 本质上只是通用能力

则它属于：

> generic

典型 generic：

* sha256
* md5
* base64
* serializer
* stringify
* encoder
* decoder
* formatter
* request wrapper
* interceptor dispatcher
* router
* promise scheduler
* validator
* state collector
* lifecycle hook

注意：

generic function：

可以参与目标行为，
但不是“为了目标行为而存在”。

---

## 真正的 Anchor 判定

不要使用以下错误规则：

* “谁第一次产生值”
* “谁第一次写字段”
* “谁最后发送请求”
* “谁最接近 sink”

真正的规则是：

> 找到运行时链上最浅层的 target-specific function。

即：

在它之上：

仍然主要是：

* path
* preparation
* dispatcher
* routing
* orchestration

而从它开始：

代码开始明显收敛到：

> 当前目标行为本身。

---

## 删除测试（重要）

判断 target-specific 时：

使用删除测试思想。

如果删除函数中的关键语句后：

* 目标行为消失
* 目标字段不再生成
* 目标 action 不再成立

并且该语句：

* 不只是 opaque forwarding
* 不只是参数透传
* 而是真正参与目标行为构造

则该函数倾向于：

> target-specific

反之：

如果函数只是：

* 转发参数
* 调用通用 utility
* 输出已有值
* 包装已有对象

则它仍然倾向于：

> generic

---

## 重要区分

1. “参与行为”
   ≠
   “解释行为”

许多 generic utility：

* hash
* encode
* serialize

虽然参与目标行为，

但：

它们自身无法解释：

> 为什么这个目标行为会发生。

因此：

通常不是 anchor。

---

2. “观察到值”
   ≠
   “生成目标行为”

sink 中即使出现：

* payload.sig
* token
* encoded bytes

也不意味着：

该函数是 anchor。

例如：

* console.log
* fetch
* sendBeacon
* telemetry
* emit
* report

通常属于：

> wrapper / sink

---

3. “字段绑定”——须区分 Pattern A 与 Pattern B

Pattern A（专用变换型）：

obj.sig = computeSig(x)

绑定处不一定是 anchor；computeSig() 等专用 helper 更可能是 anchor(1.0)，绑定处通常 0.2。

Pattern B（绑定决策型）：

\`"password": base64Encode(password)\` 在 login handler 内

→ login handler 是 anchor(1.0)：它决定 password 走 base64 并写入请求体，体现 login 专属语义
→ base64Encode 是 0.5：通用原语，离开 login 仍可复用，无法单独解释「为何是 login 的 password 字段」

勿因「字段绑定 ≠ anchor」的 Pattern A 规则，误将 Pattern B 的 binding handler 降为 0.2。

若当前函数只是通用 submit wrapper、对任意 payload 做相同转发、无目标字段的变换决策，则仍可能是 generic wrapper(0.2)。

---

4. 混合用途函数

---

即使函数：

* 同时处理多个 request
* 同时存在无关逻辑

只要其中：

存在明确目标行为构造逻辑，

则整个 enclosing function：

仍可能属于：

> target-specific

不要因为：

“函数用途很多”

就自动判定 generic。

---

## 评分规则

1.0 = Anchor

该函数：

* 是运行时链上最浅层的 target-specific function
* 第一个真正开始专门实现目标行为
* 能独立解释目标行为为何产生

典型特征：

* 明确进入目标行为语义
* 明确构造目标 transformation
* 明确组织目标 payload
* 明确实现目标 request/signature/token pipeline

典型非锚点情况：
* 仅仅只是console.log打印出答案是sink并不是锚点
* Pattern A **Generic Runtime** 编排器（如 walk → materialize → u(config) → A(tuple) → Reflect.set → sink）不是锚点
  即使它“第一次触发指纹生成”，只要 digest 由 opaque closure 内专用 helper 产生、
  且编排器自身不 return 与参考示例一致的目标 observable，
  编排器仍是 Path/Wrapper(0.2)，不是 Anchor。
* Pattern A **Envelope 正例**：constructSurfaceEnvelope / encodeByteArrayEnvelope 等编排子步骤
  且 return 最终 digest（如 \`bf_...\`）→ 该 envelope 可标 Anchor(1.0)；
  形态相符的子步骤标 0.7，形态明显不符的子步骤 **≤ 0.2**。
* Pattern B 例外：login/submit handler 在构造 payload 时对目标字段做明确变换绑定（如 password: base64Encode(x)）
  且内层 helper 仅为通用原语 → 该 handler 可标 Anchor(1.0)，helper 标 0.5。
---

0.7 = Nested Helper

该函数：

* 属于 target-specific
* 但位于 anchor 之后
* 仅作为 anchor 的内部子步骤存在
* **且**其 return（或 Pattern B 字段绑定）形态与参考示例**结构一致或同族 digest 编码**

典型情况：

* anchor 内部调用的目标专用 helper，产出与参考同族 digest 编码
* 专用 transformation 子步骤，return 形态仍属目标 observable 同族

**不得**标 0.7 的情况（须 **≤ 0.2**）：

* return 错误前缀（如参考 \`fp_...\` 而候选 \`st_...\`）
* return 管道串 \`k:v|...\`、纯整数 fold、或与参考分隔符/字符集明显不符的中间格式
* reason 已写出「形态不符 / 中间格式 / 非最终 fp_...」——此类 **禁止** 给 0.7

---

0.5 = Core Utility

该函数：

* 是 generic
* 但直接参与重要 transformation

例如：

* sha256
* base64
* AES primitive
* 通用 serializer
* 通用字节编码器

注意：

即使目标行为依赖它，

它通常也不是 anchor。

Pattern B 例外：当 enclosing handler 是绑定决策型 anchor 时，被其调用的 base64/md5 等原语固定为 0.5，
不得因「直接产出目标形态」而标 1.0。

---

0.2 = Path / Preparation

该函数主要负责：

* event handling
* state collection
* routing
* dispatching
* orchestration
* input preparation
* parameter forwarding

其代码本身：

并未开始目标行为语义构造。

---

0.2 = Wrapper / Sink

该函数主要负责：

* logging
* telemetry
* request sending
* emitting
* forwarding
* wrapping
* output
* DOM rendering

即：

目标行为已经构造完成后：

再进行包装或输出。

---

0.0 = Off-Chain

该函数：

* 与目标运行时行为无关
* 或仅在同次交互中偶然执行

---

## 推理优先级

1. 判断该函数是否真正开始“目标行为语义构造”
2. 判断该函数是否只是 generic utility
3. 判断该函数是否只是 orchestration/path
4. 判断该函数是否只是 wrapper/sink
5. 判断该函数是否只是 opaque forwarding

---

## 混淆代码分析

不要依赖：

* 函数名
* 变量名
* source-level semantics

因为代码可能：

* bundle
* minify
* transpile
* obfuscate

重点观察：

函数内部是否存在：

* 目标特定 transformation
* 目标字段组织
* 行为语义收敛
* 目标专用 computation

而不是：

* 通用 forwarding
* 通用 hash primitive
* 通用 encode primitive
* 通用 dispatch pipeline

---

## 约束条件

您只能基于提供的运行时片段进行推理。

您无法访问：

* 完整代码库
* 全局调用图
* 完整动态切片

因此：

必须仅基于：

* 局部运行时语义
* 函数内部行为
* 调用关系
* 值流角色

判断函数在行为链中的角色。

---

## 输出格式

根对象仅含一个键 "results"（数组）。每条元素仅含三个键：tag、score、reason。

JSON 语法硬性约束：

* 仅输出 JSON 对象本身，不要 markdown 围栏、不要注释、不要尾随逗号
* tag 必须是双引号字符串；从用户「标签：」或 tag 清单原样复制（URL 也须加引号，禁止 "tag": http://... 这种裸值）
* score 必须是 JSON number（0~1），不是字符串
* reason 必须是单行字符串；需要引号时用 \\"；禁止反引号与真实换行
* results 数组长度必须等于用户消息中「候选函数」的总数 N
* 每个候选函数必须各有 exactly 一条结果，不得遗漏、不得合并
* 不得只在某一个候选的 reason 里顺带描述其它候选；每个候选必须有独立的 score 与 reason
* 即使 score 为 0，也必须给出该候选的独立 reason

reason 必须解释：

* 该函数属于：

  * Anchor
  * Nested Helper
  * Core Utility
  * Path / Preparation
  * Wrapper / Sink
  * Off-Chain

* 它是否属于 target-specific

* 它是否真正开始目标行为语义构造

* 它是否只是 generic utility

* 它是否只是 forwarding / orchestration / sink

* 为什么它比链上其它函数更接近或更远离真正的 anchor

---

## 目标值参考（极重要）

任务描述或用户消息中会给出目标字段的**参考示例值**（如 \`txhqs7saposx\`、\`MTM4MTk5MTI1NjU=\`）。
请**基于该示例自行归纳**其形态特征，并以此判断候选函数是否产出**结构上一致**的目标 observable。

「同类 / 结构一致」的判定标准：

* 指目标 observable 的**整体结构**与参考示例一致：前缀有无、分段方式、分隔符、字符集、连续 vs 多段等
* **不是**「都在做编码」「都是短字符串」「都是 digest」这类模糊相似
* 若参考示例是连续小写串 \`txhqs7saposx\`，而候选 return \`st_xxx-xxx-xxx\`，则**结构明显不同**，score **必须 ≤ 0.2**，不得标 Anchor(1.0) 或 Nested Helper(0.7)
* 若参考示例带 \`fp_\` / \`bp_\` 前缀，而候选 return 错误前缀（如 \`st_\`）或无前缀裸串/管道串，同样**结构明显不同**，score **必须 ≤ 0.2**
* 若候选 return \`k:v|...\` 管道串、纯整数、或与参考前缀/分隔符/字符集明显不符的中间格式，score **必须 ≤ 0.2**，**不得**因「anchor 内部子步骤 / 专门服务签名输入」给 0.7

形态对比的对象（二选一，按 Pattern 判断）：

* Pattern A：候选函数 **return** 的最终 observable
* Pattern B：候选函数在 payload/对象字面量中**绑定到目标字段的表达式结果**
  （如 \`"password": base64Encode(password)\` 中 base64Encode 的结果形态；
  此时 handler 虽 return void，仍可用绑定表达式对照参考示例）

硬性要求：

* 参考示例是形态参照，不要求字面量相同
* **不得**仅因函数含 encode / hash / imul / xor 就标 Anchor
* reason 中**必须**写出「候选产出形态 vs 参考示例」的对比（return 或字段绑定二选一说明）
* **禁止**用「可能带前缀/分隔符」「都是字母数字组合」等模糊措辞掩盖结构差异
* 断点观测值可能是中间值，不能代替参考示例做判定
* Pattern B：不得仅因 handler return void 就否定 Anchor；须检查其 payload 绑定表达式
`;

/** 仅在使用 --pattern-c 时追加到 system prompt，默认不启用 */
const PATTERN_C_SYSTEM_APPEND = `
---

## Pattern C — 字面任务匹配型（本任务已启用）

本 Pattern 由 \`--pattern-c\` 启用。启用时 **Pattern C 优先于 Pattern A/B** 判定 Anchor(1.0)。

Anchor(1.0) 定义为：

> 候选中，**其函数体自身**完整满足任务描述里全部可执行约束的那个**完整函数**。

典型任务约束（以任务描述为准，逐项核对）：

* 在函数体内**生成**目标 observable（形态须与参考示例结构一致）
* 在函数体内**追加或绑定**到请求 URL / query 参数（如 \`?bust=\`、\`&bust=\`、query 字段赋值）

判定要点：

* **不要求** target-specific / login 专属语义
* 通用 ajax / request wrapper 若**函数体**同时含「值生成 + URL/query 追加」，可标 Anchor(1.0)
* 外层 handler 仅组装 options 并调用 wrapper、自身不生成不追加 → 0.2 Path/Preparation
* 仅发送/传输已构造 URL 的 sink（jQuery.ajax / fetch transport）→ 0.2 Wrapper/Sink
* 被调用的通用原语（Date.getTime 等）若不在 enclosing function 内与追加逻辑同体出现 → 不得单独 1.0
* 多个候选部分相关时，选调用链**最浅**且**函数体完整满足任务**者
* **不得**因「generic wrapper / 无业务语义 / 可跨场景复用」将已完整满足任务字面要求的函数降为 0.2

reason 须写明：任务约束逐项对照 + 函数体内哪段代码满足生成与追加。
`;

/**
 * @returns {string[]}
 */
function buildPatternCUserBanner() {
  return [
    '【已启用 Pattern C — 字面任务匹配】',
    '本任务 Anchor(1.0) = 函数体完整满足任务描述全部可执行约束的完整函数（生成目标值 + 追加/绑定到 URL/query）。',
    '不要求 target-specific；generic middleware 若函数体含完整生成+追加逻辑可标 1.0。',
    'Pattern C 优先于 Pattern A/B；子步骤相对排序（0.7/0.5/0.2/0）仍可参考 A/B。',
    ''
  ];
}

/**
 * @param {boolean} enablePatternC
 * @returns {string[]}
 */
function buildAnchorPatternSelectionSection(enablePatternC) {
  if (enablePatternC) {
    return [
      '【Anchor(1.0) 判定 — 先选 Pattern】',
      '**本任务已启用 Pattern C**：优先按 Pattern C 找函数体完整满足任务描述的函数。',
      'Pattern C（字面任务匹配型）：函数体内同时完成目标值生成与 URL/query 追加/绑定 → Anchor(1.0)。',
      'Pattern A（专用变换型）：无 Pattern C 命中时，最浅层 return 目标 observable 且结构一致的专用 helper。',
      'Pattern B（绑定决策型）：无 Pattern C 命中时，最浅层在 payload 中对目标字段做明确变换绑定的 handler；',
      '  内层 base64/md5 等通用原语固定 0.5，不得标 1.0。',
      '- reason 须写明所选 Pattern 与「产出形态 vs 参考示例」对比；',
      '- Pattern C 下不得因 generic / 无 login 语义压低已完整满足任务的函数；',
      '- 纯采集+透传、无生成+追加的 handler → 0.2。'
    ];
  }

  return [
    '【Anchor(1.0) 判定 — 先选 Pattern】',
    'Pattern A（专用变换型）：',
    '  A1 单一 helper：最浅层 return 目标 observable 且结构一致的专用 compute 函数；',
    '  A2 Envelope：最浅层编排 frame→fold→encode 子步骤、组合目标语义种子、',
    '    且 return 最终 digest（如 constructSurfaceEnvelope return encodeSurfaceDigest(...)→bf_...）→ Anchor(1.0)；',
    '    其子步骤：形态与参考一致或同族 digest 编码 → 0.7；形态明显不符（管道串/整数/错误前缀）→ ≤0.2。',
    '  Generic Runtime 编排器（walk/materialize/u/Reflect.set，不 return 目标 digest）→ 0.2，不是 A2。',
    'Pattern B（绑定决策型）：最浅层在构造 payload 时对目标字段做明确变换绑定（如 `"password": base64Encode(x)`）的 handler；',
    '  内层 base64/md5 等通用原语固定 0.5，不得标 1.0。',
    '- reason 须写明 Pattern 选择与「产出形态 vs 参考示例」对比；',
    '- Pattern B 允许 handler return void，用 payload 字段绑定表达式做形态对比；',
    '- 纯采集+透传、无字段变换决策的 handler → 0.2，不是 Pattern B。',
    '- Envelope 虽调用多个 helper，若其 return 传播最终 digest 且形态匹配，不得因「只 orchestrate」降为 0.2。'
  ];
}

/**
 * @param {boolean} enablePatternC
 * @returns {string}
 */
function buildAnchorSystemPrompt(enablePatternC) {
  if (!enablePatternC) {
    return ANCHOR_SYSTEM_PROMPT;
  }
  return `${ANCHOR_SYSTEM_PROMPT}${PATTERN_C_SYSTEM_APPEND}`;
}

/**
 * 从任务描述中提取参考示例值（若有）
 * @param {string} taskDescription
 * @returns {string|null}
 */
function extractReferenceValue(taskDescription) {
  if (!taskDescription || typeof taskDescription !== 'string') {
    return null;
  }
  const patterns = [
    /\(\s*value\s*:\s*([^)]+)\)/i,
    /value\s*:\s*['"`]?([^'")\s,]+)['"`]?/i,
    /(?:示例值|参考值|example)\s*[:：]?\s*['"`]?([^'")\s,]+)['"`]?/i,
    /token\s*[:：]\s*['"`]?([A-Za-z0-9+/=_-]+)/i,
    /类似这样(?:的)?(?:token)?[:：]?\s*['"`]?([A-Za-z0-9+/=_-]+)/i,
    /(?:加密|编码|转换)成[^:：]*[:：]?\s*['"`]?([A-Za-z0-9+/=_-]+)/i,
    /(?:字段值|值为)\s*['"`]?([A-Za-z0-9+/=_-]+)['"`]?/i
  ];
  for (const pattern of patterns) {
    const match = taskDescription.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }
  return null;
}

/**
 * 从参考示例字面量归纳可观察的结构特征（非全局规则，仅描述该示例本身）
 * @param {string} referenceValue
 * @returns {string[]}
 */
function inferReferenceTraits(referenceValue) {
  if (!referenceValue) {
    return [];
  }

  const traits = [`长度 ${referenceValue.length} 字符`];

  if (/^[a-z0-9]+$/i.test(referenceValue)) {
    traits.push('连续字母数字串，无空格');
  }
  if (!referenceValue.includes('_')) {
    traits.push('无 `_` 前缀或下划线分段');
  } else if (/^[a-z]{2,4}_/i.test(referenceValue)) {
    const prefix = referenceValue.match(/^([a-z]{2,4})_/i)[1];
    traits.push(`带 \`${prefix}_\` 形态前缀`);
  }
  if (!referenceValue.includes('-')) {
    traits.push('无连字符 `-` 分段');
  }
  if (!referenceValue.includes('|') && !referenceValue.includes(':')) {
    traits.push('无 `|` / `:` 管道或键值分隔');
  }
  if (/^[A-Za-z0-9+/]+=*$/.test(referenceValue) && referenceValue.includes('=')) {
    traits.push('形似 base64（字母数字与 `+/`，可能含 `=` 填充）');
  }
  if (referenceValue.includes('=') && referenceValue.includes('&')) {
    traits.push('形如 `key=value&...` 的表单串');
  }

  return traits;
}

/**
 * @param {object} params
 * @param {string|null} [params.referenceValue]
 * @param {string|null} [params.valuePattern]
 * @param {string|null} [params.syntheticExample]
 * @param {object} [params.observation]
 * @returns {string[]}
 */
function buildReferenceValueSection(params = {}) {
  const {
    referenceValue,
    valuePattern,
    syntheticExample,
    observation
  } = params;

  if (!referenceValue && !valuePattern) {
    return [];
  }

  const lines = [
    '## 目标值参考（评分前必做形态对比）',
    ''
  ];

  if (valuePattern) {
    lines.push(`目标值形态约束（正则）：\`${valuePattern}\``);
    lines.push('');
    lines.push('从正则约束可推断的结构特征：');
    lines.push(...inferTraitsFromPattern(valuePattern).map((t) => `- ${t}`));
    lines.push('');
  }

  if (referenceValue) {
    const label = syntheticExample && referenceValue === syntheticExample
      ? '合成参考示例（由正则推导，仅作形态参照）'
      : '参考示例';
    lines.push(`${label}：\`${referenceValue}\``);
    lines.push('');
    lines.push('从参考示例可观察到的结构特征：');
    lines.push(...inferReferenceTraits(referenceValue).map((t) => `- ${t}`));
    lines.push('');
  }

  if (valuePattern && referenceValue && !matchesValuePattern(referenceValue, valuePattern)) {
    lines.push('⚠️ 参考示例与正则约束不一致，评分时**以正则约束为准**。');
    lines.push('');
  }

  lines.push(
    'Anchor(1.0) 要求：候选产出的目标 observable 在**上述结构特征上保持一致**。',
    '- Pattern A（专用变换型）：对照候选函数 **return** 值；',
    '- Pattern B（绑定决策型）：对照 payload 中**绑定到目标字段的表达式结果**（handler 可 return void）。',
    '若源码中可见 return 或绑定表达式拼接了与参考示例**不一致**的前缀（如 `st_` vs `fp_`）、分隔符（如 `-`）、或中间格式（如 `k:v|...`、纯整数），',
    '则该函数产出的是**别的字段/别的阶段**的值，**不得**标 Anchor(1.0) 或 Nested Helper(0.7)，score **必须 ≤ 0.2**。',
    '',
    'reason 必须包含一句形态对比，例如：',
    '「参考为 `fp_...` 连续小写无 `-`，候选 return `st_...` 或 `k:v|...` 管道串，结构不符 → score ≤ 0.2」。',
    '或 Pattern B：「参考为 base64 串，候选在 payload 中 `"password": base64Encode(x)` 绑定形态一致 → handler 可 Anchor」。',
    '禁止写「形态与参考同类（可能带前缀/分隔符）」这类模糊理由。'
  );

  const observed = observation?.value;
  if (observed != null) {
    const observedStr = typeof observed === 'object'
      ? JSON.stringify(observed)
      : String(observed);
    if (valuePattern && !matchesValuePattern(observedStr, valuePattern)) {
      lines.push(
        '',
        `断点当前观测值：${JSON.stringify(observed)}（**不匹配**目标形态约束，通常为中间步骤或别的字段，**禁止**用此值做 Anchor 形态判定）`
      );
    } else if (referenceValue && observedStr !== String(referenceValue)) {
      lines.push(
        '',
        `断点当前观测值：${JSON.stringify(observed)}（与参考示例可能不同，通常只是中间步骤，不能代替参考示例做 Anchor 判定）`
      );
    }
  }

  return lines;
}

/**
 * @param {object} params
 * @returns {{ system: string, user: string }}
 */
function buildAnchorJudgmentMessages(params) {
  const {
  taskDescription,
  candidates,
  tvn,
  observation,
  observationFunction,
  distances,
  enablePatternC = false,
  referenceValue: explicitReferenceValue,
  valuePattern
  } = params;

  const referenceContext = resolveReferenceContext({
    taskDescription,
    referenceValue: explicitReferenceValue,
    valuePattern,
    extractFromTask: extractReferenceValue
  });
  
  const observedTag =
  tvn?.functionTag ||
  observation?.functionTag ||
  'unknown';
  
  const observedName =
  observationFunction?.functionName ||
  observation?.functionName ||
  tvn?.functionName ||
  observedTag;
  
  const observedCode =
  observationFunction?.functionCode || '';
  
  const callChainText =
  (observation?.callChain || []).join(' -> ') || 'none';
  
  const functionBlocks = candidates.map((item, idx) => {
  const dist = distances?.get(item.tag);

  const runtimeClue = [];
  
  if (tvn?.functionTag === item.tag) {
    runtimeClue.push(
      '运行时观察发生在此函数中'
    );
  
    if (observation?.value !== undefined) {
      runtimeClue.push(
        `观察到的值：${JSON.stringify(observation.value)}`
      );
    }
  }
  
  if (item.hasConsoleLike) {
    runtimeClue.push(
      '包含可能的接收点行为（控制台/遥测/发送）'
    );
  }
  
  if (item.hasEncodeLike) {
    runtimeClue.push(
      '含编码/哈希/位运算（仅此不足以标 Anchor，须对照目标值参考示例）'
    );
  }
  
  if (item.hasAssignmentLike) {
    runtimeClue.push(
      '包含赋值或对象组装行为'
    );
  }
  
  return [
    `### 候选函数 ${idx + 1}：${item.functionName}`,
    `- 标签：${item.tag}`,
    `- 逆向距离：${dist != null ? dist : '未知'}`,
    `- 运行时线索：${runtimeClue.length ? runtimeClue.join(' ； ') : '无'}`,
    '',
    '源代码：',
    '```javascript',
    item.functionCode || '（无源代码）',
    '```'
  ].join('\n');
  }).join('\n\n');

  const referenceValueSection = buildReferenceValueSection({
    referenceValue: referenceContext.referenceValue,
    valuePattern: referenceContext.valuePattern,
    syntheticExample: referenceContext.syntheticExample,
    observation
  });

  const user = [
  '## 行为描述',
  '',
  taskDescription,
  '',
  ...referenceValueSection,
  ...(referenceValueSection.length ? [''] : []),
  ...(enablePatternC ? buildPatternCUserBanner() : []),
  '【负例对照 — 不得标 Anchor(1.0)】',
  '1) Pattern A Generic Runtime 编排器：walk/materialize(config)/seedCells/Reflect.set 后调用 u(config)，',
  'digest 在 opaque closure 内产生、编排器自身不 return 与参考示例一致的目标 digest —— ≤0.2',
  '   （**例外**：constructSurfaceEnvelope / encodeByteArrayEnvelope 等 Envelope 若 return 最终 digest 且形态匹配 → 可 1.0）',
  '2) 配置工厂：return {salt,ticket,branch,order,mask,slot} —— ≤0.2',
  '3) 收集循环：for push factory(i); return 数组 —— ≤0.2',
  '4) 薄包装器：return (data,ctx)=>anchor(data,cfg,ctx)，无额外变换/绑定决策 —— ≤0.2',
  '5) 原始采集：navigator/screen/canvas/form 读数 —— ≤0.2',
  '6) Sink：console.log / HTTP send / 仅 payload[field]=已有值 —— ≤0.2 或 0',
  '7) 通用 encode/hash 原语（base64/md5/sha256/xor/imul）：无 enclosing 绑定语义时 —— 0.5',
  '8) return 或绑定形态与参考示例结构明显不符（错误前缀、连字符、管道串、纯整数等）—— **≤ 0.2**',
  '9) 仅产出中间格式（`k:v|...`、`d:...|t:...`、纯数字 fold、`st_...` 等非目标前缀）而非参考示例结构 —— **≤ 0.2**',
  '   **禁止**因「Nested Helper / anchor 内部子步骤 / 专门服务目标签名输入」给 0.7；形态不符即 ≤0.2',
  '   例：参考 `fp_...`，候选 return `st_...` 或 `k:v|...` 管道串 → ≤0.2，不是 0.7，也不是 Anchor',
  '10) 诱饵：同名字段但非当前 action 路径 —— 0',
  '',
  '【Pattern A Envelope 正例 — 可标 Anchor(1.0)】',
  'constructSurfaceEnvelope：调用 surfaceFrame→foldSurfaceFrame→encodeSurfaceDigest，',
  '组合 activeSlot+normalizeTuple+actionName 种子，return 最终 `bf_...` digest；',
  '调用者 u/commit 为 generic 转发 → constructSurfaceEnvelope 是 Anchor；',
  '  形态相符的子步骤 ≤0.7，形态不符的子步骤 ≤0.2。',
  ...(enablePatternC
    ? [
      '11) Pattern C 例外：外层 login/submit handler 仅透传 url、不在自身函数体内生成并追加 query 参数 —— 0.2，',
      '    即使业务上「属于 login 流程」；Anchor 在含完整生成+追加逻辑的内层 wrapper。'
    ]
    : []),
  '',
  ...buildAnchorPatternSelectionSection(enablePatternC),
  '',
  '【禁止启发式】',
  '不得因「调用栈更浅 / 出现 ticket,salt / 文件更靠前 / 含 hash 循环」给 1.0。',
  '不得因「函数在做编码」就默认是 anchor（Pattern B 下 encode 原语仍是 0.5）。',
  '不得因 handler return void 就自动降为 0.2（须先判断是否 Pattern B 绑定决策型）。',
  ...(enablePatternC
    ? ['Pattern C 启用时：不得因 generic wrapper / 无 login 语义将函数体已完整满足任务的候选降为 0.2。']
    : []),
  '不得用「都是 digest / 都是短串 / 可能带前缀」掩盖形态与参考示例的结构差异。',

  '【评分一致性】',
  '若 generic 循环/转发函数因“只 orchestrate”得 0.2，则其薄包装 factory 也不得 1.0。',
  '若 Envelope 函数 return 最终目标 digest 且形态匹配参考示例，则 Envelope 可 1.0。',
  '  其内部子步骤：return 形态与参考一致或同族 digest 编码 → 0.7；',
  '  return 管道串/整数/错误前缀等明显不符形态 → ≤0.2，不得 0.7。',
  '子步骤 return 中间形态（管道串/整数/错误前缀）≠ Envelope return 最终 digest；',
  '  形态不符的子步骤 ≤0.2，勿因「在 anchor 内部」给 0.7，也勿误判为 Anchor(1.0)。',
  '',
  '## 运行时观察（仅供引用）',
  '',
  '以下运行时观察指示目标值被观察到的地方。',
  '它并不一定指示该值是原始生成的地方。',
  '',
  '观察到的函数：',
  `- 函数名：${observedName}`,
  `- 标签：${observedTag}`,
  `- 观察到的变量：${tvn?.varName || observation?.varName || 'unknown'}`,
  `- 观察到的值：${JSON.stringify(observation?.value ?? tvn?.value ?? null)}`,
  `- 调用链：${callChainText}`,
  '',
  '### 观察到的函数源代码',
  '',
  '```javascript',
      observedCode || '（无源代码）',
      '```',
  '',
  '',
  `## 候选函数（${candidates.length}）`,
  '',
  functionBlocks,
  '',
  `## 必须评分的 tag 清单（results 必须恰好 ${candidates.length} 条，tag 原样复制）`,
  '',
  ...candidates.map((item, idx) => `${idx + 1}. ${item.tag}`),
  '',
  '评分要求：',
  `- 必须为以上 ${candidates.length} 个 tag 各输出一条 results 条目`,
  '- tag 字段必须与清单中的字符串完全一致',
  '- 每个候选都要有独立的 score（0~1）与非空 reason',
  '- reason 须含「产出形态 vs 参考示例」对比（有参考示例时；Pattern B 可用字段绑定表达式）',
  '- 禁止只返回最高分候选或只返回 anchor 候选',
  '',
  buildStrictJsonOutputRules(candidates.length)
  ].join('\n');

  return {
  system: buildAnchorSystemPrompt(enablePatternC),
  user
  };
}
  
  

/**
 * 锚点评分不完整时的重试补充说明
 * @param {string[]} missingTags
 * @param {object[]} candidates
 * @returns {string}
 */
function buildAnchorJudgmentRetryHint(missingTags, candidates) {
  const lines = missingTags.map((tag, idx) => {
    const item = candidates.find((c) => c.tag === tag);
    const name = item?.functionName || 'unknown';
    return `${idx + 1}. tag=${tag}（函数名：${name}）`;
  });

  return [
    `[重要] 上次 JSON 不完整：以下 ${missingTags.length} 个候选缺少独立的 results 条目。`,
    '',
    '缺失条目：',
    ...lines,
    '',
    `请重新输出完整 JSON。results 必须恰好 ${candidates.length} 条，`,
    '每个 tag 从「必须评分的 tag 清单」原样复制（双引号字符串，含完整 URL），每条都要有 score（数字）与 reason（单行字符串）。',
    '不得将多个候选的评语合并到一条 reason 中。',
    '再次强调：仅输出 JSON 对象，无 markdown、无注释；tag 禁止裸写 URL；reason 禁止反引号与换行。'
  ].join('\n');
}

module.exports = {
  ANCHOR_SYSTEM_PROMPT,
  PATTERN_C_SYSTEM_APPEND,
  buildAnchorSystemPrompt,
  buildPatternCUserBanner,
  buildAnchorPatternSelectionSection,
  buildStrictJsonOutputRules,
  buildAnchorJudgmentMessages,
  buildAnchorJudgmentRetryHint,
  buildReferenceValueSection,
  extractReferenceValue,
  inferReferenceTraits
};
