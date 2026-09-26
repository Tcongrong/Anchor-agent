import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 16,
  salt: 'f:16:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 5,
  mask: 3816274431
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing16@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '215749', y: '215749', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 13) + '~' + (cfg.slot + 7).toString(36) + 'gx';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|136|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x16_0 = "query-shard:z0/x/x16.js:000";
const x16_1 = "filter-lane:z0/x/x16.js:001";
const x16_2 = "region-pin:z0/x/x16.js:002";
const x16_3 = "sort-track:z0/x/x16.js:003";
const x16_4 = "page-cursor:z0/x/x16.js:004";
const x16_5 = "archive-bit:z0/x/x16.js:005";
const x16_6 = "grid-slot:z0/x/x16.js:006";
const x16_7 = "facet-mark:z0/x/x16.js:007";
const x16_8 = "query-shard:z0/x/x16.js:008";
const x16_9 = "filter-lane:z0/x/x16.js:009";
const x16_10 = "region-pin:z0/x/x16.js:010";
const x16_11 = "sort-track:z0/x/x16.js:011";
const x16_12 = "page-cursor:z0/x/x16.js:012";
const x16_13 = "archive-bit:z0/x/x16.js:013";
const x16_14 = "grid-slot:z0/x/x16.js:014";
const x16_15 = "facet-mark:z0/x/x16.js:015";
const x16_16 = "query-shard:z0/x/x16.js:016";
const x16_17 = "filter-lane:z0/x/x16.js:017";
const x16_18 = "region-pin:z0/x/x16.js:018";
const x16_19 = "sort-track:z0/x/x16.js:019";
const x16_20 = "page-cursor:z0/x/x16.js:020";
const x16_21 = "archive-bit:z0/x/x16.js:021";
const x16_22 = "grid-slot:z0/x/x16.js:022";
const x16_23 = "facet-mark:z0/x/x16.js:023";
const x16_24 = "query-shard:z0/x/x16.js:024";
const x16_25 = "filter-lane:z0/x/x16.js:025";
const x16_26 = "region-pin:z0/x/x16.js:026";
const x16_27 = "sort-track:z0/x/x16.js:027";
const x16_28 = "page-cursor:z0/x/x16.js:028";
const x16_29 = "archive-bit:z0/x/x16.js:029";
const x16_30 = "grid-slot:z0/x/x16.js:030";
const x16_31 = "facet-mark:z0/x/x16.js:031";
const x16_32 = "query-shard:z0/x/x16.js:032";
const x16_33 = "filter-lane:z0/x/x16.js:033";
const x16_34 = "region-pin:z0/x/x16.js:034";
const x16_35 = "sort-track:z0/x/x16.js:035";
const x16_36 = "page-cursor:z0/x/x16.js:036";
const x16_37 = "archive-bit:z0/x/x16.js:037";
const x16_38 = "grid-slot:z0/x/x16.js:038";
const x16_39 = "facet-mark:z0/x/x16.js:039";
const x16_40 = "query-shard:z0/x/x16.js:040";
const x16_41 = "filter-lane:z0/x/x16.js:041";
const x16_42 = "region-pin:z0/x/x16.js:042";
const x16_43 = "sort-track:z0/x/x16.js:043";
const x16_44 = "page-cursor:z0/x/x16.js:044";
const x16_45 = "archive-bit:z0/x/x16.js:045";
const x16_46 = "grid-slot:z0/x/x16.js:046";
const x16_47 = "facet-mark:z0/x/x16.js:047";
const x16_48 = "query-shard:z0/x/x16.js:048";
const x16_49 = "filter-lane:z0/x/x16.js:049";
const x16_50 = "region-pin:z0/x/x16.js:050";
const x16_51 = "sort-track:z0/x/x16.js:051";
const x16_52 = "page-cursor:z0/x/x16.js:052";
const x16_53 = "archive-bit:z0/x/x16.js:053";
const x16_54 = "grid-slot:z0/x/x16.js:054";
const x16_55 = "facet-mark:z0/x/x16.js:055";
const x16_56 = "query-shard:z0/x/x16.js:056";
const x16_57 = "filter-lane:z0/x/x16.js:057";
const x16_58 = "region-pin:z0/x/x16.js:058";
const x16_59 = "sort-track:z0/x/x16.js:059";
const x16_60 = "page-cursor:z0/x/x16.js:060";
const x16_61 = "archive-bit:z0/x/x16.js:061";
const x16_62 = "grid-slot:z0/x/x16.js:062";
const x16_63 = "facet-mark:z0/x/x16.js:063";
const x16_64 = "query-shard:z0/x/x16.js:064";
const x16_65 = "filter-lane:z0/x/x16.js:065";
const x16_66 = "region-pin:z0/x/x16.js:066";
const x16_67 = "sort-track:z0/x/x16.js:067";
const x16_68 = "page-cursor:z0/x/x16.js:068";
const x16_69 = "archive-bit:z0/x/x16.js:069";
const x16_70 = "grid-slot:z0/x/x16.js:070";
const x16_71 = "facet-mark:z0/x/x16.js:071";
const x16_72 = "query-shard:z0/x/x16.js:072";
const x16_73 = "filter-lane:z0/x/x16.js:073";
const x16_74 = "region-pin:z0/x/x16.js:074";
const x16_75 = "sort-track:z0/x/x16.js:075";
const x16_76 = "page-cursor:z0/x/x16.js:076";
const x16_77 = "archive-bit:z0/x/x16.js:077";
const x16_78 = "grid-slot:z0/x/x16.js:078";
const x16_79 = "facet-mark:z0/x/x16.js:079";
const x16_80 = "query-shard:z0/x/x16.js:080";
const x16_81 = "filter-lane:z0/x/x16.js:081";
const x16_82 = "region-pin:z0/x/x16.js:082";
const x16_83 = "sort-track:z0/x/x16.js:083";
const x16_84 = "page-cursor:z0/x/x16.js:084";
const x16_85 = "archive-bit:z0/x/x16.js:085";
const x16_86 = "grid-slot:z0/x/x16.js:086";
const x16_87 = "facet-mark:z0/x/x16.js:087";
const x16_88 = "query-shard:z0/x/x16.js:088";
const x16_89 = "filter-lane:z0/x/x16.js:089";
const x16_90 = "region-pin:z0/x/x16.js:090";
const x16_91 = "sort-track:z0/x/x16.js:091";
const x16_92 = "page-cursor:z0/x/x16.js:092";
const x16_93 = "archive-bit:z0/x/x16.js:093";
const x16_94 = "grid-slot:z0/x/x16.js:094";
const x16_95 = "facet-mark:z0/x/x16.js:095";
const x16_96 = "query-shard:z0/x/x16.js:096";
const x16_97 = "filter-lane:z0/x/x16.js:097";
const x16_98 = "region-pin:z0/x/x16.js:098";
const x16_99 = "sort-track:z0/x/x16.js:099";
const x16_100 = "page-cursor:z0/x/x16.js:100";
const x16_101 = "archive-bit:z0/x/x16.js:101";
const x16_102 = "grid-slot:z0/x/x16.js:102";
const x16_103 = "facet-mark:z0/x/x16.js:103";
const x16_104 = "query-shard:z0/x/x16.js:104";
const x16_105 = "filter-lane:z0/x/x16.js:105";
const x16_106 = "region-pin:z0/x/x16.js:106";
const x16_107 = "sort-track:z0/x/x16.js:107";
const x16_108 = "page-cursor:z0/x/x16.js:108";
const x16_109 = "archive-bit:z0/x/x16.js:109";
const x16_110 = "grid-slot:z0/x/x16.js:110";
const x16_111 = "facet-mark:z0/x/x16.js:111";
const x16_112 = "query-shard:z0/x/x16.js:112";
const x16_113 = "filter-lane:z0/x/x16.js:113";
const x16_114 = "region-pin:z0/x/x16.js:114";
const x16_115 = "sort-track:z0/x/x16.js:115";
const x16_116 = "page-cursor:z0/x/x16.js:116";
const x16_117 = "archive-bit:z0/x/x16.js:117";
const x16_118 = "grid-slot:z0/x/x16.js:118";
const x16_119 = "facet-mark:z0/x/x16.js:119";
const x16_120 = "query-shard:z0/x/x16.js:120";
const x16_121 = "filter-lane:z0/x/x16.js:121";
const x16_122 = "region-pin:z0/x/x16.js:122";
const x16_123 = "sort-track:z0/x/x16.js:123";
const x16_124 = "page-cursor:z0/x/x16.js:124";
const x16_125 = "archive-bit:z0/x/x16.js:125";
const x16_126 = "grid-slot:z0/x/x16.js:126";
const x16_127 = "facet-mark:z0/x/x16.js:127";
const x16_128 = "query-shard:z0/x/x16.js:128";
const x16_129 = "filter-lane:z0/x/x16.js:129";
const x16_130 = "region-pin:z0/x/x16.js:130";
const x16_131 = "sort-track:z0/x/x16.js:131";
const x16_132 = "page-cursor:z0/x/x16.js:132";
const x16_133 = "archive-bit:z0/x/x16.js:133";
const x16_134 = "grid-slot:z0/x/x16.js:134";
const x16_135 = "facet-mark:z0/x/x16.js:135";
const x16_136 = "query-shard:z0/x/x16.js:136";
const x16_137 = "filter-lane:z0/x/x16.js:137";
const x16_138 = "region-pin:z0/x/x16.js:138";
const x16_139 = "sort-track:z0/x/x16.js:139";
const x16_140 = "page-cursor:z0/x/x16.js:140";
const x16_141 = "archive-bit:z0/x/x16.js:141";
const x16_142 = "grid-slot:z0/x/x16.js:142";
const x16_143 = "facet-mark:z0/x/x16.js:143";
const x16_144 = "query-shard:z0/x/x16.js:144";
const x16_145 = "filter-lane:z0/x/x16.js:145";
const x16_146 = "region-pin:z0/x/x16.js:146";
const x16_147 = "sort-track:z0/x/x16.js:147";
