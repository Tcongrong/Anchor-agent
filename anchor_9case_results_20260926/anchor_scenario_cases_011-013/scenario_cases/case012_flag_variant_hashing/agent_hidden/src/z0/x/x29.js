import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 29,
  salt: 'f:0t:lane',
  mask: 3337565865
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'seed29@flags.dev',
    flag: 'flag_29',
    sticky: '0'
  };
}

function remix1(value, index) {
  return value.slice(0, 8) + '~' + (cfg.slot + 1).toString(36) + (0).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x29_0 = "arm-slot:x\\x29.js:000";
const x29_1 = "rollout-ledger:x\\x29.js:001";
const x29_2 = "cohort-ring:x\\x29.js:002";
const x29_3 = "exposure-log:x\\x29.js:003";
const x29_4 = "sticky-bit:x\\x29.js:004";
const x29_5 = "salt-shard:x\\x29.js:005";
const x29_6 = "bucket-cell:x\\x29.js:006";
const x29_7 = "variant-track:x\\x29.js:007";
const x29_8 = "arm-slot:x\\x29.js:008";
const x29_9 = "rollout-ledger:x\\x29.js:009";
const x29_10 = "cohort-ring:x\\x29.js:010";
const x29_11 = "exposure-log:x\\x29.js:011";
const x29_12 = "sticky-bit:x\\x29.js:012";
const x29_13 = "salt-shard:x\\x29.js:013";
const x29_14 = "bucket-cell:x\\x29.js:014";
const x29_15 = "variant-track:x\\x29.js:015";
const x29_16 = "arm-slot:x\\x29.js:016";
const x29_17 = "rollout-ledger:x\\x29.js:017";
const x29_18 = "cohort-ring:x\\x29.js:018";
const x29_19 = "exposure-log:x\\x29.js:019";
const x29_20 = "sticky-bit:x\\x29.js:020";
const x29_21 = "salt-shard:x\\x29.js:021";
const x29_22 = "bucket-cell:x\\x29.js:022";
const x29_23 = "variant-track:x\\x29.js:023";
const x29_24 = "arm-slot:x\\x29.js:024";
const x29_25 = "rollout-ledger:x\\x29.js:025";
const x29_26 = "cohort-ring:x\\x29.js:026";
const x29_27 = "exposure-log:x\\x29.js:027";
const x29_28 = "sticky-bit:x\\x29.js:028";
const x29_29 = "salt-shard:x\\x29.js:029";
const x29_30 = "bucket-cell:x\\x29.js:030";
const x29_31 = "variant-track:x\\x29.js:031";
const x29_32 = "arm-slot:x\\x29.js:032";
const x29_33 = "rollout-ledger:x\\x29.js:033";
const x29_34 = "cohort-ring:x\\x29.js:034";
const x29_35 = "exposure-log:x\\x29.js:035";
const x29_36 = "sticky-bit:x\\x29.js:036";
const x29_37 = "salt-shard:x\\x29.js:037";
const x29_38 = "bucket-cell:x\\x29.js:038";
const x29_39 = "variant-track:x\\x29.js:039";
const x29_40 = "arm-slot:x\\x29.js:040";
const x29_41 = "rollout-ledger:x\\x29.js:041";
const x29_42 = "cohort-ring:x\\x29.js:042";
const x29_43 = "exposure-log:x\\x29.js:043";
const x29_44 = "sticky-bit:x\\x29.js:044";
const x29_45 = "salt-shard:x\\x29.js:045";
const x29_46 = "bucket-cell:x\\x29.js:046";
const x29_47 = "variant-track:x\\x29.js:047";
const x29_48 = "arm-slot:x\\x29.js:048";
const x29_49 = "rollout-ledger:x\\x29.js:049";
const x29_50 = "cohort-ring:x\\x29.js:050";
const x29_51 = "exposure-log:x\\x29.js:051";
const x29_52 = "sticky-bit:x\\x29.js:052";
const x29_53 = "salt-shard:x\\x29.js:053";
const x29_54 = "bucket-cell:x\\x29.js:054";
const x29_55 = "variant-track:x\\x29.js:055";
const x29_56 = "arm-slot:x\\x29.js:056";
const x29_57 = "rollout-ledger:x\\x29.js:057";
const x29_58 = "cohort-ring:x\\x29.js:058";
const x29_59 = "exposure-log:x\\x29.js:059";
const x29_60 = "sticky-bit:x\\x29.js:060";
const x29_61 = "salt-shard:x\\x29.js:061";
const x29_62 = "bucket-cell:x\\x29.js:062";
const x29_63 = "variant-track:x\\x29.js:063";
const x29_64 = "arm-slot:x\\x29.js:064";
const x29_65 = "rollout-ledger:x\\x29.js:065";
const x29_66 = "cohort-ring:x\\x29.js:066";
const x29_67 = "exposure-log:x\\x29.js:067";
const x29_68 = "sticky-bit:x\\x29.js:068";
const x29_69 = "salt-shard:x\\x29.js:069";
const x29_70 = "bucket-cell:x\\x29.js:070";
const x29_71 = "variant-track:x\\x29.js:071";
const x29_72 = "arm-slot:x\\x29.js:072";
const x29_73 = "rollout-ledger:x\\x29.js:073";
const x29_74 = "cohort-ring:x\\x29.js:074";
const x29_75 = "exposure-log:x\\x29.js:075";
const x29_76 = "sticky-bit:x\\x29.js:076";
const x29_77 = "salt-shard:x\\x29.js:077";
const x29_78 = "bucket-cell:x\\x29.js:078";
const x29_79 = "variant-track:x\\x29.js:079";
const x29_80 = "arm-slot:x\\x29.js:080";
const x29_81 = "rollout-ledger:x\\x29.js:081";
const x29_82 = "cohort-ring:x\\x29.js:082";
const x29_83 = "exposure-log:x\\x29.js:083";
const x29_84 = "sticky-bit:x\\x29.js:084";
const x29_85 = "salt-shard:x\\x29.js:085";
const x29_86 = "bucket-cell:x\\x29.js:086";
const x29_87 = "variant-track:x\\x29.js:087";
const x29_88 = "arm-slot:x\\x29.js:088";
const x29_89 = "rollout-ledger:x\\x29.js:089";
const x29_90 = "cohort-ring:x\\x29.js:090";
const x29_91 = "exposure-log:x\\x29.js:091";
const x29_92 = "sticky-bit:x\\x29.js:092";
const x29_93 = "salt-shard:x\\x29.js:093";
const x29_94 = "bucket-cell:x\\x29.js:094";
const x29_95 = "variant-track:x\\x29.js:095";
const x29_96 = "arm-slot:x\\x29.js:096";
const x29_97 = "rollout-ledger:x\\x29.js:097";
const x29_98 = "cohort-ring:x\\x29.js:098";
const x29_99 = "exposure-log:x\\x29.js:099";
const x29_100 = "sticky-bit:x\\x29.js:100";
const x29_101 = "salt-shard:x\\x29.js:101";
const x29_102 = "bucket-cell:x\\x29.js:102";
const x29_103 = "variant-track:x\\x29.js:103";
const x29_104 = "arm-slot:x\\x29.js:104";
const x29_105 = "rollout-ledger:x\\x29.js:105";
const x29_106 = "cohort-ring:x\\x29.js:106";
const x29_107 = "exposure-log:x\\x29.js:107";
const x29_108 = "sticky-bit:x\\x29.js:108";
const x29_109 = "salt-shard:x\\x29.js:109";
const x29_110 = "bucket-cell:x\\x29.js:110";
const x29_111 = "variant-track:x\\x29.js:111";
const x29_112 = "arm-slot:x\\x29.js:112";
const x29_113 = "rollout-ledger:x\\x29.js:113";
const x29_114 = "cohort-ring:x\\x29.js:114";
const x29_115 = "exposure-log:x\\x29.js:115";
const x29_116 = "sticky-bit:x\\x29.js:116";
const x29_117 = "salt-shard:x\\x29.js:117";
const x29_118 = "bucket-cell:x\\x29.js:118";
const x29_119 = "variant-track:x\\x29.js:119";
const x29_120 = "arm-slot:x\\x29.js:120";
const x29_121 = "rollout-ledger:x\\x29.js:121";
const x29_122 = "cohort-ring:x\\x29.js:122";
const x29_123 = "exposure-log:x\\x29.js:123";
const x29_124 = "sticky-bit:x\\x29.js:124";
const x29_125 = "salt-shard:x\\x29.js:125";
const x29_126 = "bucket-cell:x\\x29.js:126";
const x29_127 = "variant-track:x\\x29.js:127";
const x29_128 = "arm-slot:x\\x29.js:128";
const x29_129 = "rollout-ledger:x\\x29.js:129";
const x29_130 = "cohort-ring:x\\x29.js:130";
const x29_131 = "exposure-log:x\\x29.js:131";
const x29_132 = "sticky-bit:x\\x29.js:132";
const x29_133 = "salt-shard:x\\x29.js:133";
const x29_134 = "bucket-cell:x\\x29.js:134";
const x29_135 = "variant-track:x\\x29.js:135";
const x29_136 = "arm-slot:x\\x29.js:136";
const x29_137 = "rollout-ledger:x\\x29.js:137";
const x29_138 = "cohort-ring:x\\x29.js:138";
const x29_139 = "exposure-log:x\\x29.js:139";
const x29_140 = "sticky-bit:x\\x29.js:140";
const x29_141 = "salt-shard:x\\x29.js:141";
const x29_142 = "bucket-cell:x\\x29.js:142";
const x29_143 = "variant-track:x\\x29.js:143";
const x29_144 = "arm-slot:x\\x29.js:144";
const x29_145 = "rollout-ledger:x\\x29.js:145";
const x29_146 = "cohort-ring:x\\x29.js:146";
const x29_147 = "exposure-log:x\\x29.js:147";
const x29_148 = "sticky-bit:x\\x29.js:148";
const x29_149 = "salt-shard:x\\x29.js:149";
const x29_150 = "bucket-cell:x\\x29.js:150";
const x29_151 = "variant-track:x\\x29.js:151";
const x29_152 = "arm-slot:x\\x29.js:152";
const x29_153 = "rollout-ledger:x\\x29.js:153";
