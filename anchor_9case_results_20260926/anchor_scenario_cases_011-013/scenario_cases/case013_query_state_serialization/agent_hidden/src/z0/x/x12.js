import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 12,
  salt: 'f:12:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 8,
  mask: 1788465979
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing12@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '211841', y: '211841', n: 6 },
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
  const value = fn({ filters: 'pending|east|132|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x12_0 = "query-shard:z0/x/x12.js:000";
const x12_1 = "filter-lane:z0/x/x12.js:001";
const x12_2 = "region-pin:z0/x/x12.js:002";
const x12_3 = "sort-track:z0/x/x12.js:003";
const x12_4 = "page-cursor:z0/x/x12.js:004";
const x12_5 = "archive-bit:z0/x/x12.js:005";
const x12_6 = "grid-slot:z0/x/x12.js:006";
const x12_7 = "facet-mark:z0/x/x12.js:007";
const x12_8 = "query-shard:z0/x/x12.js:008";
const x12_9 = "filter-lane:z0/x/x12.js:009";
const x12_10 = "region-pin:z0/x/x12.js:010";
const x12_11 = "sort-track:z0/x/x12.js:011";
const x12_12 = "page-cursor:z0/x/x12.js:012";
const x12_13 = "archive-bit:z0/x/x12.js:013";
const x12_14 = "grid-slot:z0/x/x12.js:014";
const x12_15 = "facet-mark:z0/x/x12.js:015";
const x12_16 = "query-shard:z0/x/x12.js:016";
const x12_17 = "filter-lane:z0/x/x12.js:017";
const x12_18 = "region-pin:z0/x/x12.js:018";
const x12_19 = "sort-track:z0/x/x12.js:019";
const x12_20 = "page-cursor:z0/x/x12.js:020";
const x12_21 = "archive-bit:z0/x/x12.js:021";
const x12_22 = "grid-slot:z0/x/x12.js:022";
const x12_23 = "facet-mark:z0/x/x12.js:023";
const x12_24 = "query-shard:z0/x/x12.js:024";
const x12_25 = "filter-lane:z0/x/x12.js:025";
const x12_26 = "region-pin:z0/x/x12.js:026";
const x12_27 = "sort-track:z0/x/x12.js:027";
const x12_28 = "page-cursor:z0/x/x12.js:028";
const x12_29 = "archive-bit:z0/x/x12.js:029";
const x12_30 = "grid-slot:z0/x/x12.js:030";
const x12_31 = "facet-mark:z0/x/x12.js:031";
const x12_32 = "query-shard:z0/x/x12.js:032";
const x12_33 = "filter-lane:z0/x/x12.js:033";
const x12_34 = "region-pin:z0/x/x12.js:034";
const x12_35 = "sort-track:z0/x/x12.js:035";
const x12_36 = "page-cursor:z0/x/x12.js:036";
const x12_37 = "archive-bit:z0/x/x12.js:037";
const x12_38 = "grid-slot:z0/x/x12.js:038";
const x12_39 = "facet-mark:z0/x/x12.js:039";
const x12_40 = "query-shard:z0/x/x12.js:040";
const x12_41 = "filter-lane:z0/x/x12.js:041";
const x12_42 = "region-pin:z0/x/x12.js:042";
const x12_43 = "sort-track:z0/x/x12.js:043";
const x12_44 = "page-cursor:z0/x/x12.js:044";
const x12_45 = "archive-bit:z0/x/x12.js:045";
const x12_46 = "grid-slot:z0/x/x12.js:046";
const x12_47 = "facet-mark:z0/x/x12.js:047";
const x12_48 = "query-shard:z0/x/x12.js:048";
const x12_49 = "filter-lane:z0/x/x12.js:049";
const x12_50 = "region-pin:z0/x/x12.js:050";
const x12_51 = "sort-track:z0/x/x12.js:051";
const x12_52 = "page-cursor:z0/x/x12.js:052";
const x12_53 = "archive-bit:z0/x/x12.js:053";
const x12_54 = "grid-slot:z0/x/x12.js:054";
const x12_55 = "facet-mark:z0/x/x12.js:055";
const x12_56 = "query-shard:z0/x/x12.js:056";
const x12_57 = "filter-lane:z0/x/x12.js:057";
const x12_58 = "region-pin:z0/x/x12.js:058";
const x12_59 = "sort-track:z0/x/x12.js:059";
const x12_60 = "page-cursor:z0/x/x12.js:060";
const x12_61 = "archive-bit:z0/x/x12.js:061";
const x12_62 = "grid-slot:z0/x/x12.js:062";
const x12_63 = "facet-mark:z0/x/x12.js:063";
const x12_64 = "query-shard:z0/x/x12.js:064";
const x12_65 = "filter-lane:z0/x/x12.js:065";
const x12_66 = "region-pin:z0/x/x12.js:066";
const x12_67 = "sort-track:z0/x/x12.js:067";
const x12_68 = "page-cursor:z0/x/x12.js:068";
const x12_69 = "archive-bit:z0/x/x12.js:069";
const x12_70 = "grid-slot:z0/x/x12.js:070";
const x12_71 = "facet-mark:z0/x/x12.js:071";
const x12_72 = "query-shard:z0/x/x12.js:072";
const x12_73 = "filter-lane:z0/x/x12.js:073";
const x12_74 = "region-pin:z0/x/x12.js:074";
const x12_75 = "sort-track:z0/x/x12.js:075";
const x12_76 = "page-cursor:z0/x/x12.js:076";
const x12_77 = "archive-bit:z0/x/x12.js:077";
const x12_78 = "grid-slot:z0/x/x12.js:078";
const x12_79 = "facet-mark:z0/x/x12.js:079";
const x12_80 = "query-shard:z0/x/x12.js:080";
const x12_81 = "filter-lane:z0/x/x12.js:081";
const x12_82 = "region-pin:z0/x/x12.js:082";
const x12_83 = "sort-track:z0/x/x12.js:083";
const x12_84 = "page-cursor:z0/x/x12.js:084";
const x12_85 = "archive-bit:z0/x/x12.js:085";
const x12_86 = "grid-slot:z0/x/x12.js:086";
const x12_87 = "facet-mark:z0/x/x12.js:087";
const x12_88 = "query-shard:z0/x/x12.js:088";
const x12_89 = "filter-lane:z0/x/x12.js:089";
const x12_90 = "region-pin:z0/x/x12.js:090";
const x12_91 = "sort-track:z0/x/x12.js:091";
const x12_92 = "page-cursor:z0/x/x12.js:092";
const x12_93 = "archive-bit:z0/x/x12.js:093";
const x12_94 = "grid-slot:z0/x/x12.js:094";
const x12_95 = "facet-mark:z0/x/x12.js:095";
const x12_96 = "query-shard:z0/x/x12.js:096";
const x12_97 = "filter-lane:z0/x/x12.js:097";
const x12_98 = "region-pin:z0/x/x12.js:098";
const x12_99 = "sort-track:z0/x/x12.js:099";
const x12_100 = "page-cursor:z0/x/x12.js:100";
const x12_101 = "archive-bit:z0/x/x12.js:101";
const x12_102 = "grid-slot:z0/x/x12.js:102";
const x12_103 = "facet-mark:z0/x/x12.js:103";
const x12_104 = "query-shard:z0/x/x12.js:104";
const x12_105 = "filter-lane:z0/x/x12.js:105";
const x12_106 = "region-pin:z0/x/x12.js:106";
const x12_107 = "sort-track:z0/x/x12.js:107";
const x12_108 = "page-cursor:z0/x/x12.js:108";
const x12_109 = "archive-bit:z0/x/x12.js:109";
const x12_110 = "grid-slot:z0/x/x12.js:110";
const x12_111 = "facet-mark:z0/x/x12.js:111";
const x12_112 = "query-shard:z0/x/x12.js:112";
const x12_113 = "filter-lane:z0/x/x12.js:113";
const x12_114 = "region-pin:z0/x/x12.js:114";
const x12_115 = "sort-track:z0/x/x12.js:115";
const x12_116 = "page-cursor:z0/x/x12.js:116";
const x12_117 = "archive-bit:z0/x/x12.js:117";
const x12_118 = "grid-slot:z0/x/x12.js:118";
const x12_119 = "facet-mark:z0/x/x12.js:119";
const x12_120 = "query-shard:z0/x/x12.js:120";
const x12_121 = "filter-lane:z0/x/x12.js:121";
const x12_122 = "region-pin:z0/x/x12.js:122";
const x12_123 = "sort-track:z0/x/x12.js:123";
const x12_124 = "page-cursor:z0/x/x12.js:124";
const x12_125 = "archive-bit:z0/x/x12.js:125";
const x12_126 = "grid-slot:z0/x/x12.js:126";
const x12_127 = "facet-mark:z0/x/x12.js:127";
const x12_128 = "query-shard:z0/x/x12.js:128";
const x12_129 = "filter-lane:z0/x/x12.js:129";
const x12_130 = "region-pin:z0/x/x12.js:130";
const x12_131 = "sort-track:z0/x/x12.js:131";
const x12_132 = "page-cursor:z0/x/x12.js:132";
const x12_133 = "archive-bit:z0/x/x12.js:133";
const x12_134 = "grid-slot:z0/x/x12.js:134";
const x12_135 = "facet-mark:z0/x/x12.js:135";
const x12_136 = "query-shard:z0/x/x12.js:136";
const x12_137 = "filter-lane:z0/x/x12.js:137";
const x12_138 = "region-pin:z0/x/x12.js:138";
const x12_139 = "sort-track:z0/x/x12.js:139";
const x12_140 = "page-cursor:z0/x/x12.js:140";
const x12_141 = "archive-bit:z0/x/x12.js:141";
const x12_142 = "grid-slot:z0/x/x12.js:142";
const x12_143 = "facet-mark:z0/x/x12.js:143";
const x12_144 = "query-shard:z0/x/x12.js:144";
const x12_145 = "filter-lane:z0/x/x12.js:145";
const x12_146 = "region-pin:z0/x/x12.js:146";
const x12_147 = "sort-track:z0/x/x12.js:147";
