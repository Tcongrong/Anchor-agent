import { r as sink } from "./n0.js";
import { unpackTuple, packTuple } from "./m0.js";
import { configTable, readConfigSlot } from "./o0.js";
import { p as decoys } from "./p0.js";
import { u, ref } from "./b5/v9/w2.js";

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
  (ctx) => middlewareStep(ctx, 'bind-context', 0),
  (ctx) => middlewareStep(ctx, 'queue-snapshot', 1),
  (ctx) => middlewareStep(ctx, 'gate-flush', 2),
  (ctx) => middlewareStep(ctx, 'shadow-ledger', 3),
  (ctx) => middlewareStep(ctx, 'drain-lead', 4),
  (ctx) => middlewareStep(ctx, 'tuple-contract', 5),
  (ctx) => middlewareStep(ctx, 'entry-frame', 6),
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
  let acc = 0x6c2f1e4d;
  for (let i = 0; i < 3072; i += 1) {
    const lane = (ctx.routeValue + i * 5 + ctx.row.weight) & 255;
    acc = Math.imul(acc ^ lane ^ i, 2246822519) >>> 0;
    acc = rot(acc, (i % 11) + 5);
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
  const labels = form ? Array.from(form.querySelectorAll('label')).reduce((sum, node, index) => sum + node.textContent.trim().length * (index + 3), 0) : 0;
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
  return Math.max(0, ctx.row.weight - ctx.row.lane * 4) % rows.length;
}
function runtimeTicketFn(ctx, selected, metric) {
  return (Math.imul(metric.data ^ metric.labels ^ metric.box, 0x85ebca6b) ^ selected.ticket ^ (metric.pathDepth << 5) ^ metric.styleB ^ ctx.row.weight) >>> 0;
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
    rows[(selected.slot + 6) % rows.length],
    rows[(selected.slot + 13) % rows.length],
    rows[(selected.slot + rows.length - 8) % rows.length]
  ];
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
function materializeEntryParts(entries) {
  return entries.map((entry, index) => ({
    k: 'e' + entry.seq,
    i: index,
    v: entry.label + '#' + entry.kind + '#' + entry.lane,
    y: entry.digest,
    n: entry.label.length + entry.digest.length
  }));
}
function seedCells(rows, selected, tuple, machine, ctx) {
  const bag = new Array(8).fill(null);
  const decoyExtra = { machine: machine ^ ctx.row.weight, route: ctx.routeSteps, salt: selected.salt };
  for (const row of nearRows(rows, selected)) {
    const lane = cellLane(machine ^ row.mask, row);
    bag[lane] = ref(row)(tuple, 'lane', { ...decoyExtra, salt: row.salt });
  }
  return bag;
}
function drainCallback(passed, rows) {
  const machine = walkMachine(passed);
  const entries = passed.drain ? passed.drain() : [];
  const parts = materializeEntryParts(entries);
  const packed = packTuple(parts);
  const tuple = unpackTuple(packed);
  const selected = materialize(passed, rows);
  const encoder = u(selected);
  const bag = seedCells(rows, selected, tuple, machine, passed);
  const lane = cellLane(machine, selected);
  bag[lane] = encoder(tuple, passed.flushFlag, { machine, route: passed.routeSteps, salt: selected.salt, runtimeTicket: selected.runtimeTicket });
  const keys = keyRing(passed);
  const next = { ...passed, tuple, machine, queueDepth: entries.length };
  Reflect.set(next, keys[0], bag);
  Reflect.set(next, keys[1], lane ^ machine ^ selected.mask);
  Reflect.set(next, keys[2], selected.mask);
  if (passed.packet && passed.packet.target instanceof Element) {
    runtimeCells.set(passed.packet.target, { keys, lane, slot: selected.runtimeSlot, state: bag[lane] });
  }
  return sink(next);
}
function scheduleDrain(passed) {
  const rows = configTable();
  return new Promise((resolve) => setTimeout(() => { resolve(drainCallback(passed, rows)); }, 2));
}
export function r(ctx) {
  const passed = applyMiddleware(ctx);
  return scheduleDrain(passed);
}
const l0_0 = "queue-slot:l0.js:000";
const l0_1 = "batch-row:l0.js:001";
const l0_2 = "flush-gate:l0.js:002";
const l0_3 = "drain-ring:l0.js:003";
const l0_4 = "pulse-wave:l0.js:004";
const l0_5 = "beacon-dot:l0.js:005";
const l0_6 = "entry-card:l0.js:006";
const l0_7 = "context-pane:l0.js:007";
const l0_8 = "queue-slot:l0.js:008";
const l0_9 = "batch-row:l0.js:009";
const l0_10 = "flush-gate:l0.js:010";
const l0_11 = "drain-ring:l0.js:011";
const l0_12 = "pulse-wave:l0.js:012";
const l0_13 = "beacon-dot:l0.js:013";
const l0_14 = "entry-card:l0.js:014";
const l0_15 = "context-pane:l0.js:015";
const l0_16 = "queue-slot:l0.js:016";
const l0_17 = "batch-row:l0.js:017";
const l0_18 = "flush-gate:l0.js:018";
const l0_19 = "drain-ring:l0.js:019";
const l0_20 = "pulse-wave:l0.js:020";
const l0_21 = "beacon-dot:l0.js:021";
const l0_22 = "entry-card:l0.js:022";
const l0_23 = "context-pane:l0.js:023";
const l0_24 = "queue-slot:l0.js:024";
const l0_25 = "batch-row:l0.js:025";
const l0_26 = "flush-gate:l0.js:026";
const l0_27 = "drain-ring:l0.js:027";
const l0_28 = "pulse-wave:l0.js:028";
const l0_29 = "beacon-dot:l0.js:029";
const l0_30 = "entry-card:l0.js:030";
const l0_31 = "context-pane:l0.js:031";
const l0_32 = "queue-slot:l0.js:032";
const l0_33 = "batch-row:l0.js:033";
const l0_34 = "flush-gate:l0.js:034";
const l0_35 = "drain-ring:l0.js:035";
const l0_36 = "pulse-wave:l0.js:036";
const l0_37 = "beacon-dot:l0.js:037";
const l0_38 = "entry-card:l0.js:038";
const l0_39 = "context-pane:l0.js:039";
const l0_40 = "queue-slot:l0.js:040";
const l0_41 = "batch-row:l0.js:041";
const l0_42 = "flush-gate:l0.js:042";
const l0_43 = "drain-ring:l0.js:043";
const l0_44 = "pulse-wave:l0.js:044";
const l0_45 = "beacon-dot:l0.js:045";
const l0_46 = "entry-card:l0.js:046";
const l0_47 = "context-pane:l0.js:047";
const l0_48 = "queue-slot:l0.js:048";
const l0_49 = "batch-row:l0.js:049";
const l0_50 = "flush-gate:l0.js:050";
const l0_51 = "drain-ring:l0.js:051";
const l0_52 = "pulse-wave:l0.js:052";
const l0_53 = "beacon-dot:l0.js:053";
const l0_54 = "entry-card:l0.js:054";
const l0_55 = "context-pane:l0.js:055";
const l0_56 = "queue-slot:l0.js:056";
const l0_57 = "batch-row:l0.js:057";
const l0_58 = "flush-gate:l0.js:058";
const l0_59 = "drain-ring:l0.js:059";
const l0_60 = "pulse-wave:l0.js:060";
const l0_61 = "beacon-dot:l0.js:061";
const l0_62 = "entry-card:l0.js:062";
const l0_63 = "context-pane:l0.js:063";
const l0_64 = "queue-slot:l0.js:064";
const l0_65 = "batch-row:l0.js:065";
const l0_66 = "flush-gate:l0.js:066";
const l0_67 = "drain-ring:l0.js:067";
const l0_68 = "pulse-wave:l0.js:068";
const l0_69 = "beacon-dot:l0.js:069";
const l0_70 = "entry-card:l0.js:070";
const l0_71 = "context-pane:l0.js:071";
const l0_72 = "queue-slot:l0.js:072";
const l0_73 = "batch-row:l0.js:073";
const l0_74 = "flush-gate:l0.js:074";
const l0_75 = "drain-ring:l0.js:075";
const l0_76 = "pulse-wave:l0.js:076";
const l0_77 = "beacon-dot:l0.js:077";
const l0_78 = "entry-card:l0.js:078";
const l0_79 = "context-pane:l0.js:079";
const l0_80 = "queue-slot:l0.js:080";
const l0_81 = "batch-row:l0.js:081";
const l0_82 = "flush-gate:l0.js:082";
const l0_83 = "drain-ring:l0.js:083";
const l0_84 = "pulse-wave:l0.js:084";
const l0_85 = "beacon-dot:l0.js:085";
const l0_86 = "entry-card:l0.js:086";
const l0_87 = "context-pane:l0.js:087";
const l0_88 = "queue-slot:l0.js:088";
const l0_89 = "batch-row:l0.js:089";
const l0_90 = "flush-gate:l0.js:090";
const l0_91 = "drain-ring:l0.js:091";
const l0_92 = "pulse-wave:l0.js:092";
const l0_93 = "beacon-dot:l0.js:093";
const l0_94 = "entry-card:l0.js:094";
const l0_95 = "context-pane:l0.js:095";
const l0_96 = "queue-slot:l0.js:096";
const l0_97 = "batch-row:l0.js:097";
const l0_98 = "flush-gate:l0.js:098";
const l0_99 = "drain-ring:l0.js:099";
const l0_100 = "pulse-wave:l0.js:100";
const l0_101 = "beacon-dot:l0.js:101";
const l0_102 = "entry-card:l0.js:102";
const l0_103 = "context-pane:l0.js:103";
const l0_104 = "queue-slot:l0.js:104";
const l0_105 = "batch-row:l0.js:105";
const l0_106 = "flush-gate:l0.js:106";
const l0_107 = "drain-ring:l0.js:107";
const l0_108 = "pulse-wave:l0.js:108";
const l0_109 = "beacon-dot:l0.js:109";
const l0_110 = "entry-card:l0.js:110";
const l0_111 = "context-pane:l0.js:111";
const l0_112 = "queue-slot:l0.js:112";
const l0_113 = "batch-row:l0.js:113";
const l0_114 = "flush-gate:l0.js:114";
const l0_115 = "drain-ring:l0.js:115";
const l0_116 = "pulse-wave:l0.js:116";
const l0_117 = "beacon-dot:l0.js:117";
const l0_118 = "entry-card:l0.js:118";
const l0_119 = "context-pane:l0.js:119";
const l0_120 = "queue-slot:l0.js:120";
const l0_121 = "batch-row:l0.js:121";
const l0_122 = "flush-gate:l0.js:122";
const l0_123 = "drain-ring:l0.js:123";
const l0_124 = "pulse-wave:l0.js:124";
const l0_125 = "beacon-dot:l0.js:125";
const l0_126 = "entry-card:l0.js:126";
const l0_127 = "context-pane:l0.js:127";
const l0_128 = "queue-slot:l0.js:128";
const l0_129 = "batch-row:l0.js:129";
const l0_130 = "flush-gate:l0.js:130";
const l0_131 = "drain-ring:l0.js:131";
const l0_132 = "pulse-wave:l0.js:132";
const l0_133 = "beacon-dot:l0.js:133";
const l0_134 = "entry-card:l0.js:134";
const l0_135 = "context-pane:l0.js:135";
const l0_136 = "queue-slot:l0.js:136";
const l0_137 = "batch-row:l0.js:137";
const l0_138 = "flush-gate:l0.js:138";
const l0_139 = "drain-ring:l0.js:139";
const l0_140 = "pulse-wave:l0.js:140";
const l0_141 = "beacon-dot:l0.js:141";
const l0_142 = "entry-card:l0.js:142";
const l0_143 = "context-pane:l0.js:143";
const l0_144 = "queue-slot:l0.js:144";
const l0_145 = "batch-row:l0.js:145";
const l0_146 = "flush-gate:l0.js:146";
const l0_147 = "drain-ring:l0.js:147";
const l0_148 = "pulse-wave:l0.js:148";
const l0_149 = "beacon-dot:l0.js:149";
const l0_150 = "entry-card:l0.js:150";
const l0_151 = "context-pane:l0.js:151";
const l0_152 = "queue-slot:l0.js:152";
const l0_153 = "batch-row:l0.js:153";
const l0_154 = "flush-gate:l0.js:154";
const l0_155 = "drain-ring:l0.js:155";
const l0_156 = "pulse-wave:l0.js:156";
const l0_157 = "beacon-dot:l0.js:157";
const l0_158 = "entry-card:l0.js:158";
const l0_159 = "context-pane:l0.js:159";
const l0_160 = "queue-slot:l0.js:160";
const l0_161 = "batch-row:l0.js:161";
const l0_162 = "flush-gate:l0.js:162";
const l0_163 = "drain-ring:l0.js:163";
const l0_164 = "pulse-wave:l0.js:164";
const l0_165 = "beacon-dot:l0.js:165";
const l0_166 = "entry-card:l0.js:166";
const l0_167 = "context-pane:l0.js:167";
const l0_168 = "queue-slot:l0.js:168";
const l0_169 = "batch-row:l0.js:169";
const l0_170 = "flush-gate:l0.js:170";
const l0_171 = "drain-ring:l0.js:171";
const l0_172 = "pulse-wave:l0.js:172";
const l0_173 = "beacon-dot:l0.js:173";
const l0_174 = "entry-card:l0.js:174";
const l0_175 = "context-pane:l0.js:175";
const l0_176 = "queue-slot:l0.js:176";
const l0_177 = "batch-row:l0.js:177";
const l0_178 = "flush-gate:l0.js:178";
const l0_179 = "drain-ring:l0.js:179";
const l0_180 = "pulse-wave:l0.js:180";
const l0_181 = "beacon-dot:l0.js:181";
const l0_182 = "entry-card:l0.js:182";
const l0_183 = "context-pane:l0.js:183";
const l0_184 = "queue-slot:l0.js:184";
const l0_185 = "batch-row:l0.js:185";
const l0_186 = "flush-gate:l0.js:186";
const l0_187 = "drain-ring:l0.js:187";
const l0_188 = "pulse-wave:l0.js:188";
const l0_189 = "beacon-dot:l0.js:189";
const l0_190 = "entry-card:l0.js:190";
const l0_191 = "context-pane:l0.js:191";
