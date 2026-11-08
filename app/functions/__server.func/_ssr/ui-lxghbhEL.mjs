import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as cn } from "./shell-DaXPN17E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-lxghbhEL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function judgmentClass(judgment) {
	if (judgment === "Basso") return "bg-low text-low-fg";
	if (judgment === "Medio Basso") return "bg-mlow text-mlow-fg";
	if (judgment === "Medio Alto") return "bg-mhigh text-mhigh-fg";
	if (judgment === "Alto") return "bg-high text-high-fg";
	return "bg-na text-na-fg";
}
function Pill({ children, tone = "na", className }) {
	const color = tone === "alert" ? "bg-copper-soft text-copper" : tone == null || tone === "na" ? "bg-na text-na-fg" : judgmentClass(tone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold", color, className),
		children
	});
}
var RTO_TIP = "Ore massime di fermo accettabili: dal disservizio al ritorno in servizio. Risponde a «fra quanto torniamo operativi?».";
var RPO_TIP = "Ore di dati che si possono perdere. È il momento da cui si riparte, per esempio l'ultimo backup utile. Risponde a «da che momento i dati sono di nuovo quelli giusti?».";
function Field({ label, hint, tip, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mb-1.5 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted uppercase",
				children: [label, tip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: tip }) : null]
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs font-normal tracking-normal text-muted normal-case",
				children: hint
			}) : null
		]
	});
}
function InfoTip({ text }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-flex normal-case",
		onMouseLeave: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": text,
			"aria-expanded": open,
			className: "inline-flex size-4 items-center justify-center rounded-full border border-line text-[10px] leading-none font-semibold text-muted",
			onMouseEnter: () => setOpen(true),
			onFocus: () => setOpen(true),
			onBlur: () => setOpen(false),
			onMouseDown: (event) => event.preventDefault(),
			onClick: (event) => {
				event.preventDefault();
				event.stopPropagation();
				setOpen((value) => !value);
			},
			children: "?"
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			role: "tooltip",
			className: "absolute bottom-full left-0 z-30 mb-1.5 w-64 max-w-[70vw] rounded-md bg-ink px-2.5 py-2 text-left text-xs leading-snug font-normal tracking-normal text-rail-fg normal-case",
			children: text
		}) : null]
	});
}
var controlClass = "w-full rounded-md border border-line bg-card px-3 py-2.5 text-sm text-ink placeholder:text-muted";
function TextInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: cn(controlClass, props.className)
	});
}
function TextArea(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...props,
		className: cn(controlClass, "min-h-24 resize-y", props.className)
	});
}
function SelectInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		...props,
		className: cn(controlClass, "min-h-11", props.className)
	});
}
function Choice({ pressed, title, hint, onClick, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": pressed,
		disabled,
		onClick,
		className: cn("min-h-11 rounded-md border px-2.5 py-2 text-left transition-colors", pressed ? "border-copper bg-copper-soft text-ink" : "border-line bg-card text-ink hover:border-ink-soft", disabled && "opacity-50"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-semibold",
			children: title
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 block text-xs", pressed ? "text-copper" : "text-muted"),
			children: hint
		}) : null]
	});
}
function PrimaryButton(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-copper px-4 text-sm font-semibold text-copper-ink transition-opacity hover:opacity-90 disabled:opacity-40", props.className)
	});
}
function QuietButton(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-card px-3 text-sm font-semibold text-ink hover:border-ink-soft disabled:opacity-40", props.className)
	});
}
function PageTitle({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6 max-w-3xl",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-copper uppercase",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl",
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base text-ink-soft",
				children: lede
			}) : null
		]
	});
}
//#endregion
export { PrimaryButton as a, RTO_TIP as c, TextInput as d, judgmentClass as f, Pill as i, SelectInput as l, Field as n, QuietButton as o, PageTitle as r, RPO_TIP as s, Choice as t, TextArea as u };
