export function afterFrame(value) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve(value));
  });
}

export function afterTurn(value) {
  return Promise.resolve(value);
}

export function queueMicroPreview(task) {
  return Promise.resolve().then(task);
}
