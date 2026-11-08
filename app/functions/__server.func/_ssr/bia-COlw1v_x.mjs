import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, S as rankSystems, a as Shell, g as formatEuro, k as weightedDailyCost } from "./shell-DaXPN17E.mjs";
import { a as PrimaryButton, r as PageTitle } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bia-COlw1v_x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BiaView() {
	const systems = useRiskStore((s) => s.systems);
	const processes = useRiskStore((s) => s.processes);
	const setSystemInAnalysis = useRiskStore((s) => s.setSystemInAnalysis);
	const setAnalysisIds = useRiskStore((s) => s.setAnalysisIds);
	const [message, setMessage] = (0, import_react.useState)("");
	const ranked = (0, import_react.useMemo)(() => rankSystems(systems, processes), [systems, processes]);
	const max = ranked[0]?.exposure ?? 0;
	const valued = processes.filter((process) => weightedDailyCost(process) != null).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: "Business impact",
			title: "Quali sistemi pesano di più",
			lede: "Il costo ponderato di un processo è l'euro al giorno moltiplicato per la probabilità: 2,5%, 13%, 28%, 45,5% o 78%, le fasce del registro. Ogni sistema somma i processi che lo usano, per intero: se il processo si ferma, il costo non si divide."
		}),
		valued === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 rounded-lg border border-dashed border-line px-4 py-4 text-sm text-ink-soft",
			children: "Manca ancora un processo con probabilità e euro al giorno. Nell'inventario alcuni asset stimano già 60.000 euro al giorno di perdita: va riportato sul processo, non sull'asset."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
				onClick: () => {
					const ids = ranked.filter((row) => row.exposure > 0).map((row) => row.system.id);
					if (ids.length === 0) {
						setMessage("Nessun sistema ha ancora un costo. Compila almeno un processo con probabilità ed euro al giorno.");
						return;
					}
					const error = setAnalysisIds(ids);
					setMessage(error ?? `${ids.length} sistemi portati in valutazione. Gli altri restano nel catalogo, ma non si compilano.`);
				},
				children: "Porta in valutazione chi ha un costo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/valuta",
				search: {
					scheda: "",
					modo: "guida",
					rischio: 0
				},
				className: "inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-card px-3 text-sm font-semibold",
				children: "Apri la valutazione"
			})]
		}),
		message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 text-sm",
			children: message
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-3",
			children: ranked.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg border border-line bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-copper uppercase",
							children: index + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-xl",
							children: [
								row.system.code,
								" · ",
								row.system.name
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-ink-soft",
							children: [
								formatEuro(row.exposure),
								" al giorno ponderati · ",
								row.processCount,
								" processi · ",
								Math.round(row.share * 100),
								"% dell'esposizione"
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: row.system.inAnalysis,
							onChange: (event) => {
								const error = setSystemInAnalysis(row.system.id, event.target.checked);
								setMessage(error ?? "");
							}
						}), "In analisi"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-2 overflow-hidden rounded-full bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-copper",
						style: { width: max > 0 ? `${Math.max(4, row.exposure / max * 100)}%` : "0%" }
					})
				})]
			}, row.system.id))
		})
	] });
}
var SplitComponent = function BiaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiaView, {}) });
};
//#endregion
export { SplitComponent as component };
