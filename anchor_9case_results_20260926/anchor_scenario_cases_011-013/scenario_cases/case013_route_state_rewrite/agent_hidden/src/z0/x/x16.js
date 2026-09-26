import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 16,
  salt: 'r:0g:trail',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 8,
  mask: 922480570
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/16/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '7', y: '7', n: 1 }
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
const x16_0 = "route-echo:x\\x16.js:000";
const x16_1 = "path-lane:x\\x16.js:001";
const x16_2 = "view-pin:x\\x16.js:002";
const x16_3 = "scroll-mark:x\\x16.js:003";
const x16_4 = "policy-slot:x\\x16.js:004";
const x16_5 = "crumb-track:x\\x16.js:005";
const x16_6 = "rewrite-shard:x\\x16.js:006";
const x16_7 = "trail-cell:x\\x16.js:007";
const x16_8 = "route-echo:x\\x16.js:008";
const x16_9 = "path-lane:x\\x16.js:009";
const x16_10 = "view-pin:x\\x16.js:010";
const x16_11 = "scroll-mark:x\\x16.js:011";
const x16_12 = "policy-slot:x\\x16.js:012";
const x16_13 = "crumb-track:x\\x16.js:013";
const x16_14 = "rewrite-shard:x\\x16.js:014";
const x16_15 = "trail-cell:x\\x16.js:015";
const x16_16 = "route-echo:x\\x16.js:016";
const x16_17 = "path-lane:x\\x16.js:017";
const x16_18 = "view-pin:x\\x16.js:018";
const x16_19 = "scroll-mark:x\\x16.js:019";
const x16_20 = "policy-slot:x\\x16.js:020";
const x16_21 = "crumb-track:x\\x16.js:021";
const x16_22 = "rewrite-shard:x\\x16.js:022";
const x16_23 = "trail-cell:x\\x16.js:023";
const x16_24 = "route-echo:x\\x16.js:024";
const x16_25 = "path-lane:x\\x16.js:025";
const x16_26 = "view-pin:x\\x16.js:026";
const x16_27 = "scroll-mark:x\\x16.js:027";
const x16_28 = "policy-slot:x\\x16.js:028";
const x16_29 = "crumb-track:x\\x16.js:029";
const x16_30 = "rewrite-shard:x\\x16.js:030";
const x16_31 = "trail-cell:x\\x16.js:031";
const x16_32 = "route-echo:x\\x16.js:032";
const x16_33 = "path-lane:x\\x16.js:033";
const x16_34 = "view-pin:x\\x16.js:034";
const x16_35 = "scroll-mark:x\\x16.js:035";
const x16_36 = "policy-slot:x\\x16.js:036";
const x16_37 = "crumb-track:x\\x16.js:037";
const x16_38 = "rewrite-shard:x\\x16.js:038";
const x16_39 = "trail-cell:x\\x16.js:039";
const x16_40 = "route-echo:x\\x16.js:040";
const x16_41 = "path-lane:x\\x16.js:041";
const x16_42 = "view-pin:x\\x16.js:042";
const x16_43 = "scroll-mark:x\\x16.js:043";
const x16_44 = "policy-slot:x\\x16.js:044";
const x16_45 = "crumb-track:x\\x16.js:045";
const x16_46 = "rewrite-shard:x\\x16.js:046";
const x16_47 = "trail-cell:x\\x16.js:047";
const x16_48 = "route-echo:x\\x16.js:048";
const x16_49 = "path-lane:x\\x16.js:049";
const x16_50 = "view-pin:x\\x16.js:050";
const x16_51 = "scroll-mark:x\\x16.js:051";
const x16_52 = "policy-slot:x\\x16.js:052";
const x16_53 = "crumb-track:x\\x16.js:053";
const x16_54 = "rewrite-shard:x\\x16.js:054";
const x16_55 = "trail-cell:x\\x16.js:055";
const x16_56 = "route-echo:x\\x16.js:056";
const x16_57 = "path-lane:x\\x16.js:057";
const x16_58 = "view-pin:x\\x16.js:058";
const x16_59 = "scroll-mark:x\\x16.js:059";
const x16_60 = "policy-slot:x\\x16.js:060";
const x16_61 = "crumb-track:x\\x16.js:061";
const x16_62 = "rewrite-shard:x\\x16.js:062";
const x16_63 = "trail-cell:x\\x16.js:063";
const x16_64 = "route-echo:x\\x16.js:064";
const x16_65 = "path-lane:x\\x16.js:065";
const x16_66 = "view-pin:x\\x16.js:066";
const x16_67 = "scroll-mark:x\\x16.js:067";
const x16_68 = "policy-slot:x\\x16.js:068";
const x16_69 = "crumb-track:x\\x16.js:069";
const x16_70 = "rewrite-shard:x\\x16.js:070";
const x16_71 = "trail-cell:x\\x16.js:071";
const x16_72 = "route-echo:x\\x16.js:072";
const x16_73 = "path-lane:x\\x16.js:073";
const x16_74 = "view-pin:x\\x16.js:074";
const x16_75 = "scroll-mark:x\\x16.js:075";
const x16_76 = "policy-slot:x\\x16.js:076";
const x16_77 = "crumb-track:x\\x16.js:077";
const x16_78 = "rewrite-shard:x\\x16.js:078";
const x16_79 = "trail-cell:x\\x16.js:079";
const x16_80 = "route-echo:x\\x16.js:080";
const x16_81 = "path-lane:x\\x16.js:081";
const x16_82 = "view-pin:x\\x16.js:082";
const x16_83 = "scroll-mark:x\\x16.js:083";
const x16_84 = "policy-slot:x\\x16.js:084";
const x16_85 = "crumb-track:x\\x16.js:085";
const x16_86 = "rewrite-shard:x\\x16.js:086";
const x16_87 = "trail-cell:x\\x16.js:087";
const x16_88 = "route-echo:x\\x16.js:088";
const x16_89 = "path-lane:x\\x16.js:089";
const x16_90 = "view-pin:x\\x16.js:090";
const x16_91 = "scroll-mark:x\\x16.js:091";
const x16_92 = "policy-slot:x\\x16.js:092";
const x16_93 = "crumb-track:x\\x16.js:093";
const x16_94 = "rewrite-shard:x\\x16.js:094";
const x16_95 = "trail-cell:x\\x16.js:095";
const x16_96 = "route-echo:x\\x16.js:096";
const x16_97 = "path-lane:x\\x16.js:097";
const x16_98 = "view-pin:x\\x16.js:098";
const x16_99 = "scroll-mark:x\\x16.js:099";
const x16_100 = "policy-slot:x\\x16.js:100";
const x16_101 = "crumb-track:x\\x16.js:101";
const x16_102 = "rewrite-shard:x\\x16.js:102";
const x16_103 = "trail-cell:x\\x16.js:103";
const x16_104 = "route-echo:x\\x16.js:104";
const x16_105 = "path-lane:x\\x16.js:105";
const x16_106 = "view-pin:x\\x16.js:106";
const x16_107 = "scroll-mark:x\\x16.js:107";
const x16_108 = "policy-slot:x\\x16.js:108";
const x16_109 = "crumb-track:x\\x16.js:109";
const x16_110 = "rewrite-shard:x\\x16.js:110";
const x16_111 = "trail-cell:x\\x16.js:111";
const x16_112 = "route-echo:x\\x16.js:112";
const x16_113 = "path-lane:x\\x16.js:113";
const x16_114 = "view-pin:x\\x16.js:114";
const x16_115 = "scroll-mark:x\\x16.js:115";
const x16_116 = "policy-slot:x\\x16.js:116";
const x16_117 = "crumb-track:x\\x16.js:117";
const x16_118 = "rewrite-shard:x\\x16.js:118";
const x16_119 = "trail-cell:x\\x16.js:119";
const x16_120 = "route-echo:x\\x16.js:120";
const x16_121 = "path-lane:x\\x16.js:121";
const x16_122 = "view-pin:x\\x16.js:122";
const x16_123 = "scroll-mark:x\\x16.js:123";
const x16_124 = "policy-slot:x\\x16.js:124";
const x16_125 = "crumb-track:x\\x16.js:125";
const x16_126 = "rewrite-shard:x\\x16.js:126";
const x16_127 = "trail-cell:x\\x16.js:127";
const x16_128 = "route-echo:x\\x16.js:128";
const x16_129 = "path-lane:x\\x16.js:129";
const x16_130 = "view-pin:x\\x16.js:130";
const x16_131 = "scroll-mark:x\\x16.js:131";
const x16_132 = "policy-slot:x\\x16.js:132";
const x16_133 = "crumb-track:x\\x16.js:133";
const x16_134 = "rewrite-shard:x\\x16.js:134";
const x16_135 = "trail-cell:x\\x16.js:135";
const x16_136 = "route-echo:x\\x16.js:136";
const x16_137 = "path-lane:x\\x16.js:137";
const x16_138 = "view-pin:x\\x16.js:138";
const x16_139 = "scroll-mark:x\\x16.js:139";
const x16_140 = "policy-slot:x\\x16.js:140";
const x16_141 = "crumb-track:x\\x16.js:141";
const x16_142 = "rewrite-shard:x\\x16.js:142";
const x16_143 = "trail-cell:x\\x16.js:143";
const x16_144 = "route-echo:x\\x16.js:144";
const x16_145 = "path-lane:x\\x16.js:145";
const x16_146 = "view-pin:x\\x16.js:146";
const x16_147 = "scroll-mark:x\\x16.js:147";
const x16_148 = "policy-slot:x\\x16.js:148";
