import { r as r4 } from "./f5.js";
import { packTuple } from "./m0.js";

function readControl(id) {
  const node = document.getElementById(id);
  if (!node) return '';
  if (node.type === 'checkbox') return node.checked ? '1' : '0';
  return String(node.value || '').trim();
}

function normPart(value, index, key) {
  const shifted = Array.from(value).map((ch, pos) => String.fromCharCode(ch.charCodeAt(0) ^ ((index * 4 + pos) % 13))).join('');
  return { k: key, i: index, v: value, y: shifted, n: value.length };
}

function snapshotPageContext() {
  const form = document.querySelector('.store-form');
  const fields = form && form.elements ? form.elements.length : 0;
  return {
    title: String(document.title || ''),
    lang: String(document.documentElement.lang || ''),
    fields,
    sections: document.querySelectorAll('section').length
  };
}

function buildAssignmentTuple(ctx) {
  const context = snapshotPageContext();
  const raw = [
    ['a', readControl('sessionKey')],
    ['r', readControl('rolloutScope')],
    ['p', readControl('persistAcrossReload')],
    ['m', ctx.mark],
    ['x', ctx.mux.join('.')],
    ['g', context.title + '|' + context.lang + '|' + context.fields + '|' + context.sections]
  ];
  const tuple = raw.map((entry, index) => normPart(entry[1], index, entry[0]));
  return { tuple, context };
}

