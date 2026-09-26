import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 27,
  salt: 'f:0r:lane',
  mask: 2323661639
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'probe27@flags.dev',
    flag: 'flag_27',
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
const x27_0 = "arm-slot:x\\x27.js:000";
const x27_1 = "rollout-ledger:x\\x27.js:001";
const x27_2 = "cohort-ring:x\\x27.js:002";
const x27_3 = "exposure-log:x\\x27.js:003";
const x27_4 = "sticky-bit:x\\x27.js:004";
const x27_5 = "salt-shard:x\\x27.js:005";
const x27_6 = "bucket-cell:x\\x27.js:006";
const x27_7 = "variant-track:x\\x27.js:007";
const x27_8 = "arm-slot:x\\x27.js:008";
const x27_9 = "rollout-ledger:x\\x27.js:009";
const x27_10 = "cohort-ring:x\\x27.js:010";
const x27_11 = "exposure-log:x\\x27.js:011";
const x27_12 = "sticky-bit:x\\x27.js:012";
const x27_13 = "salt-shard:x\\x27.js:013";
const x27_14 = "bucket-cell:x\\x27.js:014";
const x27_15 = "variant-track:x\\x27.js:015";
const x27_16 = "arm-slot:x\\x27.js:016";
const x27_17 = "rollout-ledger:x\\x27.js:017";
const x27_18 = "cohort-ring:x\\x27.js:018";
const x27_19 = "exposure-log:x\\x27.js:019";
const x27_20 = "sticky-bit:x\\x27.js:020";
const x27_21 = "salt-shard:x\\x27.js:021";
const x27_22 = "bucket-cell:x\\x27.js:022";
const x27_23 = "variant-track:x\\x27.js:023";
const x27_24 = "arm-slot:x\\x27.js:024";
const x27_25 = "rollout-ledger:x\\x27.js:025";
const x27_26 = "cohort-ring:x\\x27.js:026";
const x27_27 = "exposure-log:x\\x27.js:027";
const x27_28 = "sticky-bit:x\\x27.js:028";
const x27_29 = "salt-shard:x\\x27.js:029";
const x27_30 = "bucket-cell:x\\x27.js:030";
const x27_31 = "variant-track:x\\x27.js:031";
const x27_32 = "arm-slot:x\\x27.js:032";
const x27_33 = "rollout-ledger:x\\x27.js:033";
const x27_34 = "cohort-ring:x\\x27.js:034";
const x27_35 = "exposure-log:x\\x27.js:035";
const x27_36 = "sticky-bit:x\\x27.js:036";
const x27_37 = "salt-shard:x\\x27.js:037";
const x27_38 = "bucket-cell:x\\x27.js:038";
const x27_39 = "variant-track:x\\x27.js:039";
const x27_40 = "arm-slot:x\\x27.js:040";
const x27_41 = "rollout-ledger:x\\x27.js:041";
const x27_42 = "cohort-ring:x\\x27.js:042";
const x27_43 = "exposure-log:x\\x27.js:043";
const x27_44 = "sticky-bit:x\\x27.js:044";
const x27_45 = "salt-shard:x\\x27.js:045";
const x27_46 = "bucket-cell:x\\x27.js:046";
const x27_47 = "variant-track:x\\x27.js:047";
const x27_48 = "arm-slot:x\\x27.js:048";
const x27_49 = "rollout-ledger:x\\x27.js:049";
const x27_50 = "cohort-ring:x\\x27.js:050";
const x27_51 = "exposure-log:x\\x27.js:051";
const x27_52 = "sticky-bit:x\\x27.js:052";
const x27_53 = "salt-shard:x\\x27.js:053";
const x27_54 = "bucket-cell:x\\x27.js:054";
const x27_55 = "variant-track:x\\x27.js:055";
const x27_56 = "arm-slot:x\\x27.js:056";
const x27_57 = "rollout-ledger:x\\x27.js:057";
const x27_58 = "cohort-ring:x\\x27.js:058";
const x27_59 = "exposure-log:x\\x27.js:059";
const x27_60 = "sticky-bit:x\\x27.js:060";
const x27_61 = "salt-shard:x\\x27.js:061";
const x27_62 = "bucket-cell:x\\x27.js:062";
const x27_63 = "variant-track:x\\x27.js:063";
const x27_64 = "arm-slot:x\\x27.js:064";
const x27_65 = "rollout-ledger:x\\x27.js:065";
const x27_66 = "cohort-ring:x\\x27.js:066";
const x27_67 = "exposure-log:x\\x27.js:067";
const x27_68 = "sticky-bit:x\\x27.js:068";
const x27_69 = "salt-shard:x\\x27.js:069";
const x27_70 = "bucket-cell:x\\x27.js:070";
const x27_71 = "variant-track:x\\x27.js:071";
const x27_72 = "arm-slot:x\\x27.js:072";
const x27_73 = "rollout-ledger:x\\x27.js:073";
const x27_74 = "cohort-ring:x\\x27.js:074";
const x27_75 = "exposure-log:x\\x27.js:075";
const x27_76 = "sticky-bit:x\\x27.js:076";
const x27_77 = "salt-shard:x\\x27.js:077";
const x27_78 = "bucket-cell:x\\x27.js:078";
const x27_79 = "variant-track:x\\x27.js:079";
const x27_80 = "arm-slot:x\\x27.js:080";
const x27_81 = "rollout-ledger:x\\x27.js:081";
const x27_82 = "cohort-ring:x\\x27.js:082";
const x27_83 = "exposure-log:x\\x27.js:083";
const x27_84 = "sticky-bit:x\\x27.js:084";
const x27_85 = "salt-shard:x\\x27.js:085";
const x27_86 = "bucket-cell:x\\x27.js:086";
const x27_87 = "variant-track:x\\x27.js:087";
const x27_88 = "arm-slot:x\\x27.js:088";
const x27_89 = "rollout-ledger:x\\x27.js:089";
const x27_90 = "cohort-ring:x\\x27.js:090";
const x27_91 = "exposure-log:x\\x27.js:091";
const x27_92 = "sticky-bit:x\\x27.js:092";
const x27_93 = "salt-shard:x\\x27.js:093";
const x27_94 = "bucket-cell:x\\x27.js:094";
const x27_95 = "variant-track:x\\x27.js:095";
const x27_96 = "arm-slot:x\\x27.js:096";
const x27_97 = "rollout-ledger:x\\x27.js:097";
const x27_98 = "cohort-ring:x\\x27.js:098";
const x27_99 = "exposure-log:x\\x27.js:099";
const x27_100 = "sticky-bit:x\\x27.js:100";
const x27_101 = "salt-shard:x\\x27.js:101";
const x27_102 = "bucket-cell:x\\x27.js:102";
const x27_103 = "variant-track:x\\x27.js:103";
const x27_104 = "arm-slot:x\\x27.js:104";
const x27_105 = "rollout-ledger:x\\x27.js:105";
const x27_106 = "cohort-ring:x\\x27.js:106";
const x27_107 = "exposure-log:x\\x27.js:107";
const x27_108 = "sticky-bit:x\\x27.js:108";
const x27_109 = "salt-shard:x\\x27.js:109";
const x27_110 = "bucket-cell:x\\x27.js:110";
const x27_111 = "variant-track:x\\x27.js:111";
const x27_112 = "arm-slot:x\\x27.js:112";
const x27_113 = "rollout-ledger:x\\x27.js:113";
const x27_114 = "cohort-ring:x\\x27.js:114";
const x27_115 = "exposure-log:x\\x27.js:115";
const x27_116 = "sticky-bit:x\\x27.js:116";
const x27_117 = "salt-shard:x\\x27.js:117";
const x27_118 = "bucket-cell:x\\x27.js:118";
const x27_119 = "variant-track:x\\x27.js:119";
const x27_120 = "arm-slot:x\\x27.js:120";
const x27_121 = "rollout-ledger:x\\x27.js:121";
const x27_122 = "cohort-ring:x\\x27.js:122";
const x27_123 = "exposure-log:x\\x27.js:123";
const x27_124 = "sticky-bit:x\\x27.js:124";
const x27_125 = "salt-shard:x\\x27.js:125";
const x27_126 = "bucket-cell:x\\x27.js:126";
const x27_127 = "variant-track:x\\x27.js:127";
const x27_128 = "arm-slot:x\\x27.js:128";
const x27_129 = "rollout-ledger:x\\x27.js:129";
const x27_130 = "cohort-ring:x\\x27.js:130";
const x27_131 = "exposure-log:x\\x27.js:131";
const x27_132 = "sticky-bit:x\\x27.js:132";
const x27_133 = "salt-shard:x\\x27.js:133";
const x27_134 = "bucket-cell:x\\x27.js:134";
const x27_135 = "variant-track:x\\x27.js:135";
const x27_136 = "arm-slot:x\\x27.js:136";
const x27_137 = "rollout-ledger:x\\x27.js:137";
const x27_138 = "cohort-ring:x\\x27.js:138";
const x27_139 = "exposure-log:x\\x27.js:139";
const x27_140 = "sticky-bit:x\\x27.js:140";
const x27_141 = "salt-shard:x\\x27.js:141";
const x27_142 = "bucket-cell:x\\x27.js:142";
const x27_143 = "variant-track:x\\x27.js:143";
const x27_144 = "arm-slot:x\\x27.js:144";
const x27_145 = "rollout-ledger:x\\x27.js:145";
const x27_146 = "cohort-ring:x\\x27.js:146";
const x27_147 = "exposure-log:x\\x27.js:147";
const x27_148 = "sticky-bit:x\\x27.js:148";
const x27_149 = "salt-shard:x\\x27.js:149";
const x27_150 = "bucket-cell:x\\x27.js:150";
const x27_151 = "variant-track:x\\x27.js:151";
const x27_152 = "arm-slot:x\\x27.js:152";
const x27_153 = "rollout-ledger:x\\x27.js:153";
