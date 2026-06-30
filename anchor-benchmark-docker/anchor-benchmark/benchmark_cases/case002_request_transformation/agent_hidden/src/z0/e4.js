import { r as r4 } from "./f5.js";
import { a as pack } from "./m0.js";

function q(id) {
  const node = document.getElementById(id);
  if (!node) return '';
  if (node.type === 'checkbox') return node.checked ? '1' : '0';
  if (node.tagName === 'SELECT') return String(node.value || '').trim();
  return String(node.value || '').trim();
}

function y(value, index, key) {
  const shifted = Array.from(value).map((ch, pos) => String.fromCharCode(ch.charCodeAt(0) ^ ((index + pos) % 7))).join('');
  return { k: key, i: index, v: value, y: shifted, n: value.length };
}

function z(ctx) {
  const staged = ctx.state && ctx.state.requestStage ? ctx.state.requestStage : { marker: 'none', stamp: 0 };
  const runtime = ctx.meta && ctx.meta.runtime ? ctx.meta.runtime : {};
  const raw = [
    ['s', q('sourceBytes')],
    ['c', q('chunkSize')],
    ['h', q('includeHeader')],
    ['m', q('encodingMode')],
    ['p', q('profileSelect')],
    ['g', staged.marker],
    ['u', String(runtime.sourceLength || 0) + ':' + String(runtime.retryValue || 0)],
    ['x', ctx.mux.join(':')],
    ['k', ctx.mark],
    ['f', ctx.meta.focus || 'none'],
    ['t', String(ctx.req.kind) + ':' + String(staged.stamp || 0)]
  ];
  return raw.map(([key, value], index) => y(value, index, key));
}

