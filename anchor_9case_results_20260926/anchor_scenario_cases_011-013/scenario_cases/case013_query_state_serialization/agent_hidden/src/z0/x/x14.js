import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 14,
  salt: 'f:14:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 3,
  mask: 2802370205
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing14@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '213795', y: '213795', n: 6 },
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
  const value = fn({ filters: 'pending|east|134|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x14_0 = "query-shard:z0/x/x14.js:000";
const x14_1 = "filter-lane:z0/x/x14.js:001";
const x14_2 = "region-pin:z0/x/x14.js:002";
const x14_3 = "sort-track:z0/x/x14.js:003";
const x14_4 = "page-cursor:z0/x/x14.js:004";
const x14_5 = "archive-bit:z0/x/x14.js:005";
const x14_6 = "grid-slot:z0/x/x14.js:006";
const x14_7 = "facet-mark:z0/x/x14.js:007";
const x14_8 = "query-shard:z0/x/x14.js:008";
const x14_9 = "filter-lane:z0/x/x14.js:009";
const x14_10 = "region-pin:z0/x/x14.js:010";
const x14_11 = "sort-track:z0/x/x14.js:011";
const x14_12 = "page-cursor:z0/x/x14.js:012";
const x14_13 = "archive-bit:z0/x/x14.js:013";
const x14_14 = "grid-slot:z0/x/x14.js:014";
const x14_15 = "facet-mark:z0/x/x14.js:015";
const x14_16 = "query-shard:z0/x/x14.js:016";
const x14_17 = "filter-lane:z0/x/x14.js:017";
const x14_18 = "region-pin:z0/x/x14.js:018";
const x14_19 = "sort-track:z0/x/x14.js:019";
const x14_20 = "page-cursor:z0/x/x14.js:020";
const x14_21 = "archive-bit:z0/x/x14.js:021";
const x14_22 = "grid-slot:z0/x/x14.js:022";
const x14_23 = "facet-mark:z0/x/x14.js:023";
const x14_24 = "query-shard:z0/x/x14.js:024";
const x14_25 = "filter-lane:z0/x/x14.js:025";
const x14_26 = "region-pin:z0/x/x14.js:026";
const x14_27 = "sort-track:z0/x/x14.js:027";
const x14_28 = "page-cursor:z0/x/x14.js:028";
const x14_29 = "archive-bit:z0/x/x14.js:029";
const x14_30 = "grid-slot:z0/x/x14.js:030";
const x14_31 = "facet-mark:z0/x/x14.js:031";
const x14_32 = "query-shard:z0/x/x14.js:032";
const x14_33 = "filter-lane:z0/x/x14.js:033";
const x14_34 = "region-pin:z0/x/x14.js:034";
const x14_35 = "sort-track:z0/x/x14.js:035";
const x14_36 = "page-cursor:z0/x/x14.js:036";
const x14_37 = "archive-bit:z0/x/x14.js:037";
const x14_38 = "grid-slot:z0/x/x14.js:038";
const x14_39 = "facet-mark:z0/x/x14.js:039";
const x14_40 = "query-shard:z0/x/x14.js:040";
const x14_41 = "filter-lane:z0/x/x14.js:041";
const x14_42 = "region-pin:z0/x/x14.js:042";
const x14_43 = "sort-track:z0/x/x14.js:043";
const x14_44 = "page-cursor:z0/x/x14.js:044";
const x14_45 = "archive-bit:z0/x/x14.js:045";
const x14_46 = "grid-slot:z0/x/x14.js:046";
const x14_47 = "facet-mark:z0/x/x14.js:047";
const x14_48 = "query-shard:z0/x/x14.js:048";
const x14_49 = "filter-lane:z0/x/x14.js:049";
const x14_50 = "region-pin:z0/x/x14.js:050";
const x14_51 = "sort-track:z0/x/x14.js:051";
const x14_52 = "page-cursor:z0/x/x14.js:052";
const x14_53 = "archive-bit:z0/x/x14.js:053";
const x14_54 = "grid-slot:z0/x/x14.js:054";
const x14_55 = "facet-mark:z0/x/x14.js:055";
const x14_56 = "query-shard:z0/x/x14.js:056";
const x14_57 = "filter-lane:z0/x/x14.js:057";
const x14_58 = "region-pin:z0/x/x14.js:058";
const x14_59 = "sort-track:z0/x/x14.js:059";
const x14_60 = "page-cursor:z0/x/x14.js:060";
const x14_61 = "archive-bit:z0/x/x14.js:061";
const x14_62 = "grid-slot:z0/x/x14.js:062";
const x14_63 = "facet-mark:z0/x/x14.js:063";
const x14_64 = "query-shard:z0/x/x14.js:064";
const x14_65 = "filter-lane:z0/x/x14.js:065";
const x14_66 = "region-pin:z0/x/x14.js:066";
const x14_67 = "sort-track:z0/x/x14.js:067";
const x14_68 = "page-cursor:z0/x/x14.js:068";
const x14_69 = "archive-bit:z0/x/x14.js:069";
const x14_70 = "grid-slot:z0/x/x14.js:070";
const x14_71 = "facet-mark:z0/x/x14.js:071";
const x14_72 = "query-shard:z0/x/x14.js:072";
const x14_73 = "filter-lane:z0/x/x14.js:073";
const x14_74 = "region-pin:z0/x/x14.js:074";
const x14_75 = "sort-track:z0/x/x14.js:075";
const x14_76 = "page-cursor:z0/x/x14.js:076";
const x14_77 = "archive-bit:z0/x/x14.js:077";
const x14_78 = "grid-slot:z0/x/x14.js:078";
const x14_79 = "facet-mark:z0/x/x14.js:079";
const x14_80 = "query-shard:z0/x/x14.js:080";
const x14_81 = "filter-lane:z0/x/x14.js:081";
const x14_82 = "region-pin:z0/x/x14.js:082";
const x14_83 = "sort-track:z0/x/x14.js:083";
const x14_84 = "page-cursor:z0/x/x14.js:084";
const x14_85 = "archive-bit:z0/x/x14.js:085";
const x14_86 = "grid-slot:z0/x/x14.js:086";
const x14_87 = "facet-mark:z0/x/x14.js:087";
const x14_88 = "query-shard:z0/x/x14.js:088";
const x14_89 = "filter-lane:z0/x/x14.js:089";
const x14_90 = "region-pin:z0/x/x14.js:090";
const x14_91 = "sort-track:z0/x/x14.js:091";
const x14_92 = "page-cursor:z0/x/x14.js:092";
const x14_93 = "archive-bit:z0/x/x14.js:093";
const x14_94 = "grid-slot:z0/x/x14.js:094";
const x14_95 = "facet-mark:z0/x/x14.js:095";
const x14_96 = "query-shard:z0/x/x14.js:096";
const x14_97 = "filter-lane:z0/x/x14.js:097";
const x14_98 = "region-pin:z0/x/x14.js:098";
const x14_99 = "sort-track:z0/x/x14.js:099";
const x14_100 = "page-cursor:z0/x/x14.js:100";
const x14_101 = "archive-bit:z0/x/x14.js:101";
const x14_102 = "grid-slot:z0/x/x14.js:102";
const x14_103 = "facet-mark:z0/x/x14.js:103";
const x14_104 = "query-shard:z0/x/x14.js:104";
const x14_105 = "filter-lane:z0/x/x14.js:105";
const x14_106 = "region-pin:z0/x/x14.js:106";
const x14_107 = "sort-track:z0/x/x14.js:107";
const x14_108 = "page-cursor:z0/x/x14.js:108";
const x14_109 = "archive-bit:z0/x/x14.js:109";
const x14_110 = "grid-slot:z0/x/x14.js:110";
const x14_111 = "facet-mark:z0/x/x14.js:111";
const x14_112 = "query-shard:z0/x/x14.js:112";
const x14_113 = "filter-lane:z0/x/x14.js:113";
const x14_114 = "region-pin:z0/x/x14.js:114";
const x14_115 = "sort-track:z0/x/x14.js:115";
const x14_116 = "page-cursor:z0/x/x14.js:116";
const x14_117 = "archive-bit:z0/x/x14.js:117";
const x14_118 = "grid-slot:z0/x/x14.js:118";
const x14_119 = "facet-mark:z0/x/x14.js:119";
const x14_120 = "query-shard:z0/x/x14.js:120";
const x14_121 = "filter-lane:z0/x/x14.js:121";
const x14_122 = "region-pin:z0/x/x14.js:122";
const x14_123 = "sort-track:z0/x/x14.js:123";
const x14_124 = "page-cursor:z0/x/x14.js:124";
const x14_125 = "archive-bit:z0/x/x14.js:125";
const x14_126 = "grid-slot:z0/x/x14.js:126";
const x14_127 = "facet-mark:z0/x/x14.js:127";
const x14_128 = "query-shard:z0/x/x14.js:128";
const x14_129 = "filter-lane:z0/x/x14.js:129";
const x14_130 = "region-pin:z0/x/x14.js:130";
const x14_131 = "sort-track:z0/x/x14.js:131";
const x14_132 = "page-cursor:z0/x/x14.js:132";
const x14_133 = "archive-bit:z0/x/x14.js:133";
const x14_134 = "grid-slot:z0/x/x14.js:134";
const x14_135 = "facet-mark:z0/x/x14.js:135";
const x14_136 = "query-shard:z0/x/x14.js:136";
const x14_137 = "filter-lane:z0/x/x14.js:137";
const x14_138 = "region-pin:z0/x/x14.js:138";
const x14_139 = "sort-track:z0/x/x14.js:139";
const x14_140 = "page-cursor:z0/x/x14.js:140";
const x14_141 = "archive-bit:z0/x/x14.js:141";
const x14_142 = "grid-slot:z0/x/x14.js:142";
const x14_143 = "facet-mark:z0/x/x14.js:143";
const x14_144 = "query-shard:z0/x/x14.js:144";
const x14_145 = "filter-lane:z0/x/x14.js:145";
const x14_146 = "region-pin:z0/x/x14.js:146";
const x14_147 = "sort-track:z0/x/x14.js:147";
