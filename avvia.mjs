import { createReadStream, existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { basename, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import handler from "./app/functions/__server.func/index.mjs";

const port = process.env.PORT || 4173;
const home = fileURLToPath(new URL("./", import.meta.url));
const staticRoot = fileURLToPath(new URL("./app/static/", import.meta.url));
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
};

function safeJsonName(name) {
  const file = basename(name || "");
  if (!file || file !== name || file.startsWith(".") || !file.toLowerCase().endsWith(".json")) return null;
  return file;
}

function companyFiles() {
  return readdirSync(home)
    .map((name) => safeJsonName(name))
    .filter(Boolean)
    .map((name) => ({ name, mtime: statSync(join(home, name)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
}

function sendJson(res, status, body, fileName) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    ...(fileName ? { "X-Company-File": encodeURIComponent(fileName) } : {}),
  });
  res.end(body);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://127.0.0.1:${port}`);
    if (url.pathname === "/locale/azienda.json") {
      const files = companyFiles();
      if (req.method === "GET" || req.method === "HEAD") {
        const current = files[0];
        if (!current) {
          sendJson(res, 404, JSON.stringify({ error: "Nessun JSON accanto ad Avvia." }));
          return;
        }
        sendJson(res, 200, readFileSync(join(home, current.name)), current.name);
        return;
      }
      if (req.method === "PUT") {
        const rawName = req.headers["x-company-file"];
        const headerName = Array.isArray(rawName) ? rawName[0] : rawName || "";
        const requested = safeJsonName(decodeURIComponent(headerName));
        const target = requested || files[0]?.name || "azienda.json";
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        writeFileSync(join(home, target), Buffer.concat(chunks));
        sendJson(res, 200, JSON.stringify({ ok: true }), target);
        return;
      }
    }
    const relative = decodeURIComponent(url.pathname);
    const file = normalize(join(staticRoot, relative));
    if (file.startsWith(staticRoot) && existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, { "content-type": types[extname(file)] || "application/octet-stream", "cache-control": "no-cache" });
      createReadStream(file).pipe(res);
      return;
    }
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method === "GET" || req.method === "HEAD" ? undefined : body,
    });
    const response = await handler.fetch(request);
    const headers = Object.fromEntries(response.headers);
    res.writeHead(response.status, headers);
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end(error instanceof Error ? error.message : "Errore");
  }
});

server.listen(port, "0.0.0.0", () => {
  const files = companyFiles();
  console.log(`Registro Rischi ICT in ascolto sulla porta ${port}`);
  console.log(files[0] ? `All'avvio carica ${files[0].name}` : "Nessun file JSON accanto ad Avvia.");
  console.log("Lascia questa finestra aperta. Per chiudere, premi Ctrl+C.");
});
