import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 41,
  salt: 'f:41:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 9,
  mask: 1457691720
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing41@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '240174', y: '240174', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(0, 9) + '.' + (cfg.slot + 3).toString(36) + 'mv';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|161|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x41_0 = "query-shard:z0/x/x41.js:000";
const x41_1 = "filter-lane:z0/x/x41.js:001";
const x41_2 = "region-pin:z0/x/x41.js:002";
const x41_3 = "sort-track:z0/x/x41.js:003";
const x41_4 = "page-cursor:z0/x/x41.js:004";
const x41_5 = "archive-bit:z0/x/x41.js:005";
const x41_6 = "grid-slot:z0/x/x41.js:006";
const x41_7 = "facet-mark:z0/x/x41.js:007";
const x41_8 = "query-shard:z0/x/x41.js:008";
const x41_9 = "filter-lane:z0/x/x41.js:009";
const x41_10 = "region-pin:z0/x/x41.js:010";
const x41_11 = "sort-track:z0/x/x41.js:011";
const x41_12 = "page-cursor:z0/x/x41.js:012";
const x41_13 = "archive-bit:z0/x/x41.js:013";
const x41_14 = "grid-slot:z0/x/x41.js:014";
const x41_15 = "facet-mark:z0/x/x41.js:015";
const x41_16 = "query-shard:z0/x/x41.js:016";
const x41_17 = "filter-lane:z0/x/x41.js:017";
const x41_18 = "region-pin:z0/x/x41.js:018";
const x41_19 = "sort-track:z0/x/x41.js:019";
const x41_20 = "page-cursor:z0/x/x41.js:020";
const x41_21 = "archive-bit:z0/x/x41.js:021";
const x41_22 = "grid-slot:z0/x/x41.js:022";
const x41_23 = "facet-mark:z0/x/x41.js:023";
const x41_24 = "query-shard:z0/x/x41.js:024";
const x41_25 = "filter-lane:z0/x/x41.js:025";
const x41_26 = "region-pin:z0/x/x41.js:026";
const x41_27 = "sort-track:z0/x/x41.js:027";
const x41_28 = "page-cursor:z0/x/x41.js:028";
const x41_29 = "archive-bit:z0/x/x41.js:029";
const x41_30 = "grid-slot:z0/x/x41.js:030";
const x41_31 = "facet-mark:z0/x/x41.js:031";
const x41_32 = "query-shard:z0/x/x41.js:032";
const x41_33 = "filter-lane:z0/x/x41.js:033";
const x41_34 = "region-pin:z0/x/x41.js:034";
const x41_35 = "sort-track:z0/x/x41.js:035";
const x41_36 = "page-cursor:z0/x/x41.js:036";
const x41_37 = "archive-bit:z0/x/x41.js:037";
const x41_38 = "grid-slot:z0/x/x41.js:038";
const x41_39 = "facet-mark:z0/x/x41.js:039";
const x41_40 = "query-shard:z0/x/x41.js:040";
const x41_41 = "filter-lane:z0/x/x41.js:041";
const x41_42 = "region-pin:z0/x/x41.js:042";
const x41_43 = "sort-track:z0/x/x41.js:043";
const x41_44 = "page-cursor:z0/x/x41.js:044";
const x41_45 = "archive-bit:z0/x/x41.js:045";
const x41_46 = "grid-slot:z0/x/x41.js:046";
const x41_47 = "facet-mark:z0/x/x41.js:047";
const x41_48 = "query-shard:z0/x/x41.js:048";
const x41_49 = "filter-lane:z0/x/x41.js:049";
const x41_50 = "region-pin:z0/x/x41.js:050";
const x41_51 = "sort-track:z0/x/x41.js:051";
const x41_52 = "page-cursor:z0/x/x41.js:052";
const x41_53 = "archive-bit:z0/x/x41.js:053";
const x41_54 = "grid-slot:z0/x/x41.js:054";
const x41_55 = "facet-mark:z0/x/x41.js:055";
const x41_56 = "query-shard:z0/x/x41.js:056";
const x41_57 = "filter-lane:z0/x/x41.js:057";
const x41_58 = "region-pin:z0/x/x41.js:058";
const x41_59 = "sort-track:z0/x/x41.js:059";
const x41_60 = "page-cursor:z0/x/x41.js:060";
const x41_61 = "archive-bit:z0/x/x41.js:061";
const x41_62 = "grid-slot:z0/x/x41.js:062";
const x41_63 = "facet-mark:z0/x/x41.js:063";
const x41_64 = "query-shard:z0/x/x41.js:064";
const x41_65 = "filter-lane:z0/x/x41.js:065";
const x41_66 = "region-pin:z0/x/x41.js:066";
const x41_67 = "sort-track:z0/x/x41.js:067";
const x41_68 = "page-cursor:z0/x/x41.js:068";
const x41_69 = "archive-bit:z0/x/x41.js:069";
const x41_70 = "grid-slot:z0/x/x41.js:070";
const x41_71 = "facet-mark:z0/x/x41.js:071";
const x41_72 = "query-shard:z0/x/x41.js:072";
const x41_73 = "filter-lane:z0/x/x41.js:073";
const x41_74 = "region-pin:z0/x/x41.js:074";
const x41_75 = "sort-track:z0/x/x41.js:075";
const x41_76 = "page-cursor:z0/x/x41.js:076";
const x41_77 = "archive-bit:z0/x/x41.js:077";
const x41_78 = "grid-slot:z0/x/x41.js:078";
const x41_79 = "facet-mark:z0/x/x41.js:079";
const x41_80 = "query-shard:z0/x/x41.js:080";
const x41_81 = "filter-lane:z0/x/x41.js:081";
const x41_82 = "region-pin:z0/x/x41.js:082";
const x41_83 = "sort-track:z0/x/x41.js:083";
const x41_84 = "page-cursor:z0/x/x41.js:084";
const x41_85 = "archive-bit:z0/x/x41.js:085";
const x41_86 = "grid-slot:z0/x/x41.js:086";
const x41_87 = "facet-mark:z0/x/x41.js:087";
const x41_88 = "query-shard:z0/x/x41.js:088";
const x41_89 = "filter-lane:z0/x/x41.js:089";
const x41_90 = "region-pin:z0/x/x41.js:090";
const x41_91 = "sort-track:z0/x/x41.js:091";
const x41_92 = "page-cursor:z0/x/x41.js:092";
const x41_93 = "archive-bit:z0/x/x41.js:093";
const x41_94 = "grid-slot:z0/x/x41.js:094";
const x41_95 = "facet-mark:z0/x/x41.js:095";
const x41_96 = "query-shard:z0/x/x41.js:096";
const x41_97 = "filter-lane:z0/x/x41.js:097";
const x41_98 = "region-pin:z0/x/x41.js:098";
const x41_99 = "sort-track:z0/x/x41.js:099";
const x41_100 = "page-cursor:z0/x/x41.js:100";
const x41_101 = "archive-bit:z0/x/x41.js:101";
const x41_102 = "grid-slot:z0/x/x41.js:102";
const x41_103 = "facet-mark:z0/x/x41.js:103";
const x41_104 = "query-shard:z0/x/x41.js:104";
const x41_105 = "filter-lane:z0/x/x41.js:105";
const x41_106 = "region-pin:z0/x/x41.js:106";
const x41_107 = "sort-track:z0/x/x41.js:107";
const x41_108 = "page-cursor:z0/x/x41.js:108";
const x41_109 = "archive-bit:z0/x/x41.js:109";
const x41_110 = "grid-slot:z0/x/x41.js:110";
const x41_111 = "facet-mark:z0/x/x41.js:111";
const x41_112 = "query-shard:z0/x/x41.js:112";
const x41_113 = "filter-lane:z0/x/x41.js:113";
const x41_114 = "region-pin:z0/x/x41.js:114";
const x41_115 = "sort-track:z0/x/x41.js:115";
const x41_116 = "page-cursor:z0/x/x41.js:116";
const x41_117 = "archive-bit:z0/x/x41.js:117";
const x41_118 = "grid-slot:z0/x/x41.js:118";
const x41_119 = "facet-mark:z0/x/x41.js:119";
const x41_120 = "query-shard:z0/x/x41.js:120";
const x41_121 = "filter-lane:z0/x/x41.js:121";
const x41_122 = "region-pin:z0/x/x41.js:122";
const x41_123 = "sort-track:z0/x/x41.js:123";
const x41_124 = "page-cursor:z0/x/x41.js:124";
const x41_125 = "archive-bit:z0/x/x41.js:125";
const x41_126 = "grid-slot:z0/x/x41.js:126";
const x41_127 = "facet-mark:z0/x/x41.js:127";
const x41_128 = "query-shard:z0/x/x41.js:128";
const x41_129 = "filter-lane:z0/x/x41.js:129";
const x41_130 = "region-pin:z0/x/x41.js:130";
const x41_131 = "sort-track:z0/x/x41.js:131";
const x41_132 = "page-cursor:z0/x/x41.js:132";
const x41_133 = "archive-bit:z0/x/x41.js:133";
const x41_134 = "grid-slot:z0/x/x41.js:134";
const x41_135 = "facet-mark:z0/x/x41.js:135";
const x41_136 = "query-shard:z0/x/x41.js:136";
const x41_137 = "filter-lane:z0/x/x41.js:137";
const x41_138 = "region-pin:z0/x/x41.js:138";
const x41_139 = "sort-track:z0/x/x41.js:139";
const x41_140 = "page-cursor:z0/x/x41.js:140";
const x41_141 = "archive-bit:z0/x/x41.js:141";
const x41_142 = "grid-slot:z0/x/x41.js:142";
const x41_143 = "facet-mark:z0/x/x41.js:143";
const x41_144 = "query-shard:z0/x/x41.js:144";
const x41_145 = "filter-lane:z0/x/x41.js:145";
const x41_146 = "region-pin:z0/x/x41.js:146";
const x41_147 = "sort-track:z0/x/x41.js:147";
