/**
 * 特征组合、softmax 归一化与 FunctionFeatures 输出
 */

/**
 * @typedef {object} FunctionFeatures
 * @property {string} func_id
 * @property {number} ast_score
 * @property {number} api_score
 * @property {number} api_direct_score
 * @property {number} api_proximity_score
 * @property {number} entropy_score
 * @property {number} sink_proximity
 * @property {number} combined_score
 * @property {number} prob
 */

/**
 * @param {number} tf
 * @param {number} df
 * @param {number} candidateCount
 * @returns {number}
 */
function idfWeight(tf, df, candidateCount) {
  return tf * Math.log(candidateCount / (df + 1));
}

/**
 * @param {Map<string, number>} termFrequency
 * @param {Map<string, number>} documentFrequency
 * @param {number} candidateCount
 * @returns {number}
 */
function computeApiScore(termFrequency, documentFrequency, candidateCount) {
  let score = 0;
  for (const [api, tf] of termFrequency.entries()) {
    const df = documentFrequency.get(api) || 0;
    score += idfWeight(tf, df, candidateCount);
  }
  return score;
}

/** 结构先验 softmax 默认温度；>1 使分布更平缓 */
const DEFAULT_PRIOR_TEMPERATURE = 1;

/**
 * 将各特征缩放到可比量级后再组合。
 * 四个结构签名维度的原始尺度差异较大：S_sink 的一跳距离为 0.5，
 * 而 S_ast/S_ent 多为稀疏密度分数。这里按候选集内 min-max 归一化，
 * 避免等权组合被某个天然大尺度维度主导。
 *
 * @param {Array<{ ast: number, api: number, entropy: number, sink: number }>} rawScores
 * @returns {Array<{ ast: number, api: number, entropy: number, sink: number }>}
 */
function normalizeFeatureScores(rawScores) {
  if (!rawScores.length) {
    return [];
  }

  const dimensions = ['ast', 'api', 'entropy', 'sink'];
  const ranges = Object.fromEntries(dimensions.map((dimension) => {
    const values = rawScores.map((item) => item[dimension]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return [dimension, { min, max }];
  }));

  return rawScores.map((item) => ({
    ast: normalizeDimension(item.ast, ranges.ast),
    api: normalizeDimension(item.api, ranges.api),
    entropy: normalizeDimension(item.entropy, ranges.entropy),
    sink: normalizeDimension(item.sink, ranges.sink)
  }));
}

/**
 * @param {number} value
 * @param {{ min: number, max: number }} range
 * @returns {number}
 */
function normalizeDimension(value, range) {
  if (!Number.isFinite(value) || !Number.isFinite(range.min) || !Number.isFinite(range.max)) {
    return 0;
  }
  const span = range.max - range.min;
  return span > 0 ? (value - range.min) / span : 0;
}

/**
 * @param {Array<{ ast: number, api: number, entropy: number, sink: number }>} rawScores
 * @param {{ wAst?: number, wApi?: number, wEnt?: number, wSink?: number, normalizeFeatures?: boolean }} [weights]
 * @returns {number[]}
 */
function combineScores(rawScores, weights = {}) {
  const {
    wAst = 1,
    wApi = 1,
    wEnt = 1,
    wSink = 1,
    normalizeFeatures = true
  } = weights;

  const features = normalizeFeatures ? normalizeFeatureScores(rawScores) : rawScores;

  return features.map((item) =>
    wAst * item.ast
    + wApi * item.api
    + wEnt * item.entropy
    + wSink * item.sink
  );
}

/**
 * @param {number[]} scores
 * @param {number} [temperature=1] 温度系数，越大分布越平缓
 * @returns {number[]}
 */
function softmaxNormalize(scores, temperature = 1) {
  if (!scores.length) {
    return [];
  }
  const temp = temperature > 0 ? temperature : 1;
  const maxScore = Math.max(...scores);
  const exps = scores.map((score) => Math.exp((score - maxScore) / temp));
  const sum = exps.reduce((acc, value) => acc + value, 0);
  if (sum === 0) {
    return scores.map(() => 1 / scores.length);
  }
  return exps.map((value) => value / sum);
}

/**
 * @param {string[]} funcIds
 * @param {number[]} combinedScores
 * @param {Array<{ ast: number, api: number, entropy: number, sink: number }>} rawScores
 * @param {{ temperature?: number }} [options]
 * @returns {FunctionFeatures[]}
 */
function buildFunctionFeatures(funcIds, combinedScores, rawScores, options = {}) {
  const temperature = options.temperature ?? DEFAULT_PRIOR_TEMPERATURE;
  const probs = softmaxNormalize(combinedScores, temperature);
  return funcIds.map((funcId, index) => ({
    func_id: funcId,
    ast_score: rawScores[index].ast,
    api_score: rawScores[index].api,
    api_direct_score: rawScores[index].api_direct ?? rawScores[index].api,
    api_proximity_score: rawScores[index].api_proximity ?? 0,
    api_task_boost: rawScores[index].api_task_boost ?? 0,
    entropy_score: rawScores[index].entropy,
    sink_proximity: rawScores[index].sink,
    combined_score: combinedScores[index],
    prob: probs[index]
  }));
}

module.exports = {
  DEFAULT_PRIOR_TEMPERATURE,
  idfWeight,
  computeApiScore,
  normalizeFeatureScores,
  combineScores,
  softmaxNormalize,
  buildFunctionFeatures
};
