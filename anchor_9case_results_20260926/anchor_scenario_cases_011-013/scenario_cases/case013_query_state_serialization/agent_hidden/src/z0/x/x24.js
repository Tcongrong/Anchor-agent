import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 24,
  salt: 'f:24:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 6,
  mask: 3576924039
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing24@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '223565', y: '223565', n: 6 },
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
  const value = fn({ filters: 'pending|east|144|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x24_0 = "query-shard:z0/x/x24.js:000";
const x24_1 = "filter-lane:z0/x/x24.js:001";
const x24_2 = "region-pin:z0/x/x24.js:002";
const x24_3 = "sort-track:z0/x/x24.js:003";
const x24_4 = "page-cursor:z0/x/x24.js:004";
const x24_5 = "archive-bit:z0/x/x24.js:005";
const x24_6 = "grid-slot:z0/x/x24.js:006";
const x24_7 = "facet-mark:z0/x/x24.js:007";
const x24_8 = "query-shard:z0/x/x24.js:008";
const x24_9 = "filter-lane:z0/x/x24.js:009";
const x24_10 = "region-pin:z0/x/x24.js:010";
const x24_11 = "sort-track:z0/x/x24.js:011";
const x24_12 = "page-cursor:z0/x/x24.js:012";
const x24_13 = "archive-bit:z0/x/x24.js:013";
const x24_14 = "grid-slot:z0/x/x24.js:014";
const x24_15 = "facet-mark:z0/x/x24.js:015";
const x24_16 = "query-shard:z0/x/x24.js:016";
const x24_17 = "filter-lane:z0/x/x24.js:017";
const x24_18 = "region-pin:z0/x/x24.js:018";
const x24_19 = "sort-track:z0/x/x24.js:019";
const x24_20 = "page-cursor:z0/x/x24.js:020";
const x24_21 = "archive-bit:z0/x/x24.js:021";
const x24_22 = "grid-slot:z0/x/x24.js:022";
const x24_23 = "facet-mark:z0/x/x24.js:023";
const x24_24 = "query-shard:z0/x/x24.js:024";
const x24_25 = "filter-lane:z0/x/x24.js:025";
const x24_26 = "region-pin:z0/x/x24.js:026";
const x24_27 = "sort-track:z0/x/x24.js:027";
const x24_28 = "page-cursor:z0/x/x24.js:028";
const x24_29 = "archive-bit:z0/x/x24.js:029";
const x24_30 = "grid-slot:z0/x/x24.js:030";
const x24_31 = "facet-mark:z0/x/x24.js:031";
const x24_32 = "query-shard:z0/x/x24.js:032";
const x24_33 = "filter-lane:z0/x/x24.js:033";
const x24_34 = "region-pin:z0/x/x24.js:034";
const x24_35 = "sort-track:z0/x/x24.js:035";
const x24_36 = "page-cursor:z0/x/x24.js:036";
const x24_37 = "archive-bit:z0/x/x24.js:037";
const x24_38 = "grid-slot:z0/x/x24.js:038";
const x24_39 = "facet-mark:z0/x/x24.js:039";
const x24_40 = "query-shard:z0/x/x24.js:040";
const x24_41 = "filter-lane:z0/x/x24.js:041";
const x24_42 = "region-pin:z0/x/x24.js:042";
const x24_43 = "sort-track:z0/x/x24.js:043";
const x24_44 = "page-cursor:z0/x/x24.js:044";
const x24_45 = "archive-bit:z0/x/x24.js:045";
const x24_46 = "grid-slot:z0/x/x24.js:046";
const x24_47 = "facet-mark:z0/x/x24.js:047";
const x24_48 = "query-shard:z0/x/x24.js:048";
const x24_49 = "filter-lane:z0/x/x24.js:049";
const x24_50 = "region-pin:z0/x/x24.js:050";
const x24_51 = "sort-track:z0/x/x24.js:051";
const x24_52 = "page-cursor:z0/x/x24.js:052";
const x24_53 = "archive-bit:z0/x/x24.js:053";
const x24_54 = "grid-slot:z0/x/x24.js:054";
const x24_55 = "facet-mark:z0/x/x24.js:055";
const x24_56 = "query-shard:z0/x/x24.js:056";
const x24_57 = "filter-lane:z0/x/x24.js:057";
const x24_58 = "region-pin:z0/x/x24.js:058";
const x24_59 = "sort-track:z0/x/x24.js:059";
const x24_60 = "page-cursor:z0/x/x24.js:060";
const x24_61 = "archive-bit:z0/x/x24.js:061";
const x24_62 = "grid-slot:z0/x/x24.js:062";
const x24_63 = "facet-mark:z0/x/x24.js:063";
const x24_64 = "query-shard:z0/x/x24.js:064";
const x24_65 = "filter-lane:z0/x/x24.js:065";
const x24_66 = "region-pin:z0/x/x24.js:066";
const x24_67 = "sort-track:z0/x/x24.js:067";
const x24_68 = "page-cursor:z0/x/x24.js:068";
const x24_69 = "archive-bit:z0/x/x24.js:069";
const x24_70 = "grid-slot:z0/x/x24.js:070";
const x24_71 = "facet-mark:z0/x/x24.js:071";
const x24_72 = "query-shard:z0/x/x24.js:072";
const x24_73 = "filter-lane:z0/x/x24.js:073";
const x24_74 = "region-pin:z0/x/x24.js:074";
const x24_75 = "sort-track:z0/x/x24.js:075";
const x24_76 = "page-cursor:z0/x/x24.js:076";
const x24_77 = "archive-bit:z0/x/x24.js:077";
const x24_78 = "grid-slot:z0/x/x24.js:078";
const x24_79 = "facet-mark:z0/x/x24.js:079";
const x24_80 = "query-shard:z0/x/x24.js:080";
const x24_81 = "filter-lane:z0/x/x24.js:081";
const x24_82 = "region-pin:z0/x/x24.js:082";
const x24_83 = "sort-track:z0/x/x24.js:083";
const x24_84 = "page-cursor:z0/x/x24.js:084";
const x24_85 = "archive-bit:z0/x/x24.js:085";
const x24_86 = "grid-slot:z0/x/x24.js:086";
const x24_87 = "facet-mark:z0/x/x24.js:087";
const x24_88 = "query-shard:z0/x/x24.js:088";
const x24_89 = "filter-lane:z0/x/x24.js:089";
const x24_90 = "region-pin:z0/x/x24.js:090";
const x24_91 = "sort-track:z0/x/x24.js:091";
const x24_92 = "page-cursor:z0/x/x24.js:092";
const x24_93 = "archive-bit:z0/x/x24.js:093";
const x24_94 = "grid-slot:z0/x/x24.js:094";
const x24_95 = "facet-mark:z0/x/x24.js:095";
const x24_96 = "query-shard:z0/x/x24.js:096";
const x24_97 = "filter-lane:z0/x/x24.js:097";
const x24_98 = "region-pin:z0/x/x24.js:098";
const x24_99 = "sort-track:z0/x/x24.js:099";
const x24_100 = "page-cursor:z0/x/x24.js:100";
const x24_101 = "archive-bit:z0/x/x24.js:101";
const x24_102 = "grid-slot:z0/x/x24.js:102";
const x24_103 = "facet-mark:z0/x/x24.js:103";
const x24_104 = "query-shard:z0/x/x24.js:104";
const x24_105 = "filter-lane:z0/x/x24.js:105";
const x24_106 = "region-pin:z0/x/x24.js:106";
const x24_107 = "sort-track:z0/x/x24.js:107";
const x24_108 = "page-cursor:z0/x/x24.js:108";
const x24_109 = "archive-bit:z0/x/x24.js:109";
const x24_110 = "grid-slot:z0/x/x24.js:110";
const x24_111 = "facet-mark:z0/x/x24.js:111";
const x24_112 = "query-shard:z0/x/x24.js:112";
const x24_113 = "filter-lane:z0/x/x24.js:113";
const x24_114 = "region-pin:z0/x/x24.js:114";
const x24_115 = "sort-track:z0/x/x24.js:115";
const x24_116 = "page-cursor:z0/x/x24.js:116";
const x24_117 = "archive-bit:z0/x/x24.js:117";
const x24_118 = "grid-slot:z0/x/x24.js:118";
const x24_119 = "facet-mark:z0/x/x24.js:119";
const x24_120 = "query-shard:z0/x/x24.js:120";
const x24_121 = "filter-lane:z0/x/x24.js:121";
const x24_122 = "region-pin:z0/x/x24.js:122";
const x24_123 = "sort-track:z0/x/x24.js:123";
const x24_124 = "page-cursor:z0/x/x24.js:124";
const x24_125 = "archive-bit:z0/x/x24.js:125";
const x24_126 = "grid-slot:z0/x/x24.js:126";
const x24_127 = "facet-mark:z0/x/x24.js:127";
const x24_128 = "query-shard:z0/x/x24.js:128";
const x24_129 = "filter-lane:z0/x/x24.js:129";
const x24_130 = "region-pin:z0/x/x24.js:130";
const x24_131 = "sort-track:z0/x/x24.js:131";
const x24_132 = "page-cursor:z0/x/x24.js:132";
const x24_133 = "archive-bit:z0/x/x24.js:133";
const x24_134 = "grid-slot:z0/x/x24.js:134";
const x24_135 = "facet-mark:z0/x/x24.js:135";
const x24_136 = "query-shard:z0/x/x24.js:136";
const x24_137 = "filter-lane:z0/x/x24.js:137";
const x24_138 = "region-pin:z0/x/x24.js:138";
const x24_139 = "sort-track:z0/x/x24.js:139";
const x24_140 = "page-cursor:z0/x/x24.js:140";
const x24_141 = "archive-bit:z0/x/x24.js:141";
const x24_142 = "grid-slot:z0/x/x24.js:142";
const x24_143 = "facet-mark:z0/x/x24.js:143";
const x24_144 = "query-shard:z0/x/x24.js:144";
const x24_145 = "filter-lane:z0/x/x24.js:145";
const x24_146 = "region-pin:z0/x/x24.js:146";
const x24_147 = "sort-track:z0/x/x24.js:147";
