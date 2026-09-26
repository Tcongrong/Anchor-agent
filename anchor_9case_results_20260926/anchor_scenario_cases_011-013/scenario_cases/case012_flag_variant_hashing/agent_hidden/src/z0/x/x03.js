import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 3,
  salt: 'f:03:lane',
  mask: 3041712815
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'probe3@flags.dev',
    flag: 'flag_03',
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
const x03_0 = "arm-slot:x\\x03.js:000";
const x03_1 = "rollout-ledger:x\\x03.js:001";
const x03_2 = "cohort-ring:x\\x03.js:002";
const x03_3 = "exposure-log:x\\x03.js:003";
const x03_4 = "sticky-bit:x\\x03.js:004";
const x03_5 = "salt-shard:x\\x03.js:005";
const x03_6 = "bucket-cell:x\\x03.js:006";
const x03_7 = "variant-track:x\\x03.js:007";
const x03_8 = "arm-slot:x\\x03.js:008";
const x03_9 = "rollout-ledger:x\\x03.js:009";
const x03_10 = "cohort-ring:x\\x03.js:010";
const x03_11 = "exposure-log:x\\x03.js:011";
const x03_12 = "sticky-bit:x\\x03.js:012";
const x03_13 = "salt-shard:x\\x03.js:013";
const x03_14 = "bucket-cell:x\\x03.js:014";
const x03_15 = "variant-track:x\\x03.js:015";
const x03_16 = "arm-slot:x\\x03.js:016";
const x03_17 = "rollout-ledger:x\\x03.js:017";
const x03_18 = "cohort-ring:x\\x03.js:018";
const x03_19 = "exposure-log:x\\x03.js:019";
const x03_20 = "sticky-bit:x\\x03.js:020";
const x03_21 = "salt-shard:x\\x03.js:021";
const x03_22 = "bucket-cell:x\\x03.js:022";
const x03_23 = "variant-track:x\\x03.js:023";
const x03_24 = "arm-slot:x\\x03.js:024";
const x03_25 = "rollout-ledger:x\\x03.js:025";
const x03_26 = "cohort-ring:x\\x03.js:026";
const x03_27 = "exposure-log:x\\x03.js:027";
const x03_28 = "sticky-bit:x\\x03.js:028";
const x03_29 = "salt-shard:x\\x03.js:029";
const x03_30 = "bucket-cell:x\\x03.js:030";
const x03_31 = "variant-track:x\\x03.js:031";
const x03_32 = "arm-slot:x\\x03.js:032";
const x03_33 = "rollout-ledger:x\\x03.js:033";
const x03_34 = "cohort-ring:x\\x03.js:034";
const x03_35 = "exposure-log:x\\x03.js:035";
const x03_36 = "sticky-bit:x\\x03.js:036";
const x03_37 = "salt-shard:x\\x03.js:037";
const x03_38 = "bucket-cell:x\\x03.js:038";
const x03_39 = "variant-track:x\\x03.js:039";
const x03_40 = "arm-slot:x\\x03.js:040";
const x03_41 = "rollout-ledger:x\\x03.js:041";
const x03_42 = "cohort-ring:x\\x03.js:042";
const x03_43 = "exposure-log:x\\x03.js:043";
const x03_44 = "sticky-bit:x\\x03.js:044";
const x03_45 = "salt-shard:x\\x03.js:045";
const x03_46 = "bucket-cell:x\\x03.js:046";
const x03_47 = "variant-track:x\\x03.js:047";
const x03_48 = "arm-slot:x\\x03.js:048";
const x03_49 = "rollout-ledger:x\\x03.js:049";
const x03_50 = "cohort-ring:x\\x03.js:050";
const x03_51 = "exposure-log:x\\x03.js:051";
const x03_52 = "sticky-bit:x\\x03.js:052";
const x03_53 = "salt-shard:x\\x03.js:053";
const x03_54 = "bucket-cell:x\\x03.js:054";
const x03_55 = "variant-track:x\\x03.js:055";
const x03_56 = "arm-slot:x\\x03.js:056";
const x03_57 = "rollout-ledger:x\\x03.js:057";
const x03_58 = "cohort-ring:x\\x03.js:058";
const x03_59 = "exposure-log:x\\x03.js:059";
const x03_60 = "sticky-bit:x\\x03.js:060";
const x03_61 = "salt-shard:x\\x03.js:061";
const x03_62 = "bucket-cell:x\\x03.js:062";
const x03_63 = "variant-track:x\\x03.js:063";
const x03_64 = "arm-slot:x\\x03.js:064";
const x03_65 = "rollout-ledger:x\\x03.js:065";
const x03_66 = "cohort-ring:x\\x03.js:066";
const x03_67 = "exposure-log:x\\x03.js:067";
const x03_68 = "sticky-bit:x\\x03.js:068";
const x03_69 = "salt-shard:x\\x03.js:069";
const x03_70 = "bucket-cell:x\\x03.js:070";
const x03_71 = "variant-track:x\\x03.js:071";
const x03_72 = "arm-slot:x\\x03.js:072";
const x03_73 = "rollout-ledger:x\\x03.js:073";
const x03_74 = "cohort-ring:x\\x03.js:074";
const x03_75 = "exposure-log:x\\x03.js:075";
const x03_76 = "sticky-bit:x\\x03.js:076";
const x03_77 = "salt-shard:x\\x03.js:077";
const x03_78 = "bucket-cell:x\\x03.js:078";
const x03_79 = "variant-track:x\\x03.js:079";
const x03_80 = "arm-slot:x\\x03.js:080";
const x03_81 = "rollout-ledger:x\\x03.js:081";
const x03_82 = "cohort-ring:x\\x03.js:082";
const x03_83 = "exposure-log:x\\x03.js:083";
const x03_84 = "sticky-bit:x\\x03.js:084";
const x03_85 = "salt-shard:x\\x03.js:085";
const x03_86 = "bucket-cell:x\\x03.js:086";
const x03_87 = "variant-track:x\\x03.js:087";
const x03_88 = "arm-slot:x\\x03.js:088";
const x03_89 = "rollout-ledger:x\\x03.js:089";
const x03_90 = "cohort-ring:x\\x03.js:090";
const x03_91 = "exposure-log:x\\x03.js:091";
const x03_92 = "sticky-bit:x\\x03.js:092";
const x03_93 = "salt-shard:x\\x03.js:093";
const x03_94 = "bucket-cell:x\\x03.js:094";
const x03_95 = "variant-track:x\\x03.js:095";
const x03_96 = "arm-slot:x\\x03.js:096";
const x03_97 = "rollout-ledger:x\\x03.js:097";
const x03_98 = "cohort-ring:x\\x03.js:098";
const x03_99 = "exposure-log:x\\x03.js:099";
const x03_100 = "sticky-bit:x\\x03.js:100";
const x03_101 = "salt-shard:x\\x03.js:101";
const x03_102 = "bucket-cell:x\\x03.js:102";
const x03_103 = "variant-track:x\\x03.js:103";
const x03_104 = "arm-slot:x\\x03.js:104";
const x03_105 = "rollout-ledger:x\\x03.js:105";
const x03_106 = "cohort-ring:x\\x03.js:106";
const x03_107 = "exposure-log:x\\x03.js:107";
const x03_108 = "sticky-bit:x\\x03.js:108";
const x03_109 = "salt-shard:x\\x03.js:109";
const x03_110 = "bucket-cell:x\\x03.js:110";
const x03_111 = "variant-track:x\\x03.js:111";
const x03_112 = "arm-slot:x\\x03.js:112";
const x03_113 = "rollout-ledger:x\\x03.js:113";
const x03_114 = "cohort-ring:x\\x03.js:114";
const x03_115 = "exposure-log:x\\x03.js:115";
const x03_116 = "sticky-bit:x\\x03.js:116";
const x03_117 = "salt-shard:x\\x03.js:117";
const x03_118 = "bucket-cell:x\\x03.js:118";
const x03_119 = "variant-track:x\\x03.js:119";
const x03_120 = "arm-slot:x\\x03.js:120";
const x03_121 = "rollout-ledger:x\\x03.js:121";
const x03_122 = "cohort-ring:x\\x03.js:122";
const x03_123 = "exposure-log:x\\x03.js:123";
const x03_124 = "sticky-bit:x\\x03.js:124";
const x03_125 = "salt-shard:x\\x03.js:125";
const x03_126 = "bucket-cell:x\\x03.js:126";
const x03_127 = "variant-track:x\\x03.js:127";
const x03_128 = "arm-slot:x\\x03.js:128";
const x03_129 = "rollout-ledger:x\\x03.js:129";
const x03_130 = "cohort-ring:x\\x03.js:130";
const x03_131 = "exposure-log:x\\x03.js:131";
const x03_132 = "sticky-bit:x\\x03.js:132";
const x03_133 = "salt-shard:x\\x03.js:133";
const x03_134 = "bucket-cell:x\\x03.js:134";
const x03_135 = "variant-track:x\\x03.js:135";
const x03_136 = "arm-slot:x\\x03.js:136";
const x03_137 = "rollout-ledger:x\\x03.js:137";
const x03_138 = "cohort-ring:x\\x03.js:138";
const x03_139 = "exposure-log:x\\x03.js:139";
const x03_140 = "sticky-bit:x\\x03.js:140";
const x03_141 = "salt-shard:x\\x03.js:141";
const x03_142 = "bucket-cell:x\\x03.js:142";
const x03_143 = "variant-track:x\\x03.js:143";
const x03_144 = "arm-slot:x\\x03.js:144";
const x03_145 = "rollout-ledger:x\\x03.js:145";
const x03_146 = "cohort-ring:x\\x03.js:146";
const x03_147 = "exposure-log:x\\x03.js:147";
const x03_148 = "sticky-bit:x\\x03.js:148";
const x03_149 = "salt-shard:x\\x03.js:149";
const x03_150 = "bucket-cell:x\\x03.js:150";
const x03_151 = "variant-track:x\\x03.js:151";
const x03_152 = "arm-slot:x\\x03.js:152";
const x03_153 = "rollout-ledger:x\\x03.js:153";
