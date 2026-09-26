import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 21,
  salt: 'r:0l:trail',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2061',
  shift: 13,
  mask: 1309757487
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/21/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '3', y: '3', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(2, 11) + '=' + (cfg.slot * 3 + 1).toString(36) + 'q1';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x21_0 = "route-echo:x\\x21.js:000";
const x21_1 = "path-lane:x\\x21.js:001";
const x21_2 = "view-pin:x\\x21.js:002";
const x21_3 = "scroll-mark:x\\x21.js:003";
const x21_4 = "policy-slot:x\\x21.js:004";
const x21_5 = "crumb-track:x\\x21.js:005";
const x21_6 = "rewrite-shard:x\\x21.js:006";
const x21_7 = "trail-cell:x\\x21.js:007";
const x21_8 = "route-echo:x\\x21.js:008";
const x21_9 = "path-lane:x\\x21.js:009";
const x21_10 = "view-pin:x\\x21.js:010";
const x21_11 = "scroll-mark:x\\x21.js:011";
const x21_12 = "policy-slot:x\\x21.js:012";
const x21_13 = "crumb-track:x\\x21.js:013";
const x21_14 = "rewrite-shard:x\\x21.js:014";
const x21_15 = "trail-cell:x\\x21.js:015";
const x21_16 = "route-echo:x\\x21.js:016";
const x21_17 = "path-lane:x\\x21.js:017";
const x21_18 = "view-pin:x\\x21.js:018";
const x21_19 = "scroll-mark:x\\x21.js:019";
const x21_20 = "policy-slot:x\\x21.js:020";
const x21_21 = "crumb-track:x\\x21.js:021";
const x21_22 = "rewrite-shard:x\\x21.js:022";
const x21_23 = "trail-cell:x\\x21.js:023";
const x21_24 = "route-echo:x\\x21.js:024";
const x21_25 = "path-lane:x\\x21.js:025";
const x21_26 = "view-pin:x\\x21.js:026";
const x21_27 = "scroll-mark:x\\x21.js:027";
const x21_28 = "policy-slot:x\\x21.js:028";
const x21_29 = "crumb-track:x\\x21.js:029";
const x21_30 = "rewrite-shard:x\\x21.js:030";
const x21_31 = "trail-cell:x\\x21.js:031";
const x21_32 = "route-echo:x\\x21.js:032";
const x21_33 = "path-lane:x\\x21.js:033";
const x21_34 = "view-pin:x\\x21.js:034";
const x21_35 = "scroll-mark:x\\x21.js:035";
const x21_36 = "policy-slot:x\\x21.js:036";
const x21_37 = "crumb-track:x\\x21.js:037";
const x21_38 = "rewrite-shard:x\\x21.js:038";
const x21_39 = "trail-cell:x\\x21.js:039";
const x21_40 = "route-echo:x\\x21.js:040";
const x21_41 = "path-lane:x\\x21.js:041";
const x21_42 = "view-pin:x\\x21.js:042";
const x21_43 = "scroll-mark:x\\x21.js:043";
const x21_44 = "policy-slot:x\\x21.js:044";
const x21_45 = "crumb-track:x\\x21.js:045";
const x21_46 = "rewrite-shard:x\\x21.js:046";
const x21_47 = "trail-cell:x\\x21.js:047";
const x21_48 = "route-echo:x\\x21.js:048";
const x21_49 = "path-lane:x\\x21.js:049";
const x21_50 = "view-pin:x\\x21.js:050";
const x21_51 = "scroll-mark:x\\x21.js:051";
const x21_52 = "policy-slot:x\\x21.js:052";
const x21_53 = "crumb-track:x\\x21.js:053";
const x21_54 = "rewrite-shard:x\\x21.js:054";
const x21_55 = "trail-cell:x\\x21.js:055";
const x21_56 = "route-echo:x\\x21.js:056";
const x21_57 = "path-lane:x\\x21.js:057";
const x21_58 = "view-pin:x\\x21.js:058";
const x21_59 = "scroll-mark:x\\x21.js:059";
const x21_60 = "policy-slot:x\\x21.js:060";
const x21_61 = "crumb-track:x\\x21.js:061";
const x21_62 = "rewrite-shard:x\\x21.js:062";
const x21_63 = "trail-cell:x\\x21.js:063";
const x21_64 = "route-echo:x\\x21.js:064";
const x21_65 = "path-lane:x\\x21.js:065";
const x21_66 = "view-pin:x\\x21.js:066";
const x21_67 = "scroll-mark:x\\x21.js:067";
const x21_68 = "policy-slot:x\\x21.js:068";
const x21_69 = "crumb-track:x\\x21.js:069";
const x21_70 = "rewrite-shard:x\\x21.js:070";
const x21_71 = "trail-cell:x\\x21.js:071";
const x21_72 = "route-echo:x\\x21.js:072";
const x21_73 = "path-lane:x\\x21.js:073";
const x21_74 = "view-pin:x\\x21.js:074";
const x21_75 = "scroll-mark:x\\x21.js:075";
const x21_76 = "policy-slot:x\\x21.js:076";
const x21_77 = "crumb-track:x\\x21.js:077";
const x21_78 = "rewrite-shard:x\\x21.js:078";
const x21_79 = "trail-cell:x\\x21.js:079";
const x21_80 = "route-echo:x\\x21.js:080";
const x21_81 = "path-lane:x\\x21.js:081";
const x21_82 = "view-pin:x\\x21.js:082";
const x21_83 = "scroll-mark:x\\x21.js:083";
const x21_84 = "policy-slot:x\\x21.js:084";
const x21_85 = "crumb-track:x\\x21.js:085";
const x21_86 = "rewrite-shard:x\\x21.js:086";
const x21_87 = "trail-cell:x\\x21.js:087";
const x21_88 = "route-echo:x\\x21.js:088";
const x21_89 = "path-lane:x\\x21.js:089";
const x21_90 = "view-pin:x\\x21.js:090";
const x21_91 = "scroll-mark:x\\x21.js:091";
const x21_92 = "policy-slot:x\\x21.js:092";
const x21_93 = "crumb-track:x\\x21.js:093";
const x21_94 = "rewrite-shard:x\\x21.js:094";
const x21_95 = "trail-cell:x\\x21.js:095";
const x21_96 = "route-echo:x\\x21.js:096";
const x21_97 = "path-lane:x\\x21.js:097";
const x21_98 = "view-pin:x\\x21.js:098";
const x21_99 = "scroll-mark:x\\x21.js:099";
const x21_100 = "policy-slot:x\\x21.js:100";
const x21_101 = "crumb-track:x\\x21.js:101";
const x21_102 = "rewrite-shard:x\\x21.js:102";
const x21_103 = "trail-cell:x\\x21.js:103";
const x21_104 = "route-echo:x\\x21.js:104";
const x21_105 = "path-lane:x\\x21.js:105";
const x21_106 = "view-pin:x\\x21.js:106";
const x21_107 = "scroll-mark:x\\x21.js:107";
const x21_108 = "policy-slot:x\\x21.js:108";
const x21_109 = "crumb-track:x\\x21.js:109";
const x21_110 = "rewrite-shard:x\\x21.js:110";
const x21_111 = "trail-cell:x\\x21.js:111";
const x21_112 = "route-echo:x\\x21.js:112";
const x21_113 = "path-lane:x\\x21.js:113";
const x21_114 = "view-pin:x\\x21.js:114";
const x21_115 = "scroll-mark:x\\x21.js:115";
const x21_116 = "policy-slot:x\\x21.js:116";
const x21_117 = "crumb-track:x\\x21.js:117";
const x21_118 = "rewrite-shard:x\\x21.js:118";
const x21_119 = "trail-cell:x\\x21.js:119";
const x21_120 = "route-echo:x\\x21.js:120";
const x21_121 = "path-lane:x\\x21.js:121";
const x21_122 = "view-pin:x\\x21.js:122";
const x21_123 = "scroll-mark:x\\x21.js:123";
const x21_124 = "policy-slot:x\\x21.js:124";
const x21_125 = "crumb-track:x\\x21.js:125";
const x21_126 = "rewrite-shard:x\\x21.js:126";
const x21_127 = "trail-cell:x\\x21.js:127";
const x21_128 = "route-echo:x\\x21.js:128";
const x21_129 = "path-lane:x\\x21.js:129";
const x21_130 = "view-pin:x\\x21.js:130";
const x21_131 = "scroll-mark:x\\x21.js:131";
const x21_132 = "policy-slot:x\\x21.js:132";
const x21_133 = "crumb-track:x\\x21.js:133";
const x21_134 = "rewrite-shard:x\\x21.js:134";
const x21_135 = "trail-cell:x\\x21.js:135";
const x21_136 = "route-echo:x\\x21.js:136";
const x21_137 = "path-lane:x\\x21.js:137";
const x21_138 = "view-pin:x\\x21.js:138";
const x21_139 = "scroll-mark:x\\x21.js:139";
const x21_140 = "policy-slot:x\\x21.js:140";
const x21_141 = "crumb-track:x\\x21.js:141";
const x21_142 = "rewrite-shard:x\\x21.js:142";
const x21_143 = "trail-cell:x\\x21.js:143";
const x21_144 = "route-echo:x\\x21.js:144";
const x21_145 = "path-lane:x\\x21.js:145";
const x21_146 = "view-pin:x\\x21.js:146";
const x21_147 = "scroll-mark:x\\x21.js:147";
const x21_148 = "policy-slot:x\\x21.js:148";
