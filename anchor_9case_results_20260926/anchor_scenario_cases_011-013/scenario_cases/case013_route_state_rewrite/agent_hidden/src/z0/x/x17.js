import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 17,
  salt: 'r:0h:trail',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 9,
  mask: 3576916331
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/17/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '8', y: '8', n: 1 }
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
const x17_0 = "route-echo:x\\x17.js:000";
const x17_1 = "path-lane:x\\x17.js:001";
const x17_2 = "view-pin:x\\x17.js:002";
const x17_3 = "scroll-mark:x\\x17.js:003";
const x17_4 = "policy-slot:x\\x17.js:004";
const x17_5 = "crumb-track:x\\x17.js:005";
const x17_6 = "rewrite-shard:x\\x17.js:006";
const x17_7 = "trail-cell:x\\x17.js:007";
const x17_8 = "route-echo:x\\x17.js:008";
const x17_9 = "path-lane:x\\x17.js:009";
const x17_10 = "view-pin:x\\x17.js:010";
const x17_11 = "scroll-mark:x\\x17.js:011";
const x17_12 = "policy-slot:x\\x17.js:012";
const x17_13 = "crumb-track:x\\x17.js:013";
const x17_14 = "rewrite-shard:x\\x17.js:014";
const x17_15 = "trail-cell:x\\x17.js:015";
const x17_16 = "route-echo:x\\x17.js:016";
const x17_17 = "path-lane:x\\x17.js:017";
const x17_18 = "view-pin:x\\x17.js:018";
const x17_19 = "scroll-mark:x\\x17.js:019";
const x17_20 = "policy-slot:x\\x17.js:020";
const x17_21 = "crumb-track:x\\x17.js:021";
const x17_22 = "rewrite-shard:x\\x17.js:022";
const x17_23 = "trail-cell:x\\x17.js:023";
const x17_24 = "route-echo:x\\x17.js:024";
const x17_25 = "path-lane:x\\x17.js:025";
const x17_26 = "view-pin:x\\x17.js:026";
const x17_27 = "scroll-mark:x\\x17.js:027";
const x17_28 = "policy-slot:x\\x17.js:028";
const x17_29 = "crumb-track:x\\x17.js:029";
const x17_30 = "rewrite-shard:x\\x17.js:030";
const x17_31 = "trail-cell:x\\x17.js:031";
const x17_32 = "route-echo:x\\x17.js:032";
const x17_33 = "path-lane:x\\x17.js:033";
const x17_34 = "view-pin:x\\x17.js:034";
const x17_35 = "scroll-mark:x\\x17.js:035";
const x17_36 = "policy-slot:x\\x17.js:036";
const x17_37 = "crumb-track:x\\x17.js:037";
const x17_38 = "rewrite-shard:x\\x17.js:038";
const x17_39 = "trail-cell:x\\x17.js:039";
const x17_40 = "route-echo:x\\x17.js:040";
const x17_41 = "path-lane:x\\x17.js:041";
const x17_42 = "view-pin:x\\x17.js:042";
const x17_43 = "scroll-mark:x\\x17.js:043";
const x17_44 = "policy-slot:x\\x17.js:044";
const x17_45 = "crumb-track:x\\x17.js:045";
const x17_46 = "rewrite-shard:x\\x17.js:046";
const x17_47 = "trail-cell:x\\x17.js:047";
const x17_48 = "route-echo:x\\x17.js:048";
const x17_49 = "path-lane:x\\x17.js:049";
const x17_50 = "view-pin:x\\x17.js:050";
const x17_51 = "scroll-mark:x\\x17.js:051";
const x17_52 = "policy-slot:x\\x17.js:052";
const x17_53 = "crumb-track:x\\x17.js:053";
const x17_54 = "rewrite-shard:x\\x17.js:054";
const x17_55 = "trail-cell:x\\x17.js:055";
const x17_56 = "route-echo:x\\x17.js:056";
const x17_57 = "path-lane:x\\x17.js:057";
const x17_58 = "view-pin:x\\x17.js:058";
const x17_59 = "scroll-mark:x\\x17.js:059";
const x17_60 = "policy-slot:x\\x17.js:060";
const x17_61 = "crumb-track:x\\x17.js:061";
const x17_62 = "rewrite-shard:x\\x17.js:062";
const x17_63 = "trail-cell:x\\x17.js:063";
const x17_64 = "route-echo:x\\x17.js:064";
const x17_65 = "path-lane:x\\x17.js:065";
const x17_66 = "view-pin:x\\x17.js:066";
const x17_67 = "scroll-mark:x\\x17.js:067";
const x17_68 = "policy-slot:x\\x17.js:068";
const x17_69 = "crumb-track:x\\x17.js:069";
const x17_70 = "rewrite-shard:x\\x17.js:070";
const x17_71 = "trail-cell:x\\x17.js:071";
const x17_72 = "route-echo:x\\x17.js:072";
const x17_73 = "path-lane:x\\x17.js:073";
const x17_74 = "view-pin:x\\x17.js:074";
const x17_75 = "scroll-mark:x\\x17.js:075";
const x17_76 = "policy-slot:x\\x17.js:076";
const x17_77 = "crumb-track:x\\x17.js:077";
const x17_78 = "rewrite-shard:x\\x17.js:078";
const x17_79 = "trail-cell:x\\x17.js:079";
const x17_80 = "route-echo:x\\x17.js:080";
const x17_81 = "path-lane:x\\x17.js:081";
const x17_82 = "view-pin:x\\x17.js:082";
const x17_83 = "scroll-mark:x\\x17.js:083";
const x17_84 = "policy-slot:x\\x17.js:084";
const x17_85 = "crumb-track:x\\x17.js:085";
const x17_86 = "rewrite-shard:x\\x17.js:086";
const x17_87 = "trail-cell:x\\x17.js:087";
const x17_88 = "route-echo:x\\x17.js:088";
const x17_89 = "path-lane:x\\x17.js:089";
const x17_90 = "view-pin:x\\x17.js:090";
const x17_91 = "scroll-mark:x\\x17.js:091";
const x17_92 = "policy-slot:x\\x17.js:092";
const x17_93 = "crumb-track:x\\x17.js:093";
const x17_94 = "rewrite-shard:x\\x17.js:094";
const x17_95 = "trail-cell:x\\x17.js:095";
const x17_96 = "route-echo:x\\x17.js:096";
const x17_97 = "path-lane:x\\x17.js:097";
const x17_98 = "view-pin:x\\x17.js:098";
const x17_99 = "scroll-mark:x\\x17.js:099";
const x17_100 = "policy-slot:x\\x17.js:100";
const x17_101 = "crumb-track:x\\x17.js:101";
const x17_102 = "rewrite-shard:x\\x17.js:102";
const x17_103 = "trail-cell:x\\x17.js:103";
const x17_104 = "route-echo:x\\x17.js:104";
const x17_105 = "path-lane:x\\x17.js:105";
const x17_106 = "view-pin:x\\x17.js:106";
const x17_107 = "scroll-mark:x\\x17.js:107";
const x17_108 = "policy-slot:x\\x17.js:108";
const x17_109 = "crumb-track:x\\x17.js:109";
const x17_110 = "rewrite-shard:x\\x17.js:110";
const x17_111 = "trail-cell:x\\x17.js:111";
const x17_112 = "route-echo:x\\x17.js:112";
const x17_113 = "path-lane:x\\x17.js:113";
const x17_114 = "view-pin:x\\x17.js:114";
const x17_115 = "scroll-mark:x\\x17.js:115";
const x17_116 = "policy-slot:x\\x17.js:116";
const x17_117 = "crumb-track:x\\x17.js:117";
const x17_118 = "rewrite-shard:x\\x17.js:118";
const x17_119 = "trail-cell:x\\x17.js:119";
const x17_120 = "route-echo:x\\x17.js:120";
const x17_121 = "path-lane:x\\x17.js:121";
const x17_122 = "view-pin:x\\x17.js:122";
const x17_123 = "scroll-mark:x\\x17.js:123";
const x17_124 = "policy-slot:x\\x17.js:124";
const x17_125 = "crumb-track:x\\x17.js:125";
const x17_126 = "rewrite-shard:x\\x17.js:126";
const x17_127 = "trail-cell:x\\x17.js:127";
const x17_128 = "route-echo:x\\x17.js:128";
const x17_129 = "path-lane:x\\x17.js:129";
const x17_130 = "view-pin:x\\x17.js:130";
const x17_131 = "scroll-mark:x\\x17.js:131";
const x17_132 = "policy-slot:x\\x17.js:132";
const x17_133 = "crumb-track:x\\x17.js:133";
const x17_134 = "rewrite-shard:x\\x17.js:134";
const x17_135 = "trail-cell:x\\x17.js:135";
const x17_136 = "route-echo:x\\x17.js:136";
const x17_137 = "path-lane:x\\x17.js:137";
const x17_138 = "view-pin:x\\x17.js:138";
const x17_139 = "scroll-mark:x\\x17.js:139";
const x17_140 = "policy-slot:x\\x17.js:140";
const x17_141 = "crumb-track:x\\x17.js:141";
const x17_142 = "rewrite-shard:x\\x17.js:142";
const x17_143 = "trail-cell:x\\x17.js:143";
const x17_144 = "route-echo:x\\x17.js:144";
const x17_145 = "path-lane:x\\x17.js:145";
const x17_146 = "view-pin:x\\x17.js:146";
const x17_147 = "scroll-mark:x\\x17.js:147";
const x17_148 = "policy-slot:x\\x17.js:148";
