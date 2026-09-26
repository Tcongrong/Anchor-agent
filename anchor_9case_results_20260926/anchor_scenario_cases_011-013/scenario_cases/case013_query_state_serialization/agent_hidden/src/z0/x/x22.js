import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 22,
  salt: 'f:22:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 4,
  mask: 2563019813
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing22@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '221611', y: '221611', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix2(value, index) {
  return 'ln_' + value.slice(4) + '-' + (cfg.slot + 11).toString(36);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|142|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x22_0 = "query-shard:z0/x/x22.js:000";
const x22_1 = "filter-lane:z0/x/x22.js:001";
const x22_2 = "region-pin:z0/x/x22.js:002";
const x22_3 = "sort-track:z0/x/x22.js:003";
const x22_4 = "page-cursor:z0/x/x22.js:004";
const x22_5 = "archive-bit:z0/x/x22.js:005";
const x22_6 = "grid-slot:z0/x/x22.js:006";
const x22_7 = "facet-mark:z0/x/x22.js:007";
const x22_8 = "query-shard:z0/x/x22.js:008";
const x22_9 = "filter-lane:z0/x/x22.js:009";
const x22_10 = "region-pin:z0/x/x22.js:010";
const x22_11 = "sort-track:z0/x/x22.js:011";
const x22_12 = "page-cursor:z0/x/x22.js:012";
const x22_13 = "archive-bit:z0/x/x22.js:013";
const x22_14 = "grid-slot:z0/x/x22.js:014";
const x22_15 = "facet-mark:z0/x/x22.js:015";
const x22_16 = "query-shard:z0/x/x22.js:016";
const x22_17 = "filter-lane:z0/x/x22.js:017";
const x22_18 = "region-pin:z0/x/x22.js:018";
const x22_19 = "sort-track:z0/x/x22.js:019";
const x22_20 = "page-cursor:z0/x/x22.js:020";
const x22_21 = "archive-bit:z0/x/x22.js:021";
const x22_22 = "grid-slot:z0/x/x22.js:022";
const x22_23 = "facet-mark:z0/x/x22.js:023";
const x22_24 = "query-shard:z0/x/x22.js:024";
const x22_25 = "filter-lane:z0/x/x22.js:025";
const x22_26 = "region-pin:z0/x/x22.js:026";
const x22_27 = "sort-track:z0/x/x22.js:027";
const x22_28 = "page-cursor:z0/x/x22.js:028";
const x22_29 = "archive-bit:z0/x/x22.js:029";
const x22_30 = "grid-slot:z0/x/x22.js:030";
const x22_31 = "facet-mark:z0/x/x22.js:031";
const x22_32 = "query-shard:z0/x/x22.js:032";
const x22_33 = "filter-lane:z0/x/x22.js:033";
const x22_34 = "region-pin:z0/x/x22.js:034";
const x22_35 = "sort-track:z0/x/x22.js:035";
const x22_36 = "page-cursor:z0/x/x22.js:036";
const x22_37 = "archive-bit:z0/x/x22.js:037";
const x22_38 = "grid-slot:z0/x/x22.js:038";
const x22_39 = "facet-mark:z0/x/x22.js:039";
const x22_40 = "query-shard:z0/x/x22.js:040";
const x22_41 = "filter-lane:z0/x/x22.js:041";
const x22_42 = "region-pin:z0/x/x22.js:042";
const x22_43 = "sort-track:z0/x/x22.js:043";
const x22_44 = "page-cursor:z0/x/x22.js:044";
const x22_45 = "archive-bit:z0/x/x22.js:045";
const x22_46 = "grid-slot:z0/x/x22.js:046";
const x22_47 = "facet-mark:z0/x/x22.js:047";
const x22_48 = "query-shard:z0/x/x22.js:048";
const x22_49 = "filter-lane:z0/x/x22.js:049";
const x22_50 = "region-pin:z0/x/x22.js:050";
const x22_51 = "sort-track:z0/x/x22.js:051";
const x22_52 = "page-cursor:z0/x/x22.js:052";
const x22_53 = "archive-bit:z0/x/x22.js:053";
const x22_54 = "grid-slot:z0/x/x22.js:054";
const x22_55 = "facet-mark:z0/x/x22.js:055";
const x22_56 = "query-shard:z0/x/x22.js:056";
const x22_57 = "filter-lane:z0/x/x22.js:057";
const x22_58 = "region-pin:z0/x/x22.js:058";
const x22_59 = "sort-track:z0/x/x22.js:059";
const x22_60 = "page-cursor:z0/x/x22.js:060";
const x22_61 = "archive-bit:z0/x/x22.js:061";
const x22_62 = "grid-slot:z0/x/x22.js:062";
const x22_63 = "facet-mark:z0/x/x22.js:063";
const x22_64 = "query-shard:z0/x/x22.js:064";
const x22_65 = "filter-lane:z0/x/x22.js:065";
const x22_66 = "region-pin:z0/x/x22.js:066";
const x22_67 = "sort-track:z0/x/x22.js:067";
const x22_68 = "page-cursor:z0/x/x22.js:068";
const x22_69 = "archive-bit:z0/x/x22.js:069";
const x22_70 = "grid-slot:z0/x/x22.js:070";
const x22_71 = "facet-mark:z0/x/x22.js:071";
const x22_72 = "query-shard:z0/x/x22.js:072";
const x22_73 = "filter-lane:z0/x/x22.js:073";
const x22_74 = "region-pin:z0/x/x22.js:074";
const x22_75 = "sort-track:z0/x/x22.js:075";
const x22_76 = "page-cursor:z0/x/x22.js:076";
const x22_77 = "archive-bit:z0/x/x22.js:077";
const x22_78 = "grid-slot:z0/x/x22.js:078";
const x22_79 = "facet-mark:z0/x/x22.js:079";
const x22_80 = "query-shard:z0/x/x22.js:080";
const x22_81 = "filter-lane:z0/x/x22.js:081";
const x22_82 = "region-pin:z0/x/x22.js:082";
const x22_83 = "sort-track:z0/x/x22.js:083";
const x22_84 = "page-cursor:z0/x/x22.js:084";
const x22_85 = "archive-bit:z0/x/x22.js:085";
const x22_86 = "grid-slot:z0/x/x22.js:086";
const x22_87 = "facet-mark:z0/x/x22.js:087";
const x22_88 = "query-shard:z0/x/x22.js:088";
const x22_89 = "filter-lane:z0/x/x22.js:089";
const x22_90 = "region-pin:z0/x/x22.js:090";
const x22_91 = "sort-track:z0/x/x22.js:091";
const x22_92 = "page-cursor:z0/x/x22.js:092";
const x22_93 = "archive-bit:z0/x/x22.js:093";
const x22_94 = "grid-slot:z0/x/x22.js:094";
const x22_95 = "facet-mark:z0/x/x22.js:095";
const x22_96 = "query-shard:z0/x/x22.js:096";
const x22_97 = "filter-lane:z0/x/x22.js:097";
const x22_98 = "region-pin:z0/x/x22.js:098";
const x22_99 = "sort-track:z0/x/x22.js:099";
const x22_100 = "page-cursor:z0/x/x22.js:100";
const x22_101 = "archive-bit:z0/x/x22.js:101";
const x22_102 = "grid-slot:z0/x/x22.js:102";
const x22_103 = "facet-mark:z0/x/x22.js:103";
const x22_104 = "query-shard:z0/x/x22.js:104";
const x22_105 = "filter-lane:z0/x/x22.js:105";
const x22_106 = "region-pin:z0/x/x22.js:106";
const x22_107 = "sort-track:z0/x/x22.js:107";
const x22_108 = "page-cursor:z0/x/x22.js:108";
const x22_109 = "archive-bit:z0/x/x22.js:109";
const x22_110 = "grid-slot:z0/x/x22.js:110";
const x22_111 = "facet-mark:z0/x/x22.js:111";
const x22_112 = "query-shard:z0/x/x22.js:112";
const x22_113 = "filter-lane:z0/x/x22.js:113";
const x22_114 = "region-pin:z0/x/x22.js:114";
const x22_115 = "sort-track:z0/x/x22.js:115";
const x22_116 = "page-cursor:z0/x/x22.js:116";
const x22_117 = "archive-bit:z0/x/x22.js:117";
const x22_118 = "grid-slot:z0/x/x22.js:118";
const x22_119 = "facet-mark:z0/x/x22.js:119";
const x22_120 = "query-shard:z0/x/x22.js:120";
const x22_121 = "filter-lane:z0/x/x22.js:121";
const x22_122 = "region-pin:z0/x/x22.js:122";
const x22_123 = "sort-track:z0/x/x22.js:123";
const x22_124 = "page-cursor:z0/x/x22.js:124";
const x22_125 = "archive-bit:z0/x/x22.js:125";
const x22_126 = "grid-slot:z0/x/x22.js:126";
const x22_127 = "facet-mark:z0/x/x22.js:127";
const x22_128 = "query-shard:z0/x/x22.js:128";
const x22_129 = "filter-lane:z0/x/x22.js:129";
const x22_130 = "region-pin:z0/x/x22.js:130";
const x22_131 = "sort-track:z0/x/x22.js:131";
const x22_132 = "page-cursor:z0/x/x22.js:132";
const x22_133 = "archive-bit:z0/x/x22.js:133";
const x22_134 = "grid-slot:z0/x/x22.js:134";
const x22_135 = "facet-mark:z0/x/x22.js:135";
const x22_136 = "query-shard:z0/x/x22.js:136";
const x22_137 = "filter-lane:z0/x/x22.js:137";
const x22_138 = "region-pin:z0/x/x22.js:138";
const x22_139 = "sort-track:z0/x/x22.js:139";
const x22_140 = "page-cursor:z0/x/x22.js:140";
const x22_141 = "archive-bit:z0/x/x22.js:141";
const x22_142 = "grid-slot:z0/x/x22.js:142";
const x22_143 = "facet-mark:z0/x/x22.js:143";
const x22_144 = "query-shard:z0/x/x22.js:144";
const x22_145 = "filter-lane:z0/x/x22.js:145";
const x22_146 = "region-pin:z0/x/x22.js:146";
const x22_147 = "sort-track:z0/x/x22.js:147";
