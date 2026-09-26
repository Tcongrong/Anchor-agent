import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 13,
  salt: 'r:0d:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2061',
  shift: 5,
  mask: 1549107879
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/13/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '4', y: '4', n: 1 }
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
const x13_0 = "route-echo:x\\x13.js:000";
const x13_1 = "path-lane:x\\x13.js:001";
const x13_2 = "view-pin:x\\x13.js:002";
const x13_3 = "scroll-mark:x\\x13.js:003";
const x13_4 = "policy-slot:x\\x13.js:004";
const x13_5 = "crumb-track:x\\x13.js:005";
const x13_6 = "rewrite-shard:x\\x13.js:006";
const x13_7 = "trail-cell:x\\x13.js:007";
const x13_8 = "route-echo:x\\x13.js:008";
const x13_9 = "path-lane:x\\x13.js:009";
const x13_10 = "view-pin:x\\x13.js:010";
const x13_11 = "scroll-mark:x\\x13.js:011";
const x13_12 = "policy-slot:x\\x13.js:012";
const x13_13 = "crumb-track:x\\x13.js:013";
const x13_14 = "rewrite-shard:x\\x13.js:014";
const x13_15 = "trail-cell:x\\x13.js:015";
const x13_16 = "route-echo:x\\x13.js:016";
const x13_17 = "path-lane:x\\x13.js:017";
const x13_18 = "view-pin:x\\x13.js:018";
const x13_19 = "scroll-mark:x\\x13.js:019";
const x13_20 = "policy-slot:x\\x13.js:020";
const x13_21 = "crumb-track:x\\x13.js:021";
const x13_22 = "rewrite-shard:x\\x13.js:022";
const x13_23 = "trail-cell:x\\x13.js:023";
const x13_24 = "route-echo:x\\x13.js:024";
const x13_25 = "path-lane:x\\x13.js:025";
const x13_26 = "view-pin:x\\x13.js:026";
const x13_27 = "scroll-mark:x\\x13.js:027";
const x13_28 = "policy-slot:x\\x13.js:028";
const x13_29 = "crumb-track:x\\x13.js:029";
const x13_30 = "rewrite-shard:x\\x13.js:030";
const x13_31 = "trail-cell:x\\x13.js:031";
const x13_32 = "route-echo:x\\x13.js:032";
const x13_33 = "path-lane:x\\x13.js:033";
const x13_34 = "view-pin:x\\x13.js:034";
const x13_35 = "scroll-mark:x\\x13.js:035";
const x13_36 = "policy-slot:x\\x13.js:036";
const x13_37 = "crumb-track:x\\x13.js:037";
const x13_38 = "rewrite-shard:x\\x13.js:038";
const x13_39 = "trail-cell:x\\x13.js:039";
const x13_40 = "route-echo:x\\x13.js:040";
const x13_41 = "path-lane:x\\x13.js:041";
const x13_42 = "view-pin:x\\x13.js:042";
const x13_43 = "scroll-mark:x\\x13.js:043";
const x13_44 = "policy-slot:x\\x13.js:044";
const x13_45 = "crumb-track:x\\x13.js:045";
const x13_46 = "rewrite-shard:x\\x13.js:046";
const x13_47 = "trail-cell:x\\x13.js:047";
const x13_48 = "route-echo:x\\x13.js:048";
const x13_49 = "path-lane:x\\x13.js:049";
const x13_50 = "view-pin:x\\x13.js:050";
const x13_51 = "scroll-mark:x\\x13.js:051";
const x13_52 = "policy-slot:x\\x13.js:052";
const x13_53 = "crumb-track:x\\x13.js:053";
const x13_54 = "rewrite-shard:x\\x13.js:054";
const x13_55 = "trail-cell:x\\x13.js:055";
const x13_56 = "route-echo:x\\x13.js:056";
const x13_57 = "path-lane:x\\x13.js:057";
const x13_58 = "view-pin:x\\x13.js:058";
const x13_59 = "scroll-mark:x\\x13.js:059";
const x13_60 = "policy-slot:x\\x13.js:060";
const x13_61 = "crumb-track:x\\x13.js:061";
const x13_62 = "rewrite-shard:x\\x13.js:062";
const x13_63 = "trail-cell:x\\x13.js:063";
const x13_64 = "route-echo:x\\x13.js:064";
const x13_65 = "path-lane:x\\x13.js:065";
const x13_66 = "view-pin:x\\x13.js:066";
const x13_67 = "scroll-mark:x\\x13.js:067";
const x13_68 = "policy-slot:x\\x13.js:068";
const x13_69 = "crumb-track:x\\x13.js:069";
const x13_70 = "rewrite-shard:x\\x13.js:070";
const x13_71 = "trail-cell:x\\x13.js:071";
const x13_72 = "route-echo:x\\x13.js:072";
const x13_73 = "path-lane:x\\x13.js:073";
const x13_74 = "view-pin:x\\x13.js:074";
const x13_75 = "scroll-mark:x\\x13.js:075";
const x13_76 = "policy-slot:x\\x13.js:076";
const x13_77 = "crumb-track:x\\x13.js:077";
const x13_78 = "rewrite-shard:x\\x13.js:078";
const x13_79 = "trail-cell:x\\x13.js:079";
const x13_80 = "route-echo:x\\x13.js:080";
const x13_81 = "path-lane:x\\x13.js:081";
const x13_82 = "view-pin:x\\x13.js:082";
const x13_83 = "scroll-mark:x\\x13.js:083";
const x13_84 = "policy-slot:x\\x13.js:084";
const x13_85 = "crumb-track:x\\x13.js:085";
const x13_86 = "rewrite-shard:x\\x13.js:086";
const x13_87 = "trail-cell:x\\x13.js:087";
const x13_88 = "route-echo:x\\x13.js:088";
const x13_89 = "path-lane:x\\x13.js:089";
const x13_90 = "view-pin:x\\x13.js:090";
const x13_91 = "scroll-mark:x\\x13.js:091";
const x13_92 = "policy-slot:x\\x13.js:092";
const x13_93 = "crumb-track:x\\x13.js:093";
const x13_94 = "rewrite-shard:x\\x13.js:094";
const x13_95 = "trail-cell:x\\x13.js:095";
const x13_96 = "route-echo:x\\x13.js:096";
const x13_97 = "path-lane:x\\x13.js:097";
const x13_98 = "view-pin:x\\x13.js:098";
const x13_99 = "scroll-mark:x\\x13.js:099";
const x13_100 = "policy-slot:x\\x13.js:100";
const x13_101 = "crumb-track:x\\x13.js:101";
const x13_102 = "rewrite-shard:x\\x13.js:102";
const x13_103 = "trail-cell:x\\x13.js:103";
const x13_104 = "route-echo:x\\x13.js:104";
const x13_105 = "path-lane:x\\x13.js:105";
const x13_106 = "view-pin:x\\x13.js:106";
const x13_107 = "scroll-mark:x\\x13.js:107";
const x13_108 = "policy-slot:x\\x13.js:108";
const x13_109 = "crumb-track:x\\x13.js:109";
const x13_110 = "rewrite-shard:x\\x13.js:110";
const x13_111 = "trail-cell:x\\x13.js:111";
const x13_112 = "route-echo:x\\x13.js:112";
const x13_113 = "path-lane:x\\x13.js:113";
const x13_114 = "view-pin:x\\x13.js:114";
const x13_115 = "scroll-mark:x\\x13.js:115";
const x13_116 = "policy-slot:x\\x13.js:116";
const x13_117 = "crumb-track:x\\x13.js:117";
const x13_118 = "rewrite-shard:x\\x13.js:118";
const x13_119 = "trail-cell:x\\x13.js:119";
const x13_120 = "route-echo:x\\x13.js:120";
const x13_121 = "path-lane:x\\x13.js:121";
const x13_122 = "view-pin:x\\x13.js:122";
const x13_123 = "scroll-mark:x\\x13.js:123";
const x13_124 = "policy-slot:x\\x13.js:124";
const x13_125 = "crumb-track:x\\x13.js:125";
const x13_126 = "rewrite-shard:x\\x13.js:126";
const x13_127 = "trail-cell:x\\x13.js:127";
const x13_128 = "route-echo:x\\x13.js:128";
const x13_129 = "path-lane:x\\x13.js:129";
const x13_130 = "view-pin:x\\x13.js:130";
const x13_131 = "scroll-mark:x\\x13.js:131";
const x13_132 = "policy-slot:x\\x13.js:132";
const x13_133 = "crumb-track:x\\x13.js:133";
const x13_134 = "rewrite-shard:x\\x13.js:134";
const x13_135 = "trail-cell:x\\x13.js:135";
const x13_136 = "route-echo:x\\x13.js:136";
const x13_137 = "path-lane:x\\x13.js:137";
const x13_138 = "view-pin:x\\x13.js:138";
const x13_139 = "scroll-mark:x\\x13.js:139";
const x13_140 = "policy-slot:x\\x13.js:140";
const x13_141 = "crumb-track:x\\x13.js:141";
const x13_142 = "rewrite-shard:x\\x13.js:142";
const x13_143 = "trail-cell:x\\x13.js:143";
const x13_144 = "route-echo:x\\x13.js:144";
const x13_145 = "path-lane:x\\x13.js:145";
const x13_146 = "view-pin:x\\x13.js:146";
const x13_147 = "scroll-mark:x\\x13.js:147";
const x13_148 = "policy-slot:x\\x13.js:148";
