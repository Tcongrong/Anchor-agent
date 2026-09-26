import { r as r4 } from "./f5.js";
import { packTuple } from "./m0.js";

function readControl(id) {
  const node = document.getElementById(id);
  if (!node) return '';
  if (node.type === 'checkbox') return node.checked ? '1' : '0';
  return String(node.value || '').trim();
}

function normalizeAmount(value) {
  const parsed = Number.parseInt(String(value || ''), 10);
  if (!Number.isFinite(parsed) || parsed < 0) return '0';
  return String(Math.min(parsed, 999999));
}

function normalizePage(value) {
  const parsed = Number.parseInt(String(value || ''), 10);
  if (!Number.isFinite(parsed) || parsed < 1) return '1';
  return String(Math.min(parsed, 999));
}

function normPart(value, index, key) {
  const shifted = Array.from(value).map((ch, pos) => String.fromCharCode(ch.charCodeAt(0) ^ ((index * 6 + pos) % 11))).join('');
  return { k: key, i: index, v: value, y: shifted, n: value.length };
}

function snapshotPageContext() {
  const form = document.querySelector('.filter-form');
  const fields = form && form.elements ? form.elements.length : 0;
  return {
    title: String(document.title || ''),
    lang: String(document.documentElement.lang || ''),
    fields,
    sections: document.querySelectorAll('section').length
  };
}

function collectPageState() {
  const page = Number.parseInt(normalizePage(readControl('pageInput')), 10) || 1;
  const form = document.querySelector('.filter-form');
  const size = form && form.elements ? form.elements.length + 12 : 18;
  return { page, size, cursor: (page - 1) * size };
}

function buildFilterTuple(ctx) {
  const context = snapshotPageContext();
  const pageState = collectPageState();
  const raw = [
    ['st', readControl('statusFilter')],
    ['rg', readControl('regionFilter')],
    ['mn', normalizeAmount(readControl('minAmount'))],
    ['so', readControl('sortOrder')],
    ['pg', normalizePage(readControl('pageInput'))],
    ['ia', readControl('includeArchived')],
    ['m', ctx.mark],
    ['x', ctx.mux.join('.')],
    ['pc', String(pageState.cursor)],
    ['g', context.title + '|' + context.lang + '|' + context.fields + '|' + context.sections]
  ];
  const tuple = raw.map((entry, index) => normPart(entry[1], index, entry[0]));
  return { tuple, context, pageState };
}

