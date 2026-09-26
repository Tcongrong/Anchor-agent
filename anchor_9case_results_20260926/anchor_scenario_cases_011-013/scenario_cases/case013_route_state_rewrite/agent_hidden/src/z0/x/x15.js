import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 15,
  salt: 'r:0f:trail',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 7,
  mask: 2563012105
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/15/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '6', y: '6', n: 1 }
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
const x15_0 = "route-echo:x\\x15.js:000";
const x15_1 = "path-lane:x\\x15.js:001";
const x15_2 = "view-pin:x\\x15.js:002";
const x15_3 = "scroll-mark:x\\x15.js:003";
const x15_4 = "policy-slot:x\\x15.js:004";
const x15_5 = "crumb-track:x\\x15.js:005";
const x15_6 = "rewrite-shard:x\\x15.js:006";
const x15_7 = "trail-cell:x\\x15.js:007";
const x15_8 = "route-echo:x\\x15.js:008";
const x15_9 = "path-lane:x\\x15.js:009";
const x15_10 = "view-pin:x\\x15.js:010";
const x15_11 = "scroll-mark:x\\x15.js:011";
const x15_12 = "policy-slot:x\\x15.js:012";
const x15_13 = "crumb-track:x\\x15.js:013";
const x15_14 = "rewrite-shard:x\\x15.js:014";
const x15_15 = "trail-cell:x\\x15.js:015";
const x15_16 = "route-echo:x\\x15.js:016";
const x15_17 = "path-lane:x\\x15.js:017";
const x15_18 = "view-pin:x\\x15.js:018";
const x15_19 = "scroll-mark:x\\x15.js:019";
const x15_20 = "policy-slot:x\\x15.js:020";
const x15_21 = "crumb-track:x\\x15.js:021";
const x15_22 = "rewrite-shard:x\\x15.js:022";
const x15_23 = "trail-cell:x\\x15.js:023";
const x15_24 = "route-echo:x\\x15.js:024";
const x15_25 = "path-lane:x\\x15.js:025";
const x15_26 = "view-pin:x\\x15.js:026";
const x15_27 = "scroll-mark:x\\x15.js:027";
const x15_28 = "policy-slot:x\\x15.js:028";
const x15_29 = "crumb-track:x\\x15.js:029";
const x15_30 = "rewrite-shard:x\\x15.js:030";
const x15_31 = "trail-cell:x\\x15.js:031";
const x15_32 = "route-echo:x\\x15.js:032";
const x15_33 = "path-lane:x\\x15.js:033";
const x15_34 = "view-pin:x\\x15.js:034";
const x15_35 = "scroll-mark:x\\x15.js:035";
const x15_36 = "policy-slot:x\\x15.js:036";
const x15_37 = "crumb-track:x\\x15.js:037";
const x15_38 = "rewrite-shard:x\\x15.js:038";
const x15_39 = "trail-cell:x\\x15.js:039";
const x15_40 = "route-echo:x\\x15.js:040";
const x15_41 = "path-lane:x\\x15.js:041";
const x15_42 = "view-pin:x\\x15.js:042";
const x15_43 = "scroll-mark:x\\x15.js:043";
const x15_44 = "policy-slot:x\\x15.js:044";
const x15_45 = "crumb-track:x\\x15.js:045";
const x15_46 = "rewrite-shard:x\\x15.js:046";
const x15_47 = "trail-cell:x\\x15.js:047";
const x15_48 = "route-echo:x\\x15.js:048";
const x15_49 = "path-lane:x\\x15.js:049";
const x15_50 = "view-pin:x\\x15.js:050";
const x15_51 = "scroll-mark:x\\x15.js:051";
const x15_52 = "policy-slot:x\\x15.js:052";
const x15_53 = "crumb-track:x\\x15.js:053";
const x15_54 = "rewrite-shard:x\\x15.js:054";
const x15_55 = "trail-cell:x\\x15.js:055";
const x15_56 = "route-echo:x\\x15.js:056";
const x15_57 = "path-lane:x\\x15.js:057";
const x15_58 = "view-pin:x\\x15.js:058";
const x15_59 = "scroll-mark:x\\x15.js:059";
const x15_60 = "policy-slot:x\\x15.js:060";
const x15_61 = "crumb-track:x\\x15.js:061";
const x15_62 = "rewrite-shard:x\\x15.js:062";
const x15_63 = "trail-cell:x\\x15.js:063";
const x15_64 = "route-echo:x\\x15.js:064";
const x15_65 = "path-lane:x\\x15.js:065";
const x15_66 = "view-pin:x\\x15.js:066";
const x15_67 = "scroll-mark:x\\x15.js:067";
const x15_68 = "policy-slot:x\\x15.js:068";
const x15_69 = "crumb-track:x\\x15.js:069";
const x15_70 = "rewrite-shard:x\\x15.js:070";
const x15_71 = "trail-cell:x\\x15.js:071";
const x15_72 = "route-echo:x\\x15.js:072";
const x15_73 = "path-lane:x\\x15.js:073";
const x15_74 = "view-pin:x\\x15.js:074";
const x15_75 = "scroll-mark:x\\x15.js:075";
const x15_76 = "policy-slot:x\\x15.js:076";
const x15_77 = "crumb-track:x\\x15.js:077";
const x15_78 = "rewrite-shard:x\\x15.js:078";
const x15_79 = "trail-cell:x\\x15.js:079";
const x15_80 = "route-echo:x\\x15.js:080";
const x15_81 = "path-lane:x\\x15.js:081";
const x15_82 = "view-pin:x\\x15.js:082";
const x15_83 = "scroll-mark:x\\x15.js:083";
const x15_84 = "policy-slot:x\\x15.js:084";
const x15_85 = "crumb-track:x\\x15.js:085";
const x15_86 = "rewrite-shard:x\\x15.js:086";
const x15_87 = "trail-cell:x\\x15.js:087";
const x15_88 = "route-echo:x\\x15.js:088";
const x15_89 = "path-lane:x\\x15.js:089";
const x15_90 = "view-pin:x\\x15.js:090";
const x15_91 = "scroll-mark:x\\x15.js:091";
const x15_92 = "policy-slot:x\\x15.js:092";
const x15_93 = "crumb-track:x\\x15.js:093";
const x15_94 = "rewrite-shard:x\\x15.js:094";
const x15_95 = "trail-cell:x\\x15.js:095";
const x15_96 = "route-echo:x\\x15.js:096";
const x15_97 = "path-lane:x\\x15.js:097";
const x15_98 = "view-pin:x\\x15.js:098";
const x15_99 = "scroll-mark:x\\x15.js:099";
const x15_100 = "policy-slot:x\\x15.js:100";
const x15_101 = "crumb-track:x\\x15.js:101";
const x15_102 = "rewrite-shard:x\\x15.js:102";
const x15_103 = "trail-cell:x\\x15.js:103";
const x15_104 = "route-echo:x\\x15.js:104";
const x15_105 = "path-lane:x\\x15.js:105";
const x15_106 = "view-pin:x\\x15.js:106";
const x15_107 = "scroll-mark:x\\x15.js:107";
const x15_108 = "policy-slot:x\\x15.js:108";
const x15_109 = "crumb-track:x\\x15.js:109";
const x15_110 = "rewrite-shard:x\\x15.js:110";
const x15_111 = "trail-cell:x\\x15.js:111";
const x15_112 = "route-echo:x\\x15.js:112";
const x15_113 = "path-lane:x\\x15.js:113";
const x15_114 = "view-pin:x\\x15.js:114";
const x15_115 = "scroll-mark:x\\x15.js:115";
const x15_116 = "policy-slot:x\\x15.js:116";
const x15_117 = "crumb-track:x\\x15.js:117";
const x15_118 = "rewrite-shard:x\\x15.js:118";
const x15_119 = "trail-cell:x\\x15.js:119";
const x15_120 = "route-echo:x\\x15.js:120";
const x15_121 = "path-lane:x\\x15.js:121";
const x15_122 = "view-pin:x\\x15.js:122";
const x15_123 = "scroll-mark:x\\x15.js:123";
const x15_124 = "policy-slot:x\\x15.js:124";
const x15_125 = "crumb-track:x\\x15.js:125";
const x15_126 = "rewrite-shard:x\\x15.js:126";
const x15_127 = "trail-cell:x\\x15.js:127";
const x15_128 = "route-echo:x\\x15.js:128";
const x15_129 = "path-lane:x\\x15.js:129";
const x15_130 = "view-pin:x\\x15.js:130";
const x15_131 = "scroll-mark:x\\x15.js:131";
const x15_132 = "policy-slot:x\\x15.js:132";
const x15_133 = "crumb-track:x\\x15.js:133";
const x15_134 = "rewrite-shard:x\\x15.js:134";
const x15_135 = "trail-cell:x\\x15.js:135";
const x15_136 = "route-echo:x\\x15.js:136";
const x15_137 = "path-lane:x\\x15.js:137";
const x15_138 = "view-pin:x\\x15.js:138";
const x15_139 = "scroll-mark:x\\x15.js:139";
const x15_140 = "policy-slot:x\\x15.js:140";
const x15_141 = "crumb-track:x\\x15.js:141";
const x15_142 = "rewrite-shard:x\\x15.js:142";
const x15_143 = "trail-cell:x\\x15.js:143";
const x15_144 = "route-echo:x\\x15.js:144";
const x15_145 = "path-lane:x\\x15.js:145";
const x15_146 = "view-pin:x\\x15.js:146";
const x15_147 = "scroll-mark:x\\x15.js:147";
const x15_148 = "policy-slot:x\\x15.js:148";
