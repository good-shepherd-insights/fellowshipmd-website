// Generates 1200x630 OG screenshots for every page using headless Chrome (CDP).
// Prereq: Chrome running with --remote-debugging-port=9333 and the site served at BASE.
// Usage: node scripts/gen-og.mjs [base]
import fs from "node:fs";

const base = process.argv[2] || "http://localhost:4325";
const routes = ["index", "beliefs", "values", "leadership", "connect", "contact", "prayer"];
const W = 1200;
const H = 630;

async function shot(route) {
  const url = base + "/" + (route === "index" ? "" : route);
  const created = await (
    await fetch("http://127.0.0.1:9333/json/new?" + encodeURIComponent(url), { method: "PUT" })
  ).json();
  const ws = new WebSocket(created.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const send = (method, params = {}) => {
    const mid = ++id;
    ws.send(JSON.stringify({ id: mid, method, params }));
    return new Promise((res) => pending.set(mid, res));
  };
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      pending.get(m.id)(m.result);
      pending.delete(m.id);
    }
  };
  await new Promise((r) => (ws.onopen = r));
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: W, height: 800, deviceScaleFactor: 1, mobile: false });
  await send("Page.navigate", { url });
  await new Promise((r) => setTimeout(r, 6000));
  await send("Runtime.evaluate", { expression: "document.fonts.ready.then(() => true)", awaitPromise: true });
  const s = await send("Page.captureScreenshot", {
    format: "png",
    clip: { x: 0, y: 0, width: W, height: H, scale: 1 },
    captureBeyondViewport: false,
  });
  fs.writeFileSync(`public/open-graph/${route}.png`, Buffer.from(s.data, "base64"));
  ws.close();
  console.log("captured /" + route);
}

for (const r of routes) await shot(r);
