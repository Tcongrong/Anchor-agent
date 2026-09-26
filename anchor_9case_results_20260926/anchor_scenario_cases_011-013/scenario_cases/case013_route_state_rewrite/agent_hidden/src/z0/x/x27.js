import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 27,
  salt: 'r:0r:trail',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 7,
  mask: 56502869
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/27/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '0', y: '0', n: 1 }
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
const x27_0 = "route-echo:x\\x27.js:000";
const x27_1 = "path-lane:x\\x27.js:001";
const x27_2 = "view-pin:x\\x27.js:002";
const x27_3 = "scroll-mark:x\\x27.js:003";
const x27_4 = "policy-slot:x\\x27.js:004";
const x27_5 = "crumb-track:x\\x27.js:005";
const x27_6 = "rewrite-shard:x\\x27.js:006";
const x27_7 = "trail-cell:x\\x27.js:007";
const x27_8 = "route-echo:x\\x27.js:008";
const x27_9 = "path-lane:x\\x27.js:009";
const x27_10 = "view-pin:x\\x27.js:010";
const x27_11 = "scroll-mark:x\\x27.js:011";
const x27_12 = "policy-slot:x\\x27.js:012";
const x27_13 = "crumb-track:x\\x27.js:013";
const x27_14 = "rewrite-shard:x\\x27.js:014";
const x27_15 = "trail-cell:x\\x27.js:015";
const x27_16 = "route-echo:x\\x27.js:016";
const x27_17 = "path-lane:x\\x27.js:017";
const x27_18 = "view-pin:x\\x27.js:018";
const x27_19 = "scroll-mark:x\\x27.js:019";
const x27_20 = "policy-slot:x\\x27.js:020";
const x27_21 = "crumb-track:x\\x27.js:021";
const x27_22 = "rewrite-shard:x\\x27.js:022";
const x27_23 = "trail-cell:x\\x27.js:023";
const x27_24 = "route-echo:x\\x27.js:024";
const x27_25 = "path-lane:x\\x27.js:025";
const x27_26 = "view-pin:x\\x27.js:026";
const x27_27 = "scroll-mark:x\\x27.js:027";
const x27_28 = "policy-slot:x\\x27.js:028";
const x27_29 = "crumb-track:x\\x27.js:029";
const x27_30 = "rewrite-shard:x\\x27.js:030";
const x27_31 = "trail-cell:x\\x27.js:031";
const x27_32 = "route-echo:x\\x27.js:032";
const x27_33 = "path-lane:x\\x27.js:033";
const x27_34 = "view-pin:x\\x27.js:034";
const x27_35 = "scroll-mark:x\\x27.js:035";
const x27_36 = "policy-slot:x\\x27.js:036";
const x27_37 = "crumb-track:x\\x27.js:037";
const x27_38 = "rewrite-shard:x\\x27.js:038";
const x27_39 = "trail-cell:x\\x27.js:039";
const x27_40 = "route-echo:x\\x27.js:040";
const x27_41 = "path-lane:x\\x27.js:041";
const x27_42 = "view-pin:x\\x27.js:042";
const x27_43 = "scroll-mark:x\\x27.js:043";
const x27_44 = "policy-slot:x\\x27.js:044";
const x27_45 = "crumb-track:x\\x27.js:045";
const x27_46 = "rewrite-shard:x\\x27.js:046";
const x27_47 = "trail-cell:x\\x27.js:047";
const x27_48 = "route-echo:x\\x27.js:048";
const x27_49 = "path-lane:x\\x27.js:049";
const x27_50 = "view-pin:x\\x27.js:050";
const x27_51 = "scroll-mark:x\\x27.js:051";
const x27_52 = "policy-slot:x\\x27.js:052";
const x27_53 = "crumb-track:x\\x27.js:053";
const x27_54 = "rewrite-shard:x\\x27.js:054";
const x27_55 = "trail-cell:x\\x27.js:055";
const x27_56 = "route-echo:x\\x27.js:056";
const x27_57 = "path-lane:x\\x27.js:057";
const x27_58 = "view-pin:x\\x27.js:058";
const x27_59 = "scroll-mark:x\\x27.js:059";
const x27_60 = "policy-slot:x\\x27.js:060";
const x27_61 = "crumb-track:x\\x27.js:061";
const x27_62 = "rewrite-shard:x\\x27.js:062";
const x27_63 = "trail-cell:x\\x27.js:063";
const x27_64 = "route-echo:x\\x27.js:064";
const x27_65 = "path-lane:x\\x27.js:065";
const x27_66 = "view-pin:x\\x27.js:066";
const x27_67 = "scroll-mark:x\\x27.js:067";
const x27_68 = "policy-slot:x\\x27.js:068";
const x27_69 = "crumb-track:x\\x27.js:069";
const x27_70 = "rewrite-shard:x\\x27.js:070";
const x27_71 = "trail-cell:x\\x27.js:071";
const x27_72 = "route-echo:x\\x27.js:072";
const x27_73 = "path-lane:x\\x27.js:073";
const x27_74 = "view-pin:x\\x27.js:074";
const x27_75 = "scroll-mark:x\\x27.js:075";
const x27_76 = "policy-slot:x\\x27.js:076";
const x27_77 = "crumb-track:x\\x27.js:077";
const x27_78 = "rewrite-shard:x\\x27.js:078";
const x27_79 = "trail-cell:x\\x27.js:079";
const x27_80 = "route-echo:x\\x27.js:080";
const x27_81 = "path-lane:x\\x27.js:081";
const x27_82 = "view-pin:x\\x27.js:082";
const x27_83 = "scroll-mark:x\\x27.js:083";
const x27_84 = "policy-slot:x\\x27.js:084";
const x27_85 = "crumb-track:x\\x27.js:085";
const x27_86 = "rewrite-shard:x\\x27.js:086";
const x27_87 = "trail-cell:x\\x27.js:087";
const x27_88 = "route-echo:x\\x27.js:088";
const x27_89 = "path-lane:x\\x27.js:089";
const x27_90 = "view-pin:x\\x27.js:090";
const x27_91 = "scroll-mark:x\\x27.js:091";
const x27_92 = "policy-slot:x\\x27.js:092";
const x27_93 = "crumb-track:x\\x27.js:093";
const x27_94 = "rewrite-shard:x\\x27.js:094";
const x27_95 = "trail-cell:x\\x27.js:095";
const x27_96 = "route-echo:x\\x27.js:096";
const x27_97 = "path-lane:x\\x27.js:097";
const x27_98 = "view-pin:x\\x27.js:098";
const x27_99 = "scroll-mark:x\\x27.js:099";
const x27_100 = "policy-slot:x\\x27.js:100";
const x27_101 = "crumb-track:x\\x27.js:101";
const x27_102 = "rewrite-shard:x\\x27.js:102";
const x27_103 = "trail-cell:x\\x27.js:103";
const x27_104 = "route-echo:x\\x27.js:104";
const x27_105 = "path-lane:x\\x27.js:105";
const x27_106 = "view-pin:x\\x27.js:106";
const x27_107 = "scroll-mark:x\\x27.js:107";
const x27_108 = "policy-slot:x\\x27.js:108";
const x27_109 = "crumb-track:x\\x27.js:109";
const x27_110 = "rewrite-shard:x\\x27.js:110";
const x27_111 = "trail-cell:x\\x27.js:111";
const x27_112 = "route-echo:x\\x27.js:112";
const x27_113 = "path-lane:x\\x27.js:113";
const x27_114 = "view-pin:x\\x27.js:114";
const x27_115 = "scroll-mark:x\\x27.js:115";
const x27_116 = "policy-slot:x\\x27.js:116";
const x27_117 = "crumb-track:x\\x27.js:117";
const x27_118 = "rewrite-shard:x\\x27.js:118";
const x27_119 = "trail-cell:x\\x27.js:119";
const x27_120 = "route-echo:x\\x27.js:120";
const x27_121 = "path-lane:x\\x27.js:121";
const x27_122 = "view-pin:x\\x27.js:122";
const x27_123 = "scroll-mark:x\\x27.js:123";
const x27_124 = "policy-slot:x\\x27.js:124";
const x27_125 = "crumb-track:x\\x27.js:125";
const x27_126 = "rewrite-shard:x\\x27.js:126";
const x27_127 = "trail-cell:x\\x27.js:127";
const x27_128 = "route-echo:x\\x27.js:128";
const x27_129 = "path-lane:x\\x27.js:129";
const x27_130 = "view-pin:x\\x27.js:130";
const x27_131 = "scroll-mark:x\\x27.js:131";
const x27_132 = "policy-slot:x\\x27.js:132";
const x27_133 = "crumb-track:x\\x27.js:133";
const x27_134 = "rewrite-shard:x\\x27.js:134";
const x27_135 = "trail-cell:x\\x27.js:135";
const x27_136 = "route-echo:x\\x27.js:136";
const x27_137 = "path-lane:x\\x27.js:137";
const x27_138 = "view-pin:x\\x27.js:138";
const x27_139 = "scroll-mark:x\\x27.js:139";
const x27_140 = "policy-slot:x\\x27.js:140";
const x27_141 = "crumb-track:x\\x27.js:141";
const x27_142 = "rewrite-shard:x\\x27.js:142";
const x27_143 = "trail-cell:x\\x27.js:143";
const x27_144 = "route-echo:x\\x27.js:144";
const x27_145 = "path-lane:x\\x27.js:145";
const x27_146 = "view-pin:x\\x27.js:146";
const x27_147 = "scroll-mark:x\\x27.js:147";
const x27_148 = "policy-slot:x\\x27.js:148";
