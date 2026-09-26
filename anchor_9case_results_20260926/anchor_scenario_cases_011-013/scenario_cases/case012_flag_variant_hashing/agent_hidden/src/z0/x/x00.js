import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 0,
  salt: 'f:00:lane',
  mask: 3668340124
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'probe0@flags.dev',
    flag: 'flag_00',
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
const x00_0 = "arm-slot:x\\x00.js:000";
const x00_1 = "rollout-ledger:x\\x00.js:001";
const x00_2 = "cohort-ring:x\\x00.js:002";
const x00_3 = "exposure-log:x\\x00.js:003";
const x00_4 = "sticky-bit:x\\x00.js:004";
const x00_5 = "salt-shard:x\\x00.js:005";
const x00_6 = "bucket-cell:x\\x00.js:006";
const x00_7 = "variant-track:x\\x00.js:007";
const x00_8 = "arm-slot:x\\x00.js:008";
const x00_9 = "rollout-ledger:x\\x00.js:009";
const x00_10 = "cohort-ring:x\\x00.js:010";
const x00_11 = "exposure-log:x\\x00.js:011";
const x00_12 = "sticky-bit:x\\x00.js:012";
const x00_13 = "salt-shard:x\\x00.js:013";
const x00_14 = "bucket-cell:x\\x00.js:014";
const x00_15 = "variant-track:x\\x00.js:015";
const x00_16 = "arm-slot:x\\x00.js:016";
const x00_17 = "rollout-ledger:x\\x00.js:017";
const x00_18 = "cohort-ring:x\\x00.js:018";
const x00_19 = "exposure-log:x\\x00.js:019";
const x00_20 = "sticky-bit:x\\x00.js:020";
const x00_21 = "salt-shard:x\\x00.js:021";
const x00_22 = "bucket-cell:x\\x00.js:022";
const x00_23 = "variant-track:x\\x00.js:023";
const x00_24 = "arm-slot:x\\x00.js:024";
const x00_25 = "rollout-ledger:x\\x00.js:025";
const x00_26 = "cohort-ring:x\\x00.js:026";
const x00_27 = "exposure-log:x\\x00.js:027";
const x00_28 = "sticky-bit:x\\x00.js:028";
const x00_29 = "salt-shard:x\\x00.js:029";
const x00_30 = "bucket-cell:x\\x00.js:030";
const x00_31 = "variant-track:x\\x00.js:031";
const x00_32 = "arm-slot:x\\x00.js:032";
const x00_33 = "rollout-ledger:x\\x00.js:033";
const x00_34 = "cohort-ring:x\\x00.js:034";
const x00_35 = "exposure-log:x\\x00.js:035";
const x00_36 = "sticky-bit:x\\x00.js:036";
const x00_37 = "salt-shard:x\\x00.js:037";
const x00_38 = "bucket-cell:x\\x00.js:038";
const x00_39 = "variant-track:x\\x00.js:039";
const x00_40 = "arm-slot:x\\x00.js:040";
const x00_41 = "rollout-ledger:x\\x00.js:041";
const x00_42 = "cohort-ring:x\\x00.js:042";
const x00_43 = "exposure-log:x\\x00.js:043";
const x00_44 = "sticky-bit:x\\x00.js:044";
const x00_45 = "salt-shard:x\\x00.js:045";
const x00_46 = "bucket-cell:x\\x00.js:046";
const x00_47 = "variant-track:x\\x00.js:047";
const x00_48 = "arm-slot:x\\x00.js:048";
const x00_49 = "rollout-ledger:x\\x00.js:049";
const x00_50 = "cohort-ring:x\\x00.js:050";
const x00_51 = "exposure-log:x\\x00.js:051";
const x00_52 = "sticky-bit:x\\x00.js:052";
const x00_53 = "salt-shard:x\\x00.js:053";
const x00_54 = "bucket-cell:x\\x00.js:054";
const x00_55 = "variant-track:x\\x00.js:055";
const x00_56 = "arm-slot:x\\x00.js:056";
const x00_57 = "rollout-ledger:x\\x00.js:057";
const x00_58 = "cohort-ring:x\\x00.js:058";
const x00_59 = "exposure-log:x\\x00.js:059";
const x00_60 = "sticky-bit:x\\x00.js:060";
const x00_61 = "salt-shard:x\\x00.js:061";
const x00_62 = "bucket-cell:x\\x00.js:062";
const x00_63 = "variant-track:x\\x00.js:063";
const x00_64 = "arm-slot:x\\x00.js:064";
const x00_65 = "rollout-ledger:x\\x00.js:065";
const x00_66 = "cohort-ring:x\\x00.js:066";
const x00_67 = "exposure-log:x\\x00.js:067";
const x00_68 = "sticky-bit:x\\x00.js:068";
const x00_69 = "salt-shard:x\\x00.js:069";
const x00_70 = "bucket-cell:x\\x00.js:070";
const x00_71 = "variant-track:x\\x00.js:071";
const x00_72 = "arm-slot:x\\x00.js:072";
const x00_73 = "rollout-ledger:x\\x00.js:073";
const x00_74 = "cohort-ring:x\\x00.js:074";
const x00_75 = "exposure-log:x\\x00.js:075";
const x00_76 = "sticky-bit:x\\x00.js:076";
const x00_77 = "salt-shard:x\\x00.js:077";
const x00_78 = "bucket-cell:x\\x00.js:078";
const x00_79 = "variant-track:x\\x00.js:079";
const x00_80 = "arm-slot:x\\x00.js:080";
const x00_81 = "rollout-ledger:x\\x00.js:081";
const x00_82 = "cohort-ring:x\\x00.js:082";
const x00_83 = "exposure-log:x\\x00.js:083";
const x00_84 = "sticky-bit:x\\x00.js:084";
const x00_85 = "salt-shard:x\\x00.js:085";
const x00_86 = "bucket-cell:x\\x00.js:086";
const x00_87 = "variant-track:x\\x00.js:087";
const x00_88 = "arm-slot:x\\x00.js:088";
const x00_89 = "rollout-ledger:x\\x00.js:089";
const x00_90 = "cohort-ring:x\\x00.js:090";
const x00_91 = "exposure-log:x\\x00.js:091";
const x00_92 = "sticky-bit:x\\x00.js:092";
const x00_93 = "salt-shard:x\\x00.js:093";
const x00_94 = "bucket-cell:x\\x00.js:094";
const x00_95 = "variant-track:x\\x00.js:095";
const x00_96 = "arm-slot:x\\x00.js:096";
const x00_97 = "rollout-ledger:x\\x00.js:097";
const x00_98 = "cohort-ring:x\\x00.js:098";
const x00_99 = "exposure-log:x\\x00.js:099";
const x00_100 = "sticky-bit:x\\x00.js:100";
const x00_101 = "salt-shard:x\\x00.js:101";
const x00_102 = "bucket-cell:x\\x00.js:102";
const x00_103 = "variant-track:x\\x00.js:103";
const x00_104 = "arm-slot:x\\x00.js:104";
const x00_105 = "rollout-ledger:x\\x00.js:105";
const x00_106 = "cohort-ring:x\\x00.js:106";
const x00_107 = "exposure-log:x\\x00.js:107";
const x00_108 = "sticky-bit:x\\x00.js:108";
const x00_109 = "salt-shard:x\\x00.js:109";
const x00_110 = "bucket-cell:x\\x00.js:110";
const x00_111 = "variant-track:x\\x00.js:111";
const x00_112 = "arm-slot:x\\x00.js:112";
const x00_113 = "rollout-ledger:x\\x00.js:113";
const x00_114 = "cohort-ring:x\\x00.js:114";
const x00_115 = "exposure-log:x\\x00.js:115";
const x00_116 = "sticky-bit:x\\x00.js:116";
const x00_117 = "salt-shard:x\\x00.js:117";
const x00_118 = "bucket-cell:x\\x00.js:118";
const x00_119 = "variant-track:x\\x00.js:119";
const x00_120 = "arm-slot:x\\x00.js:120";
const x00_121 = "rollout-ledger:x\\x00.js:121";
const x00_122 = "cohort-ring:x\\x00.js:122";
const x00_123 = "exposure-log:x\\x00.js:123";
const x00_124 = "sticky-bit:x\\x00.js:124";
const x00_125 = "salt-shard:x\\x00.js:125";
const x00_126 = "bucket-cell:x\\x00.js:126";
const x00_127 = "variant-track:x\\x00.js:127";
const x00_128 = "arm-slot:x\\x00.js:128";
const x00_129 = "rollout-ledger:x\\x00.js:129";
const x00_130 = "cohort-ring:x\\x00.js:130";
const x00_131 = "exposure-log:x\\x00.js:131";
const x00_132 = "sticky-bit:x\\x00.js:132";
const x00_133 = "salt-shard:x\\x00.js:133";
const x00_134 = "bucket-cell:x\\x00.js:134";
const x00_135 = "variant-track:x\\x00.js:135";
const x00_136 = "arm-slot:x\\x00.js:136";
const x00_137 = "rollout-ledger:x\\x00.js:137";
const x00_138 = "cohort-ring:x\\x00.js:138";
const x00_139 = "exposure-log:x\\x00.js:139";
const x00_140 = "sticky-bit:x\\x00.js:140";
const x00_141 = "salt-shard:x\\x00.js:141";
const x00_142 = "bucket-cell:x\\x00.js:142";
const x00_143 = "variant-track:x\\x00.js:143";
const x00_144 = "arm-slot:x\\x00.js:144";
const x00_145 = "rollout-ledger:x\\x00.js:145";
const x00_146 = "cohort-ring:x\\x00.js:146";
const x00_147 = "exposure-log:x\\x00.js:147";
const x00_148 = "sticky-bit:x\\x00.js:148";
const x00_149 = "salt-shard:x\\x00.js:149";
const x00_150 = "bucket-cell:x\\x00.js:150";
const x00_151 = "variant-track:x\\x00.js:151";
const x00_152 = "arm-slot:x\\x00.js:152";
const x00_153 = "rollout-ledger:x\\x00.js:153";
