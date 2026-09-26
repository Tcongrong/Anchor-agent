import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 8,
  salt: 'f:08:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 4,
  mask: 4055624823
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing8@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '207933', y: '207933', n: 6 },
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
  const value = fn({ filters: 'pending|east|128|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x08_0 = "query-shard:z0/x/x08.js:000";
const x08_1 = "filter-lane:z0/x/x08.js:001";
const x08_2 = "region-pin:z0/x/x08.js:002";
const x08_3 = "sort-track:z0/x/x08.js:003";
const x08_4 = "page-cursor:z0/x/x08.js:004";
const x08_5 = "archive-bit:z0/x/x08.js:005";
const x08_6 = "grid-slot:z0/x/x08.js:006";
const x08_7 = "facet-mark:z0/x/x08.js:007";
const x08_8 = "query-shard:z0/x/x08.js:008";
const x08_9 = "filter-lane:z0/x/x08.js:009";
const x08_10 = "region-pin:z0/x/x08.js:010";
const x08_11 = "sort-track:z0/x/x08.js:011";
const x08_12 = "page-cursor:z0/x/x08.js:012";
const x08_13 = "archive-bit:z0/x/x08.js:013";
const x08_14 = "grid-slot:z0/x/x08.js:014";
const x08_15 = "facet-mark:z0/x/x08.js:015";
const x08_16 = "query-shard:z0/x/x08.js:016";
const x08_17 = "filter-lane:z0/x/x08.js:017";
const x08_18 = "region-pin:z0/x/x08.js:018";
const x08_19 = "sort-track:z0/x/x08.js:019";
const x08_20 = "page-cursor:z0/x/x08.js:020";
const x08_21 = "archive-bit:z0/x/x08.js:021";
const x08_22 = "grid-slot:z0/x/x08.js:022";
const x08_23 = "facet-mark:z0/x/x08.js:023";
const x08_24 = "query-shard:z0/x/x08.js:024";
const x08_25 = "filter-lane:z0/x/x08.js:025";
const x08_26 = "region-pin:z0/x/x08.js:026";
const x08_27 = "sort-track:z0/x/x08.js:027";
const x08_28 = "page-cursor:z0/x/x08.js:028";
const x08_29 = "archive-bit:z0/x/x08.js:029";
const x08_30 = "grid-slot:z0/x/x08.js:030";
const x08_31 = "facet-mark:z0/x/x08.js:031";
const x08_32 = "query-shard:z0/x/x08.js:032";
const x08_33 = "filter-lane:z0/x/x08.js:033";
const x08_34 = "region-pin:z0/x/x08.js:034";
const x08_35 = "sort-track:z0/x/x08.js:035";
const x08_36 = "page-cursor:z0/x/x08.js:036";
const x08_37 = "archive-bit:z0/x/x08.js:037";
const x08_38 = "grid-slot:z0/x/x08.js:038";
const x08_39 = "facet-mark:z0/x/x08.js:039";
const x08_40 = "query-shard:z0/x/x08.js:040";
const x08_41 = "filter-lane:z0/x/x08.js:041";
const x08_42 = "region-pin:z0/x/x08.js:042";
const x08_43 = "sort-track:z0/x/x08.js:043";
const x08_44 = "page-cursor:z0/x/x08.js:044";
const x08_45 = "archive-bit:z0/x/x08.js:045";
const x08_46 = "grid-slot:z0/x/x08.js:046";
const x08_47 = "facet-mark:z0/x/x08.js:047";
const x08_48 = "query-shard:z0/x/x08.js:048";
const x08_49 = "filter-lane:z0/x/x08.js:049";
const x08_50 = "region-pin:z0/x/x08.js:050";
const x08_51 = "sort-track:z0/x/x08.js:051";
const x08_52 = "page-cursor:z0/x/x08.js:052";
const x08_53 = "archive-bit:z0/x/x08.js:053";
const x08_54 = "grid-slot:z0/x/x08.js:054";
const x08_55 = "facet-mark:z0/x/x08.js:055";
const x08_56 = "query-shard:z0/x/x08.js:056";
const x08_57 = "filter-lane:z0/x/x08.js:057";
const x08_58 = "region-pin:z0/x/x08.js:058";
const x08_59 = "sort-track:z0/x/x08.js:059";
const x08_60 = "page-cursor:z0/x/x08.js:060";
const x08_61 = "archive-bit:z0/x/x08.js:061";
const x08_62 = "grid-slot:z0/x/x08.js:062";
const x08_63 = "facet-mark:z0/x/x08.js:063";
const x08_64 = "query-shard:z0/x/x08.js:064";
const x08_65 = "filter-lane:z0/x/x08.js:065";
const x08_66 = "region-pin:z0/x/x08.js:066";
const x08_67 = "sort-track:z0/x/x08.js:067";
const x08_68 = "page-cursor:z0/x/x08.js:068";
const x08_69 = "archive-bit:z0/x/x08.js:069";
const x08_70 = "grid-slot:z0/x/x08.js:070";
const x08_71 = "facet-mark:z0/x/x08.js:071";
const x08_72 = "query-shard:z0/x/x08.js:072";
const x08_73 = "filter-lane:z0/x/x08.js:073";
const x08_74 = "region-pin:z0/x/x08.js:074";
const x08_75 = "sort-track:z0/x/x08.js:075";
const x08_76 = "page-cursor:z0/x/x08.js:076";
const x08_77 = "archive-bit:z0/x/x08.js:077";
const x08_78 = "grid-slot:z0/x/x08.js:078";
const x08_79 = "facet-mark:z0/x/x08.js:079";
const x08_80 = "query-shard:z0/x/x08.js:080";
const x08_81 = "filter-lane:z0/x/x08.js:081";
const x08_82 = "region-pin:z0/x/x08.js:082";
const x08_83 = "sort-track:z0/x/x08.js:083";
const x08_84 = "page-cursor:z0/x/x08.js:084";
const x08_85 = "archive-bit:z0/x/x08.js:085";
const x08_86 = "grid-slot:z0/x/x08.js:086";
const x08_87 = "facet-mark:z0/x/x08.js:087";
const x08_88 = "query-shard:z0/x/x08.js:088";
const x08_89 = "filter-lane:z0/x/x08.js:089";
const x08_90 = "region-pin:z0/x/x08.js:090";
const x08_91 = "sort-track:z0/x/x08.js:091";
const x08_92 = "page-cursor:z0/x/x08.js:092";
const x08_93 = "archive-bit:z0/x/x08.js:093";
const x08_94 = "grid-slot:z0/x/x08.js:094";
const x08_95 = "facet-mark:z0/x/x08.js:095";
const x08_96 = "query-shard:z0/x/x08.js:096";
const x08_97 = "filter-lane:z0/x/x08.js:097";
const x08_98 = "region-pin:z0/x/x08.js:098";
const x08_99 = "sort-track:z0/x/x08.js:099";
const x08_100 = "page-cursor:z0/x/x08.js:100";
const x08_101 = "archive-bit:z0/x/x08.js:101";
const x08_102 = "grid-slot:z0/x/x08.js:102";
const x08_103 = "facet-mark:z0/x/x08.js:103";
const x08_104 = "query-shard:z0/x/x08.js:104";
const x08_105 = "filter-lane:z0/x/x08.js:105";
const x08_106 = "region-pin:z0/x/x08.js:106";
const x08_107 = "sort-track:z0/x/x08.js:107";
const x08_108 = "page-cursor:z0/x/x08.js:108";
const x08_109 = "archive-bit:z0/x/x08.js:109";
const x08_110 = "grid-slot:z0/x/x08.js:110";
const x08_111 = "facet-mark:z0/x/x08.js:111";
const x08_112 = "query-shard:z0/x/x08.js:112";
const x08_113 = "filter-lane:z0/x/x08.js:113";
const x08_114 = "region-pin:z0/x/x08.js:114";
const x08_115 = "sort-track:z0/x/x08.js:115";
const x08_116 = "page-cursor:z0/x/x08.js:116";
const x08_117 = "archive-bit:z0/x/x08.js:117";
const x08_118 = "grid-slot:z0/x/x08.js:118";
const x08_119 = "facet-mark:z0/x/x08.js:119";
const x08_120 = "query-shard:z0/x/x08.js:120";
const x08_121 = "filter-lane:z0/x/x08.js:121";
const x08_122 = "region-pin:z0/x/x08.js:122";
const x08_123 = "sort-track:z0/x/x08.js:123";
const x08_124 = "page-cursor:z0/x/x08.js:124";
const x08_125 = "archive-bit:z0/x/x08.js:125";
const x08_126 = "grid-slot:z0/x/x08.js:126";
const x08_127 = "facet-mark:z0/x/x08.js:127";
const x08_128 = "query-shard:z0/x/x08.js:128";
const x08_129 = "filter-lane:z0/x/x08.js:129";
const x08_130 = "region-pin:z0/x/x08.js:130";
const x08_131 = "sort-track:z0/x/x08.js:131";
const x08_132 = "page-cursor:z0/x/x08.js:132";
const x08_133 = "archive-bit:z0/x/x08.js:133";
const x08_134 = "grid-slot:z0/x/x08.js:134";
const x08_135 = "facet-mark:z0/x/x08.js:135";
const x08_136 = "query-shard:z0/x/x08.js:136";
const x08_137 = "filter-lane:z0/x/x08.js:137";
const x08_138 = "region-pin:z0/x/x08.js:138";
const x08_139 = "sort-track:z0/x/x08.js:139";
const x08_140 = "page-cursor:z0/x/x08.js:140";
const x08_141 = "archive-bit:z0/x/x08.js:141";
const x08_142 = "grid-slot:z0/x/x08.js:142";
const x08_143 = "facet-mark:z0/x/x08.js:143";
const x08_144 = "query-shard:z0/x/x08.js:144";
const x08_145 = "filter-lane:z0/x/x08.js:145";
const x08_146 = "region-pin:z0/x/x08.js:146";
const x08_147 = "sort-track:z0/x/x08.js:147";
