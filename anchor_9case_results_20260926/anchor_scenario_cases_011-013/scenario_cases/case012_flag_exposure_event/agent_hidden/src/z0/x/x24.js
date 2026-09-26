import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 24,
  salt: 'x:0o:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 5,
  mask: 1936384716
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo24@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
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
const x24_0 = "exposure-echo:x\\x24.js:000";
const x24_1 = "flag-lane:x\\x24.js:001";
const x24_2 = "arm-ring:x\\x24.js:002";
const x24_3 = "cohort-mark:x\\x24.js:003";
const x24_4 = "digest-shard:x\\x24.js:004";
const x24_5 = "rollout-pin:x\\x24.js:005";
const x24_6 = "bucket-track:x\\x24.js:006";
const x24_7 = "variant-slot:x\\x24.js:007";
const x24_8 = "exposure-echo:x\\x24.js:008";
const x24_9 = "flag-lane:x\\x24.js:009";
const x24_10 = "arm-ring:x\\x24.js:010";
const x24_11 = "cohort-mark:x\\x24.js:011";
const x24_12 = "digest-shard:x\\x24.js:012";
const x24_13 = "rollout-pin:x\\x24.js:013";
const x24_14 = "bucket-track:x\\x24.js:014";
const x24_15 = "variant-slot:x\\x24.js:015";
const x24_16 = "exposure-echo:x\\x24.js:016";
const x24_17 = "flag-lane:x\\x24.js:017";
const x24_18 = "arm-ring:x\\x24.js:018";
const x24_19 = "cohort-mark:x\\x24.js:019";
const x24_20 = "digest-shard:x\\x24.js:020";
const x24_21 = "rollout-pin:x\\x24.js:021";
const x24_22 = "bucket-track:x\\x24.js:022";
const x24_23 = "variant-slot:x\\x24.js:023";
const x24_24 = "exposure-echo:x\\x24.js:024";
const x24_25 = "flag-lane:x\\x24.js:025";
const x24_26 = "arm-ring:x\\x24.js:026";
const x24_27 = "cohort-mark:x\\x24.js:027";
const x24_28 = "digest-shard:x\\x24.js:028";
const x24_29 = "rollout-pin:x\\x24.js:029";
const x24_30 = "bucket-track:x\\x24.js:030";
const x24_31 = "variant-slot:x\\x24.js:031";
const x24_32 = "exposure-echo:x\\x24.js:032";
const x24_33 = "flag-lane:x\\x24.js:033";
const x24_34 = "arm-ring:x\\x24.js:034";
const x24_35 = "cohort-mark:x\\x24.js:035";
const x24_36 = "digest-shard:x\\x24.js:036";
const x24_37 = "rollout-pin:x\\x24.js:037";
const x24_38 = "bucket-track:x\\x24.js:038";
const x24_39 = "variant-slot:x\\x24.js:039";
const x24_40 = "exposure-echo:x\\x24.js:040";
const x24_41 = "flag-lane:x\\x24.js:041";
const x24_42 = "arm-ring:x\\x24.js:042";
const x24_43 = "cohort-mark:x\\x24.js:043";
const x24_44 = "digest-shard:x\\x24.js:044";
const x24_45 = "rollout-pin:x\\x24.js:045";
const x24_46 = "bucket-track:x\\x24.js:046";
const x24_47 = "variant-slot:x\\x24.js:047";
const x24_48 = "exposure-echo:x\\x24.js:048";
const x24_49 = "flag-lane:x\\x24.js:049";
const x24_50 = "arm-ring:x\\x24.js:050";
const x24_51 = "cohort-mark:x\\x24.js:051";
const x24_52 = "digest-shard:x\\x24.js:052";
const x24_53 = "rollout-pin:x\\x24.js:053";
const x24_54 = "bucket-track:x\\x24.js:054";
const x24_55 = "variant-slot:x\\x24.js:055";
const x24_56 = "exposure-echo:x\\x24.js:056";
const x24_57 = "flag-lane:x\\x24.js:057";
const x24_58 = "arm-ring:x\\x24.js:058";
const x24_59 = "cohort-mark:x\\x24.js:059";
const x24_60 = "digest-shard:x\\x24.js:060";
const x24_61 = "rollout-pin:x\\x24.js:061";
const x24_62 = "bucket-track:x\\x24.js:062";
const x24_63 = "variant-slot:x\\x24.js:063";
const x24_64 = "exposure-echo:x\\x24.js:064";
const x24_65 = "flag-lane:x\\x24.js:065";
const x24_66 = "arm-ring:x\\x24.js:066";
const x24_67 = "cohort-mark:x\\x24.js:067";
const x24_68 = "digest-shard:x\\x24.js:068";
const x24_69 = "rollout-pin:x\\x24.js:069";
const x24_70 = "bucket-track:x\\x24.js:070";
const x24_71 = "variant-slot:x\\x24.js:071";
const x24_72 = "exposure-echo:x\\x24.js:072";
const x24_73 = "flag-lane:x\\x24.js:073";
const x24_74 = "arm-ring:x\\x24.js:074";
const x24_75 = "cohort-mark:x\\x24.js:075";
const x24_76 = "digest-shard:x\\x24.js:076";
const x24_77 = "rollout-pin:x\\x24.js:077";
const x24_78 = "bucket-track:x\\x24.js:078";
const x24_79 = "variant-slot:x\\x24.js:079";
const x24_80 = "exposure-echo:x\\x24.js:080";
const x24_81 = "flag-lane:x\\x24.js:081";
const x24_82 = "arm-ring:x\\x24.js:082";
const x24_83 = "cohort-mark:x\\x24.js:083";
const x24_84 = "digest-shard:x\\x24.js:084";
const x24_85 = "rollout-pin:x\\x24.js:085";
const x24_86 = "bucket-track:x\\x24.js:086";
const x24_87 = "variant-slot:x\\x24.js:087";
const x24_88 = "exposure-echo:x\\x24.js:088";
const x24_89 = "flag-lane:x\\x24.js:089";
const x24_90 = "arm-ring:x\\x24.js:090";
const x24_91 = "cohort-mark:x\\x24.js:091";
const x24_92 = "digest-shard:x\\x24.js:092";
const x24_93 = "rollout-pin:x\\x24.js:093";
const x24_94 = "bucket-track:x\\x24.js:094";
const x24_95 = "variant-slot:x\\x24.js:095";
const x24_96 = "exposure-echo:x\\x24.js:096";
const x24_97 = "flag-lane:x\\x24.js:097";
const x24_98 = "arm-ring:x\\x24.js:098";
const x24_99 = "cohort-mark:x\\x24.js:099";
const x24_100 = "digest-shard:x\\x24.js:100";
const x24_101 = "rollout-pin:x\\x24.js:101";
const x24_102 = "bucket-track:x\\x24.js:102";
const x24_103 = "variant-slot:x\\x24.js:103";
const x24_104 = "exposure-echo:x\\x24.js:104";
const x24_105 = "flag-lane:x\\x24.js:105";
const x24_106 = "arm-ring:x\\x24.js:106";
const x24_107 = "cohort-mark:x\\x24.js:107";
const x24_108 = "digest-shard:x\\x24.js:108";
const x24_109 = "rollout-pin:x\\x24.js:109";
const x24_110 = "bucket-track:x\\x24.js:110";
const x24_111 = "variant-slot:x\\x24.js:111";
const x24_112 = "exposure-echo:x\\x24.js:112";
const x24_113 = "flag-lane:x\\x24.js:113";
const x24_114 = "arm-ring:x\\x24.js:114";
const x24_115 = "cohort-mark:x\\x24.js:115";
const x24_116 = "digest-shard:x\\x24.js:116";
const x24_117 = "rollout-pin:x\\x24.js:117";
const x24_118 = "bucket-track:x\\x24.js:118";
const x24_119 = "variant-slot:x\\x24.js:119";
const x24_120 = "exposure-echo:x\\x24.js:120";
const x24_121 = "flag-lane:x\\x24.js:121";
const x24_122 = "arm-ring:x\\x24.js:122";
const x24_123 = "cohort-mark:x\\x24.js:123";
const x24_124 = "digest-shard:x\\x24.js:124";
const x24_125 = "rollout-pin:x\\x24.js:125";
const x24_126 = "bucket-track:x\\x24.js:126";
const x24_127 = "variant-slot:x\\x24.js:127";
const x24_128 = "exposure-echo:x\\x24.js:128";
const x24_129 = "flag-lane:x\\x24.js:129";
const x24_130 = "arm-ring:x\\x24.js:130";
const x24_131 = "cohort-mark:x\\x24.js:131";
const x24_132 = "digest-shard:x\\x24.js:132";
const x24_133 = "rollout-pin:x\\x24.js:133";
const x24_134 = "bucket-track:x\\x24.js:134";
const x24_135 = "variant-slot:x\\x24.js:135";
const x24_136 = "exposure-echo:x\\x24.js:136";
const x24_137 = "flag-lane:x\\x24.js:137";
const x24_138 = "arm-ring:x\\x24.js:138";
const x24_139 = "cohort-mark:x\\x24.js:139";
const x24_140 = "digest-shard:x\\x24.js:140";
const x24_141 = "rollout-pin:x\\x24.js:141";
const x24_142 = "bucket-track:x\\x24.js:142";
const x24_143 = "variant-slot:x\\x24.js:143";
const x24_144 = "exposure-echo:x\\x24.js:144";
const x24_145 = "flag-lane:x\\x24.js:145";
const x24_146 = "arm-ring:x\\x24.js:146";
