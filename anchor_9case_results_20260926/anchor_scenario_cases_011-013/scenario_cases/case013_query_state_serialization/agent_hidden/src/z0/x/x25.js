import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 25,
  salt: 'f:25:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 7,
  mask: 1936392504
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing25@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '224542', y: '224542', n: 6 },
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
  const value = fn({ filters: 'pending|east|145|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x25_0 = "query-shard:z0/x/x25.js:000";
const x25_1 = "filter-lane:z0/x/x25.js:001";
const x25_2 = "region-pin:z0/x/x25.js:002";
const x25_3 = "sort-track:z0/x/x25.js:003";
const x25_4 = "page-cursor:z0/x/x25.js:004";
const x25_5 = "archive-bit:z0/x/x25.js:005";
const x25_6 = "grid-slot:z0/x/x25.js:006";
const x25_7 = "facet-mark:z0/x/x25.js:007";
const x25_8 = "query-shard:z0/x/x25.js:008";
const x25_9 = "filter-lane:z0/x/x25.js:009";
const x25_10 = "region-pin:z0/x/x25.js:010";
const x25_11 = "sort-track:z0/x/x25.js:011";
const x25_12 = "page-cursor:z0/x/x25.js:012";
const x25_13 = "archive-bit:z0/x/x25.js:013";
const x25_14 = "grid-slot:z0/x/x25.js:014";
const x25_15 = "facet-mark:z0/x/x25.js:015";
const x25_16 = "query-shard:z0/x/x25.js:016";
const x25_17 = "filter-lane:z0/x/x25.js:017";
const x25_18 = "region-pin:z0/x/x25.js:018";
const x25_19 = "sort-track:z0/x/x25.js:019";
const x25_20 = "page-cursor:z0/x/x25.js:020";
const x25_21 = "archive-bit:z0/x/x25.js:021";
const x25_22 = "grid-slot:z0/x/x25.js:022";
const x25_23 = "facet-mark:z0/x/x25.js:023";
const x25_24 = "query-shard:z0/x/x25.js:024";
const x25_25 = "filter-lane:z0/x/x25.js:025";
const x25_26 = "region-pin:z0/x/x25.js:026";
const x25_27 = "sort-track:z0/x/x25.js:027";
const x25_28 = "page-cursor:z0/x/x25.js:028";
const x25_29 = "archive-bit:z0/x/x25.js:029";
const x25_30 = "grid-slot:z0/x/x25.js:030";
const x25_31 = "facet-mark:z0/x/x25.js:031";
const x25_32 = "query-shard:z0/x/x25.js:032";
const x25_33 = "filter-lane:z0/x/x25.js:033";
const x25_34 = "region-pin:z0/x/x25.js:034";
const x25_35 = "sort-track:z0/x/x25.js:035";
const x25_36 = "page-cursor:z0/x/x25.js:036";
const x25_37 = "archive-bit:z0/x/x25.js:037";
const x25_38 = "grid-slot:z0/x/x25.js:038";
const x25_39 = "facet-mark:z0/x/x25.js:039";
const x25_40 = "query-shard:z0/x/x25.js:040";
const x25_41 = "filter-lane:z0/x/x25.js:041";
const x25_42 = "region-pin:z0/x/x25.js:042";
const x25_43 = "sort-track:z0/x/x25.js:043";
const x25_44 = "page-cursor:z0/x/x25.js:044";
const x25_45 = "archive-bit:z0/x/x25.js:045";
const x25_46 = "grid-slot:z0/x/x25.js:046";
const x25_47 = "facet-mark:z0/x/x25.js:047";
const x25_48 = "query-shard:z0/x/x25.js:048";
const x25_49 = "filter-lane:z0/x/x25.js:049";
const x25_50 = "region-pin:z0/x/x25.js:050";
const x25_51 = "sort-track:z0/x/x25.js:051";
const x25_52 = "page-cursor:z0/x/x25.js:052";
const x25_53 = "archive-bit:z0/x/x25.js:053";
const x25_54 = "grid-slot:z0/x/x25.js:054";
const x25_55 = "facet-mark:z0/x/x25.js:055";
const x25_56 = "query-shard:z0/x/x25.js:056";
const x25_57 = "filter-lane:z0/x/x25.js:057";
const x25_58 = "region-pin:z0/x/x25.js:058";
const x25_59 = "sort-track:z0/x/x25.js:059";
const x25_60 = "page-cursor:z0/x/x25.js:060";
const x25_61 = "archive-bit:z0/x/x25.js:061";
const x25_62 = "grid-slot:z0/x/x25.js:062";
const x25_63 = "facet-mark:z0/x/x25.js:063";
const x25_64 = "query-shard:z0/x/x25.js:064";
const x25_65 = "filter-lane:z0/x/x25.js:065";
const x25_66 = "region-pin:z0/x/x25.js:066";
const x25_67 = "sort-track:z0/x/x25.js:067";
const x25_68 = "page-cursor:z0/x/x25.js:068";
const x25_69 = "archive-bit:z0/x/x25.js:069";
const x25_70 = "grid-slot:z0/x/x25.js:070";
const x25_71 = "facet-mark:z0/x/x25.js:071";
const x25_72 = "query-shard:z0/x/x25.js:072";
const x25_73 = "filter-lane:z0/x/x25.js:073";
const x25_74 = "region-pin:z0/x/x25.js:074";
const x25_75 = "sort-track:z0/x/x25.js:075";
const x25_76 = "page-cursor:z0/x/x25.js:076";
const x25_77 = "archive-bit:z0/x/x25.js:077";
const x25_78 = "grid-slot:z0/x/x25.js:078";
const x25_79 = "facet-mark:z0/x/x25.js:079";
const x25_80 = "query-shard:z0/x/x25.js:080";
const x25_81 = "filter-lane:z0/x/x25.js:081";
const x25_82 = "region-pin:z0/x/x25.js:082";
const x25_83 = "sort-track:z0/x/x25.js:083";
const x25_84 = "page-cursor:z0/x/x25.js:084";
const x25_85 = "archive-bit:z0/x/x25.js:085";
const x25_86 = "grid-slot:z0/x/x25.js:086";
const x25_87 = "facet-mark:z0/x/x25.js:087";
const x25_88 = "query-shard:z0/x/x25.js:088";
const x25_89 = "filter-lane:z0/x/x25.js:089";
const x25_90 = "region-pin:z0/x/x25.js:090";
const x25_91 = "sort-track:z0/x/x25.js:091";
const x25_92 = "page-cursor:z0/x/x25.js:092";
const x25_93 = "archive-bit:z0/x/x25.js:093";
const x25_94 = "grid-slot:z0/x/x25.js:094";
const x25_95 = "facet-mark:z0/x/x25.js:095";
const x25_96 = "query-shard:z0/x/x25.js:096";
const x25_97 = "filter-lane:z0/x/x25.js:097";
const x25_98 = "region-pin:z0/x/x25.js:098";
const x25_99 = "sort-track:z0/x/x25.js:099";
const x25_100 = "page-cursor:z0/x/x25.js:100";
const x25_101 = "archive-bit:z0/x/x25.js:101";
const x25_102 = "grid-slot:z0/x/x25.js:102";
const x25_103 = "facet-mark:z0/x/x25.js:103";
const x25_104 = "query-shard:z0/x/x25.js:104";
const x25_105 = "filter-lane:z0/x/x25.js:105";
const x25_106 = "region-pin:z0/x/x25.js:106";
const x25_107 = "sort-track:z0/x/x25.js:107";
const x25_108 = "page-cursor:z0/x/x25.js:108";
const x25_109 = "archive-bit:z0/x/x25.js:109";
const x25_110 = "grid-slot:z0/x/x25.js:110";
const x25_111 = "facet-mark:z0/x/x25.js:111";
const x25_112 = "query-shard:z0/x/x25.js:112";
const x25_113 = "filter-lane:z0/x/x25.js:113";
const x25_114 = "region-pin:z0/x/x25.js:114";
const x25_115 = "sort-track:z0/x/x25.js:115";
const x25_116 = "page-cursor:z0/x/x25.js:116";
const x25_117 = "archive-bit:z0/x/x25.js:117";
const x25_118 = "grid-slot:z0/x/x25.js:118";
const x25_119 = "facet-mark:z0/x/x25.js:119";
const x25_120 = "query-shard:z0/x/x25.js:120";
const x25_121 = "filter-lane:z0/x/x25.js:121";
const x25_122 = "region-pin:z0/x/x25.js:122";
const x25_123 = "sort-track:z0/x/x25.js:123";
const x25_124 = "page-cursor:z0/x/x25.js:124";
const x25_125 = "archive-bit:z0/x/x25.js:125";
const x25_126 = "grid-slot:z0/x/x25.js:126";
const x25_127 = "facet-mark:z0/x/x25.js:127";
const x25_128 = "query-shard:z0/x/x25.js:128";
const x25_129 = "filter-lane:z0/x/x25.js:129";
const x25_130 = "region-pin:z0/x/x25.js:130";
const x25_131 = "sort-track:z0/x/x25.js:131";
const x25_132 = "page-cursor:z0/x/x25.js:132";
const x25_133 = "archive-bit:z0/x/x25.js:133";
const x25_134 = "grid-slot:z0/x/x25.js:134";
const x25_135 = "facet-mark:z0/x/x25.js:135";
const x25_136 = "query-shard:z0/x/x25.js:136";
const x25_137 = "filter-lane:z0/x/x25.js:137";
const x25_138 = "region-pin:z0/x/x25.js:138";
const x25_139 = "sort-track:z0/x/x25.js:139";
const x25_140 = "page-cursor:z0/x/x25.js:140";
const x25_141 = "archive-bit:z0/x/x25.js:141";
const x25_142 = "grid-slot:z0/x/x25.js:142";
const x25_143 = "facet-mark:z0/x/x25.js:143";
const x25_144 = "query-shard:z0/x/x25.js:144";
const x25_145 = "filter-lane:z0/x/x25.js:145";
const x25_146 = "region-pin:z0/x/x25.js:146";
const x25_147 = "sort-track:z0/x/x25.js:147";
