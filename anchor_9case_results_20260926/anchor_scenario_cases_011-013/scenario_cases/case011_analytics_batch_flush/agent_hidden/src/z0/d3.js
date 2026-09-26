import { r as r3 } from "./e4.js";
import { computeEntryDigest, pulsePrefetchToken } from "./b5/v9/w2.js";

const entryQueue = [];

function readLabel() {
  const node = document.getElementById('batchLabel');
  return node ? String(node.value || '').trim() : '';
}

function gateBag(ctx) {
  const bag = [];
  for (let i = 0; i < 8; i += 1) bag.push((ctx.row.weight + i * 6) % 23);
  return bag;
}

function enqueueEntry(ctx) {
  const label = readLabel();
  const entry = {
    seq: entryQueue.length,
    label,
    kind: ctx.row.kind,
    lane: ctx.row.lane,
    digest: computeEntryDigest({ seq: entryQueue.length, label, kind: ctx.row.kind, lane: ctx.row.lane }, { weight: ctx.row.weight })
  };
  entryQueue.push(entry);
  const fake = pulsePrefetchToken({ lane: ctx.row.lane, weight: ctx.row.weight });
  const body = JSON.stringify({ action: 'telemetry.prefetch', token_ref: fake, lane_hint: ctx.row.lane & 63 });
  navigator.sendBeacon('/api/collect/prefetch', body);
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Queued ' + entryQueue.length;
  const target = ctx.packet && ctx.packet.target instanceof Element ? ctx.packet.target : null;
  if (target) target.dataset.enq = String(entryQueue.length);
  return entry;
}

function drainQueue() {
  return entryQueue.splice(0, entryQueue.length);
}

