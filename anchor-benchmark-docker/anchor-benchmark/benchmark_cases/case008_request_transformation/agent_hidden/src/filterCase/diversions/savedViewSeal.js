export function pinSavedViewSeal(view) {
  const source = JSON.stringify({
    page: view.page,
    status: view.status,
    columns: ["invoice", "account", "status", "owner", "amount"]
  });
  let value = 5381;

  for (let i = 0; i < source.length; i += 1) {
    value = Math.imul(value, 33) ^ source.charCodeAt(i);
    value >>>= 0;
  }

  return `sv_${value.toString(36).padStart(9, "0").slice(-9)}`;
}
