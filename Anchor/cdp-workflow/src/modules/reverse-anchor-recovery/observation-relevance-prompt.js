/**
 * 观测相关性判定 Prompt：判断当前断点观测函数是否与任务目标值生成有关
 */

const RELEVANCE_SYSTEM_PROMPT = `
您是一个 JavaScript 运行时行为分析助手。

您的任务是判断当前观察到的函数是否与用户描述的目标运行时行为语义相关。

目标不是判断该函数是否为最终的锚点函数。
而是判断该函数是否可能属于同一个运行时行为链。

核心思想：

一个运行时行为链可能包括：

* 用户交互
* 状态收集
* 输入准备
* 值生成
* 编码 / 序列化 / 转换
* 对象组装
* 遥测打包
* 日志记录 / 网络发送 / 渲染

一个函数即使属于以下情况，仍然可能相关：

* 上游输入准备
* 中间转换
* 下游接收点/输出
* 包装器/编排逻辑

相关 = true：
该函数可能参与了与目标行为相同的运行时语义链。

这包括：

* 目标值生成
* 中间值
* 编码/打包/签名
* 对象组装
* 遥测包装
* 下游传播
* 观察最终值的接收点

相关 = false：
该函数看起来与目标运行时行为无关。

典型的不相关情况：

* 无关的 UI 渲染
* 独立的分析统计
* 无关的事件处理器
* 没有语义连接的通用工具函数
* 无关的业务流程

重要的推理规则：

* 函数名和变量名可能是混淆的
* 不要仅依赖标识符名称
* 使用观察到的值、常量、API 模式、调用链上下文和运行时语义
* 即使是原始值或空对象，如果周围逻辑表明参与了编码/签名/负载生成，仍可能相关
* 接收点通常仍然是相关的，即使它们不是锚点
* 在一个函数内部观察到值并不意味着该函数生成了该值

评分指导：

1.0
直接参与目标语义生成或转换。

0.7
明显参与同一个运行时行为链。

0.4
较弱但合理的语义关联。

0.0
与描述的目标行为没有有意义的关联。

输出格式：

仅返回严格的 JSON。

{
"related": true,
"score": 0.0,
"reason": "..."
}
`;

function buildObservationRelevanceMessages(params) {
const {
taskDescription,
observation,
functionName,
functionCode,
callChain
} = params;

const valueText =
observation?.value === undefined
? 'undefined'
: JSON.stringify(observation.value);

const callChainText =
(callChain || observation?.callChain || []).join(' -> ') || 'none';

const user = [
'## 行为描述',
'',
taskDescription,
'',
'## 运行时观察',
'',
`- 函数标签：${observation?.functionTag || 'unknown'}`,
`- 函数名称：${functionName || 'unknown'}`,
`- 观察到的变量：${observation?.varName || 'unknown'}`,
`- 观察到的值：${valueText}`,
`- 调用链：${callChainText}`,
'',
'## 函数源代码',
'',
'```javascript',
    functionCode || '（无源代码）',
    '```',
'',
'判断此函数是否与目标运行时行为链语义相关。',
'',
'重要提示：',
'- 相关并不意味着是锚点',
'- 接收点/日志函数仍可能相关',
'- 包装器/编排函数仍可能相关',
'- 关注运行时行为链中的语义参与',
'- 使用局部运行时语义，而不是仅依赖标识符名称',
'',
'仅返回严格的 JSON。',
'',
'{',
'  "related": true,',
'  "score": 0.0,',
'  "reason": "..."',
'}'
].join('\n');

return {
system: RELEVANCE_SYSTEM_PROMPT,
user
};
}

module.exports = {
RELEVANCE_SYSTEM_PROMPT,
buildObservationRelevanceMessages
};