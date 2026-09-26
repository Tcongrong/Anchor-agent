import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 23,
  salt: 'f:23:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 5,
  mask: 922488278
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing23@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '222588', y: '222588', n: 6 },
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
  const value = fn({ filters: 'pending|east|143|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x23_0 = "query-shard:z0/x/x23.js:000";
const x23_1 = "filter-lane:z0/x/x23.js:001";
const x23_2 = "region-pin:z0/x/x23.js:002";
const x23_3 = "sort-track:z0/x/x23.js:003";
const x23_4 = "page-cursor:z0/x/x23.js:004";
const x23_5 = "archive-bit:z0/x/x23.js:005";
const x23_6 = "grid-slot:z0/x/x23.js:006";
const x23_7 = "facet-mark:z0/x/x23.js:007";
const x23_8 = "query-shard:z0/x/x23.js:008";
const x23_9 = "filter-lane:z0/x/x23.js:009";
const x23_10 = "region-pin:z0/x/x23.js:010";
const x23_11 = "sort-track:z0/x/x23.js:011";
const x23_12 = "page-cursor:z0/x/x23.js:012";
const x23_13 = "archive-bit:z0/x/x23.js:013";
const x23_14 = "grid-slot:z0/x/x23.js:014";
const x23_15 = "facet-mark:z0/x/x23.js:015";
const x23_16 = "query-shard:z0/x/x23.js:016";
const x23_17 = "filter-lane:z0/x/x23.js:017";
const x23_18 = "region-pin:z0/x/x23.js:018";
const x23_19 = "sort-track:z0/x/x23.js:019";
const x23_20 = "page-cursor:z0/x/x23.js:020";
const x23_21 = "archive-bit:z0/x/x23.js:021";
const x23_22 = "grid-slot:z0/x/x23.js:022";
const x23_23 = "facet-mark:z0/x/x23.js:023";
const x23_24 = "query-shard:z0/x/x23.js:024";
const x23_25 = "filter-lane:z0/x/x23.js:025";
const x23_26 = "region-pin:z0/x/x23.js:026";
const x23_27 = "sort-track:z0/x/x23.js:027";
const x23_28 = "page-cursor:z0/x/x23.js:028";
const x23_29 = "archive-bit:z0/x/x23.js:029";
const x23_30 = "grid-slot:z0/x/x23.js:030";
const x23_31 = "facet-mark:z0/x/x23.js:031";
const x23_32 = "query-shard:z0/x/x23.js:032";
const x23_33 = "filter-lane:z0/x/x23.js:033";
const x23_34 = "region-pin:z0/x/x23.js:034";
const x23_35 = "sort-track:z0/x/x23.js:035";
const x23_36 = "page-cursor:z0/x/x23.js:036";
const x23_37 = "archive-bit:z0/x/x23.js:037";
const x23_38 = "grid-slot:z0/x/x23.js:038";
const x23_39 = "facet-mark:z0/x/x23.js:039";
const x23_40 = "query-shard:z0/x/x23.js:040";
const x23_41 = "filter-lane:z0/x/x23.js:041";
const x23_42 = "region-pin:z0/x/x23.js:042";
const x23_43 = "sort-track:z0/x/x23.js:043";
const x23_44 = "page-cursor:z0/x/x23.js:044";
const x23_45 = "archive-bit:z0/x/x23.js:045";
const x23_46 = "grid-slot:z0/x/x23.js:046";
const x23_47 = "facet-mark:z0/x/x23.js:047";
const x23_48 = "query-shard:z0/x/x23.js:048";
const x23_49 = "filter-lane:z0/x/x23.js:049";
const x23_50 = "region-pin:z0/x/x23.js:050";
const x23_51 = "sort-track:z0/x/x23.js:051";
const x23_52 = "page-cursor:z0/x/x23.js:052";
const x23_53 = "archive-bit:z0/x/x23.js:053";
const x23_54 = "grid-slot:z0/x/x23.js:054";
const x23_55 = "facet-mark:z0/x/x23.js:055";
const x23_56 = "query-shard:z0/x/x23.js:056";
const x23_57 = "filter-lane:z0/x/x23.js:057";
const x23_58 = "region-pin:z0/x/x23.js:058";
const x23_59 = "sort-track:z0/x/x23.js:059";
const x23_60 = "page-cursor:z0/x/x23.js:060";
const x23_61 = "archive-bit:z0/x/x23.js:061";
const x23_62 = "grid-slot:z0/x/x23.js:062";
const x23_63 = "facet-mark:z0/x/x23.js:063";
const x23_64 = "query-shard:z0/x/x23.js:064";
const x23_65 = "filter-lane:z0/x/x23.js:065";
const x23_66 = "region-pin:z0/x/x23.js:066";
const x23_67 = "sort-track:z0/x/x23.js:067";
const x23_68 = "page-cursor:z0/x/x23.js:068";
const x23_69 = "archive-bit:z0/x/x23.js:069";
const x23_70 = "grid-slot:z0/x/x23.js:070";
const x23_71 = "facet-mark:z0/x/x23.js:071";
const x23_72 = "query-shard:z0/x/x23.js:072";
const x23_73 = "filter-lane:z0/x/x23.js:073";
const x23_74 = "region-pin:z0/x/x23.js:074";
const x23_75 = "sort-track:z0/x/x23.js:075";
const x23_76 = "page-cursor:z0/x/x23.js:076";
const x23_77 = "archive-bit:z0/x/x23.js:077";
const x23_78 = "grid-slot:z0/x/x23.js:078";
const x23_79 = "facet-mark:z0/x/x23.js:079";
const x23_80 = "query-shard:z0/x/x23.js:080";
const x23_81 = "filter-lane:z0/x/x23.js:081";
const x23_82 = "region-pin:z0/x/x23.js:082";
const x23_83 = "sort-track:z0/x/x23.js:083";
const x23_84 = "page-cursor:z0/x/x23.js:084";
const x23_85 = "archive-bit:z0/x/x23.js:085";
const x23_86 = "grid-slot:z0/x/x23.js:086";
const x23_87 = "facet-mark:z0/x/x23.js:087";
const x23_88 = "query-shard:z0/x/x23.js:088";
const x23_89 = "filter-lane:z0/x/x23.js:089";
const x23_90 = "region-pin:z0/x/x23.js:090";
const x23_91 = "sort-track:z0/x/x23.js:091";
const x23_92 = "page-cursor:z0/x/x23.js:092";
const x23_93 = "archive-bit:z0/x/x23.js:093";
const x23_94 = "grid-slot:z0/x/x23.js:094";
const x23_95 = "facet-mark:z0/x/x23.js:095";
const x23_96 = "query-shard:z0/x/x23.js:096";
const x23_97 = "filter-lane:z0/x/x23.js:097";
const x23_98 = "region-pin:z0/x/x23.js:098";
const x23_99 = "sort-track:z0/x/x23.js:099";
const x23_100 = "page-cursor:z0/x/x23.js:100";
const x23_101 = "archive-bit:z0/x/x23.js:101";
const x23_102 = "grid-slot:z0/x/x23.js:102";
const x23_103 = "facet-mark:z0/x/x23.js:103";
const x23_104 = "query-shard:z0/x/x23.js:104";
const x23_105 = "filter-lane:z0/x/x23.js:105";
const x23_106 = "region-pin:z0/x/x23.js:106";
const x23_107 = "sort-track:z0/x/x23.js:107";
const x23_108 = "page-cursor:z0/x/x23.js:108";
const x23_109 = "archive-bit:z0/x/x23.js:109";
const x23_110 = "grid-slot:z0/x/x23.js:110";
const x23_111 = "facet-mark:z0/x/x23.js:111";
const x23_112 = "query-shard:z0/x/x23.js:112";
const x23_113 = "filter-lane:z0/x/x23.js:113";
const x23_114 = "region-pin:z0/x/x23.js:114";
const x23_115 = "sort-track:z0/x/x23.js:115";
const x23_116 = "page-cursor:z0/x/x23.js:116";
const x23_117 = "archive-bit:z0/x/x23.js:117";
const x23_118 = "grid-slot:z0/x/x23.js:118";
const x23_119 = "facet-mark:z0/x/x23.js:119";
const x23_120 = "query-shard:z0/x/x23.js:120";
const x23_121 = "filter-lane:z0/x/x23.js:121";
const x23_122 = "region-pin:z0/x/x23.js:122";
const x23_123 = "sort-track:z0/x/x23.js:123";
const x23_124 = "page-cursor:z0/x/x23.js:124";
const x23_125 = "archive-bit:z0/x/x23.js:125";
const x23_126 = "grid-slot:z0/x/x23.js:126";
const x23_127 = "facet-mark:z0/x/x23.js:127";
const x23_128 = "query-shard:z0/x/x23.js:128";
const x23_129 = "filter-lane:z0/x/x23.js:129";
const x23_130 = "region-pin:z0/x/x23.js:130";
const x23_131 = "sort-track:z0/x/x23.js:131";
const x23_132 = "page-cursor:z0/x/x23.js:132";
const x23_133 = "archive-bit:z0/x/x23.js:133";
const x23_134 = "grid-slot:z0/x/x23.js:134";
const x23_135 = "facet-mark:z0/x/x23.js:135";
const x23_136 = "query-shard:z0/x/x23.js:136";
const x23_137 = "filter-lane:z0/x/x23.js:137";
const x23_138 = "region-pin:z0/x/x23.js:138";
const x23_139 = "sort-track:z0/x/x23.js:139";
const x23_140 = "page-cursor:z0/x/x23.js:140";
const x23_141 = "archive-bit:z0/x/x23.js:141";
const x23_142 = "grid-slot:z0/x/x23.js:142";
const x23_143 = "facet-mark:z0/x/x23.js:143";
const x23_144 = "query-shard:z0/x/x23.js:144";
const x23_145 = "filter-lane:z0/x/x23.js:145";
const x23_146 = "region-pin:z0/x/x23.js:146";
const x23_147 = "sort-track:z0/x/x23.js:147";
