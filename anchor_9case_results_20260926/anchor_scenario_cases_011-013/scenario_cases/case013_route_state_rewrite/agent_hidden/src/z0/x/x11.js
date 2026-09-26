import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 11,
  salt: 'r:0b:trail',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 15,
  mask: 535203653
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/11/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '2', y: '2', n: 1 }
  ];
}

function remix3(value, index) {
  return value.split('').reverse().join('').slice(3, 15);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x11_0 = "route-echo:x\\x11.js:000";
const x11_1 = "path-lane:x\\x11.js:001";
const x11_2 = "view-pin:x\\x11.js:002";
const x11_3 = "scroll-mark:x\\x11.js:003";
const x11_4 = "policy-slot:x\\x11.js:004";
const x11_5 = "crumb-track:x\\x11.js:005";
const x11_6 = "rewrite-shard:x\\x11.js:006";
const x11_7 = "trail-cell:x\\x11.js:007";
const x11_8 = "route-echo:x\\x11.js:008";
const x11_9 = "path-lane:x\\x11.js:009";
const x11_10 = "view-pin:x\\x11.js:010";
const x11_11 = "scroll-mark:x\\x11.js:011";
const x11_12 = "policy-slot:x\\x11.js:012";
const x11_13 = "crumb-track:x\\x11.js:013";
const x11_14 = "rewrite-shard:x\\x11.js:014";
const x11_15 = "trail-cell:x\\x11.js:015";
const x11_16 = "route-echo:x\\x11.js:016";
const x11_17 = "path-lane:x\\x11.js:017";
const x11_18 = "view-pin:x\\x11.js:018";
const x11_19 = "scroll-mark:x\\x11.js:019";
const x11_20 = "policy-slot:x\\x11.js:020";
const x11_21 = "crumb-track:x\\x11.js:021";
const x11_22 = "rewrite-shard:x\\x11.js:022";
const x11_23 = "trail-cell:x\\x11.js:023";
const x11_24 = "route-echo:x\\x11.js:024";
const x11_25 = "path-lane:x\\x11.js:025";
const x11_26 = "view-pin:x\\x11.js:026";
const x11_27 = "scroll-mark:x\\x11.js:027";
const x11_28 = "policy-slot:x\\x11.js:028";
const x11_29 = "crumb-track:x\\x11.js:029";
const x11_30 = "rewrite-shard:x\\x11.js:030";
const x11_31 = "trail-cell:x\\x11.js:031";
const x11_32 = "route-echo:x\\x11.js:032";
const x11_33 = "path-lane:x\\x11.js:033";
const x11_34 = "view-pin:x\\x11.js:034";
const x11_35 = "scroll-mark:x\\x11.js:035";
const x11_36 = "policy-slot:x\\x11.js:036";
const x11_37 = "crumb-track:x\\x11.js:037";
const x11_38 = "rewrite-shard:x\\x11.js:038";
const x11_39 = "trail-cell:x\\x11.js:039";
const x11_40 = "route-echo:x\\x11.js:040";
const x11_41 = "path-lane:x\\x11.js:041";
const x11_42 = "view-pin:x\\x11.js:042";
const x11_43 = "scroll-mark:x\\x11.js:043";
const x11_44 = "policy-slot:x\\x11.js:044";
const x11_45 = "crumb-track:x\\x11.js:045";
const x11_46 = "rewrite-shard:x\\x11.js:046";
const x11_47 = "trail-cell:x\\x11.js:047";
const x11_48 = "route-echo:x\\x11.js:048";
const x11_49 = "path-lane:x\\x11.js:049";
const x11_50 = "view-pin:x\\x11.js:050";
const x11_51 = "scroll-mark:x\\x11.js:051";
const x11_52 = "policy-slot:x\\x11.js:052";
const x11_53 = "crumb-track:x\\x11.js:053";
const x11_54 = "rewrite-shard:x\\x11.js:054";
const x11_55 = "trail-cell:x\\x11.js:055";
const x11_56 = "route-echo:x\\x11.js:056";
const x11_57 = "path-lane:x\\x11.js:057";
const x11_58 = "view-pin:x\\x11.js:058";
const x11_59 = "scroll-mark:x\\x11.js:059";
const x11_60 = "policy-slot:x\\x11.js:060";
const x11_61 = "crumb-track:x\\x11.js:061";
const x11_62 = "rewrite-shard:x\\x11.js:062";
const x11_63 = "trail-cell:x\\x11.js:063";
const x11_64 = "route-echo:x\\x11.js:064";
const x11_65 = "path-lane:x\\x11.js:065";
const x11_66 = "view-pin:x\\x11.js:066";
const x11_67 = "scroll-mark:x\\x11.js:067";
const x11_68 = "policy-slot:x\\x11.js:068";
const x11_69 = "crumb-track:x\\x11.js:069";
const x11_70 = "rewrite-shard:x\\x11.js:070";
const x11_71 = "trail-cell:x\\x11.js:071";
const x11_72 = "route-echo:x\\x11.js:072";
const x11_73 = "path-lane:x\\x11.js:073";
const x11_74 = "view-pin:x\\x11.js:074";
const x11_75 = "scroll-mark:x\\x11.js:075";
const x11_76 = "policy-slot:x\\x11.js:076";
const x11_77 = "crumb-track:x\\x11.js:077";
const x11_78 = "rewrite-shard:x\\x11.js:078";
const x11_79 = "trail-cell:x\\x11.js:079";
const x11_80 = "route-echo:x\\x11.js:080";
const x11_81 = "path-lane:x\\x11.js:081";
const x11_82 = "view-pin:x\\x11.js:082";
const x11_83 = "scroll-mark:x\\x11.js:083";
const x11_84 = "policy-slot:x\\x11.js:084";
const x11_85 = "crumb-track:x\\x11.js:085";
const x11_86 = "rewrite-shard:x\\x11.js:086";
const x11_87 = "trail-cell:x\\x11.js:087";
const x11_88 = "route-echo:x\\x11.js:088";
const x11_89 = "path-lane:x\\x11.js:089";
const x11_90 = "view-pin:x\\x11.js:090";
const x11_91 = "scroll-mark:x\\x11.js:091";
const x11_92 = "policy-slot:x\\x11.js:092";
const x11_93 = "crumb-track:x\\x11.js:093";
const x11_94 = "rewrite-shard:x\\x11.js:094";
const x11_95 = "trail-cell:x\\x11.js:095";
const x11_96 = "route-echo:x\\x11.js:096";
const x11_97 = "path-lane:x\\x11.js:097";
const x11_98 = "view-pin:x\\x11.js:098";
const x11_99 = "scroll-mark:x\\x11.js:099";
const x11_100 = "policy-slot:x\\x11.js:100";
const x11_101 = "crumb-track:x\\x11.js:101";
const x11_102 = "rewrite-shard:x\\x11.js:102";
const x11_103 = "trail-cell:x\\x11.js:103";
const x11_104 = "route-echo:x\\x11.js:104";
const x11_105 = "path-lane:x\\x11.js:105";
const x11_106 = "view-pin:x\\x11.js:106";
const x11_107 = "scroll-mark:x\\x11.js:107";
const x11_108 = "policy-slot:x\\x11.js:108";
const x11_109 = "crumb-track:x\\x11.js:109";
const x11_110 = "rewrite-shard:x\\x11.js:110";
const x11_111 = "trail-cell:x\\x11.js:111";
const x11_112 = "route-echo:x\\x11.js:112";
const x11_113 = "path-lane:x\\x11.js:113";
const x11_114 = "view-pin:x\\x11.js:114";
const x11_115 = "scroll-mark:x\\x11.js:115";
const x11_116 = "policy-slot:x\\x11.js:116";
const x11_117 = "crumb-track:x\\x11.js:117";
const x11_118 = "rewrite-shard:x\\x11.js:118";
const x11_119 = "trail-cell:x\\x11.js:119";
const x11_120 = "route-echo:x\\x11.js:120";
const x11_121 = "path-lane:x\\x11.js:121";
const x11_122 = "view-pin:x\\x11.js:122";
const x11_123 = "scroll-mark:x\\x11.js:123";
const x11_124 = "policy-slot:x\\x11.js:124";
const x11_125 = "crumb-track:x\\x11.js:125";
const x11_126 = "rewrite-shard:x\\x11.js:126";
const x11_127 = "trail-cell:x\\x11.js:127";
const x11_128 = "route-echo:x\\x11.js:128";
const x11_129 = "path-lane:x\\x11.js:129";
const x11_130 = "view-pin:x\\x11.js:130";
const x11_131 = "scroll-mark:x\\x11.js:131";
const x11_132 = "policy-slot:x\\x11.js:132";
const x11_133 = "crumb-track:x\\x11.js:133";
const x11_134 = "rewrite-shard:x\\x11.js:134";
const x11_135 = "trail-cell:x\\x11.js:135";
const x11_136 = "route-echo:x\\x11.js:136";
const x11_137 = "path-lane:x\\x11.js:137";
const x11_138 = "view-pin:x\\x11.js:138";
const x11_139 = "scroll-mark:x\\x11.js:139";
const x11_140 = "policy-slot:x\\x11.js:140";
const x11_141 = "crumb-track:x\\x11.js:141";
const x11_142 = "rewrite-shard:x\\x11.js:142";
const x11_143 = "trail-cell:x\\x11.js:143";
const x11_144 = "route-echo:x\\x11.js:144";
const x11_145 = "path-lane:x\\x11.js:145";
const x11_146 = "view-pin:x\\x11.js:146";
const x11_147 = "scroll-mark:x\\x11.js:147";
const x11_148 = "policy-slot:x\\x11.js:148";
