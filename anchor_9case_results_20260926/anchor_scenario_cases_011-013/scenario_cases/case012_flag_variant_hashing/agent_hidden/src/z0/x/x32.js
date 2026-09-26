import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 32,
  salt: 'f:0w:lane',
  mask: 2710938556
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'seed32@flags.dev',
    flag: 'flag_32',
    sticky: '1'
  };
}

function remix0(value, index) {
  return value.slice(8) + '-' + (cfg.slot + 3).toString(36) + '00';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x32_0 = "arm-slot:x\\x32.js:000";
const x32_1 = "rollout-ledger:x\\x32.js:001";
const x32_2 = "cohort-ring:x\\x32.js:002";
const x32_3 = "exposure-log:x\\x32.js:003";
const x32_4 = "sticky-bit:x\\x32.js:004";
const x32_5 = "salt-shard:x\\x32.js:005";
const x32_6 = "bucket-cell:x\\x32.js:006";
const x32_7 = "variant-track:x\\x32.js:007";
const x32_8 = "arm-slot:x\\x32.js:008";
const x32_9 = "rollout-ledger:x\\x32.js:009";
const x32_10 = "cohort-ring:x\\x32.js:010";
const x32_11 = "exposure-log:x\\x32.js:011";
const x32_12 = "sticky-bit:x\\x32.js:012";
const x32_13 = "salt-shard:x\\x32.js:013";
const x32_14 = "bucket-cell:x\\x32.js:014";
const x32_15 = "variant-track:x\\x32.js:015";
const x32_16 = "arm-slot:x\\x32.js:016";
const x32_17 = "rollout-ledger:x\\x32.js:017";
const x32_18 = "cohort-ring:x\\x32.js:018";
const x32_19 = "exposure-log:x\\x32.js:019";
const x32_20 = "sticky-bit:x\\x32.js:020";
const x32_21 = "salt-shard:x\\x32.js:021";
const x32_22 = "bucket-cell:x\\x32.js:022";
const x32_23 = "variant-track:x\\x32.js:023";
const x32_24 = "arm-slot:x\\x32.js:024";
const x32_25 = "rollout-ledger:x\\x32.js:025";
const x32_26 = "cohort-ring:x\\x32.js:026";
const x32_27 = "exposure-log:x\\x32.js:027";
const x32_28 = "sticky-bit:x\\x32.js:028";
const x32_29 = "salt-shard:x\\x32.js:029";
const x32_30 = "bucket-cell:x\\x32.js:030";
const x32_31 = "variant-track:x\\x32.js:031";
const x32_32 = "arm-slot:x\\x32.js:032";
const x32_33 = "rollout-ledger:x\\x32.js:033";
const x32_34 = "cohort-ring:x\\x32.js:034";
const x32_35 = "exposure-log:x\\x32.js:035";
const x32_36 = "sticky-bit:x\\x32.js:036";
const x32_37 = "salt-shard:x\\x32.js:037";
const x32_38 = "bucket-cell:x\\x32.js:038";
const x32_39 = "variant-track:x\\x32.js:039";
const x32_40 = "arm-slot:x\\x32.js:040";
const x32_41 = "rollout-ledger:x\\x32.js:041";
const x32_42 = "cohort-ring:x\\x32.js:042";
const x32_43 = "exposure-log:x\\x32.js:043";
const x32_44 = "sticky-bit:x\\x32.js:044";
const x32_45 = "salt-shard:x\\x32.js:045";
const x32_46 = "bucket-cell:x\\x32.js:046";
const x32_47 = "variant-track:x\\x32.js:047";
const x32_48 = "arm-slot:x\\x32.js:048";
const x32_49 = "rollout-ledger:x\\x32.js:049";
const x32_50 = "cohort-ring:x\\x32.js:050";
const x32_51 = "exposure-log:x\\x32.js:051";
const x32_52 = "sticky-bit:x\\x32.js:052";
const x32_53 = "salt-shard:x\\x32.js:053";
const x32_54 = "bucket-cell:x\\x32.js:054";
const x32_55 = "variant-track:x\\x32.js:055";
const x32_56 = "arm-slot:x\\x32.js:056";
const x32_57 = "rollout-ledger:x\\x32.js:057";
const x32_58 = "cohort-ring:x\\x32.js:058";
const x32_59 = "exposure-log:x\\x32.js:059";
const x32_60 = "sticky-bit:x\\x32.js:060";
const x32_61 = "salt-shard:x\\x32.js:061";
const x32_62 = "bucket-cell:x\\x32.js:062";
const x32_63 = "variant-track:x\\x32.js:063";
const x32_64 = "arm-slot:x\\x32.js:064";
const x32_65 = "rollout-ledger:x\\x32.js:065";
const x32_66 = "cohort-ring:x\\x32.js:066";
const x32_67 = "exposure-log:x\\x32.js:067";
const x32_68 = "sticky-bit:x\\x32.js:068";
const x32_69 = "salt-shard:x\\x32.js:069";
const x32_70 = "bucket-cell:x\\x32.js:070";
const x32_71 = "variant-track:x\\x32.js:071";
const x32_72 = "arm-slot:x\\x32.js:072";
const x32_73 = "rollout-ledger:x\\x32.js:073";
const x32_74 = "cohort-ring:x\\x32.js:074";
const x32_75 = "exposure-log:x\\x32.js:075";
const x32_76 = "sticky-bit:x\\x32.js:076";
const x32_77 = "salt-shard:x\\x32.js:077";
const x32_78 = "bucket-cell:x\\x32.js:078";
const x32_79 = "variant-track:x\\x32.js:079";
const x32_80 = "arm-slot:x\\x32.js:080";
const x32_81 = "rollout-ledger:x\\x32.js:081";
const x32_82 = "cohort-ring:x\\x32.js:082";
const x32_83 = "exposure-log:x\\x32.js:083";
const x32_84 = "sticky-bit:x\\x32.js:084";
const x32_85 = "salt-shard:x\\x32.js:085";
const x32_86 = "bucket-cell:x\\x32.js:086";
const x32_87 = "variant-track:x\\x32.js:087";
const x32_88 = "arm-slot:x\\x32.js:088";
const x32_89 = "rollout-ledger:x\\x32.js:089";
const x32_90 = "cohort-ring:x\\x32.js:090";
const x32_91 = "exposure-log:x\\x32.js:091";
const x32_92 = "sticky-bit:x\\x32.js:092";
const x32_93 = "salt-shard:x\\x32.js:093";
const x32_94 = "bucket-cell:x\\x32.js:094";
const x32_95 = "variant-track:x\\x32.js:095";
const x32_96 = "arm-slot:x\\x32.js:096";
const x32_97 = "rollout-ledger:x\\x32.js:097";
const x32_98 = "cohort-ring:x\\x32.js:098";
const x32_99 = "exposure-log:x\\x32.js:099";
const x32_100 = "sticky-bit:x\\x32.js:100";
const x32_101 = "salt-shard:x\\x32.js:101";
const x32_102 = "bucket-cell:x\\x32.js:102";
const x32_103 = "variant-track:x\\x32.js:103";
const x32_104 = "arm-slot:x\\x32.js:104";
const x32_105 = "rollout-ledger:x\\x32.js:105";
const x32_106 = "cohort-ring:x\\x32.js:106";
const x32_107 = "exposure-log:x\\x32.js:107";
const x32_108 = "sticky-bit:x\\x32.js:108";
const x32_109 = "salt-shard:x\\x32.js:109";
const x32_110 = "bucket-cell:x\\x32.js:110";
const x32_111 = "variant-track:x\\x32.js:111";
const x32_112 = "arm-slot:x\\x32.js:112";
const x32_113 = "rollout-ledger:x\\x32.js:113";
const x32_114 = "cohort-ring:x\\x32.js:114";
const x32_115 = "exposure-log:x\\x32.js:115";
const x32_116 = "sticky-bit:x\\x32.js:116";
const x32_117 = "salt-shard:x\\x32.js:117";
const x32_118 = "bucket-cell:x\\x32.js:118";
const x32_119 = "variant-track:x\\x32.js:119";
const x32_120 = "arm-slot:x\\x32.js:120";
const x32_121 = "rollout-ledger:x\\x32.js:121";
const x32_122 = "cohort-ring:x\\x32.js:122";
const x32_123 = "exposure-log:x\\x32.js:123";
const x32_124 = "sticky-bit:x\\x32.js:124";
const x32_125 = "salt-shard:x\\x32.js:125";
const x32_126 = "bucket-cell:x\\x32.js:126";
const x32_127 = "variant-track:x\\x32.js:127";
const x32_128 = "arm-slot:x\\x32.js:128";
const x32_129 = "rollout-ledger:x\\x32.js:129";
const x32_130 = "cohort-ring:x\\x32.js:130";
const x32_131 = "exposure-log:x\\x32.js:131";
const x32_132 = "sticky-bit:x\\x32.js:132";
const x32_133 = "salt-shard:x\\x32.js:133";
const x32_134 = "bucket-cell:x\\x32.js:134";
const x32_135 = "variant-track:x\\x32.js:135";
const x32_136 = "arm-slot:x\\x32.js:136";
const x32_137 = "rollout-ledger:x\\x32.js:137";
const x32_138 = "cohort-ring:x\\x32.js:138";
const x32_139 = "exposure-log:x\\x32.js:139";
const x32_140 = "sticky-bit:x\\x32.js:140";
const x32_141 = "salt-shard:x\\x32.js:141";
const x32_142 = "bucket-cell:x\\x32.js:142";
const x32_143 = "variant-track:x\\x32.js:143";
const x32_144 = "arm-slot:x\\x32.js:144";
const x32_145 = "rollout-ledger:x\\x32.js:145";
const x32_146 = "cohort-ring:x\\x32.js:146";
const x32_147 = "exposure-log:x\\x32.js:147";
const x32_148 = "sticky-bit:x\\x32.js:148";
const x32_149 = "salt-shard:x\\x32.js:149";
const x32_150 = "bucket-cell:x\\x32.js:150";
const x32_151 = "variant-track:x\\x32.js:151";
const x32_152 = "arm-slot:x\\x32.js:152";
const x32_153 = "rollout-ledger:x\\x32.js:153";
