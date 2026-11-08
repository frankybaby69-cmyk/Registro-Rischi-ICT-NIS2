import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, T as seed, _ as groupByCategory, a as Shell, d as controlById, h as fmt, i as PROBABILITY, m as evaluate, n as IMPACT, o as buildRows, s as categoryShort, t as EFFECTIVENESS } from "./shell-DaXPN17E.mjs";
import { d as TextInput, i as Pill, l as SelectInput, n as Field, t as Choice, u as TextArea } from "./ui-lxghbhEL.mjs";
import { n as Route } from "./router-Dv8ltZbi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/valuta-ClJ4Es-B.js
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
function RiskForm({ risk, input, threshold, onChange }) {
	const evaluation = evaluate(input, threshold);
	const applicable = input.applicable === true;
	const [wantAction, setWantAction] = (0, import_react.useState)(false);
	const [picker, setPicker] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [edit, setEdit] = (0, import_react.useState)(null);
	const matches = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return seed.controls;
		return seed.controls.filter((control) => `${control.id} ${control.family} ${control.title}`.toLowerCase().includes(q));
	}, [query]);
	const complete = applicable && Boolean(input.probability && input.impact && input.effectiveness);
	const pending = input.applicable == null ? "apply" : !input.probability ? "prob" : !input.impact ? "impact" : "effect";
	const show = edit ?? (input.applicable === false ? "na" : complete ? "done" : pending);
	function pick(patch) {
		onChange(patch);
		setEdit(null);
	}
	function toggleControl(id) {
		const controlIds = input.controlIds.includes(id) ? input.controlIds.filter((item) => item !== id) : [...input.controlIds, id];
		const first = controlById.get(controlIds[0] ?? "");
		onChange({
			controlIds,
			controlFamily: first?.family ?? input.controlFamily,
			controlMeasure: controlIds.length ? first?.title ?? input.controlMeasure : input.controlMeasure
		});
	}
	const probLabel = PROBABILITY.find((item) => item.v === input.probability);
	const impactLabel = IMPACT.find((item) => item.v === input.impact);
	const effectLabel = EFFECTIVENESS.find((item) => item.id === input.effectiveness);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold tracking-widest text-copper uppercase",
					children: [
						"Rischio ",
						risk.id,
						" · ",
						categoryShort(risk.category)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-serif text-2xl",
					children: risk.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: risk.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "mt-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "cursor-pointer font-semibold text-ink",
						children: "Esempi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whitespace-pre-wrap text-ink-soft",
						children: risk.examples
					})]
				})
			] }),
			input.applicable != null && show !== "apply" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1 border-b border-line pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerLine, {
						label: "Si applica",
						value: input.applicable ? "Sì" : "No",
						onEdit: () => setEdit("apply")
					}),
					input.probability && show !== "prob" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerLine, {
						label: "Probabilità",
						value: `${probLabel?.v} · ${probLabel?.label}`,
						onEdit: () => setEdit("prob")
					}) : null,
					input.impact && show !== "impact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerLine, {
						label: "Impatto",
						value: `${impactLabel?.v} · ${impactLabel?.label}`,
						onEdit: () => setEdit("impact")
					}) : null,
					input.effectiveness && show === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerLine, {
						label: "Presidio",
						value: effectLabel?.label ?? input.effectiveness,
						onEdit: () => setEdit("effect")
					}) : null
				]
			}) : null,
			show === "apply" || show === "na" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-sm font-semibold",
					children: "Si applica a questa scheda?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						pressed: input.applicable === true,
						title: "Sì",
						onClick: () => pick({ applicable: true })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						pressed: input.applicable === false,
						title: "No",
						onClick: () => pick({ applicable: false })
					})]
				}),
				input.applicable === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Non entra nel calcolo. I dati già inseriti restano se lo riattivi."
				}) : null
			] }) : null,
			show === "prob" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm font-semibold",
				children: "Quanto è probabile?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
				children: PROBABILITY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					pressed: input.probability === item.v,
					title: `${item.v} · ${item.label}`,
					hint: item.hint,
					onClick: () => pick({ probability: item.v })
				}, item.v))
			})] }) : null,
			show === "impact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm font-semibold",
				children: "Che impatto avrebbe in un anno?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
				children: IMPACT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					pressed: input.impact === item.v,
					title: `${item.v} · ${item.label}`,
					hint: item.hint,
					onClick: () => pick({ impact: item.v })
				}, item.v))
			})] }) : null,
			show === "effect" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm font-semibold",
				children: "Il presidio attuale quanto regge?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: EFFECTIVENESS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					pressed: input.effectiveness === item.id,
					title: item.label,
					hint: item.hint,
					onClick: () => pick({ effectiveness: item.id })
				}, item.id))
			})] }) : null,
			show === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: `rounded-lg border p-4 ${evaluation.needsAction ? "border-copper bg-copper-soft" : "border-line bg-paper"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-wide text-muted uppercase",
							children: "Rischio residuo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-4xl tabular-nums",
							children: fmt(evaluation.residual)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: evaluation.needsAction ? "Alto" : evaluation.residualJudgment,
								children: evaluation.needsAction ? "sopra soglia" : evaluation.residualJudgment ?? "in soglia"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								"Potenziale ",
								fmt(evaluation.potential),
								evaluation.delta == null ? "" : evaluation.delta === 0 ? ", il presidio non lo riduce" : `, il presidio toglie ${String(Math.abs(evaluation.delta)).replace(".", ",")}`,
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-sm font-semibold",
					children: "Cosa viene colpito?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cia, {
							label: "Riservatezza",
							value: input.confidentiality,
							onChange: (confidentiality) => onChange({ confidentiality })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cia, {
							label: "Integrità",
							value: input.integrity,
							onChange: (integrity) => onChange({ integrity })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cia, {
							label: "Disponibilità",
							value: input.availability,
							onChange: (availability) => onChange({ availability })
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlBlock, {
					input,
					picker,
					query,
					matches,
					onChange,
					onToggle: toggleControl,
					onPicker: () => setPicker((value) => !value),
					onQuery: setQuery
				}),
				evaluation.needsAction || wantAction || input.action.trim() || input.actionDetail.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: `rounded-lg border p-3 md:p-4 ${evaluation.needsAction ? "border-copper bg-copper-soft" : "border-line bg-card"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: evaluation.needsAction ? "Serve un intervento" : "Intervento"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Cosa fare",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: input.action,
									onChange: (event) => onChange({ action: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Dettaglio",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									value: input.actionDetail,
									onChange: (event) => onChange({ actionDetail: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Priorità",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Selectish, {
											value: input.priority,
											options: PRIORITIES,
											onChange: (priority) => onChange({ priority })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Responsabile",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: input.owner,
											onChange: (event) => onChange({ owner: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Scadenza",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											type: "date",
											value: input.due,
											onChange: (event) => onChange({ due: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Stato",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Selectish, {
											value: input.status,
											options: STATUSES,
											onChange: (status) => onChange({ status })
										})
									})
								]
							})
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "self-start text-sm font-semibold text-copper",
					onClick: () => setWantAction(true),
					children: "Aggiungi un intervento"
				})
			] }) : null
		]
	});
}
function AnswerLine({ label, value, onEdit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onEdit,
		className: "flex min-h-11 items-center justify-between gap-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-semibold",
			children: value
		})]
	});
}
function ControlBlock({ input, picker, query, matches, onChange, onToggle, onPicker, onQuery }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "rounded-lg border border-line bg-paper p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
			className: "cursor-pointer text-sm font-semibold",
			children: ["Presidio: ", input.controlFamily || input.controlMeasure || "non indicato"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Famiglia",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: input.controlFamily,
						onChange: (event) => onChange({ controlFamily: event.target.value })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Misura",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: input.controlMeasure,
						onChange: (event) => onChange({ controlMeasure: event.target.value })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Note",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						value: input.controlNotes,
						onChange: (event) => onChange({ controlNotes: event.target.value })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "self-start text-sm font-semibold text-copper",
					onClick: onPicker,
					children: picker ? "Chiudi catalogo" : "Scegli dal catalogo CIS"
				}),
				input.controlIds.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-2",
					children: input.controlIds.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onToggle(id),
						className: "rounded-full bg-card px-2.5 py-1 text-xs font-semibold",
						children: [id, " ×"]
					}) }, id))
				}) : null,
				picker ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: query,
					placeholder: "Cerca, es. backup o MFA",
					onChange: (event) => onQuery(event.target.value)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 max-h-60 overflow-auto",
					children: matches.slice(0, 30).map((control) => {
						const on = input.controlIds.includes(control.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => onToggle(control.id),
							className: `flex w-full gap-3 border-b border-line px-1 py-2 text-left text-sm ${on ? "bg-copper-soft" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-12 shrink-0 font-semibold tabular-nums",
								children: control.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: control.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: control.family
							})] })]
						}) }, control.id);
					})
				})] }) : null
			]
		})]
	});
}
function Selectish({ value, options, onChange }) {
	const extra = value && !options.includes(value) ? [value] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		value,
		onChange: (event) => onChange(event.target.value),
		className: "min-h-11 w-full rounded-md border border-line bg-card px-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: "—"
		}), [...extra, ...options].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option,
			children: option
		}, option))]
	});
}
function Cia({ label, value, onChange }) {
	const on = value === true;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": on,
		onClick: () => onChange(value !== true),
		className: `min-h-11 rounded-md border px-2 text-sm font-semibold ${on ? "border-copper bg-copper-soft" : value === false ? "border-line bg-na text-na-fg" : "border-line bg-card"}`,
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block text-xs font-medium",
			children: value == null ? "Non indicato" : on ? "Sì" : "No"
		})]
	});
}
function AssessView({ search }) {
	const navigate = useNavigate();
	const perimeters = useRiskStore((s) => s.perimeters);
	const answers = useRiskStore((s) => s.answers);
	const threshold = useRiskStore((s) => s.threshold);
	const patchAnswer = useRiskStore((s) => s.patchAnswer);
	const scheda = perimeters.some((item) => item.id === search.scheda) ? search.scheda : perimeters[0]?.id ?? "";
	const [filter, setFilter] = (0, import_react.useState)("tutti");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)(search.rischio || 0);
	const rows = (0, import_react.useMemo)(() => buildRows({
		perimeters,
		answers,
		threshold
	}).filter((row) => row.perimeter.id === scheda), [
		perimeters,
		answers,
		threshold,
		scheda
	]);
	(0, import_react.useEffect)(() => {
		if (search.rischio) setOpenId(search.rischio);
	}, [search.rischio, scheda]);
	function go(next) {
		navigate({
			to: "/valuta",
			search: {
				scheda,
				rischio: search.rischio,
				modo: search.modo,
				...next
			}
		});
	}
	const filtered = rows.map((row, index) => ({
		row,
		index
	})).filter(({ row }) => {
		const text = `${row.risk.name} ${row.risk.category} ${row.input.action} ${row.input.controlNotes}`.toLowerCase();
		if (query && !text.includes(query.trim().toLowerCase())) return false;
		if (filter === "mancanti") return row.input.applicable === true && row.evaluation.status !== "ok";
		if (filter === "soglia") return row.evaluation.needsAction;
		if (filter === "na") return row.input.applicable === false;
		if (filter === "azioni") return row.input.action.trim().length > 0;
		return true;
	});
	const guideIndex = Math.max(0, rows.findIndex((row) => row.risk.id === (search.rischio || rows[0]?.risk.id)));
	const current = rows[guideIndex] ?? rows[0];
	const decided = rows.filter((row) => row.input.applicable === false || row.evaluation.status === "ok").length;
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Nessuna scheda. Creane una dal perimetro."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl font-semibold",
				children: "Compila"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-ink-soft",
				children: [
					decided,
					" di ",
					rows.length,
					" già decisi su questa scheda."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-2 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
					"aria-label": "Scheda",
					value: scheda,
					onChange: (event) => go({
						scheda: event.target.value,
						rischio: 0
					}),
					className: "sm:max-w-xs",
					children: perimeters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.id,
						children: item.name
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 text-left text-sm font-semibold text-copper",
					onClick: () => go({
						modo: search.modo === "guida" ? "elenco" : "guida",
						rischio: current.risk.id
					}),
					children: search.modo === "guida" ? "Apri l'elenco" : "Torna alla guida"
				})]
			})
		]
	}), search.modo === "guida" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: guideIndex <= 0,
					className: "min-h-11 flex-1 rounded-md border border-line bg-card text-sm font-semibold disabled:opacity-40",
					onClick: () => go({ rischio: rows[guideIndex - 1].risk.id }),
					children: "Indietro"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "shrink-0 text-sm font-semibold tabular-nums",
					children: [
						guideIndex + 1,
						"/",
						rows.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: guideIndex >= rows.length - 1,
					className: "min-h-11 flex-1 rounded-md bg-copper text-sm font-semibold text-copper-ink disabled:opacity-40",
					onClick: () => go({ rischio: rows[guideIndex + 1].risk.id }),
					children: "Avanti"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "rounded-lg border border-line bg-card p-4 md:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskForm, {
				risk: current.risk,
				input: current.input,
				threshold,
				onChange: (patch) => patchAnswer(scheda, current.risk.id, patch)
			})
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: query,
					placeholder: "Cerca rischio, nota, azione",
					onChange: (event) => setQuery(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: filter === "tutti",
						onClick: () => setFilter("tutti"),
						children: "Tutti"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: filter === "mancanti",
						onClick: () => setFilter("mancanti"),
						children: "Da compilare"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: filter === "soglia",
						onClick: () => setFilter("soglia"),
						children: "Sopra soglia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: filter === "azioni",
						onClick: () => setFilter("azioni"),
						children: "Con azione"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: filter === "na",
						onClick: () => setFilter("na"),
						children: "Non applicabili"
					})
				]
			}),
			groupByCategory(seed.risks).map((group) => {
				const items = filtered.filter(({ row }) => row.risk.category === group.category);
				if (!items.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-xs font-semibold tracking-widest text-muted uppercase",
					children: categoryShort(group.category)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2",
					children: items.map(({ row }) => {
						const open = openId === row.risk.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-line bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex w-full items-start gap-3 px-3 py-3 text-left",
								"aria-expanded": open,
								onClick: () => setOpenId(open ? 0 : row.risk.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 w-6 shrink-0 text-sm font-semibold text-muted tabular-nums",
									children: row.risk.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: row.risk.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 flex flex-wrap gap-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowStatus, { row })
									})]
								})]
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-line px-3 py-4 md:px-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskForm, {
									risk: row.risk,
									input: row.input,
									threshold,
									onChange: (patch) => patchAnswer(scheda, row.risk.id, patch)
								})
							}) : null]
						}, row.risk.id);
					})
				})] }, group.category);
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nessun rischio con questo filtro."
			}) : null
		]
	})] });
}
function RowStatus({ row }) {
	if (row.input.applicable == null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "Da decidere" });
	if (row.input.applicable === false) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "Non applicabile" });
	if (row.evaluation.status !== "ok") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
		tone: "alert",
		children: "Da compilare"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
		tone: row.evaluation.residualJudgment,
		children: [
			fmt(row.evaluation.residual),
			" ",
			row.evaluation.residualJudgment
		]
	}), row.evaluation.needsAction ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
		tone: "alert",
		children: "sopra soglia"
	}) : null] });
}
function Chip({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: `shrink-0 rounded-full px-3 py-2 text-sm font-semibold ${on ? "bg-ink text-rail-fg" : "border border-line bg-card"}`,
		children
	});
}
var SplitComponent = function ValutaPage() {
	const search = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessView, { search }) });
};
//#endregion
export { SplitComponent as component };
