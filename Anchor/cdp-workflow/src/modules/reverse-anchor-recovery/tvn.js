/**
 * 当前轮断点观测与 TVN 构建
 */

const { extractKeywordsFromTask } = require('./keywords');

/**
 * @param {*} value
 * @returns {string[]}
 */
function collectFieldNames(value) {
  if (value === null || value === undefined) return [];
  if (typeof value !== 'object' || Array.isArray(value)) return [];
  return Object.keys(value);
}

/**
 * @param {object} observation
 * @param {string[]} keywords
 * @returns {boolean}
 */
function observationMatchesKeywords(observation, keywords) {
  if (!keywords.length) return false;
  const fields = collectFieldNames(observation.value);
  return fields.some((field) => keywords.includes(field));
}

/**
 * 取当前轮（或最新）断点观测
 * @param {object} graph
 * @param {{ turn?: number, filterTurn?: boolean }} options
 * @returns {object|null}
 */
function getCurrentTurnObservation(graph, options = {}) {
  const turn = options.turn ?? graph.turn ?? null;
  const observations = graph.observations || [];

  if (!observations.length) {
    return null;
  }

  let filtered = observations;
  if (options.filterTurn && turn != null) {
    filtered = observations.filter((obs) => obs.turn === turn);
  } else if (turn != null) {
    const turnObs = observations.filter((obs) => obs.turn === turn);
    if (turnObs.length) {
      filtered = turnObs;
    }
  }

  if (!filtered.length) {
    return null;
  }

  const sorted = [...filtered].sort((a, b) => {
    const ta = Date.parse(a.capturedAt || '') || a.turn || 0;
    const tb = Date.parse(b.capturedAt || '') || b.turn || 0;
    return tb - ta || (b.turn || 0) - (a.turn || 0);
  });

  return sorted[0];
}

/**
 * 由观测构建 TVN（值节点）
 * @param {object} graph
 * @param {object} observation
 * @returns {object}
 */
function buildTvnFromObservation(graph, observation) {
  const valueNodeId = observation.valueNodeId
    || (graph.nodes || []).find(
      (n) => n.type === 'value'
        && n.functionTag === observation.functionTag
        && n.varName === observation.varName
    )?.id;

  const valueNode = valueNodeId
    ? (graph.nodes || []).find((n) => n.id === valueNodeId)
    : (graph.nodes || []).find(
      (n) => n.type === 'value'
        && n.functionTag === observation.functionTag
        && n.varName === observation.varName
    );

  return valueNode || {
    id: valueNodeId || `value:${observation.functionTag}::${observation.varName}`,
    type: 'value',
    functionTag: observation.functionTag,
    functionName: observation.functionName,
    varName: observation.varName,
    value: observation.value
  };
}

/**
 * @deprecated 保留供测试/兼容；主流程已改为 LLM 观测相关性判定
 * @param {object} graph
 * @param {string} taskDescription
 * @param {{ turn?: number, keywords?: string[] }} options
 * @returns {{ tvn: object|null, observation: object|null, keywords: string[], matchedFields: string[] }}
 */
function identifyTvn(graph, taskDescription, options = {}) {
  const keywords = options.keywords?.length
    ? options.keywords
    : extractKeywordsFromTask(taskDescription);

  const observations = (graph.observations || []).filter((obs) => {
    if (options.turn != null && obs.turn !== options.turn) return false;
    return true;
  });

  // 优先匹配本轮最新观测
  const sorted = [...observations].sort((a, b) => (b.turn || 0) - (a.turn || 0));

  for (const obs of sorted) {
    if (!observationMatchesKeywords(obs, keywords)) continue;

    const matchedFields = collectFieldNames(obs.value).filter((f) => keywords.includes(f));
    const valueNodeId = obs.valueNodeId
      || (graph.nodes || []).find(
        (n) => n.type === 'value'
          && n.functionTag === obs.functionTag
          && n.varName === obs.varName
      )?.id;

    const valueNode = valueNodeId
      ? (graph.nodes || []).find((n) => n.id === valueNodeId)
      : (graph.nodes || []).find(
        (n) => n.type === 'value'
          && n.functionTag === obs.functionTag
          && n.varName === obs.varName
      );

    return {
      tvn: valueNode || {
        id: valueNodeId || `value:${obs.functionTag}::${obs.varName}`,
        type: 'value',
        functionTag: obs.functionTag,
        functionName: obs.functionName,
        varName: obs.varName,
        value: obs.value
      },
      observation: obs,
      keywords,
      matchedFields
    };
  }

  return { tvn: null, observation: null, keywords, matchedFields: [] };
}

module.exports = {
  collectFieldNames,
  observationMatchesKeywords,
  getCurrentTurnObservation,
  buildTvnFromObservation,
  identifyTvn
};
