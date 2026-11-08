import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, a as Shell, f as downloadSynthesis, o as buildRows } from "./shell-DaXPN17E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BDUAM9lE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const state = useRiskStore();
	const rows = buildRows(state);
	const applicable = rows.filter((row) => row.input.applicable === true);
	const complete = applicable.filter((row) => row.evaluation.status === "ok");
	const over = rows.filter((row) => row.evaluation.needsAction);
	const next = rows.find((row) => row.input.applicable !== false && row.evaluation.status !== "ok") ?? rows[0];
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl font-semibold tracking-tight",
					children: "Riepilogo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: [
						complete.length,
						" valutazioni chiuse",
						applicable.length ? ` su ${applicable.length} applicabili` : "",
						". La bozza si salva da sola: usa Salva per fissare una copia."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm",
					children: [
						"I sistemi da compilare si scelgono nella ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bia",
							className: "font-semibold text-copper",
							children: "BIA"
						}),
						", dopo aver descritto processi e sistemi."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/valuta",
				search: {
					scheda: next?.perimeter.id ?? "",
					modo: "guida",
					rischio: next?.risk.id ?? 0
				},
				className: "inline-flex min-h-11 items-center justify-center rounded-md bg-copper px-5 text-sm font-semibold text-copper-ink",
				children: complete.length === 0 ? "Inizia a compilare" : "Continua a compilare"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-card px-5 text-sm font-semibold disabled:opacity-60",
				disabled: busy,
				onClick: () => {
					setBusy(true);
					setNote("");
					downloadSynthesis(useRiskStore.getState()).then(() => setNote("Sintesi aggiornata e scaricata.")).catch(() => setNote("La sintesi non è stata generata. Riprova.")).finally(() => setBusy(false));
				},
				children: busy ? "Aggiorno la sintesi…" : "Scarica la sintesi PowerPoint"
			})]
		}),
		note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-ink-soft",
			children: note
		}) : null,
		over.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/azioni",
				className: "font-semibold text-copper",
				children: [
					over.length,
					" ",
					over.length === 1 ? "rischio supera" : "rischi superano",
					" la soglia"
				]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 divide-y divide-line rounded-lg border border-line bg-card",
			children: state.perimeters.map((perimeter) => {
				const own = rows.filter((row) => row.perimeter.id === perimeter.id);
				const apps = own.filter((row) => row.input.applicable === true);
				const done = apps.filter((row) => row.evaluation.status === "ok").length;
				const gap = own.find((row) => row.input.applicable !== false && row.evaluation.status !== "ok");
				const pct = apps.length ? Math.round(done / apps.length * 100) : 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/valuta",
					search: {
						scheda: perimeter.id,
						modo: "guida",
						rischio: gap?.risk.id ?? own[0]?.risk.id ?? 0
					},
					className: "block px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: perimeter.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted tabular-nums",
							children: [
								done,
								"/",
								apps.length || own.length
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block h-1.5 overflow-hidden rounded-full bg-na",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block h-full bg-ink",
							style: { width: `${pct}%` }
						})
					})]
				}) }, perimeter.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold",
			"aria-label": "Altre sezioni",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/perimetro",
					className: "text-copper",
					children: "Asset e schede"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/metodo",
					className: "text-copper",
					children: "Come si calcola"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/report",
					className: "text-copper",
					children: "Report"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/archivio",
					className: "text-copper",
					children: "Aziende"
				})
			]
		})
	] });
}
var SplitComponent = function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}) });
};
//#endregion
export { SplitComponent as component };
