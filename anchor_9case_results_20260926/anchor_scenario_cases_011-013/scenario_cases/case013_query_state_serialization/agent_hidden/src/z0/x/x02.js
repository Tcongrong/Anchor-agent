import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 2,
  salt: 'f:02:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 5,
  mask: 1013912145
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing2@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '202071', y: '202071', n: 6 },
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
  const value = fn({ filters: 'pending|east|122|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x02_0 = "query-shard:z0/x/x02.js:000";
const x02_1 = "filter-lane:z0/x/x02.js:001";
const x02_2 = "region-pin:z0/x/x02.js:002";
const x02_3 = "sort-track:z0/x/x02.js:003";
const x02_4 = "page-cursor:z0/x/x02.js:004";
const x02_5 = "archive-bit:z0/x/x02.js:005";
const x02_6 = "grid-slot:z0/x/x02.js:006";
const x02_7 = "facet-mark:z0/x/x02.js:007";
const x02_8 = "query-shard:z0/x/x02.js:008";
const x02_9 = "filter-lane:z0/x/x02.js:009";
const x02_10 = "region-pin:z0/x/x02.js:010";
const x02_11 = "sort-track:z0/x/x02.js:011";
const x02_12 = "page-cursor:z0/x/x02.js:012";
const x02_13 = "archive-bit:z0/x/x02.js:013";
const x02_14 = "grid-slot:z0/x/x02.js:014";
const x02_15 = "facet-mark:z0/x/x02.js:015";
const x02_16 = "query-shard:z0/x/x02.js:016";
const x02_17 = "filter-lane:z0/x/x02.js:017";
const x02_18 = "region-pin:z0/x/x02.js:018";
const x02_19 = "sort-track:z0/x/x02.js:019";
const x02_20 = "page-cursor:z0/x/x02.js:020";
const x02_21 = "archive-bit:z0/x/x02.js:021";
const x02_22 = "grid-slot:z0/x/x02.js:022";
const x02_23 = "facet-mark:z0/x/x02.js:023";
const x02_24 = "query-shard:z0/x/x02.js:024";
const x02_25 = "filter-lane:z0/x/x02.js:025";
const x02_26 = "region-pin:z0/x/x02.js:026";
const x02_27 = "sort-track:z0/x/x02.js:027";
const x02_28 = "page-cursor:z0/x/x02.js:028";
const x02_29 = "archive-bit:z0/x/x02.js:029";
const x02_30 = "grid-slot:z0/x/x02.js:030";
const x02_31 = "facet-mark:z0/x/x02.js:031";
const x02_32 = "query-shard:z0/x/x02.js:032";
const x02_33 = "filter-lane:z0/x/x02.js:033";
const x02_34 = "region-pin:z0/x/x02.js:034";
const x02_35 = "sort-track:z0/x/x02.js:035";
const x02_36 = "page-cursor:z0/x/x02.js:036";
const x02_37 = "archive-bit:z0/x/x02.js:037";
const x02_38 = "grid-slot:z0/x/x02.js:038";
const x02_39 = "facet-mark:z0/x/x02.js:039";
const x02_40 = "query-shard:z0/x/x02.js:040";
const x02_41 = "filter-lane:z0/x/x02.js:041";
const x02_42 = "region-pin:z0/x/x02.js:042";
const x02_43 = "sort-track:z0/x/x02.js:043";
const x02_44 = "page-cursor:z0/x/x02.js:044";
const x02_45 = "archive-bit:z0/x/x02.js:045";
const x02_46 = "grid-slot:z0/x/x02.js:046";
const x02_47 = "facet-mark:z0/x/x02.js:047";
const x02_48 = "query-shard:z0/x/x02.js:048";
const x02_49 = "filter-lane:z0/x/x02.js:049";
const x02_50 = "region-pin:z0/x/x02.js:050";
const x02_51 = "sort-track:z0/x/x02.js:051";
const x02_52 = "page-cursor:z0/x/x02.js:052";
const x02_53 = "archive-bit:z0/x/x02.js:053";
const x02_54 = "grid-slot:z0/x/x02.js:054";
const x02_55 = "facet-mark:z0/x/x02.js:055";
const x02_56 = "query-shard:z0/x/x02.js:056";
const x02_57 = "filter-lane:z0/x/x02.js:057";
const x02_58 = "region-pin:z0/x/x02.js:058";
const x02_59 = "sort-track:z0/x/x02.js:059";
const x02_60 = "page-cursor:z0/x/x02.js:060";
const x02_61 = "archive-bit:z0/x/x02.js:061";
const x02_62 = "grid-slot:z0/x/x02.js:062";
const x02_63 = "facet-mark:z0/x/x02.js:063";
const x02_64 = "query-shard:z0/x/x02.js:064";
const x02_65 = "filter-lane:z0/x/x02.js:065";
const x02_66 = "region-pin:z0/x/x02.js:066";
const x02_67 = "sort-track:z0/x/x02.js:067";
const x02_68 = "page-cursor:z0/x/x02.js:068";
const x02_69 = "archive-bit:z0/x/x02.js:069";
const x02_70 = "grid-slot:z0/x/x02.js:070";
const x02_71 = "facet-mark:z0/x/x02.js:071";
const x02_72 = "query-shard:z0/x/x02.js:072";
const x02_73 = "filter-lane:z0/x/x02.js:073";
const x02_74 = "region-pin:z0/x/x02.js:074";
const x02_75 = "sort-track:z0/x/x02.js:075";
const x02_76 = "page-cursor:z0/x/x02.js:076";
const x02_77 = "archive-bit:z0/x/x02.js:077";
const x02_78 = "grid-slot:z0/x/x02.js:078";
const x02_79 = "facet-mark:z0/x/x02.js:079";
const x02_80 = "query-shard:z0/x/x02.js:080";
const x02_81 = "filter-lane:z0/x/x02.js:081";
const x02_82 = "region-pin:z0/x/x02.js:082";
const x02_83 = "sort-track:z0/x/x02.js:083";
const x02_84 = "page-cursor:z0/x/x02.js:084";
const x02_85 = "archive-bit:z0/x/x02.js:085";
const x02_86 = "grid-slot:z0/x/x02.js:086";
const x02_87 = "facet-mark:z0/x/x02.js:087";
const x02_88 = "query-shard:z0/x/x02.js:088";
const x02_89 = "filter-lane:z0/x/x02.js:089";
const x02_90 = "region-pin:z0/x/x02.js:090";
const x02_91 = "sort-track:z0/x/x02.js:091";
const x02_92 = "page-cursor:z0/x/x02.js:092";
const x02_93 = "archive-bit:z0/x/x02.js:093";
const x02_94 = "grid-slot:z0/x/x02.js:094";
const x02_95 = "facet-mark:z0/x/x02.js:095";
const x02_96 = "query-shard:z0/x/x02.js:096";
const x02_97 = "filter-lane:z0/x/x02.js:097";
const x02_98 = "region-pin:z0/x/x02.js:098";
const x02_99 = "sort-track:z0/x/x02.js:099";
const x02_100 = "page-cursor:z0/x/x02.js:100";
const x02_101 = "archive-bit:z0/x/x02.js:101";
const x02_102 = "grid-slot:z0/x/x02.js:102";
const x02_103 = "facet-mark:z0/x/x02.js:103";
const x02_104 = "query-shard:z0/x/x02.js:104";
const x02_105 = "filter-lane:z0/x/x02.js:105";
const x02_106 = "region-pin:z0/x/x02.js:106";
const x02_107 = "sort-track:z0/x/x02.js:107";
const x02_108 = "page-cursor:z0/x/x02.js:108";
const x02_109 = "archive-bit:z0/x/x02.js:109";
const x02_110 = "grid-slot:z0/x/x02.js:110";
const x02_111 = "facet-mark:z0/x/x02.js:111";
const x02_112 = "query-shard:z0/x/x02.js:112";
const x02_113 = "filter-lane:z0/x/x02.js:113";
const x02_114 = "region-pin:z0/x/x02.js:114";
const x02_115 = "sort-track:z0/x/x02.js:115";
const x02_116 = "page-cursor:z0/x/x02.js:116";
const x02_117 = "archive-bit:z0/x/x02.js:117";
const x02_118 = "grid-slot:z0/x/x02.js:118";
const x02_119 = "facet-mark:z0/x/x02.js:119";
const x02_120 = "query-shard:z0/x/x02.js:120";
const x02_121 = "filter-lane:z0/x/x02.js:121";
const x02_122 = "region-pin:z0/x/x02.js:122";
const x02_123 = "sort-track:z0/x/x02.js:123";
const x02_124 = "page-cursor:z0/x/x02.js:124";
const x02_125 = "archive-bit:z0/x/x02.js:125";
const x02_126 = "grid-slot:z0/x/x02.js:126";
const x02_127 = "facet-mark:z0/x/x02.js:127";
const x02_128 = "query-shard:z0/x/x02.js:128";
const x02_129 = "filter-lane:z0/x/x02.js:129";
const x02_130 = "region-pin:z0/x/x02.js:130";
const x02_131 = "sort-track:z0/x/x02.js:131";
const x02_132 = "page-cursor:z0/x/x02.js:132";
const x02_133 = "archive-bit:z0/x/x02.js:133";
const x02_134 = "grid-slot:z0/x/x02.js:134";
const x02_135 = "facet-mark:z0/x/x02.js:135";
const x02_136 = "query-shard:z0/x/x02.js:136";
const x02_137 = "filter-lane:z0/x/x02.js:137";
const x02_138 = "region-pin:z0/x/x02.js:138";
const x02_139 = "sort-track:z0/x/x02.js:139";
const x02_140 = "page-cursor:z0/x/x02.js:140";
const x02_141 = "archive-bit:z0/x/x02.js:141";
const x02_142 = "grid-slot:z0/x/x02.js:142";
const x02_143 = "facet-mark:z0/x/x02.js:143";
const x02_144 = "query-shard:z0/x/x02.js:144";
const x02_145 = "filter-lane:z0/x/x02.js:145";
const x02_146 = "region-pin:z0/x/x02.js:146";
const x02_147 = "sort-track:z0/x/x02.js:147";
