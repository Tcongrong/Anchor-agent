import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 18,
  salt: 'f:18:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 7,
  mask: 535211361
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing18@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '217703', y: '217703', n: 6 },
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
  const value = fn({ filters: 'pending|east|138|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x18_0 = "query-shard:z0/x/x18.js:000";
const x18_1 = "filter-lane:z0/x/x18.js:001";
const x18_2 = "region-pin:z0/x/x18.js:002";
const x18_3 = "sort-track:z0/x/x18.js:003";
const x18_4 = "page-cursor:z0/x/x18.js:004";
const x18_5 = "archive-bit:z0/x/x18.js:005";
const x18_6 = "grid-slot:z0/x/x18.js:006";
const x18_7 = "facet-mark:z0/x/x18.js:007";
const x18_8 = "query-shard:z0/x/x18.js:008";
const x18_9 = "filter-lane:z0/x/x18.js:009";
const x18_10 = "region-pin:z0/x/x18.js:010";
const x18_11 = "sort-track:z0/x/x18.js:011";
const x18_12 = "page-cursor:z0/x/x18.js:012";
const x18_13 = "archive-bit:z0/x/x18.js:013";
const x18_14 = "grid-slot:z0/x/x18.js:014";
const x18_15 = "facet-mark:z0/x/x18.js:015";
const x18_16 = "query-shard:z0/x/x18.js:016";
const x18_17 = "filter-lane:z0/x/x18.js:017";
const x18_18 = "region-pin:z0/x/x18.js:018";
const x18_19 = "sort-track:z0/x/x18.js:019";
const x18_20 = "page-cursor:z0/x/x18.js:020";
const x18_21 = "archive-bit:z0/x/x18.js:021";
const x18_22 = "grid-slot:z0/x/x18.js:022";
const x18_23 = "facet-mark:z0/x/x18.js:023";
const x18_24 = "query-shard:z0/x/x18.js:024";
const x18_25 = "filter-lane:z0/x/x18.js:025";
const x18_26 = "region-pin:z0/x/x18.js:026";
const x18_27 = "sort-track:z0/x/x18.js:027";
const x18_28 = "page-cursor:z0/x/x18.js:028";
const x18_29 = "archive-bit:z0/x/x18.js:029";
const x18_30 = "grid-slot:z0/x/x18.js:030";
const x18_31 = "facet-mark:z0/x/x18.js:031";
const x18_32 = "query-shard:z0/x/x18.js:032";
const x18_33 = "filter-lane:z0/x/x18.js:033";
const x18_34 = "region-pin:z0/x/x18.js:034";
const x18_35 = "sort-track:z0/x/x18.js:035";
const x18_36 = "page-cursor:z0/x/x18.js:036";
const x18_37 = "archive-bit:z0/x/x18.js:037";
const x18_38 = "grid-slot:z0/x/x18.js:038";
const x18_39 = "facet-mark:z0/x/x18.js:039";
const x18_40 = "query-shard:z0/x/x18.js:040";
const x18_41 = "filter-lane:z0/x/x18.js:041";
const x18_42 = "region-pin:z0/x/x18.js:042";
const x18_43 = "sort-track:z0/x/x18.js:043";
const x18_44 = "page-cursor:z0/x/x18.js:044";
const x18_45 = "archive-bit:z0/x/x18.js:045";
const x18_46 = "grid-slot:z0/x/x18.js:046";
const x18_47 = "facet-mark:z0/x/x18.js:047";
const x18_48 = "query-shard:z0/x/x18.js:048";
const x18_49 = "filter-lane:z0/x/x18.js:049";
const x18_50 = "region-pin:z0/x/x18.js:050";
const x18_51 = "sort-track:z0/x/x18.js:051";
const x18_52 = "page-cursor:z0/x/x18.js:052";
const x18_53 = "archive-bit:z0/x/x18.js:053";
const x18_54 = "grid-slot:z0/x/x18.js:054";
const x18_55 = "facet-mark:z0/x/x18.js:055";
const x18_56 = "query-shard:z0/x/x18.js:056";
const x18_57 = "filter-lane:z0/x/x18.js:057";
const x18_58 = "region-pin:z0/x/x18.js:058";
const x18_59 = "sort-track:z0/x/x18.js:059";
const x18_60 = "page-cursor:z0/x/x18.js:060";
const x18_61 = "archive-bit:z0/x/x18.js:061";
const x18_62 = "grid-slot:z0/x/x18.js:062";
const x18_63 = "facet-mark:z0/x/x18.js:063";
const x18_64 = "query-shard:z0/x/x18.js:064";
const x18_65 = "filter-lane:z0/x/x18.js:065";
const x18_66 = "region-pin:z0/x/x18.js:066";
const x18_67 = "sort-track:z0/x/x18.js:067";
const x18_68 = "page-cursor:z0/x/x18.js:068";
const x18_69 = "archive-bit:z0/x/x18.js:069";
const x18_70 = "grid-slot:z0/x/x18.js:070";
const x18_71 = "facet-mark:z0/x/x18.js:071";
const x18_72 = "query-shard:z0/x/x18.js:072";
const x18_73 = "filter-lane:z0/x/x18.js:073";
const x18_74 = "region-pin:z0/x/x18.js:074";
const x18_75 = "sort-track:z0/x/x18.js:075";
const x18_76 = "page-cursor:z0/x/x18.js:076";
const x18_77 = "archive-bit:z0/x/x18.js:077";
const x18_78 = "grid-slot:z0/x/x18.js:078";
const x18_79 = "facet-mark:z0/x/x18.js:079";
const x18_80 = "query-shard:z0/x/x18.js:080";
const x18_81 = "filter-lane:z0/x/x18.js:081";
const x18_82 = "region-pin:z0/x/x18.js:082";
const x18_83 = "sort-track:z0/x/x18.js:083";
const x18_84 = "page-cursor:z0/x/x18.js:084";
const x18_85 = "archive-bit:z0/x/x18.js:085";
const x18_86 = "grid-slot:z0/x/x18.js:086";
const x18_87 = "facet-mark:z0/x/x18.js:087";
const x18_88 = "query-shard:z0/x/x18.js:088";
const x18_89 = "filter-lane:z0/x/x18.js:089";
const x18_90 = "region-pin:z0/x/x18.js:090";
const x18_91 = "sort-track:z0/x/x18.js:091";
const x18_92 = "page-cursor:z0/x/x18.js:092";
const x18_93 = "archive-bit:z0/x/x18.js:093";
const x18_94 = "grid-slot:z0/x/x18.js:094";
const x18_95 = "facet-mark:z0/x/x18.js:095";
const x18_96 = "query-shard:z0/x/x18.js:096";
const x18_97 = "filter-lane:z0/x/x18.js:097";
const x18_98 = "region-pin:z0/x/x18.js:098";
const x18_99 = "sort-track:z0/x/x18.js:099";
const x18_100 = "page-cursor:z0/x/x18.js:100";
const x18_101 = "archive-bit:z0/x/x18.js:101";
const x18_102 = "grid-slot:z0/x/x18.js:102";
const x18_103 = "facet-mark:z0/x/x18.js:103";
const x18_104 = "query-shard:z0/x/x18.js:104";
const x18_105 = "filter-lane:z0/x/x18.js:105";
const x18_106 = "region-pin:z0/x/x18.js:106";
const x18_107 = "sort-track:z0/x/x18.js:107";
const x18_108 = "page-cursor:z0/x/x18.js:108";
const x18_109 = "archive-bit:z0/x/x18.js:109";
const x18_110 = "grid-slot:z0/x/x18.js:110";
const x18_111 = "facet-mark:z0/x/x18.js:111";
const x18_112 = "query-shard:z0/x/x18.js:112";
const x18_113 = "filter-lane:z0/x/x18.js:113";
const x18_114 = "region-pin:z0/x/x18.js:114";
const x18_115 = "sort-track:z0/x/x18.js:115";
const x18_116 = "page-cursor:z0/x/x18.js:116";
const x18_117 = "archive-bit:z0/x/x18.js:117";
const x18_118 = "grid-slot:z0/x/x18.js:118";
const x18_119 = "facet-mark:z0/x/x18.js:119";
const x18_120 = "query-shard:z0/x/x18.js:120";
const x18_121 = "filter-lane:z0/x/x18.js:121";
const x18_122 = "region-pin:z0/x/x18.js:122";
const x18_123 = "sort-track:z0/x/x18.js:123";
const x18_124 = "page-cursor:z0/x/x18.js:124";
const x18_125 = "archive-bit:z0/x/x18.js:125";
const x18_126 = "grid-slot:z0/x/x18.js:126";
const x18_127 = "facet-mark:z0/x/x18.js:127";
const x18_128 = "query-shard:z0/x/x18.js:128";
const x18_129 = "filter-lane:z0/x/x18.js:129";
const x18_130 = "region-pin:z0/x/x18.js:130";
const x18_131 = "sort-track:z0/x/x18.js:131";
const x18_132 = "page-cursor:z0/x/x18.js:132";
const x18_133 = "archive-bit:z0/x/x18.js:133";
const x18_134 = "grid-slot:z0/x/x18.js:134";
const x18_135 = "facet-mark:z0/x/x18.js:135";
const x18_136 = "query-shard:z0/x/x18.js:136";
const x18_137 = "filter-lane:z0/x/x18.js:137";
const x18_138 = "region-pin:z0/x/x18.js:138";
const x18_139 = "sort-track:z0/x/x18.js:139";
const x18_140 = "page-cursor:z0/x/x18.js:140";
const x18_141 = "archive-bit:z0/x/x18.js:141";
const x18_142 = "grid-slot:z0/x/x18.js:142";
const x18_143 = "facet-mark:z0/x/x18.js:143";
const x18_144 = "query-shard:z0/x/x18.js:144";
const x18_145 = "filter-lane:z0/x/x18.js:145";
const x18_146 = "region-pin:z0/x/x18.js:146";
const x18_147 = "sort-track:z0/x/x18.js:147";
