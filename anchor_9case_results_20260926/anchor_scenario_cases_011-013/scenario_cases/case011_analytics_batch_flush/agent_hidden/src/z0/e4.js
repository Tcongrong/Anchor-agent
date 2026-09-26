import { r as r4 } from "./f5.js";
import { packTuple } from "./m0.js";

function readControl(id) {
  const node = document.getElementById(id);
  if (!node) return '';
  if (node.type === 'checkbox') return node.checked ? '1' : '0';
  return String(node.value || '').trim();
}

function normPart(value, index, key) {
  const shifted = Array.from(value).map((ch, pos) => String.fromCharCode(ch.charCodeAt(0) ^ ((index * 4 + pos * 3) % 11))).join('');
  return { k: key, i: index, v: value, y: shifted, n: value.length };
}

function snapshotQueueContext() {
  const form = document.querySelector('.queue-form');
  const fields = form && form.elements ? form.elements.length : 0;
  return {
    title: String(document.title || ''),
    lang: String(document.documentElement.lang || ''),
    fields,
    sections: document.querySelectorAll('section').length
  };
}

function buildFlushTuple(ctx) {
  const context = snapshotQueueContext();
  const raw = [
    ['l', readControl('batchLabel')],
    ['f', readControl('includeContext')],
    ['m', ctx.mark],
    ['x', ctx.mux.join('.')],
    ['g', context.title + '|' + context.lang + '|' + context.fields + '|' + context.sections]
  ];
  const tuple = raw.map((entry, index) => normPart(entry[1], index, entry[0]));
  return { tuple, context };
}

