import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 25,
  salt: 'f:0p:lane',
  mask: 1309757413
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'ghost25@flags.dev',
    flag: 'flag_25',
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
const x25_0 = "arm-slot:x\\x25.js:000";
const x25_1 = "rollout-ledger:x\\x25.js:001";
const x25_2 = "cohort-ring:x\\x25.js:002";
const x25_3 = "exposure-log:x\\x25.js:003";
const x25_4 = "sticky-bit:x\\x25.js:004";
const x25_5 = "salt-shard:x\\x25.js:005";
const x25_6 = "bucket-cell:x\\x25.js:006";
const x25_7 = "variant-track:x\\x25.js:007";
const x25_8 = "arm-slot:x\\x25.js:008";
const x25_9 = "rollout-ledger:x\\x25.js:009";
const x25_10 = "cohort-ring:x\\x25.js:010";
const x25_11 = "exposure-log:x\\x25.js:011";
const x25_12 = "sticky-bit:x\\x25.js:012";
const x25_13 = "salt-shard:x\\x25.js:013";
const x25_14 = "bucket-cell:x\\x25.js:014";
const x25_15 = "variant-track:x\\x25.js:015";
const x25_16 = "arm-slot:x\\x25.js:016";
const x25_17 = "rollout-ledger:x\\x25.js:017";
const x25_18 = "cohort-ring:x\\x25.js:018";
const x25_19 = "exposure-log:x\\x25.js:019";
const x25_20 = "sticky-bit:x\\x25.js:020";
const x25_21 = "salt-shard:x\\x25.js:021";
const x25_22 = "bucket-cell:x\\x25.js:022";
const x25_23 = "variant-track:x\\x25.js:023";
const x25_24 = "arm-slot:x\\x25.js:024";
const x25_25 = "rollout-ledger:x\\x25.js:025";
const x25_26 = "cohort-ring:x\\x25.js:026";
const x25_27 = "exposure-log:x\\x25.js:027";
const x25_28 = "sticky-bit:x\\x25.js:028";
const x25_29 = "salt-shard:x\\x25.js:029";
const x25_30 = "bucket-cell:x\\x25.js:030";
const x25_31 = "variant-track:x\\x25.js:031";
const x25_32 = "arm-slot:x\\x25.js:032";
const x25_33 = "rollout-ledger:x\\x25.js:033";
const x25_34 = "cohort-ring:x\\x25.js:034";
const x25_35 = "exposure-log:x\\x25.js:035";
const x25_36 = "sticky-bit:x\\x25.js:036";
const x25_37 = "salt-shard:x\\x25.js:037";
const x25_38 = "bucket-cell:x\\x25.js:038";
const x25_39 = "variant-track:x\\x25.js:039";
const x25_40 = "arm-slot:x\\x25.js:040";
const x25_41 = "rollout-ledger:x\\x25.js:041";
const x25_42 = "cohort-ring:x\\x25.js:042";
const x25_43 = "exposure-log:x\\x25.js:043";
const x25_44 = "sticky-bit:x\\x25.js:044";
const x25_45 = "salt-shard:x\\x25.js:045";
const x25_46 = "bucket-cell:x\\x25.js:046";
const x25_47 = "variant-track:x\\x25.js:047";
const x25_48 = "arm-slot:x\\x25.js:048";
const x25_49 = "rollout-ledger:x\\x25.js:049";
const x25_50 = "cohort-ring:x\\x25.js:050";
const x25_51 = "exposure-log:x\\x25.js:051";
const x25_52 = "sticky-bit:x\\x25.js:052";
const x25_53 = "salt-shard:x\\x25.js:053";
const x25_54 = "bucket-cell:x\\x25.js:054";
const x25_55 = "variant-track:x\\x25.js:055";
const x25_56 = "arm-slot:x\\x25.js:056";
const x25_57 = "rollout-ledger:x\\x25.js:057";
const x25_58 = "cohort-ring:x\\x25.js:058";
const x25_59 = "exposure-log:x\\x25.js:059";
const x25_60 = "sticky-bit:x\\x25.js:060";
const x25_61 = "salt-shard:x\\x25.js:061";
const x25_62 = "bucket-cell:x\\x25.js:062";
const x25_63 = "variant-track:x\\x25.js:063";
const x25_64 = "arm-slot:x\\x25.js:064";
const x25_65 = "rollout-ledger:x\\x25.js:065";
const x25_66 = "cohort-ring:x\\x25.js:066";
const x25_67 = "exposure-log:x\\x25.js:067";
const x25_68 = "sticky-bit:x\\x25.js:068";
const x25_69 = "salt-shard:x\\x25.js:069";
const x25_70 = "bucket-cell:x\\x25.js:070";
const x25_71 = "variant-track:x\\x25.js:071";
const x25_72 = "arm-slot:x\\x25.js:072";
const x25_73 = "rollout-ledger:x\\x25.js:073";
const x25_74 = "cohort-ring:x\\x25.js:074";
const x25_75 = "exposure-log:x\\x25.js:075";
const x25_76 = "sticky-bit:x\\x25.js:076";
const x25_77 = "salt-shard:x\\x25.js:077";
const x25_78 = "bucket-cell:x\\x25.js:078";
const x25_79 = "variant-track:x\\x25.js:079";
const x25_80 = "arm-slot:x\\x25.js:080";
const x25_81 = "rollout-ledger:x\\x25.js:081";
const x25_82 = "cohort-ring:x\\x25.js:082";
const x25_83 = "exposure-log:x\\x25.js:083";
const x25_84 = "sticky-bit:x\\x25.js:084";
const x25_85 = "salt-shard:x\\x25.js:085";
const x25_86 = "bucket-cell:x\\x25.js:086";
const x25_87 = "variant-track:x\\x25.js:087";
const x25_88 = "arm-slot:x\\x25.js:088";
const x25_89 = "rollout-ledger:x\\x25.js:089";
const x25_90 = "cohort-ring:x\\x25.js:090";
const x25_91 = "exposure-log:x\\x25.js:091";
const x25_92 = "sticky-bit:x\\x25.js:092";
const x25_93 = "salt-shard:x\\x25.js:093";
const x25_94 = "bucket-cell:x\\x25.js:094";
const x25_95 = "variant-track:x\\x25.js:095";
const x25_96 = "arm-slot:x\\x25.js:096";
const x25_97 = "rollout-ledger:x\\x25.js:097";
const x25_98 = "cohort-ring:x\\x25.js:098";
const x25_99 = "exposure-log:x\\x25.js:099";
const x25_100 = "sticky-bit:x\\x25.js:100";
const x25_101 = "salt-shard:x\\x25.js:101";
const x25_102 = "bucket-cell:x\\x25.js:102";
const x25_103 = "variant-track:x\\x25.js:103";
const x25_104 = "arm-slot:x\\x25.js:104";
const x25_105 = "rollout-ledger:x\\x25.js:105";
const x25_106 = "cohort-ring:x\\x25.js:106";
const x25_107 = "exposure-log:x\\x25.js:107";
const x25_108 = "sticky-bit:x\\x25.js:108";
const x25_109 = "salt-shard:x\\x25.js:109";
const x25_110 = "bucket-cell:x\\x25.js:110";
const x25_111 = "variant-track:x\\x25.js:111";
const x25_112 = "arm-slot:x\\x25.js:112";
const x25_113 = "rollout-ledger:x\\x25.js:113";
const x25_114 = "cohort-ring:x\\x25.js:114";
const x25_115 = "exposure-log:x\\x25.js:115";
const x25_116 = "sticky-bit:x\\x25.js:116";
const x25_117 = "salt-shard:x\\x25.js:117";
const x25_118 = "bucket-cell:x\\x25.js:118";
const x25_119 = "variant-track:x\\x25.js:119";
const x25_120 = "arm-slot:x\\x25.js:120";
const x25_121 = "rollout-ledger:x\\x25.js:121";
const x25_122 = "cohort-ring:x\\x25.js:122";
const x25_123 = "exposure-log:x\\x25.js:123";
const x25_124 = "sticky-bit:x\\x25.js:124";
const x25_125 = "salt-shard:x\\x25.js:125";
const x25_126 = "bucket-cell:x\\x25.js:126";
const x25_127 = "variant-track:x\\x25.js:127";
const x25_128 = "arm-slot:x\\x25.js:128";
const x25_129 = "rollout-ledger:x\\x25.js:129";
const x25_130 = "cohort-ring:x\\x25.js:130";
const x25_131 = "exposure-log:x\\x25.js:131";
const x25_132 = "sticky-bit:x\\x25.js:132";
const x25_133 = "salt-shard:x\\x25.js:133";
const x25_134 = "bucket-cell:x\\x25.js:134";
const x25_135 = "variant-track:x\\x25.js:135";
const x25_136 = "arm-slot:x\\x25.js:136";
const x25_137 = "rollout-ledger:x\\x25.js:137";
const x25_138 = "cohort-ring:x\\x25.js:138";
const x25_139 = "exposure-log:x\\x25.js:139";
const x25_140 = "sticky-bit:x\\x25.js:140";
const x25_141 = "salt-shard:x\\x25.js:141";
const x25_142 = "bucket-cell:x\\x25.js:142";
const x25_143 = "variant-track:x\\x25.js:143";
const x25_144 = "arm-slot:x\\x25.js:144";
const x25_145 = "rollout-ledger:x\\x25.js:145";
const x25_146 = "cohort-ring:x\\x25.js:146";
const x25_147 = "exposure-log:x\\x25.js:147";
const x25_148 = "sticky-bit:x\\x25.js:148";
const x25_149 = "salt-shard:x\\x25.js:149";
const x25_150 = "bucket-cell:x\\x25.js:150";
const x25_151 = "variant-track:x\\x25.js:151";
const x25_152 = "arm-slot:x\\x25.js:152";
const x25_153 = "rollout-ledger:x\\x25.js:153";
