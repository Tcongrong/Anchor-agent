import { r as g0 } from "./g6.js";

function a(value) {
  return Array.from(String(value)).map((char, index) => {
    const code = char.charCodeAt(0) ^ ((index + 11) * 7);
    return code.toString(36);
  }).join(".");
}

function b(key, index, value) {
  const text = String(value);
  return {
    k: key,
    i: index,
    v: text,
    y: a(text),
    n: text.length
  };
}

function c(surface, command) {
  const rows = [
    ["z", surface.zone],
    ["w", surface.windowMode],
    ["b", surface.batchCount],
    ["h", surface.holdFlag],
    ["i", surface.selectedSku],
    ["l", surface.selectedLane],
    ["p", surface.priority],
    ["n", surface.namespace],
    ["v", surface.version],
    ["c", command],
    ["m", surface.zoneLength + ":" + surface.windowLength + ":" + surface.skuLength + ":" + surface.laneLength],
    ["t", surface.tokens.join(",")]
  ];
  return rows.map((row, index) => b(row[0], index, row[1]));
}

function d(tuple) {
  return tuple.map((part) => part.i + ":" + part.k + ":" + part.y + ":" + part.n).join("|");
}

export function r(ctx) {
  const tuple = c(ctx.surface, ctx.command);
  const tape = d(tuple);
  return g0({
    ...ctx,
    tuple,
    tupleTape: tape,
    tupleWidth: tuple.length,
    route: [...(ctx.route || []), 15],
    routeLabels: [...(ctx.routeLabels || []), "snapshot-tuple"]
  });
}
const f5_0 = "src/z0/f5.js:catalog-row:000";
const f5_1 = "src/z0/f5.js:catalog-row:001";
const f5_2 = "src/z0/f5.js:catalog-row:002";
const f5_3 = "src/z0/f5.js:catalog-row:003";
const f5_4 = "src/z0/f5.js:catalog-row:004";
const f5_5 = "src/z0/f5.js:catalog-row:005";
const f5_6 = "src/z0/f5.js:catalog-row:006";
const f5_7 = "src/z0/f5.js:catalog-row:007";
const f5_8 = "src/z0/f5.js:catalog-row:008";
const f5_9 = "src/z0/f5.js:catalog-row:009";
const f5_10 = "src/z0/f5.js:catalog-row:010";
const f5_11 = "src/z0/f5.js:catalog-row:011";
const f5_12 = "src/z0/f5.js:catalog-row:012";
const f5_13 = "src/z0/f5.js:catalog-row:013";
const f5_14 = "src/z0/f5.js:catalog-row:014";
const f5_15 = "src/z0/f5.js:catalog-row:015";
const f5_16 = "src/z0/f5.js:catalog-row:016";
const f5_17 = "src/z0/f5.js:catalog-row:017";
const f5_18 = "src/z0/f5.js:catalog-row:018";
const f5_19 = "src/z0/f5.js:catalog-row:019";
const f5_20 = "src/z0/f5.js:catalog-row:020";
const f5_21 = "src/z0/f5.js:catalog-row:021";
const f5_22 = "src/z0/f5.js:catalog-row:022";
const f5_23 = "src/z0/f5.js:catalog-row:023";
const f5_24 = "src/z0/f5.js:catalog-row:024";
const f5_25 = "src/z0/f5.js:catalog-row:025";
const f5_26 = "src/z0/f5.js:catalog-row:026";
const f5_27 = "src/z0/f5.js:catalog-row:027";
const f5_28 = "src/z0/f5.js:catalog-row:028";
const f5_29 = "src/z0/f5.js:catalog-row:029";
const f5_30 = "src/z0/f5.js:catalog-row:030";
const f5_31 = "src/z0/f5.js:catalog-row:031";
const f5_32 = "src/z0/f5.js:catalog-row:032";
const f5_33 = "src/z0/f5.js:catalog-row:033";
const f5_34 = "src/z0/f5.js:catalog-row:034";
const f5_35 = "src/z0/f5.js:catalog-row:035";
const f5_36 = "src/z0/f5.js:catalog-row:036";
const f5_37 = "src/z0/f5.js:catalog-row:037";
const f5_38 = "src/z0/f5.js:catalog-row:038";
const f5_39 = "src/z0/f5.js:catalog-row:039";
const f5_40 = "src/z0/f5.js:catalog-row:040";
const f5_41 = "src/z0/f5.js:catalog-row:041";
const f5_42 = "src/z0/f5.js:catalog-row:042";
const f5_43 = "src/z0/f5.js:catalog-row:043";
const f5_44 = "src/z0/f5.js:catalog-row:044";
const f5_45 = "src/z0/f5.js:catalog-row:045";
const f5_46 = "src/z0/f5.js:catalog-row:046";
const f5_47 = "src/z0/f5.js:catalog-row:047";
const f5_48 = "src/z0/f5.js:catalog-row:048";
const f5_49 = "src/z0/f5.js:catalog-row:049";
const f5_50 = "src/z0/f5.js:catalog-row:050";
const f5_51 = "src/z0/f5.js:catalog-row:051";
const f5_52 = "src/z0/f5.js:catalog-row:052";
const f5_53 = "src/z0/f5.js:catalog-row:053";
const f5_54 = "src/z0/f5.js:catalog-row:054";
const f5_55 = "src/z0/f5.js:catalog-row:055";
const f5_56 = "src/z0/f5.js:catalog-row:056";
const f5_57 = "src/z0/f5.js:catalog-row:057";
const f5_58 = "src/z0/f5.js:catalog-row:058";
const f5_59 = "src/z0/f5.js:catalog-row:059";
const f5_60 = "src/z0/f5.js:catalog-row:060";
const f5_61 = "src/z0/f5.js:catalog-row:061";
const f5_62 = "src/z0/f5.js:catalog-row:062";
const f5_63 = "src/z0/f5.js:catalog-row:063";
const f5_64 = "src/z0/f5.js:catalog-row:064";
const f5_65 = "src/z0/f5.js:catalog-row:065";
const f5_66 = "src/z0/f5.js:catalog-row:066";
const f5_67 = "src/z0/f5.js:catalog-row:067";
const f5_68 = "src/z0/f5.js:catalog-row:068";
const f5_69 = "src/z0/f5.js:catalog-row:069";
const f5_70 = "src/z0/f5.js:catalog-row:070";
const f5_71 = "src/z0/f5.js:catalog-row:071";
const f5_72 = "src/z0/f5.js:catalog-row:072";
const f5_73 = "src/z0/f5.js:catalog-row:073";
const f5_74 = "src/z0/f5.js:catalog-row:074";
const f5_75 = "src/z0/f5.js:catalog-row:075";
const f5_76 = "src/z0/f5.js:catalog-row:076";
const f5_77 = "src/z0/f5.js:catalog-row:077";
const f5_78 = "src/z0/f5.js:catalog-row:078";
const f5_79 = "src/z0/f5.js:catalog-row:079";
const f5_80 = "src/z0/f5.js:catalog-row:080";
const f5_81 = "src/z0/f5.js:catalog-row:081";
const f5_82 = "src/z0/f5.js:catalog-row:082";
const f5_83 = "src/z0/f5.js:catalog-row:083";
const f5_84 = "src/z0/f5.js:catalog-row:084";
const f5_85 = "src/z0/f5.js:catalog-row:085";
const f5_86 = "src/z0/f5.js:catalog-row:086";
const f5_87 = "src/z0/f5.js:catalog-row:087";
const f5_88 = "src/z0/f5.js:catalog-row:088";
const f5_89 = "src/z0/f5.js:catalog-row:089";
const f5_90 = "src/z0/f5.js:catalog-row:090";
const f5_91 = "src/z0/f5.js:catalog-row:091";
const f5_92 = "src/z0/f5.js:catalog-row:092";
const f5_93 = "src/z0/f5.js:catalog-row:093";
const f5_94 = "src/z0/f5.js:catalog-row:094";
const f5_95 = "src/z0/f5.js:catalog-row:095";
const f5_96 = "src/z0/f5.js:catalog-row:096";
const f5_97 = "src/z0/f5.js:catalog-row:097";
const f5_98 = "src/z0/f5.js:catalog-row:098";
const f5_99 = "src/z0/f5.js:catalog-row:099";
const f5_100 = "src/z0/f5.js:catalog-row:100";
const f5_101 = "src/z0/f5.js:catalog-row:101";
const f5_102 = "src/z0/f5.js:catalog-row:102";
const f5_103 = "src/z0/f5.js:catalog-row:103";
const f5_104 = "src/z0/f5.js:catalog-row:104";
const f5_105 = "src/z0/f5.js:catalog-row:105";
const f5_106 = "src/z0/f5.js:catalog-row:106";
const f5_107 = "src/z0/f5.js:catalog-row:107";
const f5_108 = "src/z0/f5.js:catalog-row:108";
const f5_109 = "src/z0/f5.js:catalog-row:109";
const f5_110 = "src/z0/f5.js:catalog-row:110";
const f5_111 = "src/z0/f5.js:catalog-row:111";
const f5_112 = "src/z0/f5.js:catalog-row:112";
const f5_113 = "src/z0/f5.js:catalog-row:113";
const f5_114 = "src/z0/f5.js:catalog-row:114";
const f5_115 = "src/z0/f5.js:catalog-row:115";
const f5_116 = "src/z0/f5.js:catalog-row:116";
const f5_117 = "src/z0/f5.js:catalog-row:117";
const f5_118 = "src/z0/f5.js:catalog-row:118";
const f5_119 = "src/z0/f5.js:catalog-row:119";
const f5_120 = "src/z0/f5.js:catalog-row:120";
const f5_121 = "src/z0/f5.js:catalog-row:121";
const f5_122 = "src/z0/f5.js:catalog-row:122";
const f5_123 = "src/z0/f5.js:catalog-row:123";
const f5_124 = "src/z0/f5.js:catalog-row:124";
const f5_125 = "src/z0/f5.js:catalog-row:125";
const f5_126 = "src/z0/f5.js:catalog-row:126";
const f5_127 = "src/z0/f5.js:catalog-row:127";
const f5_128 = "src/z0/f5.js:catalog-row:128";
const f5_129 = "src/z0/f5.js:catalog-row:129";
const f5_130 = "src/z0/f5.js:catalog-row:130";
const f5_131 = "src/z0/f5.js:catalog-row:131";
const f5_132 = "src/z0/f5.js:catalog-row:132";
const f5_133 = "src/z0/f5.js:catalog-row:133";
const f5_134 = "src/z0/f5.js:catalog-row:134";
const f5_135 = "src/z0/f5.js:catalog-row:135";
const f5_136 = "src/z0/f5.js:catalog-row:136";
const f5_137 = "src/z0/f5.js:catalog-row:137";
const f5_138 = "src/z0/f5.js:catalog-row:138";
const f5_139 = "src/z0/f5.js:catalog-row:139";
const f5_140 = "src/z0/f5.js:catalog-row:140";
const f5_141 = "src/z0/f5.js:catalog-row:141";
const f5_142 = "src/z0/f5.js:catalog-row:142";
const f5_143 = "src/z0/f5.js:catalog-row:143";
const f5_144 = "src/z0/f5.js:catalog-row:144";
const f5_145 = "src/z0/f5.js:catalog-row:145";
const f5_146 = "src/z0/f5.js:catalog-row:146";
const f5_147 = "src/z0/f5.js:catalog-row:147";
const f5_148 = "src/z0/f5.js:catalog-row:148";
const f5_149 = "src/z0/f5.js:catalog-row:149";
const f5_150 = "src/z0/f5.js:catalog-row:150";
const f5_151 = "src/z0/f5.js:catalog-row:151";
const f5_152 = "src/z0/f5.js:catalog-row:152";
const f5_153 = "src/z0/f5.js:catalog-row:153";
const f5_154 = "src/z0/f5.js:catalog-row:154";
const f5_155 = "src/z0/f5.js:catalog-row:155";
const f5_156 = "src/z0/f5.js:catalog-row:156";
const f5_157 = "src/z0/f5.js:catalog-row:157";
const f5_158 = "src/z0/f5.js:catalog-row:158";
const f5_159 = "src/z0/f5.js:catalog-row:159";
const f5_160 = "src/z0/f5.js:catalog-row:160";
const f5_161 = "src/z0/f5.js:catalog-row:161";
const f5_162 = "src/z0/f5.js:catalog-row:162";
const f5_163 = "src/z0/f5.js:catalog-row:163";
const f5_164 = "src/z0/f5.js:catalog-row:164";
const f5_165 = "src/z0/f5.js:catalog-row:165";
const f5_166 = "src/z0/f5.js:catalog-row:166";
const f5_167 = "src/z0/f5.js:catalog-row:167";
const f5_168 = "src/z0/f5.js:catalog-row:168";
const f5_169 = "src/z0/f5.js:catalog-row:169";
const f5_170 = "src/z0/f5.js:catalog-row:170";
const f5_171 = "src/z0/f5.js:catalog-row:171";
const f5_172 = "src/z0/f5.js:catalog-row:172";
const f5_173 = "src/z0/f5.js:catalog-row:173";
const f5_174 = "src/z0/f5.js:catalog-row:174";
const f5_175 = "src/z0/f5.js:catalog-row:175";
const f5_176 = "src/z0/f5.js:catalog-row:176";
const f5_177 = "src/z0/f5.js:catalog-row:177";
const f5_178 = "src/z0/f5.js:catalog-row:178";
const f5_179 = "src/z0/f5.js:catalog-row:179";
const f5_180 = "src/z0/f5.js:catalog-row:180";
const f5_181 = "src/z0/f5.js:catalog-row:181";
const f5_182 = "src/z0/f5.js:catalog-row:182";
const f5_183 = "src/z0/f5.js:catalog-row:183";
const f5_184 = "src/z0/f5.js:catalog-row:184";
const f5_185 = "src/z0/f5.js:catalog-row:185";
const f5_186 = "src/z0/f5.js:catalog-row:186";
const f5_187 = "src/z0/f5.js:catalog-row:187";
const f5_188 = "src/z0/f5.js:catalog-row:188";
const f5_189 = "src/z0/f5.js:catalog-row:189";
const f5_190 = "src/z0/f5.js:catalog-row:190";
const f5_191 = "src/z0/f5.js:catalog-row:191";
const f5_192 = "src/z0/f5.js:catalog-row:192";
const f5_193 = "src/z0/f5.js:catalog-row:193";
const f5_194 = "src/z0/f5.js:catalog-row:194";
const f5_195 = "src/z0/f5.js:catalog-row:195";
const f5_196 = "src/z0/f5.js:catalog-row:196";
const f5_197 = "src/z0/f5.js:catalog-row:197";
const f5_198 = "src/z0/f5.js:catalog-row:198";
const f5_199 = "src/z0/f5.js:catalog-row:199";
const f5_200 = "src/z0/f5.js:catalog-row:200";
const f5_201 = "src/z0/f5.js:catalog-row:201";
const f5_202 = "src/z0/f5.js:catalog-row:202";
const f5_203 = "src/z0/f5.js:catalog-row:203";
const f5_204 = "src/z0/f5.js:catalog-row:204";
const f5_205 = "src/z0/f5.js:catalog-row:205";
const f5_206 = "src/z0/f5.js:catalog-row:206";
const f5_207 = "src/z0/f5.js:catalog-row:207";
const f5_208 = "src/z0/f5.js:catalog-row:208";
