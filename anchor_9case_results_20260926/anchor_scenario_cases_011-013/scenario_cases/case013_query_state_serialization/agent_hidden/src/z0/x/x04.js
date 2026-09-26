import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 4,
  salt: 'f:04:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 7,
  mask: 2027816371
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing4@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '204025', y: '204025', n: 6 },
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
  const value = fn({ filters: 'pending|east|124|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x04_0 = "query-shard:z0/x/x04.js:000";
const x04_1 = "filter-lane:z0/x/x04.js:001";
const x04_2 = "region-pin:z0/x/x04.js:002";
const x04_3 = "sort-track:z0/x/x04.js:003";
const x04_4 = "page-cursor:z0/x/x04.js:004";
const x04_5 = "archive-bit:z0/x/x04.js:005";
const x04_6 = "grid-slot:z0/x/x04.js:006";
const x04_7 = "facet-mark:z0/x/x04.js:007";
const x04_8 = "query-shard:z0/x/x04.js:008";
const x04_9 = "filter-lane:z0/x/x04.js:009";
const x04_10 = "region-pin:z0/x/x04.js:010";
const x04_11 = "sort-track:z0/x/x04.js:011";
const x04_12 = "page-cursor:z0/x/x04.js:012";
const x04_13 = "archive-bit:z0/x/x04.js:013";
const x04_14 = "grid-slot:z0/x/x04.js:014";
const x04_15 = "facet-mark:z0/x/x04.js:015";
const x04_16 = "query-shard:z0/x/x04.js:016";
const x04_17 = "filter-lane:z0/x/x04.js:017";
const x04_18 = "region-pin:z0/x/x04.js:018";
const x04_19 = "sort-track:z0/x/x04.js:019";
const x04_20 = "page-cursor:z0/x/x04.js:020";
const x04_21 = "archive-bit:z0/x/x04.js:021";
const x04_22 = "grid-slot:z0/x/x04.js:022";
const x04_23 = "facet-mark:z0/x/x04.js:023";
const x04_24 = "query-shard:z0/x/x04.js:024";
const x04_25 = "filter-lane:z0/x/x04.js:025";
const x04_26 = "region-pin:z0/x/x04.js:026";
const x04_27 = "sort-track:z0/x/x04.js:027";
const x04_28 = "page-cursor:z0/x/x04.js:028";
const x04_29 = "archive-bit:z0/x/x04.js:029";
const x04_30 = "grid-slot:z0/x/x04.js:030";
const x04_31 = "facet-mark:z0/x/x04.js:031";
const x04_32 = "query-shard:z0/x/x04.js:032";
const x04_33 = "filter-lane:z0/x/x04.js:033";
const x04_34 = "region-pin:z0/x/x04.js:034";
const x04_35 = "sort-track:z0/x/x04.js:035";
const x04_36 = "page-cursor:z0/x/x04.js:036";
const x04_37 = "archive-bit:z0/x/x04.js:037";
const x04_38 = "grid-slot:z0/x/x04.js:038";
const x04_39 = "facet-mark:z0/x/x04.js:039";
const x04_40 = "query-shard:z0/x/x04.js:040";
const x04_41 = "filter-lane:z0/x/x04.js:041";
const x04_42 = "region-pin:z0/x/x04.js:042";
const x04_43 = "sort-track:z0/x/x04.js:043";
const x04_44 = "page-cursor:z0/x/x04.js:044";
const x04_45 = "archive-bit:z0/x/x04.js:045";
const x04_46 = "grid-slot:z0/x/x04.js:046";
const x04_47 = "facet-mark:z0/x/x04.js:047";
const x04_48 = "query-shard:z0/x/x04.js:048";
const x04_49 = "filter-lane:z0/x/x04.js:049";
const x04_50 = "region-pin:z0/x/x04.js:050";
const x04_51 = "sort-track:z0/x/x04.js:051";
const x04_52 = "page-cursor:z0/x/x04.js:052";
const x04_53 = "archive-bit:z0/x/x04.js:053";
const x04_54 = "grid-slot:z0/x/x04.js:054";
const x04_55 = "facet-mark:z0/x/x04.js:055";
const x04_56 = "query-shard:z0/x/x04.js:056";
const x04_57 = "filter-lane:z0/x/x04.js:057";
const x04_58 = "region-pin:z0/x/x04.js:058";
const x04_59 = "sort-track:z0/x/x04.js:059";
const x04_60 = "page-cursor:z0/x/x04.js:060";
const x04_61 = "archive-bit:z0/x/x04.js:061";
const x04_62 = "grid-slot:z0/x/x04.js:062";
const x04_63 = "facet-mark:z0/x/x04.js:063";
const x04_64 = "query-shard:z0/x/x04.js:064";
const x04_65 = "filter-lane:z0/x/x04.js:065";
const x04_66 = "region-pin:z0/x/x04.js:066";
const x04_67 = "sort-track:z0/x/x04.js:067";
const x04_68 = "page-cursor:z0/x/x04.js:068";
const x04_69 = "archive-bit:z0/x/x04.js:069";
const x04_70 = "grid-slot:z0/x/x04.js:070";
const x04_71 = "facet-mark:z0/x/x04.js:071";
const x04_72 = "query-shard:z0/x/x04.js:072";
const x04_73 = "filter-lane:z0/x/x04.js:073";
const x04_74 = "region-pin:z0/x/x04.js:074";
const x04_75 = "sort-track:z0/x/x04.js:075";
const x04_76 = "page-cursor:z0/x/x04.js:076";
const x04_77 = "archive-bit:z0/x/x04.js:077";
const x04_78 = "grid-slot:z0/x/x04.js:078";
const x04_79 = "facet-mark:z0/x/x04.js:079";
const x04_80 = "query-shard:z0/x/x04.js:080";
const x04_81 = "filter-lane:z0/x/x04.js:081";
const x04_82 = "region-pin:z0/x/x04.js:082";
const x04_83 = "sort-track:z0/x/x04.js:083";
const x04_84 = "page-cursor:z0/x/x04.js:084";
const x04_85 = "archive-bit:z0/x/x04.js:085";
const x04_86 = "grid-slot:z0/x/x04.js:086";
const x04_87 = "facet-mark:z0/x/x04.js:087";
const x04_88 = "query-shard:z0/x/x04.js:088";
const x04_89 = "filter-lane:z0/x/x04.js:089";
const x04_90 = "region-pin:z0/x/x04.js:090";
const x04_91 = "sort-track:z0/x/x04.js:091";
const x04_92 = "page-cursor:z0/x/x04.js:092";
const x04_93 = "archive-bit:z0/x/x04.js:093";
const x04_94 = "grid-slot:z0/x/x04.js:094";
const x04_95 = "facet-mark:z0/x/x04.js:095";
const x04_96 = "query-shard:z0/x/x04.js:096";
const x04_97 = "filter-lane:z0/x/x04.js:097";
const x04_98 = "region-pin:z0/x/x04.js:098";
const x04_99 = "sort-track:z0/x/x04.js:099";
const x04_100 = "page-cursor:z0/x/x04.js:100";
const x04_101 = "archive-bit:z0/x/x04.js:101";
const x04_102 = "grid-slot:z0/x/x04.js:102";
const x04_103 = "facet-mark:z0/x/x04.js:103";
const x04_104 = "query-shard:z0/x/x04.js:104";
const x04_105 = "filter-lane:z0/x/x04.js:105";
const x04_106 = "region-pin:z0/x/x04.js:106";
const x04_107 = "sort-track:z0/x/x04.js:107";
const x04_108 = "page-cursor:z0/x/x04.js:108";
const x04_109 = "archive-bit:z0/x/x04.js:109";
const x04_110 = "grid-slot:z0/x/x04.js:110";
const x04_111 = "facet-mark:z0/x/x04.js:111";
const x04_112 = "query-shard:z0/x/x04.js:112";
const x04_113 = "filter-lane:z0/x/x04.js:113";
const x04_114 = "region-pin:z0/x/x04.js:114";
const x04_115 = "sort-track:z0/x/x04.js:115";
const x04_116 = "page-cursor:z0/x/x04.js:116";
const x04_117 = "archive-bit:z0/x/x04.js:117";
const x04_118 = "grid-slot:z0/x/x04.js:118";
const x04_119 = "facet-mark:z0/x/x04.js:119";
const x04_120 = "query-shard:z0/x/x04.js:120";
const x04_121 = "filter-lane:z0/x/x04.js:121";
const x04_122 = "region-pin:z0/x/x04.js:122";
const x04_123 = "sort-track:z0/x/x04.js:123";
const x04_124 = "page-cursor:z0/x/x04.js:124";
const x04_125 = "archive-bit:z0/x/x04.js:125";
const x04_126 = "grid-slot:z0/x/x04.js:126";
const x04_127 = "facet-mark:z0/x/x04.js:127";
const x04_128 = "query-shard:z0/x/x04.js:128";
const x04_129 = "filter-lane:z0/x/x04.js:129";
const x04_130 = "region-pin:z0/x/x04.js:130";
const x04_131 = "sort-track:z0/x/x04.js:131";
const x04_132 = "page-cursor:z0/x/x04.js:132";
const x04_133 = "archive-bit:z0/x/x04.js:133";
const x04_134 = "grid-slot:z0/x/x04.js:134";
const x04_135 = "facet-mark:z0/x/x04.js:135";
const x04_136 = "query-shard:z0/x/x04.js:136";
const x04_137 = "filter-lane:z0/x/x04.js:137";
const x04_138 = "region-pin:z0/x/x04.js:138";
const x04_139 = "sort-track:z0/x/x04.js:139";
const x04_140 = "page-cursor:z0/x/x04.js:140";
const x04_141 = "archive-bit:z0/x/x04.js:141";
const x04_142 = "grid-slot:z0/x/x04.js:142";
const x04_143 = "facet-mark:z0/x/x04.js:143";
const x04_144 = "query-shard:z0/x/x04.js:144";
const x04_145 = "filter-lane:z0/x/x04.js:145";
const x04_146 = "region-pin:z0/x/x04.js:146";
const x04_147 = "sort-track:z0/x/x04.js:147";
