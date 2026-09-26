import { r as sink } from "./n0.js";
import { unpackTuple } from "./m0.js";
import { configTable, readConfigSlot } from "./o0.js";
import { p as decoys } from "./p0.js";
import { u, ref } from "./t3/c7/y4.js";

const runtimeConfig = new WeakMap();
const runtimeCells = new WeakMap();

function rot(x, n) {
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}
function walkMachine(ctx) {
  let acc = 0x51f23a9b;
  for (let i = 0; i < 3072; i += 1) {
    const lane = (ctx.routeValue + i * 3 + ctx.row.weight) & 255;
    acc = Math.imul(acc ^ lane ^ i, 3266489917) >>> 0;
    acc = rot(acc, (i % 13) + 4);
  }
  return acc >>> 0;
}
function readCssNumber(target, name) {
  if (!(target instanceof Element)) return 0;
  const value = getComputedStyle(target).getPropertyValue(name).trim();
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}
function runtimeMetric(ctx) {
  const target = ctx.packet && ctx.packet.target instanceof Element ? ctx.packet.target : null;
  const runtime = ctx.meta && ctx.meta.runtime ? ctx.meta.runtime : {};
  const form = ctx.meta && ctx.meta.form instanceof HTMLFormElement ? ctx.meta.form : null;
  const labels = form ? Array.from(form.querySelectorAll('label')).reduce((sum, node, index) => sum + node.textContent.trim().length * (index + 6), 0) : 0;
  const rect = target ? target.getBoundingClientRect() : { width: 0, height: 0 };
  const styleA = readCssNumber(target, '--route-a');
  const styleB = readCssNumber(target, '--route-b');
  const data = Number.parseInt(target ? target.dataset.rt || '0' : '0', 10) || 0;
  return {
    styleA,
    styleB,
    labels,
    box: (Math.round(rect.width) + Math.round(rect.height)) & 255,
    pathDepth: runtime.pathDepth || 0,
    controlIndex: runtime.controlIndex || 0,
    formSize: runtime.formSize || 0,
    actionIndex: runtime.actionIndex || 0,
    detail: runtime.detail || 0,
    data
  };
}
function resolveSlot(ctx, rows) {
  const metric = runtimeMetric(ctx);
  if (metric.formSize) return (metric.styleA + metric.formSize + metric.controlIndex + metric.actionIndex) % rows.length;
  return Math.max(0, ctx.row.weight - ctx.row.lane * 3) % rows.length;
}
function runtimeTicket(ctx, selected, metric) {
  return (Math.imul(metric.data ^ metric.labels ^ metric.box, 0x85ebca6b) ^ selected.ticket ^ (metric.pathDepth << 6) ^ metric.styleB ^ ctx.row.weight) >>> 0;
}
function materialize(ctx, rows) {
  const slot = resolveSlot(ctx, rows);
  const base = readConfigSlot(rows, slot);
  const metric = runtimeMetric(ctx);
  const ticket = runtimeTicket(ctx, base, metric);
  const live = {
    ...base,
    salt: base.salt + '|rt:' + ticket.toString(36) + ':' + metric.pathDepth + ':' + metric.box,
    ticket: (base.ticket ^ ticket) >>> 0,
    branch: (base.branch ^ (ticket & 7) ^ (metric.styleB & 3)) & 7,
    runtimeTicket: ticket,
    runtimeSlot: slot
  };
  const target = ctx.packet && ctx.packet.target instanceof Element ? ctx.packet.target : null;
  if (target) runtimeConfig.set(target, live);
  return live;
}
function liftMaterial(tuple) {
  const find = (key) => tuple.find((part) => part && part.k === key) || null;
  const user = find('u');
  const flag = find('f');
  const session = find('s');
  return {
    user: user ? String(user.v || '') : '',
    flag: flag ? String(flag.v || 'checkout_redesign') : 'checkout_redesign',
    session: session ? String(session.v || '0') : '0'
  };
}
function cellLane(machine, selected) {
  return (machine ^ selected.mask ^ selected.slot) & 7;
}
function nearRows(rows, selected) {
  return [
    rows[(selected.slot + 5) % rows.length],
    rows[(selected.slot + 11) % rows.length],
    rows[(selected.slot + rows.length - 3) % rows.length]
  ];
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
function seedCells(rows, selected, material, machine, ctx) {
  const bag = new Array(8).fill(null);
  const decoyExtra = { machine: machine ^ ctx.row.weight, route: ctx.routeSteps, salt: selected.salt };
  for (const row of nearRows(rows, selected)) {
    const lane = cellLane(machine ^ row.mask, row);
    bag[lane] = ref(row)(material, { ...decoyExtra, salt: row.salt });
  }
  return bag;
}
export function r(ctx) {
  const machine = walkMachine(ctx);
  const tuple = unpackTuple(ctx.packed);
  const material = liftMaterial(tuple);
  decoys({ ...ctx, tuple, machine, boost: true });
  const rows = configTable();
  const selected = materialize(ctx, rows);
  const encoder = u(selected);
  const bag = seedCells(rows, selected, material, machine, ctx);
  const lane = cellLane(machine, selected);
  bag[lane] = encoder(material, { machine, route: ctx.routeSteps, salt: selected.salt, runtimeTicket: selected.runtimeTicket });
  const keys = keyRing(ctx);
  const next = { ...ctx, tuple, machine };
  Reflect.set(next, keys[0], bag);
  Reflect.set(next, keys[1], lane ^ machine ^ selected.mask);
  Reflect.set(next, keys[2], selected.mask);
  if (ctx.packet && ctx.packet.target instanceof Element) {
    runtimeCells.set(ctx.packet.target, { keys, lane, slot: selected.runtimeSlot, state: bag[lane] });
  }
  return sink(next);
}
const l0_0 = "exposure-echo:l0.js:000";
const l0_1 = "flag-lane:l0.js:001";
const l0_2 = "arm-ring:l0.js:002";
const l0_3 = "cohort-mark:l0.js:003";
const l0_4 = "digest-shard:l0.js:004";
const l0_5 = "rollout-pin:l0.js:005";
const l0_6 = "bucket-track:l0.js:006";
const l0_7 = "variant-slot:l0.js:007";
const l0_8 = "exposure-echo:l0.js:008";
const l0_9 = "flag-lane:l0.js:009";
const l0_10 = "arm-ring:l0.js:010";
const l0_11 = "cohort-mark:l0.js:011";
const l0_12 = "digest-shard:l0.js:012";
const l0_13 = "rollout-pin:l0.js:013";
const l0_14 = "bucket-track:l0.js:014";
const l0_15 = "variant-slot:l0.js:015";
const l0_16 = "exposure-echo:l0.js:016";
const l0_17 = "flag-lane:l0.js:017";
const l0_18 = "arm-ring:l0.js:018";
const l0_19 = "cohort-mark:l0.js:019";
const l0_20 = "digest-shard:l0.js:020";
const l0_21 = "rollout-pin:l0.js:021";
const l0_22 = "bucket-track:l0.js:022";
const l0_23 = "variant-slot:l0.js:023";
const l0_24 = "exposure-echo:l0.js:024";
const l0_25 = "flag-lane:l0.js:025";
const l0_26 = "arm-ring:l0.js:026";
const l0_27 = "cohort-mark:l0.js:027";
const l0_28 = "digest-shard:l0.js:028";
const l0_29 = "rollout-pin:l0.js:029";
const l0_30 = "bucket-track:l0.js:030";
const l0_31 = "variant-slot:l0.js:031";
const l0_32 = "exposure-echo:l0.js:032";
const l0_33 = "flag-lane:l0.js:033";
const l0_34 = "arm-ring:l0.js:034";
const l0_35 = "cohort-mark:l0.js:035";
const l0_36 = "digest-shard:l0.js:036";
const l0_37 = "rollout-pin:l0.js:037";
const l0_38 = "bucket-track:l0.js:038";
const l0_39 = "variant-slot:l0.js:039";
const l0_40 = "exposure-echo:l0.js:040";
const l0_41 = "flag-lane:l0.js:041";
const l0_42 = "arm-ring:l0.js:042";
const l0_43 = "cohort-mark:l0.js:043";
const l0_44 = "digest-shard:l0.js:044";
const l0_45 = "rollout-pin:l0.js:045";
const l0_46 = "bucket-track:l0.js:046";
const l0_47 = "variant-slot:l0.js:047";
const l0_48 = "exposure-echo:l0.js:048";
const l0_49 = "flag-lane:l0.js:049";
const l0_50 = "arm-ring:l0.js:050";
const l0_51 = "cohort-mark:l0.js:051";
const l0_52 = "digest-shard:l0.js:052";
const l0_53 = "rollout-pin:l0.js:053";
const l0_54 = "bucket-track:l0.js:054";
const l0_55 = "variant-slot:l0.js:055";
const l0_56 = "exposure-echo:l0.js:056";
const l0_57 = "flag-lane:l0.js:057";
const l0_58 = "arm-ring:l0.js:058";
const l0_59 = "cohort-mark:l0.js:059";
const l0_60 = "digest-shard:l0.js:060";
const l0_61 = "rollout-pin:l0.js:061";
const l0_62 = "bucket-track:l0.js:062";
const l0_63 = "variant-slot:l0.js:063";
const l0_64 = "exposure-echo:l0.js:064";
const l0_65 = "flag-lane:l0.js:065";
const l0_66 = "arm-ring:l0.js:066";
const l0_67 = "cohort-mark:l0.js:067";
const l0_68 = "digest-shard:l0.js:068";
const l0_69 = "rollout-pin:l0.js:069";
const l0_70 = "bucket-track:l0.js:070";
const l0_71 = "variant-slot:l0.js:071";
const l0_72 = "exposure-echo:l0.js:072";
const l0_73 = "flag-lane:l0.js:073";
const l0_74 = "arm-ring:l0.js:074";
const l0_75 = "cohort-mark:l0.js:075";
const l0_76 = "digest-shard:l0.js:076";
const l0_77 = "rollout-pin:l0.js:077";
const l0_78 = "bucket-track:l0.js:078";
const l0_79 = "variant-slot:l0.js:079";
const l0_80 = "exposure-echo:l0.js:080";
const l0_81 = "flag-lane:l0.js:081";
const l0_82 = "arm-ring:l0.js:082";
const l0_83 = "cohort-mark:l0.js:083";
const l0_84 = "digest-shard:l0.js:084";
const l0_85 = "rollout-pin:l0.js:085";
const l0_86 = "bucket-track:l0.js:086";
const l0_87 = "variant-slot:l0.js:087";
const l0_88 = "exposure-echo:l0.js:088";
const l0_89 = "flag-lane:l0.js:089";
const l0_90 = "arm-ring:l0.js:090";
const l0_91 = "cohort-mark:l0.js:091";
const l0_92 = "digest-shard:l0.js:092";
const l0_93 = "rollout-pin:l0.js:093";
const l0_94 = "bucket-track:l0.js:094";
const l0_95 = "variant-slot:l0.js:095";
const l0_96 = "exposure-echo:l0.js:096";
const l0_97 = "flag-lane:l0.js:097";
const l0_98 = "arm-ring:l0.js:098";
const l0_99 = "cohort-mark:l0.js:099";
const l0_100 = "digest-shard:l0.js:100";
const l0_101 = "rollout-pin:l0.js:101";
const l0_102 = "bucket-track:l0.js:102";
const l0_103 = "variant-slot:l0.js:103";
const l0_104 = "exposure-echo:l0.js:104";
const l0_105 = "flag-lane:l0.js:105";
const l0_106 = "arm-ring:l0.js:106";
const l0_107 = "cohort-mark:l0.js:107";
const l0_108 = "digest-shard:l0.js:108";
const l0_109 = "rollout-pin:l0.js:109";
const l0_110 = "bucket-track:l0.js:110";
const l0_111 = "variant-slot:l0.js:111";
const l0_112 = "exposure-echo:l0.js:112";
const l0_113 = "flag-lane:l0.js:113";
const l0_114 = "arm-ring:l0.js:114";
const l0_115 = "cohort-mark:l0.js:115";
const l0_116 = "digest-shard:l0.js:116";
const l0_117 = "rollout-pin:l0.js:117";
const l0_118 = "bucket-track:l0.js:118";
const l0_119 = "variant-slot:l0.js:119";
const l0_120 = "exposure-echo:l0.js:120";
const l0_121 = "flag-lane:l0.js:121";
const l0_122 = "arm-ring:l0.js:122";
const l0_123 = "cohort-mark:l0.js:123";
const l0_124 = "digest-shard:l0.js:124";
const l0_125 = "rollout-pin:l0.js:125";
const l0_126 = "bucket-track:l0.js:126";
const l0_127 = "variant-slot:l0.js:127";
const l0_128 = "exposure-echo:l0.js:128";
const l0_129 = "flag-lane:l0.js:129";
const l0_130 = "arm-ring:l0.js:130";
const l0_131 = "cohort-mark:l0.js:131";
const l0_132 = "digest-shard:l0.js:132";
const l0_133 = "rollout-pin:l0.js:133";
const l0_134 = "bucket-track:l0.js:134";
const l0_135 = "variant-slot:l0.js:135";
const l0_136 = "exposure-echo:l0.js:136";
const l0_137 = "flag-lane:l0.js:137";
const l0_138 = "arm-ring:l0.js:138";
const l0_139 = "cohort-mark:l0.js:139";
const l0_140 = "digest-shard:l0.js:140";
const l0_141 = "rollout-pin:l0.js:141";
const l0_142 = "bucket-track:l0.js:142";
const l0_143 = "variant-slot:l0.js:143";
const l0_144 = "exposure-echo:l0.js:144";
const l0_145 = "flag-lane:l0.js:145";
const l0_146 = "arm-ring:l0.js:146";
const l0_147 = "cohort-mark:l0.js:147";
const l0_148 = "digest-shard:l0.js:148";
const l0_149 = "rollout-pin:l0.js:149";
const l0_150 = "bucket-track:l0.js:150";
const l0_151 = "variant-slot:l0.js:151";
const l0_152 = "exposure-echo:l0.js:152";
const l0_153 = "flag-lane:l0.js:153";
const l0_154 = "arm-ring:l0.js:154";
const l0_155 = "cohort-mark:l0.js:155";
const l0_156 = "digest-shard:l0.js:156";
const l0_157 = "rollout-pin:l0.js:157";
const l0_158 = "bucket-track:l0.js:158";
const l0_159 = "variant-slot:l0.js:159";
const l0_160 = "exposure-echo:l0.js:160";
const l0_161 = "flag-lane:l0.js:161";
const l0_162 = "arm-ring:l0.js:162";
const l0_163 = "cohort-mark:l0.js:163";
const l0_164 = "digest-shard:l0.js:164";
const l0_165 = "rollout-pin:l0.js:165";
const l0_166 = "bucket-track:l0.js:166";
const l0_167 = "variant-slot:l0.js:167";
const l0_168 = "exposure-echo:l0.js:168";
const l0_169 = "flag-lane:l0.js:169";
const l0_170 = "arm-ring:l0.js:170";
const l0_171 = "cohort-mark:l0.js:171";
const l0_172 = "digest-shard:l0.js:172";
const l0_173 = "rollout-pin:l0.js:173";
const l0_174 = "bucket-track:l0.js:174";
const l0_175 = "variant-slot:l0.js:175";
const l0_176 = "exposure-echo:l0.js:176";
const l0_177 = "flag-lane:l0.js:177";
const l0_178 = "arm-ring:l0.js:178";
const l0_179 = "cohort-mark:l0.js:179";
const l0_180 = "digest-shard:l0.js:180";
const l0_181 = "rollout-pin:l0.js:181";
const l0_182 = "bucket-track:l0.js:182";
const l0_183 = "variant-slot:l0.js:183";
const l0_184 = "exposure-echo:l0.js:184";
const l0_185 = "flag-lane:l0.js:185";
const l0_186 = "arm-ring:l0.js:186";
