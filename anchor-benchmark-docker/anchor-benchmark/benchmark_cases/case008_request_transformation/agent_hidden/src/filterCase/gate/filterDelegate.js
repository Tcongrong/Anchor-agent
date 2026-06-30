import { routeTableAction } from "../actions/tableActionRouter.js";

export function installFilterDelegate(rootDocument) {
  rootDocument.addEventListener("click", (event) => {
    const target = event.target?.closest?.("[data-action]");
    if (!target || !rootDocument.contains(target)) return;

    const action = target.getAttribute("data-action");
    if (!action) return;

    event.preventDefault();
    routeTableAction({
      action,
      element: target,
      document: rootDocument,
      issuedAt: Date.now()
    });
  });
}
