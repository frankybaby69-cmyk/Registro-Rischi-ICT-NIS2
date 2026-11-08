import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as useRiskStore, a as Shell } from "./shell-DaXPN17E.mjs";
import { d as TextInput, n as Field, r as PageTitle, u as TextArea } from "./ui-lxghbhEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/azienda-BFKbs6xz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MAX_LOGO = 14e4;
function CompanyView() {
	const profile = useRiskStore((s) => s.profile);
	const setProfile = useRiskStore((s) => s.setProfile);
	const [logoError, setLogoError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		eyebrow: "Anagrafica",
		title: "L'azienda",
		lede: "Questi dati compaiono in testata e nel registro. Il logo resta solo in questo browser."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 rounded-lg border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-16 items-center justify-center overflow-hidden rounded-md border border-line bg-paper",
					children: profile.logoDataUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile.logoDataUrl,
						alt: "",
						className: "max-h-full max-w-full object-contain"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "Logo"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "inline-flex min-h-11 cursor-pointer items-center rounded-md border border-line px-3 text-sm font-semibold",
						children: ["Carica logo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/png,image/jpeg,image/webp,image/svg+xml",
							className: "sr-only",
							onChange: (event) => {
								const file = event.target.files?.[0];
								event.target.value = "";
								if (!file) return;
								readLogo(file).then((logo) => {
									setLogoError("");
									setProfile({ logoDataUrl: logo });
								}, (error) => setLogoError(error.message));
							}
						})]
					}),
					profile.logoDataUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-2 text-sm text-copper",
						onClick: () => setProfile({ logoDataUrl: null }),
						children: "Rimuovi"
					}) : null,
					logoError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-copper",
						children: logoError
					}) : null
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Ragione sociale",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: profile.name,
					onChange: (event) => setProfile({ name: event.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Partita IVA",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: profile.vat,
						onChange: (event) => setProfile({ vat: event.target.value })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Settore",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: profile.sector,
						onChange: (event) => setProfile({ sector: event.target.value })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Sede",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: profile.address,
					onChange: (event) => setProfile({ address: event.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Documento",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: profile.document,
					onChange: (event) => setProfile({ document: event.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Note",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: profile.notes,
					onChange: (event) => setProfile({ notes: event.target.value })
				})
			})
		]
	})] });
}
function readLogo(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Impossibile leggere il file."));
		reader.onload = () => {
			const image = new Image();
			image.onload = () => {
				const scale = Math.min(1, 320 / Math.max(image.width, image.height));
				const canvas = document.createElement("canvas");
				canvas.width = Math.max(1, Math.round(image.width * scale));
				canvas.height = Math.max(1, Math.round(image.height * scale));
				const context = canvas.getContext("2d");
				if (!context) {
					reject(/* @__PURE__ */ new Error("Impossibile preparare il logo."));
					return;
				}
				context.drawImage(image, 0, 0, canvas.width, canvas.height);
				const data = canvas.toDataURL("image/jpeg", .85);
				if (data.length > MAX_LOGO) {
					reject(/* @__PURE__ */ new Error("Logo troppo pesante. Usa un'immagine più piccola."));
					return;
				}
				resolve(data);
			};
			image.onerror = () => reject(/* @__PURE__ */ new Error("Formato non letto. Usa PNG o JPG."));
			image.src = String(reader.result);
		};
		reader.readAsDataURL(file);
	});
}
var SplitComponent = function AziendaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyView, {}) });
};
//#endregion
export { SplitComponent as component };
