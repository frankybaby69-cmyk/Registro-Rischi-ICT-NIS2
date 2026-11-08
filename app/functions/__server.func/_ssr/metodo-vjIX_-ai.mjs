import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, T as seed, a as Shell, b as matrixJudgment, i as PROBABILITY, n as IMPACT, r as JUDGMENTS, t as EFFECTIVENESS } from "./shell-DaXPN17E.mjs";
import { d as TextInput, f as judgmentClass, r as PageTitle } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metodo-vjIX_-ai.js
var import_jsx_runtime = require_jsx_runtime();
function MethodView() {
	const threshold = useRiskStore((s) => s.threshold);
	const setThreshold = useRiskStore((s) => s.setThreshold);
	const company = useRiskStore((s) => s.company);
	const setCompany = useRiskStore((s) => s.setCompany);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: "EBA · CIS Controls v8.1",
			title: "Come si calcola",
			lede: "Stessa metodologia del file: rischio potenziale da probabilità e impatto, residuo dopo l'efficacia del presidio."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-lg border border-line bg-card p-4 md:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Formula"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: "Score potenziale = 1 + (√(P × I) − 1) × 0,75. Porta la scala 1–5 sull'intervallo 1–4 del registro. Il giudizio potenziale non usa questo numero: usa la matrice qui sotto, come il VLOOKUP del foglio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: "Residuo = max(1, score potenziale + delta del presidio). Il giudizio residuo segue le fasce: fino a 1,90 Basso, fino a 2,40 Medio Basso, fino a 2,90 Medio Alto, oltre Alto."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4 rounded-lg border border-line bg-card p-4 md:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Soglia di accettazione"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Un rischio va trattato quando il giudizio residuo è più alto di questa soglia."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-2 gap-2 md:grid-cols-4",
					children: JUDGMENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": threshold === item,
						onClick: () => setThreshold(item),
						className: `min-h-11 rounded-md border px-2 text-sm font-semibold ${threshold === item ? "border-copper bg-copper-soft" : "border-line bg-paper"}`,
						children: ["Fino a ", item]
					}, item))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				title: "Probabilità",
				items: PROBABILITY.map((item) => `${item.v} · ${item.label} — ${item.hint}`)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				title: "Impatto monetario annuo",
				items: IMPACT.map((item) => `${item.v} · ${item.label} — ${item.hint}`)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4 overflow-x-auto rounded-lg border border-line bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Matrice probabilità × impatto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "mt-3 w-full min-w-[36rem] border-separate border-spacing-1 text-center text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "p-2 text-left text-xs font-semibold tracking-wide text-muted uppercase",
					children: "P \\ I"
				}), [
					1,
					2,
					3,
					4,
					5
				].map((impact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "p-2 text-xs font-semibold text-muted",
					children: impact
				}, impact))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					1,
					2,
					3,
					4,
					5
				].map((probability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "p-2 text-left text-xs font-semibold text-muted",
					children: probability
				}), [
					1,
					2,
					3,
					4,
					5
				].map((impact) => {
					const judgment = matrixJudgment(probability, impact);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: `rounded-md px-2 py-3 text-xs font-semibold ${judgmentClass(judgment)}`,
						children: judgment
					}, impact);
				})] }, probability)) })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4 rounded-lg border border-line bg-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Efficacia dei presidi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2 md:grid-cols-5",
					children: EFFECTIVENESS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-paper p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-serif text-2xl tabular-nums",
								children: String(item.delta).replace(".", ",")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: item.hint
							})
						]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "I controlli si scelgono dal catalogo CIS Critical Security Controls v8.1, già presente nel file."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4 rounded-lg border border-line bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Intestazione del registro"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block text-sm font-semibold",
				children: ["Società", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					className: "mt-1 font-normal",
					value: company,
					onChange: (event) => setCompany(event.target.value)
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "mt-4 rounded-lg border border-line bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
				className: "cursor-pointer font-serif text-2xl",
				children: "Approccio metodologico del documento"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl whitespace-pre-wrap text-sm text-ink-soft",
				children: seed.approach
			})]
		})
	] });
}
function Scale({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-2xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2 text-sm",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-b border-line pb-2 last:border-0",
				children: item
			}, item))
		})]
	});
}
var SplitComponent = function MetodoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodView, {}) });
};
//#endregion
export { SplitComponent as component };
