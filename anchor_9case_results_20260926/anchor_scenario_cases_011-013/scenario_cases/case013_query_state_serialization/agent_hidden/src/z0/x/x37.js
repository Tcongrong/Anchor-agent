import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 37,
  salt: 'f:37:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 5,
  mask: 3724850564
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing37@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '236266', y: '236266', n: 6 },
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
  const value = fn({ filters: 'pending|east|157|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x37_0 = "query-shard:z0/x/x37.js:000";
const x37_1 = "filter-lane:z0/x/x37.js:001";
const x37_2 = "region-pin:z0/x/x37.js:002";
const x37_3 = "sort-track:z0/x/x37.js:003";
const x37_4 = "page-cursor:z0/x/x37.js:004";
const x37_5 = "archive-bit:z0/x/x37.js:005";
const x37_6 = "grid-slot:z0/x/x37.js:006";
const x37_7 = "facet-mark:z0/x/x37.js:007";
const x37_8 = "query-shard:z0/x/x37.js:008";
const x37_9 = "filter-lane:z0/x/x37.js:009";
const x37_10 = "region-pin:z0/x/x37.js:010";
const x37_11 = "sort-track:z0/x/x37.js:011";
const x37_12 = "page-cursor:z0/x/x37.js:012";
const x37_13 = "archive-bit:z0/x/x37.js:013";
const x37_14 = "grid-slot:z0/x/x37.js:014";
const x37_15 = "facet-mark:z0/x/x37.js:015";
const x37_16 = "query-shard:z0/x/x37.js:016";
const x37_17 = "filter-lane:z0/x/x37.js:017";
const x37_18 = "region-pin:z0/x/x37.js:018";
const x37_19 = "sort-track:z0/x/x37.js:019";
const x37_20 = "page-cursor:z0/x/x37.js:020";
const x37_21 = "archive-bit:z0/x/x37.js:021";
const x37_22 = "grid-slot:z0/x/x37.js:022";
const x37_23 = "facet-mark:z0/x/x37.js:023";
const x37_24 = "query-shard:z0/x/x37.js:024";
const x37_25 = "filter-lane:z0/x/x37.js:025";
const x37_26 = "region-pin:z0/x/x37.js:026";
const x37_27 = "sort-track:z0/x/x37.js:027";
const x37_28 = "page-cursor:z0/x/x37.js:028";
const x37_29 = "archive-bit:z0/x/x37.js:029";
const x37_30 = "grid-slot:z0/x/x37.js:030";
const x37_31 = "facet-mark:z0/x/x37.js:031";
const x37_32 = "query-shard:z0/x/x37.js:032";
const x37_33 = "filter-lane:z0/x/x37.js:033";
const x37_34 = "region-pin:z0/x/x37.js:034";
const x37_35 = "sort-track:z0/x/x37.js:035";
const x37_36 = "page-cursor:z0/x/x37.js:036";
const x37_37 = "archive-bit:z0/x/x37.js:037";
const x37_38 = "grid-slot:z0/x/x37.js:038";
const x37_39 = "facet-mark:z0/x/x37.js:039";
const x37_40 = "query-shard:z0/x/x37.js:040";
const x37_41 = "filter-lane:z0/x/x37.js:041";
const x37_42 = "region-pin:z0/x/x37.js:042";
const x37_43 = "sort-track:z0/x/x37.js:043";
const x37_44 = "page-cursor:z0/x/x37.js:044";
const x37_45 = "archive-bit:z0/x/x37.js:045";
const x37_46 = "grid-slot:z0/x/x37.js:046";
const x37_47 = "facet-mark:z0/x/x37.js:047";
const x37_48 = "query-shard:z0/x/x37.js:048";
const x37_49 = "filter-lane:z0/x/x37.js:049";
const x37_50 = "region-pin:z0/x/x37.js:050";
const x37_51 = "sort-track:z0/x/x37.js:051";
const x37_52 = "page-cursor:z0/x/x37.js:052";
const x37_53 = "archive-bit:z0/x/x37.js:053";
const x37_54 = "grid-slot:z0/x/x37.js:054";
const x37_55 = "facet-mark:z0/x/x37.js:055";
const x37_56 = "query-shard:z0/x/x37.js:056";
const x37_57 = "filter-lane:z0/x/x37.js:057";
const x37_58 = "region-pin:z0/x/x37.js:058";
const x37_59 = "sort-track:z0/x/x37.js:059";
const x37_60 = "page-cursor:z0/x/x37.js:060";
const x37_61 = "archive-bit:z0/x/x37.js:061";
const x37_62 = "grid-slot:z0/x/x37.js:062";
const x37_63 = "facet-mark:z0/x/x37.js:063";
const x37_64 = "query-shard:z0/x/x37.js:064";
const x37_65 = "filter-lane:z0/x/x37.js:065";
const x37_66 = "region-pin:z0/x/x37.js:066";
const x37_67 = "sort-track:z0/x/x37.js:067";
const x37_68 = "page-cursor:z0/x/x37.js:068";
const x37_69 = "archive-bit:z0/x/x37.js:069";
const x37_70 = "grid-slot:z0/x/x37.js:070";
const x37_71 = "facet-mark:z0/x/x37.js:071";
const x37_72 = "query-shard:z0/x/x37.js:072";
const x37_73 = "filter-lane:z0/x/x37.js:073";
const x37_74 = "region-pin:z0/x/x37.js:074";
const x37_75 = "sort-track:z0/x/x37.js:075";
const x37_76 = "page-cursor:z0/x/x37.js:076";
const x37_77 = "archive-bit:z0/x/x37.js:077";
const x37_78 = "grid-slot:z0/x/x37.js:078";
const x37_79 = "facet-mark:z0/x/x37.js:079";
const x37_80 = "query-shard:z0/x/x37.js:080";
const x37_81 = "filter-lane:z0/x/x37.js:081";
const x37_82 = "region-pin:z0/x/x37.js:082";
const x37_83 = "sort-track:z0/x/x37.js:083";
const x37_84 = "page-cursor:z0/x/x37.js:084";
const x37_85 = "archive-bit:z0/x/x37.js:085";
const x37_86 = "grid-slot:z0/x/x37.js:086";
const x37_87 = "facet-mark:z0/x/x37.js:087";
const x37_88 = "query-shard:z0/x/x37.js:088";
const x37_89 = "filter-lane:z0/x/x37.js:089";
const x37_90 = "region-pin:z0/x/x37.js:090";
const x37_91 = "sort-track:z0/x/x37.js:091";
const x37_92 = "page-cursor:z0/x/x37.js:092";
const x37_93 = "archive-bit:z0/x/x37.js:093";
const x37_94 = "grid-slot:z0/x/x37.js:094";
const x37_95 = "facet-mark:z0/x/x37.js:095";
const x37_96 = "query-shard:z0/x/x37.js:096";
const x37_97 = "filter-lane:z0/x/x37.js:097";
const x37_98 = "region-pin:z0/x/x37.js:098";
const x37_99 = "sort-track:z0/x/x37.js:099";
const x37_100 = "page-cursor:z0/x/x37.js:100";
const x37_101 = "archive-bit:z0/x/x37.js:101";
const x37_102 = "grid-slot:z0/x/x37.js:102";
const x37_103 = "facet-mark:z0/x/x37.js:103";
const x37_104 = "query-shard:z0/x/x37.js:104";
const x37_105 = "filter-lane:z0/x/x37.js:105";
const x37_106 = "region-pin:z0/x/x37.js:106";
const x37_107 = "sort-track:z0/x/x37.js:107";
const x37_108 = "page-cursor:z0/x/x37.js:108";
const x37_109 = "archive-bit:z0/x/x37.js:109";
const x37_110 = "grid-slot:z0/x/x37.js:110";
const x37_111 = "facet-mark:z0/x/x37.js:111";
const x37_112 = "query-shard:z0/x/x37.js:112";
const x37_113 = "filter-lane:z0/x/x37.js:113";
const x37_114 = "region-pin:z0/x/x37.js:114";
const x37_115 = "sort-track:z0/x/x37.js:115";
const x37_116 = "page-cursor:z0/x/x37.js:116";
const x37_117 = "archive-bit:z0/x/x37.js:117";
const x37_118 = "grid-slot:z0/x/x37.js:118";
const x37_119 = "facet-mark:z0/x/x37.js:119";
const x37_120 = "query-shard:z0/x/x37.js:120";
const x37_121 = "filter-lane:z0/x/x37.js:121";
const x37_122 = "region-pin:z0/x/x37.js:122";
const x37_123 = "sort-track:z0/x/x37.js:123";
const x37_124 = "page-cursor:z0/x/x37.js:124";
const x37_125 = "archive-bit:z0/x/x37.js:125";
const x37_126 = "grid-slot:z0/x/x37.js:126";
const x37_127 = "facet-mark:z0/x/x37.js:127";
const x37_128 = "query-shard:z0/x/x37.js:128";
const x37_129 = "filter-lane:z0/x/x37.js:129";
const x37_130 = "region-pin:z0/x/x37.js:130";
const x37_131 = "sort-track:z0/x/x37.js:131";
const x37_132 = "page-cursor:z0/x/x37.js:132";
const x37_133 = "archive-bit:z0/x/x37.js:133";
const x37_134 = "grid-slot:z0/x/x37.js:134";
const x37_135 = "facet-mark:z0/x/x37.js:135";
const x37_136 = "query-shard:z0/x/x37.js:136";
const x37_137 = "filter-lane:z0/x/x37.js:137";
const x37_138 = "region-pin:z0/x/x37.js:138";
const x37_139 = "sort-track:z0/x/x37.js:139";
const x37_140 = "page-cursor:z0/x/x37.js:140";
const x37_141 = "archive-bit:z0/x/x37.js:141";
const x37_142 = "grid-slot:z0/x/x37.js:142";
const x37_143 = "facet-mark:z0/x/x37.js:143";
const x37_144 = "query-shard:z0/x/x37.js:144";
const x37_145 = "filter-lane:z0/x/x37.js:145";
const x37_146 = "region-pin:z0/x/x37.js:146";
const x37_147 = "sort-track:z0/x/x37.js:147";
