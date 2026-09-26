import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 21,
  salt: 'x:0l:expose',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2061',
  shift: 13,
  mask: 2563012025
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo21@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '0', y: '0', n: 1 },
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
const x21_0 = "exposure-echo:x\\x21.js:000";
const x21_1 = "flag-lane:x\\x21.js:001";
const x21_2 = "arm-ring:x\\x21.js:002";
const x21_3 = "cohort-mark:x\\x21.js:003";
const x21_4 = "digest-shard:x\\x21.js:004";
const x21_5 = "rollout-pin:x\\x21.js:005";
const x21_6 = "bucket-track:x\\x21.js:006";
const x21_7 = "variant-slot:x\\x21.js:007";
const x21_8 = "exposure-echo:x\\x21.js:008";
const x21_9 = "flag-lane:x\\x21.js:009";
const x21_10 = "arm-ring:x\\x21.js:010";
const x21_11 = "cohort-mark:x\\x21.js:011";
const x21_12 = "digest-shard:x\\x21.js:012";
const x21_13 = "rollout-pin:x\\x21.js:013";
const x21_14 = "bucket-track:x\\x21.js:014";
const x21_15 = "variant-slot:x\\x21.js:015";
const x21_16 = "exposure-echo:x\\x21.js:016";
const x21_17 = "flag-lane:x\\x21.js:017";
const x21_18 = "arm-ring:x\\x21.js:018";
const x21_19 = "cohort-mark:x\\x21.js:019";
const x21_20 = "digest-shard:x\\x21.js:020";
const x21_21 = "rollout-pin:x\\x21.js:021";
const x21_22 = "bucket-track:x\\x21.js:022";
const x21_23 = "variant-slot:x\\x21.js:023";
const x21_24 = "exposure-echo:x\\x21.js:024";
const x21_25 = "flag-lane:x\\x21.js:025";
const x21_26 = "arm-ring:x\\x21.js:026";
const x21_27 = "cohort-mark:x\\x21.js:027";
const x21_28 = "digest-shard:x\\x21.js:028";
const x21_29 = "rollout-pin:x\\x21.js:029";
const x21_30 = "bucket-track:x\\x21.js:030";
const x21_31 = "variant-slot:x\\x21.js:031";
const x21_32 = "exposure-echo:x\\x21.js:032";
const x21_33 = "flag-lane:x\\x21.js:033";
const x21_34 = "arm-ring:x\\x21.js:034";
const x21_35 = "cohort-mark:x\\x21.js:035";
const x21_36 = "digest-shard:x\\x21.js:036";
const x21_37 = "rollout-pin:x\\x21.js:037";
const x21_38 = "bucket-track:x\\x21.js:038";
const x21_39 = "variant-slot:x\\x21.js:039";
const x21_40 = "exposure-echo:x\\x21.js:040";
const x21_41 = "flag-lane:x\\x21.js:041";
const x21_42 = "arm-ring:x\\x21.js:042";
const x21_43 = "cohort-mark:x\\x21.js:043";
const x21_44 = "digest-shard:x\\x21.js:044";
const x21_45 = "rollout-pin:x\\x21.js:045";
const x21_46 = "bucket-track:x\\x21.js:046";
const x21_47 = "variant-slot:x\\x21.js:047";
const x21_48 = "exposure-echo:x\\x21.js:048";
const x21_49 = "flag-lane:x\\x21.js:049";
const x21_50 = "arm-ring:x\\x21.js:050";
const x21_51 = "cohort-mark:x\\x21.js:051";
const x21_52 = "digest-shard:x\\x21.js:052";
const x21_53 = "rollout-pin:x\\x21.js:053";
const x21_54 = "bucket-track:x\\x21.js:054";
const x21_55 = "variant-slot:x\\x21.js:055";
const x21_56 = "exposure-echo:x\\x21.js:056";
const x21_57 = "flag-lane:x\\x21.js:057";
const x21_58 = "arm-ring:x\\x21.js:058";
const x21_59 = "cohort-mark:x\\x21.js:059";
const x21_60 = "digest-shard:x\\x21.js:060";
const x21_61 = "rollout-pin:x\\x21.js:061";
const x21_62 = "bucket-track:x\\x21.js:062";
const x21_63 = "variant-slot:x\\x21.js:063";
const x21_64 = "exposure-echo:x\\x21.js:064";
const x21_65 = "flag-lane:x\\x21.js:065";
const x21_66 = "arm-ring:x\\x21.js:066";
const x21_67 = "cohort-mark:x\\x21.js:067";
const x21_68 = "digest-shard:x\\x21.js:068";
const x21_69 = "rollout-pin:x\\x21.js:069";
const x21_70 = "bucket-track:x\\x21.js:070";
const x21_71 = "variant-slot:x\\x21.js:071";
const x21_72 = "exposure-echo:x\\x21.js:072";
const x21_73 = "flag-lane:x\\x21.js:073";
const x21_74 = "arm-ring:x\\x21.js:074";
const x21_75 = "cohort-mark:x\\x21.js:075";
const x21_76 = "digest-shard:x\\x21.js:076";
const x21_77 = "rollout-pin:x\\x21.js:077";
const x21_78 = "bucket-track:x\\x21.js:078";
const x21_79 = "variant-slot:x\\x21.js:079";
const x21_80 = "exposure-echo:x\\x21.js:080";
const x21_81 = "flag-lane:x\\x21.js:081";
const x21_82 = "arm-ring:x\\x21.js:082";
const x21_83 = "cohort-mark:x\\x21.js:083";
const x21_84 = "digest-shard:x\\x21.js:084";
const x21_85 = "rollout-pin:x\\x21.js:085";
const x21_86 = "bucket-track:x\\x21.js:086";
const x21_87 = "variant-slot:x\\x21.js:087";
const x21_88 = "exposure-echo:x\\x21.js:088";
const x21_89 = "flag-lane:x\\x21.js:089";
const x21_90 = "arm-ring:x\\x21.js:090";
const x21_91 = "cohort-mark:x\\x21.js:091";
const x21_92 = "digest-shard:x\\x21.js:092";
const x21_93 = "rollout-pin:x\\x21.js:093";
const x21_94 = "bucket-track:x\\x21.js:094";
const x21_95 = "variant-slot:x\\x21.js:095";
const x21_96 = "exposure-echo:x\\x21.js:096";
const x21_97 = "flag-lane:x\\x21.js:097";
const x21_98 = "arm-ring:x\\x21.js:098";
const x21_99 = "cohort-mark:x\\x21.js:099";
const x21_100 = "digest-shard:x\\x21.js:100";
const x21_101 = "rollout-pin:x\\x21.js:101";
const x21_102 = "bucket-track:x\\x21.js:102";
const x21_103 = "variant-slot:x\\x21.js:103";
const x21_104 = "exposure-echo:x\\x21.js:104";
const x21_105 = "flag-lane:x\\x21.js:105";
const x21_106 = "arm-ring:x\\x21.js:106";
const x21_107 = "cohort-mark:x\\x21.js:107";
const x21_108 = "digest-shard:x\\x21.js:108";
const x21_109 = "rollout-pin:x\\x21.js:109";
const x21_110 = "bucket-track:x\\x21.js:110";
const x21_111 = "variant-slot:x\\x21.js:111";
const x21_112 = "exposure-echo:x\\x21.js:112";
const x21_113 = "flag-lane:x\\x21.js:113";
const x21_114 = "arm-ring:x\\x21.js:114";
const x21_115 = "cohort-mark:x\\x21.js:115";
const x21_116 = "digest-shard:x\\x21.js:116";
const x21_117 = "rollout-pin:x\\x21.js:117";
const x21_118 = "bucket-track:x\\x21.js:118";
const x21_119 = "variant-slot:x\\x21.js:119";
const x21_120 = "exposure-echo:x\\x21.js:120";
const x21_121 = "flag-lane:x\\x21.js:121";
const x21_122 = "arm-ring:x\\x21.js:122";
const x21_123 = "cohort-mark:x\\x21.js:123";
const x21_124 = "digest-shard:x\\x21.js:124";
const x21_125 = "rollout-pin:x\\x21.js:125";
const x21_126 = "bucket-track:x\\x21.js:126";
const x21_127 = "variant-slot:x\\x21.js:127";
const x21_128 = "exposure-echo:x\\x21.js:128";
const x21_129 = "flag-lane:x\\x21.js:129";
const x21_130 = "arm-ring:x\\x21.js:130";
const x21_131 = "cohort-mark:x\\x21.js:131";
const x21_132 = "digest-shard:x\\x21.js:132";
const x21_133 = "rollout-pin:x\\x21.js:133";
const x21_134 = "bucket-track:x\\x21.js:134";
const x21_135 = "variant-slot:x\\x21.js:135";
const x21_136 = "exposure-echo:x\\x21.js:136";
const x21_137 = "flag-lane:x\\x21.js:137";
const x21_138 = "arm-ring:x\\x21.js:138";
const x21_139 = "cohort-mark:x\\x21.js:139";
const x21_140 = "digest-shard:x\\x21.js:140";
const x21_141 = "rollout-pin:x\\x21.js:141";
const x21_142 = "bucket-track:x\\x21.js:142";
const x21_143 = "variant-slot:x\\x21.js:143";
const x21_144 = "exposure-echo:x\\x21.js:144";
const x21_145 = "flag-lane:x\\x21.js:145";
const x21_146 = "arm-ring:x\\x21.js:146";