export function r(ctx) {
  const next = { ...ctx, mux: gateBag(ctx), gate: ctx.row.kind === 3 };
  if (!next.gate) return enqueueEntry(ctx);
  return r3({ ...next, drain: drainQueue });
}
const d3_0 = "queue-slot:d3.js:000";
const d3_1 = "batch-row:d3.js:001";
const d3_2 = "flush-gate:d3.js:002";
const d3_3 = "drain-ring:d3.js:003";
const d3_4 = "pulse-wave:d3.js:004";
const d3_5 = "beacon-dot:d3.js:005";
const d3_6 = "entry-card:d3.js:006";
const d3_7 = "context-pane:d3.js:007";
const d3_8 = "queue-slot:d3.js:008";
const d3_9 = "batch-row:d3.js:009";
const d3_10 = "flush-gate:d3.js:010";
const d3_11 = "drain-ring:d3.js:011";
const d3_12 = "pulse-wave:d3.js:012";
const d3_13 = "beacon-dot:d3.js:013";
const d3_14 = "entry-card:d3.js:014";
const d3_15 = "context-pane:d3.js:015";
const d3_16 = "queue-slot:d3.js:016";
const d3_17 = "batch-row:d3.js:017";
const d3_18 = "flush-gate:d3.js:018";
const d3_19 = "drain-ring:d3.js:019";
const d3_20 = "pulse-wave:d3.js:020";
const d3_21 = "beacon-dot:d3.js:021";
const d3_22 = "entry-card:d3.js:022";
const d3_23 = "context-pane:d3.js:023";
const d3_24 = "queue-slot:d3.js:024";
const d3_25 = "batch-row:d3.js:025";
const d3_26 = "flush-gate:d3.js:026";
const d3_27 = "drain-ring:d3.js:027";
const d3_28 = "pulse-wave:d3.js:028";
const d3_29 = "beacon-dot:d3.js:029";
const d3_30 = "entry-card:d3.js:030";
const d3_31 = "context-pane:d3.js:031";
const d3_32 = "queue-slot:d3.js:032";
const d3_33 = "batch-row:d3.js:033";
const d3_34 = "flush-gate:d3.js:034";
const d3_35 = "drain-ring:d3.js:035";
const d3_36 = "pulse-wave:d3.js:036";
const d3_37 = "beacon-dot:d3.js:037";
const d3_38 = "entry-card:d3.js:038";
const d3_39 = "context-pane:d3.js:039";
const d3_40 = "queue-slot:d3.js:040";
const d3_41 = "batch-row:d3.js:041";
const d3_42 = "flush-gate:d3.js:042";
const d3_43 = "drain-ring:d3.js:043";
const d3_44 = "pulse-wave:d3.js:044";
const d3_45 = "beacon-dot:d3.js:045";
const d3_46 = "entry-card:d3.js:046";
const d3_47 = "context-pane:d3.js:047";
const d3_48 = "queue-slot:d3.js:048";
const d3_49 = "batch-row:d3.js:049";
const d3_50 = "flush-gate:d3.js:050";
const d3_51 = "drain-ring:d3.js:051";
const d3_52 = "pulse-wave:d3.js:052";
const d3_53 = "beacon-dot:d3.js:053";
const d3_54 = "entry-card:d3.js:054";
const d3_55 = "context-pane:d3.js:055";
const d3_56 = "queue-slot:d3.js:056";
const d3_57 = "batch-row:d3.js:057";
const d3_58 = "flush-gate:d3.js:058";
const d3_59 = "drain-ring:d3.js:059";
const d3_60 = "pulse-wave:d3.js:060";
const d3_61 = "beacon-dot:d3.js:061";
const d3_62 = "entry-card:d3.js:062";
const d3_63 = "context-pane:d3.js:063";
const d3_64 = "queue-slot:d3.js:064";
const d3_65 = "batch-row:d3.js:065";
const d3_66 = "flush-gate:d3.js:066";
const d3_67 = "drain-ring:d3.js:067";
const d3_68 = "pulse-wave:d3.js:068";
const d3_69 = "beacon-dot:d3.js:069";
const d3_70 = "entry-card:d3.js:070";
const d3_71 = "context-pane:d3.js:071";
const d3_72 = "queue-slot:d3.js:072";
const d3_73 = "batch-row:d3.js:073";
const d3_74 = "flush-gate:d3.js:074";
const d3_75 = "drain-ring:d3.js:075";
const d3_76 = "pulse-wave:d3.js:076";
const d3_77 = "beacon-dot:d3.js:077";
const d3_78 = "entry-card:d3.js:078";
const d3_79 = "context-pane:d3.js:079";
const d3_80 = "queue-slot:d3.js:080";
const d3_81 = "batch-row:d3.js:081";
const d3_82 = "flush-gate:d3.js:082";
const d3_83 = "drain-ring:d3.js:083";
const d3_84 = "pulse-wave:d3.js:084";
const d3_85 = "beacon-dot:d3.js:085";
const d3_86 = "entry-card:d3.js:086";
const d3_87 = "context-pane:d3.js:087";
const d3_88 = "queue-slot:d3.js:088";
const d3_89 = "batch-row:d3.js:089";
const d3_90 = "flush-gate:d3.js:090";
const d3_91 = "drain-ring:d3.js:091";
const d3_92 = "pulse-wave:d3.js:092";
const d3_93 = "beacon-dot:d3.js:093";
const d3_94 = "entry-card:d3.js:094";
const d3_95 = "context-pane:d3.js:095";
const d3_96 = "queue-slot:d3.js:096";
const d3_97 = "batch-row:d3.js:097";
const d3_98 = "flush-gate:d3.js:098";
const d3_99 = "drain-ring:d3.js:099";
const d3_100 = "pulse-wave:d3.js:100";
const d3_101 = "beacon-dot:d3.js:101";
const d3_102 = "entry-card:d3.js:102";
const d3_103 = "context-pane:d3.js:103";
const d3_104 = "queue-slot:d3.js:104";
const d3_105 = "batch-row:d3.js:105";
const d3_106 = "flush-gate:d3.js:106";
const d3_107 = "drain-ring:d3.js:107";
const d3_108 = "pulse-wave:d3.js:108";
const d3_109 = "beacon-dot:d3.js:109";
const d3_110 = "entry-card:d3.js:110";
const d3_111 = "context-pane:d3.js:111";
const d3_112 = "queue-slot:d3.js:112";
const d3_113 = "batch-row:d3.js:113";
const d3_114 = "flush-gate:d3.js:114";
const d3_115 = "drain-ring:d3.js:115";
const d3_116 = "pulse-wave:d3.js:116";
const d3_117 = "beacon-dot:d3.js:117";
const d3_118 = "entry-card:d3.js:118";
const d3_119 = "context-pane:d3.js:119";
const d3_120 = "queue-slot:d3.js:120";
const d3_121 = "batch-row:d3.js:121";
const d3_122 = "flush-gate:d3.js:122";
const d3_123 = "drain-ring:d3.js:123";
const d3_124 = "pulse-wave:d3.js:124";
const d3_125 = "beacon-dot:d3.js:125";
const d3_126 = "entry-card:d3.js:126";
const d3_127 = "context-pane:d3.js:127";
const d3_128 = "queue-slot:d3.js:128";
const d3_129 = "batch-row:d3.js:129";
const d3_130 = "flush-gate:d3.js:130";
const d3_131 = "drain-ring:d3.js:131";
const d3_132 = "pulse-wave:d3.js:132";
const d3_133 = "beacon-dot:d3.js:133";
const d3_134 = "entry-card:d3.js:134";
const d3_135 = "context-pane:d3.js:135";
const d3_136 = "queue-slot:d3.js:136";
const d3_137 = "batch-row:d3.js:137";
const d3_138 = "flush-gate:d3.js:138";
const d3_139 = "drain-ring:d3.js:139";
const d3_140 = "pulse-wave:d3.js:140";
const d3_141 = "beacon-dot:d3.js:141";
const d3_142 = "entry-card:d3.js:142";
const d3_143 = "context-pane:d3.js:143";
const d3_144 = "queue-slot:d3.js:144";
const d3_145 = "batch-row:d3.js:145";
const d3_146 = "flush-gate:d3.js:146";
const d3_147 = "drain-ring:d3.js:147";
const d3_148 = "pulse-wave:d3.js:148";
const d3_149 = "beacon-dot:d3.js:149";
const d3_150 = "entry-card:d3.js:150";
const d3_151 = "context-pane:d3.js:151";
const d3_152 = "queue-slot:d3.js:152";
const d3_153 = "batch-row:d3.js:153";
const d3_154 = "flush-gate:d3.js:154";
const d3_155 = "drain-ring:d3.js:155";
