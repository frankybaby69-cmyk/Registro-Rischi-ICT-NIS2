import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, a as Shell, o as buildRows } from "./shell-DaXPN17E.mjs";
import { a as PrimaryButton, c as RTO_TIP, d as TextInput, l as SelectInput, n as Field, o as QuietButton, r as PageTitle, s as RPO_TIP } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/perimetro-ccmBAONS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AssetsView() {
	const navigate = useNavigate();
	const perimeters = useRiskStore((s) => s.perimeters);
	const assets = useRiskStore((s) => s.assets);
	const answers = useRiskStore((s) => s.answers);
	const threshold = useRiskStore((s) => s.threshold);
	const patchAsset = useRiskStore((s) => s.patchAsset);
	const addAsset = useRiskStore((s) => s.addAsset);
	const addPerimeter = useRiskStore((s) => s.addPerimeter);
	const renamePerimeter = useRiskStore((s) => s.renamePerimeter);
	const removePerimeter = useRiskStore((s) => s.removePerimeter);
	const duplicatePerimeter = useRiskStore((s) => s.duplicatePerimeter);
	const [name, setName] = (0, import_react.useState)("");
	const [scope, setScope] = (0, import_react.useState)("tutti");
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const rows = buildRows({
		perimeters,
		answers,
		threshold
	});
	const visible = assets.filter((asset) => {
		if (scope === "dentro") return asset.inScope;
		if (scope === "fuori") return !asset.inScope;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			eyebrow: "Asset based",
			title: "Perimetro",
			lede: "Ogni scheda vale per gli asset che la condividono. Nel file, rete, server, PC e OT confluiscono tutti in Network."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-lg border border-line bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nuova scheda di valutazione",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: name,
							placeholder: "Es. Sito web, Cloud SaaS…",
							onChange: (event) => setName(event.target.value)
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => {
						const id = addPerimeter(name || "Nuova scheda");
						setName("");
						navigate({
							to: "/valuta",
							search: {
								scheda: id,
								modo: "guida",
								rischio: 1
							}
						});
					},
					children: "Crea e compila"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: perimeters.map((perimeter) => {
					const linked = assets.filter((asset) => asset.perimeterId === perimeter.id);
					const own = rows.filter((row) => row.perimeter.id === perimeter.id);
					const done = own.filter((row) => row.input.applicable === false || row.evaluation.status === "ok").length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-paper p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								"aria-label": `Nome scheda ${perimeter.name}`,
								value: perimeter.name,
								onChange: (event) => renamePerimeter(perimeter.id, event.target.value),
								className: "font-semibold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									linked.length,
									" asset · ",
									done,
									"/",
									own.length,
									" rischi decisi"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: linked.length ? linked.map((asset) => asset.name).join(" · ") : "Nessun asset collegato."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
										onClick: () => navigate({
											to: "/valuta",
											search: {
												scheda: perimeter.id,
												modo: "elenco",
												rischio: 0
											}
										}),
										children: "Apri"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
										onClick: () => {
											const id = duplicatePerimeter(perimeter.id, `${perimeter.name} copia`);
											if (id) navigate({
												to: "/valuta",
												search: {
													scheda: id,
													modo: "elenco",
													rischio: 0
												}
											});
										},
										children: "Duplica"
									}),
									pendingDelete === perimeter.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
										onClick: () => {
											removePerimeter(perimeter.id);
											setPendingDelete(null);
										},
										children: "Conferma elimina"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
										onClick: () => setPendingDelete(perimeter.id),
										children: "Elimina"
									})
								]
							})
						]
					}, perimeter.id);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Asset ICT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
							on: scope === "tutti",
							onClick: () => setScope("tutti"),
							children: "Tutti"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
							on: scope === "dentro",
							onClick: () => setScope("dentro"),
							children: "In perimetro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
							on: scope === "fuori",
							onClick: () => setScope("fuori"),
							children: "Fuori"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
							onClick: addAsset,
							children: "Aggiungi asset"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: visible.map((asset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Asset",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: asset.name,
									onChange: (event) => patchAsset(asset.id, { name: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Scheda di valutazione",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
									value: asset.perimeterId,
									onChange: (event) => patchAsset(asset.id, { perimeterId: event.target.value }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Nessuna scheda"
									}), perimeters.map((perimeter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: perimeter.id,
										children: perimeter.name
									}, perimeter.id))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Area",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: asset.area,
									onChange: (event) => patchAsset(asset.id, { area: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Owner",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: asset.owner,
											onChange: (event) => patchAsset(asset.id, { owner: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "RTO (ore)",
										tip: RTO_TIP,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											placeholder: "es. 4",
											value: asset.rto,
											onChange: (event) => patchAsset(asset.id, { rto: event.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "RPO (ore)",
										tip: RPO_TIP,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											placeholder: "es. 24",
											value: asset.rpo ?? "",
											onChange: (event) => patchAsset(asset.id, { rpo: event.target.value })
										})
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": asset.inScope,
							onClick: () => patchAsset(asset.id, { inScope: !asset.inScope }),
							className: `min-h-11 rounded-md px-3 text-sm font-semibold ${asset.inScope ? "bg-low text-low-fg" : "bg-na text-na-fg"}`,
							children: asset.inScope ? "In perimetro" : "Fuori perimetro"
						}), !asset.perimeterId && asset.inScope ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietButton, {
							onClick: () => {
								const id = addPerimeter(asset.name);
								patchAsset(asset.id, { perimeterId: id });
								navigate({
									to: "/valuta",
									search: {
										scheda: id,
										modo: "guida",
										rischio: 1
									}
								});
							},
							children: "Crea la scheda da questo asset"
						}) : null]
					})]
				}, asset.id))
			})]
		})
	] });
}
function Filter({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: `min-h-11 rounded-md px-3 text-sm font-semibold ${on ? "bg-ink text-rail-fg" : "border border-line bg-card text-ink"}`,
		children
	});
}
var SplitComponent = function PerimetroPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssetsView, {}) });
};
//#endregion
export { SplitComponent as component };