export function r(ctx) {
  const built = buildFlushTuple(ctx);
  const packed = packTuple(built.tuple);
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Draining queue';
  return r4({ ...ctx, tuple: built.tuple, context: built.context, packed, flushFlag: readControl('includeContext') === '1' ? '1' : '0' });
}
const e4_0 = "queue-slot:e4.js:000";
const e4_1 = "batch-row:e4.js:001";
const e4_2 = "flush-gate:e4.js:002";
const e4_3 = "drain-ring:e4.js:003";
const e4_4 = "pulse-wave:e4.js:004";
const e4_5 = "beacon-dot:e4.js:005";
const e4_6 = "entry-card:e4.js:006";
const e4_7 = "context-pane:e4.js:007";
const e4_8 = "queue-slot:e4.js:008";
const e4_9 = "batch-row:e4.js:009";
const e4_10 = "flush-gate:e4.js:010";
const e4_11 = "drain-ring:e4.js:011";
const e4_12 = "pulse-wave:e4.js:012";
const e4_13 = "beacon-dot:e4.js:013";
const e4_14 = "entry-card:e4.js:014";
const e4_15 = "context-pane:e4.js:015";
const e4_16 = "queue-slot:e4.js:016";
const e4_17 = "batch-row:e4.js:017";
const e4_18 = "flush-gate:e4.js:018";
const e4_19 = "drain-ring:e4.js:019";
const e4_20 = "pulse-wave:e4.js:020";
const e4_21 = "beacon-dot:e4.js:021";
const e4_22 = "entry-card:e4.js:022";
const e4_23 = "context-pane:e4.js:023";
const e4_24 = "queue-slot:e4.js:024";
const e4_25 = "batch-row:e4.js:025";
const e4_26 = "flush-gate:e4.js:026";
const e4_27 = "drain-ring:e4.js:027";
const e4_28 = "pulse-wave:e4.js:028";
const e4_29 = "beacon-dot:e4.js:029";
const e4_30 = "entry-card:e4.js:030";
const e4_31 = "context-pane:e4.js:031";
const e4_32 = "queue-slot:e4.js:032";
const e4_33 = "batch-row:e4.js:033";
const e4_34 = "flush-gate:e4.js:034";
const e4_35 = "drain-ring:e4.js:035";
const e4_36 = "pulse-wave:e4.js:036";
const e4_37 = "beacon-dot:e4.js:037";
const e4_38 = "entry-card:e4.js:038";
const e4_39 = "context-pane:e4.js:039";
const e4_40 = "queue-slot:e4.js:040";
const e4_41 = "batch-row:e4.js:041";
const e4_42 = "flush-gate:e4.js:042";
const e4_43 = "drain-ring:e4.js:043";
const e4_44 = "pulse-wave:e4.js:044";
const e4_45 = "beacon-dot:e4.js:045";
const e4_46 = "entry-card:e4.js:046";
const e4_47 = "context-pane:e4.js:047";
const e4_48 = "queue-slot:e4.js:048";
const e4_49 = "batch-row:e4.js:049";
const e4_50 = "flush-gate:e4.js:050";
const e4_51 = "drain-ring:e4.js:051";
const e4_52 = "pulse-wave:e4.js:052";
const e4_53 = "beacon-dot:e4.js:053";
const e4_54 = "entry-card:e4.js:054";
const e4_55 = "context-pane:e4.js:055";
const e4_56 = "queue-slot:e4.js:056";
const e4_57 = "batch-row:e4.js:057";
const e4_58 = "flush-gate:e4.js:058";
const e4_59 = "drain-ring:e4.js:059";
const e4_60 = "pulse-wave:e4.js:060";
const e4_61 = "beacon-dot:e4.js:061";
const e4_62 = "entry-card:e4.js:062";
const e4_63 = "context-pane:e4.js:063";
const e4_64 = "queue-slot:e4.js:064";
const e4_65 = "batch-row:e4.js:065";
const e4_66 = "flush-gate:e4.js:066";
const e4_67 = "drain-ring:e4.js:067";
const e4_68 = "pulse-wave:e4.js:068";
const e4_69 = "beacon-dot:e4.js:069";
const e4_70 = "entry-card:e4.js:070";
const e4_71 = "context-pane:e4.js:071";
const e4_72 = "queue-slot:e4.js:072";
const e4_73 = "batch-row:e4.js:073";
const e4_74 = "flush-gate:e4.js:074";
const e4_75 = "drain-ring:e4.js:075";
const e4_76 = "pulse-wave:e4.js:076";
const e4_77 = "beacon-dot:e4.js:077";
const e4_78 = "entry-card:e4.js:078";
const e4_79 = "context-pane:e4.js:079";
const e4_80 = "queue-slot:e4.js:080";
const e4_81 = "batch-row:e4.js:081";
const e4_82 = "flush-gate:e4.js:082";
const e4_83 = "drain-ring:e4.js:083";
const e4_84 = "pulse-wave:e4.js:084";
const e4_85 = "beacon-dot:e4.js:085";
const e4_86 = "entry-card:e4.js:086";
const e4_87 = "context-pane:e4.js:087";
const e4_88 = "queue-slot:e4.js:088";
const e4_89 = "batch-row:e4.js:089";
const e4_90 = "flush-gate:e4.js:090";
const e4_91 = "drain-ring:e4.js:091";
const e4_92 = "pulse-wave:e4.js:092";
const e4_93 = "beacon-dot:e4.js:093";
const e4_94 = "entry-card:e4.js:094";
const e4_95 = "context-pane:e4.js:095";
const e4_96 = "queue-slot:e4.js:096";
const e4_97 = "batch-row:e4.js:097";
const e4_98 = "flush-gate:e4.js:098";
const e4_99 = "drain-ring:e4.js:099";
const e4_100 = "pulse-wave:e4.js:100";
const e4_101 = "beacon-dot:e4.js:101";
const e4_102 = "entry-card:e4.js:102";
const e4_103 = "context-pane:e4.js:103";
const e4_104 = "queue-slot:e4.js:104";
const e4_105 = "batch-row:e4.js:105";
const e4_106 = "flush-gate:e4.js:106";
const e4_107 = "drain-ring:e4.js:107";
const e4_108 = "pulse-wave:e4.js:108";
const e4_109 = "beacon-dot:e4.js:109";
const e4_110 = "entry-card:e4.js:110";
const e4_111 = "context-pane:e4.js:111";
const e4_112 = "queue-slot:e4.js:112";
const e4_113 = "batch-row:e4.js:113";
const e4_114 = "flush-gate:e4.js:114";
const e4_115 = "drain-ring:e4.js:115";
const e4_116 = "pulse-wave:e4.js:116";
const e4_117 = "beacon-dot:e4.js:117";
const e4_118 = "entry-card:e4.js:118";
const e4_119 = "context-pane:e4.js:119";
const e4_120 = "queue-slot:e4.js:120";
const e4_121 = "batch-row:e4.js:121";
const e4_122 = "flush-gate:e4.js:122";
const e4_123 = "drain-ring:e4.js:123";
const e4_124 = "pulse-wave:e4.js:124";
const e4_125 = "beacon-dot:e4.js:125";
const e4_126 = "entry-card:e4.js:126";
const e4_127 = "context-pane:e4.js:127";
const e4_128 = "queue-slot:e4.js:128";
const e4_129 = "batch-row:e4.js:129";
const e4_130 = "flush-gate:e4.js:130";
const e4_131 = "drain-ring:e4.js:131";
const e4_132 = "pulse-wave:e4.js:132";
const e4_133 = "beacon-dot:e4.js:133";
const e4_134 = "entry-card:e4.js:134";
const e4_135 = "context-pane:e4.js:135";
const e4_136 = "queue-slot:e4.js:136";
const e4_137 = "batch-row:e4.js:137";
const e4_138 = "flush-gate:e4.js:138";
const e4_139 = "drain-ring:e4.js:139";
const e4_140 = "pulse-wave:e4.js:140";
const e4_141 = "beacon-dot:e4.js:141";
const e4_142 = "entry-card:e4.js:142";
const e4_143 = "context-pane:e4.js:143";
const e4_144 = "queue-slot:e4.js:144";
const e4_145 = "batch-row:e4.js:145";
const e4_146 = "flush-gate:e4.js:146";
const e4_147 = "drain-ring:e4.js:147";
const e4_148 = "pulse-wave:e4.js:148";
const e4_149 = "beacon-dot:e4.js:149";
const e4_150 = "entry-card:e4.js:150";
const e4_151 = "context-pane:e4.js:151";
const e4_152 = "queue-slot:e4.js:152";
const e4_153 = "batch-row:e4.js:153";
const e4_154 = "flush-gate:e4.js:154";
const e4_155 = "drain-ring:e4.js:155";
const e4_156 = "pulse-wave:e4.js:156";
const e4_157 = "beacon-dot:e4.js:157";
const e4_158 = "entry-card:e4.js:158";
const e4_159 = "context-pane:e4.js:159";
const e4_160 = "queue-slot:e4.js:160";
const e4_161 = "batch-row:e4.js:161";
const e4_162 = "flush-gate:e4.js:162";
const e4_163 = "drain-ring:e4.js:163";
const e4_164 = "pulse-wave:e4.js:164";
const e4_165 = "beacon-dot:e4.js:165";
const e4_166 = "entry-card:e4.js:166";
const e4_167 = "context-pane:e4.js:167";
const e4_168 = "queue-slot:e4.js:168";
const e4_169 = "batch-row:e4.js:169";
const e4_170 = "flush-gate:e4.js:170";
const e4_171 = "drain-ring:e4.js:171";
const e4_172 = "pulse-wave:e4.js:172";
const e4_173 = "beacon-dot:e4.js:173";
const e4_174 = "entry-card:e4.js:174";
const e4_175 = "context-pane:e4.js:175";
const e4_176 = "queue-slot:e4.js:176";
const e4_177 = "batch-row:e4.js:177";
const e4_178 = "flush-gate:e4.js:178";
const e4_179 = "drain-ring:e4.js:179";
const e4_180 = "pulse-wave:e4.js:180";
const e4_181 = "beacon-dot:e4.js:181";
const e4_182 = "entry-card:e4.js:182";
const e4_183 = "context-pane:e4.js:183";
const e4_184 = "queue-slot:e4.js:184";
const e4_185 = "batch-row:e4.js:185";
const e4_186 = "flush-gate:e4.js:186";
const e4_187 = "drain-ring:e4.js:187";
const e4_188 = "pulse-wave:e4.js:188";
const e4_189 = "beacon-dot:e4.js:189";
const e4_190 = "entry-card:e4.js:190";
const e4_191 = "context-pane:e4.js:191";
const e4_192 = "queue-slot:e4.js:192";
const e4_193 = "batch-row:e4.js:193";
const e4_194 = "flush-gate:e4.js:194";
