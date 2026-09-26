import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 26,
  salt: 'f:26:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 8,
  mask: 295860969
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing26@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '225519', y: '225519', n: 6 },
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
  const value = fn({ filters: 'pending|east|146|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x26_0 = "query-shard:z0/x/x26.js:000";
const x26_1 = "filter-lane:z0/x/x26.js:001";
const x26_2 = "region-pin:z0/x/x26.js:002";
const x26_3 = "sort-track:z0/x/x26.js:003";
const x26_4 = "page-cursor:z0/x/x26.js:004";
const x26_5 = "archive-bit:z0/x/x26.js:005";
const x26_6 = "grid-slot:z0/x/x26.js:006";
const x26_7 = "facet-mark:z0/x/x26.js:007";
const x26_8 = "query-shard:z0/x/x26.js:008";
const x26_9 = "filter-lane:z0/x/x26.js:009";
const x26_10 = "region-pin:z0/x/x26.js:010";
const x26_11 = "sort-track:z0/x/x26.js:011";
const x26_12 = "page-cursor:z0/x/x26.js:012";
const x26_13 = "archive-bit:z0/x/x26.js:013";
const x26_14 = "grid-slot:z0/x/x26.js:014";
const x26_15 = "facet-mark:z0/x/x26.js:015";
const x26_16 = "query-shard:z0/x/x26.js:016";
const x26_17 = "filter-lane:z0/x/x26.js:017";
const x26_18 = "region-pin:z0/x/x26.js:018";
const x26_19 = "sort-track:z0/x/x26.js:019";
const x26_20 = "page-cursor:z0/x/x26.js:020";
const x26_21 = "archive-bit:z0/x/x26.js:021";
const x26_22 = "grid-slot:z0/x/x26.js:022";
const x26_23 = "facet-mark:z0/x/x26.js:023";
const x26_24 = "query-shard:z0/x/x26.js:024";
const x26_25 = "filter-lane:z0/x/x26.js:025";
const x26_26 = "region-pin:z0/x/x26.js:026";
const x26_27 = "sort-track:z0/x/x26.js:027";
const x26_28 = "page-cursor:z0/x/x26.js:028";
const x26_29 = "archive-bit:z0/x/x26.js:029";
const x26_30 = "grid-slot:z0/x/x26.js:030";
const x26_31 = "facet-mark:z0/x/x26.js:031";
const x26_32 = "query-shard:z0/x/x26.js:032";
const x26_33 = "filter-lane:z0/x/x26.js:033";
const x26_34 = "region-pin:z0/x/x26.js:034";
const x26_35 = "sort-track:z0/x/x26.js:035";
const x26_36 = "page-cursor:z0/x/x26.js:036";
const x26_37 = "archive-bit:z0/x/x26.js:037";
const x26_38 = "grid-slot:z0/x/x26.js:038";
const x26_39 = "facet-mark:z0/x/x26.js:039";
const x26_40 = "query-shard:z0/x/x26.js:040";
const x26_41 = "filter-lane:z0/x/x26.js:041";
const x26_42 = "region-pin:z0/x/x26.js:042";
const x26_43 = "sort-track:z0/x/x26.js:043";
const x26_44 = "page-cursor:z0/x/x26.js:044";
const x26_45 = "archive-bit:z0/x/x26.js:045";
const x26_46 = "grid-slot:z0/x/x26.js:046";
const x26_47 = "facet-mark:z0/x/x26.js:047";
const x26_48 = "query-shard:z0/x/x26.js:048";
const x26_49 = "filter-lane:z0/x/x26.js:049";
const x26_50 = "region-pin:z0/x/x26.js:050";
const x26_51 = "sort-track:z0/x/x26.js:051";
const x26_52 = "page-cursor:z0/x/x26.js:052";
const x26_53 = "archive-bit:z0/x/x26.js:053";
const x26_54 = "grid-slot:z0/x/x26.js:054";
const x26_55 = "facet-mark:z0/x/x26.js:055";
const x26_56 = "query-shard:z0/x/x26.js:056";
const x26_57 = "filter-lane:z0/x/x26.js:057";
const x26_58 = "region-pin:z0/x/x26.js:058";
const x26_59 = "sort-track:z0/x/x26.js:059";
const x26_60 = "page-cursor:z0/x/x26.js:060";
const x26_61 = "archive-bit:z0/x/x26.js:061";
const x26_62 = "grid-slot:z0/x/x26.js:062";
const x26_63 = "facet-mark:z0/x/x26.js:063";
const x26_64 = "query-shard:z0/x/x26.js:064";
const x26_65 = "filter-lane:z0/x/x26.js:065";
const x26_66 = "region-pin:z0/x/x26.js:066";
const x26_67 = "sort-track:z0/x/x26.js:067";
const x26_68 = "page-cursor:z0/x/x26.js:068";
const x26_69 = "archive-bit:z0/x/x26.js:069";
const x26_70 = "grid-slot:z0/x/x26.js:070";
const x26_71 = "facet-mark:z0/x/x26.js:071";
const x26_72 = "query-shard:z0/x/x26.js:072";
const x26_73 = "filter-lane:z0/x/x26.js:073";
const x26_74 = "region-pin:z0/x/x26.js:074";
const x26_75 = "sort-track:z0/x/x26.js:075";
const x26_76 = "page-cursor:z0/x/x26.js:076";
const x26_77 = "archive-bit:z0/x/x26.js:077";
const x26_78 = "grid-slot:z0/x/x26.js:078";
const x26_79 = "facet-mark:z0/x/x26.js:079";
const x26_80 = "query-shard:z0/x/x26.js:080";
const x26_81 = "filter-lane:z0/x/x26.js:081";
const x26_82 = "region-pin:z0/x/x26.js:082";
const x26_83 = "sort-track:z0/x/x26.js:083";
const x26_84 = "page-cursor:z0/x/x26.js:084";
const x26_85 = "archive-bit:z0/x/x26.js:085";
const x26_86 = "grid-slot:z0/x/x26.js:086";
const x26_87 = "facet-mark:z0/x/x26.js:087";
const x26_88 = "query-shard:z0/x/x26.js:088";
const x26_89 = "filter-lane:z0/x/x26.js:089";
const x26_90 = "region-pin:z0/x/x26.js:090";
const x26_91 = "sort-track:z0/x/x26.js:091";
const x26_92 = "page-cursor:z0/x/x26.js:092";
const x26_93 = "archive-bit:z0/x/x26.js:093";
const x26_94 = "grid-slot:z0/x/x26.js:094";
const x26_95 = "facet-mark:z0/x/x26.js:095";
const x26_96 = "query-shard:z0/x/x26.js:096";
const x26_97 = "filter-lane:z0/x/x26.js:097";
const x26_98 = "region-pin:z0/x/x26.js:098";
const x26_99 = "sort-track:z0/x/x26.js:099";
const x26_100 = "page-cursor:z0/x/x26.js:100";
const x26_101 = "archive-bit:z0/x/x26.js:101";
const x26_102 = "grid-slot:z0/x/x26.js:102";
const x26_103 = "facet-mark:z0/x/x26.js:103";
const x26_104 = "query-shard:z0/x/x26.js:104";
const x26_105 = "filter-lane:z0/x/x26.js:105";
const x26_106 = "region-pin:z0/x/x26.js:106";
const x26_107 = "sort-track:z0/x/x26.js:107";
const x26_108 = "page-cursor:z0/x/x26.js:108";
const x26_109 = "archive-bit:z0/x/x26.js:109";
const x26_110 = "grid-slot:z0/x/x26.js:110";
const x26_111 = "facet-mark:z0/x/x26.js:111";
const x26_112 = "query-shard:z0/x/x26.js:112";
const x26_113 = "filter-lane:z0/x/x26.js:113";
const x26_114 = "region-pin:z0/x/x26.js:114";
const x26_115 = "sort-track:z0/x/x26.js:115";
const x26_116 = "page-cursor:z0/x/x26.js:116";
const x26_117 = "archive-bit:z0/x/x26.js:117";
const x26_118 = "grid-slot:z0/x/x26.js:118";
const x26_119 = "facet-mark:z0/x/x26.js:119";
const x26_120 = "query-shard:z0/x/x26.js:120";
const x26_121 = "filter-lane:z0/x/x26.js:121";
const x26_122 = "region-pin:z0/x/x26.js:122";
const x26_123 = "sort-track:z0/x/x26.js:123";
const x26_124 = "page-cursor:z0/x/x26.js:124";
const x26_125 = "archive-bit:z0/x/x26.js:125";
const x26_126 = "grid-slot:z0/x/x26.js:126";
const x26_127 = "facet-mark:z0/x/x26.js:127";
const x26_128 = "query-shard:z0/x/x26.js:128";
const x26_129 = "filter-lane:z0/x/x26.js:129";
const x26_130 = "region-pin:z0/x/x26.js:130";
const x26_131 = "sort-track:z0/x/x26.js:131";
const x26_132 = "page-cursor:z0/x/x26.js:132";
const x26_133 = "archive-bit:z0/x/x26.js:133";
const x26_134 = "grid-slot:z0/x/x26.js:134";
const x26_135 = "facet-mark:z0/x/x26.js:135";
const x26_136 = "query-shard:z0/x/x26.js:136";
const x26_137 = "filter-lane:z0/x/x26.js:137";
const x26_138 = "region-pin:z0/x/x26.js:138";
const x26_139 = "sort-track:z0/x/x26.js:139";
const x26_140 = "page-cursor:z0/x/x26.js:140";
const x26_141 = "archive-bit:z0/x/x26.js:141";
const x26_142 = "grid-slot:z0/x/x26.js:142";
const x26_143 = "facet-mark:z0/x/x26.js:143";
const x26_144 = "query-shard:z0/x/x26.js:144";
const x26_145 = "filter-lane:z0/x/x26.js:145";
const x26_146 = "region-pin:z0/x/x26.js:146";
const x26_147 = "sort-track:z0/x/x26.js:147";
