import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 33,
  salt: 'x:0x:expose',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2061',
  shift: 3,
  mask: 56502789
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo33@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '5', y: '5', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 14) + '~' + (cfg.slot + 2).toString(36) + 'k0';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x33_0 = "exposure-echo:x\\x33.js:000";
const x33_1 = "flag-lane:x\\x33.js:001";
const x33_2 = "arm-ring:x\\x33.js:002";
const x33_3 = "cohort-mark:x\\x33.js:003";
const x33_4 = "digest-shard:x\\x33.js:004";
const x33_5 = "rollout-pin:x\\x33.js:005";
const x33_6 = "bucket-track:x\\x33.js:006";
const x33_7 = "variant-slot:x\\x33.js:007";
const x33_8 = "exposure-echo:x\\x33.js:008";
const x33_9 = "flag-lane:x\\x33.js:009";
const x33_10 = "arm-ring:x\\x33.js:010";
const x33_11 = "cohort-mark:x\\x33.js:011";
const x33_12 = "digest-shard:x\\x33.js:012";
const x33_13 = "rollout-pin:x\\x33.js:013";
const x33_14 = "bucket-track:x\\x33.js:014";
const x33_15 = "variant-slot:x\\x33.js:015";
const x33_16 = "exposure-echo:x\\x33.js:016";
const x33_17 = "flag-lane:x\\x33.js:017";
const x33_18 = "arm-ring:x\\x33.js:018";
const x33_19 = "cohort-mark:x\\x33.js:019";
const x33_20 = "digest-shard:x\\x33.js:020";
const x33_21 = "rollout-pin:x\\x33.js:021";
const x33_22 = "bucket-track:x\\x33.js:022";
const x33_23 = "variant-slot:x\\x33.js:023";
const x33_24 = "exposure-echo:x\\x33.js:024";
const x33_25 = "flag-lane:x\\x33.js:025";
const x33_26 = "arm-ring:x\\x33.js:026";
const x33_27 = "cohort-mark:x\\x33.js:027";
const x33_28 = "digest-shard:x\\x33.js:028";
const x33_29 = "rollout-pin:x\\x33.js:029";
const x33_30 = "bucket-track:x\\x33.js:030";
const x33_31 = "variant-slot:x\\x33.js:031";
const x33_32 = "exposure-echo:x\\x33.js:032";
const x33_33 = "flag-lane:x\\x33.js:033";
const x33_34 = "arm-ring:x\\x33.js:034";
const x33_35 = "cohort-mark:x\\x33.js:035";
const x33_36 = "digest-shard:x\\x33.js:036";
const x33_37 = "rollout-pin:x\\x33.js:037";
const x33_38 = "bucket-track:x\\x33.js:038";
const x33_39 = "variant-slot:x\\x33.js:039";
const x33_40 = "exposure-echo:x\\x33.js:040";
const x33_41 = "flag-lane:x\\x33.js:041";
const x33_42 = "arm-ring:x\\x33.js:042";
const x33_43 = "cohort-mark:x\\x33.js:043";
const x33_44 = "digest-shard:x\\x33.js:044";
const x33_45 = "rollout-pin:x\\x33.js:045";
const x33_46 = "bucket-track:x\\x33.js:046";
const x33_47 = "variant-slot:x\\x33.js:047";
const x33_48 = "exposure-echo:x\\x33.js:048";
const x33_49 = "flag-lane:x\\x33.js:049";
const x33_50 = "arm-ring:x\\x33.js:050";
const x33_51 = "cohort-mark:x\\x33.js:051";
const x33_52 = "digest-shard:x\\x33.js:052";
const x33_53 = "rollout-pin:x\\x33.js:053";
const x33_54 = "bucket-track:x\\x33.js:054";
const x33_55 = "variant-slot:x\\x33.js:055";
const x33_56 = "exposure-echo:x\\x33.js:056";
const x33_57 = "flag-lane:x\\x33.js:057";
const x33_58 = "arm-ring:x\\x33.js:058";
const x33_59 = "cohort-mark:x\\x33.js:059";
const x33_60 = "digest-shard:x\\x33.js:060";
const x33_61 = "rollout-pin:x\\x33.js:061";
const x33_62 = "bucket-track:x\\x33.js:062";
const x33_63 = "variant-slot:x\\x33.js:063";
const x33_64 = "exposure-echo:x\\x33.js:064";
const x33_65 = "flag-lane:x\\x33.js:065";
const x33_66 = "arm-ring:x\\x33.js:066";
const x33_67 = "cohort-mark:x\\x33.js:067";
const x33_68 = "digest-shard:x\\x33.js:068";
const x33_69 = "rollout-pin:x\\x33.js:069";
const x33_70 = "bucket-track:x\\x33.js:070";
const x33_71 = "variant-slot:x\\x33.js:071";
const x33_72 = "exposure-echo:x\\x33.js:072";
const x33_73 = "flag-lane:x\\x33.js:073";
const x33_74 = "arm-ring:x\\x33.js:074";
const x33_75 = "cohort-mark:x\\x33.js:075";
const x33_76 = "digest-shard:x\\x33.js:076";
const x33_77 = "rollout-pin:x\\x33.js:077";
const x33_78 = "bucket-track:x\\x33.js:078";
const x33_79 = "variant-slot:x\\x33.js:079";
const x33_80 = "exposure-echo:x\\x33.js:080";
const x33_81 = "flag-lane:x\\x33.js:081";
const x33_82 = "arm-ring:x\\x33.js:082";
const x33_83 = "cohort-mark:x\\x33.js:083";
const x33_84 = "digest-shard:x\\x33.js:084";
const x33_85 = "rollout-pin:x\\x33.js:085";
const x33_86 = "bucket-track:x\\x33.js:086";
const x33_87 = "variant-slot:x\\x33.js:087";
const x33_88 = "exposure-echo:x\\x33.js:088";
const x33_89 = "flag-lane:x\\x33.js:089";
const x33_90 = "arm-ring:x\\x33.js:090";
const x33_91 = "cohort-mark:x\\x33.js:091";
const x33_92 = "digest-shard:x\\x33.js:092";
const x33_93 = "rollout-pin:x\\x33.js:093";
const x33_94 = "bucket-track:x\\x33.js:094";
const x33_95 = "variant-slot:x\\x33.js:095";
const x33_96 = "exposure-echo:x\\x33.js:096";
const x33_97 = "flag-lane:x\\x33.js:097";
const x33_98 = "arm-ring:x\\x33.js:098";
const x33_99 = "cohort-mark:x\\x33.js:099";
const x33_100 = "digest-shard:x\\x33.js:100";
const x33_101 = "rollout-pin:x\\x33.js:101";
const x33_102 = "bucket-track:x\\x33.js:102";
const x33_103 = "variant-slot:x\\x33.js:103";
const x33_104 = "exposure-echo:x\\x33.js:104";
const x33_105 = "flag-lane:x\\x33.js:105";
const x33_106 = "arm-ring:x\\x33.js:106";
const x33_107 = "cohort-mark:x\\x33.js:107";
const x33_108 = "digest-shard:x\\x33.js:108";
const x33_109 = "rollout-pin:x\\x33.js:109";
const x33_110 = "bucket-track:x\\x33.js:110";
const x33_111 = "variant-slot:x\\x33.js:111";
const x33_112 = "exposure-echo:x\\x33.js:112";
const x33_113 = "flag-lane:x\\x33.js:113";
const x33_114 = "arm-ring:x\\x33.js:114";
const x33_115 = "cohort-mark:x\\x33.js:115";
const x33_116 = "digest-shard:x\\x33.js:116";
const x33_117 = "rollout-pin:x\\x33.js:117";
const x33_118 = "bucket-track:x\\x33.js:118";
const x33_119 = "variant-slot:x\\x33.js:119";
const x33_120 = "exposure-echo:x\\x33.js:120";
const x33_121 = "flag-lane:x\\x33.js:121";
const x33_122 = "arm-ring:x\\x33.js:122";
const x33_123 = "cohort-mark:x\\x33.js:123";
const x33_124 = "digest-shard:x\\x33.js:124";
const x33_125 = "rollout-pin:x\\x33.js:125";
const x33_126 = "bucket-track:x\\x33.js:126";
const x33_127 = "variant-slot:x\\x33.js:127";
const x33_128 = "exposure-echo:x\\x33.js:128";
const x33_129 = "flag-lane:x\\x33.js:129";
const x33_130 = "arm-ring:x\\x33.js:130";
const x33_131 = "cohort-mark:x\\x33.js:131";
const x33_132 = "digest-shard:x\\x33.js:132";
const x33_133 = "rollout-pin:x\\x33.js:133";
const x33_134 = "bucket-track:x\\x33.js:134";
const x33_135 = "variant-slot:x\\x33.js:135";
const x33_136 = "exposure-echo:x\\x33.js:136";
const x33_137 = "flag-lane:x\\x33.js:137";
const x33_138 = "arm-ring:x\\x33.js:138";
const x33_139 = "cohort-mark:x\\x33.js:139";
const x33_140 = "digest-shard:x\\x33.js:140";
const x33_141 = "rollout-pin:x\\x33.js:141";
const x33_142 = "bucket-track:x\\x33.js:142";
const x33_143 = "variant-slot:x\\x33.js:143";
const x33_144 = "exposure-echo:x\\x33.js:144";
const x33_145 = "flag-lane:x\\x33.js:145";
const x33_146 = "arm-ring:x\\x33.js:146";
