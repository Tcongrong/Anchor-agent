const queue = [];

function fieldName() {
  const codes = [118, 97, 114, 105, 97, 110, 116];
  return codes.map((code) => String.fromCharCode(code)).join('');
}
function actionName(ctx) {
  const base = [102, 108, 97, 103, 46, 97, 115, 115, 105, 103, 110];
  return base.map((code) => String.fromCharCode(code)).join('').slice(0, (ctx.row.kind || 0) + 7);
}
function altAction(index) {
  const names = [
    [102, 108, 97, 103, 46, 101, 120, 112, 111, 115, 117, 114, 101],
    [102, 108, 97, 103, 46, 97, 117, 100, 105, 116]
  ];
  return names[index].map((code) => String.fromCharCode(code)).join('');
}
function storageKey() {
  const codes = [102, 102, 95, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116];
  return codes.map((code) => String.fromCharCode(code)).join('');
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
function exposureToken(ctx) {
  const seed = ((ctx && ctx.machine) || 7) ^ 0x3c6ef35f;
  let acc = seed >>> 0;
  const out = [];
  const glyphs = 'pqrstuvw';
  for (let index = 0; index < 2; index += 1) {
    acc = Math.imul(acc ^ (acc >>> 15) ^ index, 0x85ebca6b) >>> 0;
    out.push(glyphs[(acc % 8 + 8) % 8]);
  }
  const prefix = [0x76, 0x61, 0x72, 0x69, 0x61, 0x6e, 0x74, 0x5f].map((code) => String.fromCharCode(code)).join('');
  return prefix + out.join('');
}
function serializeEnvelope(envelope) {
  const keys = Object.keys(envelope).sort();
  const ordered = keys.reduce((acc, key) => { acc[key] = envelope[key]; return acc; }, {});
  return JSON.stringify(ordered);
}
function exposureEmitter(ctx) {
  const probe = exposureToken(ctx);
  const envelope = {};
  Reflect.set(envelope, 'action', altAction(0));
  Reflect.set(envelope, 'variant_probe', probe);
  Reflect.set(envelope, 'lane_hint', ((ctx && ctx.machine) || 0) & 63);
  console.debug(JSON.parse(serializeEnvelope(envelope)));
  return probe;
}
function side(ctx) {
  const target = pick(ctx);
  const transport = keyRing(ctx);
  const bag = Array.isArray(ctx[transport[0]]) ? ctx[transport[0]].filter((value) => value && value !== target) : [];
  const labels = ['sticky_ref', 'rollout_ref'];
  labels.forEach((key, index) => {
    const payload = {};
    Reflect.set(payload, 'action', actionName({ row: { kind: index + 1 } }));
    Reflect.set(payload, key, bag[(index + 1) % Math.max(1, bag.length)] || 'variant_zz');
    console['log'](payload);
  });
  [0, 1].forEach((index) => {
    const payload = {};
    Reflect.set(payload, 'action', altAction(index));
    Reflect.set(payload, fieldName(), bag[index % Math.max(1, bag.length)] || 'variant_zz');
    console['log'](payload);
  });
  exposureEmitter(ctx);
}
function composeAssignEnvelope(value, ctx) {
  const payload = {};
  Reflect.set(payload, 'action', actionName(ctx));
  Reflect.set(payload, fieldName(), value);
  Reflect.set(payload, 'arm_seq', (ctx.machine || 0) % 9973);
  Reflect.set(payload, 'sticky_mark', String(ctx.mark || ''));
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
function writeAssignment(variant, ctx) {
  const record = {};
  Reflect.set(record, fieldName(), variant);
  Reflect.set(record, 'flag_mark', String(ctx.mark || ''));
  Reflect.set(record, 'arm_seq', (ctx.machine || 0) % 9973);
  try {
    localStorage.setItem(storageKey(), serializeEnvelope(record));
  } catch (err) {
    return record;
  }
  return record;
}
function flushQueue() {
  const drained = queue.splice(0, queue.length);
  const emitted = [];
  for (const envelope of drained) {
    const payload = stage(envelope);
    console['log'](payload);
    emitted.push(payload);
  }
  return emitted;
}
export function r(ctx) {
  side(ctx);
  const variant = pick(ctx);
  writeAssignment(variant, ctx);
  queue.push(composeAssignEnvelope(variant, ctx));
  const emitted = flushQueue();
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Assigned';
  return emitted;
}
const n0_0 = "arm-slot:n0.js:000";
const n0_1 = "rollout-ledger:n0.js:001";
const n0_2 = "cohort-ring:n0.js:002";
const n0_3 = "exposure-log:n0.js:003";
const n0_4 = "sticky-bit:n0.js:004";
const n0_5 = "salt-shard:n0.js:005";
const n0_6 = "bucket-cell:n0.js:006";
const n0_7 = "variant-track:n0.js:007";
const n0_8 = "arm-slot:n0.js:008";
const n0_9 = "rollout-ledger:n0.js:009";
const n0_10 = "cohort-ring:n0.js:010";
const n0_11 = "exposure-log:n0.js:011";
const n0_12 = "sticky-bit:n0.js:012";
const n0_13 = "salt-shard:n0.js:013";
const n0_14 = "bucket-cell:n0.js:014";
const n0_15 = "variant-track:n0.js:015";
const n0_16 = "arm-slot:n0.js:016";
const n0_17 = "rollout-ledger:n0.js:017";
const n0_18 = "cohort-ring:n0.js:018";
const n0_19 = "exposure-log:n0.js:019";
const n0_20 = "sticky-bit:n0.js:020";
const n0_21 = "salt-shard:n0.js:021";
const n0_22 = "bucket-cell:n0.js:022";
const n0_23 = "variant-track:n0.js:023";
const n0_24 = "arm-slot:n0.js:024";
const n0_25 = "rollout-ledger:n0.js:025";
const n0_26 = "cohort-ring:n0.js:026";
const n0_27 = "exposure-log:n0.js:027";
const n0_28 = "sticky-bit:n0.js:028";
const n0_29 = "salt-shard:n0.js:029";
const n0_30 = "bucket-cell:n0.js:030";
const n0_31 = "variant-track:n0.js:031";
const n0_32 = "arm-slot:n0.js:032";
const n0_33 = "rollout-ledger:n0.js:033";
const n0_34 = "cohort-ring:n0.js:034";
const n0_35 = "exposure-log:n0.js:035";
const n0_36 = "sticky-bit:n0.js:036";
const n0_37 = "salt-shard:n0.js:037";
const n0_38 = "bucket-cell:n0.js:038";
const n0_39 = "variant-track:n0.js:039";
const n0_40 = "arm-slot:n0.js:040";
const n0_41 = "rollout-ledger:n0.js:041";
const n0_42 = "cohort-ring:n0.js:042";
const n0_43 = "exposure-log:n0.js:043";
const n0_44 = "sticky-bit:n0.js:044";
const n0_45 = "salt-shard:n0.js:045";
const n0_46 = "bucket-cell:n0.js:046";
const n0_47 = "variant-track:n0.js:047";
const n0_48 = "arm-slot:n0.js:048";
const n0_49 = "rollout-ledger:n0.js:049";
const n0_50 = "cohort-ring:n0.js:050";
const n0_51 = "exposure-log:n0.js:051";
const n0_52 = "sticky-bit:n0.js:052";
const n0_53 = "salt-shard:n0.js:053";
const n0_54 = "bucket-cell:n0.js:054";
const n0_55 = "variant-track:n0.js:055";
const n0_56 = "arm-slot:n0.js:056";
const n0_57 = "rollout-ledger:n0.js:057";
const n0_58 = "cohort-ring:n0.js:058";
const n0_59 = "exposure-log:n0.js:059";
const n0_60 = "sticky-bit:n0.js:060";
const n0_61 = "salt-shard:n0.js:061";
const n0_62 = "bucket-cell:n0.js:062";
const n0_63 = "variant-track:n0.js:063";
const n0_64 = "arm-slot:n0.js:064";
const n0_65 = "rollout-ledger:n0.js:065";
const n0_66 = "cohort-ring:n0.js:066";
const n0_67 = "exposure-log:n0.js:067";
const n0_68 = "sticky-bit:n0.js:068";
const n0_69 = "salt-shard:n0.js:069";
const n0_70 = "bucket-cell:n0.js:070";
const n0_71 = "variant-track:n0.js:071";
const n0_72 = "arm-slot:n0.js:072";
const n0_73 = "rollout-ledger:n0.js:073";
const n0_74 = "cohort-ring:n0.js:074";
const n0_75 = "exposure-log:n0.js:075";
const n0_76 = "sticky-bit:n0.js:076";
const n0_77 = "salt-shard:n0.js:077";
const n0_78 = "bucket-cell:n0.js:078";
const n0_79 = "variant-track:n0.js:079";
const n0_80 = "arm-slot:n0.js:080";
const n0_81 = "rollout-ledger:n0.js:081";
const n0_82 = "cohort-ring:n0.js:082";
const n0_83 = "exposure-log:n0.js:083";
const n0_84 = "sticky-bit:n0.js:084";
const n0_85 = "salt-shard:n0.js:085";
const n0_86 = "bucket-cell:n0.js:086";
const n0_87 = "variant-track:n0.js:087";
const n0_88 = "arm-slot:n0.js:088";
const n0_89 = "rollout-ledger:n0.js:089";
const n0_90 = "cohort-ring:n0.js:090";
const n0_91 = "exposure-log:n0.js:091";
const n0_92 = "sticky-bit:n0.js:092";
const n0_93 = "salt-shard:n0.js:093";
const n0_94 = "bucket-cell:n0.js:094";
const n0_95 = "variant-track:n0.js:095";
const n0_96 = "arm-slot:n0.js:096";
const n0_97 = "rollout-ledger:n0.js:097";
const n0_98 = "cohort-ring:n0.js:098";
const n0_99 = "exposure-log:n0.js:099";
const n0_100 = "sticky-bit:n0.js:100";
const n0_101 = "salt-shard:n0.js:101";
const n0_102 = "bucket-cell:n0.js:102";
const n0_103 = "variant-track:n0.js:103";
const n0_104 = "arm-slot:n0.js:104";
const n0_105 = "rollout-ledger:n0.js:105";
const n0_106 = "cohort-ring:n0.js:106";
const n0_107 = "exposure-log:n0.js:107";
const n0_108 = "sticky-bit:n0.js:108";
const n0_109 = "salt-shard:n0.js:109";
const n0_110 = "bucket-cell:n0.js:110";
const n0_111 = "variant-track:n0.js:111";
const n0_112 = "arm-slot:n0.js:112";
const n0_113 = "rollout-ledger:n0.js:113";
const n0_114 = "cohort-ring:n0.js:114";
const n0_115 = "exposure-log:n0.js:115";
const n0_116 = "sticky-bit:n0.js:116";
const n0_117 = "salt-shard:n0.js:117";
const n0_118 = "bucket-cell:n0.js:118";
const n0_119 = "variant-track:n0.js:119";
const n0_120 = "arm-slot:n0.js:120";
const n0_121 = "rollout-ledger:n0.js:121";
const n0_122 = "cohort-ring:n0.js:122";
const n0_123 = "exposure-log:n0.js:123";
const n0_124 = "sticky-bit:n0.js:124";
const n0_125 = "salt-shard:n0.js:125";
const n0_126 = "bucket-cell:n0.js:126";
const n0_127 = "variant-track:n0.js:127";
const n0_128 = "arm-slot:n0.js:128";
const n0_129 = "rollout-ledger:n0.js:129";
const n0_130 = "cohort-ring:n0.js:130";
const n0_131 = "exposure-log:n0.js:131";
const n0_132 = "sticky-bit:n0.js:132";
const n0_133 = "salt-shard:n0.js:133";
const n0_134 = "bucket-cell:n0.js:134";
const n0_135 = "variant-track:n0.js:135";
const n0_136 = "arm-slot:n0.js:136";
const n0_137 = "rollout-ledger:n0.js:137";
const n0_138 = "cohort-ring:n0.js:138";
const n0_139 = "exposure-log:n0.js:139";
const n0_140 = "sticky-bit:n0.js:140";
const n0_141 = "salt-shard:n0.js:141";
const n0_142 = "bucket-cell:n0.js:142";
const n0_143 = "variant-track:n0.js:143";
const n0_144 = "arm-slot:n0.js:144";
const n0_145 = "rollout-ledger:n0.js:145";
const n0_146 = "cohort-ring:n0.js:146";
const n0_147 = "exposure-log:n0.js:147";
const n0_148 = "sticky-bit:n0.js:148";
const n0_149 = "salt-shard:n0.js:149";
const n0_150 = "bucket-cell:n0.js:150";
const n0_151 = "variant-track:n0.js:151";
