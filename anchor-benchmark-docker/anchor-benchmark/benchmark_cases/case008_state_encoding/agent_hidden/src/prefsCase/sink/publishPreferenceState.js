function describeProfile(normalized) {
  const autosaveTag = normalized.autosave ? "+autosave" : "";
  return `${normalized.theme}/${normalized.density}${autosaveTag}`;
}

export function publishPreferenceState(stateCode, normalized, profile, command) {
  const payload = {
    action: "prefs.save",
    state_code: stateCode,
    profile: describeProfile(normalized),
    origin: command?.origin || "pointer"
  };

  console.log(payload);

  const marker = document.querySelector("#lastSavedMarker");
  if (marker) {
    marker.textContent = `Saved sc:${stateCode.slice(0, 6)}`;
  }

  const badge = document.querySelector("#profileBadge");
  if (badge) {
    badge.textContent = `profile: ${profile?.name || "unknown"}`;
  }

  return payload;
}