export function r(ctx) {
  const tuple = z(ctx);
  const packed = pack(tuple);
  return r4({ ...ctx, tuple, packed });
}
const e4_0 = "request-header:e4.js:000";
const e4_1 = "response-body:e4.js:001";
const e4_2 = "middleware-pipe:e4.js:002";
const e4_3 = "auth-token:e4.js:003";
const e4_4 = "route-param:e4.js:004";
const e4_5 = "query-string:e4.js:005";
const e4_6 = "payload-field:e4.js:006";
const e4_7 = "intercept-hook:e4.js:007";
const e4_8 = "request-header:e4.js:008";
const e4_9 = "response-body:e4.js:009";
const e4_10 = "middleware-pipe:e4.js:010";
const e4_11 = "auth-token:e4.js:011";
const e4_12 = "route-param:e4.js:012";
const e4_13 = "query-string:e4.js:013";
const e4_14 = "payload-field:e4.js:014";
const e4_15 = "intercept-hook:e4.js:015";
const e4_16 = "request-header:e4.js:016";
const e4_17 = "response-body:e4.js:017";
const e4_18 = "middleware-pipe:e4.js:018";
const e4_19 = "auth-token:e4.js:019";
const e4_20 = "route-param:e4.js:020";
const e4_21 = "query-string:e4.js:021";
const e4_22 = "payload-field:e4.js:022";
const e4_23 = "intercept-hook:e4.js:023";
const e4_24 = "request-header:e4.js:024";
const e4_25 = "response-body:e4.js:025";
const e4_26 = "middleware-pipe:e4.js:026";
const e4_27 = "auth-token:e4.js:027";
const e4_28 = "route-param:e4.js:028";
const e4_29 = "query-string:e4.js:029";
const e4_30 = "payload-field:e4.js:030";
const e4_31 = "intercept-hook:e4.js:031";
const e4_32 = "request-header:e4.js:032";
const e4_33 = "response-body:e4.js:033";
const e4_34 = "middleware-pipe:e4.js:034";
const e4_35 = "auth-token:e4.js:035";
const e4_36 = "route-param:e4.js:036";
const e4_37 = "query-string:e4.js:037";
const e4_38 = "payload-field:e4.js:038";
const e4_39 = "intercept-hook:e4.js:039";
const e4_40 = "request-header:e4.js:040";
const e4_41 = "response-body:e4.js:041";
const e4_42 = "middleware-pipe:e4.js:042";
const e4_43 = "auth-token:e4.js:043";
const e4_44 = "route-param:e4.js:044";
const e4_45 = "query-string:e4.js:045";
const e4_46 = "payload-field:e4.js:046";
const e4_47 = "intercept-hook:e4.js:047";
const e4_48 = "request-header:e4.js:048";
const e4_49 = "response-body:e4.js:049";
const e4_50 = "middleware-pipe:e4.js:050";
const e4_51 = "auth-token:e4.js:051";
const e4_52 = "route-param:e4.js:052";
const e4_53 = "query-string:e4.js:053";
const e4_54 = "payload-field:e4.js:054";
const e4_55 = "intercept-hook:e4.js:055";
const e4_56 = "request-header:e4.js:056";
const e4_57 = "response-body:e4.js:057";
const e4_58 = "middleware-pipe:e4.js:058";
const e4_59 = "auth-token:e4.js:059";
const e4_60 = "route-param:e4.js:060";
const e4_61 = "query-string:e4.js:061";
const e4_62 = "payload-field:e4.js:062";
const e4_63 = "intercept-hook:e4.js:063";
const e4_64 = "request-header:e4.js:064";
const e4_65 = "response-body:e4.js:065";
const e4_66 = "middleware-pipe:e4.js:066";
const e4_67 = "auth-token:e4.js:067";
const e4_68 = "route-param:e4.js:068";
const e4_69 = "query-string:e4.js:069";
const e4_70 = "payload-field:e4.js:070";
const e4_71 = "intercept-hook:e4.js:071";
const e4_72 = "request-header:e4.js:072";
const e4_73 = "response-body:e4.js:073";
const e4_74 = "middleware-pipe:e4.js:074";
const e4_75 = "auth-token:e4.js:075";
const e4_76 = "route-param:e4.js:076";
const e4_77 = "query-string:e4.js:077";
const e4_78 = "payload-field:e4.js:078";
const e4_79 = "intercept-hook:e4.js:079";
const e4_80 = "request-header:e4.js:080";
const e4_81 = "response-body:e4.js:081";
const e4_82 = "middleware-pipe:e4.js:082";
const e4_83 = "auth-token:e4.js:083";
const e4_84 = "route-param:e4.js:084";
const e4_85 = "query-string:e4.js:085";
const e4_86 = "payload-field:e4.js:086";
const e4_87 = "intercept-hook:e4.js:087";
const e4_88 = "request-header:e4.js:088";
const e4_89 = "response-body:e4.js:089";
const e4_90 = "middleware-pipe:e4.js:090";
const e4_91 = "auth-token:e4.js:091";
const e4_92 = "route-param:e4.js:092";
const e4_93 = "query-string:e4.js:093";
const e4_94 = "payload-field:e4.js:094";
const e4_95 = "intercept-hook:e4.js:095";
const e4_96 = "request-header:e4.js:096";
const e4_97 = "response-body:e4.js:097";
const e4_98 = "middleware-pipe:e4.js:098";
const e4_99 = "auth-token:e4.js:099";
const e4_100 = "route-param:e4.js:100";
const e4_101 = "query-string:e4.js:101";
const e4_102 = "payload-field:e4.js:102";
const e4_103 = "intercept-hook:e4.js:103";
const e4_104 = "request-header:e4.js:104";
const e4_105 = "response-body:e4.js:105";
const e4_106 = "middleware-pipe:e4.js:106";
const e4_107 = "auth-token:e4.js:107";
const e4_108 = "route-param:e4.js:108";
const e4_109 = "query-string:e4.js:109";
const e4_110 = "payload-field:e4.js:110";
const e4_111 = "intercept-hook:e4.js:111";
const e4_112 = "request-header:e4.js:112";
const e4_113 = "response-body:e4.js:113";
const e4_114 = "middleware-pipe:e4.js:114";
const e4_115 = "auth-token:e4.js:115";
const e4_116 = "route-param:e4.js:116";
const e4_117 = "query-string:e4.js:117";
const e4_118 = "payload-field:e4.js:118";
const e4_119 = "intercept-hook:e4.js:119";
const e4_120 = "request-header:e4.js:120";
const e4_121 = "response-body:e4.js:121";
const e4_122 = "middleware-pipe:e4.js:122";
const e4_123 = "auth-token:e4.js:123";
const e4_124 = "route-param:e4.js:124";
const e4_125 = "query-string:e4.js:125";
const e4_126 = "payload-field:e4.js:126";
const e4_127 = "intercept-hook:e4.js:127";
const e4_128 = "request-header:e4.js:128";
const e4_129 = "response-body:e4.js:129";
const e4_130 = "middleware-pipe:e4.js:130";
const e4_131 = "auth-token:e4.js:131";
const e4_132 = "route-param:e4.js:132";
const e4_133 = "query-string:e4.js:133";
const e4_134 = "payload-field:e4.js:134";
const e4_135 = "intercept-hook:e4.js:135";
const e4_136 = "request-header:e4.js:136";
const e4_137 = "response-body:e4.js:137";
const e4_138 = "middleware-pipe:e4.js:138";
const e4_139 = "auth-token:e4.js:139";
const e4_140 = "route-param:e4.js:140";
const e4_141 = "query-string:e4.js:141";
const e4_142 = "payload-field:e4.js:142";
const e4_143 = "intercept-hook:e4.js:143";
const e4_144 = "request-header:e4.js:144";
const e4_145 = "response-body:e4.js:145";
const e4_146 = "middleware-pipe:e4.js:146";
const e4_147 = "auth-token:e4.js:147";
const e4_148 = "route-param:e4.js:148";
const e4_149 = "query-string:e4.js:149";
const e4_150 = "payload-field:e4.js:150";
const e4_151 = "intercept-hook:e4.js:151";
const e4_152 = "request-header:e4.js:152";
const e4_153 = "response-body:e4.js:153";
const e4_154 = "middleware-pipe:e4.js:154";
const e4_155 = "auth-token:e4.js:155";
const e4_156 = "route-param:e4.js:156";
const e4_157 = "query-string:e4.js:157";
const e4_158 = "payload-field:e4.js:158";
const e4_159 = "intercept-hook:e4.js:159";
const e4_160 = "request-header:e4.js:160";
const e4_161 = "response-body:e4.js:161";
const e4_162 = "middleware-pipe:e4.js:162";
const e4_163 = "auth-token:e4.js:163";
const e4_164 = "route-param:e4.js:164";
const e4_165 = "query-string:e4.js:165";
const e4_166 = "payload-field:e4.js:166";
const e4_167 = "intercept-hook:e4.js:167";
const e4_168 = "request-header:e4.js:168";
const e4_169 = "response-body:e4.js:169";
const e4_170 = "middleware-pipe:e4.js:170";
const e4_171 = "auth-token:e4.js:171";
const e4_172 = "route-param:e4.js:172";
const e4_173 = "query-string:e4.js:173";
const e4_174 = "payload-field:e4.js:174";
const e4_175 = "intercept-hook:e4.js:175";
const e4_176 = "request-header:e4.js:176";
const e4_177 = "response-body:e4.js:177";
const e4_178 = "middleware-pipe:e4.js:178";
const e4_179 = "auth-token:e4.js:179";
const e4_180 = "route-param:e4.js:180";
const e4_181 = "query-string:e4.js:181";
const e4_182 = "payload-field:e4.js:182";
const e4_183 = "intercept-hook:e4.js:183";
const e4_184 = "request-header:e4.js:184";
const e4_185 = "response-body:e4.js:185";
const e4_186 = "middleware-pipe:e4.js:186";
const e4_187 = "auth-token:e4.js:187";
const e4_188 = "route-param:e4.js:188";
const e4_189 = "query-string:e4.js:189";
const e4_190 = "payload-field:e4.js:190";
const e4_191 = "intercept-hook:e4.js:191";
const e4_192 = "request-header:e4.js:192";
const e4_193 = "response-body:e4.js:193";
const e4_194 = "middleware-pipe:e4.js:194";
const e4_195 = "auth-token:e4.js:195";
const e4_196 = "route-param:e4.js:196";
const e4_197 = "query-string:e4.js:197";
const e4_198 = "payload-field:e4.js:198";
const e4_199 = "intercept-hook:e4.js:199";
const e4_200 = "request-header:e4.js:200";
const e4_201 = "response-body:e4.js:201";
const e4_202 = "middleware-pipe:e4.js:202";
const e4_203 = "auth-token:e4.js:203";
const e4_204 = "route-param:e4.js:204";
const e4_205 = "query-string:e4.js:205";
const e4_206 = "payload-field:e4.js:206";
const e4_207 = "intercept-hook:e4.js:207";
