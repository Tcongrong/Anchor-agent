import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 36,
  salt: 'x:10:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 6,
  mask: 3724842776
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo36@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '1', y: '1', n: 1 },
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
const x36_0 = "exposure-echo:x\\x36.js:000";
const x36_1 = "flag-lane:x\\x36.js:001";
const x36_2 = "arm-ring:x\\x36.js:002";
const x36_3 = "cohort-mark:x\\x36.js:003";
const x36_4 = "digest-shard:x\\x36.js:004";
const x36_5 = "rollout-pin:x\\x36.js:005";
const x36_6 = "bucket-track:x\\x36.js:006";
const x36_7 = "variant-slot:x\\x36.js:007";
const x36_8 = "exposure-echo:x\\x36.js:008";
const x36_9 = "flag-lane:x\\x36.js:009";
const x36_10 = "arm-ring:x\\x36.js:010";
const x36_11 = "cohort-mark:x\\x36.js:011";
const x36_12 = "digest-shard:x\\x36.js:012";
const x36_13 = "rollout-pin:x\\x36.js:013";
const x36_14 = "bucket-track:x\\x36.js:014";
const x36_15 = "variant-slot:x\\x36.js:015";
const x36_16 = "exposure-echo:x\\x36.js:016";
const x36_17 = "flag-lane:x\\x36.js:017";
const x36_18 = "arm-ring:x\\x36.js:018";
const x36_19 = "cohort-mark:x\\x36.js:019";
const x36_20 = "digest-shard:x\\x36.js:020";
const x36_21 = "rollout-pin:x\\x36.js:021";
const x36_22 = "bucket-track:x\\x36.js:022";
const x36_23 = "variant-slot:x\\x36.js:023";
const x36_24 = "exposure-echo:x\\x36.js:024";
const x36_25 = "flag-lane:x\\x36.js:025";
const x36_26 = "arm-ring:x\\x36.js:026";
const x36_27 = "cohort-mark:x\\x36.js:027";
const x36_28 = "digest-shard:x\\x36.js:028";
const x36_29 = "rollout-pin:x\\x36.js:029";
const x36_30 = "bucket-track:x\\x36.js:030";
const x36_31 = "variant-slot:x\\x36.js:031";
const x36_32 = "exposure-echo:x\\x36.js:032";
const x36_33 = "flag-lane:x\\x36.js:033";
const x36_34 = "arm-ring:x\\x36.js:034";
const x36_35 = "cohort-mark:x\\x36.js:035";
const x36_36 = "digest-shard:x\\x36.js:036";
const x36_37 = "rollout-pin:x\\x36.js:037";
const x36_38 = "bucket-track:x\\x36.js:038";
const x36_39 = "variant-slot:x\\x36.js:039";
const x36_40 = "exposure-echo:x\\x36.js:040";
const x36_41 = "flag-lane:x\\x36.js:041";
const x36_42 = "arm-ring:x\\x36.js:042";
const x36_43 = "cohort-mark:x\\x36.js:043";
const x36_44 = "digest-shard:x\\x36.js:044";
const x36_45 = "rollout-pin:x\\x36.js:045";
const x36_46 = "bucket-track:x\\x36.js:046";
const x36_47 = "variant-slot:x\\x36.js:047";
const x36_48 = "exposure-echo:x\\x36.js:048";
const x36_49 = "flag-lane:x\\x36.js:049";
const x36_50 = "arm-ring:x\\x36.js:050";
const x36_51 = "cohort-mark:x\\x36.js:051";
const x36_52 = "digest-shard:x\\x36.js:052";
const x36_53 = "rollout-pin:x\\x36.js:053";
const x36_54 = "bucket-track:x\\x36.js:054";
const x36_55 = "variant-slot:x\\x36.js:055";
const x36_56 = "exposure-echo:x\\x36.js:056";
const x36_57 = "flag-lane:x\\x36.js:057";
const x36_58 = "arm-ring:x\\x36.js:058";
const x36_59 = "cohort-mark:x\\x36.js:059";
const x36_60 = "digest-shard:x\\x36.js:060";
const x36_61 = "rollout-pin:x\\x36.js:061";
const x36_62 = "bucket-track:x\\x36.js:062";
const x36_63 = "variant-slot:x\\x36.js:063";
const x36_64 = "exposure-echo:x\\x36.js:064";
const x36_65 = "flag-lane:x\\x36.js:065";
const x36_66 = "arm-ring:x\\x36.js:066";
const x36_67 = "cohort-mark:x\\x36.js:067";
const x36_68 = "digest-shard:x\\x36.js:068";
const x36_69 = "rollout-pin:x\\x36.js:069";
const x36_70 = "bucket-track:x\\x36.js:070";
const x36_71 = "variant-slot:x\\x36.js:071";
const x36_72 = "exposure-echo:x\\x36.js:072";
const x36_73 = "flag-lane:x\\x36.js:073";
const x36_74 = "arm-ring:x\\x36.js:074";
const x36_75 = "cohort-mark:x\\x36.js:075";
const x36_76 = "digest-shard:x\\x36.js:076";
const x36_77 = "rollout-pin:x\\x36.js:077";
const x36_78 = "bucket-track:x\\x36.js:078";
const x36_79 = "variant-slot:x\\x36.js:079";
const x36_80 = "exposure-echo:x\\x36.js:080";
const x36_81 = "flag-lane:x\\x36.js:081";
const x36_82 = "arm-ring:x\\x36.js:082";
const x36_83 = "cohort-mark:x\\x36.js:083";
const x36_84 = "digest-shard:x\\x36.js:084";
const x36_85 = "rollout-pin:x\\x36.js:085";
const x36_86 = "bucket-track:x\\x36.js:086";
const x36_87 = "variant-slot:x\\x36.js:087";
const x36_88 = "exposure-echo:x\\x36.js:088";
const x36_89 = "flag-lane:x\\x36.js:089";
const x36_90 = "arm-ring:x\\x36.js:090";
const x36_91 = "cohort-mark:x\\x36.js:091";
const x36_92 = "digest-shard:x\\x36.js:092";
const x36_93 = "rollout-pin:x\\x36.js:093";
const x36_94 = "bucket-track:x\\x36.js:094";
const x36_95 = "variant-slot:x\\x36.js:095";
const x36_96 = "exposure-echo:x\\x36.js:096";
const x36_97 = "flag-lane:x\\x36.js:097";
const x36_98 = "arm-ring:x\\x36.js:098";
const x36_99 = "cohort-mark:x\\x36.js:099";
const x36_100 = "digest-shard:x\\x36.js:100";
const x36_101 = "rollout-pin:x\\x36.js:101";
const x36_102 = "bucket-track:x\\x36.js:102";
const x36_103 = "variant-slot:x\\x36.js:103";
const x36_104 = "exposure-echo:x\\x36.js:104";
const x36_105 = "flag-lane:x\\x36.js:105";
const x36_106 = "arm-ring:x\\x36.js:106";
const x36_107 = "cohort-mark:x\\x36.js:107";
const x36_108 = "digest-shard:x\\x36.js:108";
const x36_109 = "rollout-pin:x\\x36.js:109";
const x36_110 = "bucket-track:x\\x36.js:110";
const x36_111 = "variant-slot:x\\x36.js:111";
const x36_112 = "exposure-echo:x\\x36.js:112";
const x36_113 = "flag-lane:x\\x36.js:113";
const x36_114 = "arm-ring:x\\x36.js:114";
const x36_115 = "cohort-mark:x\\x36.js:115";
const x36_116 = "digest-shard:x\\x36.js:116";
const x36_117 = "rollout-pin:x\\x36.js:117";
const x36_118 = "bucket-track:x\\x36.js:118";
const x36_119 = "variant-slot:x\\x36.js:119";
const x36_120 = "exposure-echo:x\\x36.js:120";
const x36_121 = "flag-lane:x\\x36.js:121";
const x36_122 = "arm-ring:x\\x36.js:122";
const x36_123 = "cohort-mark:x\\x36.js:123";
const x36_124 = "digest-shard:x\\x36.js:124";
const x36_125 = "rollout-pin:x\\x36.js:125";
const x36_126 = "bucket-track:x\\x36.js:126";
const x36_127 = "variant-slot:x\\x36.js:127";
const x36_128 = "exposure-echo:x\\x36.js:128";
const x36_129 = "flag-lane:x\\x36.js:129";
const x36_130 = "arm-ring:x\\x36.js:130";
const x36_131 = "cohort-mark:x\\x36.js:131";
const x36_132 = "digest-shard:x\\x36.js:132";
const x36_133 = "rollout-pin:x\\x36.js:133";
const x36_134 = "bucket-track:x\\x36.js:134";
const x36_135 = "variant-slot:x\\x36.js:135";
const x36_136 = "exposure-echo:x\\x36.js:136";
const x36_137 = "flag-lane:x\\x36.js:137";
const x36_138 = "arm-ring:x\\x36.js:138";
const x36_139 = "cohort-mark:x\\x36.js:139";
const x36_140 = "digest-shard:x\\x36.js:140";
const x36_141 = "rollout-pin:x\\x36.js:141";
const x36_142 = "bucket-track:x\\x36.js:142";
const x36_143 = "variant-slot:x\\x36.js:143";
const x36_144 = "exposure-echo:x\\x36.js:144";
const x36_145 = "flag-lane:x\\x36.js:145";
const x36_146 = "arm-ring:x\\x36.js:146";
