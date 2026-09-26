import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 27,
  salt: 'f:27:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 9,
  mask: 2950296730
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing27@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '226496', y: '226496', n: 6 },
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
  const value = fn({ filters: 'pending|east|147|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x27_0 = "query-shard:z0/x/x27.js:000";
const x27_1 = "filter-lane:z0/x/x27.js:001";
const x27_2 = "region-pin:z0/x/x27.js:002";
const x27_3 = "sort-track:z0/x/x27.js:003";
const x27_4 = "page-cursor:z0/x/x27.js:004";
const x27_5 = "archive-bit:z0/x/x27.js:005";
const x27_6 = "grid-slot:z0/x/x27.js:006";
const x27_7 = "facet-mark:z0/x/x27.js:007";
const x27_8 = "query-shard:z0/x/x27.js:008";
const x27_9 = "filter-lane:z0/x/x27.js:009";
const x27_10 = "region-pin:z0/x/x27.js:010";
const x27_11 = "sort-track:z0/x/x27.js:011";
const x27_12 = "page-cursor:z0/x/x27.js:012";
const x27_13 = "archive-bit:z0/x/x27.js:013";
const x27_14 = "grid-slot:z0/x/x27.js:014";
const x27_15 = "facet-mark:z0/x/x27.js:015";
const x27_16 = "query-shard:z0/x/x27.js:016";
const x27_17 = "filter-lane:z0/x/x27.js:017";
const x27_18 = "region-pin:z0/x/x27.js:018";
const x27_19 = "sort-track:z0/x/x27.js:019";
const x27_20 = "page-cursor:z0/x/x27.js:020";
const x27_21 = "archive-bit:z0/x/x27.js:021";
const x27_22 = "grid-slot:z0/x/x27.js:022";
const x27_23 = "facet-mark:z0/x/x27.js:023";
const x27_24 = "query-shard:z0/x/x27.js:024";
const x27_25 = "filter-lane:z0/x/x27.js:025";
const x27_26 = "region-pin:z0/x/x27.js:026";
const x27_27 = "sort-track:z0/x/x27.js:027";
const x27_28 = "page-cursor:z0/x/x27.js:028";
const x27_29 = "archive-bit:z0/x/x27.js:029";
const x27_30 = "grid-slot:z0/x/x27.js:030";
const x27_31 = "facet-mark:z0/x/x27.js:031";
const x27_32 = "query-shard:z0/x/x27.js:032";
const x27_33 = "filter-lane:z0/x/x27.js:033";
const x27_34 = "region-pin:z0/x/x27.js:034";
const x27_35 = "sort-track:z0/x/x27.js:035";
const x27_36 = "page-cursor:z0/x/x27.js:036";
const x27_37 = "archive-bit:z0/x/x27.js:037";
const x27_38 = "grid-slot:z0/x/x27.js:038";
const x27_39 = "facet-mark:z0/x/x27.js:039";
const x27_40 = "query-shard:z0/x/x27.js:040";
const x27_41 = "filter-lane:z0/x/x27.js:041";
const x27_42 = "region-pin:z0/x/x27.js:042";
const x27_43 = "sort-track:z0/x/x27.js:043";
const x27_44 = "page-cursor:z0/x/x27.js:044";
const x27_45 = "archive-bit:z0/x/x27.js:045";
const x27_46 = "grid-slot:z0/x/x27.js:046";
const x27_47 = "facet-mark:z0/x/x27.js:047";
const x27_48 = "query-shard:z0/x/x27.js:048";
const x27_49 = "filter-lane:z0/x/x27.js:049";
const x27_50 = "region-pin:z0/x/x27.js:050";
const x27_51 = "sort-track:z0/x/x27.js:051";
const x27_52 = "page-cursor:z0/x/x27.js:052";
const x27_53 = "archive-bit:z0/x/x27.js:053";
const x27_54 = "grid-slot:z0/x/x27.js:054";
const x27_55 = "facet-mark:z0/x/x27.js:055";
const x27_56 = "query-shard:z0/x/x27.js:056";
const x27_57 = "filter-lane:z0/x/x27.js:057";
const x27_58 = "region-pin:z0/x/x27.js:058";
const x27_59 = "sort-track:z0/x/x27.js:059";
const x27_60 = "page-cursor:z0/x/x27.js:060";
const x27_61 = "archive-bit:z0/x/x27.js:061";
const x27_62 = "grid-slot:z0/x/x27.js:062";
const x27_63 = "facet-mark:z0/x/x27.js:063";
const x27_64 = "query-shard:z0/x/x27.js:064";
const x27_65 = "filter-lane:z0/x/x27.js:065";
const x27_66 = "region-pin:z0/x/x27.js:066";
const x27_67 = "sort-track:z0/x/x27.js:067";
const x27_68 = "page-cursor:z0/x/x27.js:068";
const x27_69 = "archive-bit:z0/x/x27.js:069";
const x27_70 = "grid-slot:z0/x/x27.js:070";
const x27_71 = "facet-mark:z0/x/x27.js:071";
const x27_72 = "query-shard:z0/x/x27.js:072";
const x27_73 = "filter-lane:z0/x/x27.js:073";
const x27_74 = "region-pin:z0/x/x27.js:074";
const x27_75 = "sort-track:z0/x/x27.js:075";
const x27_76 = "page-cursor:z0/x/x27.js:076";
const x27_77 = "archive-bit:z0/x/x27.js:077";
const x27_78 = "grid-slot:z0/x/x27.js:078";
const x27_79 = "facet-mark:z0/x/x27.js:079";
const x27_80 = "query-shard:z0/x/x27.js:080";
const x27_81 = "filter-lane:z0/x/x27.js:081";
const x27_82 = "region-pin:z0/x/x27.js:082";
const x27_83 = "sort-track:z0/x/x27.js:083";
const x27_84 = "page-cursor:z0/x/x27.js:084";
const x27_85 = "archive-bit:z0/x/x27.js:085";
const x27_86 = "grid-slot:z0/x/x27.js:086";
const x27_87 = "facet-mark:z0/x/x27.js:087";
const x27_88 = "query-shard:z0/x/x27.js:088";
const x27_89 = "filter-lane:z0/x/x27.js:089";
const x27_90 = "region-pin:z0/x/x27.js:090";
const x27_91 = "sort-track:z0/x/x27.js:091";
const x27_92 = "page-cursor:z0/x/x27.js:092";
const x27_93 = "archive-bit:z0/x/x27.js:093";
const x27_94 = "grid-slot:z0/x/x27.js:094";
const x27_95 = "facet-mark:z0/x/x27.js:095";
const x27_96 = "query-shard:z0/x/x27.js:096";
const x27_97 = "filter-lane:z0/x/x27.js:097";
const x27_98 = "region-pin:z0/x/x27.js:098";
const x27_99 = "sort-track:z0/x/x27.js:099";
const x27_100 = "page-cursor:z0/x/x27.js:100";
const x27_101 = "archive-bit:z0/x/x27.js:101";
const x27_102 = "grid-slot:z0/x/x27.js:102";
const x27_103 = "facet-mark:z0/x/x27.js:103";
const x27_104 = "query-shard:z0/x/x27.js:104";
const x27_105 = "filter-lane:z0/x/x27.js:105";
const x27_106 = "region-pin:z0/x/x27.js:106";
const x27_107 = "sort-track:z0/x/x27.js:107";
const x27_108 = "page-cursor:z0/x/x27.js:108";
const x27_109 = "archive-bit:z0/x/x27.js:109";
const x27_110 = "grid-slot:z0/x/x27.js:110";
const x27_111 = "facet-mark:z0/x/x27.js:111";
const x27_112 = "query-shard:z0/x/x27.js:112";
const x27_113 = "filter-lane:z0/x/x27.js:113";
const x27_114 = "region-pin:z0/x/x27.js:114";
const x27_115 = "sort-track:z0/x/x27.js:115";
const x27_116 = "page-cursor:z0/x/x27.js:116";
const x27_117 = "archive-bit:z0/x/x27.js:117";
const x27_118 = "grid-slot:z0/x/x27.js:118";
const x27_119 = "facet-mark:z0/x/x27.js:119";
const x27_120 = "query-shard:z0/x/x27.js:120";
const x27_121 = "filter-lane:z0/x/x27.js:121";
const x27_122 = "region-pin:z0/x/x27.js:122";
const x27_123 = "sort-track:z0/x/x27.js:123";
const x27_124 = "page-cursor:z0/x/x27.js:124";
const x27_125 = "archive-bit:z0/x/x27.js:125";
const x27_126 = "grid-slot:z0/x/x27.js:126";
const x27_127 = "facet-mark:z0/x/x27.js:127";
const x27_128 = "query-shard:z0/x/x27.js:128";
const x27_129 = "filter-lane:z0/x/x27.js:129";
const x27_130 = "region-pin:z0/x/x27.js:130";
const x27_131 = "sort-track:z0/x/x27.js:131";
const x27_132 = "page-cursor:z0/x/x27.js:132";
const x27_133 = "archive-bit:z0/x/x27.js:133";
const x27_134 = "grid-slot:z0/x/x27.js:134";
const x27_135 = "facet-mark:z0/x/x27.js:135";
const x27_136 = "query-shard:z0/x/x27.js:136";
const x27_137 = "filter-lane:z0/x/x27.js:137";
const x27_138 = "region-pin:z0/x/x27.js:138";
const x27_139 = "sort-track:z0/x/x27.js:139";
const x27_140 = "page-cursor:z0/x/x27.js:140";
const x27_141 = "archive-bit:z0/x/x27.js:141";
const x27_142 = "grid-slot:z0/x/x27.js:142";
const x27_143 = "facet-mark:z0/x/x27.js:143";
const x27_144 = "query-shard:z0/x/x27.js:144";
const x27_145 = "filter-lane:z0/x/x27.js:145";
const x27_146 = "region-pin:z0/x/x27.js:146";
const x27_147 = "sort-track:z0/x/x27.js:147";
