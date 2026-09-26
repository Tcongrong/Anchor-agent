import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 4,
  salt: 'r:04:trail',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 8,
  mask: 3428989806
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/4/shadow', y: 'shadow', n: 15 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '4', y: '4', n: 1 }
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
const x04_0 = "route-echo:x\\x04.js:000";
const x04_1 = "path-lane:x\\x04.js:001";
const x04_2 = "view-pin:x\\x04.js:002";
const x04_3 = "scroll-mark:x\\x04.js:003";
const x04_4 = "policy-slot:x\\x04.js:004";
const x04_5 = "crumb-track:x\\x04.js:005";
const x04_6 = "rewrite-shard:x\\x04.js:006";
const x04_7 = "trail-cell:x\\x04.js:007";
const x04_8 = "route-echo:x\\x04.js:008";
const x04_9 = "path-lane:x\\x04.js:009";
const x04_10 = "view-pin:x\\x04.js:010";
const x04_11 = "scroll-mark:x\\x04.js:011";
const x04_12 = "policy-slot:x\\x04.js:012";
const x04_13 = "crumb-track:x\\x04.js:013";
const x04_14 = "rewrite-shard:x\\x04.js:014";
const x04_15 = "trail-cell:x\\x04.js:015";
const x04_16 = "route-echo:x\\x04.js:016";
const x04_17 = "path-lane:x\\x04.js:017";
const x04_18 = "view-pin:x\\x04.js:018";
const x04_19 = "scroll-mark:x\\x04.js:019";
const x04_20 = "policy-slot:x\\x04.js:020";
const x04_21 = "crumb-track:x\\x04.js:021";
const x04_22 = "rewrite-shard:x\\x04.js:022";
const x04_23 = "trail-cell:x\\x04.js:023";
const x04_24 = "route-echo:x\\x04.js:024";
const x04_25 = "path-lane:x\\x04.js:025";
const x04_26 = "view-pin:x\\x04.js:026";
const x04_27 = "scroll-mark:x\\x04.js:027";
const x04_28 = "policy-slot:x\\x04.js:028";
const x04_29 = "crumb-track:x\\x04.js:029";
const x04_30 = "rewrite-shard:x\\x04.js:030";
const x04_31 = "trail-cell:x\\x04.js:031";
const x04_32 = "route-echo:x\\x04.js:032";
const x04_33 = "path-lane:x\\x04.js:033";
const x04_34 = "view-pin:x\\x04.js:034";
const x04_35 = "scroll-mark:x\\x04.js:035";
const x04_36 = "policy-slot:x\\x04.js:036";
const x04_37 = "crumb-track:x\\x04.js:037";
const x04_38 = "rewrite-shard:x\\x04.js:038";
const x04_39 = "trail-cell:x\\x04.js:039";
const x04_40 = "route-echo:x\\x04.js:040";
const x04_41 = "path-lane:x\\x04.js:041";
const x04_42 = "view-pin:x\\x04.js:042";
const x04_43 = "scroll-mark:x\\x04.js:043";
const x04_44 = "policy-slot:x\\x04.js:044";
const x04_45 = "crumb-track:x\\x04.js:045";
const x04_46 = "rewrite-shard:x\\x04.js:046";
const x04_47 = "trail-cell:x\\x04.js:047";
const x04_48 = "route-echo:x\\x04.js:048";
const x04_49 = "path-lane:x\\x04.js:049";
const x04_50 = "view-pin:x\\x04.js:050";
const x04_51 = "scroll-mark:x\\x04.js:051";
const x04_52 = "policy-slot:x\\x04.js:052";
const x04_53 = "crumb-track:x\\x04.js:053";
const x04_54 = "rewrite-shard:x\\x04.js:054";
const x04_55 = "trail-cell:x\\x04.js:055";
const x04_56 = "route-echo:x\\x04.js:056";
const x04_57 = "path-lane:x\\x04.js:057";
const x04_58 = "view-pin:x\\x04.js:058";
const x04_59 = "scroll-mark:x\\x04.js:059";
const x04_60 = "policy-slot:x\\x04.js:060";
const x04_61 = "crumb-track:x\\x04.js:061";
const x04_62 = "rewrite-shard:x\\x04.js:062";
const x04_63 = "trail-cell:x\\x04.js:063";
const x04_64 = "route-echo:x\\x04.js:064";
const x04_65 = "path-lane:x\\x04.js:065";
const x04_66 = "view-pin:x\\x04.js:066";
const x04_67 = "scroll-mark:x\\x04.js:067";
const x04_68 = "policy-slot:x\\x04.js:068";
const x04_69 = "crumb-track:x\\x04.js:069";
const x04_70 = "rewrite-shard:x\\x04.js:070";
const x04_71 = "trail-cell:x\\x04.js:071";
const x04_72 = "route-echo:x\\x04.js:072";
const x04_73 = "path-lane:x\\x04.js:073";
const x04_74 = "view-pin:x\\x04.js:074";
const x04_75 = "scroll-mark:x\\x04.js:075";
const x04_76 = "policy-slot:x\\x04.js:076";
const x04_77 = "crumb-track:x\\x04.js:077";
const x04_78 = "rewrite-shard:x\\x04.js:078";
const x04_79 = "trail-cell:x\\x04.js:079";
const x04_80 = "route-echo:x\\x04.js:080";
const x04_81 = "path-lane:x\\x04.js:081";
const x04_82 = "view-pin:x\\x04.js:082";
const x04_83 = "scroll-mark:x\\x04.js:083";
const x04_84 = "policy-slot:x\\x04.js:084";
const x04_85 = "crumb-track:x\\x04.js:085";
const x04_86 = "rewrite-shard:x\\x04.js:086";
const x04_87 = "trail-cell:x\\x04.js:087";
const x04_88 = "route-echo:x\\x04.js:088";
const x04_89 = "path-lane:x\\x04.js:089";
const x04_90 = "view-pin:x\\x04.js:090";
const x04_91 = "scroll-mark:x\\x04.js:091";
const x04_92 = "policy-slot:x\\x04.js:092";
const x04_93 = "crumb-track:x\\x04.js:093";
const x04_94 = "rewrite-shard:x\\x04.js:094";
const x04_95 = "trail-cell:x\\x04.js:095";
const x04_96 = "route-echo:x\\x04.js:096";
const x04_97 = "path-lane:x\\x04.js:097";
const x04_98 = "view-pin:x\\x04.js:098";
const x04_99 = "scroll-mark:x\\x04.js:099";
const x04_100 = "policy-slot:x\\x04.js:100";
const x04_101 = "crumb-track:x\\x04.js:101";
const x04_102 = "rewrite-shard:x\\x04.js:102";
const x04_103 = "trail-cell:x\\x04.js:103";
const x04_104 = "route-echo:x\\x04.js:104";
const x04_105 = "path-lane:x\\x04.js:105";
const x04_106 = "view-pin:x\\x04.js:106";
const x04_107 = "scroll-mark:x\\x04.js:107";
const x04_108 = "policy-slot:x\\x04.js:108";
const x04_109 = "crumb-track:x\\x04.js:109";
const x04_110 = "rewrite-shard:x\\x04.js:110";
const x04_111 = "trail-cell:x\\x04.js:111";
const x04_112 = "route-echo:x\\x04.js:112";
const x04_113 = "path-lane:x\\x04.js:113";
const x04_114 = "view-pin:x\\x04.js:114";
const x04_115 = "scroll-mark:x\\x04.js:115";
const x04_116 = "policy-slot:x\\x04.js:116";
const x04_117 = "crumb-track:x\\x04.js:117";
const x04_118 = "rewrite-shard:x\\x04.js:118";
const x04_119 = "trail-cell:x\\x04.js:119";
const x04_120 = "route-echo:x\\x04.js:120";
const x04_121 = "path-lane:x\\x04.js:121";
const x04_122 = "view-pin:x\\x04.js:122";
const x04_123 = "scroll-mark:x\\x04.js:123";
const x04_124 = "policy-slot:x\\x04.js:124";
const x04_125 = "crumb-track:x\\x04.js:125";
const x04_126 = "rewrite-shard:x\\x04.js:126";
const x04_127 = "trail-cell:x\\x04.js:127";
const x04_128 = "route-echo:x\\x04.js:128";
const x04_129 = "path-lane:x\\x04.js:129";
const x04_130 = "view-pin:x\\x04.js:130";
const x04_131 = "scroll-mark:x\\x04.js:131";
const x04_132 = "policy-slot:x\\x04.js:132";
const x04_133 = "crumb-track:x\\x04.js:133";
const x04_134 = "rewrite-shard:x\\x04.js:134";
const x04_135 = "trail-cell:x\\x04.js:135";
const x04_136 = "route-echo:x\\x04.js:136";
const x04_137 = "path-lane:x\\x04.js:137";
const x04_138 = "view-pin:x\\x04.js:138";
const x04_139 = "scroll-mark:x\\x04.js:139";
const x04_140 = "policy-slot:x\\x04.js:140";
const x04_141 = "crumb-track:x\\x04.js:141";
const x04_142 = "rewrite-shard:x\\x04.js:142";
const x04_143 = "trail-cell:x\\x04.js:143";
const x04_144 = "route-echo:x\\x04.js:144";
const x04_145 = "path-lane:x\\x04.js:145";
const x04_146 = "view-pin:x\\x04.js:146";
const x04_147 = "scroll-mark:x\\x04.js:147";
const x04_148 = "policy-slot:x\\x04.js:148";
