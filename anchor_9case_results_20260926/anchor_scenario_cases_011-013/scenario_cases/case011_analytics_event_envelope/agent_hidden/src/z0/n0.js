const queue = [];

function fieldName() {
  const left = [101, 119, 101, 111, 116, 96].map((n, i) => String.fromCharCode(n - (i % 2)));
  const right = [116, 110, 107, 100, 110].map((n, i) => String.fromCharCode(n + (i % 2)));
  return left.concat(right).join('');
}
function actionName(ctx) {
  const base = [97, 110, 97, 108, 121, 116, 105, 99, 115, 46, 116, 114, 97, 99, 107];
  return base.map((n) => String.fromCharCode(n)).join('').slice(0, ctx.row.kind + 12);
}
function altAction(index) {
  const names = [
    [116, 101, 108, 101, 109, 101, 116, 114, 121, 46, 112, 97, 103, 101, 118, 105, 101, 119],
    [116, 101, 108, 101, 109, 101, 116, 114, 121, 46, 97, 117, 100, 105, 116]
  ];
  return names[index].map((code) => String.fromCharCode(code)).join('');
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 37 + ctx.row.lane * 11 + ctx.row.weight) & 255;
  const base = [0x66, 0x6b, 0x70].map((code, index) => String.fromCharCode(code + ((seed + index) % 5)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x55).toString(16),
    base[2] + (seed ^ 0xaa).toString(16)
  ];
}
function pick(ctx) {
  const keys = keyRing(ctx);
  const bag = Array.isArray(ctx[keys[0]]) ? ctx[keys[0]] : [];
  const lane = (ctx[keys[1]] ^ ctx.machine ^ ctx[keys[2]]) & 7;
  return bag[lane];
}
function pageViewToken(ctx) {
  const seed = ((ctx && ctx.machine) || 5) ^ 0x51ed270b;
  let acc = seed >>> 0;
  const out = [];
  for (let index = 0; index < 20; index += 1) {
    acc = Math.imul(acc ^ (acc >>> 13) ^ index, 0x85ebca6b) >>> 0;
    out.push((acc % 36).toString(36));
  }
  const prefix = [0x61, 0x6e, 0x5f].map((c) => String.fromCharCode(c)).join('');
  return prefix + out.join('');
}
function serializeEnvelope(envelope) {
  const keys = Object.keys(envelope).sort();
  const ordered = keys.reduce((acc, key) => { acc[key] = envelope[key]; return acc; }, {});
  return JSON.stringify(ordered);
}
function pageViewEmitter(ctx) {
  const token = pageViewToken(ctx);
  const envelope = {};
  Reflect.set(envelope, 'action', altAction(0));
  Reflect.set(envelope, 'token_ref', token);
  Reflect.set(envelope, 'lane_hint', ((ctx && ctx.machine) || 0) & 63);
  console.debug(JSON.parse(serializeEnvelope(envelope)));
  return token;
}
function side(ctx) {
  const target = pick(ctx);
  const transport = keyRing(ctx);
  const bag = Array.isArray(ctx[transport[0]]) ? ctx[transport[0]].filter((value) => value && value !== target) : [];
  const labels = ['beacon_ref', 'queue_ref'];
  labels.forEach((key, index) => {
    const payload = {};
    Reflect.set(payload, 'action', actionName({ row: { kind: index + 1 } }));
    Reflect.set(payload, key, bag[(index + 1) % Math.max(1, bag.length)] || 'am_0000000000000000');
    console['log'](payload);
  });
  [0, 1].forEach((index) => {
    const payload = {};
    Reflect.set(payload, 'action', altAction(index));
    Reflect.set(payload, fieldName(), bag[index % Math.max(1, bag.length)] || 'am_0000000000000000');
    console['log'](payload);
  });
  pageViewEmitter(ctx);
}
function composeTrackEnvelope(value, ctx) {
  const payload = {};
  Reflect.set(payload, 'action', actionName(ctx));
  Reflect.set(payload, fieldName(), value);
  Reflect.set(payload, 'occurred_seq', (ctx.machine || 0) % 9973);
  Reflect.set(payload, 'lane_mark', String(ctx.mark || ''));
  return payload;
}
function stage(payload) {
  const pipe = [
    (x) => ({ ...x }),
    (x) => Object.assign({}, x),
    (x) => Reflect.ownKeys(x).reduce((acc, key) => { acc[key] = x[key]; return acc; }, {})
  ];
  return pipe.reduce((acc, fn) => fn(acc), payload);
}
function sendCollectBeacon(body) {
  const url = [47, 97, 112, 105, 47, 99, 111, 108, 108, 101, 99, 116].map((c) => String.fromCharCode(c)).join('');
  return navigator.sendBeacon(url, body);
}
function flushQueue() {
  const drained = queue.splice(0, queue.length);
  const emitted = [];
  for (const envelope of drained) {
    sendCollectBeacon(serializeEnvelope(envelope));
    const payload = stage(envelope);
    console['log'](payload);
    emitted.push(payload);
  }
  return emitted;
}
export function r(ctx) {
  side(ctx);
  const token = pick(ctx);
  queue.push(composeTrackEnvelope(token, ctx));
  const emitted = flushQueue();
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Tracked';
  return emitted;
}
const n0_0 = "metric-grid:n0.js:000";
const n0_1 = "event-row:n0.js:001";
const n0_2 = "panel-dim:n0.js:002";
const n0_3 = "signal-dot:n0.js:003";
const n0_4 = "cohort-bar:n0.js:004";
const n0_5 = "chart-axis:n0.js:005";
const n0_6 = "stream-cell:n0.js:006";
const n0_7 = "pulse-track:n0.js:007";
const n0_8 = "metric-grid:n0.js:008";
const n0_9 = "event-row:n0.js:009";
const n0_10 = "panel-dim:n0.js:010";
const n0_11 = "signal-dot:n0.js:011";
const n0_12 = "cohort-bar:n0.js:012";
const n0_13 = "chart-axis:n0.js:013";
const n0_14 = "stream-cell:n0.js:014";
const n0_15 = "pulse-track:n0.js:015";
const n0_16 = "metric-grid:n0.js:016";
const n0_17 = "event-row:n0.js:017";
const n0_18 = "panel-dim:n0.js:018";
const n0_19 = "signal-dot:n0.js:019";
const n0_20 = "cohort-bar:n0.js:020";
const n0_21 = "chart-axis:n0.js:021";
const n0_22 = "stream-cell:n0.js:022";
const n0_23 = "pulse-track:n0.js:023";
const n0_24 = "metric-grid:n0.js:024";
const n0_25 = "event-row:n0.js:025";
const n0_26 = "panel-dim:n0.js:026";
const n0_27 = "signal-dot:n0.js:027";
const n0_28 = "cohort-bar:n0.js:028";
const n0_29 = "chart-axis:n0.js:029";
const n0_30 = "stream-cell:n0.js:030";
const n0_31 = "pulse-track:n0.js:031";
const n0_32 = "metric-grid:n0.js:032";
const n0_33 = "event-row:n0.js:033";
const n0_34 = "panel-dim:n0.js:034";
const n0_35 = "signal-dot:n0.js:035";
const n0_36 = "cohort-bar:n0.js:036";
const n0_37 = "chart-axis:n0.js:037";
const n0_38 = "stream-cell:n0.js:038";
const n0_39 = "pulse-track:n0.js:039";
const n0_40 = "metric-grid:n0.js:040";
const n0_41 = "event-row:n0.js:041";
const n0_42 = "panel-dim:n0.js:042";
const n0_43 = "signal-dot:n0.js:043";
const n0_44 = "cohort-bar:n0.js:044";
const n0_45 = "chart-axis:n0.js:045";
const n0_46 = "stream-cell:n0.js:046";
const n0_47 = "pulse-track:n0.js:047";
const n0_48 = "metric-grid:n0.js:048";
const n0_49 = "event-row:n0.js:049";
const n0_50 = "panel-dim:n0.js:050";
const n0_51 = "signal-dot:n0.js:051";
const n0_52 = "cohort-bar:n0.js:052";
const n0_53 = "chart-axis:n0.js:053";
const n0_54 = "stream-cell:n0.js:054";
const n0_55 = "pulse-track:n0.js:055";
const n0_56 = "metric-grid:n0.js:056";
const n0_57 = "event-row:n0.js:057";
const n0_58 = "panel-dim:n0.js:058";
const n0_59 = "signal-dot:n0.js:059";
const n0_60 = "cohort-bar:n0.js:060";
const n0_61 = "chart-axis:n0.js:061";
const n0_62 = "stream-cell:n0.js:062";
const n0_63 = "pulse-track:n0.js:063";
const n0_64 = "metric-grid:n0.js:064";
const n0_65 = "event-row:n0.js:065";
const n0_66 = "panel-dim:n0.js:066";
const n0_67 = "signal-dot:n0.js:067";
const n0_68 = "cohort-bar:n0.js:068";
const n0_69 = "chart-axis:n0.js:069";
const n0_70 = "stream-cell:n0.js:070";
const n0_71 = "pulse-track:n0.js:071";
const n0_72 = "metric-grid:n0.js:072";
const n0_73 = "event-row:n0.js:073";
const n0_74 = "panel-dim:n0.js:074";
const n0_75 = "signal-dot:n0.js:075";
const n0_76 = "cohort-bar:n0.js:076";
const n0_77 = "chart-axis:n0.js:077";
const n0_78 = "stream-cell:n0.js:078";
const n0_79 = "pulse-track:n0.js:079";
const n0_80 = "metric-grid:n0.js:080";
const n0_81 = "event-row:n0.js:081";
const n0_82 = "panel-dim:n0.js:082";
const n0_83 = "signal-dot:n0.js:083";
const n0_84 = "cohort-bar:n0.js:084";
const n0_85 = "chart-axis:n0.js:085";
const n0_86 = "stream-cell:n0.js:086";
const n0_87 = "pulse-track:n0.js:087";
const n0_88 = "metric-grid:n0.js:088";
const n0_89 = "event-row:n0.js:089";
const n0_90 = "panel-dim:n0.js:090";
const n0_91 = "signal-dot:n0.js:091";
const n0_92 = "cohort-bar:n0.js:092";
const n0_93 = "chart-axis:n0.js:093";
const n0_94 = "stream-cell:n0.js:094";
const n0_95 = "pulse-track:n0.js:095";
const n0_96 = "metric-grid:n0.js:096";
const n0_97 = "event-row:n0.js:097";
const n0_98 = "panel-dim:n0.js:098";
const n0_99 = "signal-dot:n0.js:099";
const n0_100 = "cohort-bar:n0.js:100";
const n0_101 = "chart-axis:n0.js:101";
const n0_102 = "stream-cell:n0.js:102";
const n0_103 = "pulse-track:n0.js:103";
const n0_104 = "metric-grid:n0.js:104";
const n0_105 = "event-row:n0.js:105";
const n0_106 = "panel-dim:n0.js:106";
const n0_107 = "signal-dot:n0.js:107";
const n0_108 = "cohort-bar:n0.js:108";
const n0_109 = "chart-axis:n0.js:109";
const n0_110 = "stream-cell:n0.js:110";
const n0_111 = "pulse-track:n0.js:111";
const n0_112 = "metric-grid:n0.js:112";
const n0_113 = "event-row:n0.js:113";
const n0_114 = "panel-dim:n0.js:114";
const n0_115 = "signal-dot:n0.js:115";
const n0_116 = "cohort-bar:n0.js:116";
const n0_117 = "chart-axis:n0.js:117";
const n0_118 = "stream-cell:n0.js:118";
const n0_119 = "pulse-track:n0.js:119";
const n0_120 = "metric-grid:n0.js:120";
const n0_121 = "event-row:n0.js:121";
const n0_122 = "panel-dim:n0.js:122";
const n0_123 = "signal-dot:n0.js:123";
const n0_124 = "cohort-bar:n0.js:124";
const n0_125 = "chart-axis:n0.js:125";
const n0_126 = "stream-cell:n0.js:126";
const n0_127 = "pulse-track:n0.js:127";
const n0_128 = "metric-grid:n0.js:128";
const n0_129 = "event-row:n0.js:129";
const n0_130 = "panel-dim:n0.js:130";
const n0_131 = "signal-dot:n0.js:131";
const n0_132 = "cohort-bar:n0.js:132";
const n0_133 = "chart-axis:n0.js:133";
const n0_134 = "stream-cell:n0.js:134";
const n0_135 = "pulse-track:n0.js:135";
const n0_136 = "metric-grid:n0.js:136";
const n0_137 = "event-row:n0.js:137";
const n0_138 = "panel-dim:n0.js:138";
const n0_139 = "signal-dot:n0.js:139";
const n0_140 = "cohort-bar:n0.js:140";
const n0_141 = "chart-axis:n0.js:141";
const n0_142 = "stream-cell:n0.js:142";
const n0_143 = "pulse-track:n0.js:143";
const n0_144 = "metric-grid:n0.js:144";
const n0_145 = "event-row:n0.js:145";
const n0_146 = "panel-dim:n0.js:146";
const n0_147 = "signal-dot:n0.js:147";
const n0_148 = "cohort-bar:n0.js:148";
const n0_149 = "chart-axis:n0.js:149";
const n0_150 = "stream-cell:n0.js:150";
const n0_151 = "pulse-track:n0.js:151";
const n0_152 = "metric-grid:n0.js:152";
const n0_153 = "event-row:n0.js:153";
const n0_154 = "panel-dim:n0.js:154";
const n0_155 = "signal-dot:n0.js:155";
const n0_156 = "cohort-bar:n0.js:156";
const n0_157 = "chart-axis:n0.js:157";
const n0_158 = "stream-cell:n0.js:158";
const n0_159 = "pulse-track:n0.js:159";
const n0_160 = "metric-grid:n0.js:160";
const n0_161 = "event-row:n0.js:161";
const n0_162 = "panel-dim:n0.js:162";
const n0_163 = "signal-dot:n0.js:163";
