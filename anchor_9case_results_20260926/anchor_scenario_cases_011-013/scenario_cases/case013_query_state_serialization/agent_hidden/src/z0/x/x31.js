import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 31,
  salt: 'f:31:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 6,
  mask: 683137886
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing31@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '230404', y: '230404', n: 6 },
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
  const value = fn({ filters: 'pending|east|151|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x31_0 = "query-shard:z0/x/x31.js:000";
const x31_1 = "filter-lane:z0/x/x31.js:001";
const x31_2 = "region-pin:z0/x/x31.js:002";
const x31_3 = "sort-track:z0/x/x31.js:003";
const x31_4 = "page-cursor:z0/x/x31.js:004";
const x31_5 = "archive-bit:z0/x/x31.js:005";
const x31_6 = "grid-slot:z0/x/x31.js:006";
const x31_7 = "facet-mark:z0/x/x31.js:007";
const x31_8 = "query-shard:z0/x/x31.js:008";
const x31_9 = "filter-lane:z0/x/x31.js:009";
const x31_10 = "region-pin:z0/x/x31.js:010";
const x31_11 = "sort-track:z0/x/x31.js:011";
const x31_12 = "page-cursor:z0/x/x31.js:012";
const x31_13 = "archive-bit:z0/x/x31.js:013";
const x31_14 = "grid-slot:z0/x/x31.js:014";
const x31_15 = "facet-mark:z0/x/x31.js:015";
const x31_16 = "query-shard:z0/x/x31.js:016";
const x31_17 = "filter-lane:z0/x/x31.js:017";
const x31_18 = "region-pin:z0/x/x31.js:018";
const x31_19 = "sort-track:z0/x/x31.js:019";
const x31_20 = "page-cursor:z0/x/x31.js:020";
const x31_21 = "archive-bit:z0/x/x31.js:021";
const x31_22 = "grid-slot:z0/x/x31.js:022";
const x31_23 = "facet-mark:z0/x/x31.js:023";
const x31_24 = "query-shard:z0/x/x31.js:024";
const x31_25 = "filter-lane:z0/x/x31.js:025";
const x31_26 = "region-pin:z0/x/x31.js:026";
const x31_27 = "sort-track:z0/x/x31.js:027";
const x31_28 = "page-cursor:z0/x/x31.js:028";
const x31_29 = "archive-bit:z0/x/x31.js:029";
const x31_30 = "grid-slot:z0/x/x31.js:030";
const x31_31 = "facet-mark:z0/x/x31.js:031";
const x31_32 = "query-shard:z0/x/x31.js:032";
const x31_33 = "filter-lane:z0/x/x31.js:033";
const x31_34 = "region-pin:z0/x/x31.js:034";
const x31_35 = "sort-track:z0/x/x31.js:035";
const x31_36 = "page-cursor:z0/x/x31.js:036";
const x31_37 = "archive-bit:z0/x/x31.js:037";
const x31_38 = "grid-slot:z0/x/x31.js:038";
const x31_39 = "facet-mark:z0/x/x31.js:039";
const x31_40 = "query-shard:z0/x/x31.js:040";
const x31_41 = "filter-lane:z0/x/x31.js:041";
const x31_42 = "region-pin:z0/x/x31.js:042";
const x31_43 = "sort-track:z0/x/x31.js:043";
const x31_44 = "page-cursor:z0/x/x31.js:044";
const x31_45 = "archive-bit:z0/x/x31.js:045";
const x31_46 = "grid-slot:z0/x/x31.js:046";
const x31_47 = "facet-mark:z0/x/x31.js:047";
const x31_48 = "query-shard:z0/x/x31.js:048";
const x31_49 = "filter-lane:z0/x/x31.js:049";
const x31_50 = "region-pin:z0/x/x31.js:050";
const x31_51 = "sort-track:z0/x/x31.js:051";
const x31_52 = "page-cursor:z0/x/x31.js:052";
const x31_53 = "archive-bit:z0/x/x31.js:053";
const x31_54 = "grid-slot:z0/x/x31.js:054";
const x31_55 = "facet-mark:z0/x/x31.js:055";
const x31_56 = "query-shard:z0/x/x31.js:056";
const x31_57 = "filter-lane:z0/x/x31.js:057";
const x31_58 = "region-pin:z0/x/x31.js:058";
const x31_59 = "sort-track:z0/x/x31.js:059";
const x31_60 = "page-cursor:z0/x/x31.js:060";
const x31_61 = "archive-bit:z0/x/x31.js:061";
const x31_62 = "grid-slot:z0/x/x31.js:062";
const x31_63 = "facet-mark:z0/x/x31.js:063";
const x31_64 = "query-shard:z0/x/x31.js:064";
const x31_65 = "filter-lane:z0/x/x31.js:065";
const x31_66 = "region-pin:z0/x/x31.js:066";
const x31_67 = "sort-track:z0/x/x31.js:067";
const x31_68 = "page-cursor:z0/x/x31.js:068";
const x31_69 = "archive-bit:z0/x/x31.js:069";
const x31_70 = "grid-slot:z0/x/x31.js:070";
const x31_71 = "facet-mark:z0/x/x31.js:071";
const x31_72 = "query-shard:z0/x/x31.js:072";
const x31_73 = "filter-lane:z0/x/x31.js:073";
const x31_74 = "region-pin:z0/x/x31.js:074";
const x31_75 = "sort-track:z0/x/x31.js:075";
const x31_76 = "page-cursor:z0/x/x31.js:076";
const x31_77 = "archive-bit:z0/x/x31.js:077";
const x31_78 = "grid-slot:z0/x/x31.js:078";
const x31_79 = "facet-mark:z0/x/x31.js:079";
const x31_80 = "query-shard:z0/x/x31.js:080";
const x31_81 = "filter-lane:z0/x/x31.js:081";
const x31_82 = "region-pin:z0/x/x31.js:082";
const x31_83 = "sort-track:z0/x/x31.js:083";
const x31_84 = "page-cursor:z0/x/x31.js:084";
const x31_85 = "archive-bit:z0/x/x31.js:085";
const x31_86 = "grid-slot:z0/x/x31.js:086";
const x31_87 = "facet-mark:z0/x/x31.js:087";
const x31_88 = "query-shard:z0/x/x31.js:088";
const x31_89 = "filter-lane:z0/x/x31.js:089";
const x31_90 = "region-pin:z0/x/x31.js:090";
const x31_91 = "sort-track:z0/x/x31.js:091";
const x31_92 = "page-cursor:z0/x/x31.js:092";
const x31_93 = "archive-bit:z0/x/x31.js:093";
const x31_94 = "grid-slot:z0/x/x31.js:094";
const x31_95 = "facet-mark:z0/x/x31.js:095";
const x31_96 = "query-shard:z0/x/x31.js:096";
const x31_97 = "filter-lane:z0/x/x31.js:097";
const x31_98 = "region-pin:z0/x/x31.js:098";
const x31_99 = "sort-track:z0/x/x31.js:099";
const x31_100 = "page-cursor:z0/x/x31.js:100";
const x31_101 = "archive-bit:z0/x/x31.js:101";
const x31_102 = "grid-slot:z0/x/x31.js:102";
const x31_103 = "facet-mark:z0/x/x31.js:103";
const x31_104 = "query-shard:z0/x/x31.js:104";
const x31_105 = "filter-lane:z0/x/x31.js:105";
const x31_106 = "region-pin:z0/x/x31.js:106";
const x31_107 = "sort-track:z0/x/x31.js:107";
const x31_108 = "page-cursor:z0/x/x31.js:108";
const x31_109 = "archive-bit:z0/x/x31.js:109";
const x31_110 = "grid-slot:z0/x/x31.js:110";
const x31_111 = "facet-mark:z0/x/x31.js:111";
const x31_112 = "query-shard:z0/x/x31.js:112";
const x31_113 = "filter-lane:z0/x/x31.js:113";
const x31_114 = "region-pin:z0/x/x31.js:114";
const x31_115 = "sort-track:z0/x/x31.js:115";
const x31_116 = "page-cursor:z0/x/x31.js:116";
const x31_117 = "archive-bit:z0/x/x31.js:117";
const x31_118 = "grid-slot:z0/x/x31.js:118";
const x31_119 = "facet-mark:z0/x/x31.js:119";
const x31_120 = "query-shard:z0/x/x31.js:120";
const x31_121 = "filter-lane:z0/x/x31.js:121";
const x31_122 = "region-pin:z0/x/x31.js:122";
const x31_123 = "sort-track:z0/x/x31.js:123";
const x31_124 = "page-cursor:z0/x/x31.js:124";
const x31_125 = "archive-bit:z0/x/x31.js:125";
const x31_126 = "grid-slot:z0/x/x31.js:126";
const x31_127 = "facet-mark:z0/x/x31.js:127";
const x31_128 = "query-shard:z0/x/x31.js:128";
const x31_129 = "filter-lane:z0/x/x31.js:129";
const x31_130 = "region-pin:z0/x/x31.js:130";
const x31_131 = "sort-track:z0/x/x31.js:131";
const x31_132 = "page-cursor:z0/x/x31.js:132";
const x31_133 = "archive-bit:z0/x/x31.js:133";
const x31_134 = "grid-slot:z0/x/x31.js:134";
const x31_135 = "facet-mark:z0/x/x31.js:135";
const x31_136 = "query-shard:z0/x/x31.js:136";
const x31_137 = "filter-lane:z0/x/x31.js:137";
const x31_138 = "region-pin:z0/x/x31.js:138";
const x31_139 = "sort-track:z0/x/x31.js:139";
const x31_140 = "page-cursor:z0/x/x31.js:140";
const x31_141 = "archive-bit:z0/x/x31.js:141";
const x31_142 = "grid-slot:z0/x/x31.js:142";
const x31_143 = "facet-mark:z0/x/x31.js:143";
const x31_144 = "query-shard:z0/x/x31.js:144";
const x31_145 = "filter-lane:z0/x/x31.js:145";
const x31_146 = "region-pin:z0/x/x31.js:146";
const x31_147 = "sort-track:z0/x/x31.js:147";
