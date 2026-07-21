import { readFileSync, writeFileSync } from "node:fs";

function removeSlugBlocks(file, slugs) {
  let src = readFileSync(file, "utf8");
  for (const slug of slugs) {
    const marker = `slug: "${slug}"`;
    let idx = src.indexOf(marker);
    while (idx !== -1) {
      const start = src.lastIndexOf("\n  {", idx);
      if (start === -1) break;
      const i = src.indexOf("{", start);
      let depth = 0;
      let end = -1;
      for (let p = i; p < src.length; p++) {
        if (src[p] === "{") depth++;
        else if (src[p] === "}") {
          depth--;
          if (depth === 0) {
            end = p;
            break;
          }
        }
      }
      if (end === -1) break;
      let cutEnd = end + 1;
      if (src[cutEnd] === ",") cutEnd++;
      while (src[cutEnd] === "\r" || src[cutEnd] === "\n") cutEnd++;
      src = src.slice(0, start) + "\n" + src.slice(cutEnd);
      idx = src.indexOf(marker);
    }
  }
  writeFileSync(file, src);
  console.log("cleaned", file);
}

removeSlugBlocks("d:/obsidian/podpick-guide/src/data/hub/brands.ts", ["sp2s", "lana"]);
removeSlugBlocks("d:/obsidian/podpick-guide/src/data/hub/products.ts", [
  "sp2s-universal-pods",
  "lana-pods",
]);
removeSlugBlocks("d:/obsidian/podpick-guide/src/data/hub/comparisons.ts", ["sp2s-vs-lana"]);
removeSlugBlocks("d:/obsidian/podpick-guide/src/data/hub/news.ts", [
  "taiwan-pod-buyers-check-generation-labels",
  "closed-pod-market-favours-clear-compatibility",
]);
removeSlugBlocks("d:/obsidian/podpick-guide/src/data/hub/faq.ts", ["taiwan"]);
