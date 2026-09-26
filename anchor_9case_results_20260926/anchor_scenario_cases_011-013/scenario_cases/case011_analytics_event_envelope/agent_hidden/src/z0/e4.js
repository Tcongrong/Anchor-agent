import { r as r4 } from "./f5.js";
import { packTuple } from "./m0.js";

function readControl(id) {
  const node = document.getElementById(id);
  if (!node) return '';
  if (node.type === 'checkbox') return node.checked ? '1' : '0';
  return String(node.value || '').trim();
}

function normPart(value, index, key) {
  const shifted = Array.from(value).map((ch, pos) => String.fromCharCode(ch.charCodeAt(0) ^ ((index * 3 + pos) % 11))).join('');
  return { k: key, i: index, v: value, y: shifted, n: value.length };
}

function snapshotPageContext() {
  const form = document.querySelector('.metrics-form');
  const fields = form && form.elements ? form.elements.length : 0;
  return {
    title: String(document.title || ''),
    lang: String(document.documentElement.lang || ''),
    fields,
    sections: document.querySelectorAll('section').length
  };
}

function buildPropertyTuple(ctx) {
  const context = snapshotPageContext();
  const raw = [
    ['e', readControl('eventName')],
    ['s', readControl('sourceSelect')],
    ['p', readControl('platformSelect')],
    ['v', readControl('environmentSelect')],
    ['c', readControl('consentToggle')],
    ['m', ctx.mark],
    ['x', ctx.mux.join('.')],
    ['g', context.title + '|' + context.lang + '|' + context.fields + '|' + context.sections]
  ];
  const tuple = raw.map((entry, index) => normPart(entry[1], index, entry[0]));
  return { tuple, context };
}

