import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 32,
  salt: 'r:0w:trail',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2060',
  shift: 12,
  mask: 443779786
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/32/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '5', y: '5', n: 1 }
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
const x32_0 = "route-echo:x\\x32.js:000";
const x32_1 = "path-lane:x\\x32.js:001";
const x32_2 = "view-pin:x\\x32.js:002";
const x32_3 = "scroll-mark:x\\x32.js:003";
const x32_4 = "policy-slot:x\\x32.js:004";
const x32_5 = "crumb-track:x\\x32.js:005";
const x32_6 = "rewrite-shard:x\\x32.js:006";
const x32_7 = "trail-cell:x\\x32.js:007";
const x32_8 = "route-echo:x\\x32.js:008";
const x32_9 = "path-lane:x\\x32.js:009";
const x32_10 = "view-pin:x\\x32.js:010";
const x32_11 = "scroll-mark:x\\x32.js:011";
const x32_12 = "policy-slot:x\\x32.js:012";
const x32_13 = "crumb-track:x\\x32.js:013";
const x32_14 = "rewrite-shard:x\\x32.js:014";
const x32_15 = "trail-cell:x\\x32.js:015";
const x32_16 = "route-echo:x\\x32.js:016";
const x32_17 = "path-lane:x\\x32.js:017";
const x32_18 = "view-pin:x\\x32.js:018";
const x32_19 = "scroll-mark:x\\x32.js:019";
const x32_20 = "policy-slot:x\\x32.js:020";
const x32_21 = "crumb-track:x\\x32.js:021";
const x32_22 = "rewrite-shard:x\\x32.js:022";
const x32_23 = "trail-cell:x\\x32.js:023";
const x32_24 = "route-echo:x\\x32.js:024";
const x32_25 = "path-lane:x\\x32.js:025";
const x32_26 = "view-pin:x\\x32.js:026";
const x32_27 = "scroll-mark:x\\x32.js:027";
const x32_28 = "policy-slot:x\\x32.js:028";
const x32_29 = "crumb-track:x\\x32.js:029";
const x32_30 = "rewrite-shard:x\\x32.js:030";
const x32_31 = "trail-cell:x\\x32.js:031";
const x32_32 = "route-echo:x\\x32.js:032";
const x32_33 = "path-lane:x\\x32.js:033";
const x32_34 = "view-pin:x\\x32.js:034";
const x32_35 = "scroll-mark:x\\x32.js:035";
const x32_36 = "policy-slot:x\\x32.js:036";
const x32_37 = "crumb-track:x\\x32.js:037";
const x32_38 = "rewrite-shard:x\\x32.js:038";
const x32_39 = "trail-cell:x\\x32.js:039";
const x32_40 = "route-echo:x\\x32.js:040";
const x32_41 = "path-lane:x\\x32.js:041";
const x32_42 = "view-pin:x\\x32.js:042";
const x32_43 = "scroll-mark:x\\x32.js:043";
const x32_44 = "policy-slot:x\\x32.js:044";
const x32_45 = "crumb-track:x\\x32.js:045";
const x32_46 = "rewrite-shard:x\\x32.js:046";
const x32_47 = "trail-cell:x\\x32.js:047";
const x32_48 = "route-echo:x\\x32.js:048";
const x32_49 = "path-lane:x\\x32.js:049";
const x32_50 = "view-pin:x\\x32.js:050";
const x32_51 = "scroll-mark:x\\x32.js:051";
const x32_52 = "policy-slot:x\\x32.js:052";
const x32_53 = "crumb-track:x\\x32.js:053";
const x32_54 = "rewrite-shard:x\\x32.js:054";
const x32_55 = "trail-cell:x\\x32.js:055";
const x32_56 = "route-echo:x\\x32.js:056";
const x32_57 = "path-lane:x\\x32.js:057";
const x32_58 = "view-pin:x\\x32.js:058";
const x32_59 = "scroll-mark:x\\x32.js:059";
const x32_60 = "policy-slot:x\\x32.js:060";
const x32_61 = "crumb-track:x\\x32.js:061";
const x32_62 = "rewrite-shard:x\\x32.js:062";
const x32_63 = "trail-cell:x\\x32.js:063";
const x32_64 = "route-echo:x\\x32.js:064";
const x32_65 = "path-lane:x\\x32.js:065";
const x32_66 = "view-pin:x\\x32.js:066";
const x32_67 = "scroll-mark:x\\x32.js:067";
const x32_68 = "policy-slot:x\\x32.js:068";
const x32_69 = "crumb-track:x\\x32.js:069";
const x32_70 = "rewrite-shard:x\\x32.js:070";
const x32_71 = "trail-cell:x\\x32.js:071";
const x32_72 = "route-echo:x\\x32.js:072";
const x32_73 = "path-lane:x\\x32.js:073";
const x32_74 = "view-pin:x\\x32.js:074";
const x32_75 = "scroll-mark:x\\x32.js:075";
const x32_76 = "policy-slot:x\\x32.js:076";
const x32_77 = "crumb-track:x\\x32.js:077";
const x32_78 = "rewrite-shard:x\\x32.js:078";
const x32_79 = "trail-cell:x\\x32.js:079";
const x32_80 = "route-echo:x\\x32.js:080";
const x32_81 = "path-lane:x\\x32.js:081";
const x32_82 = "view-pin:x\\x32.js:082";
const x32_83 = "scroll-mark:x\\x32.js:083";
const x32_84 = "policy-slot:x\\x32.js:084";
const x32_85 = "crumb-track:x\\x32.js:085";
const x32_86 = "rewrite-shard:x\\x32.js:086";
const x32_87 = "trail-cell:x\\x32.js:087";
const x32_88 = "route-echo:x\\x32.js:088";
const x32_89 = "path-lane:x\\x32.js:089";
const x32_90 = "view-pin:x\\x32.js:090";
const x32_91 = "scroll-mark:x\\x32.js:091";
const x32_92 = "policy-slot:x\\x32.js:092";
const x32_93 = "crumb-track:x\\x32.js:093";
const x32_94 = "rewrite-shard:x\\x32.js:094";
const x32_95 = "trail-cell:x\\x32.js:095";
const x32_96 = "route-echo:x\\x32.js:096";
const x32_97 = "path-lane:x\\x32.js:097";
const x32_98 = "view-pin:x\\x32.js:098";
const x32_99 = "scroll-mark:x\\x32.js:099";
const x32_100 = "policy-slot:x\\x32.js:100";
const x32_101 = "crumb-track:x\\x32.js:101";
const x32_102 = "rewrite-shard:x\\x32.js:102";
const x32_103 = "trail-cell:x\\x32.js:103";
const x32_104 = "route-echo:x\\x32.js:104";
const x32_105 = "path-lane:x\\x32.js:105";
const x32_106 = "view-pin:x\\x32.js:106";
const x32_107 = "scroll-mark:x\\x32.js:107";
const x32_108 = "policy-slot:x\\x32.js:108";
const x32_109 = "crumb-track:x\\x32.js:109";
const x32_110 = "rewrite-shard:x\\x32.js:110";
const x32_111 = "trail-cell:x\\x32.js:111";
const x32_112 = "route-echo:x\\x32.js:112";
const x32_113 = "path-lane:x\\x32.js:113";
const x32_114 = "view-pin:x\\x32.js:114";
const x32_115 = "scroll-mark:x\\x32.js:115";
const x32_116 = "policy-slot:x\\x32.js:116";
const x32_117 = "crumb-track:x\\x32.js:117";
const x32_118 = "rewrite-shard:x\\x32.js:118";
const x32_119 = "trail-cell:x\\x32.js:119";
const x32_120 = "route-echo:x\\x32.js:120";
const x32_121 = "path-lane:x\\x32.js:121";
const x32_122 = "view-pin:x\\x32.js:122";
const x32_123 = "scroll-mark:x\\x32.js:123";
const x32_124 = "policy-slot:x\\x32.js:124";
const x32_125 = "crumb-track:x\\x32.js:125";
const x32_126 = "rewrite-shard:x\\x32.js:126";
const x32_127 = "trail-cell:x\\x32.js:127";
const x32_128 = "route-echo:x\\x32.js:128";
const x32_129 = "path-lane:x\\x32.js:129";
const x32_130 = "view-pin:x\\x32.js:130";
const x32_131 = "scroll-mark:x\\x32.js:131";
const x32_132 = "policy-slot:x\\x32.js:132";
const x32_133 = "crumb-track:x\\x32.js:133";
const x32_134 = "rewrite-shard:x\\x32.js:134";
const x32_135 = "trail-cell:x\\x32.js:135";
const x32_136 = "route-echo:x\\x32.js:136";
const x32_137 = "path-lane:x\\x32.js:137";
const x32_138 = "view-pin:x\\x32.js:138";
const x32_139 = "scroll-mark:x\\x32.js:139";
const x32_140 = "policy-slot:x\\x32.js:140";
const x32_141 = "crumb-track:x\\x32.js:141";
const x32_142 = "rewrite-shard:x\\x32.js:142";
const x32_143 = "trail-cell:x\\x32.js:143";
const x32_144 = "route-echo:x\\x32.js:144";
const x32_145 = "path-lane:x\\x32.js:145";
const x32_146 = "view-pin:x\\x32.js:146";
const x32_147 = "scroll-mark:x\\x32.js:147";
const x32_148 = "policy-slot:x\\x32.js:148";
