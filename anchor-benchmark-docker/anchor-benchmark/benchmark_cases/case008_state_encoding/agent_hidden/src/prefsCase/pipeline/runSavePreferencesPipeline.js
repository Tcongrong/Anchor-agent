import { collectWorkspaceSnapshot } from "../collectors/collectWorkspaceSnapshot.js";
import { normalizePreferenceInput } from "../normalizers/normalizePreferenceInput.js";
import { resolvePreferenceProfile } from "../profiles/resolvePreferenceProfile.js";
import { buildPreferenceEnvelope } from "../envelope/buildPreferenceEnvelope.js";
import { getPreferenceCodec } from "../registry/preferenceCodecRegistry.js";
import { publishPreferenceState } from "../sink/publishPreferenceState.js";

function settleOnMicrotask(value) {
  return Promise.resolve(value);
}

export async function runSavePreferencesPipeline(command) {
  const rawSnapshot = collectWorkspaceSnapshot();
  const normalized = normalizePreferenceInput(rawSnapshot);
  const profile = await settleOnMicrotask(resolvePreferenceProfile(normalized));
  const envelope = buildPreferenceEnvelope(profile, normalized);
  const codec = getPreferenceCodec(profile.codecKey);
  const stateCode = codec(envelope);

  return publishPreferenceState(stateCode, normalized, profile, command);
}
