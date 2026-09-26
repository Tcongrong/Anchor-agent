import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 9,
  salt: 'f:09:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 5,
  mask: 2415093288
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing9@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '208910', y: '208910', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(0, 9) + '.' + (cfg.slot + 3).toString(36) + 'mv';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|129|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x09_0 = "query-shard:z0/x/x09.js:000";
const x09_1 = "filter-lane:z0/x/x09.js:001";
const x09_2 = "region-pin:z0/x/x09.js:002";
const x09_3 = "sort-track:z0/x/x09.js:003";
const x09_4 = "page-cursor:z0/x/x09.js:004";
const x09_5 = "archive-bit:z0/x/x09.js:005";
const x09_6 = "grid-slot:z0/x/x09.js:006";
const x09_7 = "facet-mark:z0/x/x09.js:007";
const x09_8 = "query-shard:z0/x/x09.js:008";
const x09_9 = "filter-lane:z0/x/x09.js:009";
const x09_10 = "region-pin:z0/x/x09.js:010";
const x09_11 = "sort-track:z0/x/x09.js:011";
const x09_12 = "page-cursor:z0/x/x09.js:012";
const x09_13 = "archive-bit:z0/x/x09.js:013";
const x09_14 = "grid-slot:z0/x/x09.js:014";
const x09_15 = "facet-mark:z0/x/x09.js:015";
const x09_16 = "query-shard:z0/x/x09.js:016";
const x09_17 = "filter-lane:z0/x/x09.js:017";
const x09_18 = "region-pin:z0/x/x09.js:018";
const x09_19 = "sort-track:z0/x/x09.js:019";
const x09_20 = "page-cursor:z0/x/x09.js:020";
const x09_21 = "archive-bit:z0/x/x09.js:021";
const x09_22 = "grid-slot:z0/x/x09.js:022";
const x09_23 = "facet-mark:z0/x/x09.js:023";
const x09_24 = "query-shard:z0/x/x09.js:024";
const x09_25 = "filter-lane:z0/x/x09.js:025";
const x09_26 = "region-pin:z0/x/x09.js:026";
const x09_27 = "sort-track:z0/x/x09.js:027";
const x09_28 = "page-cursor:z0/x/x09.js:028";
const x09_29 = "archive-bit:z0/x/x09.js:029";
const x09_30 = "grid-slot:z0/x/x09.js:030";
const x09_31 = "facet-mark:z0/x/x09.js:031";
const x09_32 = "query-shard:z0/x/x09.js:032";
const x09_33 = "filter-lane:z0/x/x09.js:033";
const x09_34 = "region-pin:z0/x/x09.js:034";
const x09_35 = "sort-track:z0/x/x09.js:035";
const x09_36 = "page-cursor:z0/x/x09.js:036";
const x09_37 = "archive-bit:z0/x/x09.js:037";
const x09_38 = "grid-slot:z0/x/x09.js:038";
const x09_39 = "facet-mark:z0/x/x09.js:039";
const x09_40 = "query-shard:z0/x/x09.js:040";
const x09_41 = "filter-lane:z0/x/x09.js:041";
const x09_42 = "region-pin:z0/x/x09.js:042";
const x09_43 = "sort-track:z0/x/x09.js:043";
const x09_44 = "page-cursor:z0/x/x09.js:044";
const x09_45 = "archive-bit:z0/x/x09.js:045";
const x09_46 = "grid-slot:z0/x/x09.js:046";
const x09_47 = "facet-mark:z0/x/x09.js:047";
const x09_48 = "query-shard:z0/x/x09.js:048";
const x09_49 = "filter-lane:z0/x/x09.js:049";
const x09_50 = "region-pin:z0/x/x09.js:050";
const x09_51 = "sort-track:z0/x/x09.js:051";
const x09_52 = "page-cursor:z0/x/x09.js:052";
const x09_53 = "archive-bit:z0/x/x09.js:053";
const x09_54 = "grid-slot:z0/x/x09.js:054";
const x09_55 = "facet-mark:z0/x/x09.js:055";
const x09_56 = "query-shard:z0/x/x09.js:056";
const x09_57 = "filter-lane:z0/x/x09.js:057";
const x09_58 = "region-pin:z0/x/x09.js:058";
const x09_59 = "sort-track:z0/x/x09.js:059";
const x09_60 = "page-cursor:z0/x/x09.js:060";
const x09_61 = "archive-bit:z0/x/x09.js:061";
const x09_62 = "grid-slot:z0/x/x09.js:062";
const x09_63 = "facet-mark:z0/x/x09.js:063";
const x09_64 = "query-shard:z0/x/x09.js:064";
const x09_65 = "filter-lane:z0/x/x09.js:065";
const x09_66 = "region-pin:z0/x/x09.js:066";
const x09_67 = "sort-track:z0/x/x09.js:067";
const x09_68 = "page-cursor:z0/x/x09.js:068";
const x09_69 = "archive-bit:z0/x/x09.js:069";
const x09_70 = "grid-slot:z0/x/x09.js:070";
const x09_71 = "facet-mark:z0/x/x09.js:071";
const x09_72 = "query-shard:z0/x/x09.js:072";
const x09_73 = "filter-lane:z0/x/x09.js:073";
const x09_74 = "region-pin:z0/x/x09.js:074";
const x09_75 = "sort-track:z0/x/x09.js:075";
const x09_76 = "page-cursor:z0/x/x09.js:076";
const x09_77 = "archive-bit:z0/x/x09.js:077";
const x09_78 = "grid-slot:z0/x/x09.js:078";
const x09_79 = "facet-mark:z0/x/x09.js:079";
const x09_80 = "query-shard:z0/x/x09.js:080";
const x09_81 = "filter-lane:z0/x/x09.js:081";
const x09_82 = "region-pin:z0/x/x09.js:082";
const x09_83 = "sort-track:z0/x/x09.js:083";
const x09_84 = "page-cursor:z0/x/x09.js:084";
const x09_85 = "archive-bit:z0/x/x09.js:085";
const x09_86 = "grid-slot:z0/x/x09.js:086";
const x09_87 = "facet-mark:z0/x/x09.js:087";
const x09_88 = "query-shard:z0/x/x09.js:088";
const x09_89 = "filter-lane:z0/x/x09.js:089";
const x09_90 = "region-pin:z0/x/x09.js:090";
const x09_91 = "sort-track:z0/x/x09.js:091";
const x09_92 = "page-cursor:z0/x/x09.js:092";
const x09_93 = "archive-bit:z0/x/x09.js:093";
const x09_94 = "grid-slot:z0/x/x09.js:094";
const x09_95 = "facet-mark:z0/x/x09.js:095";
const x09_96 = "query-shard:z0/x/x09.js:096";
const x09_97 = "filter-lane:z0/x/x09.js:097";
const x09_98 = "region-pin:z0/x/x09.js:098";
const x09_99 = "sort-track:z0/x/x09.js:099";
const x09_100 = "page-cursor:z0/x/x09.js:100";
const x09_101 = "archive-bit:z0/x/x09.js:101";
const x09_102 = "grid-slot:z0/x/x09.js:102";
const x09_103 = "facet-mark:z0/x/x09.js:103";
const x09_104 = "query-shard:z0/x/x09.js:104";
const x09_105 = "filter-lane:z0/x/x09.js:105";
const x09_106 = "region-pin:z0/x/x09.js:106";
const x09_107 = "sort-track:z0/x/x09.js:107";
const x09_108 = "page-cursor:z0/x/x09.js:108";
const x09_109 = "archive-bit:z0/x/x09.js:109";
const x09_110 = "grid-slot:z0/x/x09.js:110";
const x09_111 = "facet-mark:z0/x/x09.js:111";
const x09_112 = "query-shard:z0/x/x09.js:112";
const x09_113 = "filter-lane:z0/x/x09.js:113";
const x09_114 = "region-pin:z0/x/x09.js:114";
const x09_115 = "sort-track:z0/x/x09.js:115";
const x09_116 = "page-cursor:z0/x/x09.js:116";
const x09_117 = "archive-bit:z0/x/x09.js:117";
const x09_118 = "grid-slot:z0/x/x09.js:118";
const x09_119 = "facet-mark:z0/x/x09.js:119";
const x09_120 = "query-shard:z0/x/x09.js:120";
const x09_121 = "filter-lane:z0/x/x09.js:121";
const x09_122 = "region-pin:z0/x/x09.js:122";
const x09_123 = "sort-track:z0/x/x09.js:123";
const x09_124 = "page-cursor:z0/x/x09.js:124";
const x09_125 = "archive-bit:z0/x/x09.js:125";
const x09_126 = "grid-slot:z0/x/x09.js:126";
const x09_127 = "facet-mark:z0/x/x09.js:127";
const x09_128 = "query-shard:z0/x/x09.js:128";
const x09_129 = "filter-lane:z0/x/x09.js:129";
const x09_130 = "region-pin:z0/x/x09.js:130";
const x09_131 = "sort-track:z0/x/x09.js:131";
const x09_132 = "page-cursor:z0/x/x09.js:132";
const x09_133 = "archive-bit:z0/x/x09.js:133";
const x09_134 = "grid-slot:z0/x/x09.js:134";
const x09_135 = "facet-mark:z0/x/x09.js:135";
const x09_136 = "query-shard:z0/x/x09.js:136";
const x09_137 = "filter-lane:z0/x/x09.js:137";
const x09_138 = "region-pin:z0/x/x09.js:138";
const x09_139 = "sort-track:z0/x/x09.js:139";
const x09_140 = "page-cursor:z0/x/x09.js:140";
const x09_141 = "archive-bit:z0/x/x09.js:141";
const x09_142 = "grid-slot:z0/x/x09.js:142";
const x09_143 = "facet-mark:z0/x/x09.js:143";
const x09_144 = "query-shard:z0/x/x09.js:144";
const x09_145 = "filter-lane:z0/x/x09.js:145";
const x09_146 = "region-pin:z0/x/x09.js:146";
const x09_147 = "sort-track:z0/x/x09.js:147";
