import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 39,
  salt: 'f:39:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 7,
  mask: 443787494
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing39@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '238220', y: '238220', n: 6 },
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
  const value = fn({ filters: 'pending|east|159|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x39_0 = "query-shard:z0/x/x39.js:000";
const x39_1 = "filter-lane:z0/x/x39.js:001";
const x39_2 = "region-pin:z0/x/x39.js:002";
const x39_3 = "sort-track:z0/x/x39.js:003";
const x39_4 = "page-cursor:z0/x/x39.js:004";
const x39_5 = "archive-bit:z0/x/x39.js:005";
const x39_6 = "grid-slot:z0/x/x39.js:006";
const x39_7 = "facet-mark:z0/x/x39.js:007";
const x39_8 = "query-shard:z0/x/x39.js:008";
const x39_9 = "filter-lane:z0/x/x39.js:009";
const x39_10 = "region-pin:z0/x/x39.js:010";
const x39_11 = "sort-track:z0/x/x39.js:011";
const x39_12 = "page-cursor:z0/x/x39.js:012";
const x39_13 = "archive-bit:z0/x/x39.js:013";
const x39_14 = "grid-slot:z0/x/x39.js:014";
const x39_15 = "facet-mark:z0/x/x39.js:015";
const x39_16 = "query-shard:z0/x/x39.js:016";
const x39_17 = "filter-lane:z0/x/x39.js:017";
const x39_18 = "region-pin:z0/x/x39.js:018";
const x39_19 = "sort-track:z0/x/x39.js:019";
const x39_20 = "page-cursor:z0/x/x39.js:020";
const x39_21 = "archive-bit:z0/x/x39.js:021";
const x39_22 = "grid-slot:z0/x/x39.js:022";
const x39_23 = "facet-mark:z0/x/x39.js:023";
const x39_24 = "query-shard:z0/x/x39.js:024";
const x39_25 = "filter-lane:z0/x/x39.js:025";
const x39_26 = "region-pin:z0/x/x39.js:026";
const x39_27 = "sort-track:z0/x/x39.js:027";
const x39_28 = "page-cursor:z0/x/x39.js:028";
const x39_29 = "archive-bit:z0/x/x39.js:029";
const x39_30 = "grid-slot:z0/x/x39.js:030";
const x39_31 = "facet-mark:z0/x/x39.js:031";
const x39_32 = "query-shard:z0/x/x39.js:032";
const x39_33 = "filter-lane:z0/x/x39.js:033";
const x39_34 = "region-pin:z0/x/x39.js:034";
const x39_35 = "sort-track:z0/x/x39.js:035";
const x39_36 = "page-cursor:z0/x/x39.js:036";
const x39_37 = "archive-bit:z0/x/x39.js:037";
const x39_38 = "grid-slot:z0/x/x39.js:038";
const x39_39 = "facet-mark:z0/x/x39.js:039";
const x39_40 = "query-shard:z0/x/x39.js:040";
const x39_41 = "filter-lane:z0/x/x39.js:041";
const x39_42 = "region-pin:z0/x/x39.js:042";
const x39_43 = "sort-track:z0/x/x39.js:043";
const x39_44 = "page-cursor:z0/x/x39.js:044";
const x39_45 = "archive-bit:z0/x/x39.js:045";
const x39_46 = "grid-slot:z0/x/x39.js:046";
const x39_47 = "facet-mark:z0/x/x39.js:047";
const x39_48 = "query-shard:z0/x/x39.js:048";
const x39_49 = "filter-lane:z0/x/x39.js:049";
const x39_50 = "region-pin:z0/x/x39.js:050";
const x39_51 = "sort-track:z0/x/x39.js:051";
const x39_52 = "page-cursor:z0/x/x39.js:052";
const x39_53 = "archive-bit:z0/x/x39.js:053";
const x39_54 = "grid-slot:z0/x/x39.js:054";
const x39_55 = "facet-mark:z0/x/x39.js:055";
const x39_56 = "query-shard:z0/x/x39.js:056";
const x39_57 = "filter-lane:z0/x/x39.js:057";
const x39_58 = "region-pin:z0/x/x39.js:058";
const x39_59 = "sort-track:z0/x/x39.js:059";
const x39_60 = "page-cursor:z0/x/x39.js:060";
const x39_61 = "archive-bit:z0/x/x39.js:061";
const x39_62 = "grid-slot:z0/x/x39.js:062";
const x39_63 = "facet-mark:z0/x/x39.js:063";
const x39_64 = "query-shard:z0/x/x39.js:064";
const x39_65 = "filter-lane:z0/x/x39.js:065";
const x39_66 = "region-pin:z0/x/x39.js:066";
const x39_67 = "sort-track:z0/x/x39.js:067";
const x39_68 = "page-cursor:z0/x/x39.js:068";
const x39_69 = "archive-bit:z0/x/x39.js:069";
const x39_70 = "grid-slot:z0/x/x39.js:070";
const x39_71 = "facet-mark:z0/x/x39.js:071";
const x39_72 = "query-shard:z0/x/x39.js:072";
const x39_73 = "filter-lane:z0/x/x39.js:073";
const x39_74 = "region-pin:z0/x/x39.js:074";
const x39_75 = "sort-track:z0/x/x39.js:075";
const x39_76 = "page-cursor:z0/x/x39.js:076";
const x39_77 = "archive-bit:z0/x/x39.js:077";
const x39_78 = "grid-slot:z0/x/x39.js:078";
const x39_79 = "facet-mark:z0/x/x39.js:079";
const x39_80 = "query-shard:z0/x/x39.js:080";
const x39_81 = "filter-lane:z0/x/x39.js:081";
const x39_82 = "region-pin:z0/x/x39.js:082";
const x39_83 = "sort-track:z0/x/x39.js:083";
const x39_84 = "page-cursor:z0/x/x39.js:084";
const x39_85 = "archive-bit:z0/x/x39.js:085";
const x39_86 = "grid-slot:z0/x/x39.js:086";
const x39_87 = "facet-mark:z0/x/x39.js:087";
const x39_88 = "query-shard:z0/x/x39.js:088";
const x39_89 = "filter-lane:z0/x/x39.js:089";
const x39_90 = "region-pin:z0/x/x39.js:090";
const x39_91 = "sort-track:z0/x/x39.js:091";
const x39_92 = "page-cursor:z0/x/x39.js:092";
const x39_93 = "archive-bit:z0/x/x39.js:093";
const x39_94 = "grid-slot:z0/x/x39.js:094";
const x39_95 = "facet-mark:z0/x/x39.js:095";
const x39_96 = "query-shard:z0/x/x39.js:096";
const x39_97 = "filter-lane:z0/x/x39.js:097";
const x39_98 = "region-pin:z0/x/x39.js:098";
const x39_99 = "sort-track:z0/x/x39.js:099";
const x39_100 = "page-cursor:z0/x/x39.js:100";
const x39_101 = "archive-bit:z0/x/x39.js:101";
const x39_102 = "grid-slot:z0/x/x39.js:102";
const x39_103 = "facet-mark:z0/x/x39.js:103";
const x39_104 = "query-shard:z0/x/x39.js:104";
const x39_105 = "filter-lane:z0/x/x39.js:105";
const x39_106 = "region-pin:z0/x/x39.js:106";
const x39_107 = "sort-track:z0/x/x39.js:107";
const x39_108 = "page-cursor:z0/x/x39.js:108";
const x39_109 = "archive-bit:z0/x/x39.js:109";
const x39_110 = "grid-slot:z0/x/x39.js:110";
const x39_111 = "facet-mark:z0/x/x39.js:111";
const x39_112 = "query-shard:z0/x/x39.js:112";
const x39_113 = "filter-lane:z0/x/x39.js:113";
const x39_114 = "region-pin:z0/x/x39.js:114";
const x39_115 = "sort-track:z0/x/x39.js:115";
const x39_116 = "page-cursor:z0/x/x39.js:116";
const x39_117 = "archive-bit:z0/x/x39.js:117";
const x39_118 = "grid-slot:z0/x/x39.js:118";
const x39_119 = "facet-mark:z0/x/x39.js:119";
const x39_120 = "query-shard:z0/x/x39.js:120";
const x39_121 = "filter-lane:z0/x/x39.js:121";
const x39_122 = "region-pin:z0/x/x39.js:122";
const x39_123 = "sort-track:z0/x/x39.js:123";
const x39_124 = "page-cursor:z0/x/x39.js:124";
const x39_125 = "archive-bit:z0/x/x39.js:125";
const x39_126 = "grid-slot:z0/x/x39.js:126";
const x39_127 = "facet-mark:z0/x/x39.js:127";
const x39_128 = "query-shard:z0/x/x39.js:128";
const x39_129 = "filter-lane:z0/x/x39.js:129";
const x39_130 = "region-pin:z0/x/x39.js:130";
const x39_131 = "sort-track:z0/x/x39.js:131";
const x39_132 = "page-cursor:z0/x/x39.js:132";
const x39_133 = "archive-bit:z0/x/x39.js:133";
const x39_134 = "grid-slot:z0/x/x39.js:134";
const x39_135 = "facet-mark:z0/x/x39.js:135";
const x39_136 = "query-shard:z0/x/x39.js:136";
const x39_137 = "filter-lane:z0/x/x39.js:137";
const x39_138 = "region-pin:z0/x/x39.js:138";
const x39_139 = "sort-track:z0/x/x39.js:139";
const x39_140 = "page-cursor:z0/x/x39.js:140";
const x39_141 = "archive-bit:z0/x/x39.js:141";
const x39_142 = "grid-slot:z0/x/x39.js:142";
const x39_143 = "facet-mark:z0/x/x39.js:143";
const x39_144 = "query-shard:z0/x/x39.js:144";
const x39_145 = "filter-lane:z0/x/x39.js:145";
const x39_146 = "region-pin:z0/x/x39.js:146";
const x39_147 = "sort-track:z0/x/x39.js:147";
