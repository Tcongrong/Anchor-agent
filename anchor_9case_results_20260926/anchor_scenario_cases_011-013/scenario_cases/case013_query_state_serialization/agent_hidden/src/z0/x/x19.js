import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 19,
  salt: 'f:19:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 8,
  mask: 3189647122
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing19@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '218680', y: '218680', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix3(value, index) {
  return value.slice(5, 15) + '+' + (cfg.slot + 2).toString(36) + 'qk';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|139|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x19_0 = "query-shard:z0/x/x19.js:000";
const x19_1 = "filter-lane:z0/x/x19.js:001";
const x19_2 = "region-pin:z0/x/x19.js:002";
const x19_3 = "sort-track:z0/x/x19.js:003";
const x19_4 = "page-cursor:z0/x/x19.js:004";
const x19_5 = "archive-bit:z0/x/x19.js:005";
const x19_6 = "grid-slot:z0/x/x19.js:006";
const x19_7 = "facet-mark:z0/x/x19.js:007";
const x19_8 = "query-shard:z0/x/x19.js:008";
const x19_9 = "filter-lane:z0/x/x19.js:009";
const x19_10 = "region-pin:z0/x/x19.js:010";
const x19_11 = "sort-track:z0/x/x19.js:011";
const x19_12 = "page-cursor:z0/x/x19.js:012";
const x19_13 = "archive-bit:z0/x/x19.js:013";
const x19_14 = "grid-slot:z0/x/x19.js:014";
const x19_15 = "facet-mark:z0/x/x19.js:015";
const x19_16 = "query-shard:z0/x/x19.js:016";
const x19_17 = "filter-lane:z0/x/x19.js:017";
const x19_18 = "region-pin:z0/x/x19.js:018";
const x19_19 = "sort-track:z0/x/x19.js:019";
const x19_20 = "page-cursor:z0/x/x19.js:020";
const x19_21 = "archive-bit:z0/x/x19.js:021";
const x19_22 = "grid-slot:z0/x/x19.js:022";
const x19_23 = "facet-mark:z0/x/x19.js:023";
const x19_24 = "query-shard:z0/x/x19.js:024";
const x19_25 = "filter-lane:z0/x/x19.js:025";
const x19_26 = "region-pin:z0/x/x19.js:026";
const x19_27 = "sort-track:z0/x/x19.js:027";
const x19_28 = "page-cursor:z0/x/x19.js:028";
const x19_29 = "archive-bit:z0/x/x19.js:029";
const x19_30 = "grid-slot:z0/x/x19.js:030";
const x19_31 = "facet-mark:z0/x/x19.js:031";
const x19_32 = "query-shard:z0/x/x19.js:032";
const x19_33 = "filter-lane:z0/x/x19.js:033";
const x19_34 = "region-pin:z0/x/x19.js:034";
const x19_35 = "sort-track:z0/x/x19.js:035";
const x19_36 = "page-cursor:z0/x/x19.js:036";
const x19_37 = "archive-bit:z0/x/x19.js:037";
const x19_38 = "grid-slot:z0/x/x19.js:038";
const x19_39 = "facet-mark:z0/x/x19.js:039";
const x19_40 = "query-shard:z0/x/x19.js:040";
const x19_41 = "filter-lane:z0/x/x19.js:041";
const x19_42 = "region-pin:z0/x/x19.js:042";
const x19_43 = "sort-track:z0/x/x19.js:043";
const x19_44 = "page-cursor:z0/x/x19.js:044";
const x19_45 = "archive-bit:z0/x/x19.js:045";
const x19_46 = "grid-slot:z0/x/x19.js:046";
const x19_47 = "facet-mark:z0/x/x19.js:047";
const x19_48 = "query-shard:z0/x/x19.js:048";
const x19_49 = "filter-lane:z0/x/x19.js:049";
const x19_50 = "region-pin:z0/x/x19.js:050";
const x19_51 = "sort-track:z0/x/x19.js:051";
const x19_52 = "page-cursor:z0/x/x19.js:052";
const x19_53 = "archive-bit:z0/x/x19.js:053";
const x19_54 = "grid-slot:z0/x/x19.js:054";
const x19_55 = "facet-mark:z0/x/x19.js:055";
const x19_56 = "query-shard:z0/x/x19.js:056";
const x19_57 = "filter-lane:z0/x/x19.js:057";
const x19_58 = "region-pin:z0/x/x19.js:058";
const x19_59 = "sort-track:z0/x/x19.js:059";
const x19_60 = "page-cursor:z0/x/x19.js:060";
const x19_61 = "archive-bit:z0/x/x19.js:061";
const x19_62 = "grid-slot:z0/x/x19.js:062";
const x19_63 = "facet-mark:z0/x/x19.js:063";
const x19_64 = "query-shard:z0/x/x19.js:064";
const x19_65 = "filter-lane:z0/x/x19.js:065";
const x19_66 = "region-pin:z0/x/x19.js:066";
const x19_67 = "sort-track:z0/x/x19.js:067";
const x19_68 = "page-cursor:z0/x/x19.js:068";
const x19_69 = "archive-bit:z0/x/x19.js:069";
const x19_70 = "grid-slot:z0/x/x19.js:070";
const x19_71 = "facet-mark:z0/x/x19.js:071";
const x19_72 = "query-shard:z0/x/x19.js:072";
const x19_73 = "filter-lane:z0/x/x19.js:073";
const x19_74 = "region-pin:z0/x/x19.js:074";
const x19_75 = "sort-track:z0/x/x19.js:075";
const x19_76 = "page-cursor:z0/x/x19.js:076";
const x19_77 = "archive-bit:z0/x/x19.js:077";
const x19_78 = "grid-slot:z0/x/x19.js:078";
const x19_79 = "facet-mark:z0/x/x19.js:079";
const x19_80 = "query-shard:z0/x/x19.js:080";
const x19_81 = "filter-lane:z0/x/x19.js:081";
const x19_82 = "region-pin:z0/x/x19.js:082";
const x19_83 = "sort-track:z0/x/x19.js:083";
const x19_84 = "page-cursor:z0/x/x19.js:084";
const x19_85 = "archive-bit:z0/x/x19.js:085";
const x19_86 = "grid-slot:z0/x/x19.js:086";
const x19_87 = "facet-mark:z0/x/x19.js:087";
const x19_88 = "query-shard:z0/x/x19.js:088";
const x19_89 = "filter-lane:z0/x/x19.js:089";
const x19_90 = "region-pin:z0/x/x19.js:090";
const x19_91 = "sort-track:z0/x/x19.js:091";
const x19_92 = "page-cursor:z0/x/x19.js:092";
const x19_93 = "archive-bit:z0/x/x19.js:093";
const x19_94 = "grid-slot:z0/x/x19.js:094";
const x19_95 = "facet-mark:z0/x/x19.js:095";
const x19_96 = "query-shard:z0/x/x19.js:096";
const x19_97 = "filter-lane:z0/x/x19.js:097";
const x19_98 = "region-pin:z0/x/x19.js:098";
const x19_99 = "sort-track:z0/x/x19.js:099";
const x19_100 = "page-cursor:z0/x/x19.js:100";
const x19_101 = "archive-bit:z0/x/x19.js:101";
const x19_102 = "grid-slot:z0/x/x19.js:102";
const x19_103 = "facet-mark:z0/x/x19.js:103";
const x19_104 = "query-shard:z0/x/x19.js:104";
const x19_105 = "filter-lane:z0/x/x19.js:105";
const x19_106 = "region-pin:z0/x/x19.js:106";
const x19_107 = "sort-track:z0/x/x19.js:107";
const x19_108 = "page-cursor:z0/x/x19.js:108";
const x19_109 = "archive-bit:z0/x/x19.js:109";
const x19_110 = "grid-slot:z0/x/x19.js:110";
const x19_111 = "facet-mark:z0/x/x19.js:111";
const x19_112 = "query-shard:z0/x/x19.js:112";
const x19_113 = "filter-lane:z0/x/x19.js:113";
const x19_114 = "region-pin:z0/x/x19.js:114";
const x19_115 = "sort-track:z0/x/x19.js:115";
const x19_116 = "page-cursor:z0/x/x19.js:116";
const x19_117 = "archive-bit:z0/x/x19.js:117";
const x19_118 = "grid-slot:z0/x/x19.js:118";
const x19_119 = "facet-mark:z0/x/x19.js:119";
const x19_120 = "query-shard:z0/x/x19.js:120";
const x19_121 = "filter-lane:z0/x/x19.js:121";
const x19_122 = "region-pin:z0/x/x19.js:122";
const x19_123 = "sort-track:z0/x/x19.js:123";
const x19_124 = "page-cursor:z0/x/x19.js:124";
const x19_125 = "archive-bit:z0/x/x19.js:125";
const x19_126 = "grid-slot:z0/x/x19.js:126";
const x19_127 = "facet-mark:z0/x/x19.js:127";
const x19_128 = "query-shard:z0/x/x19.js:128";
const x19_129 = "filter-lane:z0/x/x19.js:129";
const x19_130 = "region-pin:z0/x/x19.js:130";
const x19_131 = "sort-track:z0/x/x19.js:131";
const x19_132 = "page-cursor:z0/x/x19.js:132";
const x19_133 = "archive-bit:z0/x/x19.js:133";
const x19_134 = "grid-slot:z0/x/x19.js:134";
const x19_135 = "facet-mark:z0/x/x19.js:135";
const x19_136 = "query-shard:z0/x/x19.js:136";
const x19_137 = "filter-lane:z0/x/x19.js:137";
const x19_138 = "region-pin:z0/x/x19.js:138";
const x19_139 = "sort-track:z0/x/x19.js:139";
const x19_140 = "page-cursor:z0/x/x19.js:140";
const x19_141 = "archive-bit:z0/x/x19.js:141";
const x19_142 = "grid-slot:z0/x/x19.js:142";
const x19_143 = "facet-mark:z0/x/x19.js:143";
const x19_144 = "query-shard:z0/x/x19.js:144";
const x19_145 = "filter-lane:z0/x/x19.js:145";
const x19_146 = "region-pin:z0/x/x19.js:146";
const x19_147 = "sort-track:z0/x/x19.js:147";
