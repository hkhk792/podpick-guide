import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const src = join(dist, "sitemap-0.xml");
const dest = join(dist, "sitemap.xml");

function prettifyUrlset(xml) {
  const body = xml.replace(/^<\?xml[^>]*>\s*/i, "");
  const lines = body.replace(/></g, ">\n<").split("\n");
  return ['<?xml version="1.0" encoding="UTF-8"?>', ...lines].join("\n");
}

try {
  const raw = readFileSync(src, "utf8");
  writeFileSync(dest, prettifyUrlset(raw), "utf8");
  console.log("[sitemap] wrote dist/sitemap.xml");
} catch (err) {
  console.error("[sitemap] failed to create sitemap.xml:", err.message);
  process.exit(1);
}
