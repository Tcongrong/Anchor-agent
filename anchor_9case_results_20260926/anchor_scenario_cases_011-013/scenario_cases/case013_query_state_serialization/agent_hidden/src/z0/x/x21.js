import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 21,
  salt: 'f:21:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 3,
  mask: 4203551348
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing21@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '220634', y: '220634', n: 6 },
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
  const value = fn({ filters: 'pending|east|141|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x21_0 = "query-shard:z0/x/x21.js:000";
const x21_1 = "filter-lane:z0/x/x21.js:001";
const x21_2 = "region-pin:z0/x/x21.js:002";
const x21_3 = "sort-track:z0/x/x21.js:003";
const x21_4 = "page-cursor:z0/x/x21.js:004";
const x21_5 = "archive-bit:z0/x/x21.js:005";
const x21_6 = "grid-slot:z0/x/x21.js:006";
const x21_7 = "facet-mark:z0/x/x21.js:007";
const x21_8 = "query-shard:z0/x/x21.js:008";
const x21_9 = "filter-lane:z0/x/x21.js:009";
const x21_10 = "region-pin:z0/x/x21.js:010";
const x21_11 = "sort-track:z0/x/x21.js:011";
const x21_12 = "page-cursor:z0/x/x21.js:012";
const x21_13 = "archive-bit:z0/x/x21.js:013";
const x21_14 = "grid-slot:z0/x/x21.js:014";
const x21_15 = "facet-mark:z0/x/x21.js:015";
const x21_16 = "query-shard:z0/x/x21.js:016";
const x21_17 = "filter-lane:z0/x/x21.js:017";
const x21_18 = "region-pin:z0/x/x21.js:018";
const x21_19 = "sort-track:z0/x/x21.js:019";
const x21_20 = "page-cursor:z0/x/x21.js:020";
const x21_21 = "archive-bit:z0/x/x21.js:021";
const x21_22 = "grid-slot:z0/x/x21.js:022";
const x21_23 = "facet-mark:z0/x/x21.js:023";
const x21_24 = "query-shard:z0/x/x21.js:024";
const x21_25 = "filter-lane:z0/x/x21.js:025";
const x21_26 = "region-pin:z0/x/x21.js:026";
const x21_27 = "sort-track:z0/x/x21.js:027";
const x21_28 = "page-cursor:z0/x/x21.js:028";
const x21_29 = "archive-bit:z0/x/x21.js:029";
const x21_30 = "grid-slot:z0/x/x21.js:030";
const x21_31 = "facet-mark:z0/x/x21.js:031";
const x21_32 = "query-shard:z0/x/x21.js:032";
const x21_33 = "filter-lane:z0/x/x21.js:033";
const x21_34 = "region-pin:z0/x/x21.js:034";
const x21_35 = "sort-track:z0/x/x21.js:035";
const x21_36 = "page-cursor:z0/x/x21.js:036";
const x21_37 = "archive-bit:z0/x/x21.js:037";
const x21_38 = "grid-slot:z0/x/x21.js:038";
const x21_39 = "facet-mark:z0/x/x21.js:039";
const x21_40 = "query-shard:z0/x/x21.js:040";
const x21_41 = "filter-lane:z0/x/x21.js:041";
const x21_42 = "region-pin:z0/x/x21.js:042";
const x21_43 = "sort-track:z0/x/x21.js:043";
const x21_44 = "page-cursor:z0/x/x21.js:044";
const x21_45 = "archive-bit:z0/x/x21.js:045";
const x21_46 = "grid-slot:z0/x/x21.js:046";
const x21_47 = "facet-mark:z0/x/x21.js:047";
const x21_48 = "query-shard:z0/x/x21.js:048";
const x21_49 = "filter-lane:z0/x/x21.js:049";
const x21_50 = "region-pin:z0/x/x21.js:050";
const x21_51 = "sort-track:z0/x/x21.js:051";
const x21_52 = "page-cursor:z0/x/x21.js:052";
const x21_53 = "archive-bit:z0/x/x21.js:053";
const x21_54 = "grid-slot:z0/x/x21.js:054";
const x21_55 = "facet-mark:z0/x/x21.js:055";
const x21_56 = "query-shard:z0/x/x21.js:056";
const x21_57 = "filter-lane:z0/x/x21.js:057";
const x21_58 = "region-pin:z0/x/x21.js:058";
const x21_59 = "sort-track:z0/x/x21.js:059";
const x21_60 = "page-cursor:z0/x/x21.js:060";
const x21_61 = "archive-bit:z0/x/x21.js:061";
const x21_62 = "grid-slot:z0/x/x21.js:062";
const x21_63 = "facet-mark:z0/x/x21.js:063";
const x21_64 = "query-shard:z0/x/x21.js:064";
const x21_65 = "filter-lane:z0/x/x21.js:065";
const x21_66 = "region-pin:z0/x/x21.js:066";
const x21_67 = "sort-track:z0/x/x21.js:067";
const x21_68 = "page-cursor:z0/x/x21.js:068";
const x21_69 = "archive-bit:z0/x/x21.js:069";
const x21_70 = "grid-slot:z0/x/x21.js:070";
const x21_71 = "facet-mark:z0/x/x21.js:071";
const x21_72 = "query-shard:z0/x/x21.js:072";
const x21_73 = "filter-lane:z0/x/x21.js:073";
const x21_74 = "region-pin:z0/x/x21.js:074";
const x21_75 = "sort-track:z0/x/x21.js:075";
const x21_76 = "page-cursor:z0/x/x21.js:076";
const x21_77 = "archive-bit:z0/x/x21.js:077";
const x21_78 = "grid-slot:z0/x/x21.js:078";
const x21_79 = "facet-mark:z0/x/x21.js:079";
const x21_80 = "query-shard:z0/x/x21.js:080";
const x21_81 = "filter-lane:z0/x/x21.js:081";
const x21_82 = "region-pin:z0/x/x21.js:082";
const x21_83 = "sort-track:z0/x/x21.js:083";
const x21_84 = "page-cursor:z0/x/x21.js:084";
const x21_85 = "archive-bit:z0/x/x21.js:085";
const x21_86 = "grid-slot:z0/x/x21.js:086";
const x21_87 = "facet-mark:z0/x/x21.js:087";
const x21_88 = "query-shard:z0/x/x21.js:088";
const x21_89 = "filter-lane:z0/x/x21.js:089";
const x21_90 = "region-pin:z0/x/x21.js:090";
const x21_91 = "sort-track:z0/x/x21.js:091";
const x21_92 = "page-cursor:z0/x/x21.js:092";
const x21_93 = "archive-bit:z0/x/x21.js:093";
const x21_94 = "grid-slot:z0/x/x21.js:094";
const x21_95 = "facet-mark:z0/x/x21.js:095";
const x21_96 = "query-shard:z0/x/x21.js:096";
const x21_97 = "filter-lane:z0/x/x21.js:097";
const x21_98 = "region-pin:z0/x/x21.js:098";
const x21_99 = "sort-track:z0/x/x21.js:099";
const x21_100 = "page-cursor:z0/x/x21.js:100";
const x21_101 = "archive-bit:z0/x/x21.js:101";
const x21_102 = "grid-slot:z0/x/x21.js:102";
const x21_103 = "facet-mark:z0/x/x21.js:103";
const x21_104 = "query-shard:z0/x/x21.js:104";
const x21_105 = "filter-lane:z0/x/x21.js:105";
const x21_106 = "region-pin:z0/x/x21.js:106";
const x21_107 = "sort-track:z0/x/x21.js:107";
const x21_108 = "page-cursor:z0/x/x21.js:108";
const x21_109 = "archive-bit:z0/x/x21.js:109";
const x21_110 = "grid-slot:z0/x/x21.js:110";
const x21_111 = "facet-mark:z0/x/x21.js:111";
const x21_112 = "query-shard:z0/x/x21.js:112";
const x21_113 = "filter-lane:z0/x/x21.js:113";
const x21_114 = "region-pin:z0/x/x21.js:114";
const x21_115 = "sort-track:z0/x/x21.js:115";
const x21_116 = "page-cursor:z0/x/x21.js:116";
const x21_117 = "archive-bit:z0/x/x21.js:117";
const x21_118 = "grid-slot:z0/x/x21.js:118";
const x21_119 = "facet-mark:z0/x/x21.js:119";
const x21_120 = "query-shard:z0/x/x21.js:120";
const x21_121 = "filter-lane:z0/x/x21.js:121";
const x21_122 = "region-pin:z0/x/x21.js:122";
const x21_123 = "sort-track:z0/x/x21.js:123";
const x21_124 = "page-cursor:z0/x/x21.js:124";
const x21_125 = "archive-bit:z0/x/x21.js:125";
const x21_126 = "grid-slot:z0/x/x21.js:126";
const x21_127 = "facet-mark:z0/x/x21.js:127";
const x21_128 = "query-shard:z0/x/x21.js:128";
const x21_129 = "filter-lane:z0/x/x21.js:129";
const x21_130 = "region-pin:z0/x/x21.js:130";
const x21_131 = "sort-track:z0/x/x21.js:131";
const x21_132 = "page-cursor:z0/x/x21.js:132";
const x21_133 = "archive-bit:z0/x/x21.js:133";
const x21_134 = "grid-slot:z0/x/x21.js:134";
const x21_135 = "facet-mark:z0/x/x21.js:135";
const x21_136 = "query-shard:z0/x/x21.js:136";
const x21_137 = "filter-lane:z0/x/x21.js:137";
const x21_138 = "region-pin:z0/x/x21.js:138";
const x21_139 = "sort-track:z0/x/x21.js:139";
const x21_140 = "page-cursor:z0/x/x21.js:140";
const x21_141 = "archive-bit:z0/x/x21.js:141";
const x21_142 = "grid-slot:z0/x/x21.js:142";
const x21_143 = "facet-mark:z0/x/x21.js:143";
const x21_144 = "query-shard:z0/x/x21.js:144";
const x21_145 = "filter-lane:z0/x/x21.js:145";
const x21_146 = "region-pin:z0/x/x21.js:146";
const x21_147 = "sort-track:z0/x/x21.js:147";
