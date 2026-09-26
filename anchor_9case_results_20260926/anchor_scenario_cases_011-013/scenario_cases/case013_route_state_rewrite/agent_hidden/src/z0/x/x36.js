import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 36,
  salt: 'r:10:trail',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 4,
  mask: 2471588238
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/36/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '0', y: '0', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 12) + '/' + (cfg.slot + 5).toString(36) + 'r0';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x36_0 = "route-echo:x\\x36.js:000";
const x36_1 = "path-lane:x\\x36.js:001";
const x36_2 = "view-pin:x\\x36.js:002";
const x36_3 = "scroll-mark:x\\x36.js:003";
const x36_4 = "policy-slot:x\\x36.js:004";
const x36_5 = "crumb-track:x\\x36.js:005";
const x36_6 = "rewrite-shard:x\\x36.js:006";
const x36_7 = "trail-cell:x\\x36.js:007";
const x36_8 = "route-echo:x\\x36.js:008";
const x36_9 = "path-lane:x\\x36.js:009";
const x36_10 = "view-pin:x\\x36.js:010";
const x36_11 = "scroll-mark:x\\x36.js:011";
const x36_12 = "policy-slot:x\\x36.js:012";
const x36_13 = "crumb-track:x\\x36.js:013";
const x36_14 = "rewrite-shard:x\\x36.js:014";
const x36_15 = "trail-cell:x\\x36.js:015";
const x36_16 = "route-echo:x\\x36.js:016";
const x36_17 = "path-lane:x\\x36.js:017";
const x36_18 = "view-pin:x\\x36.js:018";
const x36_19 = "scroll-mark:x\\x36.js:019";
const x36_20 = "policy-slot:x\\x36.js:020";
const x36_21 = "crumb-track:x\\x36.js:021";
const x36_22 = "rewrite-shard:x\\x36.js:022";
const x36_23 = "trail-cell:x\\x36.js:023";
const x36_24 = "route-echo:x\\x36.js:024";
const x36_25 = "path-lane:x\\x36.js:025";
const x36_26 = "view-pin:x\\x36.js:026";
const x36_27 = "scroll-mark:x\\x36.js:027";
const x36_28 = "policy-slot:x\\x36.js:028";
const x36_29 = "crumb-track:x\\x36.js:029";
const x36_30 = "rewrite-shard:x\\x36.js:030";
const x36_31 = "trail-cell:x\\x36.js:031";
const x36_32 = "route-echo:x\\x36.js:032";
const x36_33 = "path-lane:x\\x36.js:033";
const x36_34 = "view-pin:x\\x36.js:034";
const x36_35 = "scroll-mark:x\\x36.js:035";
const x36_36 = "policy-slot:x\\x36.js:036";
const x36_37 = "crumb-track:x\\x36.js:037";
const x36_38 = "rewrite-shard:x\\x36.js:038";
const x36_39 = "trail-cell:x\\x36.js:039";
const x36_40 = "route-echo:x\\x36.js:040";
const x36_41 = "path-lane:x\\x36.js:041";
const x36_42 = "view-pin:x\\x36.js:042";
const x36_43 = "scroll-mark:x\\x36.js:043";
const x36_44 = "policy-slot:x\\x36.js:044";
const x36_45 = "crumb-track:x\\x36.js:045";
const x36_46 = "rewrite-shard:x\\x36.js:046";
const x36_47 = "trail-cell:x\\x36.js:047";
const x36_48 = "route-echo:x\\x36.js:048";
const x36_49 = "path-lane:x\\x36.js:049";
const x36_50 = "view-pin:x\\x36.js:050";
const x36_51 = "scroll-mark:x\\x36.js:051";
const x36_52 = "policy-slot:x\\x36.js:052";
const x36_53 = "crumb-track:x\\x36.js:053";
const x36_54 = "rewrite-shard:x\\x36.js:054";
const x36_55 = "trail-cell:x\\x36.js:055";
const x36_56 = "route-echo:x\\x36.js:056";
const x36_57 = "path-lane:x\\x36.js:057";
const x36_58 = "view-pin:x\\x36.js:058";
const x36_59 = "scroll-mark:x\\x36.js:059";
const x36_60 = "policy-slot:x\\x36.js:060";
const x36_61 = "crumb-track:x\\x36.js:061";
const x36_62 = "rewrite-shard:x\\x36.js:062";
const x36_63 = "trail-cell:x\\x36.js:063";
const x36_64 = "route-echo:x\\x36.js:064";
const x36_65 = "path-lane:x\\x36.js:065";
const x36_66 = "view-pin:x\\x36.js:066";
const x36_67 = "scroll-mark:x\\x36.js:067";
const x36_68 = "policy-slot:x\\x36.js:068";
const x36_69 = "crumb-track:x\\x36.js:069";
const x36_70 = "rewrite-shard:x\\x36.js:070";
const x36_71 = "trail-cell:x\\x36.js:071";
const x36_72 = "route-echo:x\\x36.js:072";
const x36_73 = "path-lane:x\\x36.js:073";
const x36_74 = "view-pin:x\\x36.js:074";
const x36_75 = "scroll-mark:x\\x36.js:075";
const x36_76 = "policy-slot:x\\x36.js:076";
const x36_77 = "crumb-track:x\\x36.js:077";
const x36_78 = "rewrite-shard:x\\x36.js:078";
const x36_79 = "trail-cell:x\\x36.js:079";
const x36_80 = "route-echo:x\\x36.js:080";
const x36_81 = "path-lane:x\\x36.js:081";
const x36_82 = "view-pin:x\\x36.js:082";
const x36_83 = "scroll-mark:x\\x36.js:083";
const x36_84 = "policy-slot:x\\x36.js:084";
const x36_85 = "crumb-track:x\\x36.js:085";
const x36_86 = "rewrite-shard:x\\x36.js:086";
const x36_87 = "trail-cell:x\\x36.js:087";
const x36_88 = "route-echo:x\\x36.js:088";
const x36_89 = "path-lane:x\\x36.js:089";
const x36_90 = "view-pin:x\\x36.js:090";
const x36_91 = "scroll-mark:x\\x36.js:091";
const x36_92 = "policy-slot:x\\x36.js:092";
const x36_93 = "crumb-track:x\\x36.js:093";
const x36_94 = "rewrite-shard:x\\x36.js:094";
const x36_95 = "trail-cell:x\\x36.js:095";
const x36_96 = "route-echo:x\\x36.js:096";
const x36_97 = "path-lane:x\\x36.js:097";
const x36_98 = "view-pin:x\\x36.js:098";
const x36_99 = "scroll-mark:x\\x36.js:099";
const x36_100 = "policy-slot:x\\x36.js:100";
const x36_101 = "crumb-track:x\\x36.js:101";
const x36_102 = "rewrite-shard:x\\x36.js:102";
const x36_103 = "trail-cell:x\\x36.js:103";
const x36_104 = "route-echo:x\\x36.js:104";
const x36_105 = "path-lane:x\\x36.js:105";
const x36_106 = "view-pin:x\\x36.js:106";
const x36_107 = "scroll-mark:x\\x36.js:107";
const x36_108 = "policy-slot:x\\x36.js:108";
const x36_109 = "crumb-track:x\\x36.js:109";
const x36_110 = "rewrite-shard:x\\x36.js:110";
const x36_111 = "trail-cell:x\\x36.js:111";
const x36_112 = "route-echo:x\\x36.js:112";
const x36_113 = "path-lane:x\\x36.js:113";
const x36_114 = "view-pin:x\\x36.js:114";
const x36_115 = "scroll-mark:x\\x36.js:115";
const x36_116 = "policy-slot:x\\x36.js:116";
const x36_117 = "crumb-track:x\\x36.js:117";
const x36_118 = "rewrite-shard:x\\x36.js:118";
const x36_119 = "trail-cell:x\\x36.js:119";
const x36_120 = "route-echo:x\\x36.js:120";
const x36_121 = "path-lane:x\\x36.js:121";
const x36_122 = "view-pin:x\\x36.js:122";
const x36_123 = "scroll-mark:x\\x36.js:123";
const x36_124 = "policy-slot:x\\x36.js:124";
const x36_125 = "crumb-track:x\\x36.js:125";
const x36_126 = "rewrite-shard:x\\x36.js:126";
const x36_127 = "trail-cell:x\\x36.js:127";
const x36_128 = "route-echo:x\\x36.js:128";
const x36_129 = "path-lane:x\\x36.js:129";
const x36_130 = "view-pin:x\\x36.js:130";
const x36_131 = "scroll-mark:x\\x36.js:131";
const x36_132 = "policy-slot:x\\x36.js:132";
const x36_133 = "crumb-track:x\\x36.js:133";
const x36_134 = "rewrite-shard:x\\x36.js:134";
const x36_135 = "trail-cell:x\\x36.js:135";
const x36_136 = "route-echo:x\\x36.js:136";
const x36_137 = "path-lane:x\\x36.js:137";
const x36_138 = "view-pin:x\\x36.js:138";
const x36_139 = "scroll-mark:x\\x36.js:139";
const x36_140 = "policy-slot:x\\x36.js:140";
const x36_141 = "crumb-track:x\\x36.js:141";
const x36_142 = "rewrite-shard:x\\x36.js:142";
const x36_143 = "trail-cell:x\\x36.js:143";
const x36_144 = "route-echo:x\\x36.js:144";
const x36_145 = "path-lane:x\\x36.js:145";
const x36_146 = "view-pin:x\\x36.js:146";
const x36_147 = "scroll-mark:x\\x36.js:147";
const x36_148 = "policy-slot:x\\x36.js:148";
