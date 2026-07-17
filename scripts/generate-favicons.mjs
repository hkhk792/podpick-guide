import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
const svg = readFileSync(join(pub, "favicon.svg"));

async function png(size, out) {
  await sharp(svg).resize(size, size).png({ compressionLevel: 9 }).toFile(join(pub, out));
  console.log(`[favicon] wrote ${out} (${size}x${size})`);
}

/** Minimal ICO wrapping a single PNG (Vista+). */
function pngToIco(pngBuf) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0); // width 0 => 256, but we use 32
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuf.length, 8);
  entry.writeUInt32LE(6 + 16, 12);

  return Buffer.concat([header, entry, pngBuf]);
}

const png32 = await sharp(svg).resize(32, 32).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(join(pub, "favicon.ico"), pngToIco(png32));
console.log("[favicon] wrote favicon.ico");

await png(32, "favicon.png");
await png(180, "apple-touch-icon.png");
