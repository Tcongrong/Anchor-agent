import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 1,
  salt: 'f:01:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 4,
  mask: 2654443680
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing1@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '201094', y: '201094', n: 6 },
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
  const value = fn({ filters: 'pending|east|121|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x01_0 = "query-shard:z0/x/x01.js:000";
const x01_1 = "filter-lane:z0/x/x01.js:001";
const x01_2 = "region-pin:z0/x/x01.js:002";
const x01_3 = "sort-track:z0/x/x01.js:003";
const x01_4 = "page-cursor:z0/x/x01.js:004";
const x01_5 = "archive-bit:z0/x/x01.js:005";
const x01_6 = "grid-slot:z0/x/x01.js:006";
const x01_7 = "facet-mark:z0/x/x01.js:007";
const x01_8 = "query-shard:z0/x/x01.js:008";
const x01_9 = "filter-lane:z0/x/x01.js:009";
const x01_10 = "region-pin:z0/x/x01.js:010";
const x01_11 = "sort-track:z0/x/x01.js:011";
const x01_12 = "page-cursor:z0/x/x01.js:012";
const x01_13 = "archive-bit:z0/x/x01.js:013";
const x01_14 = "grid-slot:z0/x/x01.js:014";
const x01_15 = "facet-mark:z0/x/x01.js:015";
const x01_16 = "query-shard:z0/x/x01.js:016";
const x01_17 = "filter-lane:z0/x/x01.js:017";
const x01_18 = "region-pin:z0/x/x01.js:018";
const x01_19 = "sort-track:z0/x/x01.js:019";
const x01_20 = "page-cursor:z0/x/x01.js:020";
const x01_21 = "archive-bit:z0/x/x01.js:021";
const x01_22 = "grid-slot:z0/x/x01.js:022";
const x01_23 = "facet-mark:z0/x/x01.js:023";
const x01_24 = "query-shard:z0/x/x01.js:024";
const x01_25 = "filter-lane:z0/x/x01.js:025";
const x01_26 = "region-pin:z0/x/x01.js:026";
const x01_27 = "sort-track:z0/x/x01.js:027";
const x01_28 = "page-cursor:z0/x/x01.js:028";
const x01_29 = "archive-bit:z0/x/x01.js:029";
const x01_30 = "grid-slot:z0/x/x01.js:030";
const x01_31 = "facet-mark:z0/x/x01.js:031";
const x01_32 = "query-shard:z0/x/x01.js:032";
const x01_33 = "filter-lane:z0/x/x01.js:033";
const x01_34 = "region-pin:z0/x/x01.js:034";
const x01_35 = "sort-track:z0/x/x01.js:035";
const x01_36 = "page-cursor:z0/x/x01.js:036";
const x01_37 = "archive-bit:z0/x/x01.js:037";
const x01_38 = "grid-slot:z0/x/x01.js:038";
const x01_39 = "facet-mark:z0/x/x01.js:039";
const x01_40 = "query-shard:z0/x/x01.js:040";
const x01_41 = "filter-lane:z0/x/x01.js:041";
const x01_42 = "region-pin:z0/x/x01.js:042";
const x01_43 = "sort-track:z0/x/x01.js:043";
const x01_44 = "page-cursor:z0/x/x01.js:044";
const x01_45 = "archive-bit:z0/x/x01.js:045";
const x01_46 = "grid-slot:z0/x/x01.js:046";
const x01_47 = "facet-mark:z0/x/x01.js:047";
const x01_48 = "query-shard:z0/x/x01.js:048";
const x01_49 = "filter-lane:z0/x/x01.js:049";
const x01_50 = "region-pin:z0/x/x01.js:050";
const x01_51 = "sort-track:z0/x/x01.js:051";
const x01_52 = "page-cursor:z0/x/x01.js:052";
const x01_53 = "archive-bit:z0/x/x01.js:053";
const x01_54 = "grid-slot:z0/x/x01.js:054";
const x01_55 = "facet-mark:z0/x/x01.js:055";
const x01_56 = "query-shard:z0/x/x01.js:056";
const x01_57 = "filter-lane:z0/x/x01.js:057";
const x01_58 = "region-pin:z0/x/x01.js:058";
const x01_59 = "sort-track:z0/x/x01.js:059";
const x01_60 = "page-cursor:z0/x/x01.js:060";
const x01_61 = "archive-bit:z0/x/x01.js:061";
const x01_62 = "grid-slot:z0/x/x01.js:062";
const x01_63 = "facet-mark:z0/x/x01.js:063";
const x01_64 = "query-shard:z0/x/x01.js:064";
const x01_65 = "filter-lane:z0/x/x01.js:065";
const x01_66 = "region-pin:z0/x/x01.js:066";
const x01_67 = "sort-track:z0/x/x01.js:067";
const x01_68 = "page-cursor:z0/x/x01.js:068";
const x01_69 = "archive-bit:z0/x/x01.js:069";
const x01_70 = "grid-slot:z0/x/x01.js:070";
const x01_71 = "facet-mark:z0/x/x01.js:071";
const x01_72 = "query-shard:z0/x/x01.js:072";
const x01_73 = "filter-lane:z0/x/x01.js:073";
const x01_74 = "region-pin:z0/x/x01.js:074";
const x01_75 = "sort-track:z0/x/x01.js:075";
const x01_76 = "page-cursor:z0/x/x01.js:076";
const x01_77 = "archive-bit:z0/x/x01.js:077";
const x01_78 = "grid-slot:z0/x/x01.js:078";
const x01_79 = "facet-mark:z0/x/x01.js:079";
const x01_80 = "query-shard:z0/x/x01.js:080";
const x01_81 = "filter-lane:z0/x/x01.js:081";
const x01_82 = "region-pin:z0/x/x01.js:082";
const x01_83 = "sort-track:z0/x/x01.js:083";
const x01_84 = "page-cursor:z0/x/x01.js:084";
const x01_85 = "archive-bit:z0/x/x01.js:085";
const x01_86 = "grid-slot:z0/x/x01.js:086";
const x01_87 = "facet-mark:z0/x/x01.js:087";
const x01_88 = "query-shard:z0/x/x01.js:088";
const x01_89 = "filter-lane:z0/x/x01.js:089";
const x01_90 = "region-pin:z0/x/x01.js:090";
const x01_91 = "sort-track:z0/x/x01.js:091";
const x01_92 = "page-cursor:z0/x/x01.js:092";
const x01_93 = "archive-bit:z0/x/x01.js:093";
const x01_94 = "grid-slot:z0/x/x01.js:094";
const x01_95 = "facet-mark:z0/x/x01.js:095";
const x01_96 = "query-shard:z0/x/x01.js:096";
const x01_97 = "filter-lane:z0/x/x01.js:097";
const x01_98 = "region-pin:z0/x/x01.js:098";
const x01_99 = "sort-track:z0/x/x01.js:099";
const x01_100 = "page-cursor:z0/x/x01.js:100";
const x01_101 = "archive-bit:z0/x/x01.js:101";
const x01_102 = "grid-slot:z0/x/x01.js:102";
const x01_103 = "facet-mark:z0/x/x01.js:103";
const x01_104 = "query-shard:z0/x/x01.js:104";
const x01_105 = "filter-lane:z0/x/x01.js:105";
const x01_106 = "region-pin:z0/x/x01.js:106";
const x01_107 = "sort-track:z0/x/x01.js:107";
const x01_108 = "page-cursor:z0/x/x01.js:108";
const x01_109 = "archive-bit:z0/x/x01.js:109";
const x01_110 = "grid-slot:z0/x/x01.js:110";
const x01_111 = "facet-mark:z0/x/x01.js:111";
const x01_112 = "query-shard:z0/x/x01.js:112";
const x01_113 = "filter-lane:z0/x/x01.js:113";
const x01_114 = "region-pin:z0/x/x01.js:114";
const x01_115 = "sort-track:z0/x/x01.js:115";
const x01_116 = "page-cursor:z0/x/x01.js:116";
const x01_117 = "archive-bit:z0/x/x01.js:117";
const x01_118 = "grid-slot:z0/x/x01.js:118";
const x01_119 = "facet-mark:z0/x/x01.js:119";
const x01_120 = "query-shard:z0/x/x01.js:120";
const x01_121 = "filter-lane:z0/x/x01.js:121";
const x01_122 = "region-pin:z0/x/x01.js:122";
const x01_123 = "sort-track:z0/x/x01.js:123";
const x01_124 = "page-cursor:z0/x/x01.js:124";
const x01_125 = "archive-bit:z0/x/x01.js:125";
const x01_126 = "grid-slot:z0/x/x01.js:126";
const x01_127 = "facet-mark:z0/x/x01.js:127";
const x01_128 = "query-shard:z0/x/x01.js:128";
const x01_129 = "filter-lane:z0/x/x01.js:129";
const x01_130 = "region-pin:z0/x/x01.js:130";
const x01_131 = "sort-track:z0/x/x01.js:131";
const x01_132 = "page-cursor:z0/x/x01.js:132";
const x01_133 = "archive-bit:z0/x/x01.js:133";
const x01_134 = "grid-slot:z0/x/x01.js:134";
const x01_135 = "facet-mark:z0/x/x01.js:135";
const x01_136 = "query-shard:z0/x/x01.js:136";
const x01_137 = "filter-lane:z0/x/x01.js:137";
const x01_138 = "region-pin:z0/x/x01.js:138";
const x01_139 = "sort-track:z0/x/x01.js:139";
const x01_140 = "page-cursor:z0/x/x01.js:140";
const x01_141 = "archive-bit:z0/x/x01.js:141";
const x01_142 = "grid-slot:z0/x/x01.js:142";
const x01_143 = "facet-mark:z0/x/x01.js:143";
const x01_144 = "query-shard:z0/x/x01.js:144";
const x01_145 = "filter-lane:z0/x/x01.js:145";
const x01_146 = "region-pin:z0/x/x01.js:146";
const x01_147 = "sort-track:z0/x/x01.js:147";
