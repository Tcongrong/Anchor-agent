import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 35,
  salt: 'f:35:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 3,
  mask: 2710946338
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing35@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '234312', y: '234312', n: 6 },
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
  const value = fn({ filters: 'pending|east|155|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x35_0 = "query-shard:z0/x/x35.js:000";
const x35_1 = "filter-lane:z0/x/x35.js:001";
const x35_2 = "region-pin:z0/x/x35.js:002";
const x35_3 = "sort-track:z0/x/x35.js:003";
const x35_4 = "page-cursor:z0/x/x35.js:004";
const x35_5 = "archive-bit:z0/x/x35.js:005";
const x35_6 = "grid-slot:z0/x/x35.js:006";
const x35_7 = "facet-mark:z0/x/x35.js:007";
const x35_8 = "query-shard:z0/x/x35.js:008";
const x35_9 = "filter-lane:z0/x/x35.js:009";
const x35_10 = "region-pin:z0/x/x35.js:010";
const x35_11 = "sort-track:z0/x/x35.js:011";
const x35_12 = "page-cursor:z0/x/x35.js:012";
const x35_13 = "archive-bit:z0/x/x35.js:013";
const x35_14 = "grid-slot:z0/x/x35.js:014";
const x35_15 = "facet-mark:z0/x/x35.js:015";
const x35_16 = "query-shard:z0/x/x35.js:016";
const x35_17 = "filter-lane:z0/x/x35.js:017";
const x35_18 = "region-pin:z0/x/x35.js:018";
const x35_19 = "sort-track:z0/x/x35.js:019";
const x35_20 = "page-cursor:z0/x/x35.js:020";
const x35_21 = "archive-bit:z0/x/x35.js:021";
const x35_22 = "grid-slot:z0/x/x35.js:022";
const x35_23 = "facet-mark:z0/x/x35.js:023";
const x35_24 = "query-shard:z0/x/x35.js:024";
const x35_25 = "filter-lane:z0/x/x35.js:025";
const x35_26 = "region-pin:z0/x/x35.js:026";
const x35_27 = "sort-track:z0/x/x35.js:027";
const x35_28 = "page-cursor:z0/x/x35.js:028";
const x35_29 = "archive-bit:z0/x/x35.js:029";
const x35_30 = "grid-slot:z0/x/x35.js:030";
const x35_31 = "facet-mark:z0/x/x35.js:031";
const x35_32 = "query-shard:z0/x/x35.js:032";
const x35_33 = "filter-lane:z0/x/x35.js:033";
const x35_34 = "region-pin:z0/x/x35.js:034";
const x35_35 = "sort-track:z0/x/x35.js:035";
const x35_36 = "page-cursor:z0/x/x35.js:036";
const x35_37 = "archive-bit:z0/x/x35.js:037";
const x35_38 = "grid-slot:z0/x/x35.js:038";
const x35_39 = "facet-mark:z0/x/x35.js:039";
const x35_40 = "query-shard:z0/x/x35.js:040";
const x35_41 = "filter-lane:z0/x/x35.js:041";
const x35_42 = "region-pin:z0/x/x35.js:042";
const x35_43 = "sort-track:z0/x/x35.js:043";
const x35_44 = "page-cursor:z0/x/x35.js:044";
const x35_45 = "archive-bit:z0/x/x35.js:045";
const x35_46 = "grid-slot:z0/x/x35.js:046";
const x35_47 = "facet-mark:z0/x/x35.js:047";
const x35_48 = "query-shard:z0/x/x35.js:048";
const x35_49 = "filter-lane:z0/x/x35.js:049";
const x35_50 = "region-pin:z0/x/x35.js:050";
const x35_51 = "sort-track:z0/x/x35.js:051";
const x35_52 = "page-cursor:z0/x/x35.js:052";
const x35_53 = "archive-bit:z0/x/x35.js:053";
const x35_54 = "grid-slot:z0/x/x35.js:054";
const x35_55 = "facet-mark:z0/x/x35.js:055";
const x35_56 = "query-shard:z0/x/x35.js:056";
const x35_57 = "filter-lane:z0/x/x35.js:057";
const x35_58 = "region-pin:z0/x/x35.js:058";
const x35_59 = "sort-track:z0/x/x35.js:059";
const x35_60 = "page-cursor:z0/x/x35.js:060";
const x35_61 = "archive-bit:z0/x/x35.js:061";
const x35_62 = "grid-slot:z0/x/x35.js:062";
const x35_63 = "facet-mark:z0/x/x35.js:063";
const x35_64 = "query-shard:z0/x/x35.js:064";
const x35_65 = "filter-lane:z0/x/x35.js:065";
const x35_66 = "region-pin:z0/x/x35.js:066";
const x35_67 = "sort-track:z0/x/x35.js:067";
const x35_68 = "page-cursor:z0/x/x35.js:068";
const x35_69 = "archive-bit:z0/x/x35.js:069";
const x35_70 = "grid-slot:z0/x/x35.js:070";
const x35_71 = "facet-mark:z0/x/x35.js:071";
const x35_72 = "query-shard:z0/x/x35.js:072";
const x35_73 = "filter-lane:z0/x/x35.js:073";
const x35_74 = "region-pin:z0/x/x35.js:074";
const x35_75 = "sort-track:z0/x/x35.js:075";
const x35_76 = "page-cursor:z0/x/x35.js:076";
const x35_77 = "archive-bit:z0/x/x35.js:077";
const x35_78 = "grid-slot:z0/x/x35.js:078";
const x35_79 = "facet-mark:z0/x/x35.js:079";
const x35_80 = "query-shard:z0/x/x35.js:080";
const x35_81 = "filter-lane:z0/x/x35.js:081";
const x35_82 = "region-pin:z0/x/x35.js:082";
const x35_83 = "sort-track:z0/x/x35.js:083";
const x35_84 = "page-cursor:z0/x/x35.js:084";
const x35_85 = "archive-bit:z0/x/x35.js:085";
const x35_86 = "grid-slot:z0/x/x35.js:086";
const x35_87 = "facet-mark:z0/x/x35.js:087";
const x35_88 = "query-shard:z0/x/x35.js:088";
const x35_89 = "filter-lane:z0/x/x35.js:089";
const x35_90 = "region-pin:z0/x/x35.js:090";
const x35_91 = "sort-track:z0/x/x35.js:091";
const x35_92 = "page-cursor:z0/x/x35.js:092";
const x35_93 = "archive-bit:z0/x/x35.js:093";
const x35_94 = "grid-slot:z0/x/x35.js:094";
const x35_95 = "facet-mark:z0/x/x35.js:095";
const x35_96 = "query-shard:z0/x/x35.js:096";
const x35_97 = "filter-lane:z0/x/x35.js:097";
const x35_98 = "region-pin:z0/x/x35.js:098";
const x35_99 = "sort-track:z0/x/x35.js:099";
const x35_100 = "page-cursor:z0/x/x35.js:100";
const x35_101 = "archive-bit:z0/x/x35.js:101";
const x35_102 = "grid-slot:z0/x/x35.js:102";
const x35_103 = "facet-mark:z0/x/x35.js:103";
const x35_104 = "query-shard:z0/x/x35.js:104";
const x35_105 = "filter-lane:z0/x/x35.js:105";
const x35_106 = "region-pin:z0/x/x35.js:106";
const x35_107 = "sort-track:z0/x/x35.js:107";
const x35_108 = "page-cursor:z0/x/x35.js:108";
const x35_109 = "archive-bit:z0/x/x35.js:109";
const x35_110 = "grid-slot:z0/x/x35.js:110";
const x35_111 = "facet-mark:z0/x/x35.js:111";
const x35_112 = "query-shard:z0/x/x35.js:112";
const x35_113 = "filter-lane:z0/x/x35.js:113";
const x35_114 = "region-pin:z0/x/x35.js:114";
const x35_115 = "sort-track:z0/x/x35.js:115";
const x35_116 = "page-cursor:z0/x/x35.js:116";
const x35_117 = "archive-bit:z0/x/x35.js:117";
const x35_118 = "grid-slot:z0/x/x35.js:118";
const x35_119 = "facet-mark:z0/x/x35.js:119";
const x35_120 = "query-shard:z0/x/x35.js:120";
const x35_121 = "filter-lane:z0/x/x35.js:121";
const x35_122 = "region-pin:z0/x/x35.js:122";
const x35_123 = "sort-track:z0/x/x35.js:123";
const x35_124 = "page-cursor:z0/x/x35.js:124";
const x35_125 = "archive-bit:z0/x/x35.js:125";
const x35_126 = "grid-slot:z0/x/x35.js:126";
const x35_127 = "facet-mark:z0/x/x35.js:127";
const x35_128 = "query-shard:z0/x/x35.js:128";
const x35_129 = "filter-lane:z0/x/x35.js:129";
const x35_130 = "region-pin:z0/x/x35.js:130";
const x35_131 = "sort-track:z0/x/x35.js:131";
const x35_132 = "page-cursor:z0/x/x35.js:132";
const x35_133 = "archive-bit:z0/x/x35.js:133";
const x35_134 = "grid-slot:z0/x/x35.js:134";
const x35_135 = "facet-mark:z0/x/x35.js:135";
const x35_136 = "query-shard:z0/x/x35.js:136";
const x35_137 = "filter-lane:z0/x/x35.js:137";
const x35_138 = "region-pin:z0/x/x35.js:138";
const x35_139 = "sort-track:z0/x/x35.js:139";
const x35_140 = "page-cursor:z0/x/x35.js:140";
const x35_141 = "archive-bit:z0/x/x35.js:141";
const x35_142 = "grid-slot:z0/x/x35.js:142";
const x35_143 = "facet-mark:z0/x/x35.js:143";
const x35_144 = "query-shard:z0/x/x35.js:144";
const x35_145 = "filter-lane:z0/x/x35.js:145";
const x35_146 = "region-pin:z0/x/x35.js:146";
const x35_147 = "sort-track:z0/x/x35.js:147";
