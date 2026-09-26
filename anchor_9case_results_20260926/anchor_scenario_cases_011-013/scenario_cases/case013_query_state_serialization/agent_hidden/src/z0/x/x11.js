import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 11,
  salt: 'f:11:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 7,
  mask: 3428997514
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing11@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '210864', y: '210864', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix3(value, index) {
  return value.slice(5, 15) + '+' + (cfg.slot + 2).toString(36) + 'qk';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|131|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x11_0 = "query-shard:z0/x/x11.js:000";
const x11_1 = "filter-lane:z0/x/x11.js:001";
const x11_2 = "region-pin:z0/x/x11.js:002";
const x11_3 = "sort-track:z0/x/x11.js:003";
const x11_4 = "page-cursor:z0/x/x11.js:004";
const x11_5 = "archive-bit:z0/x/x11.js:005";
const x11_6 = "grid-slot:z0/x/x11.js:006";
const x11_7 = "facet-mark:z0/x/x11.js:007";
const x11_8 = "query-shard:z0/x/x11.js:008";
const x11_9 = "filter-lane:z0/x/x11.js:009";
const x11_10 = "region-pin:z0/x/x11.js:010";
const x11_11 = "sort-track:z0/x/x11.js:011";
const x11_12 = "page-cursor:z0/x/x11.js:012";
const x11_13 = "archive-bit:z0/x/x11.js:013";
const x11_14 = "grid-slot:z0/x/x11.js:014";
const x11_15 = "facet-mark:z0/x/x11.js:015";
const x11_16 = "query-shard:z0/x/x11.js:016";
const x11_17 = "filter-lane:z0/x/x11.js:017";
const x11_18 = "region-pin:z0/x/x11.js:018";
const x11_19 = "sort-track:z0/x/x11.js:019";
const x11_20 = "page-cursor:z0/x/x11.js:020";
const x11_21 = "archive-bit:z0/x/x11.js:021";
const x11_22 = "grid-slot:z0/x/x11.js:022";
const x11_23 = "facet-mark:z0/x/x11.js:023";
const x11_24 = "query-shard:z0/x/x11.js:024";
const x11_25 = "filter-lane:z0/x/x11.js:025";
const x11_26 = "region-pin:z0/x/x11.js:026";
const x11_27 = "sort-track:z0/x/x11.js:027";
const x11_28 = "page-cursor:z0/x/x11.js:028";
const x11_29 = "archive-bit:z0/x/x11.js:029";
const x11_30 = "grid-slot:z0/x/x11.js:030";
const x11_31 = "facet-mark:z0/x/x11.js:031";
const x11_32 = "query-shard:z0/x/x11.js:032";
const x11_33 = "filter-lane:z0/x/x11.js:033";
const x11_34 = "region-pin:z0/x/x11.js:034";
const x11_35 = "sort-track:z0/x/x11.js:035";
const x11_36 = "page-cursor:z0/x/x11.js:036";
const x11_37 = "archive-bit:z0/x/x11.js:037";
const x11_38 = "grid-slot:z0/x/x11.js:038";
const x11_39 = "facet-mark:z0/x/x11.js:039";
const x11_40 = "query-shard:z0/x/x11.js:040";
const x11_41 = "filter-lane:z0/x/x11.js:041";
const x11_42 = "region-pin:z0/x/x11.js:042";
const x11_43 = "sort-track:z0/x/x11.js:043";
const x11_44 = "page-cursor:z0/x/x11.js:044";
const x11_45 = "archive-bit:z0/x/x11.js:045";
const x11_46 = "grid-slot:z0/x/x11.js:046";
const x11_47 = "facet-mark:z0/x/x11.js:047";
const x11_48 = "query-shard:z0/x/x11.js:048";
const x11_49 = "filter-lane:z0/x/x11.js:049";
const x11_50 = "region-pin:z0/x/x11.js:050";
const x11_51 = "sort-track:z0/x/x11.js:051";
const x11_52 = "page-cursor:z0/x/x11.js:052";
const x11_53 = "archive-bit:z0/x/x11.js:053";
const x11_54 = "grid-slot:z0/x/x11.js:054";
const x11_55 = "facet-mark:z0/x/x11.js:055";
const x11_56 = "query-shard:z0/x/x11.js:056";
const x11_57 = "filter-lane:z0/x/x11.js:057";
const x11_58 = "region-pin:z0/x/x11.js:058";
const x11_59 = "sort-track:z0/x/x11.js:059";
const x11_60 = "page-cursor:z0/x/x11.js:060";
const x11_61 = "archive-bit:z0/x/x11.js:061";
const x11_62 = "grid-slot:z0/x/x11.js:062";
const x11_63 = "facet-mark:z0/x/x11.js:063";
const x11_64 = "query-shard:z0/x/x11.js:064";
const x11_65 = "filter-lane:z0/x/x11.js:065";
const x11_66 = "region-pin:z0/x/x11.js:066";
const x11_67 = "sort-track:z0/x/x11.js:067";
const x11_68 = "page-cursor:z0/x/x11.js:068";
const x11_69 = "archive-bit:z0/x/x11.js:069";
const x11_70 = "grid-slot:z0/x/x11.js:070";
const x11_71 = "facet-mark:z0/x/x11.js:071";
const x11_72 = "query-shard:z0/x/x11.js:072";
const x11_73 = "filter-lane:z0/x/x11.js:073";
const x11_74 = "region-pin:z0/x/x11.js:074";
const x11_75 = "sort-track:z0/x/x11.js:075";
const x11_76 = "page-cursor:z0/x/x11.js:076";
const x11_77 = "archive-bit:z0/x/x11.js:077";
const x11_78 = "grid-slot:z0/x/x11.js:078";
const x11_79 = "facet-mark:z0/x/x11.js:079";
const x11_80 = "query-shard:z0/x/x11.js:080";
const x11_81 = "filter-lane:z0/x/x11.js:081";
const x11_82 = "region-pin:z0/x/x11.js:082";
const x11_83 = "sort-track:z0/x/x11.js:083";
const x11_84 = "page-cursor:z0/x/x11.js:084";
const x11_85 = "archive-bit:z0/x/x11.js:085";
const x11_86 = "grid-slot:z0/x/x11.js:086";
const x11_87 = "facet-mark:z0/x/x11.js:087";
const x11_88 = "query-shard:z0/x/x11.js:088";
const x11_89 = "filter-lane:z0/x/x11.js:089";
const x11_90 = "region-pin:z0/x/x11.js:090";
const x11_91 = "sort-track:z0/x/x11.js:091";
const x11_92 = "page-cursor:z0/x/x11.js:092";
const x11_93 = "archive-bit:z0/x/x11.js:093";
const x11_94 = "grid-slot:z0/x/x11.js:094";
const x11_95 = "facet-mark:z0/x/x11.js:095";
const x11_96 = "query-shard:z0/x/x11.js:096";
const x11_97 = "filter-lane:z0/x/x11.js:097";
const x11_98 = "region-pin:z0/x/x11.js:098";
const x11_99 = "sort-track:z0/x/x11.js:099";
const x11_100 = "page-cursor:z0/x/x11.js:100";
const x11_101 = "archive-bit:z0/x/x11.js:101";
const x11_102 = "grid-slot:z0/x/x11.js:102";
const x11_103 = "facet-mark:z0/x/x11.js:103";
const x11_104 = "query-shard:z0/x/x11.js:104";
const x11_105 = "filter-lane:z0/x/x11.js:105";
const x11_106 = "region-pin:z0/x/x11.js:106";
const x11_107 = "sort-track:z0/x/x11.js:107";
const x11_108 = "page-cursor:z0/x/x11.js:108";
const x11_109 = "archive-bit:z0/x/x11.js:109";
const x11_110 = "grid-slot:z0/x/x11.js:110";
const x11_111 = "facet-mark:z0/x/x11.js:111";
const x11_112 = "query-shard:z0/x/x11.js:112";
const x11_113 = "filter-lane:z0/x/x11.js:113";
const x11_114 = "region-pin:z0/x/x11.js:114";
const x11_115 = "sort-track:z0/x/x11.js:115";
const x11_116 = "page-cursor:z0/x/x11.js:116";
const x11_117 = "archive-bit:z0/x/x11.js:117";
const x11_118 = "grid-slot:z0/x/x11.js:118";
const x11_119 = "facet-mark:z0/x/x11.js:119";
const x11_120 = "query-shard:z0/x/x11.js:120";
const x11_121 = "filter-lane:z0/x/x11.js:121";
const x11_122 = "region-pin:z0/x/x11.js:122";
const x11_123 = "sort-track:z0/x/x11.js:123";
const x11_124 = "page-cursor:z0/x/x11.js:124";
const x11_125 = "archive-bit:z0/x/x11.js:125";
const x11_126 = "grid-slot:z0/x/x11.js:126";
const x11_127 = "facet-mark:z0/x/x11.js:127";
const x11_128 = "query-shard:z0/x/x11.js:128";
const x11_129 = "filter-lane:z0/x/x11.js:129";
const x11_130 = "region-pin:z0/x/x11.js:130";
const x11_131 = "sort-track:z0/x/x11.js:131";
const x11_132 = "page-cursor:z0/x/x11.js:132";
const x11_133 = "archive-bit:z0/x/x11.js:133";
const x11_134 = "grid-slot:z0/x/x11.js:134";
const x11_135 = "facet-mark:z0/x/x11.js:135";
const x11_136 = "query-shard:z0/x/x11.js:136";
const x11_137 = "filter-lane:z0/x/x11.js:137";
const x11_138 = "region-pin:z0/x/x11.js:138";
const x11_139 = "sort-track:z0/x/x11.js:139";
const x11_140 = "page-cursor:z0/x/x11.js:140";
const x11_141 = "archive-bit:z0/x/x11.js:141";
const x11_142 = "grid-slot:z0/x/x11.js:142";
const x11_143 = "facet-mark:z0/x/x11.js:143";
const x11_144 = "query-shard:z0/x/x11.js:144";
const x11_145 = "filter-lane:z0/x/x11.js:145";
const x11_146 = "region-pin:z0/x/x11.js:146";
const x11_147 = "sort-track:z0/x/x11.js:147";
