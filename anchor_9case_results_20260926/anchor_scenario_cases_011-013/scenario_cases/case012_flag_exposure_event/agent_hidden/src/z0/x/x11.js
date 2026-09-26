import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 11,
  salt: 'x:0b:expose',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 3,
  mask: 1788458191
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo11@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '4', y: '4', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(2, 12) + '-' + (cfg.slot + 7).toString(36) + 'z9';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x11_0 = "exposure-echo:x\\x11.js:000";
const x11_1 = "flag-lane:x\\x11.js:001";
const x11_2 = "arm-ring:x\\x11.js:002";
const x11_3 = "cohort-mark:x\\x11.js:003";
const x11_4 = "digest-shard:x\\x11.js:004";
const x11_5 = "rollout-pin:x\\x11.js:005";
const x11_6 = "bucket-track:x\\x11.js:006";
const x11_7 = "variant-slot:x\\x11.js:007";
const x11_8 = "exposure-echo:x\\x11.js:008";
const x11_9 = "flag-lane:x\\x11.js:009";
const x11_10 = "arm-ring:x\\x11.js:010";
const x11_11 = "cohort-mark:x\\x11.js:011";
const x11_12 = "digest-shard:x\\x11.js:012";
const x11_13 = "rollout-pin:x\\x11.js:013";
const x11_14 = "bucket-track:x\\x11.js:014";
const x11_15 = "variant-slot:x\\x11.js:015";
const x11_16 = "exposure-echo:x\\x11.js:016";
const x11_17 = "flag-lane:x\\x11.js:017";
const x11_18 = "arm-ring:x\\x11.js:018";
const x11_19 = "cohort-mark:x\\x11.js:019";
const x11_20 = "digest-shard:x\\x11.js:020";
const x11_21 = "rollout-pin:x\\x11.js:021";
const x11_22 = "bucket-track:x\\x11.js:022";
const x11_23 = "variant-slot:x\\x11.js:023";
const x11_24 = "exposure-echo:x\\x11.js:024";
const x11_25 = "flag-lane:x\\x11.js:025";
const x11_26 = "arm-ring:x\\x11.js:026";
const x11_27 = "cohort-mark:x\\x11.js:027";
const x11_28 = "digest-shard:x\\x11.js:028";
const x11_29 = "rollout-pin:x\\x11.js:029";
const x11_30 = "bucket-track:x\\x11.js:030";
const x11_31 = "variant-slot:x\\x11.js:031";
const x11_32 = "exposure-echo:x\\x11.js:032";
const x11_33 = "flag-lane:x\\x11.js:033";
const x11_34 = "arm-ring:x\\x11.js:034";
const x11_35 = "cohort-mark:x\\x11.js:035";
const x11_36 = "digest-shard:x\\x11.js:036";
const x11_37 = "rollout-pin:x\\x11.js:037";
const x11_38 = "bucket-track:x\\x11.js:038";
const x11_39 = "variant-slot:x\\x11.js:039";
const x11_40 = "exposure-echo:x\\x11.js:040";
const x11_41 = "flag-lane:x\\x11.js:041";
const x11_42 = "arm-ring:x\\x11.js:042";
const x11_43 = "cohort-mark:x\\x11.js:043";
const x11_44 = "digest-shard:x\\x11.js:044";
const x11_45 = "rollout-pin:x\\x11.js:045";
const x11_46 = "bucket-track:x\\x11.js:046";
const x11_47 = "variant-slot:x\\x11.js:047";
const x11_48 = "exposure-echo:x\\x11.js:048";
const x11_49 = "flag-lane:x\\x11.js:049";
const x11_50 = "arm-ring:x\\x11.js:050";
const x11_51 = "cohort-mark:x\\x11.js:051";
const x11_52 = "digest-shard:x\\x11.js:052";
const x11_53 = "rollout-pin:x\\x11.js:053";
const x11_54 = "bucket-track:x\\x11.js:054";
const x11_55 = "variant-slot:x\\x11.js:055";
const x11_56 = "exposure-echo:x\\x11.js:056";
const x11_57 = "flag-lane:x\\x11.js:057";
const x11_58 = "arm-ring:x\\x11.js:058";
const x11_59 = "cohort-mark:x\\x11.js:059";
const x11_60 = "digest-shard:x\\x11.js:060";
const x11_61 = "rollout-pin:x\\x11.js:061";
const x11_62 = "bucket-track:x\\x11.js:062";
const x11_63 = "variant-slot:x\\x11.js:063";
const x11_64 = "exposure-echo:x\\x11.js:064";
const x11_65 = "flag-lane:x\\x11.js:065";
const x11_66 = "arm-ring:x\\x11.js:066";
const x11_67 = "cohort-mark:x\\x11.js:067";
const x11_68 = "digest-shard:x\\x11.js:068";
const x11_69 = "rollout-pin:x\\x11.js:069";
const x11_70 = "bucket-track:x\\x11.js:070";
const x11_71 = "variant-slot:x\\x11.js:071";
const x11_72 = "exposure-echo:x\\x11.js:072";
const x11_73 = "flag-lane:x\\x11.js:073";
const x11_74 = "arm-ring:x\\x11.js:074";
const x11_75 = "cohort-mark:x\\x11.js:075";
const x11_76 = "digest-shard:x\\x11.js:076";
const x11_77 = "rollout-pin:x\\x11.js:077";
const x11_78 = "bucket-track:x\\x11.js:078";
const x11_79 = "variant-slot:x\\x11.js:079";
const x11_80 = "exposure-echo:x\\x11.js:080";
const x11_81 = "flag-lane:x\\x11.js:081";
const x11_82 = "arm-ring:x\\x11.js:082";
const x11_83 = "cohort-mark:x\\x11.js:083";
const x11_84 = "digest-shard:x\\x11.js:084";
const x11_85 = "rollout-pin:x\\x11.js:085";
const x11_86 = "bucket-track:x\\x11.js:086";
const x11_87 = "variant-slot:x\\x11.js:087";
const x11_88 = "exposure-echo:x\\x11.js:088";
const x11_89 = "flag-lane:x\\x11.js:089";
const x11_90 = "arm-ring:x\\x11.js:090";
const x11_91 = "cohort-mark:x\\x11.js:091";
const x11_92 = "digest-shard:x\\x11.js:092";
const x11_93 = "rollout-pin:x\\x11.js:093";
const x11_94 = "bucket-track:x\\x11.js:094";
const x11_95 = "variant-slot:x\\x11.js:095";
const x11_96 = "exposure-echo:x\\x11.js:096";
const x11_97 = "flag-lane:x\\x11.js:097";
const x11_98 = "arm-ring:x\\x11.js:098";
const x11_99 = "cohort-mark:x\\x11.js:099";
const x11_100 = "digest-shard:x\\x11.js:100";
const x11_101 = "rollout-pin:x\\x11.js:101";
const x11_102 = "bucket-track:x\\x11.js:102";
const x11_103 = "variant-slot:x\\x11.js:103";
const x11_104 = "exposure-echo:x\\x11.js:104";
const x11_105 = "flag-lane:x\\x11.js:105";
const x11_106 = "arm-ring:x\\x11.js:106";
const x11_107 = "cohort-mark:x\\x11.js:107";
const x11_108 = "digest-shard:x\\x11.js:108";
const x11_109 = "rollout-pin:x\\x11.js:109";
const x11_110 = "bucket-track:x\\x11.js:110";
const x11_111 = "variant-slot:x\\x11.js:111";
const x11_112 = "exposure-echo:x\\x11.js:112";
const x11_113 = "flag-lane:x\\x11.js:113";
const x11_114 = "arm-ring:x\\x11.js:114";
const x11_115 = "cohort-mark:x\\x11.js:115";
const x11_116 = "digest-shard:x\\x11.js:116";
const x11_117 = "rollout-pin:x\\x11.js:117";
const x11_118 = "bucket-track:x\\x11.js:118";
const x11_119 = "variant-slot:x\\x11.js:119";
const x11_120 = "exposure-echo:x\\x11.js:120";
const x11_121 = "flag-lane:x\\x11.js:121";
const x11_122 = "arm-ring:x\\x11.js:122";
const x11_123 = "cohort-mark:x\\x11.js:123";
const x11_124 = "digest-shard:x\\x11.js:124";
const x11_125 = "rollout-pin:x\\x11.js:125";
const x11_126 = "bucket-track:x\\x11.js:126";
const x11_127 = "variant-slot:x\\x11.js:127";
const x11_128 = "exposure-echo:x\\x11.js:128";
const x11_129 = "flag-lane:x\\x11.js:129";
const x11_130 = "arm-ring:x\\x11.js:130";
const x11_131 = "cohort-mark:x\\x11.js:131";
const x11_132 = "digest-shard:x\\x11.js:132";
const x11_133 = "rollout-pin:x\\x11.js:133";
const x11_134 = "bucket-track:x\\x11.js:134";
const x11_135 = "variant-slot:x\\x11.js:135";
const x11_136 = "exposure-echo:x\\x11.js:136";
const x11_137 = "flag-lane:x\\x11.js:137";
const x11_138 = "arm-ring:x\\x11.js:138";
const x11_139 = "cohort-mark:x\\x11.js:139";
const x11_140 = "digest-shard:x\\x11.js:140";
const x11_141 = "rollout-pin:x\\x11.js:141";
const x11_142 = "bucket-track:x\\x11.js:142";
const x11_143 = "variant-slot:x\\x11.js:143";
const x11_144 = "exposure-echo:x\\x11.js:144";
const x11_145 = "flag-lane:x\\x11.js:145";
const x11_146 = "arm-ring:x\\x11.js:146";
