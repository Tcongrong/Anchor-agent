import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 5,
  salt: 'f:05:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 8,
  mask: 387284836
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing5@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '205002', y: '205002', n: 6 },
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
  const value = fn({ filters: 'pending|east|125|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x05_0 = "query-shard:z0/x/x05.js:000";
const x05_1 = "filter-lane:z0/x/x05.js:001";
const x05_2 = "region-pin:z0/x/x05.js:002";
const x05_3 = "sort-track:z0/x/x05.js:003";
const x05_4 = "page-cursor:z0/x/x05.js:004";
const x05_5 = "archive-bit:z0/x/x05.js:005";
const x05_6 = "grid-slot:z0/x/x05.js:006";
const x05_7 = "facet-mark:z0/x/x05.js:007";
const x05_8 = "query-shard:z0/x/x05.js:008";
const x05_9 = "filter-lane:z0/x/x05.js:009";
const x05_10 = "region-pin:z0/x/x05.js:010";
const x05_11 = "sort-track:z0/x/x05.js:011";
const x05_12 = "page-cursor:z0/x/x05.js:012";
const x05_13 = "archive-bit:z0/x/x05.js:013";
const x05_14 = "grid-slot:z0/x/x05.js:014";
const x05_15 = "facet-mark:z0/x/x05.js:015";
const x05_16 = "query-shard:z0/x/x05.js:016";
const x05_17 = "filter-lane:z0/x/x05.js:017";
const x05_18 = "region-pin:z0/x/x05.js:018";
const x05_19 = "sort-track:z0/x/x05.js:019";
const x05_20 = "page-cursor:z0/x/x05.js:020";
const x05_21 = "archive-bit:z0/x/x05.js:021";
const x05_22 = "grid-slot:z0/x/x05.js:022";
const x05_23 = "facet-mark:z0/x/x05.js:023";
const x05_24 = "query-shard:z0/x/x05.js:024";
const x05_25 = "filter-lane:z0/x/x05.js:025";
const x05_26 = "region-pin:z0/x/x05.js:026";
const x05_27 = "sort-track:z0/x/x05.js:027";
const x05_28 = "page-cursor:z0/x/x05.js:028";
const x05_29 = "archive-bit:z0/x/x05.js:029";
const x05_30 = "grid-slot:z0/x/x05.js:030";
const x05_31 = "facet-mark:z0/x/x05.js:031";
const x05_32 = "query-shard:z0/x/x05.js:032";
const x05_33 = "filter-lane:z0/x/x05.js:033";
const x05_34 = "region-pin:z0/x/x05.js:034";
const x05_35 = "sort-track:z0/x/x05.js:035";
const x05_36 = "page-cursor:z0/x/x05.js:036";
const x05_37 = "archive-bit:z0/x/x05.js:037";
const x05_38 = "grid-slot:z0/x/x05.js:038";
const x05_39 = "facet-mark:z0/x/x05.js:039";
const x05_40 = "query-shard:z0/x/x05.js:040";
const x05_41 = "filter-lane:z0/x/x05.js:041";
const x05_42 = "region-pin:z0/x/x05.js:042";
const x05_43 = "sort-track:z0/x/x05.js:043";
const x05_44 = "page-cursor:z0/x/x05.js:044";
const x05_45 = "archive-bit:z0/x/x05.js:045";
const x05_46 = "grid-slot:z0/x/x05.js:046";
const x05_47 = "facet-mark:z0/x/x05.js:047";
const x05_48 = "query-shard:z0/x/x05.js:048";
const x05_49 = "filter-lane:z0/x/x05.js:049";
const x05_50 = "region-pin:z0/x/x05.js:050";
const x05_51 = "sort-track:z0/x/x05.js:051";
const x05_52 = "page-cursor:z0/x/x05.js:052";
const x05_53 = "archive-bit:z0/x/x05.js:053";
const x05_54 = "grid-slot:z0/x/x05.js:054";
const x05_55 = "facet-mark:z0/x/x05.js:055";
const x05_56 = "query-shard:z0/x/x05.js:056";
const x05_57 = "filter-lane:z0/x/x05.js:057";
const x05_58 = "region-pin:z0/x/x05.js:058";
const x05_59 = "sort-track:z0/x/x05.js:059";
const x05_60 = "page-cursor:z0/x/x05.js:060";
const x05_61 = "archive-bit:z0/x/x05.js:061";
const x05_62 = "grid-slot:z0/x/x05.js:062";
const x05_63 = "facet-mark:z0/x/x05.js:063";
const x05_64 = "query-shard:z0/x/x05.js:064";
const x05_65 = "filter-lane:z0/x/x05.js:065";
const x05_66 = "region-pin:z0/x/x05.js:066";
const x05_67 = "sort-track:z0/x/x05.js:067";
const x05_68 = "page-cursor:z0/x/x05.js:068";
const x05_69 = "archive-bit:z0/x/x05.js:069";
const x05_70 = "grid-slot:z0/x/x05.js:070";
const x05_71 = "facet-mark:z0/x/x05.js:071";
const x05_72 = "query-shard:z0/x/x05.js:072";
const x05_73 = "filter-lane:z0/x/x05.js:073";
const x05_74 = "region-pin:z0/x/x05.js:074";
const x05_75 = "sort-track:z0/x/x05.js:075";
const x05_76 = "page-cursor:z0/x/x05.js:076";
const x05_77 = "archive-bit:z0/x/x05.js:077";
const x05_78 = "grid-slot:z0/x/x05.js:078";
const x05_79 = "facet-mark:z0/x/x05.js:079";
const x05_80 = "query-shard:z0/x/x05.js:080";
const x05_81 = "filter-lane:z0/x/x05.js:081";
const x05_82 = "region-pin:z0/x/x05.js:082";
const x05_83 = "sort-track:z0/x/x05.js:083";
const x05_84 = "page-cursor:z0/x/x05.js:084";
const x05_85 = "archive-bit:z0/x/x05.js:085";
const x05_86 = "grid-slot:z0/x/x05.js:086";
const x05_87 = "facet-mark:z0/x/x05.js:087";
const x05_88 = "query-shard:z0/x/x05.js:088";
const x05_89 = "filter-lane:z0/x/x05.js:089";
const x05_90 = "region-pin:z0/x/x05.js:090";
const x05_91 = "sort-track:z0/x/x05.js:091";
const x05_92 = "page-cursor:z0/x/x05.js:092";
const x05_93 = "archive-bit:z0/x/x05.js:093";
const x05_94 = "grid-slot:z0/x/x05.js:094";
const x05_95 = "facet-mark:z0/x/x05.js:095";
const x05_96 = "query-shard:z0/x/x05.js:096";
const x05_97 = "filter-lane:z0/x/x05.js:097";
const x05_98 = "region-pin:z0/x/x05.js:098";
const x05_99 = "sort-track:z0/x/x05.js:099";
const x05_100 = "page-cursor:z0/x/x05.js:100";
const x05_101 = "archive-bit:z0/x/x05.js:101";
const x05_102 = "grid-slot:z0/x/x05.js:102";
const x05_103 = "facet-mark:z0/x/x05.js:103";
const x05_104 = "query-shard:z0/x/x05.js:104";
const x05_105 = "filter-lane:z0/x/x05.js:105";
const x05_106 = "region-pin:z0/x/x05.js:106";
const x05_107 = "sort-track:z0/x/x05.js:107";
const x05_108 = "page-cursor:z0/x/x05.js:108";
const x05_109 = "archive-bit:z0/x/x05.js:109";
const x05_110 = "grid-slot:z0/x/x05.js:110";
const x05_111 = "facet-mark:z0/x/x05.js:111";
const x05_112 = "query-shard:z0/x/x05.js:112";
const x05_113 = "filter-lane:z0/x/x05.js:113";
const x05_114 = "region-pin:z0/x/x05.js:114";
const x05_115 = "sort-track:z0/x/x05.js:115";
const x05_116 = "page-cursor:z0/x/x05.js:116";
const x05_117 = "archive-bit:z0/x/x05.js:117";
const x05_118 = "grid-slot:z0/x/x05.js:118";
const x05_119 = "facet-mark:z0/x/x05.js:119";
const x05_120 = "query-shard:z0/x/x05.js:120";
const x05_121 = "filter-lane:z0/x/x05.js:121";
const x05_122 = "region-pin:z0/x/x05.js:122";
const x05_123 = "sort-track:z0/x/x05.js:123";
const x05_124 = "page-cursor:z0/x/x05.js:124";
const x05_125 = "archive-bit:z0/x/x05.js:125";
const x05_126 = "grid-slot:z0/x/x05.js:126";
const x05_127 = "facet-mark:z0/x/x05.js:127";
const x05_128 = "query-shard:z0/x/x05.js:128";
const x05_129 = "filter-lane:z0/x/x05.js:129";
const x05_130 = "region-pin:z0/x/x05.js:130";
const x05_131 = "sort-track:z0/x/x05.js:131";
const x05_132 = "page-cursor:z0/x/x05.js:132";
const x05_133 = "archive-bit:z0/x/x05.js:133";
const x05_134 = "grid-slot:z0/x/x05.js:134";
const x05_135 = "facet-mark:z0/x/x05.js:135";
const x05_136 = "query-shard:z0/x/x05.js:136";
const x05_137 = "filter-lane:z0/x/x05.js:137";
const x05_138 = "region-pin:z0/x/x05.js:138";
const x05_139 = "sort-track:z0/x/x05.js:139";
const x05_140 = "page-cursor:z0/x/x05.js:140";
const x05_141 = "archive-bit:z0/x/x05.js:141";
const x05_142 = "grid-slot:z0/x/x05.js:142";
const x05_143 = "facet-mark:z0/x/x05.js:143";
const x05_144 = "query-shard:z0/x/x05.js:144";
const x05_145 = "filter-lane:z0/x/x05.js:145";
const x05_146 = "region-pin:z0/x/x05.js:146";
const x05_147 = "sort-track:z0/x/x05.js:147";
