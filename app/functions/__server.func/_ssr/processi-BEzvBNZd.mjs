import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, a as Shell, i as PROBABILITY, n as IMPACT, p as downloadText, x as parseEuro } from "./shell-DaXPN17E.mjs";
import { a as PrimaryButton, c as RTO_TIP, d as TextInput, l as SelectInput, n as Field, o as QuietButton, r as PageTitle, s as RPO_TIP, u as TextArea } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/processi-BEzvBNZd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HEADER = {
	codice: "code",
	code: "code",
	descrizione: "description",
	description: "description",
	processo: "description",
	owner: "owner",
	responsabile: "owner",
	sistemi: "systems",
	sistema: "systems",
	systems: "systems",
	rto: "rto",
	rpo: "rpo",
	note: "notes",
	notes: "notes",
	probabilita: "probability",
	probabilità: "probability",
	probability: "probability",
	impatto: "impact",
	impact: "impact",
	euro: "euroPerDay",
	eurogiorno: "euroPerDay",
	euro_giorno: "euroPerDay",
	costo: "euroPerDay",
	costogiornaliero: "euroPerDay"
};
function headerKey(value) {
	const key = value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "");
	if (key.includes("euro") || key.includes("giorno") || key.includes("disserv")) return "euroPerDay";
	if (key.startsWith("rto")) return "rto";
	if (key.startsWith("rpo")) return "rpo";
	return HEADER[key] ?? HEADER[value.trim().toLowerCase()] ?? null;
}
function score(value) {
	const n = Number(String(value).replace(",", ".").trim());
	return n >= 1 && n <= 5 ? Math.round(n) : null;
}
function rowsToProcesses(records) {
	return records.flatMap((record) => {
		const mapped = {};
		for (const [key, value] of Object.entries(record)) {
			const field = headerKey(key);
			if (!field || field === "systemIds") continue;
			if (field === "systems") mapped.systems = value;
			else if (field === "probability") mapped.probability = score(value);
			else if (field === "impact") mapped.impact = score(value);
			else if (field === "euroPerDay") mapped.euroPerDay = parseEuro(value);
			else if (field === "code") mapped.code = value.trim();
			else if (field === "description") mapped.description = value.trim();
			else if (field === "owner") mapped.owner = value.trim();
			else if (field === "rto") mapped.rto = value.trim();
			else if (field === "rpo") mapped.rpo = value.trim();
			else if (field === "notes") mapped.notes = value.trim();
		}
		if (!mapped.code?.trim()) return [];
		const { systems, code, ...rest } = mapped;
		return [{
			...rest,
			code: code.trim().toUpperCase(),
			systemIds: (systems ?? "").split(/[;,|]/).map((item) => item.trim()).filter(Boolean)
		}];
	});
}
async function readProcessFile(file) {
	const XLSX = await import("../_libs/xlsx.mjs").then((n) => n.t);
	const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
	const sheet = workbook.Sheets[workbook.SheetNames[0]];
	return rowsToProcesses(XLSX.utils.sheet_to_json(sheet, {
		defval: "",
		raw: false
	}));
}
var PROCESS_TEMPLATE = ["codice;descrizione;owner;sistemi;rto_ore;rpo_ore;note;probabilita;impatto;euro_giorno", "PRC-01;Amministrazione e fatturazione;AMM;SIS-01;4;24;;2;4;60000"].join("\n");
function ProcessesView() {
	const processes = useRiskStore((s) => s.processes);
	const systems = useRiskStore((s) => s.systems);
	const addProcess = useRiskStore((s) => s.addProcess);
	const patchProcess = useRiskStore((s) => s.patchProcess);
	const removeProcess = useRiskStore((s) => s.removeProcess);
	const importProcesses = useRiskStore((s) => s.importProcesses);
	const [open, setOpen] = (0, import_react.useState)(null);
	const [message, setMessage] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: "Processi",
			title: "Cosa fa l'azienda",
			lede: "Un processo ha un codice solo suo. I sistemi si scelgono dall'elenco, non si riscrivono. RTO e RPO sono in ore. Excel e CSV usano le colonne codice, descrizione, owner, sistemi, rto_ore, rpo_ore, note, probabilita, impatto, euro_giorno."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => {
						const id = addProcess();
						setOpen(id);
					},
					children: "Nuovo processo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
					onClick: () => downloadText("processi-modello.csv", PROCESS_TEMPLATE, "text/csv;charset=utf-8"),
					children: "Modello CSV"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "inline-flex min-h-11 cursor-pointer items-center rounded-md border border-line bg-card px-3 text-sm font-semibold",
					children: ["Importa Excel o CSV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: ".csv,.xlsx,.xls,text/csv",
						className: "sr-only",
						onChange: async (event) => {
							const file = event.target.files?.[0];
							event.target.value = "";
							if (!file) return;
							try {
								const rows = await readProcessFile(file);
								const result = importProcesses(rows);
								const unknown = result.unknown.length ? ` Sistemi non trovati: ${result.unknown.join(", ")}.` : "";
								setMessage(`${result.added} aggiunti, ${result.updated} aggiornati.${unknown}`);
							} catch {
								setMessage("File non letto. Controlla la prima riga con i nomi delle colonne.");
							}
						}
					})]
				})
			]
		}),
		message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 text-sm text-ink-soft",
			children: message
		}) : null,
		processes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-lg border border-dashed border-line px-4 py-6 text-sm text-ink-soft",
			children: "Nessun processo. Aggiungine uno, oppure importa un foglio. I sistemi vanno scritti con il loro codice, separati da punto e virgola."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: processes.map((process) => {
				const expanded = open === process.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex w-full items-baseline justify-between gap-3 px-4 py-3 text-left",
						onClick: () => setOpen(expanded ? null : process.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: process.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink-soft",
							children: [" · ", process.description || "Senza descrizione"]
						})] })
					}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 border-t border-line px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Codice",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										value: process.code,
										onChange: (event) => patchProcess(process.id, { code: event.target.value.toUpperCase() })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Owner del processo",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										value: process.owner,
										onChange: (event) => patchProcess(process.id, { owner: event.target.value })
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Descrizione",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									value: process.description,
									onChange: (event) => patchProcess(process.id, { description: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "mb-1.5 text-xs font-semibold tracking-wide text-muted uppercase",
								children: "Sistemi usati"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 sm:grid-cols-2",
								children: systems.map((system) => {
									const checked = process.systemIds.includes(system.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex min-h-11 items-center gap-2 rounded-md border border-line px-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked,
											onChange: () => {
												const systemIds = checked ? process.systemIds.filter((id) => id !== system.id) : [...process.systemIds, system.id];
												patchProcess(process.id, { systemIds });
											}
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											system.code,
											" · ",
											system.name
										] })]
									}, system.id);
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "RTO (ore)",
										tip: RTO_TIP,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											placeholder: "es. 4",
											value: process.rto,
											onChange: (event) => patchProcess(process.id, { rto: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "RPO (ore)",
										tip: RPO_TIP,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											placeholder: "es. 24",
											value: process.rpo,
											onChange: (event) => patchProcess(process.id, { rpo: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Probabilità",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
											value: process.probability ?? "",
											onChange: (event) => patchProcess(process.id, { probability: event.target.value ? Number(event.target.value) : null }),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Non indicata"
											}), PROBABILITY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: item.v,
												children: [
													item.v,
													" · ",
													item.label
												]
											}, item.v))]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Impatto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
											value: process.impact ?? "",
											onChange: (event) => patchProcess(process.id, { impact: event.target.value ? Number(event.target.value) : null }),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Non indicato"
											}), IMPACT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: item.v,
												children: [
													item.v,
													" · ",
													item.label
												]
											}, item.v))]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Costo del disservizio",
								hint: "Euro al giorno di fermo del processo. Esempio: 60000 oppure 60.000",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									inputMode: "decimal",
									defaultValue: process.euroPerDay ?? "",
									onBlur: (event) => patchProcess(process.id, { euroPerDay: parseEuro(event.target.value) })
								}, `${process.id}-${process.euroPerDay ?? "x"}`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Note",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									value: process.notes,
									onChange: (event) => patchProcess(process.id, { notes: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
								onClick: () => removeProcess(process.id),
								children: "Elimina processo"
							})
						]
					}) : null]
				}, process.id);
			})
		})
	] });
}
var SplitComponent = function ProcessiPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessesView, {}) });
};
//#endregion
export { SplitComponent as component };
