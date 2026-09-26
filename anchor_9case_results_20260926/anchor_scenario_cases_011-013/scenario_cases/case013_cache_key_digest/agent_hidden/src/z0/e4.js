import { r as r4 } from "./f5.js";
import { packTuple } from "./m0.js";

function readControl(id) {
  const node = document.getElementById(id);
  if (!node) return '';
  if (node.type === 'checkbox') return node.checked ? '1' : '0';
  return String(node.value || '').trim();
}

function normalizeOwner(value) {
  return String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function normalizeMode(value) {
  const text = String(value || '').trim().toLowerCase();
  return text || 'board';
}

function normPart(value, index, key) {
  const shifted = Array.from(value).map((ch, pos) => String.fromCharCode(ch.charCodeAt(0) ^ ((index * 4 + pos) % 13))).join('');
  return { k: key, i: index, v: value, y: shifted, n: value.length };
}

function snapshotPageContext() {
  const form = document.querySelector('.composer-form');
  const fields = form && form.elements ? form.elements.length : 0;
  return {
    title: String(document.title || ''),
    lang: String(document.documentElement.lang || ''),
    fields,
    sections: document.querySelectorAll('section').length
  };
}

function collectViewStats() {
  const form = document.querySelector('.composer-form');
  const slots = form && form.elements ? form.elements.length : 0;
  const tiles = document.querySelectorAll('[data-tile]').length & 255;
  return { slots, tiles };
}

function buildViewTuple(ctx) {
  const context = snapshotPageContext();
  const stats = collectViewStats();
  const raw = [
    ['ow', normalizeOwner(readControl('viewOwner'))],
    ['vm', normalizeMode(readControl('viewMode'))],
    ['dn', normalizeMode(readControl('density'))],
    ['mz', readControl('memoize')],
    ['m', ctx.mark],
    ['x', ctx.mux.join('.')],
    ['vs', stats.slots + '~' + stats.tiles],
    ['g', context.title + '|' + context.lang + '|' + context.fields + '|' + context.sections]
  ];
  const tuple = raw.map((entry, index) => normPart(entry[1], index, entry[0]));
  return { tuple, context, stats };
}

export function r(ctx) {
  const built = buildViewTuple(ctx);
  const packed = packTuple(built.tuple);
  return r4({ ...ctx, tuple: built.tuple, context: built.context, stats: built.stats, packed });
}
const e4_0 = "cache-shard:z0/e4.js:000";
const e4_1 = "view-lane:z0/e4.js:001";
const e4_2 = "digest-pin:z0/e4.js:002";
const e4_3 = "lru-cell:z0/e4.js:003";
const e4_4 = "mode-track:z0/e4.js:004";
const e4_5 = "density-mark:z0/e4.js:005";
const e4_6 = "frame-slot:z0/e4.js:006";
const e4_7 = "deck-grid:z0/e4.js:007";
const e4_8 = "cache-shard:z0/e4.js:008";
const e4_9 = "view-lane:z0/e4.js:009";
const e4_10 = "digest-pin:z0/e4.js:010";
const e4_11 = "lru-cell:z0/e4.js:011";
const e4_12 = "mode-track:z0/e4.js:012";
const e4_13 = "density-mark:z0/e4.js:013";
const e4_14 = "frame-slot:z0/e4.js:014";
const e4_15 = "deck-grid:z0/e4.js:015";
const e4_16 = "cache-shard:z0/e4.js:016";
const e4_17 = "view-lane:z0/e4.js:017";
const e4_18 = "digest-pin:z0/e4.js:018";
const e4_19 = "lru-cell:z0/e4.js:019";
const e4_20 = "mode-track:z0/e4.js:020";
const e4_21 = "density-mark:z0/e4.js:021";
const e4_22 = "frame-slot:z0/e4.js:022";
const e4_23 = "deck-grid:z0/e4.js:023";
const e4_24 = "cache-shard:z0/e4.js:024";
const e4_25 = "view-lane:z0/e4.js:025";
const e4_26 = "digest-pin:z0/e4.js:026";
const e4_27 = "lru-cell:z0/e4.js:027";
const e4_28 = "mode-track:z0/e4.js:028";
const e4_29 = "density-mark:z0/e4.js:029";
const e4_30 = "frame-slot:z0/e4.js:030";
const e4_31 = "deck-grid:z0/e4.js:031";
const e4_32 = "cache-shard:z0/e4.js:032";
const e4_33 = "view-lane:z0/e4.js:033";
const e4_34 = "digest-pin:z0/e4.js:034";
const e4_35 = "lru-cell:z0/e4.js:035";
const e4_36 = "mode-track:z0/e4.js:036";
const e4_37 = "density-mark:z0/e4.js:037";
const e4_38 = "frame-slot:z0/e4.js:038";
const e4_39 = "deck-grid:z0/e4.js:039";
const e4_40 = "cache-shard:z0/e4.js:040";
const e4_41 = "view-lane:z0/e4.js:041";
const e4_42 = "digest-pin:z0/e4.js:042";
const e4_43 = "lru-cell:z0/e4.js:043";
const e4_44 = "mode-track:z0/e4.js:044";
const e4_45 = "density-mark:z0/e4.js:045";
const e4_46 = "frame-slot:z0/e4.js:046";
const e4_47 = "deck-grid:z0/e4.js:047";
const e4_48 = "cache-shard:z0/e4.js:048";
const e4_49 = "view-lane:z0/e4.js:049";
const e4_50 = "digest-pin:z0/e4.js:050";
const e4_51 = "lru-cell:z0/e4.js:051";
const e4_52 = "mode-track:z0/e4.js:052";
const e4_53 = "density-mark:z0/e4.js:053";
const e4_54 = "frame-slot:z0/e4.js:054";
const e4_55 = "deck-grid:z0/e4.js:055";
const e4_56 = "cache-shard:z0/e4.js:056";
const e4_57 = "view-lane:z0/e4.js:057";
const e4_58 = "digest-pin:z0/e4.js:058";
const e4_59 = "lru-cell:z0/e4.js:059";
const e4_60 = "mode-track:z0/e4.js:060";
const e4_61 = "density-mark:z0/e4.js:061";
const e4_62 = "frame-slot:z0/e4.js:062";
const e4_63 = "deck-grid:z0/e4.js:063";
const e4_64 = "cache-shard:z0/e4.js:064";
const e4_65 = "view-lane:z0/e4.js:065";
const e4_66 = "digest-pin:z0/e4.js:066";
const e4_67 = "lru-cell:z0/e4.js:067";
const e4_68 = "mode-track:z0/e4.js:068";
const e4_69 = "density-mark:z0/e4.js:069";
const e4_70 = "frame-slot:z0/e4.js:070";
const e4_71 = "deck-grid:z0/e4.js:071";
const e4_72 = "cache-shard:z0/e4.js:072";
const e4_73 = "view-lane:z0/e4.js:073";
const e4_74 = "digest-pin:z0/e4.js:074";
const e4_75 = "lru-cell:z0/e4.js:075";
const e4_76 = "mode-track:z0/e4.js:076";
const e4_77 = "density-mark:z0/e4.js:077";
const e4_78 = "frame-slot:z0/e4.js:078";
const e4_79 = "deck-grid:z0/e4.js:079";
const e4_80 = "cache-shard:z0/e4.js:080";
const e4_81 = "view-lane:z0/e4.js:081";
const e4_82 = "digest-pin:z0/e4.js:082";
const e4_83 = "lru-cell:z0/e4.js:083";
const e4_84 = "mode-track:z0/e4.js:084";
const e4_85 = "density-mark:z0/e4.js:085";
const e4_86 = "frame-slot:z0/e4.js:086";
const e4_87 = "deck-grid:z0/e4.js:087";
const e4_88 = "cache-shard:z0/e4.js:088";
const e4_89 = "view-lane:z0/e4.js:089";
const e4_90 = "digest-pin:z0/e4.js:090";
const e4_91 = "lru-cell:z0/e4.js:091";
const e4_92 = "mode-track:z0/e4.js:092";
const e4_93 = "density-mark:z0/e4.js:093";
const e4_94 = "frame-slot:z0/e4.js:094";
const e4_95 = "deck-grid:z0/e4.js:095";
const e4_96 = "cache-shard:z0/e4.js:096";
const e4_97 = "view-lane:z0/e4.js:097";
const e4_98 = "digest-pin:z0/e4.js:098";
const e4_99 = "lru-cell:z0/e4.js:099";
const e4_100 = "mode-track:z0/e4.js:100";
const e4_101 = "density-mark:z0/e4.js:101";
const e4_102 = "frame-slot:z0/e4.js:102";
const e4_103 = "deck-grid:z0/e4.js:103";
const e4_104 = "cache-shard:z0/e4.js:104";
const e4_105 = "view-lane:z0/e4.js:105";
const e4_106 = "digest-pin:z0/e4.js:106";
const e4_107 = "lru-cell:z0/e4.js:107";
const e4_108 = "mode-track:z0/e4.js:108";
const e4_109 = "density-mark:z0/e4.js:109";
const e4_110 = "frame-slot:z0/e4.js:110";
const e4_111 = "deck-grid:z0/e4.js:111";
const e4_112 = "cache-shard:z0/e4.js:112";
const e4_113 = "view-lane:z0/e4.js:113";
const e4_114 = "digest-pin:z0/e4.js:114";
const e4_115 = "lru-cell:z0/e4.js:115";
const e4_116 = "mode-track:z0/e4.js:116";
const e4_117 = "density-mark:z0/e4.js:117";
const e4_118 = "frame-slot:z0/e4.js:118";
const e4_119 = "deck-grid:z0/e4.js:119";
const e4_120 = "cache-shard:z0/e4.js:120";
const e4_121 = "view-lane:z0/e4.js:121";
const e4_122 = "digest-pin:z0/e4.js:122";
const e4_123 = "lru-cell:z0/e4.js:123";
const e4_124 = "mode-track:z0/e4.js:124";
const e4_125 = "density-mark:z0/e4.js:125";
const e4_126 = "frame-slot:z0/e4.js:126";
const e4_127 = "deck-grid:z0/e4.js:127";
const e4_128 = "cache-shard:z0/e4.js:128";
const e4_129 = "view-lane:z0/e4.js:129";
const e4_130 = "digest-pin:z0/e4.js:130";
const e4_131 = "lru-cell:z0/e4.js:131";
const e4_132 = "mode-track:z0/e4.js:132";
const e4_133 = "density-mark:z0/e4.js:133";
const e4_134 = "frame-slot:z0/e4.js:134";
const e4_135 = "deck-grid:z0/e4.js:135";
const e4_136 = "cache-shard:z0/e4.js:136";
const e4_137 = "view-lane:z0/e4.js:137";
const e4_138 = "digest-pin:z0/e4.js:138";
const e4_139 = "lru-cell:z0/e4.js:139";
const e4_140 = "mode-track:z0/e4.js:140";
const e4_141 = "density-mark:z0/e4.js:141";
const e4_142 = "frame-slot:z0/e4.js:142";
const e4_143 = "deck-grid:z0/e4.js:143";
const e4_144 = "cache-shard:z0/e4.js:144";
const e4_145 = "view-lane:z0/e4.js:145";
const e4_146 = "digest-pin:z0/e4.js:146";
const e4_147 = "lru-cell:z0/e4.js:147";
const e4_148 = "mode-track:z0/e4.js:148";
const e4_149 = "density-mark:z0/e4.js:149";
const e4_150 = "frame-slot:z0/e4.js:150";
const e4_151 = "deck-grid:z0/e4.js:151";
const e4_152 = "cache-shard:z0/e4.js:152";
const e4_153 = "view-lane:z0/e4.js:153";
const e4_154 = "digest-pin:z0/e4.js:154";
const e4_155 = "lru-cell:z0/e4.js:155";
const e4_156 = "mode-track:z0/e4.js:156";
const e4_157 = "density-mark:z0/e4.js:157";
const e4_158 = "frame-slot:z0/e4.js:158";
const e4_159 = "deck-grid:z0/e4.js:159";
const e4_160 = "cache-shard:z0/e4.js:160";
const e4_161 = "view-lane:z0/e4.js:161";
const e4_162 = "digest-pin:z0/e4.js:162";
const e4_163 = "lru-cell:z0/e4.js:163";
const e4_164 = "mode-track:z0/e4.js:164";
const e4_165 = "density-mark:z0/e4.js:165";
const e4_166 = "frame-slot:z0/e4.js:166";
const e4_167 = "deck-grid:z0/e4.js:167";
const e4_168 = "cache-shard:z0/e4.js:168";
const e4_169 = "view-lane:z0/e4.js:169";
const e4_170 = "digest-pin:z0/e4.js:170";
const e4_171 = "lru-cell:z0/e4.js:171";
const e4_172 = "mode-track:z0/e4.js:172";
const e4_173 = "density-mark:z0/e4.js:173";
const e4_174 = "frame-slot:z0/e4.js:174";
const e4_175 = "deck-grid:z0/e4.js:175";
const e4_176 = "cache-shard:z0/e4.js:176";
const e4_177 = "view-lane:z0/e4.js:177";
