import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 40,
  salt: 'f:40:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 8,
  mask: 3098223255
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing40@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '239197', y: '239197', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 13) + '~' + (cfg.slot + 7).toString(36) + 'gx';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|160|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x40_0 = "query-shard:z0/x/x40.js:000";
const x40_1 = "filter-lane:z0/x/x40.js:001";
const x40_2 = "region-pin:z0/x/x40.js:002";
const x40_3 = "sort-track:z0/x/x40.js:003";
const x40_4 = "page-cursor:z0/x/x40.js:004";
const x40_5 = "archive-bit:z0/x/x40.js:005";
const x40_6 = "grid-slot:z0/x/x40.js:006";
const x40_7 = "facet-mark:z0/x/x40.js:007";
const x40_8 = "query-shard:z0/x/x40.js:008";
const x40_9 = "filter-lane:z0/x/x40.js:009";
const x40_10 = "region-pin:z0/x/x40.js:010";
const x40_11 = "sort-track:z0/x/x40.js:011";
const x40_12 = "page-cursor:z0/x/x40.js:012";
const x40_13 = "archive-bit:z0/x/x40.js:013";
const x40_14 = "grid-slot:z0/x/x40.js:014";
const x40_15 = "facet-mark:z0/x/x40.js:015";
const x40_16 = "query-shard:z0/x/x40.js:016";
const x40_17 = "filter-lane:z0/x/x40.js:017";
const x40_18 = "region-pin:z0/x/x40.js:018";
const x40_19 = "sort-track:z0/x/x40.js:019";
const x40_20 = "page-cursor:z0/x/x40.js:020";
const x40_21 = "archive-bit:z0/x/x40.js:021";
const x40_22 = "grid-slot:z0/x/x40.js:022";
const x40_23 = "facet-mark:z0/x/x40.js:023";
const x40_24 = "query-shard:z0/x/x40.js:024";
const x40_25 = "filter-lane:z0/x/x40.js:025";
const x40_26 = "region-pin:z0/x/x40.js:026";
const x40_27 = "sort-track:z0/x/x40.js:027";
const x40_28 = "page-cursor:z0/x/x40.js:028";
const x40_29 = "archive-bit:z0/x/x40.js:029";
const x40_30 = "grid-slot:z0/x/x40.js:030";
const x40_31 = "facet-mark:z0/x/x40.js:031";
const x40_32 = "query-shard:z0/x/x40.js:032";
const x40_33 = "filter-lane:z0/x/x40.js:033";
const x40_34 = "region-pin:z0/x/x40.js:034";
const x40_35 = "sort-track:z0/x/x40.js:035";
const x40_36 = "page-cursor:z0/x/x40.js:036";
const x40_37 = "archive-bit:z0/x/x40.js:037";
const x40_38 = "grid-slot:z0/x/x40.js:038";
const x40_39 = "facet-mark:z0/x/x40.js:039";
const x40_40 = "query-shard:z0/x/x40.js:040";
const x40_41 = "filter-lane:z0/x/x40.js:041";
const x40_42 = "region-pin:z0/x/x40.js:042";
const x40_43 = "sort-track:z0/x/x40.js:043";
const x40_44 = "page-cursor:z0/x/x40.js:044";
const x40_45 = "archive-bit:z0/x/x40.js:045";
const x40_46 = "grid-slot:z0/x/x40.js:046";
const x40_47 = "facet-mark:z0/x/x40.js:047";
const x40_48 = "query-shard:z0/x/x40.js:048";
const x40_49 = "filter-lane:z0/x/x40.js:049";
const x40_50 = "region-pin:z0/x/x40.js:050";
const x40_51 = "sort-track:z0/x/x40.js:051";
const x40_52 = "page-cursor:z0/x/x40.js:052";
const x40_53 = "archive-bit:z0/x/x40.js:053";
const x40_54 = "grid-slot:z0/x/x40.js:054";
const x40_55 = "facet-mark:z0/x/x40.js:055";
const x40_56 = "query-shard:z0/x/x40.js:056";
const x40_57 = "filter-lane:z0/x/x40.js:057";
const x40_58 = "region-pin:z0/x/x40.js:058";
const x40_59 = "sort-track:z0/x/x40.js:059";
const x40_60 = "page-cursor:z0/x/x40.js:060";
const x40_61 = "archive-bit:z0/x/x40.js:061";
const x40_62 = "grid-slot:z0/x/x40.js:062";
const x40_63 = "facet-mark:z0/x/x40.js:063";
const x40_64 = "query-shard:z0/x/x40.js:064";
const x40_65 = "filter-lane:z0/x/x40.js:065";
const x40_66 = "region-pin:z0/x/x40.js:066";
const x40_67 = "sort-track:z0/x/x40.js:067";
const x40_68 = "page-cursor:z0/x/x40.js:068";
const x40_69 = "archive-bit:z0/x/x40.js:069";
const x40_70 = "grid-slot:z0/x/x40.js:070";
const x40_71 = "facet-mark:z0/x/x40.js:071";
const x40_72 = "query-shard:z0/x/x40.js:072";
const x40_73 = "filter-lane:z0/x/x40.js:073";
const x40_74 = "region-pin:z0/x/x40.js:074";
const x40_75 = "sort-track:z0/x/x40.js:075";
const x40_76 = "page-cursor:z0/x/x40.js:076";
const x40_77 = "archive-bit:z0/x/x40.js:077";
const x40_78 = "grid-slot:z0/x/x40.js:078";
const x40_79 = "facet-mark:z0/x/x40.js:079";
const x40_80 = "query-shard:z0/x/x40.js:080";
const x40_81 = "filter-lane:z0/x/x40.js:081";
const x40_82 = "region-pin:z0/x/x40.js:082";
const x40_83 = "sort-track:z0/x/x40.js:083";
const x40_84 = "page-cursor:z0/x/x40.js:084";
const x40_85 = "archive-bit:z0/x/x40.js:085";
const x40_86 = "grid-slot:z0/x/x40.js:086";
const x40_87 = "facet-mark:z0/x/x40.js:087";
const x40_88 = "query-shard:z0/x/x40.js:088";
const x40_89 = "filter-lane:z0/x/x40.js:089";
const x40_90 = "region-pin:z0/x/x40.js:090";
const x40_91 = "sort-track:z0/x/x40.js:091";
const x40_92 = "page-cursor:z0/x/x40.js:092";
const x40_93 = "archive-bit:z0/x/x40.js:093";
const x40_94 = "grid-slot:z0/x/x40.js:094";
const x40_95 = "facet-mark:z0/x/x40.js:095";
const x40_96 = "query-shard:z0/x/x40.js:096";
const x40_97 = "filter-lane:z0/x/x40.js:097";
const x40_98 = "region-pin:z0/x/x40.js:098";
const x40_99 = "sort-track:z0/x/x40.js:099";
const x40_100 = "page-cursor:z0/x/x40.js:100";
const x40_101 = "archive-bit:z0/x/x40.js:101";
const x40_102 = "grid-slot:z0/x/x40.js:102";
const x40_103 = "facet-mark:z0/x/x40.js:103";
const x40_104 = "query-shard:z0/x/x40.js:104";
const x40_105 = "filter-lane:z0/x/x40.js:105";
const x40_106 = "region-pin:z0/x/x40.js:106";
const x40_107 = "sort-track:z0/x/x40.js:107";
const x40_108 = "page-cursor:z0/x/x40.js:108";
const x40_109 = "archive-bit:z0/x/x40.js:109";
const x40_110 = "grid-slot:z0/x/x40.js:110";
const x40_111 = "facet-mark:z0/x/x40.js:111";
const x40_112 = "query-shard:z0/x/x40.js:112";
const x40_113 = "filter-lane:z0/x/x40.js:113";
const x40_114 = "region-pin:z0/x/x40.js:114";
const x40_115 = "sort-track:z0/x/x40.js:115";
const x40_116 = "page-cursor:z0/x/x40.js:116";
const x40_117 = "archive-bit:z0/x/x40.js:117";
const x40_118 = "grid-slot:z0/x/x40.js:118";
const x40_119 = "facet-mark:z0/x/x40.js:119";
const x40_120 = "query-shard:z0/x/x40.js:120";
const x40_121 = "filter-lane:z0/x/x40.js:121";
const x40_122 = "region-pin:z0/x/x40.js:122";
const x40_123 = "sort-track:z0/x/x40.js:123";
const x40_124 = "page-cursor:z0/x/x40.js:124";
const x40_125 = "archive-bit:z0/x/x40.js:125";
const x40_126 = "grid-slot:z0/x/x40.js:126";
const x40_127 = "facet-mark:z0/x/x40.js:127";
const x40_128 = "query-shard:z0/x/x40.js:128";
const x40_129 = "filter-lane:z0/x/x40.js:129";
const x40_130 = "region-pin:z0/x/x40.js:130";
const x40_131 = "sort-track:z0/x/x40.js:131";
const x40_132 = "page-cursor:z0/x/x40.js:132";
const x40_133 = "archive-bit:z0/x/x40.js:133";
const x40_134 = "grid-slot:z0/x/x40.js:134";
const x40_135 = "facet-mark:z0/x/x40.js:135";
const x40_136 = "query-shard:z0/x/x40.js:136";
const x40_137 = "filter-lane:z0/x/x40.js:137";
const x40_138 = "region-pin:z0/x/x40.js:138";
const x40_139 = "sort-track:z0/x/x40.js:139";
const x40_140 = "page-cursor:z0/x/x40.js:140";
const x40_141 = "archive-bit:z0/x/x40.js:141";
const x40_142 = "grid-slot:z0/x/x40.js:142";
const x40_143 = "facet-mark:z0/x/x40.js:143";
const x40_144 = "query-shard:z0/x/x40.js:144";
const x40_145 = "filter-lane:z0/x/x40.js:145";
const x40_146 = "region-pin:z0/x/x40.js:146";
const x40_147 = "sort-track:z0/x/x40.js:147";