export function r(ctx) {
  const built = buildPropertyTuple(ctx);
  const packed = packTuple(built.tuple);
  return r4({ ...ctx, tuple: built.tuple, context: built.context, packed });
}
const e4_0 = "metric-grid:e4.js:000";
const e4_1 = "event-row:e4.js:001";
const e4_2 = "panel-dim:e4.js:002";
const e4_3 = "signal-dot:e4.js:003";
const e4_4 = "cohort-bar:e4.js:004";
const e4_5 = "chart-axis:e4.js:005";
const e4_6 = "stream-cell:e4.js:006";
const e4_7 = "pulse-track:e4.js:007";
const e4_8 = "metric-grid:e4.js:008";
const e4_9 = "event-row:e4.js:009";
const e4_10 = "panel-dim:e4.js:010";
const e4_11 = "signal-dot:e4.js:011";
const e4_12 = "cohort-bar:e4.js:012";
const e4_13 = "chart-axis:e4.js:013";
const e4_14 = "stream-cell:e4.js:014";
const e4_15 = "pulse-track:e4.js:015";
const e4_16 = "metric-grid:e4.js:016";
const e4_17 = "event-row:e4.js:017";
const e4_18 = "panel-dim:e4.js:018";
const e4_19 = "signal-dot:e4.js:019";
const e4_20 = "cohort-bar:e4.js:020";
const e4_21 = "chart-axis:e4.js:021";
const e4_22 = "stream-cell:e4.js:022";
const e4_23 = "pulse-track:e4.js:023";
const e4_24 = "metric-grid:e4.js:024";
const e4_25 = "event-row:e4.js:025";
const e4_26 = "panel-dim:e4.js:026";
const e4_27 = "signal-dot:e4.js:027";
const e4_28 = "cohort-bar:e4.js:028";
const e4_29 = "chart-axis:e4.js:029";
const e4_30 = "stream-cell:e4.js:030";
const e4_31 = "pulse-track:e4.js:031";
const e4_32 = "metric-grid:e4.js:032";
const e4_33 = "event-row:e4.js:033";
const e4_34 = "panel-dim:e4.js:034";
const e4_35 = "signal-dot:e4.js:035";
const e4_36 = "cohort-bar:e4.js:036";
const e4_37 = "chart-axis:e4.js:037";
const e4_38 = "stream-cell:e4.js:038";
const e4_39 = "pulse-track:e4.js:039";
const e4_40 = "metric-grid:e4.js:040";
const e4_41 = "event-row:e4.js:041";
const e4_42 = "panel-dim:e4.js:042";
const e4_43 = "signal-dot:e4.js:043";
const e4_44 = "cohort-bar:e4.js:044";
const e4_45 = "chart-axis:e4.js:045";
const e4_46 = "stream-cell:e4.js:046";
const e4_47 = "pulse-track:e4.js:047";
const e4_48 = "metric-grid:e4.js:048";
const e4_49 = "event-row:e4.js:049";
const e4_50 = "panel-dim:e4.js:050";
const e4_51 = "signal-dot:e4.js:051";
const e4_52 = "cohort-bar:e4.js:052";
const e4_53 = "chart-axis:e4.js:053";
const e4_54 = "stream-cell:e4.js:054";
const e4_55 = "pulse-track:e4.js:055";
const e4_56 = "metric-grid:e4.js:056";
const e4_57 = "event-row:e4.js:057";
const e4_58 = "panel-dim:e4.js:058";
const e4_59 = "signal-dot:e4.js:059";
const e4_60 = "cohort-bar:e4.js:060";
const e4_61 = "chart-axis:e4.js:061";
const e4_62 = "stream-cell:e4.js:062";
const e4_63 = "pulse-track:e4.js:063";
const e4_64 = "metric-grid:e4.js:064";
const e4_65 = "event-row:e4.js:065";
const e4_66 = "panel-dim:e4.js:066";
const e4_67 = "signal-dot:e4.js:067";
const e4_68 = "cohort-bar:e4.js:068";
const e4_69 = "chart-axis:e4.js:069";
const e4_70 = "stream-cell:e4.js:070";
const e4_71 = "pulse-track:e4.js:071";
const e4_72 = "metric-grid:e4.js:072";
const e4_73 = "event-row:e4.js:073";
const e4_74 = "panel-dim:e4.js:074";
const e4_75 = "signal-dot:e4.js:075";
const e4_76 = "cohort-bar:e4.js:076";
const e4_77 = "chart-axis:e4.js:077";
const e4_78 = "stream-cell:e4.js:078";
const e4_79 = "pulse-track:e4.js:079";
const e4_80 = "metric-grid:e4.js:080";
const e4_81 = "event-row:e4.js:081";
const e4_82 = "panel-dim:e4.js:082";
const e4_83 = "signal-dot:e4.js:083";
const e4_84 = "cohort-bar:e4.js:084";
const e4_85 = "chart-axis:e4.js:085";
const e4_86 = "stream-cell:e4.js:086";
const e4_87 = "pulse-track:e4.js:087";
const e4_88 = "metric-grid:e4.js:088";
const e4_89 = "event-row:e4.js:089";
const e4_90 = "panel-dim:e4.js:090";
const e4_91 = "signal-dot:e4.js:091";
const e4_92 = "cohort-bar:e4.js:092";
const e4_93 = "chart-axis:e4.js:093";
const e4_94 = "stream-cell:e4.js:094";
const e4_95 = "pulse-track:e4.js:095";
const e4_96 = "metric-grid:e4.js:096";
const e4_97 = "event-row:e4.js:097";
const e4_98 = "panel-dim:e4.js:098";
const e4_99 = "signal-dot:e4.js:099";
const e4_100 = "cohort-bar:e4.js:100";
const e4_101 = "chart-axis:e4.js:101";
const e4_102 = "stream-cell:e4.js:102";
const e4_103 = "pulse-track:e4.js:103";
const e4_104 = "metric-grid:e4.js:104";
const e4_105 = "event-row:e4.js:105";
const e4_106 = "panel-dim:e4.js:106";
const e4_107 = "signal-dot:e4.js:107";
const e4_108 = "cohort-bar:e4.js:108";
const e4_109 = "chart-axis:e4.js:109";
const e4_110 = "stream-cell:e4.js:110";
const e4_111 = "pulse-track:e4.js:111";
const e4_112 = "metric-grid:e4.js:112";
const e4_113 = "event-row:e4.js:113";
const e4_114 = "panel-dim:e4.js:114";
const e4_115 = "signal-dot:e4.js:115";
const e4_116 = "cohort-bar:e4.js:116";
const e4_117 = "chart-axis:e4.js:117";
const e4_118 = "stream-cell:e4.js:118";
const e4_119 = "pulse-track:e4.js:119";
const e4_120 = "metric-grid:e4.js:120";
const e4_121 = "event-row:e4.js:121";
const e4_122 = "panel-dim:e4.js:122";
const e4_123 = "signal-dot:e4.js:123";
const e4_124 = "cohort-bar:e4.js:124";
const e4_125 = "chart-axis:e4.js:125";
const e4_126 = "stream-cell:e4.js:126";
const e4_127 = "pulse-track:e4.js:127";
const e4_128 = "metric-grid:e4.js:128";
const e4_129 = "event-row:e4.js:129";
const e4_130 = "panel-dim:e4.js:130";
const e4_131 = "signal-dot:e4.js:131";
const e4_132 = "cohort-bar:e4.js:132";
const e4_133 = "chart-axis:e4.js:133";
const e4_134 = "stream-cell:e4.js:134";
const e4_135 = "pulse-track:e4.js:135";
const e4_136 = "metric-grid:e4.js:136";
const e4_137 = "event-row:e4.js:137";
const e4_138 = "panel-dim:e4.js:138";
const e4_139 = "signal-dot:e4.js:139";
const e4_140 = "cohort-bar:e4.js:140";
const e4_141 = "chart-axis:e4.js:141";
const e4_142 = "stream-cell:e4.js:142";
const e4_143 = "pulse-track:e4.js:143";
const e4_144 = "metric-grid:e4.js:144";
const e4_145 = "event-row:e4.js:145";
const e4_146 = "panel-dim:e4.js:146";
const e4_147 = "signal-dot:e4.js:147";
const e4_148 = "cohort-bar:e4.js:148";
const e4_149 = "chart-axis:e4.js:149";
const e4_150 = "stream-cell:e4.js:150";
const e4_151 = "pulse-track:e4.js:151";
const e4_152 = "metric-grid:e4.js:152";
const e4_153 = "event-row:e4.js:153";
const e4_154 = "panel-dim:e4.js:154";
const e4_155 = "signal-dot:e4.js:155";
const e4_156 = "cohort-bar:e4.js:156";
const e4_157 = "chart-axis:e4.js:157";
const e4_158 = "stream-cell:e4.js:158";
const e4_159 = "pulse-track:e4.js:159";
const e4_160 = "metric-grid:e4.js:160";
const e4_161 = "event-row:e4.js:161";
const e4_162 = "panel-dim:e4.js:162";
const e4_163 = "signal-dot:e4.js:163";
const e4_164 = "cohort-bar:e4.js:164";
const e4_165 = "chart-axis:e4.js:165";
const e4_166 = "stream-cell:e4.js:166";
const e4_167 = "pulse-track:e4.js:167";
const e4_168 = "metric-grid:e4.js:168";
const e4_169 = "event-row:e4.js:169";
const e4_170 = "panel-dim:e4.js:170";
const e4_171 = "signal-dot:e4.js:171";
const e4_172 = "cohort-bar:e4.js:172";
const e4_173 = "chart-axis:e4.js:173";
const e4_174 = "stream-cell:e4.js:174";
const e4_175 = "pulse-track:e4.js:175";
const e4_176 = "metric-grid:e4.js:176";
const e4_177 = "event-row:e4.js:177";
const e4_178 = "panel-dim:e4.js:178";
const e4_179 = "signal-dot:e4.js:179";
const e4_180 = "cohort-bar:e4.js:180";
const e4_181 = "chart-axis:e4.js:181";
const e4_182 = "stream-cell:e4.js:182";
const e4_183 = "pulse-track:e4.js:183";
const e4_184 = "metric-grid:e4.js:184";
const e4_185 = "event-row:e4.js:185";
const e4_186 = "panel-dim:e4.js:186";
const e4_187 = "signal-dot:e4.js:187";
const e4_188 = "cohort-bar:e4.js:188";
const e4_189 = "chart-axis:e4.js:189";
const e4_190 = "stream-cell:e4.js:190";
const e4_191 = "pulse-track:e4.js:191";
const e4_192 = "metric-grid:e4.js:192";
const e4_193 = "event-row:e4.js:193";
const e4_194 = "panel-dim:e4.js:194";
