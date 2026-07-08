import type { HubComparison } from "./types";

const AU = "/images/australia";

export const hubComparisons: HubComparison[] = [
  {
    slug: "alibarbar-vs-iget",
    title: "Alibarbar Ingot 9000 vs IGET: Which Disposable Wins?",
    description:
      "Puff count, battery, display, flavours and value — independent comparison for Australian adult vapers.",
    intro:
      "IGET is one of Australia's most recognised disposable brands. Here's how the Alibarbar Ingot 9000 compares on specs that matter day-to-day.",
    quickWinner:
      "Alibarbar wins on headline puff count, on-device LED display and 5-flavour custom packs. IGET wins on model variety and long-established flavour familiarity.",
    leftLabel: "Alibarbar Ingot 9000",
    rightLabel: "IGET (typical range)",
    rows: [
      { feature: "Puff count", left: "Up to 9000", right: "~1,900–4,000+ (model dependent)" },
      { feature: "E-liquid", left: "22ml", right: "~2–12ml (model dependent)" },
      { feature: "Battery", left: "2350mAh", right: "Varies" },
      { feature: "Display", left: "LED battery + e-liquid", right: "Usually none" },
      { feature: "Custom multi-flavour pack", left: "Yes — 5 flavours", right: "No" },
    ],
    leftStrengths: ["Higher capacity", "Smart display", "Custom flavour packs"],
    rightStrengths: ["Huge model catalogue", "Strong brand recognition", "Many entry price points"],
    verdict: [
      "Choose Alibarbar if you want maximum device life per unit and visibility into remaining battery and e-liquid.",
      "Choose IGET if you already know a specific model/flavour combination and prefer a smaller or legacy form factor.",
    ],
    faq: [
      {
        q: "Does Alibarbar last longer than IGET?",
        a: "On rated puff count, yes — Ingot 9000 is higher than most IGET SKUs. Real-world use still varies by draw style.",
      },
    ],
    region: "australia",
    heroImage: `${AU}/packs/custom-5-pack.png`,
    imageAlt: "Alibarbar vs IGET comparison",
    relatedSlugs: ["alibarbar-ingot-9000", "alibarbar", "iget"],
    datePublished: "2026-03-01",
    dateModified: "2026-07-08",
  },
  {
    slug: "alibarbar-vs-hqd",
    title: "Alibarbar Ingot 9000 vs HQD",
    description: "Capacity vs portability — comparing Alibarbar with HQD disposables in Australia.",
    intro: "HQD built its name on compact devices. Alibarbar targets the high-puff segment with display tech.",
    quickWinner: "Alibarbar for longevity and display; HQD for pocket-sized portability.",
    leftLabel: "Alibarbar Ingot 9000",
    rightLabel: "HQD",
    rows: [
      { feature: "Form factor", left: "High-capacity bar", right: "Compact" },
      { feature: "Puff count", left: "Up to 9000", right: "Lower (model dependent)" },
      { feature: "Display", left: "Yes", right: "Rare" },
    ],
    leftStrengths: ["Longer lasting", "LED display"],
    rightStrengths: ["Smaller device", "Simple"],
    verdict: ["Pick based on whether you prioritise pocket size or fewer replacements."],
    faq: [],
    region: "australia",
    heroImage: `${AU}/products/flavor-peach-ice.png`,
    imageAlt: "Alibarbar vs HQD",
    relatedSlugs: ["alibarbar", "hqd"],
    datePublished: "2026-03-02",
    dateModified: "2026-07-08",
  },
  {
    slug: "sp2s-vs-lana",
    title: "SP2S vs LANA: Pod Brand Comparison (Taiwan)",
    description: "Host ecosystem, flavours and buying logic — no universal winner, only fit.",
    intro:
      "SP2S and LANA are both major closed pod brands in Taiwan. This comparison focuses on ecosystem fit, not hype.",
    quickWinner:
      "SP2S for maximum flavour SKU breadth; LANA for balanced profiles and cohesive host + pod retail bundles.",
    leftLabel: "SP2S",
    rightLabel: "LANA",
    rows: [
      { feature: "Flavour breadth", left: "32+ SKUs", right: "Curated range" },
      { feature: "Host ecosystem", left: "Wide third-party hosts", right: "LANA-first" },
      { feature: "Gen compatibility", left: "Gen 1 / Gen 2 rules", right: "LANA pod matching" },
      { feature: "Best for", left: "Flavour explorers", right: "Simple rotation" },
    ],
    leftStrengths: ["Huge flavour matrix", "Strong guides & community knowledge"],
    rightStrengths: ["Retail traceability", "Balanced sweetness"],
    verdict: [
      "Match pod generation and host before comparing flavours.",
      "Read our SP2S 32-flavour guide and LANA product page before bulk buying.",
    ],
    faq: [
      {
        q: "Can I use SP2S pods on LANA hosts?",
        a: "Generally no — treat brands as separate ecosystems unless explicitly stated by manufacturer.",
      },
    ],
    region: "taiwan",
    heroImage: "/images/podpick-brand-choice.png",
    imageAlt: "SP2S vs LANA comparison",
    relatedSlugs: ["sp2s", "lana", "sp2s-universal-pods", "lana-pods"],
    datePublished: "2026-05-18",
    dateModified: "2026-07-08",
  },
];

export function getComparison(slug: string): HubComparison | undefined {
  return hubComparisons.find((c) => c.slug === slug);
}
