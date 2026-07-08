import type { HubComparison } from "./types";
import { AU, AU_LIFESTYLE, AU_PACKS, AU_PRODUCTS } from "./australiaImages";
const SHARED_DISCLAIMER =
  "Competitor specifications vary by model and change over time; figures below are typical ranges for reference only. Always check the specific device before buying.";

export const hubComparisons: HubComparison[] = [
  {
    slug: "alibarbar-vs-iget",
    title: "Alibarbar Ingot 9000 vs IGET: Which Disposable Vape Is Better?",
    description:
      "A fair comparison of the Alibarbar Ingot 9000 and IGET disposable vapes - puff count, battery, e-liquid, flavours and value for Australian vapers.",
    intro:
      "IGET is one of the most recognised disposable vape brands in Australia, so it is a natural comparison for the Alibarbar Ingot 9000. " +
      SHARED_DISCLAIMER,
    quickWinner:
      "Alibarbar wins on headline puff count, LED battery and e-liquid display, and custom flavour packs. IGET wins on model variety and long-established flavour familiarity.",
    leftLabel: "Alibarbar Ingot 9000",
    rightLabel: "IGET (typical range)",
    rows: [
      { feature: "Puff count", left: "Up to 9000", right: "~1,900-4,000+ depending on model" },
      { feature: "E-liquid capacity", left: "22ml", right: "~2-12ml depending on model" },
      { feature: "Battery", left: "2350mAh, non-rechargeable", right: "Varies; many non-rechargeable" },
      { feature: "Display", left: "Smart LED battery + e-liquid", right: "Most models: none" },
      { feature: "Custom multi-flavour pack", left: "Yes - 5 Flavour Custom Pack", right: "No" },
      { feature: "Activation", left: "Inhale-activated", right: "Inhale-activated" },
    ],
    leftStrengths: [
      "Higher headline puff count on a single device",
      "Built-in LED display for battery and e-liquid",
      "Build-your-own 5 Flavour Custom Pack",
    ],
    rightStrengths: [
      "Very widely known brand in Australia",
      "Large, established flavour catalogue",
      "Many model options at different sizes",
    ],
    verdict: [
      "If your priority is maximum puffs per device, a smart display, and the ability to mix five flavours in one order, the Alibarbar Ingot 9000 is the stronger pick.",
      "If you specifically want a particular long-standing IGET flavour or a smaller, lower-capacity device, IGET's range may suit you better.",
    ],
    faq: [
      {
        q: "Does Alibarbar last longer than an IGET?",
        a: "On headline puff count, yes. The Ingot 9000 is rated for up to 9000 puffs, higher than most IGET models. Real-world lifespan still depends on how you vape.",
      },
    ],
    region: "australia",
    heroImage: `${AU_PACKS}/custom-5-pack.png`,
    imageAlt: "Alibarbar Ingot 9000 versus IGET comparison",
    relatedSlugs: ["alibarbar-ingot-9000", "alibarbar", "iget"],
    datePublished: "2026-03-01",
    dateModified: "2026-07-08",
  },
  {
    slug: "alibarbar-vs-hqd",
    title: "Alibarbar Ingot 9000 vs HQD: Disposable Vape Comparison",
    description:
      "Comparing the Alibarbar Ingot 9000 with HQD disposable vapes - capacity, puff count, display and flavour options for Australian buyers.",
    intro:
      "HQD is another established disposable vape brand. This guide compares it fairly against the Alibarbar Ingot 9000. " +
      SHARED_DISCLAIMER,
    quickWinner:
      "Alibarbar wins for longevity and display visibility. HQD wins when compact size and a very simple pocket device matter most.",
    leftLabel: "Alibarbar Ingot 9000",
    rightLabel: "HQD (typical range)",
    rows: [
      { feature: "Puff count", left: "Up to 9000", right: "~1,000-4,000+ depending on model" },
      { feature: "E-liquid capacity", left: "22ml", right: "Varies by model" },
      { feature: "Battery", left: "2350mAh, non-rechargeable", right: "Varies by model" },
      { feature: "Display", left: "Smart LED battery + e-liquid", right: "Most models: none" },
      { feature: "Custom multi-flavour pack", left: "Yes - 5 Flavour Custom Pack", right: "No" },
    ],
    leftStrengths: [
      "High single-device puff capacity",
      "LED display shows remaining battery and e-liquid",
      "Custom 5-flavour bundle option",
    ],
    rightStrengths: ["Compact device options", "Recognised brand", "Familiar flavour line-up"],
    verdict: [
      "The Alibarbar Ingot 9000 generally offers a higher puff count and the convenience of an LED display, making it a strong choice for longevity-focused vapers.",
      "HQD can be a good option if you prefer a smaller device. For value and device life, the Ingot 9000 leads for most users.",
    ],
    faq: [
      {
        q: "Is Alibarbar or HQD better value?",
        a: "For puffs per device, the Ingot 9000 typically offers more capacity. Value also depends on which flavours you prefer and which HQD model you compare.",
      },
    ],
    region: "australia",
    heroImage: `${AU_PACKS}/alibarbar-3-pack.webp`,
    imageAlt: "Alibarbar Ingot 9000 versus HQD comparison",
    relatedSlugs: ["alibarbar", "hqd", "alibarbar-ingot-9000"],
    datePublished: "2026-03-04",
    dateModified: "2026-07-08",
  },
  {
    slug: "alibarbar-vs-gunnpod",
    title: "Alibarbar Ingot 9000 vs Gunnpod: Which Should You Buy?",
    description:
      "Alibarbar Ingot 9000 versus Gunnpod disposable vapes - a clear comparison of puffs, battery, e-liquid and flavours for Australia.",
    intro:
      "Gunnpod is a popular disposable vape in Australia, especially known for its 2000-puff model. Here is how it compares to the Alibarbar Ingot 9000. " +
      SHARED_DISCLAIMER,
    quickWinner:
      "Alibarbar wins if you want far fewer replacements and display visibility. Gunnpod wins if you prefer the classic compact 2000-puff style.",
    leftLabel: "Alibarbar Ingot 9000",
    rightLabel: "Gunnpod (typical range)",
    rows: [
      { feature: "Puff count", left: "Up to 9000", right: "~2,000 classic model; higher on newer models" },
      { feature: "E-liquid capacity", left: "22ml", right: "~8-13ml depending on model" },
      { feature: "Battery", left: "2350mAh, non-rechargeable", right: "Varies by model" },
      { feature: "Display", left: "Smart LED battery + e-liquid", right: "Most models: none" },
      { feature: "Custom multi-flavour pack", left: "Yes - 5 Flavour Custom Pack", right: "No" },
    ],
    leftStrengths: [
      "Much higher puff count than the classic Gunnpod",
      "LED display for battery and e-liquid",
      "5 Flavour Custom Pack option",
    ],
    rightStrengths: ["Very compact classic model", "Long-standing brand recognition", "Simple no-frills experience"],
    verdict: [
      "If you want a device that lasts far longer between replacements, the Alibarbar Ingot 9000 clearly outpaces the classic Gunnpod on capacity.",
      "The Gunnpod suits vapers who like a smaller, pocket-friendly device and do not mind replacing it more often. For longevity, the Ingot 9000 wins.",
    ],
    faq: [
      {
        q: "How many more puffs does Alibarbar have than a Gunnpod?",
        a: "The Ingot 9000 is rated for up to 9000 puffs versus around 2000 on the classic Gunnpod, roughly four times the headline capacity.",
      },
    ],
    region: "australia",
    heroImage: `${AU_LIFESTYLE}/unbox-04.webp`,
    imageAlt: "Alibarbar Ingot 9000 versus Gunnpod comparison",
    relatedSlugs: ["alibarbar", "gunnpod", "alibarbar-ingot-9000"],
    datePublished: "2026-03-07",
    dateModified: "2026-07-08",
  },
  {
    slug: "alibarbar-vs-kuz",
    title: "Alibarbar Ingot 9000 vs KUZ: Disposable Vape Comparison",
    description:
      "How the Alibarbar Ingot 9000 compares with KUZ disposable vapes on puff count, capacity, display and flavour choice in Australia.",
    intro:
      "KUZ is a disposable vape brand seen in the Australian market. This guide compares it with the Alibarbar Ingot 9000. " +
      SHARED_DISCLAIMER,
    quickWinner:
      "Alibarbar wins for a clear, consistent spec sheet and flavour-pack flexibility. KUZ is worth comparing if a specific KUZ flavour or model appeals.",
    leftLabel: "Alibarbar Ingot 9000",
    rightLabel: "KUZ (typical range)",
    rows: [
      { feature: "Puff count", left: "Up to 9000", right: "Varies by model" },
      { feature: "E-liquid capacity", left: "22ml", right: "Varies by model" },
      { feature: "Battery", left: "2350mAh, non-rechargeable", right: "Varies by model" },
      { feature: "Display", left: "Smart LED battery + e-liquid", right: "Depends on model" },
      { feature: "Custom multi-flavour pack", left: "Yes - 5 Flavour Custom Pack", right: "No" },
    ],
    leftStrengths: [
      "Consistent up-to-9000-puff capacity",
      "LED display across the range",
      "Mix-and-match 5 Flavour Custom Pack",
    ],
    rightStrengths: ["Alternative flavour choices", "Another high-puff option to consider"],
    verdict: [
      "The Alibarbar Ingot 9000 offers a clear, consistent spec sheet: 9000 puffs, 22ml and an LED display. That makes it easy to know what you are getting.",
      "KUZ can be worth a look if a specific flavour appeals, but for a predictable, long-lasting device the Ingot 9000 is a dependable default.",
    ],
    faq: [
      {
        q: "Are Alibarbar and KUZ the same type of device?",
        a: "Both are inhale-activated disposable vapes in the high-puff category, but specs and flavours differ by model.",
      },
    ],
    region: "australia",
    heroImage: `${AU_PRODUCTS}/flavor-lychee.png`,
    imageAlt: "Alibarbar Ingot 9000 versus KUZ comparison",
    relatedSlugs: ["alibarbar", "kuz", "alibarbar-ingot-9000"],
    datePublished: "2026-03-10",
    dateModified: "2026-07-08",
  },
  {
    slug: "alibarbar-vs-relx",
    title: "Alibarbar Ingot 9000 vs RELX: Disposable vs Pod System",
    description:
      "Alibarbar Ingot 9000 disposable compared with RELX pod systems - which format suits you on cost, convenience and flavour.",
    intro:
      "RELX is best known for closed pod systems rather than all-in-one disposables, so this comparison is really about two formats. " +
      SHARED_DISCLAIMER,
    quickWinner:
      "Alibarbar wins for zero setup and one-device convenience. RELX wins for adults who prefer a reusable host and pod replacement routine.",
    leftLabel: "Alibarbar Ingot 9000",
    rightLabel: "RELX pod system",
    rows: [
      { feature: "Format", left: "All-in-one disposable", right: "Rechargeable pod system + pods" },
      { feature: "Puff count", left: "Up to 9000 per device", right: "Depends on pods used" },
      { feature: "Rechargeable", left: "No", right: "Yes, device body is reusable" },
      { feature: "Setup", left: "None - vape out of the box", right: "Charge device, insert pods" },
      { feature: "Display", left: "Smart LED battery + e-liquid", right: "Varies by device" },
    ],
    leftStrengths: [
      "Zero setup and ready straight out of the box",
      "No charging or pod swapping",
      "Simple, predictable single-device cost",
    ],
    rightStrengths: [
      "Reusable device body",
      "Swap pods instead of whole device",
      "Can suit long-term, lower-waste use",
    ],
    verdict: [
      "Choose the Alibarbar Ingot 9000 if you want maximum simplicity: no charging, no pods, no setup, just vape and replace when finished.",
      "Choose a RELX-style pod system if you prefer a reusable device and do not mind charging and buying pods separately. They serve different priorities.",
    ],
    faq: [
      {
        q: "Is RELX a disposable vape?",
        a: "RELX is primarily known for rechargeable closed pod systems. The Alibarbar Ingot 9000 is an all-in-one disposable.",
      },
    ],
    region: "australia",
    heroImage: `${AU_LIFESTYLE}/hero-pair.png`,
    imageAlt: "Alibarbar Ingot 9000 versus RELX pod system comparison",
    relatedSlugs: ["alibarbar", "relx", "alibarbar-ingot-9000"],
    datePublished: "2026-03-13",
    dateModified: "2026-07-08",
  },
  {
    slug: "sp2s-vs-lana",
    title: "SP2S vs LANA: Pod Brand Comparison (Taiwan)",
    description: "Host ecosystem, flavours and buying logic - no universal winner, only fit.",
    intro:
      "SP2S and LANA are both major closed pod brands discussed by Taiwan pod users. This comparison focuses on ecosystem fit, generation matching and flavour habits rather than hype.",
    quickWinner:
      "SP2S wins for maximum flavour SKU breadth and third-party host awareness. LANA wins for balanced profiles and a cohesive host-plus-pod retail experience.",
    leftLabel: "SP2S",
    rightLabel: "LANA",
    rows: [
      { feature: "Flavour breadth", left: "32+ SKUs", right: "Curated range" },
      { feature: "Host ecosystem", left: "Wide third-party hosts", right: "LANA-first host matching" },
      { feature: "Generation rules", left: "Gen 1 and Gen 2 must be checked", right: "Match LANA pod SKU to host" },
      { feature: "Best for", left: "Flavour explorers", right: "Simple rotation" },
      { feature: "Buying risk", left: "Counterfeit and generation mismatch risk", right: "Host lock-in and smaller flavour matrix" },
    ],
    leftStrengths: ["Huge flavour matrix", "Strong community knowledge", "Flexible host ecosystem when matched correctly"],
    rightStrengths: ["Retail traceability", "Balanced sweetness", "Simpler product story for beginners"],
    verdict: [
      "Match pod generation and host before comparing flavours. A great flavour in the wrong generation is still the wrong purchase.",
      "SP2S suits flavour explorers who are willing to verify compatibility. LANA suits adults who want a more cohesive host and pod setup with balanced flavour profiles.",
    ],
    faq: [
      {
        q: "Can I use SP2S pods on LANA hosts?",
        a: "Generally no. Treat brands as separate ecosystems unless a manufacturer or retailer explicitly confirms compatibility for the exact pod and host.",
      },
      {
        q: "Which is better for beginners?",
        a: "LANA is often simpler because the ecosystem is more cohesive. SP2S is still beginner-friendly if you buy the correct generation for your host.",
      },
    ],
    region: "taiwan",
    heroImage: "/images/podpick-brand-choice.png",
    imageAlt: "SP2S versus LANA pod brand comparison",
    relatedSlugs: ["sp2s", "lana", "sp2s-universal-pods", "lana-pods"],
    datePublished: "2026-05-18",
    dateModified: "2026-07-08",
  },
];

export function getComparison(slug: string | undefined): HubComparison | undefined {
  if (!slug) return undefined;
  return hubComparisons.find((comparison) => comparison.slug === slug);
}

export function getComparisonPath(cmp: HubComparison): string {
  return cmp.path ?? `/comparisons/${cmp.slug}`;
}
