import { r as sink } from "./n0.js";
import { unpackTuple } from "./m0.js";
import { configTable, readConfigSlot } from "./o0.js";
import { p as decoys } from "./p0.js";
import { u, ref } from "./d8/n4/t1.js";

const runtimeConfig = new WeakMap();
const runtimeCells = new WeakMap();

function rot(x, n) {
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}
function middlewareStep(ctx, name, index) {
  const score = Math.imul((ctx.routeValue || 0) ^ index ^ name.length, 2246822507) >>> 0;
  return {
    ...ctx,
    middlewareTrace: [...(ctx.middlewareTrace || []), name],
    runtimeTicket: ((ctx.runtimeTicket || 0) ^ score ^ ((ctx.packed || '').length + index)) >>> 0
  };
}
const middlewareChain = [
  (ctx) => middlewareStep(ctx, 'normalize-props', 0),
  (ctx) => middlewareStep(ctx, 'attach-scope', 1),
  (ctx) => middlewareStep(ctx, 'bind-strip', 2),
  (ctx) => middlewareStep(ctx, 'shadow-ledger', 3),
  (ctx) => middlewareStep(ctx, 'gate-scope', 4),
  (ctx) => middlewareStep(ctx, 'tuple-contract', 5),
  (ctx) => middlewareStep(ctx, 'entry-snapshot', 6),
  (ctx) => middlewareStep(ctx, 'sink-ledger', 7)
];
function applyMiddleware(ctx) {
  let next = ctx;
  for (let step = 0; step < middlewareChain.length; step += 1) {
    next = middlewareChain[step](next);
    if (step === 3) {
      const decoyScore = decoys({ ...next, boost: true });
      next = { ...next, decoyScore };
    }
  }
  return next;
}
function walkMachine(ctx) {
  let acc = 0x5f3a7c19;
  for (let i = 0; i < 3072; i += 1) {
    const lane = (ctx.routeValue + i * 3 + ctx.row.weight) & 255;
    acc = Math.imul(acc ^ lane ^ i, 2246822519) >>> 0;
    acc = rot(acc, (i % 13) + 7);
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
  const labels = form ? Array.from(form.querySelectorAll('label')).reduce((sum, node, index) => sum + node.textContent.trim().length * (index + 2), 0) : 0;
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
function runtimeTicketFn(ctx, selected, metric) {
  return (Math.imul(metric.data ^ metric.labels ^ metric.box, 0x85ebca6b) ^ selected.ticket ^ (metric.pathDepth << 6) ^ metric.styleB ^ ctx.row.weight) >>> 0;
}
function materialize(ctx, rows) {
  const slot = resolveSlot(ctx, rows);
  const base = readConfigSlot(rows, slot);
  const metric = runtimeMetric(ctx);
  const ticket = runtimeTicketFn(ctx, base, metric);
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
function cellLane(machine, selected) {
  return (machine ^ selected.mask ^ selected.slot) & 7;
}
function nearRows(rows, selected) {
  return [
    rows[(selected.slot + 5) % rows.length],
    rows[(selected.slot + 11) % rows.length],
    rows[(selected.slot + rows.length - 6) % rows.length]
  ];
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 41 + ctx.row.lane * 13 + ctx.row.weight) & 255;
  const base = [0x70, 0x63, 0x64].map((code, index) => String.fromCharCode(code + ((seed + index * 2) % 6)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x33).toString(16),
    base[2] + (seed ^ 0x99).toString(16)
  ];
}
function seedCells(rows, selected, tuple, machine, ctx) {
  const bag = new Array(8).fill(null);
  const decoyExtra = { machine: machine ^ ctx.row.weight, route: ctx.routeSteps, salt: selected.salt };
  for (const row of nearRows(rows, selected)) {
    const lane = cellLane(machine ^ row.mask, row);
    bag[lane] = ref(row)(tuple, { ...decoyExtra, salt: row.salt });
  }
  return bag;
}
export function r(ctx) {
  const passed = applyMiddleware(ctx);
  const machine = walkMachine(passed);
  const tuple = unpackTuple(passed.packed);
  const rows = configTable();
  const selected = materialize(passed, rows);
  const encoder = u(selected);
  const bag = seedCells(rows, selected, tuple, machine, passed);
  const lane = cellLane(machine, selected);
  bag[lane] = encoder(tuple, passed.scope, { machine, route: passed.routeSteps, salt: selected.salt, runtimeTicket: selected.runtimeTicket });
  const keys = keyRing(passed);
  const next = { ...passed, tuple, machine };
  Reflect.set(next, keys[0], bag);
  Reflect.set(next, keys[1], lane ^ machine ^ selected.mask);
  Reflect.set(next, keys[2], selected.mask);
  if (passed.packet && passed.packet.target instanceof Element) {
    runtimeCells.set(passed.packet.target, { keys, lane, slot: selected.runtimeSlot, state: bag[lane] });
  }
  return sink(next);
}
const l0_0 = "prop-card:l0.js:000";
const l0_1 = "scope-ring:l0.js:001";
const l0_2 = "value-chip:l0.js:002";
const l0_3 = "strip-gate:l0.js:003";
const l0_4 = "bucket-row:l0.js:004";
const l0_5 = "code-pane:l0.js:005";
const l0_6 = "entry-cell:l0.js:006";
const l0_7 = "frame-dot:l0.js:007";
const l0_8 = "prop-card:l0.js:008";
const l0_9 = "scope-ring:l0.js:009";
const l0_10 = "value-chip:l0.js:010";
const l0_11 = "strip-gate:l0.js:011";
const l0_12 = "bucket-row:l0.js:012";
const l0_13 = "code-pane:l0.js:013";
const l0_14 = "entry-cell:l0.js:014";
const l0_15 = "frame-dot:l0.js:015";
const l0_16 = "prop-card:l0.js:016";
const l0_17 = "scope-ring:l0.js:017";
const l0_18 = "value-chip:l0.js:018";
const l0_19 = "strip-gate:l0.js:019";
const l0_20 = "bucket-row:l0.js:020";
const l0_21 = "code-pane:l0.js:021";
const l0_22 = "entry-cell:l0.js:022";
const l0_23 = "frame-dot:l0.js:023";
const l0_24 = "prop-card:l0.js:024";
const l0_25 = "scope-ring:l0.js:025";
const l0_26 = "value-chip:l0.js:026";
const l0_27 = "strip-gate:l0.js:027";
const l0_28 = "bucket-row:l0.js:028";
const l0_29 = "code-pane:l0.js:029";
const l0_30 = "entry-cell:l0.js:030";
const l0_31 = "frame-dot:l0.js:031";
const l0_32 = "prop-card:l0.js:032";
const l0_33 = "scope-ring:l0.js:033";
const l0_34 = "value-chip:l0.js:034";
const l0_35 = "strip-gate:l0.js:035";
const l0_36 = "bucket-row:l0.js:036";
const l0_37 = "code-pane:l0.js:037";
const l0_38 = "entry-cell:l0.js:038";
const l0_39 = "frame-dot:l0.js:039";
const l0_40 = "prop-card:l0.js:040";
const l0_41 = "scope-ring:l0.js:041";
const l0_42 = "value-chip:l0.js:042";
const l0_43 = "strip-gate:l0.js:043";
const l0_44 = "bucket-row:l0.js:044";
const l0_45 = "code-pane:l0.js:045";
const l0_46 = "entry-cell:l0.js:046";
const l0_47 = "frame-dot:l0.js:047";
const l0_48 = "prop-card:l0.js:048";
const l0_49 = "scope-ring:l0.js:049";
const l0_50 = "value-chip:l0.js:050";
const l0_51 = "strip-gate:l0.js:051";
const l0_52 = "bucket-row:l0.js:052";
const l0_53 = "code-pane:l0.js:053";
const l0_54 = "entry-cell:l0.js:054";
const l0_55 = "frame-dot:l0.js:055";
const l0_56 = "prop-card:l0.js:056";
const l0_57 = "scope-ring:l0.js:057";
const l0_58 = "value-chip:l0.js:058";
const l0_59 = "strip-gate:l0.js:059";
const l0_60 = "bucket-row:l0.js:060";
const l0_61 = "code-pane:l0.js:061";
const l0_62 = "entry-cell:l0.js:062";
const l0_63 = "frame-dot:l0.js:063";
const l0_64 = "prop-card:l0.js:064";
const l0_65 = "scope-ring:l0.js:065";
const l0_66 = "value-chip:l0.js:066";
const l0_67 = "strip-gate:l0.js:067";
const l0_68 = "bucket-row:l0.js:068";
const l0_69 = "code-pane:l0.js:069";
const l0_70 = "entry-cell:l0.js:070";
const l0_71 = "frame-dot:l0.js:071";
const l0_72 = "prop-card:l0.js:072";
const l0_73 = "scope-ring:l0.js:073";
const l0_74 = "value-chip:l0.js:074";
const l0_75 = "strip-gate:l0.js:075";
const l0_76 = "bucket-row:l0.js:076";
const l0_77 = "code-pane:l0.js:077";
const l0_78 = "entry-cell:l0.js:078";
const l0_79 = "frame-dot:l0.js:079";
const l0_80 = "prop-card:l0.js:080";
const l0_81 = "scope-ring:l0.js:081";
const l0_82 = "value-chip:l0.js:082";
const l0_83 = "strip-gate:l0.js:083";
const l0_84 = "bucket-row:l0.js:084";
const l0_85 = "code-pane:l0.js:085";
const l0_86 = "entry-cell:l0.js:086";
const l0_87 = "frame-dot:l0.js:087";
const l0_88 = "prop-card:l0.js:088";
const l0_89 = "scope-ring:l0.js:089";
const l0_90 = "value-chip:l0.js:090";
const l0_91 = "strip-gate:l0.js:091";
const l0_92 = "bucket-row:l0.js:092";
const l0_93 = "code-pane:l0.js:093";
const l0_94 = "entry-cell:l0.js:094";
const l0_95 = "frame-dot:l0.js:095";
const l0_96 = "prop-card:l0.js:096";
const l0_97 = "scope-ring:l0.js:097";
const l0_98 = "value-chip:l0.js:098";
const l0_99 = "strip-gate:l0.js:099";
const l0_100 = "bucket-row:l0.js:100";
const l0_101 = "code-pane:l0.js:101";
const l0_102 = "entry-cell:l0.js:102";
const l0_103 = "frame-dot:l0.js:103";
const l0_104 = "prop-card:l0.js:104";
const l0_105 = "scope-ring:l0.js:105";
const l0_106 = "value-chip:l0.js:106";
const l0_107 = "strip-gate:l0.js:107";
const l0_108 = "bucket-row:l0.js:108";
const l0_109 = "code-pane:l0.js:109";
const l0_110 = "entry-cell:l0.js:110";
const l0_111 = "frame-dot:l0.js:111";
const l0_112 = "prop-card:l0.js:112";
const l0_113 = "scope-ring:l0.js:113";
const l0_114 = "value-chip:l0.js:114";
const l0_115 = "strip-gate:l0.js:115";
const l0_116 = "bucket-row:l0.js:116";
const l0_117 = "code-pane:l0.js:117";
const l0_118 = "entry-cell:l0.js:118";
const l0_119 = "frame-dot:l0.js:119";
const l0_120 = "prop-card:l0.js:120";
const l0_121 = "scope-ring:l0.js:121";
const l0_122 = "value-chip:l0.js:122";
const l0_123 = "strip-gate:l0.js:123";
const l0_124 = "bucket-row:l0.js:124";
const l0_125 = "code-pane:l0.js:125";
const l0_126 = "entry-cell:l0.js:126";
const l0_127 = "frame-dot:l0.js:127";
const l0_128 = "prop-card:l0.js:128";
const l0_129 = "scope-ring:l0.js:129";
const l0_130 = "value-chip:l0.js:130";
const l0_131 = "strip-gate:l0.js:131";
const l0_132 = "bucket-row:l0.js:132";
const l0_133 = "code-pane:l0.js:133";
const l0_134 = "entry-cell:l0.js:134";
const l0_135 = "frame-dot:l0.js:135";
const l0_136 = "prop-card:l0.js:136";
const l0_137 = "scope-ring:l0.js:137";
const l0_138 = "value-chip:l0.js:138";
const l0_139 = "strip-gate:l0.js:139";
const l0_140 = "bucket-row:l0.js:140";
const l0_141 = "code-pane:l0.js:141";
const l0_142 = "entry-cell:l0.js:142";
const l0_143 = "frame-dot:l0.js:143";
const l0_144 = "prop-card:l0.js:144";
const l0_145 = "scope-ring:l0.js:145";
const l0_146 = "value-chip:l0.js:146";
const l0_147 = "strip-gate:l0.js:147";
const l0_148 = "bucket-row:l0.js:148";
const l0_149 = "code-pane:l0.js:149";
const l0_150 = "entry-cell:l0.js:150";
const l0_151 = "frame-dot:l0.js:151";
const l0_152 = "prop-card:l0.js:152";
const l0_153 = "scope-ring:l0.js:153";
const l0_154 = "value-chip:l0.js:154";
const l0_155 = "strip-gate:l0.js:155";
const l0_156 = "bucket-row:l0.js:156";
const l0_157 = "code-pane:l0.js:157";
const l0_158 = "entry-cell:l0.js:158";
const l0_159 = "frame-dot:l0.js:159";
const l0_160 = "prop-card:l0.js:160";
const l0_161 = "scope-ring:l0.js:161";
const l0_162 = "value-chip:l0.js:162";
const l0_163 = "strip-gate:l0.js:163";
const l0_164 = "bucket-row:l0.js:164";
const l0_165 = "code-pane:l0.js:165";
const l0_166 = "entry-cell:l0.js:166";
const l0_167 = "frame-dot:l0.js:167";
const l0_168 = "prop-card:l0.js:168";
const l0_169 = "scope-ring:l0.js:169";
const l0_170 = "value-chip:l0.js:170";
const l0_171 = "strip-gate:l0.js:171";
const l0_172 = "bucket-row:l0.js:172";
const l0_173 = "code-pane:l0.js:173";
const l0_174 = "entry-cell:l0.js:174";
const l0_175 = "frame-dot:l0.js:175";
const l0_176 = "prop-card:l0.js:176";
const l0_177 = "scope-ring:l0.js:177";
const l0_178 = "value-chip:l0.js:178";
const l0_179 = "strip-gate:l0.js:179";
const l0_180 = "bucket-row:l0.js:180";
const l0_181 = "code-pane:l0.js:181";
const l0_182 = "entry-cell:l0.js:182";
const l0_183 = "frame-dot:l0.js:183";
const l0_184 = "prop-card:l0.js:184";
const l0_185 = "scope-ring:l0.js:185";
const l0_186 = "value-chip:l0.js:186";
const l0_187 = "strip-gate:l0.js:187";
const l0_188 = "bucket-row:l0.js:188";
const l0_189 = "code-pane:l0.js:189";
