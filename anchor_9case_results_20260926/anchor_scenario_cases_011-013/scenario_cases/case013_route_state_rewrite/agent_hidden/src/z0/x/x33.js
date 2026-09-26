import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 33,
  salt: 'r:0x:trail',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2061',
  shift: 13,
  mask: 3098215547
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/33/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '6', y: '6', n: 1 }
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
const x33_0 = "route-echo:x\\x33.js:000";
const x33_1 = "path-lane:x\\x33.js:001";
const x33_2 = "view-pin:x\\x33.js:002";
const x33_3 = "scroll-mark:x\\x33.js:003";
const x33_4 = "policy-slot:x\\x33.js:004";
const x33_5 = "crumb-track:x\\x33.js:005";
const x33_6 = "rewrite-shard:x\\x33.js:006";
const x33_7 = "trail-cell:x\\x33.js:007";
const x33_8 = "route-echo:x\\x33.js:008";
const x33_9 = "path-lane:x\\x33.js:009";
const x33_10 = "view-pin:x\\x33.js:010";
const x33_11 = "scroll-mark:x\\x33.js:011";
const x33_12 = "policy-slot:x\\x33.js:012";
const x33_13 = "crumb-track:x\\x33.js:013";
const x33_14 = "rewrite-shard:x\\x33.js:014";
const x33_15 = "trail-cell:x\\x33.js:015";
const x33_16 = "route-echo:x\\x33.js:016";
const x33_17 = "path-lane:x\\x33.js:017";
const x33_18 = "view-pin:x\\x33.js:018";
const x33_19 = "scroll-mark:x\\x33.js:019";
const x33_20 = "policy-slot:x\\x33.js:020";
const x33_21 = "crumb-track:x\\x33.js:021";
const x33_22 = "rewrite-shard:x\\x33.js:022";
const x33_23 = "trail-cell:x\\x33.js:023";
const x33_24 = "route-echo:x\\x33.js:024";
const x33_25 = "path-lane:x\\x33.js:025";
const x33_26 = "view-pin:x\\x33.js:026";
const x33_27 = "scroll-mark:x\\x33.js:027";
const x33_28 = "policy-slot:x\\x33.js:028";
const x33_29 = "crumb-track:x\\x33.js:029";
const x33_30 = "rewrite-shard:x\\x33.js:030";
const x33_31 = "trail-cell:x\\x33.js:031";
const x33_32 = "route-echo:x\\x33.js:032";
const x33_33 = "path-lane:x\\x33.js:033";
const x33_34 = "view-pin:x\\x33.js:034";
const x33_35 = "scroll-mark:x\\x33.js:035";
const x33_36 = "policy-slot:x\\x33.js:036";
const x33_37 = "crumb-track:x\\x33.js:037";
const x33_38 = "rewrite-shard:x\\x33.js:038";
const x33_39 = "trail-cell:x\\x33.js:039";
const x33_40 = "route-echo:x\\x33.js:040";
const x33_41 = "path-lane:x\\x33.js:041";
const x33_42 = "view-pin:x\\x33.js:042";
const x33_43 = "scroll-mark:x\\x33.js:043";
const x33_44 = "policy-slot:x\\x33.js:044";
const x33_45 = "crumb-track:x\\x33.js:045";
const x33_46 = "rewrite-shard:x\\x33.js:046";
const x33_47 = "trail-cell:x\\x33.js:047";
const x33_48 = "route-echo:x\\x33.js:048";
const x33_49 = "path-lane:x\\x33.js:049";
const x33_50 = "view-pin:x\\x33.js:050";
const x33_51 = "scroll-mark:x\\x33.js:051";
const x33_52 = "policy-slot:x\\x33.js:052";
const x33_53 = "crumb-track:x\\x33.js:053";
const x33_54 = "rewrite-shard:x\\x33.js:054";
const x33_55 = "trail-cell:x\\x33.js:055";
const x33_56 = "route-echo:x\\x33.js:056";
const x33_57 = "path-lane:x\\x33.js:057";
const x33_58 = "view-pin:x\\x33.js:058";
const x33_59 = "scroll-mark:x\\x33.js:059";
const x33_60 = "policy-slot:x\\x33.js:060";
const x33_61 = "crumb-track:x\\x33.js:061";
const x33_62 = "rewrite-shard:x\\x33.js:062";
const x33_63 = "trail-cell:x\\x33.js:063";
const x33_64 = "route-echo:x\\x33.js:064";
const x33_65 = "path-lane:x\\x33.js:065";
const x33_66 = "view-pin:x\\x33.js:066";
const x33_67 = "scroll-mark:x\\x33.js:067";
const x33_68 = "policy-slot:x\\x33.js:068";
const x33_69 = "crumb-track:x\\x33.js:069";
const x33_70 = "rewrite-shard:x\\x33.js:070";
const x33_71 = "trail-cell:x\\x33.js:071";
const x33_72 = "route-echo:x\\x33.js:072";
const x33_73 = "path-lane:x\\x33.js:073";
const x33_74 = "view-pin:x\\x33.js:074";
const x33_75 = "scroll-mark:x\\x33.js:075";
const x33_76 = "policy-slot:x\\x33.js:076";
const x33_77 = "crumb-track:x\\x33.js:077";
const x33_78 = "rewrite-shard:x\\x33.js:078";
const x33_79 = "trail-cell:x\\x33.js:079";
const x33_80 = "route-echo:x\\x33.js:080";
const x33_81 = "path-lane:x\\x33.js:081";
const x33_82 = "view-pin:x\\x33.js:082";
const x33_83 = "scroll-mark:x\\x33.js:083";
const x33_84 = "policy-slot:x\\x33.js:084";
const x33_85 = "crumb-track:x\\x33.js:085";
const x33_86 = "rewrite-shard:x\\x33.js:086";
const x33_87 = "trail-cell:x\\x33.js:087";
const x33_88 = "route-echo:x\\x33.js:088";
const x33_89 = "path-lane:x\\x33.js:089";
const x33_90 = "view-pin:x\\x33.js:090";
const x33_91 = "scroll-mark:x\\x33.js:091";
const x33_92 = "policy-slot:x\\x33.js:092";
const x33_93 = "crumb-track:x\\x33.js:093";
const x33_94 = "rewrite-shard:x\\x33.js:094";
const x33_95 = "trail-cell:x\\x33.js:095";
const x33_96 = "route-echo:x\\x33.js:096";
const x33_97 = "path-lane:x\\x33.js:097";
const x33_98 = "view-pin:x\\x33.js:098";
const x33_99 = "scroll-mark:x\\x33.js:099";
const x33_100 = "policy-slot:x\\x33.js:100";
const x33_101 = "crumb-track:x\\x33.js:101";
const x33_102 = "rewrite-shard:x\\x33.js:102";
const x33_103 = "trail-cell:x\\x33.js:103";
const x33_104 = "route-echo:x\\x33.js:104";
const x33_105 = "path-lane:x\\x33.js:105";
const x33_106 = "view-pin:x\\x33.js:106";
const x33_107 = "scroll-mark:x\\x33.js:107";
const x33_108 = "policy-slot:x\\x33.js:108";
const x33_109 = "crumb-track:x\\x33.js:109";
const x33_110 = "rewrite-shard:x\\x33.js:110";
const x33_111 = "trail-cell:x\\x33.js:111";
const x33_112 = "route-echo:x\\x33.js:112";
const x33_113 = "path-lane:x\\x33.js:113";
const x33_114 = "view-pin:x\\x33.js:114";
const x33_115 = "scroll-mark:x\\x33.js:115";
const x33_116 = "policy-slot:x\\x33.js:116";
const x33_117 = "crumb-track:x\\x33.js:117";
const x33_118 = "rewrite-shard:x\\x33.js:118";
const x33_119 = "trail-cell:x\\x33.js:119";
const x33_120 = "route-echo:x\\x33.js:120";
const x33_121 = "path-lane:x\\x33.js:121";
const x33_122 = "view-pin:x\\x33.js:122";
const x33_123 = "scroll-mark:x\\x33.js:123";
const x33_124 = "policy-slot:x\\x33.js:124";
const x33_125 = "crumb-track:x\\x33.js:125";
const x33_126 = "rewrite-shard:x\\x33.js:126";
const x33_127 = "trail-cell:x\\x33.js:127";
const x33_128 = "route-echo:x\\x33.js:128";
const x33_129 = "path-lane:x\\x33.js:129";
const x33_130 = "view-pin:x\\x33.js:130";
const x33_131 = "scroll-mark:x\\x33.js:131";
const x33_132 = "policy-slot:x\\x33.js:132";
const x33_133 = "crumb-track:x\\x33.js:133";
const x33_134 = "rewrite-shard:x\\x33.js:134";
const x33_135 = "trail-cell:x\\x33.js:135";
const x33_136 = "route-echo:x\\x33.js:136";
const x33_137 = "path-lane:x\\x33.js:137";
const x33_138 = "view-pin:x\\x33.js:138";
const x33_139 = "scroll-mark:x\\x33.js:139";
const x33_140 = "policy-slot:x\\x33.js:140";
const x33_141 = "crumb-track:x\\x33.js:141";
const x33_142 = "rewrite-shard:x\\x33.js:142";
const x33_143 = "trail-cell:x\\x33.js:143";
const x33_144 = "route-echo:x\\x33.js:144";
const x33_145 = "path-lane:x\\x33.js:145";
const x33_146 = "view-pin:x\\x33.js:146";
const x33_147 = "scroll-mark:x\\x33.js:147";
const x33_148 = "policy-slot:x\\x33.js:148";
