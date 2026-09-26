import { foldBase36, encodeContextFrame } from "./t3/c7/y4.js";

const queue = [];

function fieldName() {
  const codes = [101, 120, 112, 111, 115, 117, 114, 101, 95, 100, 105, 103, 101, 115, 116];
  return codes.map((code) => String.fromCharCode(code)).join('');
}
function actionName(ctx) {
  const base = [102, 108, 97, 103, 46, 101, 120, 112, 111, 115, 117, 114, 101];
  return base.map((code) => String.fromCharCode(code)).join('').slice(0, (ctx.row.kind || 0) + 12);
}
function altAction(index) {
  const names = [
    [102, 108, 97, 103, 46, 97, 115, 115, 105, 103, 110],
    [102, 108, 97, 103, 46, 97, 117, 100, 105, 116]
  ];
  return names[index].map((code) => String.fromCharCode(code)).join('');
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 43 + ctx.row.lane * 17 + ctx.row.weight) & 255;
  const base = [0x67, 0x6c, 0x71].map((code, index) => String.fromCharCode(code + ((seed + index * 2) % 5)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x5c).toString(16),
    base[2] + (seed ^ 0xa3).toString(16)
  ];
}
function pick(ctx) {
  const keys = keyRing(ctx);
  const bag = Array.isArray(ctx[keys[0]]) ? ctx[keys[0]] : [];
  const lane = (ctx[keys[1]] ^ ctx.machine ^ ctx[keys[2]]) & 7;
  return bag[lane];
}
function probeTag(ctx) {
  const machine = (ctx && ctx.machine) || 23;
  const tag = foldBase36((machine ^ 0x9e3779b9) >>> 0, 10);
  window['__fx_probe'] = tag;
  return tag;
}
function shadowValue(ctx) {
  return encodeContextFrame(ctx);
}
function shadowExposureEmitter(ctx) {
  const value = shadowValue(ctx);
  const envelope = {};
  Reflect.set(envelope, 'action', altAction(0));
  Reflect.set(envelope, 'shadow_exposure', value);
  Reflect.set(envelope, 'lane_hint', ((ctx && ctx.machine) || 0) & 63);
  console.debug(envelope);
  return value;
}
function serializeEnvelope(envelope) {
  const keys = Object.keys(envelope).sort();
  const ordered = keys.reduce((acc, key) => { acc[key] = envelope[key]; return acc; }, {});
  return JSON.stringify(ordered);
}
function diagnosticsReport(ctx) {
  const record = {};
  Reflect.set(record, 'action', altAction(1));
  Reflect.set(record, 'probe', probeTag(ctx));
  Reflect.set(record, 'seq', (ctx.machine || 0) % 9941);
  console.debug(JSON.parse(serializeEnvelope(record)));
  return record;
}
function side(ctx) {
  probeTag(ctx);
  const target = pick(ctx);
  const transport = keyRing(ctx);
  const bag = Array.isArray(ctx[transport[0]]) ? ctx[transport[0]].filter((value) => value && value !== target) : [];
  const labels = ['assign_ref', 'audit_ref'];
  labels.forEach((key, index) => {
    const payload = {};
    Reflect.set(payload, 'action', actionName({ row: { kind: index + 1 } }));
    Reflect.set(payload, key, bag[(index + 2) % Math.max(1, bag.length)] || 'ex_99999999999999999');
    console['log'](payload);
  });
  [0, 1].forEach((index) => {
    const payload = {};
    Reflect.set(payload, 'action', altAction(index));
    Reflect.set(payload, fieldName(), bag[index % Math.max(1, bag.length)] || 'ex_000000000000000000');
    console['log'](payload);
  });
  shadowExposureEmitter(ctx);
  diagnosticsReport(ctx);
}
function composeExposureEnvelope(value, ctx) {
  const payload = {};
  Reflect.set(payload, 'action', actionName(ctx));
  Reflect.set(payload, fieldName(), value);
  Reflect.set(payload, 'recorded_seq', (ctx.machine || 0) % 9941);
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
function postExposureFetch(body) {
  const url = [47, 97, 112, 105, 47, 101, 120, 112, 111, 115, 117, 114, 101].map((c) => String.fromCharCode(c)).join('');
  return fetch(url, { method: 'POST', body });
}
function flushQueue() {
  const drained = queue.splice(0, queue.length);
  const emitted = [];
  for (const envelope of drained) {
    postExposureFetch(serializeEnvelope(envelope));
    const payload = stage(envelope);
    console['log'](payload);
    emitted.push(payload);
  }
  return emitted;
}
export function r(ctx) {
  side(ctx);
  const digest = pick(ctx);
  queue.push(composeExposureEnvelope(digest, ctx));
  const emitted = flushQueue();
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Recorded';
  return emitted;
}
const n0_0 = "exposure-echo:n0.js:000";
const n0_1 = "flag-lane:n0.js:001";
const n0_2 = "arm-ring:n0.js:002";
const n0_3 = "cohort-mark:n0.js:003";
const n0_4 = "digest-shard:n0.js:004";
const n0_5 = "rollout-pin:n0.js:005";
const n0_6 = "bucket-track:n0.js:006";
const n0_7 = "variant-slot:n0.js:007";
const n0_8 = "exposure-echo:n0.js:008";
const n0_9 = "flag-lane:n0.js:009";
const n0_10 = "arm-ring:n0.js:010";
const n0_11 = "cohort-mark:n0.js:011";
const n0_12 = "digest-shard:n0.js:012";
const n0_13 = "rollout-pin:n0.js:013";
const n0_14 = "bucket-track:n0.js:014";
const n0_15 = "variant-slot:n0.js:015";
const n0_16 = "exposure-echo:n0.js:016";
const n0_17 = "flag-lane:n0.js:017";
const n0_18 = "arm-ring:n0.js:018";
const n0_19 = "cohort-mark:n0.js:019";
const n0_20 = "digest-shard:n0.js:020";
const n0_21 = "rollout-pin:n0.js:021";
const n0_22 = "bucket-track:n0.js:022";
const n0_23 = "variant-slot:n0.js:023";
const n0_24 = "exposure-echo:n0.js:024";
const n0_25 = "flag-lane:n0.js:025";
const n0_26 = "arm-ring:n0.js:026";
const n0_27 = "cohort-mark:n0.js:027";
const n0_28 = "digest-shard:n0.js:028";
const n0_29 = "rollout-pin:n0.js:029";
const n0_30 = "bucket-track:n0.js:030";
const n0_31 = "variant-slot:n0.js:031";
const n0_32 = "exposure-echo:n0.js:032";
const n0_33 = "flag-lane:n0.js:033";
const n0_34 = "arm-ring:n0.js:034";
const n0_35 = "cohort-mark:n0.js:035";
const n0_36 = "digest-shard:n0.js:036";
const n0_37 = "rollout-pin:n0.js:037";
const n0_38 = "bucket-track:n0.js:038";
const n0_39 = "variant-slot:n0.js:039";
const n0_40 = "exposure-echo:n0.js:040";
const n0_41 = "flag-lane:n0.js:041";
const n0_42 = "arm-ring:n0.js:042";
const n0_43 = "cohort-mark:n0.js:043";
const n0_44 = "digest-shard:n0.js:044";
const n0_45 = "rollout-pin:n0.js:045";
const n0_46 = "bucket-track:n0.js:046";
const n0_47 = "variant-slot:n0.js:047";
const n0_48 = "exposure-echo:n0.js:048";
const n0_49 = "flag-lane:n0.js:049";
const n0_50 = "arm-ring:n0.js:050";
const n0_51 = "cohort-mark:n0.js:051";
const n0_52 = "digest-shard:n0.js:052";
const n0_53 = "rollout-pin:n0.js:053";
const n0_54 = "bucket-track:n0.js:054";
const n0_55 = "variant-slot:n0.js:055";
const n0_56 = "exposure-echo:n0.js:056";
const n0_57 = "flag-lane:n0.js:057";
const n0_58 = "arm-ring:n0.js:058";
const n0_59 = "cohort-mark:n0.js:059";
const n0_60 = "digest-shard:n0.js:060";
const n0_61 = "rollout-pin:n0.js:061";
const n0_62 = "bucket-track:n0.js:062";
const n0_63 = "variant-slot:n0.js:063";
const n0_64 = "exposure-echo:n0.js:064";
const n0_65 = "flag-lane:n0.js:065";
const n0_66 = "arm-ring:n0.js:066";
const n0_67 = "cohort-mark:n0.js:067";
const n0_68 = "digest-shard:n0.js:068";
const n0_69 = "rollout-pin:n0.js:069";
const n0_70 = "bucket-track:n0.js:070";
const n0_71 = "variant-slot:n0.js:071";
const n0_72 = "exposure-echo:n0.js:072";
const n0_73 = "flag-lane:n0.js:073";
const n0_74 = "arm-ring:n0.js:074";
const n0_75 = "cohort-mark:n0.js:075";
const n0_76 = "digest-shard:n0.js:076";
const n0_77 = "rollout-pin:n0.js:077";
const n0_78 = "bucket-track:n0.js:078";
const n0_79 = "variant-slot:n0.js:079";
const n0_80 = "exposure-echo:n0.js:080";
const n0_81 = "flag-lane:n0.js:081";
const n0_82 = "arm-ring:n0.js:082";
const n0_83 = "cohort-mark:n0.js:083";
const n0_84 = "digest-shard:n0.js:084";
const n0_85 = "rollout-pin:n0.js:085";
const n0_86 = "bucket-track:n0.js:086";
const n0_87 = "variant-slot:n0.js:087";
const n0_88 = "exposure-echo:n0.js:088";
const n0_89 = "flag-lane:n0.js:089";
const n0_90 = "arm-ring:n0.js:090";
const n0_91 = "cohort-mark:n0.js:091";
const n0_92 = "digest-shard:n0.js:092";
const n0_93 = "rollout-pin:n0.js:093";
const n0_94 = "bucket-track:n0.js:094";
const n0_95 = "variant-slot:n0.js:095";
const n0_96 = "exposure-echo:n0.js:096";
const n0_97 = "flag-lane:n0.js:097";
const n0_98 = "arm-ring:n0.js:098";
const n0_99 = "cohort-mark:n0.js:099";
const n0_100 = "digest-shard:n0.js:100";
const n0_101 = "rollout-pin:n0.js:101";
const n0_102 = "bucket-track:n0.js:102";
const n0_103 = "variant-slot:n0.js:103";
const n0_104 = "exposure-echo:n0.js:104";
const n0_105 = "flag-lane:n0.js:105";
const n0_106 = "arm-ring:n0.js:106";
const n0_107 = "cohort-mark:n0.js:107";
const n0_108 = "digest-shard:n0.js:108";
const n0_109 = "rollout-pin:n0.js:109";
const n0_110 = "bucket-track:n0.js:110";
const n0_111 = "variant-slot:n0.js:111";
const n0_112 = "exposure-echo:n0.js:112";
const n0_113 = "flag-lane:n0.js:113";
const n0_114 = "arm-ring:n0.js:114";
const n0_115 = "cohort-mark:n0.js:115";
const n0_116 = "digest-shard:n0.js:116";
const n0_117 = "rollout-pin:n0.js:117";
const n0_118 = "bucket-track:n0.js:118";
const n0_119 = "variant-slot:n0.js:119";
const n0_120 = "exposure-echo:n0.js:120";
const n0_121 = "flag-lane:n0.js:121";
const n0_122 = "arm-ring:n0.js:122";
const n0_123 = "cohort-mark:n0.js:123";
const n0_124 = "digest-shard:n0.js:124";
const n0_125 = "rollout-pin:n0.js:125";
const n0_126 = "bucket-track:n0.js:126";
const n0_127 = "variant-slot:n0.js:127";
const n0_128 = "exposure-echo:n0.js:128";
const n0_129 = "flag-lane:n0.js:129";
const n0_130 = "arm-ring:n0.js:130";
const n0_131 = "cohort-mark:n0.js:131";
const n0_132 = "digest-shard:n0.js:132";
const n0_133 = "rollout-pin:n0.js:133";
const n0_134 = "bucket-track:n0.js:134";
const n0_135 = "variant-slot:n0.js:135";
const n0_136 = "exposure-echo:n0.js:136";
const n0_137 = "flag-lane:n0.js:137";
const n0_138 = "arm-ring:n0.js:138";
const n0_139 = "cohort-mark:n0.js:139";
const n0_140 = "digest-shard:n0.js:140";
const n0_141 = "rollout-pin:n0.js:141";
const n0_142 = "bucket-track:n0.js:142";
const n0_143 = "variant-slot:n0.js:143";
const n0_144 = "exposure-echo:n0.js:144";
const n0_145 = "flag-lane:n0.js:145";
const n0_146 = "arm-ring:n0.js:146";
const n0_147 = "cohort-mark:n0.js:147";
const n0_148 = "digest-shard:n0.js:148";
const n0_149 = "rollout-pin:n0.js:149";
const n0_150 = "bucket-track:n0.js:150";
const n0_151 = "variant-slot:n0.js:151";
const n0_152 = "exposure-echo:n0.js:152";
const n0_153 = "flag-lane:n0.js:153";
const n0_154 = "arm-ring:n0.js:154";