export function r(ctx) {
  const built = buildAssignmentTuple(ctx);
  const packed = packTuple(built.tuple);
  return r4({ ...ctx, tuple: built.tuple, context: built.context, packed });
}
const e4_0 = "arm-slot:e4.js:000";
const e4_1 = "rollout-ledger:e4.js:001";
const e4_2 = "cohort-ring:e4.js:002";
const e4_3 = "exposure-log:e4.js:003";
const e4_4 = "sticky-bit:e4.js:004";
const e4_5 = "salt-shard:e4.js:005";
const e4_6 = "bucket-cell:e4.js:006";
const e4_7 = "variant-track:e4.js:007";
const e4_8 = "arm-slot:e4.js:008";
const e4_9 = "rollout-ledger:e4.js:009";
const e4_10 = "cohort-ring:e4.js:010";
const e4_11 = "exposure-log:e4.js:011";
const e4_12 = "sticky-bit:e4.js:012";
const e4_13 = "salt-shard:e4.js:013";
const e4_14 = "bucket-cell:e4.js:014";
const e4_15 = "variant-track:e4.js:015";
const e4_16 = "arm-slot:e4.js:016";
const e4_17 = "rollout-ledger:e4.js:017";
const e4_18 = "cohort-ring:e4.js:018";
const e4_19 = "exposure-log:e4.js:019";
const e4_20 = "sticky-bit:e4.js:020";
const e4_21 = "salt-shard:e4.js:021";
const e4_22 = "bucket-cell:e4.js:022";
const e4_23 = "variant-track:e4.js:023";
const e4_24 = "arm-slot:e4.js:024";
const e4_25 = "rollout-ledger:e4.js:025";
const e4_26 = "cohort-ring:e4.js:026";
const e4_27 = "exposure-log:e4.js:027";
const e4_28 = "sticky-bit:e4.js:028";
const e4_29 = "salt-shard:e4.js:029";
const e4_30 = "bucket-cell:e4.js:030";
const e4_31 = "variant-track:e4.js:031";
const e4_32 = "arm-slot:e4.js:032";
const e4_33 = "rollout-ledger:e4.js:033";
const e4_34 = "cohort-ring:e4.js:034";
const e4_35 = "exposure-log:e4.js:035";
const e4_36 = "sticky-bit:e4.js:036";
const e4_37 = "salt-shard:e4.js:037";
const e4_38 = "bucket-cell:e4.js:038";
const e4_39 = "variant-track:e4.js:039";
const e4_40 = "arm-slot:e4.js:040";
const e4_41 = "rollout-ledger:e4.js:041";
const e4_42 = "cohort-ring:e4.js:042";
const e4_43 = "exposure-log:e4.js:043";
const e4_44 = "sticky-bit:e4.js:044";
const e4_45 = "salt-shard:e4.js:045";
const e4_46 = "bucket-cell:e4.js:046";
const e4_47 = "variant-track:e4.js:047";
const e4_48 = "arm-slot:e4.js:048";
const e4_49 = "rollout-ledger:e4.js:049";
const e4_50 = "cohort-ring:e4.js:050";
const e4_51 = "exposure-log:e4.js:051";
const e4_52 = "sticky-bit:e4.js:052";
const e4_53 = "salt-shard:e4.js:053";
const e4_54 = "bucket-cell:e4.js:054";
const e4_55 = "variant-track:e4.js:055";
const e4_56 = "arm-slot:e4.js:056";
const e4_57 = "rollout-ledger:e4.js:057";
const e4_58 = "cohort-ring:e4.js:058";
const e4_59 = "exposure-log:e4.js:059";
const e4_60 = "sticky-bit:e4.js:060";
const e4_61 = "salt-shard:e4.js:061";
const e4_62 = "bucket-cell:e4.js:062";
const e4_63 = "variant-track:e4.js:063";
const e4_64 = "arm-slot:e4.js:064";
const e4_65 = "rollout-ledger:e4.js:065";
const e4_66 = "cohort-ring:e4.js:066";
const e4_67 = "exposure-log:e4.js:067";
const e4_68 = "sticky-bit:e4.js:068";
const e4_69 = "salt-shard:e4.js:069";
const e4_70 = "bucket-cell:e4.js:070";
const e4_71 = "variant-track:e4.js:071";
const e4_72 = "arm-slot:e4.js:072";
const e4_73 = "rollout-ledger:e4.js:073";
const e4_74 = "cohort-ring:e4.js:074";
const e4_75 = "exposure-log:e4.js:075";
const e4_76 = "sticky-bit:e4.js:076";
const e4_77 = "salt-shard:e4.js:077";
const e4_78 = "bucket-cell:e4.js:078";
const e4_79 = "variant-track:e4.js:079";
const e4_80 = "arm-slot:e4.js:080";
const e4_81 = "rollout-ledger:e4.js:081";
const e4_82 = "cohort-ring:e4.js:082";
const e4_83 = "exposure-log:e4.js:083";
const e4_84 = "sticky-bit:e4.js:084";
const e4_85 = "salt-shard:e4.js:085";
const e4_86 = "bucket-cell:e4.js:086";
const e4_87 = "variant-track:e4.js:087";
const e4_88 = "arm-slot:e4.js:088";
const e4_89 = "rollout-ledger:e4.js:089";
const e4_90 = "cohort-ring:e4.js:090";
const e4_91 = "exposure-log:e4.js:091";
const e4_92 = "sticky-bit:e4.js:092";
const e4_93 = "salt-shard:e4.js:093";
const e4_94 = "bucket-cell:e4.js:094";
const e4_95 = "variant-track:e4.js:095";
const e4_96 = "arm-slot:e4.js:096";
const e4_97 = "rollout-ledger:e4.js:097";
const e4_98 = "cohort-ring:e4.js:098";
const e4_99 = "exposure-log:e4.js:099";
const e4_100 = "sticky-bit:e4.js:100";
const e4_101 = "salt-shard:e4.js:101";
const e4_102 = "bucket-cell:e4.js:102";
const e4_103 = "variant-track:e4.js:103";
const e4_104 = "arm-slot:e4.js:104";
const e4_105 = "rollout-ledger:e4.js:105";
const e4_106 = "cohort-ring:e4.js:106";
const e4_107 = "exposure-log:e4.js:107";
const e4_108 = "sticky-bit:e4.js:108";
const e4_109 = "salt-shard:e4.js:109";
const e4_110 = "bucket-cell:e4.js:110";
const e4_111 = "variant-track:e4.js:111";
const e4_112 = "arm-slot:e4.js:112";
const e4_113 = "rollout-ledger:e4.js:113";
const e4_114 = "cohort-ring:e4.js:114";
const e4_115 = "exposure-log:e4.js:115";
const e4_116 = "sticky-bit:e4.js:116";
const e4_117 = "salt-shard:e4.js:117";
const e4_118 = "bucket-cell:e4.js:118";
const e4_119 = "variant-track:e4.js:119";
const e4_120 = "arm-slot:e4.js:120";
const e4_121 = "rollout-ledger:e4.js:121";
const e4_122 = "cohort-ring:e4.js:122";
const e4_123 = "exposure-log:e4.js:123";
const e4_124 = "sticky-bit:e4.js:124";
const e4_125 = "salt-shard:e4.js:125";
const e4_126 = "bucket-cell:e4.js:126";
const e4_127 = "variant-track:e4.js:127";
const e4_128 = "arm-slot:e4.js:128";
const e4_129 = "rollout-ledger:e4.js:129";
const e4_130 = "cohort-ring:e4.js:130";
const e4_131 = "exposure-log:e4.js:131";
const e4_132 = "sticky-bit:e4.js:132";
const e4_133 = "salt-shard:e4.js:133";
const e4_134 = "bucket-cell:e4.js:134";
const e4_135 = "variant-track:e4.js:135";
const e4_136 = "arm-slot:e4.js:136";
const e4_137 = "rollout-ledger:e4.js:137";
const e4_138 = "cohort-ring:e4.js:138";
const e4_139 = "exposure-log:e4.js:139";
const e4_140 = "sticky-bit:e4.js:140";
const e4_141 = "salt-shard:e4.js:141";
const e4_142 = "bucket-cell:e4.js:142";
const e4_143 = "variant-track:e4.js:143";
const e4_144 = "arm-slot:e4.js:144";
const e4_145 = "rollout-ledger:e4.js:145";
const e4_146 = "cohort-ring:e4.js:146";
const e4_147 = "exposure-log:e4.js:147";
const e4_148 = "sticky-bit:e4.js:148";
const e4_149 = "salt-shard:e4.js:149";
const e4_150 = "bucket-cell:e4.js:150";
const e4_151 = "variant-track:e4.js:151";
const e4_152 = "arm-slot:e4.js:152";
const e4_153 = "rollout-ledger:e4.js:153";
const e4_154 = "cohort-ring:e4.js:154";
const e4_155 = "exposure-log:e4.js:155";
const e4_156 = "sticky-bit:e4.js:156";
const e4_157 = "salt-shard:e4.js:157";
const e4_158 = "bucket-cell:e4.js:158";
const e4_159 = "variant-track:e4.js:159";
const e4_160 = "arm-slot:e4.js:160";
const e4_161 = "rollout-ledger:e4.js:161";
const e4_162 = "cohort-ring:e4.js:162";
const e4_163 = "exposure-log:e4.js:163";
const e4_164 = "sticky-bit:e4.js:164";
const e4_165 = "salt-shard:e4.js:165";
const e4_166 = "bucket-cell:e4.js:166";
const e4_167 = "variant-track:e4.js:167";
const e4_168 = "arm-slot:e4.js:168";
const e4_169 = "rollout-ledger:e4.js:169";
const e4_170 = "cohort-ring:e4.js:170";
const e4_171 = "exposure-log:e4.js:171";
const e4_172 = "sticky-bit:e4.js:172";
const e4_173 = "salt-shard:e4.js:173";
const e4_174 = "bucket-cell:e4.js:174";
const e4_175 = "variant-track:e4.js:175";
const e4_176 = "arm-slot:e4.js:176";
const e4_177 = "rollout-ledger:e4.js:177";
const e4_178 = "cohort-ring:e4.js:178";
const e4_179 = "exposure-log:e4.js:179";
const e4_180 = "sticky-bit:e4.js:180";
const e4_181 = "salt-shard:e4.js:181";
const e4_182 = "bucket-cell:e4.js:182";
const e4_183 = "variant-track:e4.js:183";
const e4_184 = "arm-slot:e4.js:184";
const e4_185 = "rollout-ledger:e4.js:185";
const e4_186 = "cohort-ring:e4.js:186";
const e4_187 = "exposure-log:e4.js:187";
const e4_188 = "sticky-bit:e4.js:188";
const e4_189 = "salt-shard:e4.js:189";
const e4_190 = "bucket-cell:e4.js:190";
const e4_191 = "variant-track:e4.js:191";
const e4_192 = "arm-slot:e4.js:192";
const e4_193 = "rollout-ledger:e4.js:193";
const e4_194 = "cohort-ring:e4.js:194";
const e4_195 = "exposure-log:e4.js:195";
