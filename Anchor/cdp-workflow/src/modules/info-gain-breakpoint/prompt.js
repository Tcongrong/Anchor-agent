/**
 * TC2 LLM Prompt 构造
 */

/**
 * @param {object} llmContext buildLlmContext 的输出
 * @returns {string}
 */
function buildPrompt(llmContext) {
  const { taskDescription, focusFunctions, causalGraphSummary } = llmContext;

  const focusBlocks = focusFunctions.map((fn) => {
    const stmtLines = fn.keyStatements
      .map((s) => `    - [${s.astType}] ${s.text}`)
      .join('\n');

    const obsLines = fn.observables
      .map((o) => {
        const loc = o.runtime_loc || o.source_loc;
        const locStr = loc ? `line ${loc.line}, col ${loc.column}` : 'unknown';
        return `    - var_name="${o.var_name}", expr="${o.text}", role=${o.role}, kind=${o.kind}, loc={${locStr}}`;
      })
      .join('\n');

    return `### f${fn.rank}: ${fn.functionName} (p=${fn.prob.toFixed(6)})
- tag: ${fn.tag}
- Sink 距离: ${fn.sinkDistanceText}
- 关键语句:
${stmtLines || '    (无)'}
- 可观测变量:
${obsLines || '    (无)'}`;
  }).join('\n\n');

  return `你是 JavaScript 逆向分析助手。根据任务描述和候选函数上下文，生成 5 个最有信息量的动态观测断点候选。

## 任务描述
${taskDescription}

## 焦点函数（概率最高的 3 个）
${focusBlocks}

## 当前因果图摘要
${causalGraphSummary}

## 输出要求
请严格输出 JSON（不要 markdown 代码块、不要任何前后说明文字）。

**完整示例（likelihoods 必须严格按此格式，键名只能是 "f1"/"f2"/"f3"，每个 outcome 恰好 3 个键）：**
{
  "reasoning": "选 hash 相关变量以区分 f1/f2",
  "candidates": [
    {
      "var_name": "payload",
      "runtime_loc": { "line": 42, "column": 8 },
      "function_tag": "http://example/app.js::hashFn@42:8",
      "condition": null,
      "predicted_outcomes": [
        {
          "outcome_desc": "非空 hex 字符串",
          "prob": 0.6,
          "likelihoods": { "f1": 0.9, "f2": 0.15, "f3": 0.1 }
        },
        {
          "outcome_desc": "null 或空",
          "prob": 0.4,
          "likelihoods": { "f1": 0.1, "f2": 0.85, "f3": 0.8 }
        }
      ]
    }
  ]
}

正式输出时生成 5 个 candidates（结构同上），格式如下：
{
  "reasoning": "可选的简短推理（单行，不超过 120 字）",
  "candidates": [
    {
      "var_name": "变量名（对应字典 binding）",
      "runtime_loc": { "line": number, "column": number },
      "function_tag": "所属函数 tag",
      "condition": "可选的观测条件描述",
      "predicted_outcomes": [
        {
          "outcome_desc": "可能观测到的值描述",
          "prob": 0.0-1.0,
          "likelihoods": { "f1": number, "f2": number, "f3": number }
        }
      ]
    }
  ]
}

约束：
1. 生成恰好 5 个 candidates，每个来自上述焦点函数的可观测变量。
2. 每个 candidate 的 predicted_outcomes 至少 2 个，prob 之和为 1。
3. likelihoods **必须**是对象 { "f1": number, "f2": number, "f3": number }：键名只能是 f1/f2/f3 三个，每个 outcome 恰好 3 个键，禁止重复键、禁止写成 "f22" 或 "f11"；数值使用 ASCII 负号 '-'。
4. runtime_loc 必须从可观测变量列表中复制，不要编造。
5. 优先选择能区分三个焦点函数、与任务目标值（如 search_sig、signature）相关的变量。
6. **JSON 格式硬性要求**：所有字符串值必须写在同一行内，禁止在字符串中间换行；字符串内不要出现未转义的双引号；outcome_desc / reasoning / condition 保持简短。`;
}

/**
 * @param {object} llmContext
 * @returns {{ system: string, user: string }}
 */
function buildChatMessages(llmContext) {
  return {
    system: 'You are a JSON-only API for dynamic JavaScript debugging breakpoint selection. Always respond with exactly one JSON object matching the requested schema. Never greet, ask questions, or use markdown. Every string value must stay on a single line with no raw line breaks inside quotes.',
    user: buildPrompt(llmContext)
  };
}

module.exports = {
  buildPrompt,
  buildChatMessages
};
