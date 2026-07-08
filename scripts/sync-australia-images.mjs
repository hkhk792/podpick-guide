/**
 * Copy Australia product, pack and lifestyle images from luage assets
 * into podpick-guide/public/images/australia/
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const LUAGE = "d:\\luage\\src\\assets";
const OUT = "d:\\obsidian\\podpick-guide\\public\\images\\australia";
const PRODUCTS = join(OUT, "products");
const PACKS = join(OUT, "packs");
const LIFESTYLE = join(OUT, "lifestyle");

for (const dir of [PRODUCTS, PACKS, LIFESTYLE]) {
  mkdirSync(dir, { recursive: true });
}

function copy(srcName, destDir, destName) {
  const src = join(LUAGE, srcName);
  const dest = join(destDir, destName ?? srcName);
  if (!existsSync(src)) {
    console.warn("skip missing:", src);
    return false;
  }
  copyFileSync(src, dest);
  console.log("copied:", destName ?? srcName);
  return true;
}

// All flavor PNGs from luage
for (const name of readdirSync(LUAGE)) {
  if (name.startsWith("flavor-") && extname(name) === ".png") {
    copy(name, PRODUCTS);
  }
}

// Fix hashed quadruple-berry alias if plain name still missing
if (!existsSync(join(PRODUCTS, "flavor-quadruple-berry.png"))) {
  copy("flavor-quadruple-berry-Mw-k8mZ9.png", PRODUCTS, "flavor-quadruple-berry.png");
}

// Packs and hero assets
copy("hero-device.png", OUT);
copy("hero-pair.png", LIFESTYLE);
copy("collection.png", LIFESTYLE);
copy("box.png", LIFESTYLE);
copy("Alibarbar-3-pcs_1800x.webp", PACKS, "alibarbar-3-pack.webp");
copy("Alibarbar-10-pcs_1800x.webp", PACKS, "alibarbar-10-pack.webp");

// Real-life / unboxing photos (808 series and related)
const lifestyleMap = [
  ["DM_20260708180759_001.jpg", "unbox-01.jpg"],
  ["DM_20260708180800_001.png", "unbox-02.png"],
  ["DM_20260708180802_001.jpg", "device-hand-01.jpg"],
  ["DM_20260708180808_001.webp", "unbox-03.webp"],
  ["DM_20260708180809_001.webp", "unbox-04.webp"],
  ["DM_20260708180812_001.webp", "unbox-05.webp"],
  ["DM_20260708152957_001.webp", "lifestyle-01.webp"],
  ["DM_20260708153014_001.jpg", "lifestyle-02.jpg"],
];

for (const [src, dest] of lifestyleMap) {
  copy(src, LIFESTYLE, dest);
}

console.log("done");
