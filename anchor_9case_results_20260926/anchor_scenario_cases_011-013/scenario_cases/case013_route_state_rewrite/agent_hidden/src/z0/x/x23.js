import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 23,
  salt: 'r:0n:trail',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 15,
  mask: 2323661713
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/23/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '5', y: '5', n: 1 }
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
const x23_0 = "route-echo:x\\x23.js:000";
const x23_1 = "path-lane:x\\x23.js:001";
const x23_2 = "view-pin:x\\x23.js:002";
const x23_3 = "scroll-mark:x\\x23.js:003";
const x23_4 = "policy-slot:x\\x23.js:004";
const x23_5 = "crumb-track:x\\x23.js:005";
const x23_6 = "rewrite-shard:x\\x23.js:006";
const x23_7 = "trail-cell:x\\x23.js:007";
const x23_8 = "route-echo:x\\x23.js:008";
const x23_9 = "path-lane:x\\x23.js:009";
const x23_10 = "view-pin:x\\x23.js:010";
const x23_11 = "scroll-mark:x\\x23.js:011";
const x23_12 = "policy-slot:x\\x23.js:012";
const x23_13 = "crumb-track:x\\x23.js:013";
const x23_14 = "rewrite-shard:x\\x23.js:014";
const x23_15 = "trail-cell:x\\x23.js:015";
const x23_16 = "route-echo:x\\x23.js:016";
const x23_17 = "path-lane:x\\x23.js:017";
const x23_18 = "view-pin:x\\x23.js:018";
const x23_19 = "scroll-mark:x\\x23.js:019";
const x23_20 = "policy-slot:x\\x23.js:020";
const x23_21 = "crumb-track:x\\x23.js:021";
const x23_22 = "rewrite-shard:x\\x23.js:022";
const x23_23 = "trail-cell:x\\x23.js:023";
const x23_24 = "route-echo:x\\x23.js:024";
const x23_25 = "path-lane:x\\x23.js:025";
const x23_26 = "view-pin:x\\x23.js:026";
const x23_27 = "scroll-mark:x\\x23.js:027";
const x23_28 = "policy-slot:x\\x23.js:028";
const x23_29 = "crumb-track:x\\x23.js:029";
const x23_30 = "rewrite-shard:x\\x23.js:030";
const x23_31 = "trail-cell:x\\x23.js:031";
const x23_32 = "route-echo:x\\x23.js:032";
const x23_33 = "path-lane:x\\x23.js:033";
const x23_34 = "view-pin:x\\x23.js:034";
const x23_35 = "scroll-mark:x\\x23.js:035";
const x23_36 = "policy-slot:x\\x23.js:036";
const x23_37 = "crumb-track:x\\x23.js:037";
const x23_38 = "rewrite-shard:x\\x23.js:038";
const x23_39 = "trail-cell:x\\x23.js:039";
const x23_40 = "route-echo:x\\x23.js:040";
const x23_41 = "path-lane:x\\x23.js:041";
const x23_42 = "view-pin:x\\x23.js:042";
const x23_43 = "scroll-mark:x\\x23.js:043";
const x23_44 = "policy-slot:x\\x23.js:044";
const x23_45 = "crumb-track:x\\x23.js:045";
const x23_46 = "rewrite-shard:x\\x23.js:046";
const x23_47 = "trail-cell:x\\x23.js:047";
const x23_48 = "route-echo:x\\x23.js:048";
const x23_49 = "path-lane:x\\x23.js:049";
const x23_50 = "view-pin:x\\x23.js:050";
const x23_51 = "scroll-mark:x\\x23.js:051";
const x23_52 = "policy-slot:x\\x23.js:052";
const x23_53 = "crumb-track:x\\x23.js:053";
const x23_54 = "rewrite-shard:x\\x23.js:054";
const x23_55 = "trail-cell:x\\x23.js:055";
const x23_56 = "route-echo:x\\x23.js:056";
const x23_57 = "path-lane:x\\x23.js:057";
const x23_58 = "view-pin:x\\x23.js:058";
const x23_59 = "scroll-mark:x\\x23.js:059";
const x23_60 = "policy-slot:x\\x23.js:060";
const x23_61 = "crumb-track:x\\x23.js:061";
const x23_62 = "rewrite-shard:x\\x23.js:062";
const x23_63 = "trail-cell:x\\x23.js:063";
const x23_64 = "route-echo:x\\x23.js:064";
const x23_65 = "path-lane:x\\x23.js:065";
const x23_66 = "view-pin:x\\x23.js:066";
const x23_67 = "scroll-mark:x\\x23.js:067";
const x23_68 = "policy-slot:x\\x23.js:068";
const x23_69 = "crumb-track:x\\x23.js:069";
const x23_70 = "rewrite-shard:x\\x23.js:070";
const x23_71 = "trail-cell:x\\x23.js:071";
const x23_72 = "route-echo:x\\x23.js:072";
const x23_73 = "path-lane:x\\x23.js:073";
const x23_74 = "view-pin:x\\x23.js:074";
const x23_75 = "scroll-mark:x\\x23.js:075";
const x23_76 = "policy-slot:x\\x23.js:076";
const x23_77 = "crumb-track:x\\x23.js:077";
const x23_78 = "rewrite-shard:x\\x23.js:078";
const x23_79 = "trail-cell:x\\x23.js:079";
const x23_80 = "route-echo:x\\x23.js:080";
const x23_81 = "path-lane:x\\x23.js:081";
const x23_82 = "view-pin:x\\x23.js:082";
const x23_83 = "scroll-mark:x\\x23.js:083";
const x23_84 = "policy-slot:x\\x23.js:084";
const x23_85 = "crumb-track:x\\x23.js:085";
const x23_86 = "rewrite-shard:x\\x23.js:086";
const x23_87 = "trail-cell:x\\x23.js:087";
const x23_88 = "route-echo:x\\x23.js:088";
const x23_89 = "path-lane:x\\x23.js:089";
const x23_90 = "view-pin:x\\x23.js:090";
const x23_91 = "scroll-mark:x\\x23.js:091";
const x23_92 = "policy-slot:x\\x23.js:092";
const x23_93 = "crumb-track:x\\x23.js:093";
const x23_94 = "rewrite-shard:x\\x23.js:094";
const x23_95 = "trail-cell:x\\x23.js:095";
const x23_96 = "route-echo:x\\x23.js:096";
const x23_97 = "path-lane:x\\x23.js:097";
const x23_98 = "view-pin:x\\x23.js:098";
const x23_99 = "scroll-mark:x\\x23.js:099";
const x23_100 = "policy-slot:x\\x23.js:100";
const x23_101 = "crumb-track:x\\x23.js:101";
const x23_102 = "rewrite-shard:x\\x23.js:102";
const x23_103 = "trail-cell:x\\x23.js:103";
const x23_104 = "route-echo:x\\x23.js:104";
const x23_105 = "path-lane:x\\x23.js:105";
const x23_106 = "view-pin:x\\x23.js:106";
const x23_107 = "scroll-mark:x\\x23.js:107";
const x23_108 = "policy-slot:x\\x23.js:108";
const x23_109 = "crumb-track:x\\x23.js:109";
const x23_110 = "rewrite-shard:x\\x23.js:110";
const x23_111 = "trail-cell:x\\x23.js:111";
const x23_112 = "route-echo:x\\x23.js:112";
const x23_113 = "path-lane:x\\x23.js:113";
const x23_114 = "view-pin:x\\x23.js:114";
const x23_115 = "scroll-mark:x\\x23.js:115";
const x23_116 = "policy-slot:x\\x23.js:116";
const x23_117 = "crumb-track:x\\x23.js:117";
const x23_118 = "rewrite-shard:x\\x23.js:118";
const x23_119 = "trail-cell:x\\x23.js:119";
const x23_120 = "route-echo:x\\x23.js:120";
const x23_121 = "path-lane:x\\x23.js:121";
const x23_122 = "view-pin:x\\x23.js:122";
const x23_123 = "scroll-mark:x\\x23.js:123";
const x23_124 = "policy-slot:x\\x23.js:124";
const x23_125 = "crumb-track:x\\x23.js:125";
const x23_126 = "rewrite-shard:x\\x23.js:126";
const x23_127 = "trail-cell:x\\x23.js:127";
const x23_128 = "route-echo:x\\x23.js:128";
const x23_129 = "path-lane:x\\x23.js:129";
const x23_130 = "view-pin:x\\x23.js:130";
const x23_131 = "scroll-mark:x\\x23.js:131";
const x23_132 = "policy-slot:x\\x23.js:132";
const x23_133 = "crumb-track:x\\x23.js:133";
const x23_134 = "rewrite-shard:x\\x23.js:134";
const x23_135 = "trail-cell:x\\x23.js:135";
const x23_136 = "route-echo:x\\x23.js:136";
const x23_137 = "path-lane:x\\x23.js:137";
const x23_138 = "view-pin:x\\x23.js:138";
const x23_139 = "scroll-mark:x\\x23.js:139";
const x23_140 = "policy-slot:x\\x23.js:140";
const x23_141 = "crumb-track:x\\x23.js:141";
const x23_142 = "rewrite-shard:x\\x23.js:142";
const x23_143 = "trail-cell:x\\x23.js:143";
const x23_144 = "route-echo:x\\x23.js:144";
const x23_145 = "path-lane:x\\x23.js:145";
const x23_146 = "view-pin:x\\x23.js:146";
const x23_147 = "scroll-mark:x\\x23.js:147";
const x23_148 = "policy-slot:x\\x23.js:148";
