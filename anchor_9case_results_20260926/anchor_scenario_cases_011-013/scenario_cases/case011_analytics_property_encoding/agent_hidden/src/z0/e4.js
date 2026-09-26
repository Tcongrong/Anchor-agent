import { r as r4 } from "./f5.js";
import { packTuple } from "./m0.js";

function readControl(id) {
  const node = document.getElementById(id);
  if (!node) return '';
  if (node.type === 'checkbox') return node.checked ? '1' : '0';
  return String(node.value || '').trim();
}

function scrubPII(value, enabled) {
  const text = String(value || '');
  if (!enabled) return text.trim();
  return text
    .replace(/@[\w.]+/g, '')
    .replace(/\d+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function sortEntries(entries) {
  return entries.slice().sort((a, b) => {
    if (a.k !== b.k) return a.k < b.k ? -1 : 1;
    return a.i - b.i;
  });
}

function normPart(value, index, key) {
  const shifted = Array.from(value).map((ch, pos) => String.fromCharCode(ch.charCodeAt(0) ^ ((index * 5 + pos * 2) % 13))).join('');
  return { k: key, i: index, v: value, y: shifted, n: value.length };
}

function snapshotEncoderContext() {
  const form = document.querySelector('.props-form');
  const fields = form && form.elements ? form.elements.length : 0;
  return {
    title: String(document.title || ''),
    lang: String(document.documentElement.lang || ''),
    fields,
    sections: document.querySelectorAll('section').length
  };
}

function buildEntryTuple(ctx) {
  const context = snapshotEncoderContext();
  const stripEnabled = readControl('stripPII') === '1';
  const raw = [
    ['k', readControl('propertyKey')],
    ['v', scrubPII(readControl('propertyValue'), stripEnabled)],
    ['s', readControl('propScope')],
    ['p', stripEnabled ? '1' : '0'],
    ['m', ctx.mark],
    ['x', ctx.mux.join('.')],
    ['g', context.title + '|' + context.lang + '|' + context.fields + '|' + context.sections]
  ];
  const tuple = sortEntries(raw.map((entry, index) => normPart(entry[1], index, entry[0])));
  return { tuple, context };
}

export function r(ctx) {
  const built = buildEntryTuple(ctx);
  const packed = packTuple(built.tuple);
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Reading properties';
  return r4({ ...ctx, tuple: built.tuple, context: built.context, packed, scope: readControl('propScope') });
}
const e4_0 = "prop-card:e4.js:000";
const e4_1 = "scope-ring:e4.js:001";
const e4_2 = "value-chip:e4.js:002";
const e4_3 = "strip-gate:e4.js:003";
const e4_4 = "bucket-row:e4.js:004";
const e4_5 = "code-pane:e4.js:005";
const e4_6 = "entry-cell:e4.js:006";
const e4_7 = "frame-dot:e4.js:007";
const e4_8 = "prop-card:e4.js:008";
const e4_9 = "scope-ring:e4.js:009";
const e4_10 = "value-chip:e4.js:010";
const e4_11 = "strip-gate:e4.js:011";
const e4_12 = "bucket-row:e4.js:012";
const e4_13 = "code-pane:e4.js:013";
const e4_14 = "entry-cell:e4.js:014";
const e4_15 = "frame-dot:e4.js:015";
const e4_16 = "prop-card:e4.js:016";
const e4_17 = "scope-ring:e4.js:017";
const e4_18 = "value-chip:e4.js:018";
const e4_19 = "strip-gate:e4.js:019";
const e4_20 = "bucket-row:e4.js:020";
const e4_21 = "code-pane:e4.js:021";
const e4_22 = "entry-cell:e4.js:022";
const e4_23 = "frame-dot:e4.js:023";
const e4_24 = "prop-card:e4.js:024";
const e4_25 = "scope-ring:e4.js:025";
const e4_26 = "value-chip:e4.js:026";
const e4_27 = "strip-gate:e4.js:027";
const e4_28 = "bucket-row:e4.js:028";
const e4_29 = "code-pane:e4.js:029";
const e4_30 = "entry-cell:e4.js:030";
const e4_31 = "frame-dot:e4.js:031";
const e4_32 = "prop-card:e4.js:032";
const e4_33 = "scope-ring:e4.js:033";
const e4_34 = "value-chip:e4.js:034";
const e4_35 = "strip-gate:e4.js:035";
const e4_36 = "bucket-row:e4.js:036";
const e4_37 = "code-pane:e4.js:037";
const e4_38 = "entry-cell:e4.js:038";
const e4_39 = "frame-dot:e4.js:039";
const e4_40 = "prop-card:e4.js:040";
const e4_41 = "scope-ring:e4.js:041";
const e4_42 = "value-chip:e4.js:042";
const e4_43 = "strip-gate:e4.js:043";
const e4_44 = "bucket-row:e4.js:044";
const e4_45 = "code-pane:e4.js:045";
const e4_46 = "entry-cell:e4.js:046";
const e4_47 = "frame-dot:e4.js:047";
const e4_48 = "prop-card:e4.js:048";
const e4_49 = "scope-ring:e4.js:049";
const e4_50 = "value-chip:e4.js:050";
const e4_51 = "strip-gate:e4.js:051";
const e4_52 = "bucket-row:e4.js:052";
const e4_53 = "code-pane:e4.js:053";
const e4_54 = "entry-cell:e4.js:054";
const e4_55 = "frame-dot:e4.js:055";
const e4_56 = "prop-card:e4.js:056";
const e4_57 = "scope-ring:e4.js:057";
const e4_58 = "value-chip:e4.js:058";
const e4_59 = "strip-gate:e4.js:059";
const e4_60 = "bucket-row:e4.js:060";
const e4_61 = "code-pane:e4.js:061";
const e4_62 = "entry-cell:e4.js:062";
const e4_63 = "frame-dot:e4.js:063";
const e4_64 = "prop-card:e4.js:064";
const e4_65 = "scope-ring:e4.js:065";
const e4_66 = "value-chip:e4.js:066";
const e4_67 = "strip-gate:e4.js:067";
const e4_68 = "bucket-row:e4.js:068";
const e4_69 = "code-pane:e4.js:069";
const e4_70 = "entry-cell:e4.js:070";
const e4_71 = "frame-dot:e4.js:071";
const e4_72 = "prop-card:e4.js:072";
const e4_73 = "scope-ring:e4.js:073";
const e4_74 = "value-chip:e4.js:074";
const e4_75 = "strip-gate:e4.js:075";
const e4_76 = "bucket-row:e4.js:076";
const e4_77 = "code-pane:e4.js:077";
const e4_78 = "entry-cell:e4.js:078";
const e4_79 = "frame-dot:e4.js:079";
const e4_80 = "prop-card:e4.js:080";
const e4_81 = "scope-ring:e4.js:081";
const e4_82 = "value-chip:e4.js:082";
const e4_83 = "strip-gate:e4.js:083";
const e4_84 = "bucket-row:e4.js:084";
const e4_85 = "code-pane:e4.js:085";
const e4_86 = "entry-cell:e4.js:086";
const e4_87 = "frame-dot:e4.js:087";
const e4_88 = "prop-card:e4.js:088";
const e4_89 = "scope-ring:e4.js:089";
const e4_90 = "value-chip:e4.js:090";
const e4_91 = "strip-gate:e4.js:091";
const e4_92 = "bucket-row:e4.js:092";
const e4_93 = "code-pane:e4.js:093";
const e4_94 = "entry-cell:e4.js:094";
const e4_95 = "frame-dot:e4.js:095";
const e4_96 = "prop-card:e4.js:096";
const e4_97 = "scope-ring:e4.js:097";
const e4_98 = "value-chip:e4.js:098";
const e4_99 = "strip-gate:e4.js:099";
const e4_100 = "bucket-row:e4.js:100";
const e4_101 = "code-pane:e4.js:101";
const e4_102 = "entry-cell:e4.js:102";
const e4_103 = "frame-dot:e4.js:103";
const e4_104 = "prop-card:e4.js:104";
const e4_105 = "scope-ring:e4.js:105";
const e4_106 = "value-chip:e4.js:106";
const e4_107 = "strip-gate:e4.js:107";
const e4_108 = "bucket-row:e4.js:108";
const e4_109 = "code-pane:e4.js:109";
const e4_110 = "entry-cell:e4.js:110";
const e4_111 = "frame-dot:e4.js:111";
const e4_112 = "prop-card:e4.js:112";
const e4_113 = "scope-ring:e4.js:113";
const e4_114 = "value-chip:e4.js:114";
const e4_115 = "strip-gate:e4.js:115";
const e4_116 = "bucket-row:e4.js:116";
const e4_117 = "code-pane:e4.js:117";
const e4_118 = "entry-cell:e4.js:118";
const e4_119 = "frame-dot:e4.js:119";
const e4_120 = "prop-card:e4.js:120";
const e4_121 = "scope-ring:e4.js:121";
const e4_122 = "value-chip:e4.js:122";
const e4_123 = "strip-gate:e4.js:123";
const e4_124 = "bucket-row:e4.js:124";
const e4_125 = "code-pane:e4.js:125";
const e4_126 = "entry-cell:e4.js:126";
const e4_127 = "frame-dot:e4.js:127";
const e4_128 = "prop-card:e4.js:128";
const e4_129 = "scope-ring:e4.js:129";
const e4_130 = "value-chip:e4.js:130";
const e4_131 = "strip-gate:e4.js:131";
const e4_132 = "bucket-row:e4.js:132";
const e4_133 = "code-pane:e4.js:133";
const e4_134 = "entry-cell:e4.js:134";
const e4_135 = "frame-dot:e4.js:135";
const e4_136 = "prop-card:e4.js:136";
const e4_137 = "scope-ring:e4.js:137";
const e4_138 = "value-chip:e4.js:138";
const e4_139 = "strip-gate:e4.js:139";
const e4_140 = "bucket-row:e4.js:140";
const e4_141 = "code-pane:e4.js:141";
const e4_142 = "entry-cell:e4.js:142";
const e4_143 = "frame-dot:e4.js:143";
const e4_144 = "prop-card:e4.js:144";
const e4_145 = "scope-ring:e4.js:145";
const e4_146 = "value-chip:e4.js:146";
const e4_147 = "strip-gate:e4.js:147";
const e4_148 = "bucket-row:e4.js:148";
const e4_149 = "code-pane:e4.js:149";
const e4_150 = "entry-cell:e4.js:150";
const e4_151 = "frame-dot:e4.js:151";
const e4_152 = "prop-card:e4.js:152";
const e4_153 = "scope-ring:e4.js:153";
const e4_154 = "value-chip:e4.js:154";
const e4_155 = "strip-gate:e4.js:155";
const e4_156 = "bucket-row:e4.js:156";
const e4_157 = "code-pane:e4.js:157";
const e4_158 = "entry-cell:e4.js:158";
const e4_159 = "frame-dot:e4.js:159";
const e4_160 = "prop-card:e4.js:160";
const e4_161 = "scope-ring:e4.js:161";
const e4_162 = "value-chip:e4.js:162";
const e4_163 = "strip-gate:e4.js:163";
const e4_164 = "bucket-row:e4.js:164";
const e4_165 = "code-pane:e4.js:165";
const e4_166 = "entry-cell:e4.js:166";
const e4_167 = "frame-dot:e4.js:167";
const e4_168 = "prop-card:e4.js:168";
const e4_169 = "scope-ring:e4.js:169";
const e4_170 = "value-chip:e4.js:170";
const e4_171 = "strip-gate:e4.js:171";
const e4_172 = "bucket-row:e4.js:172";
const e4_173 = "code-pane:e4.js:173";
const e4_174 = "entry-cell:e4.js:174";