export function r(ctx) {
  const built = buildFilterTuple(ctx);
  const packed = packTuple(built.tuple);
  return r4({ ...ctx, tuple: built.tuple, context: built.context, pageState: built.pageState, packed });
}
const e4_0 = "query-shard:z0/e4.js:000";
const e4_1 = "filter-lane:z0/e4.js:001";
const e4_2 = "region-pin:z0/e4.js:002";
const e4_3 = "sort-track:z0/e4.js:003";
const e4_4 = "page-cursor:z0/e4.js:004";
const e4_5 = "archive-bit:z0/e4.js:005";
const e4_6 = "grid-slot:z0/e4.js:006";
const e4_7 = "facet-mark:z0/e4.js:007";
const e4_8 = "query-shard:z0/e4.js:008";
const e4_9 = "filter-lane:z0/e4.js:009";
const e4_10 = "region-pin:z0/e4.js:010";
const e4_11 = "sort-track:z0/e4.js:011";
const e4_12 = "page-cursor:z0/e4.js:012";
const e4_13 = "archive-bit:z0/e4.js:013";
const e4_14 = "grid-slot:z0/e4.js:014";
const e4_15 = "facet-mark:z0/e4.js:015";
const e4_16 = "query-shard:z0/e4.js:016";
const e4_17 = "filter-lane:z0/e4.js:017";
const e4_18 = "region-pin:z0/e4.js:018";
const e4_19 = "sort-track:z0/e4.js:019";
const e4_20 = "page-cursor:z0/e4.js:020";
const e4_21 = "archive-bit:z0/e4.js:021";
const e4_22 = "grid-slot:z0/e4.js:022";
const e4_23 = "facet-mark:z0/e4.js:023";
const e4_24 = "query-shard:z0/e4.js:024";
const e4_25 = "filter-lane:z0/e4.js:025";
const e4_26 = "region-pin:z0/e4.js:026";
const e4_27 = "sort-track:z0/e4.js:027";
const e4_28 = "page-cursor:z0/e4.js:028";
const e4_29 = "archive-bit:z0/e4.js:029";
const e4_30 = "grid-slot:z0/e4.js:030";
const e4_31 = "facet-mark:z0/e4.js:031";
const e4_32 = "query-shard:z0/e4.js:032";
const e4_33 = "filter-lane:z0/e4.js:033";
const e4_34 = "region-pin:z0/e4.js:034";
const e4_35 = "sort-track:z0/e4.js:035";
const e4_36 = "page-cursor:z0/e4.js:036";
const e4_37 = "archive-bit:z0/e4.js:037";
const e4_38 = "grid-slot:z0/e4.js:038";
const e4_39 = "facet-mark:z0/e4.js:039";
const e4_40 = "query-shard:z0/e4.js:040";
const e4_41 = "filter-lane:z0/e4.js:041";
const e4_42 = "region-pin:z0/e4.js:042";
const e4_43 = "sort-track:z0/e4.js:043";
const e4_44 = "page-cursor:z0/e4.js:044";
const e4_45 = "archive-bit:z0/e4.js:045";
const e4_46 = "grid-slot:z0/e4.js:046";
const e4_47 = "facet-mark:z0/e4.js:047";
const e4_48 = "query-shard:z0/e4.js:048";
const e4_49 = "filter-lane:z0/e4.js:049";
const e4_50 = "region-pin:z0/e4.js:050";
const e4_51 = "sort-track:z0/e4.js:051";
const e4_52 = "page-cursor:z0/e4.js:052";
const e4_53 = "archive-bit:z0/e4.js:053";
const e4_54 = "grid-slot:z0/e4.js:054";
const e4_55 = "facet-mark:z0/e4.js:055";
const e4_56 = "query-shard:z0/e4.js:056";
const e4_57 = "filter-lane:z0/e4.js:057";
const e4_58 = "region-pin:z0/e4.js:058";
const e4_59 = "sort-track:z0/e4.js:059";
const e4_60 = "page-cursor:z0/e4.js:060";
const e4_61 = "archive-bit:z0/e4.js:061";
const e4_62 = "grid-slot:z0/e4.js:062";
const e4_63 = "facet-mark:z0/e4.js:063";
const e4_64 = "query-shard:z0/e4.js:064";
const e4_65 = "filter-lane:z0/e4.js:065";
const e4_66 = "region-pin:z0/e4.js:066";
const e4_67 = "sort-track:z0/e4.js:067";
const e4_68 = "page-cursor:z0/e4.js:068";
const e4_69 = "archive-bit:z0/e4.js:069";
const e4_70 = "grid-slot:z0/e4.js:070";
const e4_71 = "facet-mark:z0/e4.js:071";
const e4_72 = "query-shard:z0/e4.js:072";
const e4_73 = "filter-lane:z0/e4.js:073";
const e4_74 = "region-pin:z0/e4.js:074";
const e4_75 = "sort-track:z0/e4.js:075";
const e4_76 = "page-cursor:z0/e4.js:076";
const e4_77 = "archive-bit:z0/e4.js:077";
const e4_78 = "grid-slot:z0/e4.js:078";
const e4_79 = "facet-mark:z0/e4.js:079";
const e4_80 = "query-shard:z0/e4.js:080";
const e4_81 = "filter-lane:z0/e4.js:081";
const e4_82 = "region-pin:z0/e4.js:082";
const e4_83 = "sort-track:z0/e4.js:083";
const e4_84 = "page-cursor:z0/e4.js:084";
const e4_85 = "archive-bit:z0/e4.js:085";
const e4_86 = "grid-slot:z0/e4.js:086";
const e4_87 = "facet-mark:z0/e4.js:087";
const e4_88 = "query-shard:z0/e4.js:088";
const e4_89 = "filter-lane:z0/e4.js:089";
const e4_90 = "region-pin:z0/e4.js:090";
const e4_91 = "sort-track:z0/e4.js:091";
const e4_92 = "page-cursor:z0/e4.js:092";
const e4_93 = "archive-bit:z0/e4.js:093";
const e4_94 = "grid-slot:z0/e4.js:094";
const e4_95 = "facet-mark:z0/e4.js:095";
const e4_96 = "query-shard:z0/e4.js:096";
const e4_97 = "filter-lane:z0/e4.js:097";
const e4_98 = "region-pin:z0/e4.js:098";
const e4_99 = "sort-track:z0/e4.js:099";
const e4_100 = "page-cursor:z0/e4.js:100";
const e4_101 = "archive-bit:z0/e4.js:101";
const e4_102 = "grid-slot:z0/e4.js:102";
const e4_103 = "facet-mark:z0/e4.js:103";
const e4_104 = "query-shard:z0/e4.js:104";
const e4_105 = "filter-lane:z0/e4.js:105";
const e4_106 = "region-pin:z0/e4.js:106";
const e4_107 = "sort-track:z0/e4.js:107";
const e4_108 = "page-cursor:z0/e4.js:108";
const e4_109 = "archive-bit:z0/e4.js:109";
const e4_110 = "grid-slot:z0/e4.js:110";
const e4_111 = "facet-mark:z0/e4.js:111";
const e4_112 = "query-shard:z0/e4.js:112";
const e4_113 = "filter-lane:z0/e4.js:113";
const e4_114 = "region-pin:z0/e4.js:114";
const e4_115 = "sort-track:z0/e4.js:115";
const e4_116 = "page-cursor:z0/e4.js:116";
const e4_117 = "archive-bit:z0/e4.js:117";
const e4_118 = "grid-slot:z0/e4.js:118";
const e4_119 = "facet-mark:z0/e4.js:119";
const e4_120 = "query-shard:z0/e4.js:120";
const e4_121 = "filter-lane:z0/e4.js:121";
const e4_122 = "region-pin:z0/e4.js:122";
const e4_123 = "sort-track:z0/e4.js:123";
const e4_124 = "page-cursor:z0/e4.js:124";
const e4_125 = "archive-bit:z0/e4.js:125";
const e4_126 = "grid-slot:z0/e4.js:126";
const e4_127 = "facet-mark:z0/e4.js:127";
const e4_128 = "query-shard:z0/e4.js:128";
const e4_129 = "filter-lane:z0/e4.js:129";
const e4_130 = "region-pin:z0/e4.js:130";
const e4_131 = "sort-track:z0/e4.js:131";
const e4_132 = "page-cursor:z0/e4.js:132";
const e4_133 = "archive-bit:z0/e4.js:133";
const e4_134 = "grid-slot:z0/e4.js:134";
const e4_135 = "facet-mark:z0/e4.js:135";
const e4_136 = "query-shard:z0/e4.js:136";
const e4_137 = "filter-lane:z0/e4.js:137";
const e4_138 = "region-pin:z0/e4.js:138";
const e4_139 = "sort-track:z0/e4.js:139";
const e4_140 = "page-cursor:z0/e4.js:140";
const e4_141 = "archive-bit:z0/e4.js:141";
const e4_142 = "grid-slot:z0/e4.js:142";
const e4_143 = "facet-mark:z0/e4.js:143";
const e4_144 = "query-shard:z0/e4.js:144";
const e4_145 = "filter-lane:z0/e4.js:145";
const e4_146 = "region-pin:z0/e4.js:146";
const e4_147 = "sort-track:z0/e4.js:147";
const e4_148 = "page-cursor:z0/e4.js:148";
const e4_149 = "archive-bit:z0/e4.js:149";
const e4_150 = "grid-slot:z0/e4.js:150";
const e4_151 = "facet-mark:z0/e4.js:151";
const e4_152 = "query-shard:z0/e4.js:152";
const e4_153 = "filter-lane:z0/e4.js:153";
const e4_154 = "region-pin:z0/e4.js:154";
const e4_155 = "sort-track:z0/e4.js:155";
const e4_156 = "page-cursor:z0/e4.js:156";
const e4_157 = "archive-bit:z0/e4.js:157";
const e4_158 = "grid-slot:z0/e4.js:158";
const e4_159 = "facet-mark:z0/e4.js:159";
const e4_160 = "query-shard:z0/e4.js:160";
const e4_161 = "filter-lane:z0/e4.js:161";
const e4_162 = "region-pin:z0/e4.js:162";
const e4_163 = "sort-track:z0/e4.js:163";
const e4_164 = "page-cursor:z0/e4.js:164";
const e4_165 = "archive-bit:z0/e4.js:165";
const e4_166 = "grid-slot:z0/e4.js:166";
const e4_167 = "facet-mark:z0/e4.js:167";
const e4_168 = "query-shard:z0/e4.js:168";
const e4_169 = "filter-lane:z0/e4.js:169";
const e4_170 = "region-pin:z0/e4.js:170";
const e4_171 = "sort-track:z0/e4.js:171";
const e4_172 = "page-cursor:z0/e4.js:172";
