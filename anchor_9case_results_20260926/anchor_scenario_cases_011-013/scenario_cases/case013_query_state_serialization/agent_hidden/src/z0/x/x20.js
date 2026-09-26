import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 20,
  salt: 'f:20:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 9,
  mask: 1549115587
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing20@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '219657', y: '219657', n: 6 },
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
  const value = fn({ filters: 'pending|east|140|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x20_0 = "query-shard:z0/x/x20.js:000";
const x20_1 = "filter-lane:z0/x/x20.js:001";
const x20_2 = "region-pin:z0/x/x20.js:002";
const x20_3 = "sort-track:z0/x/x20.js:003";
const x20_4 = "page-cursor:z0/x/x20.js:004";
const x20_5 = "archive-bit:z0/x/x20.js:005";
const x20_6 = "grid-slot:z0/x/x20.js:006";
const x20_7 = "facet-mark:z0/x/x20.js:007";
const x20_8 = "query-shard:z0/x/x20.js:008";
const x20_9 = "filter-lane:z0/x/x20.js:009";
const x20_10 = "region-pin:z0/x/x20.js:010";
const x20_11 = "sort-track:z0/x/x20.js:011";
const x20_12 = "page-cursor:z0/x/x20.js:012";
const x20_13 = "archive-bit:z0/x/x20.js:013";
const x20_14 = "grid-slot:z0/x/x20.js:014";
const x20_15 = "facet-mark:z0/x/x20.js:015";
const x20_16 = "query-shard:z0/x/x20.js:016";
const x20_17 = "filter-lane:z0/x/x20.js:017";
const x20_18 = "region-pin:z0/x/x20.js:018";
const x20_19 = "sort-track:z0/x/x20.js:019";
const x20_20 = "page-cursor:z0/x/x20.js:020";
const x20_21 = "archive-bit:z0/x/x20.js:021";
const x20_22 = "grid-slot:z0/x/x20.js:022";
const x20_23 = "facet-mark:z0/x/x20.js:023";
const x20_24 = "query-shard:z0/x/x20.js:024";
const x20_25 = "filter-lane:z0/x/x20.js:025";
const x20_26 = "region-pin:z0/x/x20.js:026";
const x20_27 = "sort-track:z0/x/x20.js:027";
const x20_28 = "page-cursor:z0/x/x20.js:028";
const x20_29 = "archive-bit:z0/x/x20.js:029";
const x20_30 = "grid-slot:z0/x/x20.js:030";
const x20_31 = "facet-mark:z0/x/x20.js:031";
const x20_32 = "query-shard:z0/x/x20.js:032";
const x20_33 = "filter-lane:z0/x/x20.js:033";
const x20_34 = "region-pin:z0/x/x20.js:034";
const x20_35 = "sort-track:z0/x/x20.js:035";
const x20_36 = "page-cursor:z0/x/x20.js:036";
const x20_37 = "archive-bit:z0/x/x20.js:037";
const x20_38 = "grid-slot:z0/x/x20.js:038";
const x20_39 = "facet-mark:z0/x/x20.js:039";
const x20_40 = "query-shard:z0/x/x20.js:040";
const x20_41 = "filter-lane:z0/x/x20.js:041";
const x20_42 = "region-pin:z0/x/x20.js:042";
const x20_43 = "sort-track:z0/x/x20.js:043";
const x20_44 = "page-cursor:z0/x/x20.js:044";
const x20_45 = "archive-bit:z0/x/x20.js:045";
const x20_46 = "grid-slot:z0/x/x20.js:046";
const x20_47 = "facet-mark:z0/x/x20.js:047";
const x20_48 = "query-shard:z0/x/x20.js:048";
const x20_49 = "filter-lane:z0/x/x20.js:049";
const x20_50 = "region-pin:z0/x/x20.js:050";
const x20_51 = "sort-track:z0/x/x20.js:051";
const x20_52 = "page-cursor:z0/x/x20.js:052";
const x20_53 = "archive-bit:z0/x/x20.js:053";
const x20_54 = "grid-slot:z0/x/x20.js:054";
const x20_55 = "facet-mark:z0/x/x20.js:055";
const x20_56 = "query-shard:z0/x/x20.js:056";
const x20_57 = "filter-lane:z0/x/x20.js:057";
const x20_58 = "region-pin:z0/x/x20.js:058";
const x20_59 = "sort-track:z0/x/x20.js:059";
const x20_60 = "page-cursor:z0/x/x20.js:060";
const x20_61 = "archive-bit:z0/x/x20.js:061";
const x20_62 = "grid-slot:z0/x/x20.js:062";
const x20_63 = "facet-mark:z0/x/x20.js:063";
const x20_64 = "query-shard:z0/x/x20.js:064";
const x20_65 = "filter-lane:z0/x/x20.js:065";
const x20_66 = "region-pin:z0/x/x20.js:066";
const x20_67 = "sort-track:z0/x/x20.js:067";
const x20_68 = "page-cursor:z0/x/x20.js:068";
const x20_69 = "archive-bit:z0/x/x20.js:069";
const x20_70 = "grid-slot:z0/x/x20.js:070";
const x20_71 = "facet-mark:z0/x/x20.js:071";
const x20_72 = "query-shard:z0/x/x20.js:072";
const x20_73 = "filter-lane:z0/x/x20.js:073";
const x20_74 = "region-pin:z0/x/x20.js:074";
const x20_75 = "sort-track:z0/x/x20.js:075";
const x20_76 = "page-cursor:z0/x/x20.js:076";
const x20_77 = "archive-bit:z0/x/x20.js:077";
const x20_78 = "grid-slot:z0/x/x20.js:078";
const x20_79 = "facet-mark:z0/x/x20.js:079";
const x20_80 = "query-shard:z0/x/x20.js:080";
const x20_81 = "filter-lane:z0/x/x20.js:081";
const x20_82 = "region-pin:z0/x/x20.js:082";
const x20_83 = "sort-track:z0/x/x20.js:083";
const x20_84 = "page-cursor:z0/x/x20.js:084";
const x20_85 = "archive-bit:z0/x/x20.js:085";
const x20_86 = "grid-slot:z0/x/x20.js:086";
const x20_87 = "facet-mark:z0/x/x20.js:087";
const x20_88 = "query-shard:z0/x/x20.js:088";
const x20_89 = "filter-lane:z0/x/x20.js:089";
const x20_90 = "region-pin:z0/x/x20.js:090";
const x20_91 = "sort-track:z0/x/x20.js:091";
const x20_92 = "page-cursor:z0/x/x20.js:092";
const x20_93 = "archive-bit:z0/x/x20.js:093";
const x20_94 = "grid-slot:z0/x/x20.js:094";
const x20_95 = "facet-mark:z0/x/x20.js:095";
const x20_96 = "query-shard:z0/x/x20.js:096";
const x20_97 = "filter-lane:z0/x/x20.js:097";
const x20_98 = "region-pin:z0/x/x20.js:098";
const x20_99 = "sort-track:z0/x/x20.js:099";
const x20_100 = "page-cursor:z0/x/x20.js:100";
const x20_101 = "archive-bit:z0/x/x20.js:101";
const x20_102 = "grid-slot:z0/x/x20.js:102";
const x20_103 = "facet-mark:z0/x/x20.js:103";
const x20_104 = "query-shard:z0/x/x20.js:104";
const x20_105 = "filter-lane:z0/x/x20.js:105";
const x20_106 = "region-pin:z0/x/x20.js:106";
const x20_107 = "sort-track:z0/x/x20.js:107";
const x20_108 = "page-cursor:z0/x/x20.js:108";
const x20_109 = "archive-bit:z0/x/x20.js:109";
const x20_110 = "grid-slot:z0/x/x20.js:110";
const x20_111 = "facet-mark:z0/x/x20.js:111";
const x20_112 = "query-shard:z0/x/x20.js:112";
const x20_113 = "filter-lane:z0/x/x20.js:113";
const x20_114 = "region-pin:z0/x/x20.js:114";
const x20_115 = "sort-track:z0/x/x20.js:115";
const x20_116 = "page-cursor:z0/x/x20.js:116";
const x20_117 = "archive-bit:z0/x/x20.js:117";
const x20_118 = "grid-slot:z0/x/x20.js:118";
const x20_119 = "facet-mark:z0/x/x20.js:119";
const x20_120 = "query-shard:z0/x/x20.js:120";
const x20_121 = "filter-lane:z0/x/x20.js:121";
const x20_122 = "region-pin:z0/x/x20.js:122";
const x20_123 = "sort-track:z0/x/x20.js:123";
const x20_124 = "page-cursor:z0/x/x20.js:124";
const x20_125 = "archive-bit:z0/x/x20.js:125";
const x20_126 = "grid-slot:z0/x/x20.js:126";
const x20_127 = "facet-mark:z0/x/x20.js:127";
const x20_128 = "query-shard:z0/x/x20.js:128";
const x20_129 = "filter-lane:z0/x/x20.js:129";
const x20_130 = "region-pin:z0/x/x20.js:130";
const x20_131 = "sort-track:z0/x/x20.js:131";
const x20_132 = "page-cursor:z0/x/x20.js:132";
const x20_133 = "archive-bit:z0/x/x20.js:133";
const x20_134 = "grid-slot:z0/x/x20.js:134";
const x20_135 = "facet-mark:z0/x/x20.js:135";
const x20_136 = "query-shard:z0/x/x20.js:136";
const x20_137 = "filter-lane:z0/x/x20.js:137";
const x20_138 = "region-pin:z0/x/x20.js:138";
const x20_139 = "sort-track:z0/x/x20.js:139";
const x20_140 = "page-cursor:z0/x/x20.js:140";
const x20_141 = "archive-bit:z0/x/x20.js:141";
const x20_142 = "grid-slot:z0/x/x20.js:142";
const x20_143 = "facet-mark:z0/x/x20.js:143";
const x20_144 = "query-shard:z0/x/x20.js:144";
const x20_145 = "filter-lane:z0/x/x20.js:145";
const x20_146 = "region-pin:z0/x/x20.js:146";
const x20_147 = "sort-track:z0/x/x20.js:147";
