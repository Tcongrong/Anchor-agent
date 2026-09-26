import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 27,
  salt: 'x:0r:expose',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 8,
  mask: 1309757407
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo27@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '6', y: '6', n: 1 },
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
const x27_0 = "exposure-echo:x\\x27.js:000";
const x27_1 = "flag-lane:x\\x27.js:001";
const x27_2 = "arm-ring:x\\x27.js:002";
const x27_3 = "cohort-mark:x\\x27.js:003";
const x27_4 = "digest-shard:x\\x27.js:004";
const x27_5 = "rollout-pin:x\\x27.js:005";
const x27_6 = "bucket-track:x\\x27.js:006";
const x27_7 = "variant-slot:x\\x27.js:007";
const x27_8 = "exposure-echo:x\\x27.js:008";
const x27_9 = "flag-lane:x\\x27.js:009";
const x27_10 = "arm-ring:x\\x27.js:010";
const x27_11 = "cohort-mark:x\\x27.js:011";
const x27_12 = "digest-shard:x\\x27.js:012";
const x27_13 = "rollout-pin:x\\x27.js:013";
const x27_14 = "bucket-track:x\\x27.js:014";
const x27_15 = "variant-slot:x\\x27.js:015";
const x27_16 = "exposure-echo:x\\x27.js:016";
const x27_17 = "flag-lane:x\\x27.js:017";
const x27_18 = "arm-ring:x\\x27.js:018";
const x27_19 = "cohort-mark:x\\x27.js:019";
const x27_20 = "digest-shard:x\\x27.js:020";
const x27_21 = "rollout-pin:x\\x27.js:021";
const x27_22 = "bucket-track:x\\x27.js:022";
const x27_23 = "variant-slot:x\\x27.js:023";
const x27_24 = "exposure-echo:x\\x27.js:024";
const x27_25 = "flag-lane:x\\x27.js:025";
const x27_26 = "arm-ring:x\\x27.js:026";
const x27_27 = "cohort-mark:x\\x27.js:027";
const x27_28 = "digest-shard:x\\x27.js:028";
const x27_29 = "rollout-pin:x\\x27.js:029";
const x27_30 = "bucket-track:x\\x27.js:030";
const x27_31 = "variant-slot:x\\x27.js:031";
const x27_32 = "exposure-echo:x\\x27.js:032";
const x27_33 = "flag-lane:x\\x27.js:033";
const x27_34 = "arm-ring:x\\x27.js:034";
const x27_35 = "cohort-mark:x\\x27.js:035";
const x27_36 = "digest-shard:x\\x27.js:036";
const x27_37 = "rollout-pin:x\\x27.js:037";
const x27_38 = "bucket-track:x\\x27.js:038";
const x27_39 = "variant-slot:x\\x27.js:039";
const x27_40 = "exposure-echo:x\\x27.js:040";
const x27_41 = "flag-lane:x\\x27.js:041";
const x27_42 = "arm-ring:x\\x27.js:042";
const x27_43 = "cohort-mark:x\\x27.js:043";
const x27_44 = "digest-shard:x\\x27.js:044";
const x27_45 = "rollout-pin:x\\x27.js:045";
const x27_46 = "bucket-track:x\\x27.js:046";
const x27_47 = "variant-slot:x\\x27.js:047";
const x27_48 = "exposure-echo:x\\x27.js:048";
const x27_49 = "flag-lane:x\\x27.js:049";
const x27_50 = "arm-ring:x\\x27.js:050";
const x27_51 = "cohort-mark:x\\x27.js:051";
const x27_52 = "digest-shard:x\\x27.js:052";
const x27_53 = "rollout-pin:x\\x27.js:053";
const x27_54 = "bucket-track:x\\x27.js:054";
const x27_55 = "variant-slot:x\\x27.js:055";
const x27_56 = "exposure-echo:x\\x27.js:056";
const x27_57 = "flag-lane:x\\x27.js:057";
const x27_58 = "arm-ring:x\\x27.js:058";
const x27_59 = "cohort-mark:x\\x27.js:059";
const x27_60 = "digest-shard:x\\x27.js:060";
const x27_61 = "rollout-pin:x\\x27.js:061";
const x27_62 = "bucket-track:x\\x27.js:062";
const x27_63 = "variant-slot:x\\x27.js:063";
const x27_64 = "exposure-echo:x\\x27.js:064";
const x27_65 = "flag-lane:x\\x27.js:065";
const x27_66 = "arm-ring:x\\x27.js:066";
const x27_67 = "cohort-mark:x\\x27.js:067";
const x27_68 = "digest-shard:x\\x27.js:068";
const x27_69 = "rollout-pin:x\\x27.js:069";
const x27_70 = "bucket-track:x\\x27.js:070";
const x27_71 = "variant-slot:x\\x27.js:071";
const x27_72 = "exposure-echo:x\\x27.js:072";
const x27_73 = "flag-lane:x\\x27.js:073";
const x27_74 = "arm-ring:x\\x27.js:074";
const x27_75 = "cohort-mark:x\\x27.js:075";
const x27_76 = "digest-shard:x\\x27.js:076";
const x27_77 = "rollout-pin:x\\x27.js:077";
const x27_78 = "bucket-track:x\\x27.js:078";
const x27_79 = "variant-slot:x\\x27.js:079";
const x27_80 = "exposure-echo:x\\x27.js:080";
const x27_81 = "flag-lane:x\\x27.js:081";
const x27_82 = "arm-ring:x\\x27.js:082";
const x27_83 = "cohort-mark:x\\x27.js:083";
const x27_84 = "digest-shard:x\\x27.js:084";
const x27_85 = "rollout-pin:x\\x27.js:085";
const x27_86 = "bucket-track:x\\x27.js:086";
const x27_87 = "variant-slot:x\\x27.js:087";
const x27_88 = "exposure-echo:x\\x27.js:088";
const x27_89 = "flag-lane:x\\x27.js:089";
const x27_90 = "arm-ring:x\\x27.js:090";
const x27_91 = "cohort-mark:x\\x27.js:091";
const x27_92 = "digest-shard:x\\x27.js:092";
const x27_93 = "rollout-pin:x\\x27.js:093";
const x27_94 = "bucket-track:x\\x27.js:094";
const x27_95 = "variant-slot:x\\x27.js:095";
const x27_96 = "exposure-echo:x\\x27.js:096";
const x27_97 = "flag-lane:x\\x27.js:097";
const x27_98 = "arm-ring:x\\x27.js:098";
const x27_99 = "cohort-mark:x\\x27.js:099";
const x27_100 = "digest-shard:x\\x27.js:100";
const x27_101 = "rollout-pin:x\\x27.js:101";
const x27_102 = "bucket-track:x\\x27.js:102";
const x27_103 = "variant-slot:x\\x27.js:103";
const x27_104 = "exposure-echo:x\\x27.js:104";
const x27_105 = "flag-lane:x\\x27.js:105";
const x27_106 = "arm-ring:x\\x27.js:106";
const x27_107 = "cohort-mark:x\\x27.js:107";
const x27_108 = "digest-shard:x\\x27.js:108";
const x27_109 = "rollout-pin:x\\x27.js:109";
const x27_110 = "bucket-track:x\\x27.js:110";
const x27_111 = "variant-slot:x\\x27.js:111";
const x27_112 = "exposure-echo:x\\x27.js:112";
const x27_113 = "flag-lane:x\\x27.js:113";
const x27_114 = "arm-ring:x\\x27.js:114";
const x27_115 = "cohort-mark:x\\x27.js:115";
const x27_116 = "digest-shard:x\\x27.js:116";
const x27_117 = "rollout-pin:x\\x27.js:117";
const x27_118 = "bucket-track:x\\x27.js:118";
const x27_119 = "variant-slot:x\\x27.js:119";
const x27_120 = "exposure-echo:x\\x27.js:120";
const x27_121 = "flag-lane:x\\x27.js:121";
const x27_122 = "arm-ring:x\\x27.js:122";
const x27_123 = "cohort-mark:x\\x27.js:123";
const x27_124 = "digest-shard:x\\x27.js:124";
const x27_125 = "rollout-pin:x\\x27.js:125";
const x27_126 = "bucket-track:x\\x27.js:126";
const x27_127 = "variant-slot:x\\x27.js:127";
const x27_128 = "exposure-echo:x\\x27.js:128";
const x27_129 = "flag-lane:x\\x27.js:129";
const x27_130 = "arm-ring:x\\x27.js:130";
const x27_131 = "cohort-mark:x\\x27.js:131";
const x27_132 = "digest-shard:x\\x27.js:132";
const x27_133 = "rollout-pin:x\\x27.js:133";
const x27_134 = "bucket-track:x\\x27.js:134";
const x27_135 = "variant-slot:x\\x27.js:135";
const x27_136 = "exposure-echo:x\\x27.js:136";
const x27_137 = "flag-lane:x\\x27.js:137";
const x27_138 = "arm-ring:x\\x27.js:138";
const x27_139 = "cohort-mark:x\\x27.js:139";
const x27_140 = "digest-shard:x\\x27.js:140";
const x27_141 = "rollout-pin:x\\x27.js:141";
const x27_142 = "bucket-track:x\\x27.js:142";
const x27_143 = "variant-slot:x\\x27.js:143";
const x27_144 = "exposure-echo:x\\x27.js:144";
const x27_145 = "flag-lane:x\\x27.js:145";
const x27_146 = "arm-ring:x\\x27.js:146";
