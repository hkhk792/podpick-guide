import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://podpickguide.com";
const HOST = "podpickguide.com";
const KEY = process.env.INDEXNOW_KEY || "podpick7f3a9c2b1e8d4f06";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

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

function assertKeyFile() {
  const keyPath = join(root, "public", `${KEY}.txt`);
  let raw = "";
  try {
    raw = readFileSync(keyPath, "utf8");
  } catch {
    console.warn(`[indexnow] missing key file: public/${KEY}.txt`);
    return false;
  }
  if (raw !== KEY) {
    console.warn(
      `[indexnow] public/${KEY}.txt must contain only the key (no BOM/CRLF). Expected ${KEY.length} chars, got ${raw.length}.`
    );
    return false;
  }
  return true;
}

function log403Help() {
  console.warn(
    "[indexnow] 403 usually means Bing has not linked this domain yet. Add https://podpickguide.com in Bing Webmaster Tools (XML or IndexNow key verification), then redeploy."
  );
}

async function submitIndexNow(urlList) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (res.ok || res.status === 202) {
    console.log(`[indexnow] submitted ${urlList.length} URL(s), status ${res.status}`);
    return true;
  }

  const body = await res.text();
  console.warn(`[indexnow] failed ${res.status}: ${body}`);
  if (res.status === 403) log403Help();
  return false;
}

async function main() {
  if (!assertKeyFile()) return;

  let urlList = [SITE];
  try {
    urlList = [...new Set([...urlList, ...collectUrls(dist)])];
  } catch {
    console.warn("[indexnow] dist/ not found, only notifying homepage");
  }

  try {
    await submitIndexNow(urlList);
  } catch (err) {
    console.warn("[indexnow] request error:", err.message);
  }
}

await main();
