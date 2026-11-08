import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as writableFolder, C as readCompanyFile, D as uniqueFileName, E as supportsFolder, O as useRiskStore, a as Shell, c as chooseFolder, j as writeCompanyFile, p as downloadText, u as companyFileName, w as registerJson, y as listCompanyFiles } from "./shell-DaXPN17E.mjs";
import { a as PrimaryButton, d as TextInput, n as Field, o as QuietButton, r as PageTitle } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archivio-2K-q3qTb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArchiveView() {
	const navigate = useNavigate();
	const companies = useRiskStore((s) => s.companies) ?? [];
	const snapshots = useRiskStore((s) => s.snapshots) ?? [];
	const openCompanyId = useRiskStore((s) => s.openCompanyId);
	const openFileName = useRiskStore((s) => s.openFileName);
	const saveOpenCompany = useRiskStore((s) => s.saveOpenCompany);
	const startCompany = useRiskStore((s) => s.startCompany);
	const importPersisted = useRiskStore((s) => s.importPersisted);
	const openCompany = useRiskStore((s) => s.openCompany);
	const deleteCompany = useRiskStore((s) => s.deleteCompany);
	const loadSnapshot = useRiskStore((s) => s.loadSnapshot);
	const saveCompanyAs = useRiskStore((s) => s.saveCompanyAs);
	const folderInput = (0, import_react.useRef)(null);
	const [fresh, setFresh] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [folderName, setFolderName] = (0, import_react.useState)(null);
	const [folderFiles, setFolderFiles] = (0, import_react.useState)([]);
	const [looseFiles, setLooseFiles] = (0, import_react.useState)([]);
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const openName = companies.find((item) => item.id === openCompanyId)?.name;
	async function loadJson(text, fileName) {
		const data = JSON.parse(text);
		if (!importPersisted(data)) {
			setMessage("File non riconosciuto. Serve un JSON esportato da questa app.");
			return;
		}
		saveOpenCompany();
		useRiskStore.getState().setOpenFileName(fileName);
		setMessage(`Aperto ${fileName}.`);
		navigate({ to: "/" });
	}
	async function openFolder() {
		setLooseFiles([]);
		if (!supportsFolder()) {
			folderInput.current?.click();
			return;
		}
		try {
			const dir = await chooseFolder();
			if (!dir) {
				folderInput.current?.click();
				return;
			}
			const writable = await writableFolder();
			const names = writable ? await listCompanyFiles(writable) : [];
			setFolderName(dir.name);
			setFolderFiles(names);
			setMessage(names.length ? `Cartella «${dir.name}». Scegli un file JSON.` : `In «${dir.name}» non ci sono file JSON.`);
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") return;
			folderInput.current?.click();
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: "Un file per azienda",
			title: "Aziende",
			lede: "Apri sceglie un JSON da una cartella. Crea fa solo un'azienda nuova, senza dati di un'altra."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg border border-line bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Apri"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink-soft",
						children: "Apre la cartella in cui stanno i file JSON, poi ne scegli uno."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						className: "mt-4",
						onClick: () => void openFolder(),
						children: "Apri"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: folderInput,
						type: "file",
						accept: ".json,application/json",
						multiple: true,
						className: "sr-only",
						onChange: (event) => {
							const files = [...event.target.files ?? []].filter((file) => file.name.toLowerCase().endsWith(".json"));
							event.target.value = "";
							const folder = files[0]?.webkitRelativePath?.split("/")[0];
							setFolderName(folder || "Cartella scelta");
							setFolderFiles([]);
							setLooseFiles(files.map((file) => ({
								name: file.name,
								text: () => file.text()
							})));
							setMessage(files.length ? "Scegli il file JSON da aprire." : "In questa cartella non ci sono file JSON.");
						},
						webkitdirectory: "",
						directory: ""
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg border border-line bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Crea"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink-soft",
						children: "Parte da una scheda vuota. Non apre e non copia un'azienda già salvata."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Ragione sociale",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: fresh,
								onChange: (event) => setFresh(event.target.value),
								placeholder: "Nome della nuova azienda"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							onClick: () => {
								if (!fresh.trim()) {
									setMessage("Scrivi il nome della nuova azienda.");
									return;
								}
								const name = fresh.trim();
								startCompany(name);
								setFresh("");
								setMessage(`Creata «${name}», senza dati.`);
								navigate({ to: "/azienda" });
							},
							children: "Crea"
						})]
					})
				]
			})]
		}),
		folderName && (folderFiles.length > 0 || looseFiles.length > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4 rounded-lg border border-line bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-serif text-2xl",
				children: ["File in ", folderName]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 divide-y divide-line",
				children: [folderFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: file }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
						onClick: () => {
							(async () => {
								const dir = await writableFolder();
								if (!dir) return;
								try {
									await loadJson(await readCompanyFile(dir, file), file);
								} catch {
									setMessage("File non valido.");
								}
							})();
						},
						children: "Scegli"
					})]
				}, file)), looseFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: file.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
						onClick: () => {
							file.text().then((text) => loadJson(text, file.name)).catch(() => setMessage("File non valido."));
						},
						children: "Scegli"
					})]
				}, file.name))]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4 rounded-lg border border-line bg-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft",
					children: openName ? `Azienda aperta: «${openName}»${openFileName ? ` · ${openFileName}` : ""}.` : "Nessuna azienda aperta."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
					className: "mt-3",
					onClick: () => {
						const result = saveOpenCompany();
						(async () => {
							const dir = await writableFolder().catch(() => null) ?? (supportsFolder() ? await chooseFolder().catch(() => null) : null);
							if (!dir) {
								setMessage(`«${result.name}» è salvata in questo browser. Collega una cartella con Apri per scrivere il JSON.`);
								return;
							}
							const fileName = useRiskStore.getState().openFileName ?? await uniqueFileName(dir, companyFileName(result.name));
							await writeCompanyFile(dir, fileName, registerJson(useRiskStore.getState()));
							useRiskStore.getState().setOpenFileName(fileName);
							setFolderName(dir.name);
							setFolderFiles(await listCompanyFiles(dir));
							setMessage(`Salvato ${fileName} nella cartella «${dir.name}».`);
						})();
					},
					children: "Salva il file JSON"
				}),
				message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-ink-soft",
					children: message
				}) : null
			]
		}),
		companies.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Copie in questo browser"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3",
				children: companies.map((company) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: [company.name, company.id === openCompanyId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-xs font-normal text-copper",
								children: "aperta"
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: new Date(company.savedAt).toLocaleString("it-IT")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
									onClick: () => {
										if (openCompany(company.id)) navigate({ to: "/" });
									},
									children: "Ricarica"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
									onClick: () => downloadText(company.fileName || companyFileName(company.name), registerJson(company.data), "application/json"),
									children: "Scarica"
								}),
								pendingDelete === company.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
									onClick: () => {
										deleteCompany(company.id);
										setPendingDelete(null);
									},
									children: "Elimina"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
									onClick: () => setPendingDelete(company.id),
									children: "Elimina"
								})
							]
						})
					]
				}, company.id))
			})]
		}) : null,
		snapshots.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Versioni già fissate"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3",
				children: snapshots.map((snap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-card p-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: snap.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: new Date(snap.savedAt).toLocaleString("it-IT")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
							className: "mt-3",
							onClick: () => {
								if (!loadSnapshot(snap.id)) return;
								const result = saveCompanyAs(snap.name);
								setMessage(`«${result.name}» è ora una copia in questo browser.`);
							},
							children: "Tieni una copia"
						})
					]
				}, snap.id))
			})]
		}) : null
	] });
}
var SplitComponent = function ArchivioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveView, {}) });
};
//#endregion
export { SplitComponent as component };
