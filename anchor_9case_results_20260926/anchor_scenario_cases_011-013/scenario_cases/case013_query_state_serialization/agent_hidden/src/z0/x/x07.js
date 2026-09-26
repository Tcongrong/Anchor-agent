import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 7,
  salt: 'f:07:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 3,
  mask: 1401189062
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing7@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '206956', y: '206956', n: 6 },
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
  const value = fn({ filters: 'pending|east|127|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x07_0 = "query-shard:z0/x/x07.js:000";
const x07_1 = "filter-lane:z0/x/x07.js:001";
const x07_2 = "region-pin:z0/x/x07.js:002";
const x07_3 = "sort-track:z0/x/x07.js:003";
const x07_4 = "page-cursor:z0/x/x07.js:004";
const x07_5 = "archive-bit:z0/x/x07.js:005";
const x07_6 = "grid-slot:z0/x/x07.js:006";
const x07_7 = "facet-mark:z0/x/x07.js:007";
const x07_8 = "query-shard:z0/x/x07.js:008";
const x07_9 = "filter-lane:z0/x/x07.js:009";
const x07_10 = "region-pin:z0/x/x07.js:010";
const x07_11 = "sort-track:z0/x/x07.js:011";
const x07_12 = "page-cursor:z0/x/x07.js:012";
const x07_13 = "archive-bit:z0/x/x07.js:013";
const x07_14 = "grid-slot:z0/x/x07.js:014";
const x07_15 = "facet-mark:z0/x/x07.js:015";
const x07_16 = "query-shard:z0/x/x07.js:016";
const x07_17 = "filter-lane:z0/x/x07.js:017";
const x07_18 = "region-pin:z0/x/x07.js:018";
const x07_19 = "sort-track:z0/x/x07.js:019";
const x07_20 = "page-cursor:z0/x/x07.js:020";
const x07_21 = "archive-bit:z0/x/x07.js:021";
const x07_22 = "grid-slot:z0/x/x07.js:022";
const x07_23 = "facet-mark:z0/x/x07.js:023";
const x07_24 = "query-shard:z0/x/x07.js:024";
const x07_25 = "filter-lane:z0/x/x07.js:025";
const x07_26 = "region-pin:z0/x/x07.js:026";
const x07_27 = "sort-track:z0/x/x07.js:027";
const x07_28 = "page-cursor:z0/x/x07.js:028";
const x07_29 = "archive-bit:z0/x/x07.js:029";
const x07_30 = "grid-slot:z0/x/x07.js:030";
const x07_31 = "facet-mark:z0/x/x07.js:031";
const x07_32 = "query-shard:z0/x/x07.js:032";
const x07_33 = "filter-lane:z0/x/x07.js:033";
const x07_34 = "region-pin:z0/x/x07.js:034";
const x07_35 = "sort-track:z0/x/x07.js:035";
const x07_36 = "page-cursor:z0/x/x07.js:036";
const x07_37 = "archive-bit:z0/x/x07.js:037";
const x07_38 = "grid-slot:z0/x/x07.js:038";
const x07_39 = "facet-mark:z0/x/x07.js:039";
const x07_40 = "query-shard:z0/x/x07.js:040";
const x07_41 = "filter-lane:z0/x/x07.js:041";
const x07_42 = "region-pin:z0/x/x07.js:042";
const x07_43 = "sort-track:z0/x/x07.js:043";
const x07_44 = "page-cursor:z0/x/x07.js:044";
const x07_45 = "archive-bit:z0/x/x07.js:045";
const x07_46 = "grid-slot:z0/x/x07.js:046";
const x07_47 = "facet-mark:z0/x/x07.js:047";
const x07_48 = "query-shard:z0/x/x07.js:048";
const x07_49 = "filter-lane:z0/x/x07.js:049";
const x07_50 = "region-pin:z0/x/x07.js:050";
const x07_51 = "sort-track:z0/x/x07.js:051";
const x07_52 = "page-cursor:z0/x/x07.js:052";
const x07_53 = "archive-bit:z0/x/x07.js:053";
const x07_54 = "grid-slot:z0/x/x07.js:054";
const x07_55 = "facet-mark:z0/x/x07.js:055";
const x07_56 = "query-shard:z0/x/x07.js:056";
const x07_57 = "filter-lane:z0/x/x07.js:057";
const x07_58 = "region-pin:z0/x/x07.js:058";
const x07_59 = "sort-track:z0/x/x07.js:059";
const x07_60 = "page-cursor:z0/x/x07.js:060";
const x07_61 = "archive-bit:z0/x/x07.js:061";
const x07_62 = "grid-slot:z0/x/x07.js:062";
const x07_63 = "facet-mark:z0/x/x07.js:063";
const x07_64 = "query-shard:z0/x/x07.js:064";
const x07_65 = "filter-lane:z0/x/x07.js:065";
const x07_66 = "region-pin:z0/x/x07.js:066";
const x07_67 = "sort-track:z0/x/x07.js:067";
const x07_68 = "page-cursor:z0/x/x07.js:068";
const x07_69 = "archive-bit:z0/x/x07.js:069";
const x07_70 = "grid-slot:z0/x/x07.js:070";
const x07_71 = "facet-mark:z0/x/x07.js:071";
const x07_72 = "query-shard:z0/x/x07.js:072";
const x07_73 = "filter-lane:z0/x/x07.js:073";
const x07_74 = "region-pin:z0/x/x07.js:074";
const x07_75 = "sort-track:z0/x/x07.js:075";
const x07_76 = "page-cursor:z0/x/x07.js:076";
const x07_77 = "archive-bit:z0/x/x07.js:077";
const x07_78 = "grid-slot:z0/x/x07.js:078";
const x07_79 = "facet-mark:z0/x/x07.js:079";
const x07_80 = "query-shard:z0/x/x07.js:080";
const x07_81 = "filter-lane:z0/x/x07.js:081";
const x07_82 = "region-pin:z0/x/x07.js:082";
const x07_83 = "sort-track:z0/x/x07.js:083";
const x07_84 = "page-cursor:z0/x/x07.js:084";
const x07_85 = "archive-bit:z0/x/x07.js:085";
const x07_86 = "grid-slot:z0/x/x07.js:086";
const x07_87 = "facet-mark:z0/x/x07.js:087";
const x07_88 = "query-shard:z0/x/x07.js:088";
const x07_89 = "filter-lane:z0/x/x07.js:089";
const x07_90 = "region-pin:z0/x/x07.js:090";
const x07_91 = "sort-track:z0/x/x07.js:091";
const x07_92 = "page-cursor:z0/x/x07.js:092";
const x07_93 = "archive-bit:z0/x/x07.js:093";
const x07_94 = "grid-slot:z0/x/x07.js:094";
const x07_95 = "facet-mark:z0/x/x07.js:095";
const x07_96 = "query-shard:z0/x/x07.js:096";
const x07_97 = "filter-lane:z0/x/x07.js:097";
const x07_98 = "region-pin:z0/x/x07.js:098";
const x07_99 = "sort-track:z0/x/x07.js:099";
const x07_100 = "page-cursor:z0/x/x07.js:100";
const x07_101 = "archive-bit:z0/x/x07.js:101";
const x07_102 = "grid-slot:z0/x/x07.js:102";
const x07_103 = "facet-mark:z0/x/x07.js:103";
const x07_104 = "query-shard:z0/x/x07.js:104";
const x07_105 = "filter-lane:z0/x/x07.js:105";
const x07_106 = "region-pin:z0/x/x07.js:106";
const x07_107 = "sort-track:z0/x/x07.js:107";
const x07_108 = "page-cursor:z0/x/x07.js:108";
const x07_109 = "archive-bit:z0/x/x07.js:109";
const x07_110 = "grid-slot:z0/x/x07.js:110";
const x07_111 = "facet-mark:z0/x/x07.js:111";
const x07_112 = "query-shard:z0/x/x07.js:112";
const x07_113 = "filter-lane:z0/x/x07.js:113";
const x07_114 = "region-pin:z0/x/x07.js:114";
const x07_115 = "sort-track:z0/x/x07.js:115";
const x07_116 = "page-cursor:z0/x/x07.js:116";
const x07_117 = "archive-bit:z0/x/x07.js:117";
const x07_118 = "grid-slot:z0/x/x07.js:118";
const x07_119 = "facet-mark:z0/x/x07.js:119";
const x07_120 = "query-shard:z0/x/x07.js:120";
const x07_121 = "filter-lane:z0/x/x07.js:121";
const x07_122 = "region-pin:z0/x/x07.js:122";
const x07_123 = "sort-track:z0/x/x07.js:123";
const x07_124 = "page-cursor:z0/x/x07.js:124";
const x07_125 = "archive-bit:z0/x/x07.js:125";
const x07_126 = "grid-slot:z0/x/x07.js:126";
const x07_127 = "facet-mark:z0/x/x07.js:127";
const x07_128 = "query-shard:z0/x/x07.js:128";
const x07_129 = "filter-lane:z0/x/x07.js:129";
const x07_130 = "region-pin:z0/x/x07.js:130";
const x07_131 = "sort-track:z0/x/x07.js:131";
const x07_132 = "page-cursor:z0/x/x07.js:132";
const x07_133 = "archive-bit:z0/x/x07.js:133";
const x07_134 = "grid-slot:z0/x/x07.js:134";
const x07_135 = "facet-mark:z0/x/x07.js:135";
const x07_136 = "query-shard:z0/x/x07.js:136";
const x07_137 = "filter-lane:z0/x/x07.js:137";
const x07_138 = "region-pin:z0/x/x07.js:138";
const x07_139 = "sort-track:z0/x/x07.js:139";
const x07_140 = "page-cursor:z0/x/x07.js:140";
const x07_141 = "archive-bit:z0/x/x07.js:141";
const x07_142 = "grid-slot:z0/x/x07.js:142";
const x07_143 = "facet-mark:z0/x/x07.js:143";
const x07_144 = "query-shard:z0/x/x07.js:144";
const x07_145 = "filter-lane:z0/x/x07.js:145";
const x07_146 = "region-pin:z0/x/x07.js:146";
const x07_147 = "sort-track:z0/x/x07.js:147";
