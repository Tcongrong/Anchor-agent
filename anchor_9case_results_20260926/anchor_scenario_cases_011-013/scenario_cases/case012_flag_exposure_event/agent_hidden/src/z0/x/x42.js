import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 42,
  salt: 'x:16:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 12,
  mask: 2471588158
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo42@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
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
const x42_0 = "exposure-echo:x\\x42.js:000";
const x42_1 = "flag-lane:x\\x42.js:001";
const x42_2 = "arm-ring:x\\x42.js:002";
const x42_3 = "cohort-mark:x\\x42.js:003";
const x42_4 = "digest-shard:x\\x42.js:004";
const x42_5 = "rollout-pin:x\\x42.js:005";
const x42_6 = "bucket-track:x\\x42.js:006";
const x42_7 = "variant-slot:x\\x42.js:007";
const x42_8 = "exposure-echo:x\\x42.js:008";
const x42_9 = "flag-lane:x\\x42.js:009";
const x42_10 = "arm-ring:x\\x42.js:010";
const x42_11 = "cohort-mark:x\\x42.js:011";
const x42_12 = "digest-shard:x\\x42.js:012";
const x42_13 = "rollout-pin:x\\x42.js:013";
const x42_14 = "bucket-track:x\\x42.js:014";
const x42_15 = "variant-slot:x\\x42.js:015";
const x42_16 = "exposure-echo:x\\x42.js:016";
const x42_17 = "flag-lane:x\\x42.js:017";
const x42_18 = "arm-ring:x\\x42.js:018";
const x42_19 = "cohort-mark:x\\x42.js:019";
const x42_20 = "digest-shard:x\\x42.js:020";
const x42_21 = "rollout-pin:x\\x42.js:021";
const x42_22 = "bucket-track:x\\x42.js:022";
const x42_23 = "variant-slot:x\\x42.js:023";
const x42_24 = "exposure-echo:x\\x42.js:024";
const x42_25 = "flag-lane:x\\x42.js:025";
const x42_26 = "arm-ring:x\\x42.js:026";
const x42_27 = "cohort-mark:x\\x42.js:027";
const x42_28 = "digest-shard:x\\x42.js:028";
const x42_29 = "rollout-pin:x\\x42.js:029";
const x42_30 = "bucket-track:x\\x42.js:030";
const x42_31 = "variant-slot:x\\x42.js:031";
const x42_32 = "exposure-echo:x\\x42.js:032";
const x42_33 = "flag-lane:x\\x42.js:033";
const x42_34 = "arm-ring:x\\x42.js:034";
const x42_35 = "cohort-mark:x\\x42.js:035";
const x42_36 = "digest-shard:x\\x42.js:036";
const x42_37 = "rollout-pin:x\\x42.js:037";
const x42_38 = "bucket-track:x\\x42.js:038";
const x42_39 = "variant-slot:x\\x42.js:039";
const x42_40 = "exposure-echo:x\\x42.js:040";
const x42_41 = "flag-lane:x\\x42.js:041";
const x42_42 = "arm-ring:x\\x42.js:042";
const x42_43 = "cohort-mark:x\\x42.js:043";
const x42_44 = "digest-shard:x\\x42.js:044";
const x42_45 = "rollout-pin:x\\x42.js:045";
const x42_46 = "bucket-track:x\\x42.js:046";
const x42_47 = "variant-slot:x\\x42.js:047";
const x42_48 = "exposure-echo:x\\x42.js:048";
const x42_49 = "flag-lane:x\\x42.js:049";
const x42_50 = "arm-ring:x\\x42.js:050";
const x42_51 = "cohort-mark:x\\x42.js:051";
const x42_52 = "digest-shard:x\\x42.js:052";
const x42_53 = "rollout-pin:x\\x42.js:053";
const x42_54 = "bucket-track:x\\x42.js:054";
const x42_55 = "variant-slot:x\\x42.js:055";
const x42_56 = "exposure-echo:x\\x42.js:056";
const x42_57 = "flag-lane:x\\x42.js:057";
const x42_58 = "arm-ring:x\\x42.js:058";
const x42_59 = "cohort-mark:x\\x42.js:059";
const x42_60 = "digest-shard:x\\x42.js:060";
const x42_61 = "rollout-pin:x\\x42.js:061";
const x42_62 = "bucket-track:x\\x42.js:062";
const x42_63 = "variant-slot:x\\x42.js:063";
const x42_64 = "exposure-echo:x\\x42.js:064";
const x42_65 = "flag-lane:x\\x42.js:065";
const x42_66 = "arm-ring:x\\x42.js:066";
const x42_67 = "cohort-mark:x\\x42.js:067";
const x42_68 = "digest-shard:x\\x42.js:068";
const x42_69 = "rollout-pin:x\\x42.js:069";
const x42_70 = "bucket-track:x\\x42.js:070";
const x42_71 = "variant-slot:x\\x42.js:071";
const x42_72 = "exposure-echo:x\\x42.js:072";
const x42_73 = "flag-lane:x\\x42.js:073";
const x42_74 = "arm-ring:x\\x42.js:074";
const x42_75 = "cohort-mark:x\\x42.js:075";
const x42_76 = "digest-shard:x\\x42.js:076";
const x42_77 = "rollout-pin:x\\x42.js:077";
const x42_78 = "bucket-track:x\\x42.js:078";
const x42_79 = "variant-slot:x\\x42.js:079";
const x42_80 = "exposure-echo:x\\x42.js:080";
const x42_81 = "flag-lane:x\\x42.js:081";
const x42_82 = "arm-ring:x\\x42.js:082";
const x42_83 = "cohort-mark:x\\x42.js:083";
const x42_84 = "digest-shard:x\\x42.js:084";
const x42_85 = "rollout-pin:x\\x42.js:085";
const x42_86 = "bucket-track:x\\x42.js:086";
const x42_87 = "variant-slot:x\\x42.js:087";
const x42_88 = "exposure-echo:x\\x42.js:088";
const x42_89 = "flag-lane:x\\x42.js:089";
const x42_90 = "arm-ring:x\\x42.js:090";
const x42_91 = "cohort-mark:x\\x42.js:091";
const x42_92 = "digest-shard:x\\x42.js:092";
const x42_93 = "rollout-pin:x\\x42.js:093";
const x42_94 = "bucket-track:x\\x42.js:094";
const x42_95 = "variant-slot:x\\x42.js:095";
const x42_96 = "exposure-echo:x\\x42.js:096";
const x42_97 = "flag-lane:x\\x42.js:097";
const x42_98 = "arm-ring:x\\x42.js:098";
const x42_99 = "cohort-mark:x\\x42.js:099";
const x42_100 = "digest-shard:x\\x42.js:100";
const x42_101 = "rollout-pin:x\\x42.js:101";
const x42_102 = "bucket-track:x\\x42.js:102";
const x42_103 = "variant-slot:x\\x42.js:103";
const x42_104 = "exposure-echo:x\\x42.js:104";
const x42_105 = "flag-lane:x\\x42.js:105";
const x42_106 = "arm-ring:x\\x42.js:106";
const x42_107 = "cohort-mark:x\\x42.js:107";
const x42_108 = "digest-shard:x\\x42.js:108";
const x42_109 = "rollout-pin:x\\x42.js:109";
const x42_110 = "bucket-track:x\\x42.js:110";
const x42_111 = "variant-slot:x\\x42.js:111";
const x42_112 = "exposure-echo:x\\x42.js:112";
const x42_113 = "flag-lane:x\\x42.js:113";
const x42_114 = "arm-ring:x\\x42.js:114";
const x42_115 = "cohort-mark:x\\x42.js:115";
const x42_116 = "digest-shard:x\\x42.js:116";
const x42_117 = "rollout-pin:x\\x42.js:117";
const x42_118 = "bucket-track:x\\x42.js:118";
const x42_119 = "variant-slot:x\\x42.js:119";
const x42_120 = "exposure-echo:x\\x42.js:120";
const x42_121 = "flag-lane:x\\x42.js:121";
const x42_122 = "arm-ring:x\\x42.js:122";
const x42_123 = "cohort-mark:x\\x42.js:123";
const x42_124 = "digest-shard:x\\x42.js:124";
const x42_125 = "rollout-pin:x\\x42.js:125";
const x42_126 = "bucket-track:x\\x42.js:126";
const x42_127 = "variant-slot:x\\x42.js:127";
const x42_128 = "exposure-echo:x\\x42.js:128";
const x42_129 = "flag-lane:x\\x42.js:129";
const x42_130 = "arm-ring:x\\x42.js:130";
const x42_131 = "cohort-mark:x\\x42.js:131";
const x42_132 = "digest-shard:x\\x42.js:132";
const x42_133 = "rollout-pin:x\\x42.js:133";
const x42_134 = "bucket-track:x\\x42.js:134";
const x42_135 = "variant-slot:x\\x42.js:135";
const x42_136 = "exposure-echo:x\\x42.js:136";
const x42_137 = "flag-lane:x\\x42.js:137";
const x42_138 = "arm-ring:x\\x42.js:138";
const x42_139 = "cohort-mark:x\\x42.js:139";
const x42_140 = "digest-shard:x\\x42.js:140";
const x42_141 = "rollout-pin:x\\x42.js:141";
const x42_142 = "bucket-track:x\\x42.js:142";
const x42_143 = "variant-slot:x\\x42.js:143";
const x42_144 = "exposure-echo:x\\x42.js:144";
const x42_145 = "flag-lane:x\\x42.js:145";
const x42_146 = "arm-ring:x\\x42.js:146";
