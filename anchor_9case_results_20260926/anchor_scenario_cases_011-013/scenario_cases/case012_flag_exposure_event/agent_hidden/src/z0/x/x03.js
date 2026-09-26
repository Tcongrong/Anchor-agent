import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 3,
  salt: 'x:03:expose',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 6,
  mask: 2027808583
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo3@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '3', y: '3', n: 1 },
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
const x03_0 = "exposure-echo:x\\x03.js:000";
const x03_1 = "flag-lane:x\\x03.js:001";
const x03_2 = "arm-ring:x\\x03.js:002";
const x03_3 = "cohort-mark:x\\x03.js:003";
const x03_4 = "digest-shard:x\\x03.js:004";
const x03_5 = "rollout-pin:x\\x03.js:005";
const x03_6 = "bucket-track:x\\x03.js:006";
const x03_7 = "variant-slot:x\\x03.js:007";
const x03_8 = "exposure-echo:x\\x03.js:008";
const x03_9 = "flag-lane:x\\x03.js:009";
const x03_10 = "arm-ring:x\\x03.js:010";
const x03_11 = "cohort-mark:x\\x03.js:011";
const x03_12 = "digest-shard:x\\x03.js:012";
const x03_13 = "rollout-pin:x\\x03.js:013";
const x03_14 = "bucket-track:x\\x03.js:014";
const x03_15 = "variant-slot:x\\x03.js:015";
const x03_16 = "exposure-echo:x\\x03.js:016";
const x03_17 = "flag-lane:x\\x03.js:017";
const x03_18 = "arm-ring:x\\x03.js:018";
const x03_19 = "cohort-mark:x\\x03.js:019";
const x03_20 = "digest-shard:x\\x03.js:020";
const x03_21 = "rollout-pin:x\\x03.js:021";
const x03_22 = "bucket-track:x\\x03.js:022";
const x03_23 = "variant-slot:x\\x03.js:023";
const x03_24 = "exposure-echo:x\\x03.js:024";
const x03_25 = "flag-lane:x\\x03.js:025";
const x03_26 = "arm-ring:x\\x03.js:026";
const x03_27 = "cohort-mark:x\\x03.js:027";
const x03_28 = "digest-shard:x\\x03.js:028";
const x03_29 = "rollout-pin:x\\x03.js:029";
const x03_30 = "bucket-track:x\\x03.js:030";
const x03_31 = "variant-slot:x\\x03.js:031";
const x03_32 = "exposure-echo:x\\x03.js:032";
const x03_33 = "flag-lane:x\\x03.js:033";
const x03_34 = "arm-ring:x\\x03.js:034";
const x03_35 = "cohort-mark:x\\x03.js:035";
const x03_36 = "digest-shard:x\\x03.js:036";
const x03_37 = "rollout-pin:x\\x03.js:037";
const x03_38 = "bucket-track:x\\x03.js:038";
const x03_39 = "variant-slot:x\\x03.js:039";
const x03_40 = "exposure-echo:x\\x03.js:040";
const x03_41 = "flag-lane:x\\x03.js:041";
const x03_42 = "arm-ring:x\\x03.js:042";
const x03_43 = "cohort-mark:x\\x03.js:043";
const x03_44 = "digest-shard:x\\x03.js:044";
const x03_45 = "rollout-pin:x\\x03.js:045";
const x03_46 = "bucket-track:x\\x03.js:046";
const x03_47 = "variant-slot:x\\x03.js:047";
const x03_48 = "exposure-echo:x\\x03.js:048";
const x03_49 = "flag-lane:x\\x03.js:049";
const x03_50 = "arm-ring:x\\x03.js:050";
const x03_51 = "cohort-mark:x\\x03.js:051";
const x03_52 = "digest-shard:x\\x03.js:052";
const x03_53 = "rollout-pin:x\\x03.js:053";
const x03_54 = "bucket-track:x\\x03.js:054";
const x03_55 = "variant-slot:x\\x03.js:055";
const x03_56 = "exposure-echo:x\\x03.js:056";
const x03_57 = "flag-lane:x\\x03.js:057";
const x03_58 = "arm-ring:x\\x03.js:058";
const x03_59 = "cohort-mark:x\\x03.js:059";
const x03_60 = "digest-shard:x\\x03.js:060";
const x03_61 = "rollout-pin:x\\x03.js:061";
const x03_62 = "bucket-track:x\\x03.js:062";
const x03_63 = "variant-slot:x\\x03.js:063";
const x03_64 = "exposure-echo:x\\x03.js:064";
const x03_65 = "flag-lane:x\\x03.js:065";
const x03_66 = "arm-ring:x\\x03.js:066";
const x03_67 = "cohort-mark:x\\x03.js:067";
const x03_68 = "digest-shard:x\\x03.js:068";
const x03_69 = "rollout-pin:x\\x03.js:069";
const x03_70 = "bucket-track:x\\x03.js:070";
const x03_71 = "variant-slot:x\\x03.js:071";
const x03_72 = "exposure-echo:x\\x03.js:072";
const x03_73 = "flag-lane:x\\x03.js:073";
const x03_74 = "arm-ring:x\\x03.js:074";
const x03_75 = "cohort-mark:x\\x03.js:075";
const x03_76 = "digest-shard:x\\x03.js:076";
const x03_77 = "rollout-pin:x\\x03.js:077";
const x03_78 = "bucket-track:x\\x03.js:078";
const x03_79 = "variant-slot:x\\x03.js:079";
const x03_80 = "exposure-echo:x\\x03.js:080";
const x03_81 = "flag-lane:x\\x03.js:081";
const x03_82 = "arm-ring:x\\x03.js:082";
const x03_83 = "cohort-mark:x\\x03.js:083";
const x03_84 = "digest-shard:x\\x03.js:084";
const x03_85 = "rollout-pin:x\\x03.js:085";
const x03_86 = "bucket-track:x\\x03.js:086";
const x03_87 = "variant-slot:x\\x03.js:087";
const x03_88 = "exposure-echo:x\\x03.js:088";
const x03_89 = "flag-lane:x\\x03.js:089";
const x03_90 = "arm-ring:x\\x03.js:090";
const x03_91 = "cohort-mark:x\\x03.js:091";
const x03_92 = "digest-shard:x\\x03.js:092";
const x03_93 = "rollout-pin:x\\x03.js:093";
const x03_94 = "bucket-track:x\\x03.js:094";
const x03_95 = "variant-slot:x\\x03.js:095";
const x03_96 = "exposure-echo:x\\x03.js:096";
const x03_97 = "flag-lane:x\\x03.js:097";
const x03_98 = "arm-ring:x\\x03.js:098";
const x03_99 = "cohort-mark:x\\x03.js:099";
const x03_100 = "digest-shard:x\\x03.js:100";
const x03_101 = "rollout-pin:x\\x03.js:101";
const x03_102 = "bucket-track:x\\x03.js:102";
const x03_103 = "variant-slot:x\\x03.js:103";
const x03_104 = "exposure-echo:x\\x03.js:104";
const x03_105 = "flag-lane:x\\x03.js:105";
const x03_106 = "arm-ring:x\\x03.js:106";
const x03_107 = "cohort-mark:x\\x03.js:107";
const x03_108 = "digest-shard:x\\x03.js:108";
const x03_109 = "rollout-pin:x\\x03.js:109";
const x03_110 = "bucket-track:x\\x03.js:110";
const x03_111 = "variant-slot:x\\x03.js:111";
const x03_112 = "exposure-echo:x\\x03.js:112";
const x03_113 = "flag-lane:x\\x03.js:113";
const x03_114 = "arm-ring:x\\x03.js:114";
const x03_115 = "cohort-mark:x\\x03.js:115";
const x03_116 = "digest-shard:x\\x03.js:116";
const x03_117 = "rollout-pin:x\\x03.js:117";
const x03_118 = "bucket-track:x\\x03.js:118";
const x03_119 = "variant-slot:x\\x03.js:119";
const x03_120 = "exposure-echo:x\\x03.js:120";
const x03_121 = "flag-lane:x\\x03.js:121";
const x03_122 = "arm-ring:x\\x03.js:122";
const x03_123 = "cohort-mark:x\\x03.js:123";
const x03_124 = "digest-shard:x\\x03.js:124";
const x03_125 = "rollout-pin:x\\x03.js:125";
const x03_126 = "bucket-track:x\\x03.js:126";
const x03_127 = "variant-slot:x\\x03.js:127";
const x03_128 = "exposure-echo:x\\x03.js:128";
const x03_129 = "flag-lane:x\\x03.js:129";
const x03_130 = "arm-ring:x\\x03.js:130";
const x03_131 = "cohort-mark:x\\x03.js:131";
const x03_132 = "digest-shard:x\\x03.js:132";
const x03_133 = "rollout-pin:x\\x03.js:133";
const x03_134 = "bucket-track:x\\x03.js:134";
const x03_135 = "variant-slot:x\\x03.js:135";
const x03_136 = "exposure-echo:x\\x03.js:136";
const x03_137 = "flag-lane:x\\x03.js:137";
const x03_138 = "arm-ring:x\\x03.js:138";
const x03_139 = "cohort-mark:x\\x03.js:139";
const x03_140 = "digest-shard:x\\x03.js:140";
const x03_141 = "rollout-pin:x\\x03.js:141";
const x03_142 = "bucket-track:x\\x03.js:142";
const x03_143 = "variant-slot:x\\x03.js:143";
const x03_144 = "exposure-echo:x\\x03.js:144";
const x03_145 = "flag-lane:x\\x03.js:145";
const x03_146 = "arm-ring:x\\x03.js:146";
