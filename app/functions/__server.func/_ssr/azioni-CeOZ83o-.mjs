import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, a as Shell, h as fmt, o as buildRows, s as categoryShort, v as isOpenAction } from "./shell-DaXPN17E.mjs";
import { d as TextInput, i as Pill, l as SelectInput, n as Field, r as PageTitle, u as TextArea } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/azioni-CeOZ83o-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRIORITIES = [
	"Bassa",
	"Media",
	"Alta"
];
var STATUSES = [
	"Da avviare",
	"In corso",
	"Completata",
	"Accettato"
];
function ActionsView() {
	const perimeters = useRiskStore((s) => s.perimeters);
	const answers = useRiskStore((s) => s.answers);
	const threshold = useRiskStore((s) => s.threshold);
	const patchAnswer = useRiskStore((s) => s.patchAnswer);
	const [scheda, setScheda] = (0, import_react.useState)("");
	const [onlyHot, setOnlyHot] = (0, import_react.useState)(false);
	const visible = (0, import_react.useMemo)(() => buildRows({
		perimeters,
		answers,
		threshold
	}), [
		perimeters,
		answers,
		threshold
	]).filter((row) => row.evaluation.needsAction || row.input.action.trim() || row.input.actionDetail.trim()).filter((row) => scheda ? row.perimeter.id === scheda : true).filter((row) => onlyHot ? row.evaluation.needsAction : true).sort((a, b) => Number(b.evaluation.needsAction) - Number(a.evaluation.needsAction) || (b.evaluation.residual ?? 0) - (a.evaluation.residual ?? 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: `Soglia: fino a ${threshold}`,
			title: "Azioni",
			lede: "I rischi sopra la soglia, e quelli per cui hai già scritto un intervento."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
					"aria-label": "Filtra scheda",
					value: scheda,
					onChange: (event) => setScheda(event.target.value),
					className: "sm:max-w-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Tutte le schede"
					}), perimeters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.id,
						children: item.name
					}, item.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": onlyHot,
					onClick: () => setOnlyHot((v) => !v),
					className: `min-h-11 rounded-md px-3 text-sm font-semibold ${onlyHot ? "bg-ink text-rail-fg" : "border border-line bg-card"}`,
					children: "Solo sopra soglia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						visible.filter(isOpenAction).length,
						" aperte · ",
						visible.length,
						" in elenco"
					]
				})
			]
		}),
		visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "rounded-lg border border-line bg-card p-4 text-sm text-muted",
			children: [
				"Nessuna azione. Se un residuo supera ",
				threshold,
				", comparirà qui da solo."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: visible.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: `rounded-lg border bg-card p-4 ${row.evaluation.needsAction && !row.input.action.trim() ? "border-copper" : "border-line"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold tracking-wide text-muted uppercase",
							children: [
								row.perimeter.name,
								" · ",
								categoryShort(row.risk.category),
								" · #",
								row.risk.id
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl",
							children: row.risk.name
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
									tone: row.evaluation.residualJudgment,
									children: [
										fmt(row.evaluation.residual),
										" ",
										row.evaluation.residualJudgment ?? "incompleto"
									]
								}),
								row.evaluation.needsAction ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									tone: "alert",
									children: "sopra soglia"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									tone: "Basso",
									children: "entro soglia"
								}),
								isOpenAction(row) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "aperta" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									tone: "Basso",
									children: "chiusa"
								})
							]
						})]
					}),
					row.evaluation.needsAction && !row.input.action.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-semibold text-copper",
						children: "Manca l'azione di contenimento."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Azione",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: row.input.action,
									onChange: (event) => patchAnswer(row.perimeter.id, row.risk.id, { action: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Descrizione",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									value: row.input.actionDetail,
									onChange: (event) => patchAnswer(row.perimeter.id, row.risk.id, { actionDetail: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Priorità",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
											value: row.input.priority,
											onChange: (event) => patchAnswer(row.perimeter.id, row.risk.id, { priority: event.target.value }),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "—"
											}), PRIORITIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Responsabile",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: row.input.owner,
											onChange: (event) => patchAnswer(row.perimeter.id, row.risk.id, { owner: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Scadenza",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											type: "date",
											value: row.input.due,
											onChange: (event) => patchAnswer(row.perimeter.id, row.risk.id, { due: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Stato",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
											value: row.input.status,
											onChange: (event) => patchAnswer(row.perimeter.id, row.risk.id, { status: event.target.value }),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "—"
											}), STATUSES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/valuta",
						search: {
							scheda: row.perimeter.id,
							modo: "elenco",
							rischio: row.risk.id
						},
						className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-copper",
						children: "Apri la valutazione"
					})
				]
			}, `${row.perimeter.id}-${row.risk.id}`))
		})
	] });
}
var SplitComponent = function AzioniPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionsView, {}) });
};
//#endregion
export { SplitComponent as component };
