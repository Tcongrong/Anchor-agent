import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 34,
  salt: 'f:34:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 9,
  mask: 56510577
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing34@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '233335', y: '233335', n: 6 },
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
  const value = fn({ filters: 'pending|east|154|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x34_0 = "query-shard:z0/x/x34.js:000";
const x34_1 = "filter-lane:z0/x/x34.js:001";
const x34_2 = "region-pin:z0/x/x34.js:002";
const x34_3 = "sort-track:z0/x/x34.js:003";
const x34_4 = "page-cursor:z0/x/x34.js:004";
const x34_5 = "archive-bit:z0/x/x34.js:005";
const x34_6 = "grid-slot:z0/x/x34.js:006";
const x34_7 = "facet-mark:z0/x/x34.js:007";
const x34_8 = "query-shard:z0/x/x34.js:008";
const x34_9 = "filter-lane:z0/x/x34.js:009";
const x34_10 = "region-pin:z0/x/x34.js:010";
const x34_11 = "sort-track:z0/x/x34.js:011";
const x34_12 = "page-cursor:z0/x/x34.js:012";
const x34_13 = "archive-bit:z0/x/x34.js:013";
const x34_14 = "grid-slot:z0/x/x34.js:014";
const x34_15 = "facet-mark:z0/x/x34.js:015";
const x34_16 = "query-shard:z0/x/x34.js:016";
const x34_17 = "filter-lane:z0/x/x34.js:017";
const x34_18 = "region-pin:z0/x/x34.js:018";
const x34_19 = "sort-track:z0/x/x34.js:019";
const x34_20 = "page-cursor:z0/x/x34.js:020";
const x34_21 = "archive-bit:z0/x/x34.js:021";
const x34_22 = "grid-slot:z0/x/x34.js:022";
const x34_23 = "facet-mark:z0/x/x34.js:023";
const x34_24 = "query-shard:z0/x/x34.js:024";
const x34_25 = "filter-lane:z0/x/x34.js:025";
const x34_26 = "region-pin:z0/x/x34.js:026";
const x34_27 = "sort-track:z0/x/x34.js:027";
const x34_28 = "page-cursor:z0/x/x34.js:028";
const x34_29 = "archive-bit:z0/x/x34.js:029";
const x34_30 = "grid-slot:z0/x/x34.js:030";
const x34_31 = "facet-mark:z0/x/x34.js:031";
const x34_32 = "query-shard:z0/x/x34.js:032";
const x34_33 = "filter-lane:z0/x/x34.js:033";
const x34_34 = "region-pin:z0/x/x34.js:034";
const x34_35 = "sort-track:z0/x/x34.js:035";
const x34_36 = "page-cursor:z0/x/x34.js:036";
const x34_37 = "archive-bit:z0/x/x34.js:037";
const x34_38 = "grid-slot:z0/x/x34.js:038";
const x34_39 = "facet-mark:z0/x/x34.js:039";
const x34_40 = "query-shard:z0/x/x34.js:040";
const x34_41 = "filter-lane:z0/x/x34.js:041";
const x34_42 = "region-pin:z0/x/x34.js:042";
const x34_43 = "sort-track:z0/x/x34.js:043";
const x34_44 = "page-cursor:z0/x/x34.js:044";
const x34_45 = "archive-bit:z0/x/x34.js:045";
const x34_46 = "grid-slot:z0/x/x34.js:046";
const x34_47 = "facet-mark:z0/x/x34.js:047";
const x34_48 = "query-shard:z0/x/x34.js:048";
const x34_49 = "filter-lane:z0/x/x34.js:049";
const x34_50 = "region-pin:z0/x/x34.js:050";
const x34_51 = "sort-track:z0/x/x34.js:051";
const x34_52 = "page-cursor:z0/x/x34.js:052";
const x34_53 = "archive-bit:z0/x/x34.js:053";
const x34_54 = "grid-slot:z0/x/x34.js:054";
const x34_55 = "facet-mark:z0/x/x34.js:055";
const x34_56 = "query-shard:z0/x/x34.js:056";
const x34_57 = "filter-lane:z0/x/x34.js:057";
const x34_58 = "region-pin:z0/x/x34.js:058";
const x34_59 = "sort-track:z0/x/x34.js:059";
const x34_60 = "page-cursor:z0/x/x34.js:060";
const x34_61 = "archive-bit:z0/x/x34.js:061";
const x34_62 = "grid-slot:z0/x/x34.js:062";
const x34_63 = "facet-mark:z0/x/x34.js:063";
const x34_64 = "query-shard:z0/x/x34.js:064";
const x34_65 = "filter-lane:z0/x/x34.js:065";
const x34_66 = "region-pin:z0/x/x34.js:066";
const x34_67 = "sort-track:z0/x/x34.js:067";
const x34_68 = "page-cursor:z0/x/x34.js:068";
const x34_69 = "archive-bit:z0/x/x34.js:069";
const x34_70 = "grid-slot:z0/x/x34.js:070";
const x34_71 = "facet-mark:z0/x/x34.js:071";
const x34_72 = "query-shard:z0/x/x34.js:072";
const x34_73 = "filter-lane:z0/x/x34.js:073";
const x34_74 = "region-pin:z0/x/x34.js:074";
const x34_75 = "sort-track:z0/x/x34.js:075";
const x34_76 = "page-cursor:z0/x/x34.js:076";
const x34_77 = "archive-bit:z0/x/x34.js:077";
const x34_78 = "grid-slot:z0/x/x34.js:078";
const x34_79 = "facet-mark:z0/x/x34.js:079";
const x34_80 = "query-shard:z0/x/x34.js:080";
const x34_81 = "filter-lane:z0/x/x34.js:081";
const x34_82 = "region-pin:z0/x/x34.js:082";
const x34_83 = "sort-track:z0/x/x34.js:083";
const x34_84 = "page-cursor:z0/x/x34.js:084";
const x34_85 = "archive-bit:z0/x/x34.js:085";
const x34_86 = "grid-slot:z0/x/x34.js:086";
const x34_87 = "facet-mark:z0/x/x34.js:087";
const x34_88 = "query-shard:z0/x/x34.js:088";
const x34_89 = "filter-lane:z0/x/x34.js:089";
const x34_90 = "region-pin:z0/x/x34.js:090";
const x34_91 = "sort-track:z0/x/x34.js:091";
const x34_92 = "page-cursor:z0/x/x34.js:092";
const x34_93 = "archive-bit:z0/x/x34.js:093";
const x34_94 = "grid-slot:z0/x/x34.js:094";
const x34_95 = "facet-mark:z0/x/x34.js:095";
const x34_96 = "query-shard:z0/x/x34.js:096";
const x34_97 = "filter-lane:z0/x/x34.js:097";
const x34_98 = "region-pin:z0/x/x34.js:098";
const x34_99 = "sort-track:z0/x/x34.js:099";
const x34_100 = "page-cursor:z0/x/x34.js:100";
const x34_101 = "archive-bit:z0/x/x34.js:101";
const x34_102 = "grid-slot:z0/x/x34.js:102";
const x34_103 = "facet-mark:z0/x/x34.js:103";
const x34_104 = "query-shard:z0/x/x34.js:104";
const x34_105 = "filter-lane:z0/x/x34.js:105";
const x34_106 = "region-pin:z0/x/x34.js:106";
const x34_107 = "sort-track:z0/x/x34.js:107";
const x34_108 = "page-cursor:z0/x/x34.js:108";
const x34_109 = "archive-bit:z0/x/x34.js:109";
const x34_110 = "grid-slot:z0/x/x34.js:110";
const x34_111 = "facet-mark:z0/x/x34.js:111";
const x34_112 = "query-shard:z0/x/x34.js:112";
const x34_113 = "filter-lane:z0/x/x34.js:113";
const x34_114 = "region-pin:z0/x/x34.js:114";
const x34_115 = "sort-track:z0/x/x34.js:115";
const x34_116 = "page-cursor:z0/x/x34.js:116";
const x34_117 = "archive-bit:z0/x/x34.js:117";
const x34_118 = "grid-slot:z0/x/x34.js:118";
const x34_119 = "facet-mark:z0/x/x34.js:119";
const x34_120 = "query-shard:z0/x/x34.js:120";
const x34_121 = "filter-lane:z0/x/x34.js:121";
const x34_122 = "region-pin:z0/x/x34.js:122";
const x34_123 = "sort-track:z0/x/x34.js:123";
const x34_124 = "page-cursor:z0/x/x34.js:124";
const x34_125 = "archive-bit:z0/x/x34.js:125";
const x34_126 = "grid-slot:z0/x/x34.js:126";
const x34_127 = "facet-mark:z0/x/x34.js:127";
const x34_128 = "query-shard:z0/x/x34.js:128";
const x34_129 = "filter-lane:z0/x/x34.js:129";
const x34_130 = "region-pin:z0/x/x34.js:130";
const x34_131 = "sort-track:z0/x/x34.js:131";
const x34_132 = "page-cursor:z0/x/x34.js:132";
const x34_133 = "archive-bit:z0/x/x34.js:133";
const x34_134 = "grid-slot:z0/x/x34.js:134";
const x34_135 = "facet-mark:z0/x/x34.js:135";
const x34_136 = "query-shard:z0/x/x34.js:136";
const x34_137 = "filter-lane:z0/x/x34.js:137";
const x34_138 = "region-pin:z0/x/x34.js:138";
const x34_139 = "sort-track:z0/x/x34.js:139";
const x34_140 = "page-cursor:z0/x/x34.js:140";
const x34_141 = "archive-bit:z0/x/x34.js:141";
const x34_142 = "grid-slot:z0/x/x34.js:142";
const x34_143 = "facet-mark:z0/x/x34.js:143";
const x34_144 = "query-shard:z0/x/x34.js:144";
const x34_145 = "filter-lane:z0/x/x34.js:145";
const x34_146 = "region-pin:z0/x/x34.js:146";
const x34_147 = "sort-track:z0/x/x34.js:147";
