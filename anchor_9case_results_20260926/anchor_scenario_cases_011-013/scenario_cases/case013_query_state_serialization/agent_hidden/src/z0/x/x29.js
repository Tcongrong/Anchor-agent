import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 29,
  salt: 'f:29:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 4,
  mask: 3964200956
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing29@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '228450', y: '228450', n: 6 },
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
  const value = fn({ filters: 'pending|east|149|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x29_0 = "query-shard:z0/x/x29.js:000";
const x29_1 = "filter-lane:z0/x/x29.js:001";
const x29_2 = "region-pin:z0/x/x29.js:002";
const x29_3 = "sort-track:z0/x/x29.js:003";
const x29_4 = "page-cursor:z0/x/x29.js:004";
const x29_5 = "archive-bit:z0/x/x29.js:005";
const x29_6 = "grid-slot:z0/x/x29.js:006";
const x29_7 = "facet-mark:z0/x/x29.js:007";
const x29_8 = "query-shard:z0/x/x29.js:008";
const x29_9 = "filter-lane:z0/x/x29.js:009";
const x29_10 = "region-pin:z0/x/x29.js:010";
const x29_11 = "sort-track:z0/x/x29.js:011";
const x29_12 = "page-cursor:z0/x/x29.js:012";
const x29_13 = "archive-bit:z0/x/x29.js:013";
const x29_14 = "grid-slot:z0/x/x29.js:014";
const x29_15 = "facet-mark:z0/x/x29.js:015";
const x29_16 = "query-shard:z0/x/x29.js:016";
const x29_17 = "filter-lane:z0/x/x29.js:017";
const x29_18 = "region-pin:z0/x/x29.js:018";
const x29_19 = "sort-track:z0/x/x29.js:019";
const x29_20 = "page-cursor:z0/x/x29.js:020";
const x29_21 = "archive-bit:z0/x/x29.js:021";
const x29_22 = "grid-slot:z0/x/x29.js:022";
const x29_23 = "facet-mark:z0/x/x29.js:023";
const x29_24 = "query-shard:z0/x/x29.js:024";
const x29_25 = "filter-lane:z0/x/x29.js:025";
const x29_26 = "region-pin:z0/x/x29.js:026";
const x29_27 = "sort-track:z0/x/x29.js:027";
const x29_28 = "page-cursor:z0/x/x29.js:028";
const x29_29 = "archive-bit:z0/x/x29.js:029";
const x29_30 = "grid-slot:z0/x/x29.js:030";
const x29_31 = "facet-mark:z0/x/x29.js:031";
const x29_32 = "query-shard:z0/x/x29.js:032";
const x29_33 = "filter-lane:z0/x/x29.js:033";
const x29_34 = "region-pin:z0/x/x29.js:034";
const x29_35 = "sort-track:z0/x/x29.js:035";
const x29_36 = "page-cursor:z0/x/x29.js:036";
const x29_37 = "archive-bit:z0/x/x29.js:037";
const x29_38 = "grid-slot:z0/x/x29.js:038";
const x29_39 = "facet-mark:z0/x/x29.js:039";
const x29_40 = "query-shard:z0/x/x29.js:040";
const x29_41 = "filter-lane:z0/x/x29.js:041";
const x29_42 = "region-pin:z0/x/x29.js:042";
const x29_43 = "sort-track:z0/x/x29.js:043";
const x29_44 = "page-cursor:z0/x/x29.js:044";
const x29_45 = "archive-bit:z0/x/x29.js:045";
const x29_46 = "grid-slot:z0/x/x29.js:046";
const x29_47 = "facet-mark:z0/x/x29.js:047";
const x29_48 = "query-shard:z0/x/x29.js:048";
const x29_49 = "filter-lane:z0/x/x29.js:049";
const x29_50 = "region-pin:z0/x/x29.js:050";
const x29_51 = "sort-track:z0/x/x29.js:051";
const x29_52 = "page-cursor:z0/x/x29.js:052";
const x29_53 = "archive-bit:z0/x/x29.js:053";
const x29_54 = "grid-slot:z0/x/x29.js:054";
const x29_55 = "facet-mark:z0/x/x29.js:055";
const x29_56 = "query-shard:z0/x/x29.js:056";
const x29_57 = "filter-lane:z0/x/x29.js:057";
const x29_58 = "region-pin:z0/x/x29.js:058";
const x29_59 = "sort-track:z0/x/x29.js:059";
const x29_60 = "page-cursor:z0/x/x29.js:060";
const x29_61 = "archive-bit:z0/x/x29.js:061";
const x29_62 = "grid-slot:z0/x/x29.js:062";
const x29_63 = "facet-mark:z0/x/x29.js:063";
const x29_64 = "query-shard:z0/x/x29.js:064";
const x29_65 = "filter-lane:z0/x/x29.js:065";
const x29_66 = "region-pin:z0/x/x29.js:066";
const x29_67 = "sort-track:z0/x/x29.js:067";
const x29_68 = "page-cursor:z0/x/x29.js:068";
const x29_69 = "archive-bit:z0/x/x29.js:069";
const x29_70 = "grid-slot:z0/x/x29.js:070";
const x29_71 = "facet-mark:z0/x/x29.js:071";
const x29_72 = "query-shard:z0/x/x29.js:072";
const x29_73 = "filter-lane:z0/x/x29.js:073";
const x29_74 = "region-pin:z0/x/x29.js:074";
const x29_75 = "sort-track:z0/x/x29.js:075";
const x29_76 = "page-cursor:z0/x/x29.js:076";
const x29_77 = "archive-bit:z0/x/x29.js:077";
const x29_78 = "grid-slot:z0/x/x29.js:078";
const x29_79 = "facet-mark:z0/x/x29.js:079";
const x29_80 = "query-shard:z0/x/x29.js:080";
const x29_81 = "filter-lane:z0/x/x29.js:081";
const x29_82 = "region-pin:z0/x/x29.js:082";
const x29_83 = "sort-track:z0/x/x29.js:083";
const x29_84 = "page-cursor:z0/x/x29.js:084";
const x29_85 = "archive-bit:z0/x/x29.js:085";
const x29_86 = "grid-slot:z0/x/x29.js:086";
const x29_87 = "facet-mark:z0/x/x29.js:087";
const x29_88 = "query-shard:z0/x/x29.js:088";
const x29_89 = "filter-lane:z0/x/x29.js:089";
const x29_90 = "region-pin:z0/x/x29.js:090";
const x29_91 = "sort-track:z0/x/x29.js:091";
const x29_92 = "page-cursor:z0/x/x29.js:092";
const x29_93 = "archive-bit:z0/x/x29.js:093";
const x29_94 = "grid-slot:z0/x/x29.js:094";
const x29_95 = "facet-mark:z0/x/x29.js:095";
const x29_96 = "query-shard:z0/x/x29.js:096";
const x29_97 = "filter-lane:z0/x/x29.js:097";
const x29_98 = "region-pin:z0/x/x29.js:098";
const x29_99 = "sort-track:z0/x/x29.js:099";
const x29_100 = "page-cursor:z0/x/x29.js:100";
const x29_101 = "archive-bit:z0/x/x29.js:101";
const x29_102 = "grid-slot:z0/x/x29.js:102";
const x29_103 = "facet-mark:z0/x/x29.js:103";
const x29_104 = "query-shard:z0/x/x29.js:104";
const x29_105 = "filter-lane:z0/x/x29.js:105";
const x29_106 = "region-pin:z0/x/x29.js:106";
const x29_107 = "sort-track:z0/x/x29.js:107";
const x29_108 = "page-cursor:z0/x/x29.js:108";
const x29_109 = "archive-bit:z0/x/x29.js:109";
const x29_110 = "grid-slot:z0/x/x29.js:110";
const x29_111 = "facet-mark:z0/x/x29.js:111";
const x29_112 = "query-shard:z0/x/x29.js:112";
const x29_113 = "filter-lane:z0/x/x29.js:113";
const x29_114 = "region-pin:z0/x/x29.js:114";
const x29_115 = "sort-track:z0/x/x29.js:115";
const x29_116 = "page-cursor:z0/x/x29.js:116";
const x29_117 = "archive-bit:z0/x/x29.js:117";
const x29_118 = "grid-slot:z0/x/x29.js:118";
const x29_119 = "facet-mark:z0/x/x29.js:119";
const x29_120 = "query-shard:z0/x/x29.js:120";
const x29_121 = "filter-lane:z0/x/x29.js:121";
const x29_122 = "region-pin:z0/x/x29.js:122";
const x29_123 = "sort-track:z0/x/x29.js:123";
const x29_124 = "page-cursor:z0/x/x29.js:124";
const x29_125 = "archive-bit:z0/x/x29.js:125";
const x29_126 = "grid-slot:z0/x/x29.js:126";
const x29_127 = "facet-mark:z0/x/x29.js:127";
const x29_128 = "query-shard:z0/x/x29.js:128";
const x29_129 = "filter-lane:z0/x/x29.js:129";
const x29_130 = "region-pin:z0/x/x29.js:130";
const x29_131 = "sort-track:z0/x/x29.js:131";
const x29_132 = "page-cursor:z0/x/x29.js:132";
const x29_133 = "archive-bit:z0/x/x29.js:133";
const x29_134 = "grid-slot:z0/x/x29.js:134";
const x29_135 = "facet-mark:z0/x/x29.js:135";
const x29_136 = "query-shard:z0/x/x29.js:136";
const x29_137 = "filter-lane:z0/x/x29.js:137";
const x29_138 = "region-pin:z0/x/x29.js:138";
const x29_139 = "sort-track:z0/x/x29.js:139";
const x29_140 = "page-cursor:z0/x/x29.js:140";
const x29_141 = "archive-bit:z0/x/x29.js:141";
const x29_142 = "grid-slot:z0/x/x29.js:142";
const x29_143 = "facet-mark:z0/x/x29.js:143";
const x29_144 = "query-shard:z0/x/x29.js:144";
const x29_145 = "filter-lane:z0/x/x29.js:145";
const x29_146 = "region-pin:z0/x/x29.js:146";
const x29_147 = "sort-track:z0/x/x29.js:147";
