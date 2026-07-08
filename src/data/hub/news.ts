import type { HubNewsPost } from "./types";

// Editorial: publish ~2 News posts per week. Add to hubNewsPosts array. Use weekTag YYYY-Www.
const newsPosts: HubNewsPost[] = [
  {
    slug: "australia-retailers-emphasise-battery-disposal",
    title: "Australian Vape Retailers Put More Focus on Battery Disposal",
    description:
      "Regional retailers and education hubs are placing stronger emphasis on e-waste pathways for used disposable devices.",
    category: "Australia News",
    region: "australia",
    excerpt:
      "Battery disposal guidance is becoming more visible on product education pages as high-capacity disposable devices remain part of adult buyer comparisons.",
    body: [
      "Australian adult consumers are seeing more reminders that disposable vapes contain lithium batteries and should be handled through battery or e-waste pathways where available.",
      "The shift is partly practical. High-capacity devices can last longer, but they still reach end-of-life and should not be crushed, burned or thrown loose into general household rubbish.",
      "PodPick Guide recommends keeping used devices away from children, pets, heat and metal objects until they can be taken to an appropriate collection point.",
    ],
    heroImage: "/images/cover-seasonal.svg",
    relatedSlugs: ["disposables", "storage", "australia"],
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    weekTag: "2026-W28",
  },
  {
    slug: "taiwan-pod-buyers-check-generation-labels",
    title: "Taiwan Pod Buyers Are Checking Generation Labels More Carefully",
    description:
      "SP2S and LANA comparisons continue to highlight pod generation, host matching and packaging checks.",
    category: "Taiwan News",
    region: "taiwan",
    excerpt:
      "Generation matching remains one of the most important buying steps for Taiwan pod shoppers comparing SP2S, LANA and other closed systems.",
    body: [
      "Taiwan pod buyers are paying closer attention to generation labels as SP2S Gen 1 and Gen 2 products continue to appear in the same conversations.",
      "The practical advice is simple: identify the host first, then buy pods that explicitly match that host and generation. Physical fit does not guarantee electrical compatibility.",
      "For LANA buyers, the same caution applies at the SKU level. A more cohesive ecosystem still requires exact pod and host matching.",
    ],
    heroImage: "/images/cover-brand-choice.svg",
    relatedSlugs: ["sp2s", "lana", "sp2s-vs-lana"],
    datePublished: "2026-07-06",
    dateModified: "2026-07-08",
    weekTag: "2026-W28",
  },
  {
    slug: "high-puff-disposables-drive-display-comparisons",
    title: "High-Puff Disposables Drive More Display Comparisons",
    description:
      "Adult buyers comparing high-capacity disposables are increasingly looking for battery and e-liquid visibility.",
    category: "Industry News",
    region: "global",
    excerpt:
      "Displays are becoming a practical differentiator because they reduce uncertainty near the end of a disposable device's life.",
    body: [
      "High-puff disposable comparisons are no longer only about the largest number on the box. Buyers are also comparing whether the device shows battery, e-liquid level or both.",
      "A display does not prove authenticity or quality by itself, but it can make daily use easier by explaining why vapour may be dropping near end-of-life.",
      "Brands such as Alibarbar use display visibility as part of their core value story, while compact legacy devices often compete on size and familiarity.",
    ],
    heroImage: "/images/cover-beginner-ranking.svg",
    relatedSlugs: ["alibarbar-ingot-9000", "alibarbar-vs-iget", "battery"],
    datePublished: "2026-07-01",
    dateModified: "2026-07-08",
    weekTag: "2026-W27",
  },
  {
    slug: "new-flavour-rotations-highlight-soda-and-tea",
    title: "Soda and Tea Profiles Stand Out in New Flavour Rotations",
    description:
      "Orange soda, jasmine tea and lighter aromatic profiles are being used as change-up flavours in regional buying guides.",
    category: "New Product",
    region: "global",
    excerpt:
      "Flavour rotation advice is moving beyond berry and ice, with soda and tea profiles helping adults build more varied packs.",
    body: [
      "Berry and ice flavours remain reliable first picks, but regional guides are giving more space to soda and tea profiles as change-up options.",
      "Orange soda profiles such as Fanta-style flavours work best for adults who want a playful, sweet rotation flavour rather than a subtle daily profile.",
      "Tea profiles in Taiwan pod systems serve a different role: aromatic, lighter and often more suitable for adults who find candy fruit too heavy.",
    ],
    heroImage: "/images/cover-seasonal.svg",
    relatedSlugs: ["flavours", "alibarbar-fanta-review", "sp2s"],
    datePublished: "2026-06-29",
    dateModified: "2026-07-08",
    weekTag: "2026-W27",
  },
  {
    slug: "australia-guides-repeat-general-information-warning",
    title: "Australia Vape Guides Repeat General Information Warning",
    description:
      "Educational pages are making clearer that regulation summaries are not legal advice and may change by jurisdiction.",
    category: "Regulations",
    region: "australia",
    excerpt:
      "Australia-focused content is adding more disclaimers around state and territory variation, adult-only use and changing requirements.",
    body: [
      "Australia's vaping environment remains complex enough that educational guides should avoid presenting static summaries as legal advice.",
      "The safer editorial approach is to describe broad principles, remind readers that rules change, and direct adults to official state, territory or federal sources.",
      "PodPick Guide uses this approach across regulation, shipping, nicotine and product pages.",
    ],
    heroImage: "/images/cover-counterfeit.svg",
    relatedSlugs: ["regulations", "australia", "disposable-vape-laws-in-australia"],
    datePublished: "2026-06-24",
    dateModified: "2026-07-08",
    weekTag: "2026-W26",
  },
  {
    slug: "closed-pod-market-favours-clear-compatibility",
    title: "Closed Pod Market Favours Clear Compatibility Notes",
    description:
      "Pod brands with clearer host and generation information are easier for adult buyers to compare.",
    category: "Market",
    region: "taiwan",
    excerpt:
      "Compatibility clarity is becoming a market advantage as buyers compare SP2S, LANA, RELX and other closed pod ecosystems.",
    body: [
      "Closed pod systems can offer strong flavour rotation, but they also create a compatibility burden for buyers.",
      "Brands and retailers that clearly state host generation, pod generation and cross-compatibility limits reduce the most common purchase mistake.",
      "This is especially important for SP2S buyers, where Gen 1 and Gen 2 labels determine whether the product can be used at all.",
    ],
    heroImage: "/images/cover-brand-choice.svg",
    relatedSlugs: ["compatibility", "pods", "sp2s-vs-lana"],
    datePublished: "2026-06-22",
    dateModified: "2026-07-08",
    weekTag: "2026-W26",
  },
  {
    slug: "counterfeit-checklists-expand-beyond-qr-codes",
    title: "Counterfeit Checklists Expand Beyond QR Codes",
    description:
      "Authenticity guidance now includes packaging, retailer traceability, device behaviour and pricing red flags.",
    category: "Industry News",
    region: "global",
    excerpt:
      "A single code is not enough; buyers are encouraged to evaluate the whole purchase path and product presentation.",
    body: [
      "Counterfeit guidance is becoming more practical and less dependent on any single verification feature.",
      "Useful checks include print quality, batch information, seal condition, retailer support details, device behaviour and whether pricing looks unrealistic.",
      "The same logic applies to Australian disposables and Taiwan pod products, even though the packaging formats differ.",
    ],
    heroImage: "/images/cover-counterfeit.svg",
    relatedSlugs: ["authenticity", "safety", "alibarbar"],
    datePublished: "2026-06-17",
    dateModified: "2026-07-08",
    weekTag: "2026-W25",
  },
  {
    slug: "winter-storage-advice-for-pods-and-disposables",
    title: "Winter Storage Advice for Pods and Disposables",
    description:
      "Cool weather can affect battery output, while indoor heat and cars remain storage risks for vape devices.",
    category: "Industry News",
    region: "global",
    excerpt:
      "Seasonal storage advice focuses on stable room temperature, dry storage and avoiding direct heat.",
    body: [
      "Cold weather can make small batteries feel weaker until they return to room temperature, while direct heat remains a larger safety and leakage risk.",
      "The best everyday habit is simple: store devices and pods upright where possible, sealed when unused, and away from windows, cars, heaters, children and pets.",
      "If a product tastes burnt, leaks heavily or behaves unpredictably after temperature exposure, stop using it and contact the retailer if it is new.",
    ],
    heroImage: "/images/cover-seasonal.svg",
    relatedSlugs: ["storage", "battery", "safety"],
    datePublished: "2026-06-15",
    dateModified: "2026-07-08",
    weekTag: "2026-W25",
  },
];

export const hubNewsPosts = [...newsPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export function getNews(slug: string | undefined): HubNewsPost | undefined {
  if (!slug) return undefined;
  return hubNewsPosts.find((post) => post.slug === slug);
}

export function getNewsByWeek(weekTag: string): HubNewsPost[] {
  return hubNewsPosts.filter((post) => post.weekTag === weekTag);
}
