import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 13,
  salt: 'f:13:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 9,
  mask: 147934444
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing13@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '212818', y: '212818', n: 6 },
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
  const value = fn({ filters: 'pending|east|133|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x13_0 = "query-shard:z0/x/x13.js:000";
const x13_1 = "filter-lane:z0/x/x13.js:001";
const x13_2 = "region-pin:z0/x/x13.js:002";
const x13_3 = "sort-track:z0/x/x13.js:003";
const x13_4 = "page-cursor:z0/x/x13.js:004";
const x13_5 = "archive-bit:z0/x/x13.js:005";
const x13_6 = "grid-slot:z0/x/x13.js:006";
const x13_7 = "facet-mark:z0/x/x13.js:007";
const x13_8 = "query-shard:z0/x/x13.js:008";
const x13_9 = "filter-lane:z0/x/x13.js:009";
const x13_10 = "region-pin:z0/x/x13.js:010";
const x13_11 = "sort-track:z0/x/x13.js:011";
const x13_12 = "page-cursor:z0/x/x13.js:012";
const x13_13 = "archive-bit:z0/x/x13.js:013";
const x13_14 = "grid-slot:z0/x/x13.js:014";
const x13_15 = "facet-mark:z0/x/x13.js:015";
const x13_16 = "query-shard:z0/x/x13.js:016";
const x13_17 = "filter-lane:z0/x/x13.js:017";
const x13_18 = "region-pin:z0/x/x13.js:018";
const x13_19 = "sort-track:z0/x/x13.js:019";
const x13_20 = "page-cursor:z0/x/x13.js:020";
const x13_21 = "archive-bit:z0/x/x13.js:021";
const x13_22 = "grid-slot:z0/x/x13.js:022";
const x13_23 = "facet-mark:z0/x/x13.js:023";
const x13_24 = "query-shard:z0/x/x13.js:024";
const x13_25 = "filter-lane:z0/x/x13.js:025";
const x13_26 = "region-pin:z0/x/x13.js:026";
const x13_27 = "sort-track:z0/x/x13.js:027";
const x13_28 = "page-cursor:z0/x/x13.js:028";
const x13_29 = "archive-bit:z0/x/x13.js:029";
const x13_30 = "grid-slot:z0/x/x13.js:030";
const x13_31 = "facet-mark:z0/x/x13.js:031";
const x13_32 = "query-shard:z0/x/x13.js:032";
const x13_33 = "filter-lane:z0/x/x13.js:033";
const x13_34 = "region-pin:z0/x/x13.js:034";
const x13_35 = "sort-track:z0/x/x13.js:035";
const x13_36 = "page-cursor:z0/x/x13.js:036";
const x13_37 = "archive-bit:z0/x/x13.js:037";
const x13_38 = "grid-slot:z0/x/x13.js:038";
const x13_39 = "facet-mark:z0/x/x13.js:039";
const x13_40 = "query-shard:z0/x/x13.js:040";
const x13_41 = "filter-lane:z0/x/x13.js:041";
const x13_42 = "region-pin:z0/x/x13.js:042";
const x13_43 = "sort-track:z0/x/x13.js:043";
const x13_44 = "page-cursor:z0/x/x13.js:044";
const x13_45 = "archive-bit:z0/x/x13.js:045";
const x13_46 = "grid-slot:z0/x/x13.js:046";
const x13_47 = "facet-mark:z0/x/x13.js:047";
const x13_48 = "query-shard:z0/x/x13.js:048";
const x13_49 = "filter-lane:z0/x/x13.js:049";
const x13_50 = "region-pin:z0/x/x13.js:050";
const x13_51 = "sort-track:z0/x/x13.js:051";
const x13_52 = "page-cursor:z0/x/x13.js:052";
const x13_53 = "archive-bit:z0/x/x13.js:053";
const x13_54 = "grid-slot:z0/x/x13.js:054";
const x13_55 = "facet-mark:z0/x/x13.js:055";
const x13_56 = "query-shard:z0/x/x13.js:056";
const x13_57 = "filter-lane:z0/x/x13.js:057";
const x13_58 = "region-pin:z0/x/x13.js:058";
const x13_59 = "sort-track:z0/x/x13.js:059";
const x13_60 = "page-cursor:z0/x/x13.js:060";
const x13_61 = "archive-bit:z0/x/x13.js:061";
const x13_62 = "grid-slot:z0/x/x13.js:062";
const x13_63 = "facet-mark:z0/x/x13.js:063";
const x13_64 = "query-shard:z0/x/x13.js:064";
const x13_65 = "filter-lane:z0/x/x13.js:065";
const x13_66 = "region-pin:z0/x/x13.js:066";
const x13_67 = "sort-track:z0/x/x13.js:067";
const x13_68 = "page-cursor:z0/x/x13.js:068";
const x13_69 = "archive-bit:z0/x/x13.js:069";
const x13_70 = "grid-slot:z0/x/x13.js:070";
const x13_71 = "facet-mark:z0/x/x13.js:071";
const x13_72 = "query-shard:z0/x/x13.js:072";
const x13_73 = "filter-lane:z0/x/x13.js:073";
const x13_74 = "region-pin:z0/x/x13.js:074";
const x13_75 = "sort-track:z0/x/x13.js:075";
const x13_76 = "page-cursor:z0/x/x13.js:076";
const x13_77 = "archive-bit:z0/x/x13.js:077";
const x13_78 = "grid-slot:z0/x/x13.js:078";
const x13_79 = "facet-mark:z0/x/x13.js:079";
const x13_80 = "query-shard:z0/x/x13.js:080";
const x13_81 = "filter-lane:z0/x/x13.js:081";
const x13_82 = "region-pin:z0/x/x13.js:082";
const x13_83 = "sort-track:z0/x/x13.js:083";
const x13_84 = "page-cursor:z0/x/x13.js:084";
const x13_85 = "archive-bit:z0/x/x13.js:085";
const x13_86 = "grid-slot:z0/x/x13.js:086";
const x13_87 = "facet-mark:z0/x/x13.js:087";
const x13_88 = "query-shard:z0/x/x13.js:088";
const x13_89 = "filter-lane:z0/x/x13.js:089";
const x13_90 = "region-pin:z0/x/x13.js:090";
const x13_91 = "sort-track:z0/x/x13.js:091";
const x13_92 = "page-cursor:z0/x/x13.js:092";
const x13_93 = "archive-bit:z0/x/x13.js:093";
const x13_94 = "grid-slot:z0/x/x13.js:094";
const x13_95 = "facet-mark:z0/x/x13.js:095";
const x13_96 = "query-shard:z0/x/x13.js:096";
const x13_97 = "filter-lane:z0/x/x13.js:097";
const x13_98 = "region-pin:z0/x/x13.js:098";
const x13_99 = "sort-track:z0/x/x13.js:099";
const x13_100 = "page-cursor:z0/x/x13.js:100";
const x13_101 = "archive-bit:z0/x/x13.js:101";
const x13_102 = "grid-slot:z0/x/x13.js:102";
const x13_103 = "facet-mark:z0/x/x13.js:103";
const x13_104 = "query-shard:z0/x/x13.js:104";
const x13_105 = "filter-lane:z0/x/x13.js:105";
const x13_106 = "region-pin:z0/x/x13.js:106";
const x13_107 = "sort-track:z0/x/x13.js:107";
const x13_108 = "page-cursor:z0/x/x13.js:108";
const x13_109 = "archive-bit:z0/x/x13.js:109";
const x13_110 = "grid-slot:z0/x/x13.js:110";
const x13_111 = "facet-mark:z0/x/x13.js:111";
const x13_112 = "query-shard:z0/x/x13.js:112";
const x13_113 = "filter-lane:z0/x/x13.js:113";
const x13_114 = "region-pin:z0/x/x13.js:114";
const x13_115 = "sort-track:z0/x/x13.js:115";
const x13_116 = "page-cursor:z0/x/x13.js:116";
const x13_117 = "archive-bit:z0/x/x13.js:117";
const x13_118 = "grid-slot:z0/x/x13.js:118";
const x13_119 = "facet-mark:z0/x/x13.js:119";
const x13_120 = "query-shard:z0/x/x13.js:120";
const x13_121 = "filter-lane:z0/x/x13.js:121";
const x13_122 = "region-pin:z0/x/x13.js:122";
const x13_123 = "sort-track:z0/x/x13.js:123";
const x13_124 = "page-cursor:z0/x/x13.js:124";
const x13_125 = "archive-bit:z0/x/x13.js:125";
const x13_126 = "grid-slot:z0/x/x13.js:126";
const x13_127 = "facet-mark:z0/x/x13.js:127";
const x13_128 = "query-shard:z0/x/x13.js:128";
const x13_129 = "filter-lane:z0/x/x13.js:129";
const x13_130 = "region-pin:z0/x/x13.js:130";
const x13_131 = "sort-track:z0/x/x13.js:131";
const x13_132 = "page-cursor:z0/x/x13.js:132";
const x13_133 = "archive-bit:z0/x/x13.js:133";
const x13_134 = "grid-slot:z0/x/x13.js:134";
const x13_135 = "facet-mark:z0/x/x13.js:135";
const x13_136 = "query-shard:z0/x/x13.js:136";
const x13_137 = "filter-lane:z0/x/x13.js:137";
const x13_138 = "region-pin:z0/x/x13.js:138";
const x13_139 = "sort-track:z0/x/x13.js:139";
const x13_140 = "page-cursor:z0/x/x13.js:140";
const x13_141 = "archive-bit:z0/x/x13.js:141";
const x13_142 = "grid-slot:z0/x/x13.js:142";
const x13_143 = "facet-mark:z0/x/x13.js:143";
const x13_144 = "query-shard:z0/x/x13.js:144";
const x13_145 = "filter-lane:z0/x/x13.js:145";
const x13_146 = "region-pin:z0/x/x13.js:146";
const x13_147 = "sort-track:z0/x/x13.js:147";
