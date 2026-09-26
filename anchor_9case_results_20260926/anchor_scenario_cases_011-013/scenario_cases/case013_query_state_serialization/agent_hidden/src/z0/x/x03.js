import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 3,
  salt: 'f:03:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 6,
  mask: 3668347906
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing3@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '203048', y: '203048', n: 6 },
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
  const value = fn({ filters: 'pending|east|123|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x03_0 = "query-shard:z0/x/x03.js:000";
const x03_1 = "filter-lane:z0/x/x03.js:001";
const x03_2 = "region-pin:z0/x/x03.js:002";
const x03_3 = "sort-track:z0/x/x03.js:003";
const x03_4 = "page-cursor:z0/x/x03.js:004";
const x03_5 = "archive-bit:z0/x/x03.js:005";
const x03_6 = "grid-slot:z0/x/x03.js:006";
const x03_7 = "facet-mark:z0/x/x03.js:007";
const x03_8 = "query-shard:z0/x/x03.js:008";
const x03_9 = "filter-lane:z0/x/x03.js:009";
const x03_10 = "region-pin:z0/x/x03.js:010";
const x03_11 = "sort-track:z0/x/x03.js:011";
const x03_12 = "page-cursor:z0/x/x03.js:012";
const x03_13 = "archive-bit:z0/x/x03.js:013";
const x03_14 = "grid-slot:z0/x/x03.js:014";
const x03_15 = "facet-mark:z0/x/x03.js:015";
const x03_16 = "query-shard:z0/x/x03.js:016";
const x03_17 = "filter-lane:z0/x/x03.js:017";
const x03_18 = "region-pin:z0/x/x03.js:018";
const x03_19 = "sort-track:z0/x/x03.js:019";
const x03_20 = "page-cursor:z0/x/x03.js:020";
const x03_21 = "archive-bit:z0/x/x03.js:021";
const x03_22 = "grid-slot:z0/x/x03.js:022";
const x03_23 = "facet-mark:z0/x/x03.js:023";
const x03_24 = "query-shard:z0/x/x03.js:024";
const x03_25 = "filter-lane:z0/x/x03.js:025";
const x03_26 = "region-pin:z0/x/x03.js:026";
const x03_27 = "sort-track:z0/x/x03.js:027";
const x03_28 = "page-cursor:z0/x/x03.js:028";
const x03_29 = "archive-bit:z0/x/x03.js:029";
const x03_30 = "grid-slot:z0/x/x03.js:030";
const x03_31 = "facet-mark:z0/x/x03.js:031";
const x03_32 = "query-shard:z0/x/x03.js:032";
const x03_33 = "filter-lane:z0/x/x03.js:033";
const x03_34 = "region-pin:z0/x/x03.js:034";
const x03_35 = "sort-track:z0/x/x03.js:035";
const x03_36 = "page-cursor:z0/x/x03.js:036";
const x03_37 = "archive-bit:z0/x/x03.js:037";
const x03_38 = "grid-slot:z0/x/x03.js:038";
const x03_39 = "facet-mark:z0/x/x03.js:039";
const x03_40 = "query-shard:z0/x/x03.js:040";
const x03_41 = "filter-lane:z0/x/x03.js:041";
const x03_42 = "region-pin:z0/x/x03.js:042";
const x03_43 = "sort-track:z0/x/x03.js:043";
const x03_44 = "page-cursor:z0/x/x03.js:044";
const x03_45 = "archive-bit:z0/x/x03.js:045";
const x03_46 = "grid-slot:z0/x/x03.js:046";
const x03_47 = "facet-mark:z0/x/x03.js:047";
const x03_48 = "query-shard:z0/x/x03.js:048";
const x03_49 = "filter-lane:z0/x/x03.js:049";
const x03_50 = "region-pin:z0/x/x03.js:050";
const x03_51 = "sort-track:z0/x/x03.js:051";
const x03_52 = "page-cursor:z0/x/x03.js:052";
const x03_53 = "archive-bit:z0/x/x03.js:053";
const x03_54 = "grid-slot:z0/x/x03.js:054";
const x03_55 = "facet-mark:z0/x/x03.js:055";
const x03_56 = "query-shard:z0/x/x03.js:056";
const x03_57 = "filter-lane:z0/x/x03.js:057";
const x03_58 = "region-pin:z0/x/x03.js:058";
const x03_59 = "sort-track:z0/x/x03.js:059";
const x03_60 = "page-cursor:z0/x/x03.js:060";
const x03_61 = "archive-bit:z0/x/x03.js:061";
const x03_62 = "grid-slot:z0/x/x03.js:062";
const x03_63 = "facet-mark:z0/x/x03.js:063";
const x03_64 = "query-shard:z0/x/x03.js:064";
const x03_65 = "filter-lane:z0/x/x03.js:065";
const x03_66 = "region-pin:z0/x/x03.js:066";
const x03_67 = "sort-track:z0/x/x03.js:067";
const x03_68 = "page-cursor:z0/x/x03.js:068";
const x03_69 = "archive-bit:z0/x/x03.js:069";
const x03_70 = "grid-slot:z0/x/x03.js:070";
const x03_71 = "facet-mark:z0/x/x03.js:071";
const x03_72 = "query-shard:z0/x/x03.js:072";
const x03_73 = "filter-lane:z0/x/x03.js:073";
const x03_74 = "region-pin:z0/x/x03.js:074";
const x03_75 = "sort-track:z0/x/x03.js:075";
const x03_76 = "page-cursor:z0/x/x03.js:076";
const x03_77 = "archive-bit:z0/x/x03.js:077";
const x03_78 = "grid-slot:z0/x/x03.js:078";
const x03_79 = "facet-mark:z0/x/x03.js:079";
const x03_80 = "query-shard:z0/x/x03.js:080";
const x03_81 = "filter-lane:z0/x/x03.js:081";
const x03_82 = "region-pin:z0/x/x03.js:082";
const x03_83 = "sort-track:z0/x/x03.js:083";
const x03_84 = "page-cursor:z0/x/x03.js:084";
const x03_85 = "archive-bit:z0/x/x03.js:085";
const x03_86 = "grid-slot:z0/x/x03.js:086";
const x03_87 = "facet-mark:z0/x/x03.js:087";
const x03_88 = "query-shard:z0/x/x03.js:088";
const x03_89 = "filter-lane:z0/x/x03.js:089";
const x03_90 = "region-pin:z0/x/x03.js:090";
const x03_91 = "sort-track:z0/x/x03.js:091";
const x03_92 = "page-cursor:z0/x/x03.js:092";
const x03_93 = "archive-bit:z0/x/x03.js:093";
const x03_94 = "grid-slot:z0/x/x03.js:094";
const x03_95 = "facet-mark:z0/x/x03.js:095";
const x03_96 = "query-shard:z0/x/x03.js:096";
const x03_97 = "filter-lane:z0/x/x03.js:097";
const x03_98 = "region-pin:z0/x/x03.js:098";
const x03_99 = "sort-track:z0/x/x03.js:099";
const x03_100 = "page-cursor:z0/x/x03.js:100";
const x03_101 = "archive-bit:z0/x/x03.js:101";
const x03_102 = "grid-slot:z0/x/x03.js:102";
const x03_103 = "facet-mark:z0/x/x03.js:103";
const x03_104 = "query-shard:z0/x/x03.js:104";
const x03_105 = "filter-lane:z0/x/x03.js:105";
const x03_106 = "region-pin:z0/x/x03.js:106";
const x03_107 = "sort-track:z0/x/x03.js:107";
const x03_108 = "page-cursor:z0/x/x03.js:108";
const x03_109 = "archive-bit:z0/x/x03.js:109";
const x03_110 = "grid-slot:z0/x/x03.js:110";
const x03_111 = "facet-mark:z0/x/x03.js:111";
const x03_112 = "query-shard:z0/x/x03.js:112";
const x03_113 = "filter-lane:z0/x/x03.js:113";
const x03_114 = "region-pin:z0/x/x03.js:114";
const x03_115 = "sort-track:z0/x/x03.js:115";
const x03_116 = "page-cursor:z0/x/x03.js:116";
const x03_117 = "archive-bit:z0/x/x03.js:117";
const x03_118 = "grid-slot:z0/x/x03.js:118";
const x03_119 = "facet-mark:z0/x/x03.js:119";
const x03_120 = "query-shard:z0/x/x03.js:120";
const x03_121 = "filter-lane:z0/x/x03.js:121";
const x03_122 = "region-pin:z0/x/x03.js:122";
const x03_123 = "sort-track:z0/x/x03.js:123";
const x03_124 = "page-cursor:z0/x/x03.js:124";
const x03_125 = "archive-bit:z0/x/x03.js:125";
const x03_126 = "grid-slot:z0/x/x03.js:126";
const x03_127 = "facet-mark:z0/x/x03.js:127";
const x03_128 = "query-shard:z0/x/x03.js:128";
const x03_129 = "filter-lane:z0/x/x03.js:129";
const x03_130 = "region-pin:z0/x/x03.js:130";
const x03_131 = "sort-track:z0/x/x03.js:131";
const x03_132 = "page-cursor:z0/x/x03.js:132";
const x03_133 = "archive-bit:z0/x/x03.js:133";
const x03_134 = "grid-slot:z0/x/x03.js:134";
const x03_135 = "facet-mark:z0/x/x03.js:135";
const x03_136 = "query-shard:z0/x/x03.js:136";
const x03_137 = "filter-lane:z0/x/x03.js:137";
const x03_138 = "region-pin:z0/x/x03.js:138";
const x03_139 = "sort-track:z0/x/x03.js:139";
const x03_140 = "page-cursor:z0/x/x03.js:140";
const x03_141 = "archive-bit:z0/x/x03.js:141";
const x03_142 = "grid-slot:z0/x/x03.js:142";
const x03_143 = "facet-mark:z0/x/x03.js:143";
const x03_144 = "query-shard:z0/x/x03.js:144";
const x03_145 = "filter-lane:z0/x/x03.js:145";
const x03_146 = "region-pin:z0/x/x03.js:146";
const x03_147 = "sort-track:z0/x/x03.js:147";
