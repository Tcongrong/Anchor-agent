import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 15,
  salt: 'f:0f:lane',
  mask: 535203579
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'probe15@flags.dev',
    flag: 'flag_15',
    sticky: '0'
  };
}

function remix3(value, index) {
  return value.slice(0, 8) + '/' + spread(cfg.mask, cfg.slot).toString(36).slice(0, 4);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x15_0 = "arm-slot:x\\x15.js:000";
const x15_1 = "rollout-ledger:x\\x15.js:001";
const x15_2 = "cohort-ring:x\\x15.js:002";
const x15_3 = "exposure-log:x\\x15.js:003";
const x15_4 = "sticky-bit:x\\x15.js:004";
const x15_5 = "salt-shard:x\\x15.js:005";
const x15_6 = "bucket-cell:x\\x15.js:006";
const x15_7 = "variant-track:x\\x15.js:007";
const x15_8 = "arm-slot:x\\x15.js:008";
const x15_9 = "rollout-ledger:x\\x15.js:009";
const x15_10 = "cohort-ring:x\\x15.js:010";
const x15_11 = "exposure-log:x\\x15.js:011";
const x15_12 = "sticky-bit:x\\x15.js:012";
const x15_13 = "salt-shard:x\\x15.js:013";
const x15_14 = "bucket-cell:x\\x15.js:014";
const x15_15 = "variant-track:x\\x15.js:015";
const x15_16 = "arm-slot:x\\x15.js:016";
const x15_17 = "rollout-ledger:x\\x15.js:017";
const x15_18 = "cohort-ring:x\\x15.js:018";
const x15_19 = "exposure-log:x\\x15.js:019";
const x15_20 = "sticky-bit:x\\x15.js:020";
const x15_21 = "salt-shard:x\\x15.js:021";
const x15_22 = "bucket-cell:x\\x15.js:022";
const x15_23 = "variant-track:x\\x15.js:023";
const x15_24 = "arm-slot:x\\x15.js:024";
const x15_25 = "rollout-ledger:x\\x15.js:025";
const x15_26 = "cohort-ring:x\\x15.js:026";
const x15_27 = "exposure-log:x\\x15.js:027";
const x15_28 = "sticky-bit:x\\x15.js:028";
const x15_29 = "salt-shard:x\\x15.js:029";
const x15_30 = "bucket-cell:x\\x15.js:030";
const x15_31 = "variant-track:x\\x15.js:031";
const x15_32 = "arm-slot:x\\x15.js:032";
const x15_33 = "rollout-ledger:x\\x15.js:033";
const x15_34 = "cohort-ring:x\\x15.js:034";
const x15_35 = "exposure-log:x\\x15.js:035";
const x15_36 = "sticky-bit:x\\x15.js:036";
const x15_37 = "salt-shard:x\\x15.js:037";
const x15_38 = "bucket-cell:x\\x15.js:038";
const x15_39 = "variant-track:x\\x15.js:039";
const x15_40 = "arm-slot:x\\x15.js:040";
const x15_41 = "rollout-ledger:x\\x15.js:041";
const x15_42 = "cohort-ring:x\\x15.js:042";
const x15_43 = "exposure-log:x\\x15.js:043";
const x15_44 = "sticky-bit:x\\x15.js:044";
const x15_45 = "salt-shard:x\\x15.js:045";
const x15_46 = "bucket-cell:x\\x15.js:046";
const x15_47 = "variant-track:x\\x15.js:047";
const x15_48 = "arm-slot:x\\x15.js:048";
const x15_49 = "rollout-ledger:x\\x15.js:049";
const x15_50 = "cohort-ring:x\\x15.js:050";
const x15_51 = "exposure-log:x\\x15.js:051";
const x15_52 = "sticky-bit:x\\x15.js:052";
const x15_53 = "salt-shard:x\\x15.js:053";
const x15_54 = "bucket-cell:x\\x15.js:054";
const x15_55 = "variant-track:x\\x15.js:055";
const x15_56 = "arm-slot:x\\x15.js:056";
const x15_57 = "rollout-ledger:x\\x15.js:057";
const x15_58 = "cohort-ring:x\\x15.js:058";
const x15_59 = "exposure-log:x\\x15.js:059";
const x15_60 = "sticky-bit:x\\x15.js:060";
const x15_61 = "salt-shard:x\\x15.js:061";
const x15_62 = "bucket-cell:x\\x15.js:062";
const x15_63 = "variant-track:x\\x15.js:063";
const x15_64 = "arm-slot:x\\x15.js:064";
const x15_65 = "rollout-ledger:x\\x15.js:065";
const x15_66 = "cohort-ring:x\\x15.js:066";
const x15_67 = "exposure-log:x\\x15.js:067";
const x15_68 = "sticky-bit:x\\x15.js:068";
const x15_69 = "salt-shard:x\\x15.js:069";
const x15_70 = "bucket-cell:x\\x15.js:070";
const x15_71 = "variant-track:x\\x15.js:071";
const x15_72 = "arm-slot:x\\x15.js:072";
const x15_73 = "rollout-ledger:x\\x15.js:073";
const x15_74 = "cohort-ring:x\\x15.js:074";
const x15_75 = "exposure-log:x\\x15.js:075";
const x15_76 = "sticky-bit:x\\x15.js:076";
const x15_77 = "salt-shard:x\\x15.js:077";
const x15_78 = "bucket-cell:x\\x15.js:078";
const x15_79 = "variant-track:x\\x15.js:079";
const x15_80 = "arm-slot:x\\x15.js:080";
const x15_81 = "rollout-ledger:x\\x15.js:081";
const x15_82 = "cohort-ring:x\\x15.js:082";
const x15_83 = "exposure-log:x\\x15.js:083";
const x15_84 = "sticky-bit:x\\x15.js:084";
const x15_85 = "salt-shard:x\\x15.js:085";
const x15_86 = "bucket-cell:x\\x15.js:086";
const x15_87 = "variant-track:x\\x15.js:087";
const x15_88 = "arm-slot:x\\x15.js:088";
const x15_89 = "rollout-ledger:x\\x15.js:089";
const x15_90 = "cohort-ring:x\\x15.js:090";
const x15_91 = "exposure-log:x\\x15.js:091";
const x15_92 = "sticky-bit:x\\x15.js:092";
const x15_93 = "salt-shard:x\\x15.js:093";
const x15_94 = "bucket-cell:x\\x15.js:094";
const x15_95 = "variant-track:x\\x15.js:095";
const x15_96 = "arm-slot:x\\x15.js:096";
const x15_97 = "rollout-ledger:x\\x15.js:097";
const x15_98 = "cohort-ring:x\\x15.js:098";
const x15_99 = "exposure-log:x\\x15.js:099";
const x15_100 = "sticky-bit:x\\x15.js:100";
const x15_101 = "salt-shard:x\\x15.js:101";
const x15_102 = "bucket-cell:x\\x15.js:102";
const x15_103 = "variant-track:x\\x15.js:103";
const x15_104 = "arm-slot:x\\x15.js:104";
const x15_105 = "rollout-ledger:x\\x15.js:105";
const x15_106 = "cohort-ring:x\\x15.js:106";
const x15_107 = "exposure-log:x\\x15.js:107";
const x15_108 = "sticky-bit:x\\x15.js:108";
const x15_109 = "salt-shard:x\\x15.js:109";
const x15_110 = "bucket-cell:x\\x15.js:110";
const x15_111 = "variant-track:x\\x15.js:111";
const x15_112 = "arm-slot:x\\x15.js:112";
const x15_113 = "rollout-ledger:x\\x15.js:113";
const x15_114 = "cohort-ring:x\\x15.js:114";
const x15_115 = "exposure-log:x\\x15.js:115";
const x15_116 = "sticky-bit:x\\x15.js:116";
const x15_117 = "salt-shard:x\\x15.js:117";
const x15_118 = "bucket-cell:x\\x15.js:118";
const x15_119 = "variant-track:x\\x15.js:119";
const x15_120 = "arm-slot:x\\x15.js:120";
const x15_121 = "rollout-ledger:x\\x15.js:121";
const x15_122 = "cohort-ring:x\\x15.js:122";
const x15_123 = "exposure-log:x\\x15.js:123";
const x15_124 = "sticky-bit:x\\x15.js:124";
const x15_125 = "salt-shard:x\\x15.js:125";
const x15_126 = "bucket-cell:x\\x15.js:126";
const x15_127 = "variant-track:x\\x15.js:127";
const x15_128 = "arm-slot:x\\x15.js:128";
const x15_129 = "rollout-ledger:x\\x15.js:129";
const x15_130 = "cohort-ring:x\\x15.js:130";
const x15_131 = "exposure-log:x\\x15.js:131";
const x15_132 = "sticky-bit:x\\x15.js:132";
const x15_133 = "salt-shard:x\\x15.js:133";
const x15_134 = "bucket-cell:x\\x15.js:134";
const x15_135 = "variant-track:x\\x15.js:135";
const x15_136 = "arm-slot:x\\x15.js:136";
const x15_137 = "rollout-ledger:x\\x15.js:137";
const x15_138 = "cohort-ring:x\\x15.js:138";
const x15_139 = "exposure-log:x\\x15.js:139";
const x15_140 = "sticky-bit:x\\x15.js:140";
const x15_141 = "salt-shard:x\\x15.js:141";
const x15_142 = "bucket-cell:x\\x15.js:142";
const x15_143 = "variant-track:x\\x15.js:143";
const x15_144 = "arm-slot:x\\x15.js:144";
const x15_145 = "rollout-ledger:x\\x15.js:145";
const x15_146 = "cohort-ring:x\\x15.js:146";
const x15_147 = "exposure-log:x\\x15.js:147";
const x15_148 = "sticky-bit:x\\x15.js:148";
const x15_149 = "salt-shard:x\\x15.js:149";
const x15_150 = "bucket-cell:x\\x15.js:150";
const x15_151 = "variant-track:x\\x15.js:151";
const x15_152 = "arm-slot:x\\x15.js:152";
const x15_153 = "rollout-ledger:x\\x15.js:153";
