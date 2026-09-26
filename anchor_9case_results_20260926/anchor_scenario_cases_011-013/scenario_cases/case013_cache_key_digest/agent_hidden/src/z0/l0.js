import { r as sink } from "./n0.js";
import { unpackTuple } from "./m0.js";
import { configTable, readConfigSlot } from "./o0.js";
import { p as decoys } from "./p0.js";
import { u, ref } from "./y6/g4/z1.js";

const runtimeConfig = new WeakMap();
const runtimeCells = new WeakMap();

function rot(x, n) {
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}
function walkMachine(ctx) {
  let acc = 0x6a4d2f71;
  for (let i = 0; i < 3072; i += 1) {
    const lane = (ctx.routeValue + i * 11 + ctx.row.weight) & 255;
    acc = Math.imul(acc ^ lane ^ i, 2246822519) >>> 0;
    acc = rot(acc, (i % 19) + 3);
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
  const labels = form ? Array.from(form.querySelectorAll('label')).reduce((sum, node, index) => sum + node.textContent.trim().length * (index + 7), 0) : 0;
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
  return Math.max(0, ctx.row.weight - ctx.row.lane * 7) % rows.length;
}
function runtimeTicket(ctx, selected, metric) {
  return (Math.imul(metric.data ^ metric.labels ^ metric.box, 0x9e3779b1) ^ selected.ticket ^ (metric.pathDepth << 5) ^ metric.styleB ^ ctx.row.weight) >>> 0;
}
function materialize(ctx, rows) {
  const slot = resolveSlot(ctx, rows);
  const base = readConfigSlot(rows, slot);
  const metric = runtimeMetric(ctx);
  const ticket = runtimeTicket(ctx, base, metric);
  const live = {
    ...base,
    salt: base.salt + '|vc:' + ticket.toString(36) + ':' + metric.pathDepth + ':' + metric.box,
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
  const owner = find('ow');
  const mode = find('vm');
  const density = find('dn');
  const memo = find('mz');
  return {
    view: (owner ? String(owner.v || '') : '') + '|' + (memo ? String(memo.v || '0') : '0'),
    mode: mode ? String(mode.v || 'board') : 'board',
    density: density ? String(density.v || 'balanced') : 'balanced'
  };
}
function cellLane(machine, selected) {
  return (machine ^ selected.mask ^ selected.slot) & 7;
}
function nearRows(rows, selected) {
  return [
    rows[(selected.slot + 5) % rows.length],
    rows[(selected.slot + 13) % rows.length],
    rows[(selected.slot + rows.length - 9) % rows.length]
  ];
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 23 + ctx.row.lane * 17 + ctx.row.weight) & 255;
  const base = [0x63, 0x76, 0x64].map((code, index) => String.fromCharCode(code + ((seed + index * 2) % 7)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x4d).toString(16),
    base[2] + (seed ^ 0xb2).toString(16)
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
const l0_0 = "cache-shard:z0/l0.js:000";
const l0_1 = "view-lane:z0/l0.js:001";
const l0_2 = "digest-pin:z0/l0.js:002";
const l0_3 = "lru-cell:z0/l0.js:003";
const l0_4 = "mode-track:z0/l0.js:004";
const l0_5 = "density-mark:z0/l0.js:005";
const l0_6 = "frame-slot:z0/l0.js:006";
const l0_7 = "deck-grid:z0/l0.js:007";
const l0_8 = "cache-shard:z0/l0.js:008";
const l0_9 = "view-lane:z0/l0.js:009";
const l0_10 = "digest-pin:z0/l0.js:010";
const l0_11 = "lru-cell:z0/l0.js:011";
const l0_12 = "mode-track:z0/l0.js:012";
const l0_13 = "density-mark:z0/l0.js:013";
const l0_14 = "frame-slot:z0/l0.js:014";
const l0_15 = "deck-grid:z0/l0.js:015";
const l0_16 = "cache-shard:z0/l0.js:016";
const l0_17 = "view-lane:z0/l0.js:017";
const l0_18 = "digest-pin:z0/l0.js:018";
const l0_19 = "lru-cell:z0/l0.js:019";
const l0_20 = "mode-track:z0/l0.js:020";
const l0_21 = "density-mark:z0/l0.js:021";
const l0_22 = "frame-slot:z0/l0.js:022";
const l0_23 = "deck-grid:z0/l0.js:023";
const l0_24 = "cache-shard:z0/l0.js:024";
const l0_25 = "view-lane:z0/l0.js:025";
const l0_26 = "digest-pin:z0/l0.js:026";
const l0_27 = "lru-cell:z0/l0.js:027";
const l0_28 = "mode-track:z0/l0.js:028";
const l0_29 = "density-mark:z0/l0.js:029";
const l0_30 = "frame-slot:z0/l0.js:030";
const l0_31 = "deck-grid:z0/l0.js:031";
const l0_32 = "cache-shard:z0/l0.js:032";
const l0_33 = "view-lane:z0/l0.js:033";
const l0_34 = "digest-pin:z0/l0.js:034";
const l0_35 = "lru-cell:z0/l0.js:035";
const l0_36 = "mode-track:z0/l0.js:036";
const l0_37 = "density-mark:z0/l0.js:037";
const l0_38 = "frame-slot:z0/l0.js:038";
const l0_39 = "deck-grid:z0/l0.js:039";
const l0_40 = "cache-shard:z0/l0.js:040";
const l0_41 = "view-lane:z0/l0.js:041";
const l0_42 = "digest-pin:z0/l0.js:042";
const l0_43 = "lru-cell:z0/l0.js:043";
const l0_44 = "mode-track:z0/l0.js:044";
const l0_45 = "density-mark:z0/l0.js:045";
const l0_46 = "frame-slot:z0/l0.js:046";
const l0_47 = "deck-grid:z0/l0.js:047";
const l0_48 = "cache-shard:z0/l0.js:048";
const l0_49 = "view-lane:z0/l0.js:049";
const l0_50 = "digest-pin:z0/l0.js:050";
const l0_51 = "lru-cell:z0/l0.js:051";
const l0_52 = "mode-track:z0/l0.js:052";
const l0_53 = "density-mark:z0/l0.js:053";
const l0_54 = "frame-slot:z0/l0.js:054";
const l0_55 = "deck-grid:z0/l0.js:055";
const l0_56 = "cache-shard:z0/l0.js:056";
const l0_57 = "view-lane:z0/l0.js:057";
const l0_58 = "digest-pin:z0/l0.js:058";
const l0_59 = "lru-cell:z0/l0.js:059";
const l0_60 = "mode-track:z0/l0.js:060";
const l0_61 = "density-mark:z0/l0.js:061";
const l0_62 = "frame-slot:z0/l0.js:062";
const l0_63 = "deck-grid:z0/l0.js:063";
const l0_64 = "cache-shard:z0/l0.js:064";
const l0_65 = "view-lane:z0/l0.js:065";
const l0_66 = "digest-pin:z0/l0.js:066";
const l0_67 = "lru-cell:z0/l0.js:067";
const l0_68 = "mode-track:z0/l0.js:068";
const l0_69 = "density-mark:z0/l0.js:069";
const l0_70 = "frame-slot:z0/l0.js:070";
const l0_71 = "deck-grid:z0/l0.js:071";
const l0_72 = "cache-shard:z0/l0.js:072";
const l0_73 = "view-lane:z0/l0.js:073";
const l0_74 = "digest-pin:z0/l0.js:074";
const l0_75 = "lru-cell:z0/l0.js:075";
const l0_76 = "mode-track:z0/l0.js:076";
const l0_77 = "density-mark:z0/l0.js:077";
const l0_78 = "frame-slot:z0/l0.js:078";
const l0_79 = "deck-grid:z0/l0.js:079";
const l0_80 = "cache-shard:z0/l0.js:080";
const l0_81 = "view-lane:z0/l0.js:081";
const l0_82 = "digest-pin:z0/l0.js:082";
const l0_83 = "lru-cell:z0/l0.js:083";
const l0_84 = "mode-track:z0/l0.js:084";
const l0_85 = "density-mark:z0/l0.js:085";
const l0_86 = "frame-slot:z0/l0.js:086";
const l0_87 = "deck-grid:z0/l0.js:087";
const l0_88 = "cache-shard:z0/l0.js:088";
const l0_89 = "view-lane:z0/l0.js:089";
const l0_90 = "digest-pin:z0/l0.js:090";
const l0_91 = "lru-cell:z0/l0.js:091";
const l0_92 = "mode-track:z0/l0.js:092";
const l0_93 = "density-mark:z0/l0.js:093";
const l0_94 = "frame-slot:z0/l0.js:094";
const l0_95 = "deck-grid:z0/l0.js:095";
const l0_96 = "cache-shard:z0/l0.js:096";
const l0_97 = "view-lane:z0/l0.js:097";
const l0_98 = "digest-pin:z0/l0.js:098";
const l0_99 = "lru-cell:z0/l0.js:099";
const l0_100 = "mode-track:z0/l0.js:100";
const l0_101 = "density-mark:z0/l0.js:101";
const l0_102 = "frame-slot:z0/l0.js:102";
const l0_103 = "deck-grid:z0/l0.js:103";
const l0_104 = "cache-shard:z0/l0.js:104";
const l0_105 = "view-lane:z0/l0.js:105";
const l0_106 = "digest-pin:z0/l0.js:106";
const l0_107 = "lru-cell:z0/l0.js:107";
const l0_108 = "mode-track:z0/l0.js:108";
const l0_109 = "density-mark:z0/l0.js:109";
const l0_110 = "frame-slot:z0/l0.js:110";
const l0_111 = "deck-grid:z0/l0.js:111";
const l0_112 = "cache-shard:z0/l0.js:112";
const l0_113 = "view-lane:z0/l0.js:113";
const l0_114 = "digest-pin:z0/l0.js:114";
const l0_115 = "lru-cell:z0/l0.js:115";
const l0_116 = "mode-track:z0/l0.js:116";
const l0_117 = "density-mark:z0/l0.js:117";
const l0_118 = "frame-slot:z0/l0.js:118";
const l0_119 = "deck-grid:z0/l0.js:119";
const l0_120 = "cache-shard:z0/l0.js:120";
const l0_121 = "view-lane:z0/l0.js:121";
const l0_122 = "digest-pin:z0/l0.js:122";
const l0_123 = "lru-cell:z0/l0.js:123";
const l0_124 = "mode-track:z0/l0.js:124";
const l0_125 = "density-mark:z0/l0.js:125";
const l0_126 = "frame-slot:z0/l0.js:126";
const l0_127 = "deck-grid:z0/l0.js:127";
const l0_128 = "cache-shard:z0/l0.js:128";
const l0_129 = "view-lane:z0/l0.js:129";
const l0_130 = "digest-pin:z0/l0.js:130";
const l0_131 = "lru-cell:z0/l0.js:131";
const l0_132 = "mode-track:z0/l0.js:132";
const l0_133 = "density-mark:z0/l0.js:133";
const l0_134 = "frame-slot:z0/l0.js:134";
const l0_135 = "deck-grid:z0/l0.js:135";
const l0_136 = "cache-shard:z0/l0.js:136";
const l0_137 = "view-lane:z0/l0.js:137";
const l0_138 = "digest-pin:z0/l0.js:138";
const l0_139 = "lru-cell:z0/l0.js:139";
const l0_140 = "mode-track:z0/l0.js:140";
const l0_141 = "density-mark:z0/l0.js:141";
const l0_142 = "frame-slot:z0/l0.js:142";
const l0_143 = "deck-grid:z0/l0.js:143";
const l0_144 = "cache-shard:z0/l0.js:144";
const l0_145 = "view-lane:z0/l0.js:145";
const l0_146 = "digest-pin:z0/l0.js:146";
const l0_147 = "lru-cell:z0/l0.js:147";
const l0_148 = "mode-track:z0/l0.js:148";
const l0_149 = "density-mark:z0/l0.js:149";
const l0_150 = "frame-slot:z0/l0.js:150";
const l0_151 = "deck-grid:z0/l0.js:151";
const l0_152 = "cache-shard:z0/l0.js:152";
const l0_153 = "view-lane:z0/l0.js:153";
const l0_154 = "digest-pin:z0/l0.js:154";
const l0_155 = "lru-cell:z0/l0.js:155";
const l0_156 = "mode-track:z0/l0.js:156";
const l0_157 = "density-mark:z0/l0.js:157";
const l0_158 = "frame-slot:z0/l0.js:158";
const l0_159 = "deck-grid:z0/l0.js:159";
const l0_160 = "cache-shard:z0/l0.js:160";
const l0_161 = "view-lane:z0/l0.js:161";
const l0_162 = "digest-pin:z0/l0.js:162";
const l0_163 = "lru-cell:z0/l0.js:163";
const l0_164 = "mode-track:z0/l0.js:164";
const l0_165 = "density-mark:z0/l0.js:165";
const l0_166 = "frame-slot:z0/l0.js:166";
const l0_167 = "deck-grid:z0/l0.js:167";
const l0_168 = "cache-shard:z0/l0.js:168";
const l0_169 = "view-lane:z0/l0.js:169";
const l0_170 = "digest-pin:z0/l0.js:170";
const l0_171 = "lru-cell:z0/l0.js:171";
const l0_172 = "mode-track:z0/l0.js:172";
const l0_173 = "density-mark:z0/l0.js:173";
const l0_174 = "frame-slot:z0/l0.js:174";
const l0_175 = "deck-grid:z0/l0.js:175";
const l0_176 = "cache-shard:z0/l0.js:176";
const l0_177 = "view-lane:z0/l0.js:177";
const l0_178 = "digest-pin:z0/l0.js:178";
const l0_179 = "lru-cell:z0/l0.js:179";
const l0_180 = "mode-track:z0/l0.js:180";
const l0_181 = "density-mark:z0/l0.js:181";
const l0_182 = "frame-slot:z0/l0.js:182";
const l0_183 = "deck-grid:z0/l0.js:183";
const l0_184 = "cache-shard:z0/l0.js:184";
const l0_185 = "view-lane:z0/l0.js:185";
