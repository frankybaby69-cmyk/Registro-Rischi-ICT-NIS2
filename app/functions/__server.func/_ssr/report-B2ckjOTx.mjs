import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, T as seed, a as Shell, h as fmt, o as buildRows, r as JUDGMENTS, s as categoryShort, v as isOpenAction } from "./shell-DaXPN17E.mjs";
import { a as PrimaryButton, c as RTO_TIP, i as Pill, r as PageTitle, s as RPO_TIP } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-B2ckjOTx.js
var import_jsx_runtime = require_jsx_runtime();
function inHours(value) {
	const trimmed = value.trim();
	if (/ore/i.test(trimmed)) return trimmed;
	return `${trimmed.replace(/h$/i, "").trim()} ore`;
}
function ReportView() {
	const state = useRiskStore();
	const rows = buildRows(state);
	const applicable = rows.filter((row) => row.input.applicable === true);
	const complete = applicable.filter((row) => row.evaluation.status === "ok");
	const over = rows.filter((row) => row.evaluation.needsAction);
	const actions = rows.filter((row) => isOpenAction(row) || row.input.action.trim());
	const inScope = state.assets.filter((asset) => asset.inScope);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "no-print mb-4 flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
				onClick: () => window.print(),
				children: "Stampa o salva PDF"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: state.company,
			title: "Report di analisi dei rischi ICT",
			lede: `${seed.document}. Soglia di accettazione: fino a ${state.threshold}. Aggiornato ${state.updatedAt ? new Date(state.updatedAt).toLocaleString("it-IT") : "dai dati importati"}.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
					label: "Asset in perimetro",
					value: String(inScope.length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
					label: "Valutazioni complete",
					value: `${complete.length}/${applicable.length}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
					label: "Residui sopra soglia",
					value: String(over.length)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Distribuzione del residuo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-wrap gap-2",
				children: JUDGMENTS.map((judgment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
					tone: judgment,
					children: [
						judgment,
						": ",
						rows.filter((row) => row.evaluation.residualJudgment === judgment).length
					]
				}) }, judgment))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Perimetro"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 divide-y divide-line rounded-lg border border-line bg-card",
				children: inScope.map((asset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 px-3 py-2 text-sm sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: asset.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: state.perimeters.find((item) => item.id === asset.perimeterId)?.name || "Senza scheda" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: asset.area || "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							asset.rto ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("abbr", {
								title: RTO_TIP,
								children: ["RTO ", inHours(asset.rto)]
							}) : "RTO non indicato",
							asset.rpo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("abbr", {
								title: RPO_TIP,
								children: ["RPO ", inHours(asset.rpo)]
							})] }) : null,
							asset.owner ? ` · ${asset.owner}` : ""
						] })
					]
				}, asset.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Rischi sopra soglia e azioni"
				}),
				actions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Nessun elemento da riportare."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid gap-3",
					children: actions.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line bg-card p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold tracking-wide text-muted uppercase",
								children: [
									row.perimeter.name,
									" · ",
									categoryShort(row.risk.category)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: [
									row.risk.id,
									". ",
									row.risk.name
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm",
								children: [
									"Residuo ",
									fmt(row.evaluation.residual),
									" ",
									row.evaluation.residualJudgment ?? "non calcolato",
									row.evaluation.needsAction ? " · sopra soglia" : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: row.input.action || "Azione non ancora definita."
							}),
							row.input.actionDetail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: row.input.actionDetail
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									row.input.priority && `Priorità ${row.input.priority}`,
									row.input.owner,
									row.input.due,
									row.input.status
								].filter(Boolean).join(" · ") || "Owner e scadenza da assegnare"
							})
						]
					}, `${row.perimeter.id}-${row.risk.id}`))
				})
			]
		})
	] });
}
function Box({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-serif text-3xl tabular-nums",
			children: value
		})]
	});
}
var SplitComponent = function ReportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportView, {}) });
};
//#endregion
export { SplitComponent as component };
