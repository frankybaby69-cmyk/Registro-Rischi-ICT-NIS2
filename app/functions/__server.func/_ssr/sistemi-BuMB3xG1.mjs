import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, a as Shell, p as downloadText } from "./shell-DaXPN17E.mjs";
import { a as PrimaryButton, d as TextInput, n as Field, o as QuietButton, r as PageTitle } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sistemi-BuMB3xG1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HEADER = {
	codice: "code",
	code: "code",
	codicesistema: "code",
	systemcode: "code",
	descrizione: "name",
	descrizionesistema: "name",
	nome: "name",
	name: "name",
	sistema: "name",
	system: "name",
	owner: "owner",
	responsabile: "owner",
	ownersistema: "owner"
};
function headerKey(value) {
	const key = value.trim().replace(/^\uFEFF/, "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "");
	if (!key) return null;
	if (key.includes("sottosistem") || key.includes("subsystem")) {
		if (key.includes("codice") || key.includes("code")) return "subCode";
		return "subName";
	}
	return HEADER[key] ?? null;
}
function splitNames(value) {
	return value.split(/[;|]/).map((item) => item.trim()).filter(Boolean);
}
function rowsToSystems(records) {
	const order = [];
	const grouped = /* @__PURE__ */ new Map();
	for (const record of records) {
		const fields = {};
		for (const [key, value] of Object.entries(record)) {
			const field = headerKey(key);
			if (field) fields[field] = String(value ?? "").trim();
		}
		const code = fields.code?.trim().toUpperCase() ?? "";
		if (!code) continue;
		let draft = grouped.get(code);
		if (!draft) {
			draft = {
				code,
				name: "",
				owner: "",
				subsystems: [],
				subsystemsProvided: false
			};
			grouped.set(code, draft);
			order.push(code);
		}
		if (fields.name) draft.name = fields.name;
		if (fields.owner) draft.owner = fields.owner;
		const names = splitNames(fields.subName ?? "");
		const subCode = fields.subCode?.trim().toUpperCase() ?? "";
		if (!subCode && names.length === 0) continue;
		draft.subsystemsProvided = true;
		if (subCode && names.length <= 1) draft.subsystems.push({
			code: subCode,
			name: names[0] ?? ""
		});
		else for (const name of names) draft.subsystems.push({
			code: "",
			name
		});
	}
	return order.map((code) => grouped.get(code));
}
async function readSystemFile(file) {
	const XLSX = await import("../_libs/xlsx.mjs").then((n) => n.t);
	const buffer = await file.arrayBuffer();
	const isCsv = file.name.toLowerCase().endsWith(".csv") || file.type.includes("csv");
	let FS;
	if (isCsv) {
		const head = new TextDecoder().decode(buffer.slice(0, 500));
		FS = (head.match(/;/g) ?? []).length > (head.match(/,/g) ?? []).length ? ";" : ",";
	}
	const workbook = XLSX.read(buffer, {
		type: "array",
		FS
	});
	const sheet = workbook.Sheets[workbook.SheetNames[0]];
	if (!sheet) return [];
	return rowsToSystems(XLSX.utils.sheet_to_json(sheet, {
		defval: "",
		raw: false
	}));
}
function cell(value) {
	if (/[;"\n\r]/.test(value)) return `"${value.replace(/"/g, "\"\"")}"`;
	return value;
}
function csv(rows) {
	return `\uFEFF${rows.map((row) => row.map(cell).join(";")).join("\r\n")}`;
}
var TRACE_HEADER = [
	"codice",
	"descrizione",
	"owner",
	"codice_sottosistema",
	"nome_sottosistema"
];
function systemsTrace(systems) {
	return csv([TRACE_HEADER, ...systems.flatMap((system) => {
		if (system.subsystems.length === 0) return [[
			system.code,
			system.name,
			system.owner,
			"",
			""
		]];
		return system.subsystems.map((subsystem) => [
			system.code,
			system.name,
			system.owner,
			subsystem.code,
			subsystem.name
		]);
	})]);
}
var SYSTEM_TEMPLATE = `\uFEFF${[
	TRACE_HEADER.join(";"),
	"SIS-01;ERP gestionale;IT;SIS-01.1;Rete",
	"SIS-01;ERP gestionale;IT;SIS-01.2;Cartelle condivise"
].join("\n")}`;
function SystemsView() {
	const systems = useRiskStore((s) => s.systems);
	const addSystem = useRiskStore((s) => s.addSystem);
	const patchSystem = useRiskStore((s) => s.patchSystem);
	const removeSystem = useRiskStore((s) => s.removeSystem);
	const addSubsystem = useRiskStore((s) => s.addSubsystem);
	const patchSubsystem = useRiskStore((s) => s.patchSubsystem);
	const removeSubsystem = useRiskStore((s) => s.removeSubsystem);
	const importSystems = useRiskStore((s) => s.importSystems);
	const [open, setOpen] = (0, import_react.useState)(systems[0]?.id ?? null);
	const [message, setMessage] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: "Catalogo",
			title: "Sistemi informatici",
			lede: "Ogni sistema ha un codice. I sottosistemi sono le parti che lo compongono, per esempio rete o cartelle condivise. Excel e CSV usano le colonne codice, descrizione, owner, codice_sottosistema, nome_sottosistema: una riga per ogni sottosistema. Lo stesso codice aggiorna il sistema, non lo duplica."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => setOpen(addSystem()),
					children: "Nuovo sistema"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
					onClick: () => downloadText("sistemi-modello.csv", SYSTEM_TEMPLATE, "text/csv;charset=utf-8"),
					children: "Modello CSV"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
					onClick: () => downloadText("sistemi-traccia.csv", systemsTrace(systems), "text/csv;charset=utf-8"),
					children: "Esporta traccia"
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
								const rows = await readSystemFile(file);
								if (rows.length === 0) {
									setMessage("Nessun sistema nel file. La prima riga deve contenere la colonna codice.");
									return;
								}
								const result = importSystems(rows);
								setMessage(`${result.added} aggiunti, ${result.updated} aggiornati.`);
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: systems.map((system) => {
				const expanded = open === system.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
						onClick: () => setOpen(expanded ? null : system.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: system.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink-soft",
							children: [" · ", system.name]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [
								system.subsystems.length,
								" ",
								system.subsystems.length === 1 ? "sottosistema" : "sottosistemi"
							]
						})]
					}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 border-t border-line px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Codice",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: system.code,
											onChange: (event) => patchSystem(system.id, { code: event.target.value.toUpperCase() })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Descrizione",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: system.name,
											onChange: (event) => patchSystem(system.id, { name: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Owner del sistema",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: system.owner,
											onChange: (event) => patchSystem(system.id, { owner: event.target.value })
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2",
								children: system.subsystems.map((subsystem) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[6rem_1fr_auto] gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											"aria-label": "Codice sottosistema",
											value: subsystem.code,
											onChange: (event) => patchSubsystem(system.id, subsystem.id, { code: event.target.value.toUpperCase() })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											"aria-label": "Nome sottosistema",
											value: subsystem.name,
											onChange: (event) => patchSubsystem(system.id, subsystem.id, { name: event.target.value })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
											onClick: () => removeSubsystem(system.id, subsystem.id),
											children: "Togli"
										})
									]
								}, subsystem.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
									onClick: () => addSubsystem(system.id),
									children: "Aggiungi sottosistema"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
									onClick: () => {
										const error = removeSystem(system.id);
										setMessage(error ?? "");
										if (!error) setOpen(null);
									},
									children: "Elimina sistema"
								})]
							})
						]
					}) : null]
				}, system.id);
			})
		})
	] });
}
var SplitComponent = function SistemiPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemsView, {}) });
};
//#endregion
export { SplitComponent as component };
