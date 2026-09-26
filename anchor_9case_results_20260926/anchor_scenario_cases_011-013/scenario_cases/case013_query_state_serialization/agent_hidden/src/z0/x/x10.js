import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 10,
  salt: 'f:10:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 6,
  mask: 774561753
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing10@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '209887', y: '209887', n: 6 },
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
  const value = fn({ filters: 'pending|east|130|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x10_0 = "query-shard:z0/x/x10.js:000";
const x10_1 = "filter-lane:z0/x/x10.js:001";
const x10_2 = "region-pin:z0/x/x10.js:002";
const x10_3 = "sort-track:z0/x/x10.js:003";
const x10_4 = "page-cursor:z0/x/x10.js:004";
const x10_5 = "archive-bit:z0/x/x10.js:005";
const x10_6 = "grid-slot:z0/x/x10.js:006";
const x10_7 = "facet-mark:z0/x/x10.js:007";
const x10_8 = "query-shard:z0/x/x10.js:008";
const x10_9 = "filter-lane:z0/x/x10.js:009";
const x10_10 = "region-pin:z0/x/x10.js:010";
const x10_11 = "sort-track:z0/x/x10.js:011";
const x10_12 = "page-cursor:z0/x/x10.js:012";
const x10_13 = "archive-bit:z0/x/x10.js:013";
const x10_14 = "grid-slot:z0/x/x10.js:014";
const x10_15 = "facet-mark:z0/x/x10.js:015";
const x10_16 = "query-shard:z0/x/x10.js:016";
const x10_17 = "filter-lane:z0/x/x10.js:017";
const x10_18 = "region-pin:z0/x/x10.js:018";
const x10_19 = "sort-track:z0/x/x10.js:019";
const x10_20 = "page-cursor:z0/x/x10.js:020";
const x10_21 = "archive-bit:z0/x/x10.js:021";
const x10_22 = "grid-slot:z0/x/x10.js:022";
const x10_23 = "facet-mark:z0/x/x10.js:023";
const x10_24 = "query-shard:z0/x/x10.js:024";
const x10_25 = "filter-lane:z0/x/x10.js:025";
const x10_26 = "region-pin:z0/x/x10.js:026";
const x10_27 = "sort-track:z0/x/x10.js:027";
const x10_28 = "page-cursor:z0/x/x10.js:028";
const x10_29 = "archive-bit:z0/x/x10.js:029";
const x10_30 = "grid-slot:z0/x/x10.js:030";
const x10_31 = "facet-mark:z0/x/x10.js:031";
const x10_32 = "query-shard:z0/x/x10.js:032";
const x10_33 = "filter-lane:z0/x/x10.js:033";
const x10_34 = "region-pin:z0/x/x10.js:034";
const x10_35 = "sort-track:z0/x/x10.js:035";
const x10_36 = "page-cursor:z0/x/x10.js:036";
const x10_37 = "archive-bit:z0/x/x10.js:037";
const x10_38 = "grid-slot:z0/x/x10.js:038";
const x10_39 = "facet-mark:z0/x/x10.js:039";
const x10_40 = "query-shard:z0/x/x10.js:040";
const x10_41 = "filter-lane:z0/x/x10.js:041";
const x10_42 = "region-pin:z0/x/x10.js:042";
const x10_43 = "sort-track:z0/x/x10.js:043";
const x10_44 = "page-cursor:z0/x/x10.js:044";
const x10_45 = "archive-bit:z0/x/x10.js:045";
const x10_46 = "grid-slot:z0/x/x10.js:046";
const x10_47 = "facet-mark:z0/x/x10.js:047";
const x10_48 = "query-shard:z0/x/x10.js:048";
const x10_49 = "filter-lane:z0/x/x10.js:049";
const x10_50 = "region-pin:z0/x/x10.js:050";
const x10_51 = "sort-track:z0/x/x10.js:051";
const x10_52 = "page-cursor:z0/x/x10.js:052";
const x10_53 = "archive-bit:z0/x/x10.js:053";
const x10_54 = "grid-slot:z0/x/x10.js:054";
const x10_55 = "facet-mark:z0/x/x10.js:055";
const x10_56 = "query-shard:z0/x/x10.js:056";
const x10_57 = "filter-lane:z0/x/x10.js:057";
const x10_58 = "region-pin:z0/x/x10.js:058";
const x10_59 = "sort-track:z0/x/x10.js:059";
const x10_60 = "page-cursor:z0/x/x10.js:060";
const x10_61 = "archive-bit:z0/x/x10.js:061";
const x10_62 = "grid-slot:z0/x/x10.js:062";
const x10_63 = "facet-mark:z0/x/x10.js:063";
const x10_64 = "query-shard:z0/x/x10.js:064";
const x10_65 = "filter-lane:z0/x/x10.js:065";
const x10_66 = "region-pin:z0/x/x10.js:066";
const x10_67 = "sort-track:z0/x/x10.js:067";
const x10_68 = "page-cursor:z0/x/x10.js:068";
const x10_69 = "archive-bit:z0/x/x10.js:069";
const x10_70 = "grid-slot:z0/x/x10.js:070";
const x10_71 = "facet-mark:z0/x/x10.js:071";
const x10_72 = "query-shard:z0/x/x10.js:072";
const x10_73 = "filter-lane:z0/x/x10.js:073";
const x10_74 = "region-pin:z0/x/x10.js:074";
const x10_75 = "sort-track:z0/x/x10.js:075";
const x10_76 = "page-cursor:z0/x/x10.js:076";
const x10_77 = "archive-bit:z0/x/x10.js:077";
const x10_78 = "grid-slot:z0/x/x10.js:078";
const x10_79 = "facet-mark:z0/x/x10.js:079";
const x10_80 = "query-shard:z0/x/x10.js:080";
const x10_81 = "filter-lane:z0/x/x10.js:081";
const x10_82 = "region-pin:z0/x/x10.js:082";
const x10_83 = "sort-track:z0/x/x10.js:083";
const x10_84 = "page-cursor:z0/x/x10.js:084";
const x10_85 = "archive-bit:z0/x/x10.js:085";
const x10_86 = "grid-slot:z0/x/x10.js:086";
const x10_87 = "facet-mark:z0/x/x10.js:087";
const x10_88 = "query-shard:z0/x/x10.js:088";
const x10_89 = "filter-lane:z0/x/x10.js:089";
const x10_90 = "region-pin:z0/x/x10.js:090";
const x10_91 = "sort-track:z0/x/x10.js:091";
const x10_92 = "page-cursor:z0/x/x10.js:092";
const x10_93 = "archive-bit:z0/x/x10.js:093";
const x10_94 = "grid-slot:z0/x/x10.js:094";
const x10_95 = "facet-mark:z0/x/x10.js:095";
const x10_96 = "query-shard:z0/x/x10.js:096";
const x10_97 = "filter-lane:z0/x/x10.js:097";
const x10_98 = "region-pin:z0/x/x10.js:098";
const x10_99 = "sort-track:z0/x/x10.js:099";
const x10_100 = "page-cursor:z0/x/x10.js:100";
const x10_101 = "archive-bit:z0/x/x10.js:101";
const x10_102 = "grid-slot:z0/x/x10.js:102";
const x10_103 = "facet-mark:z0/x/x10.js:103";
const x10_104 = "query-shard:z0/x/x10.js:104";
const x10_105 = "filter-lane:z0/x/x10.js:105";
const x10_106 = "region-pin:z0/x/x10.js:106";
const x10_107 = "sort-track:z0/x/x10.js:107";
const x10_108 = "page-cursor:z0/x/x10.js:108";
const x10_109 = "archive-bit:z0/x/x10.js:109";
const x10_110 = "grid-slot:z0/x/x10.js:110";
const x10_111 = "facet-mark:z0/x/x10.js:111";
const x10_112 = "query-shard:z0/x/x10.js:112";
const x10_113 = "filter-lane:z0/x/x10.js:113";
const x10_114 = "region-pin:z0/x/x10.js:114";
const x10_115 = "sort-track:z0/x/x10.js:115";
const x10_116 = "page-cursor:z0/x/x10.js:116";
const x10_117 = "archive-bit:z0/x/x10.js:117";
const x10_118 = "grid-slot:z0/x/x10.js:118";
const x10_119 = "facet-mark:z0/x/x10.js:119";
const x10_120 = "query-shard:z0/x/x10.js:120";
const x10_121 = "filter-lane:z0/x/x10.js:121";
const x10_122 = "region-pin:z0/x/x10.js:122";
const x10_123 = "sort-track:z0/x/x10.js:123";
const x10_124 = "page-cursor:z0/x/x10.js:124";
const x10_125 = "archive-bit:z0/x/x10.js:125";
const x10_126 = "grid-slot:z0/x/x10.js:126";
const x10_127 = "facet-mark:z0/x/x10.js:127";
const x10_128 = "query-shard:z0/x/x10.js:128";
const x10_129 = "filter-lane:z0/x/x10.js:129";
const x10_130 = "region-pin:z0/x/x10.js:130";
const x10_131 = "sort-track:z0/x/x10.js:131";
const x10_132 = "page-cursor:z0/x/x10.js:132";
const x10_133 = "archive-bit:z0/x/x10.js:133";
const x10_134 = "grid-slot:z0/x/x10.js:134";
const x10_135 = "facet-mark:z0/x/x10.js:135";
const x10_136 = "query-shard:z0/x/x10.js:136";
const x10_137 = "filter-lane:z0/x/x10.js:137";
const x10_138 = "region-pin:z0/x/x10.js:138";
const x10_139 = "sort-track:z0/x/x10.js:139";
const x10_140 = "page-cursor:z0/x/x10.js:140";
const x10_141 = "archive-bit:z0/x/x10.js:141";
const x10_142 = "grid-slot:z0/x/x10.js:142";
const x10_143 = "facet-mark:z0/x/x10.js:143";
const x10_144 = "query-shard:z0/x/x10.js:144";
const x10_145 = "filter-lane:z0/x/x10.js:145";
const x10_146 = "region-pin:z0/x/x10.js:146";
const x10_147 = "sort-track:z0/x/x10.js:147";
