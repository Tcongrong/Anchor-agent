import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 40,
  salt: 'f:14:lane',
  mask: 2471588164
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'ghost40@flags.dev',
    flag: 'flag_40',
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
const x40_0 = "arm-slot:x\\x40.js:000";
const x40_1 = "rollout-ledger:x\\x40.js:001";
const x40_2 = "cohort-ring:x\\x40.js:002";
const x40_3 = "exposure-log:x\\x40.js:003";
const x40_4 = "sticky-bit:x\\x40.js:004";
const x40_5 = "salt-shard:x\\x40.js:005";
const x40_6 = "bucket-cell:x\\x40.js:006";
const x40_7 = "variant-track:x\\x40.js:007";
const x40_8 = "arm-slot:x\\x40.js:008";
const x40_9 = "rollout-ledger:x\\x40.js:009";
const x40_10 = "cohort-ring:x\\x40.js:010";
const x40_11 = "exposure-log:x\\x40.js:011";
const x40_12 = "sticky-bit:x\\x40.js:012";
const x40_13 = "salt-shard:x\\x40.js:013";
const x40_14 = "bucket-cell:x\\x40.js:014";
const x40_15 = "variant-track:x\\x40.js:015";
const x40_16 = "arm-slot:x\\x40.js:016";
const x40_17 = "rollout-ledger:x\\x40.js:017";
const x40_18 = "cohort-ring:x\\x40.js:018";
const x40_19 = "exposure-log:x\\x40.js:019";
const x40_20 = "sticky-bit:x\\x40.js:020";
const x40_21 = "salt-shard:x\\x40.js:021";
const x40_22 = "bucket-cell:x\\x40.js:022";
const x40_23 = "variant-track:x\\x40.js:023";
const x40_24 = "arm-slot:x\\x40.js:024";
const x40_25 = "rollout-ledger:x\\x40.js:025";
const x40_26 = "cohort-ring:x\\x40.js:026";
const x40_27 = "exposure-log:x\\x40.js:027";
const x40_28 = "sticky-bit:x\\x40.js:028";
const x40_29 = "salt-shard:x\\x40.js:029";
const x40_30 = "bucket-cell:x\\x40.js:030";
const x40_31 = "variant-track:x\\x40.js:031";
const x40_32 = "arm-slot:x\\x40.js:032";
const x40_33 = "rollout-ledger:x\\x40.js:033";
const x40_34 = "cohort-ring:x\\x40.js:034";
const x40_35 = "exposure-log:x\\x40.js:035";
const x40_36 = "sticky-bit:x\\x40.js:036";
const x40_37 = "salt-shard:x\\x40.js:037";
const x40_38 = "bucket-cell:x\\x40.js:038";
const x40_39 = "variant-track:x\\x40.js:039";
const x40_40 = "arm-slot:x\\x40.js:040";
const x40_41 = "rollout-ledger:x\\x40.js:041";
const x40_42 = "cohort-ring:x\\x40.js:042";
const x40_43 = "exposure-log:x\\x40.js:043";
const x40_44 = "sticky-bit:x\\x40.js:044";
const x40_45 = "salt-shard:x\\x40.js:045";
const x40_46 = "bucket-cell:x\\x40.js:046";
const x40_47 = "variant-track:x\\x40.js:047";
const x40_48 = "arm-slot:x\\x40.js:048";
const x40_49 = "rollout-ledger:x\\x40.js:049";
const x40_50 = "cohort-ring:x\\x40.js:050";
const x40_51 = "exposure-log:x\\x40.js:051";
const x40_52 = "sticky-bit:x\\x40.js:052";
const x40_53 = "salt-shard:x\\x40.js:053";
const x40_54 = "bucket-cell:x\\x40.js:054";
const x40_55 = "variant-track:x\\x40.js:055";
const x40_56 = "arm-slot:x\\x40.js:056";
const x40_57 = "rollout-ledger:x\\x40.js:057";
const x40_58 = "cohort-ring:x\\x40.js:058";
const x40_59 = "exposure-log:x\\x40.js:059";
const x40_60 = "sticky-bit:x\\x40.js:060";
const x40_61 = "salt-shard:x\\x40.js:061";
const x40_62 = "bucket-cell:x\\x40.js:062";
const x40_63 = "variant-track:x\\x40.js:063";
const x40_64 = "arm-slot:x\\x40.js:064";
const x40_65 = "rollout-ledger:x\\x40.js:065";
const x40_66 = "cohort-ring:x\\x40.js:066";
const x40_67 = "exposure-log:x\\x40.js:067";
const x40_68 = "sticky-bit:x\\x40.js:068";
const x40_69 = "salt-shard:x\\x40.js:069";
const x40_70 = "bucket-cell:x\\x40.js:070";
const x40_71 = "variant-track:x\\x40.js:071";
const x40_72 = "arm-slot:x\\x40.js:072";
const x40_73 = "rollout-ledger:x\\x40.js:073";
const x40_74 = "cohort-ring:x\\x40.js:074";
const x40_75 = "exposure-log:x\\x40.js:075";
const x40_76 = "sticky-bit:x\\x40.js:076";
const x40_77 = "salt-shard:x\\x40.js:077";
const x40_78 = "bucket-cell:x\\x40.js:078";
const x40_79 = "variant-track:x\\x40.js:079";
const x40_80 = "arm-slot:x\\x40.js:080";
const x40_81 = "rollout-ledger:x\\x40.js:081";
const x40_82 = "cohort-ring:x\\x40.js:082";
const x40_83 = "exposure-log:x\\x40.js:083";
const x40_84 = "sticky-bit:x\\x40.js:084";
const x40_85 = "salt-shard:x\\x40.js:085";
const x40_86 = "bucket-cell:x\\x40.js:086";
const x40_87 = "variant-track:x\\x40.js:087";
const x40_88 = "arm-slot:x\\x40.js:088";
const x40_89 = "rollout-ledger:x\\x40.js:089";
const x40_90 = "cohort-ring:x\\x40.js:090";
const x40_91 = "exposure-log:x\\x40.js:091";
const x40_92 = "sticky-bit:x\\x40.js:092";
const x40_93 = "salt-shard:x\\x40.js:093";
const x40_94 = "bucket-cell:x\\x40.js:094";
const x40_95 = "variant-track:x\\x40.js:095";
const x40_96 = "arm-slot:x\\x40.js:096";
const x40_97 = "rollout-ledger:x\\x40.js:097";
const x40_98 = "cohort-ring:x\\x40.js:098";
const x40_99 = "exposure-log:x\\x40.js:099";
const x40_100 = "sticky-bit:x\\x40.js:100";
const x40_101 = "salt-shard:x\\x40.js:101";
const x40_102 = "bucket-cell:x\\x40.js:102";
const x40_103 = "variant-track:x\\x40.js:103";
const x40_104 = "arm-slot:x\\x40.js:104";
const x40_105 = "rollout-ledger:x\\x40.js:105";
const x40_106 = "cohort-ring:x\\x40.js:106";
const x40_107 = "exposure-log:x\\x40.js:107";
const x40_108 = "sticky-bit:x\\x40.js:108";
const x40_109 = "salt-shard:x\\x40.js:109";
const x40_110 = "bucket-cell:x\\x40.js:110";
const x40_111 = "variant-track:x\\x40.js:111";
const x40_112 = "arm-slot:x\\x40.js:112";
const x40_113 = "rollout-ledger:x\\x40.js:113";
const x40_114 = "cohort-ring:x\\x40.js:114";
const x40_115 = "exposure-log:x\\x40.js:115";
const x40_116 = "sticky-bit:x\\x40.js:116";
const x40_117 = "salt-shard:x\\x40.js:117";
const x40_118 = "bucket-cell:x\\x40.js:118";
const x40_119 = "variant-track:x\\x40.js:119";
const x40_120 = "arm-slot:x\\x40.js:120";
const x40_121 = "rollout-ledger:x\\x40.js:121";
const x40_122 = "cohort-ring:x\\x40.js:122";
const x40_123 = "exposure-log:x\\x40.js:123";
const x40_124 = "sticky-bit:x\\x40.js:124";
const x40_125 = "salt-shard:x\\x40.js:125";
const x40_126 = "bucket-cell:x\\x40.js:126";
const x40_127 = "variant-track:x\\x40.js:127";
const x40_128 = "arm-slot:x\\x40.js:128";
const x40_129 = "rollout-ledger:x\\x40.js:129";
const x40_130 = "cohort-ring:x\\x40.js:130";
const x40_131 = "exposure-log:x\\x40.js:131";
const x40_132 = "sticky-bit:x\\x40.js:132";
const x40_133 = "salt-shard:x\\x40.js:133";
const x40_134 = "bucket-cell:x\\x40.js:134";
const x40_135 = "variant-track:x\\x40.js:135";
const x40_136 = "arm-slot:x\\x40.js:136";
const x40_137 = "rollout-ledger:x\\x40.js:137";
const x40_138 = "cohort-ring:x\\x40.js:138";
const x40_139 = "exposure-log:x\\x40.js:139";
const x40_140 = "sticky-bit:x\\x40.js:140";
const x40_141 = "salt-shard:x\\x40.js:141";
const x40_142 = "bucket-cell:x\\x40.js:142";
const x40_143 = "variant-track:x\\x40.js:143";
const x40_144 = "arm-slot:x\\x40.js:144";
const x40_145 = "rollout-ledger:x\\x40.js:145";
const x40_146 = "cohort-ring:x\\x40.js:146";
const x40_147 = "exposure-log:x\\x40.js:147";
const x40_148 = "sticky-bit:x\\x40.js:148";
const x40_149 = "salt-shard:x\\x40.js:149";
const x40_150 = "bucket-cell:x\\x40.js:150";
const x40_151 = "variant-track:x\\x40.js:151";
const x40_152 = "arm-slot:x\\x40.js:152";
const x40_153 = "rollout-ledger:x\\x40.js:153";
