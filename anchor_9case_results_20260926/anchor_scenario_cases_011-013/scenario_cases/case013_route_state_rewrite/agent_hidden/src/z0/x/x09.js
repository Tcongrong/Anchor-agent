import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 9,
  salt: 'r:09:trail',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2061',
  shift: 13,
  mask: 3816266723
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/9/shadow', y: 'shadow', n: 15 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '0', y: '0', n: 1 }
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
const x09_0 = "route-echo:x\\x09.js:000";
const x09_1 = "path-lane:x\\x09.js:001";
const x09_2 = "view-pin:x\\x09.js:002";
const x09_3 = "scroll-mark:x\\x09.js:003";
const x09_4 = "policy-slot:x\\x09.js:004";
const x09_5 = "crumb-track:x\\x09.js:005";
const x09_6 = "rewrite-shard:x\\x09.js:006";
const x09_7 = "trail-cell:x\\x09.js:007";
const x09_8 = "route-echo:x\\x09.js:008";
const x09_9 = "path-lane:x\\x09.js:009";
const x09_10 = "view-pin:x\\x09.js:010";
const x09_11 = "scroll-mark:x\\x09.js:011";
const x09_12 = "policy-slot:x\\x09.js:012";
const x09_13 = "crumb-track:x\\x09.js:013";
const x09_14 = "rewrite-shard:x\\x09.js:014";
const x09_15 = "trail-cell:x\\x09.js:015";
const x09_16 = "route-echo:x\\x09.js:016";
const x09_17 = "path-lane:x\\x09.js:017";
const x09_18 = "view-pin:x\\x09.js:018";
const x09_19 = "scroll-mark:x\\x09.js:019";
const x09_20 = "policy-slot:x\\x09.js:020";
const x09_21 = "crumb-track:x\\x09.js:021";
const x09_22 = "rewrite-shard:x\\x09.js:022";
const x09_23 = "trail-cell:x\\x09.js:023";
const x09_24 = "route-echo:x\\x09.js:024";
const x09_25 = "path-lane:x\\x09.js:025";
const x09_26 = "view-pin:x\\x09.js:026";
const x09_27 = "scroll-mark:x\\x09.js:027";
const x09_28 = "policy-slot:x\\x09.js:028";
const x09_29 = "crumb-track:x\\x09.js:029";
const x09_30 = "rewrite-shard:x\\x09.js:030";
const x09_31 = "trail-cell:x\\x09.js:031";
const x09_32 = "route-echo:x\\x09.js:032";
const x09_33 = "path-lane:x\\x09.js:033";
const x09_34 = "view-pin:x\\x09.js:034";
const x09_35 = "scroll-mark:x\\x09.js:035";
const x09_36 = "policy-slot:x\\x09.js:036";
const x09_37 = "crumb-track:x\\x09.js:037";
const x09_38 = "rewrite-shard:x\\x09.js:038";
const x09_39 = "trail-cell:x\\x09.js:039";
const x09_40 = "route-echo:x\\x09.js:040";
const x09_41 = "path-lane:x\\x09.js:041";
const x09_42 = "view-pin:x\\x09.js:042";
const x09_43 = "scroll-mark:x\\x09.js:043";
const x09_44 = "policy-slot:x\\x09.js:044";
const x09_45 = "crumb-track:x\\x09.js:045";
const x09_46 = "rewrite-shard:x\\x09.js:046";
const x09_47 = "trail-cell:x\\x09.js:047";
const x09_48 = "route-echo:x\\x09.js:048";
const x09_49 = "path-lane:x\\x09.js:049";
const x09_50 = "view-pin:x\\x09.js:050";
const x09_51 = "scroll-mark:x\\x09.js:051";
const x09_52 = "policy-slot:x\\x09.js:052";
const x09_53 = "crumb-track:x\\x09.js:053";
const x09_54 = "rewrite-shard:x\\x09.js:054";
const x09_55 = "trail-cell:x\\x09.js:055";
const x09_56 = "route-echo:x\\x09.js:056";
const x09_57 = "path-lane:x\\x09.js:057";
const x09_58 = "view-pin:x\\x09.js:058";
const x09_59 = "scroll-mark:x\\x09.js:059";
const x09_60 = "policy-slot:x\\x09.js:060";
const x09_61 = "crumb-track:x\\x09.js:061";
const x09_62 = "rewrite-shard:x\\x09.js:062";
const x09_63 = "trail-cell:x\\x09.js:063";
const x09_64 = "route-echo:x\\x09.js:064";
const x09_65 = "path-lane:x\\x09.js:065";
const x09_66 = "view-pin:x\\x09.js:066";
const x09_67 = "scroll-mark:x\\x09.js:067";
const x09_68 = "policy-slot:x\\x09.js:068";
const x09_69 = "crumb-track:x\\x09.js:069";
const x09_70 = "rewrite-shard:x\\x09.js:070";
const x09_71 = "trail-cell:x\\x09.js:071";
const x09_72 = "route-echo:x\\x09.js:072";
const x09_73 = "path-lane:x\\x09.js:073";
const x09_74 = "view-pin:x\\x09.js:074";
const x09_75 = "scroll-mark:x\\x09.js:075";
const x09_76 = "policy-slot:x\\x09.js:076";
const x09_77 = "crumb-track:x\\x09.js:077";
const x09_78 = "rewrite-shard:x\\x09.js:078";
const x09_79 = "trail-cell:x\\x09.js:079";
const x09_80 = "route-echo:x\\x09.js:080";
const x09_81 = "path-lane:x\\x09.js:081";
const x09_82 = "view-pin:x\\x09.js:082";
const x09_83 = "scroll-mark:x\\x09.js:083";
const x09_84 = "policy-slot:x\\x09.js:084";
const x09_85 = "crumb-track:x\\x09.js:085";
const x09_86 = "rewrite-shard:x\\x09.js:086";
const x09_87 = "trail-cell:x\\x09.js:087";
const x09_88 = "route-echo:x\\x09.js:088";
const x09_89 = "path-lane:x\\x09.js:089";
const x09_90 = "view-pin:x\\x09.js:090";
const x09_91 = "scroll-mark:x\\x09.js:091";
const x09_92 = "policy-slot:x\\x09.js:092";
const x09_93 = "crumb-track:x\\x09.js:093";
const x09_94 = "rewrite-shard:x\\x09.js:094";
const x09_95 = "trail-cell:x\\x09.js:095";
const x09_96 = "route-echo:x\\x09.js:096";
const x09_97 = "path-lane:x\\x09.js:097";
const x09_98 = "view-pin:x\\x09.js:098";
const x09_99 = "scroll-mark:x\\x09.js:099";
const x09_100 = "policy-slot:x\\x09.js:100";
const x09_101 = "crumb-track:x\\x09.js:101";
const x09_102 = "rewrite-shard:x\\x09.js:102";
const x09_103 = "trail-cell:x\\x09.js:103";
const x09_104 = "route-echo:x\\x09.js:104";
const x09_105 = "path-lane:x\\x09.js:105";
const x09_106 = "view-pin:x\\x09.js:106";
const x09_107 = "scroll-mark:x\\x09.js:107";
const x09_108 = "policy-slot:x\\x09.js:108";
const x09_109 = "crumb-track:x\\x09.js:109";
const x09_110 = "rewrite-shard:x\\x09.js:110";
const x09_111 = "trail-cell:x\\x09.js:111";
const x09_112 = "route-echo:x\\x09.js:112";
const x09_113 = "path-lane:x\\x09.js:113";
const x09_114 = "view-pin:x\\x09.js:114";
const x09_115 = "scroll-mark:x\\x09.js:115";
const x09_116 = "policy-slot:x\\x09.js:116";
const x09_117 = "crumb-track:x\\x09.js:117";
const x09_118 = "rewrite-shard:x\\x09.js:118";
const x09_119 = "trail-cell:x\\x09.js:119";
const x09_120 = "route-echo:x\\x09.js:120";
const x09_121 = "path-lane:x\\x09.js:121";
const x09_122 = "view-pin:x\\x09.js:122";
const x09_123 = "scroll-mark:x\\x09.js:123";
const x09_124 = "policy-slot:x\\x09.js:124";
const x09_125 = "crumb-track:x\\x09.js:125";
const x09_126 = "rewrite-shard:x\\x09.js:126";
const x09_127 = "trail-cell:x\\x09.js:127";
const x09_128 = "route-echo:x\\x09.js:128";
const x09_129 = "path-lane:x\\x09.js:129";
const x09_130 = "view-pin:x\\x09.js:130";
const x09_131 = "scroll-mark:x\\x09.js:131";
const x09_132 = "policy-slot:x\\x09.js:132";
const x09_133 = "crumb-track:x\\x09.js:133";
const x09_134 = "rewrite-shard:x\\x09.js:134";
const x09_135 = "trail-cell:x\\x09.js:135";
const x09_136 = "route-echo:x\\x09.js:136";
const x09_137 = "path-lane:x\\x09.js:137";
const x09_138 = "view-pin:x\\x09.js:138";
const x09_139 = "scroll-mark:x\\x09.js:139";
const x09_140 = "policy-slot:x\\x09.js:140";
const x09_141 = "crumb-track:x\\x09.js:141";
const x09_142 = "rewrite-shard:x\\x09.js:142";
const x09_143 = "trail-cell:x\\x09.js:143";
const x09_144 = "route-echo:x\\x09.js:144";
const x09_145 = "path-lane:x\\x09.js:145";
const x09_146 = "view-pin:x\\x09.js:146";
const x09_147 = "scroll-mark:x\\x09.js:147";
const x09_148 = "policy-slot:x\\x09.js:148";
