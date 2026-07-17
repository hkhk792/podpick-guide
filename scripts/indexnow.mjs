import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://podpickguide.com";
const HOST = "podpickguide.com";
const KEY = process.env.INDEXNOW_KEY || "12d65cc48c06483a96c304e1e51e4e3c";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const useLive = process.argv.includes("--live");

function collectUrls(dir, prefix = "") {
  const urls = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      urls.push(...collectUrls(full, `${prefix}/${name}`));
      continue;
    }
    if (name !== "index.html") continue;
    urls.push(prefix ? `${SITE}${prefix}` : SITE);
  }
  return urls;
}

function urlsFromSitemapXml(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

function assertKeyFile() {
  const keyPath = join(root, "public", `${KEY}.txt`);
  let raw = "";
  try {
    raw = readFileSync(keyPath, "utf8").trim();
  } catch {
    console.warn(`[indexnow] missing key file: public/${KEY}.txt`);
    return false;
  }
  if (raw !== KEY) {
    console.warn(
      `[indexnow] public/${KEY}.txt must contain only the key. Expected ${KEY}, got ${JSON.stringify(raw)}`
    );
    return false;
  }
  return true;
}

function log403Help() {
  console.warn(
    "[indexnow] 403 usually means Bing has not linked this domain yet. Add https://podpickguide.com in Bing Webmaster Tools (XML or IndexNow key verification), then retry."
  );
}

async function submitIndexNow(urlList) {
  const batchSize = 10000;
  let ok = true;
  for (let i = 0; i < urlList.length; i += batchSize) {
    const chunk = urlList.slice(i, i + batchSize);
    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: chunk,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 202) {
      console.log(`[indexnow] submitted ${chunk.length} URL(s), status ${res.status}`);
    } else {
      const body = await res.text();
      console.warn(`[indexnow] failed ${res.status}: ${body}`);
      if (res.status === 403) log403Help();
      ok = false;
    }
  }
  return ok;
}

async function resolveUrlList() {
  if (useLive) {
    const res = await fetch(`${SITE}/sitemap.xml`);
    if (!res.ok) throw new Error(`live sitemap HTTP ${res.status}`);
    const urls = urlsFromSitemapXml(await res.text());
    console.log(`[indexnow] loaded ${urls.length} URL(s) from live sitemap`);
    return [...new Set(urls.length ? urls : [SITE])];
  }

  let urlList = [SITE];
  try {
    urlList = [...new Set([...urlList, ...collectUrls(dist)])];
    console.log(`[indexnow] collected ${urlList.length} URL(s) from dist/`);
  } catch {
    console.warn("[indexnow] dist/ not found, only notifying homepage");
  }
  return urlList;
}

async function main() {
  if (!assertKeyFile()) return;
  try {
    const urlList = await resolveUrlList();
    await submitIndexNow(urlList);
  } catch (err) {
    console.warn("[indexnow] request error:", err.message);
  }
}

await main();
