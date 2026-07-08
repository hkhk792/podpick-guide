import type { HubProduct } from "./types";

const AU = "/images/australia";

export const hubProducts: HubProduct[] = [
  {
    slug: "alibarbar-ingot-9000",
    brandSlug: "alibarbar",
    name: "Alibarbar Ingot 9000",
    title: "Alibarbar Ingot 9000 Review & Specifications",
    description:
      "Full specs for the Alibarbar Ingot 9000 — up to 9000 puffs, 22ml e-liquid, LED display and Australian flavour range.",
    overview: [
      "The Alibarbar Ingot 9000 is a high-capacity disposable vape for adult users who want longevity without refilling or charging.",
      "A 2350mAh battery and 22ml e-liquid reservoir support consistent vapour from first draw to depletion.",
      "The smart LED display shows remaining battery and e-liquid — rare in the disposable category.",
    ],
    specifications: [
      { label: "Puff rating", value: "Up to 9000" },
      { label: "E-liquid", value: "22ml" },
      { label: "Battery", value: "2350mAh (non-rechargeable)" },
      { label: "Activation", value: "Inhale-activated" },
      { label: "Display", value: "LED battery + e-liquid" },
      { label: "Weight", value: "~90g" },
    ],
    battery: [
      "Built-in 2350mAh cell designed for full device lifecycle.",
      "LED indicator helps avoid surprise depletion mid-day.",
    ],
    charging: ["Non-rechargeable — dispose responsibly when depleted per local regulations."],
    flavours: [
      "Quadruple Berry",
      "Peach Ice",
      "Fanta",
      "Mango",
      "Grape",
      "Strawberry Watermelon",
      "5 Flavour Custom Pack",
    ],
    pros: ["Industry-leading puff rating", "Display visibility", "Custom multi-flavour ordering"],
    cons: ["Not rechargeable", "Larger footprint than 2000-puff class"],
    faq: [
      {
        q: "How long does the Ingot 9000 last?",
        a: "Depends on draw length and frequency — heavy users may finish in days; light users may stretch weeks.",
      },
    ],
    relatedSlugs: ["alibarbar-vs-iget", "alibarbar-vs-hqd"],
    region: "australia",
    heroImage: `${AU}/hero-device.png`,
    imageAlt: "Alibarbar Ingot 9000 product hero",
    gallery: [
      `${AU}/products/flavor-quadruple-berry.png`,
      `${AU}/products/flavor-peach-ice.png`,
      `${AU}/products/flavor-fanta.png`,
      `${AU}/packs/custom-5-pack.png`,
    ],
    shopUrl: "https://ailibarbar.com",
    priceNote: "Pricing varies by flavour and pack size — check official AU store.",
    datePublished: "2026-03-01",
    dateModified: "2026-07-08",
    score: {
      flavorAccuracy: 9.5,
      cooling: 8.8,
      sweetness: 8.1,
      batteryLife: 9.2,
      leakResistance: 9.4,
      beginnerFriendly: 9.0,
      overall: 9.3,
    },
  },
  {
    slug: "sp2s-universal-pods",
    brandSlug: "sp2s",
    name: "SP2S Gen 2 Universal Pods",
    title: "SP2S Universal Pods: Compatibility & Flavour Guide",
    description: "SP2S Gen 2 universal pods — mesh coil, 32 flavours and host compatibility for Taiwan buyers.",
    overview: [
      "SP2S Gen 2 universal pods target compatible SP2S hosts with mesh coil MTL performance.",
      "Flavour SKUs span fruit, tea, ice and niche profiles — use our 32-flavour guide before bulk orders.",
    ],
    specifications: [
      { label: "Type", value: "Closed pre-filled pod" },
      { label: "Coil", value: "Mesh coil" },
      { label: "Draw", value: "MTL nicotine salt" },
      { label: "Generation", value: "Gen 2 universal" },
    ],
    battery: ["Powered by compatible host device"],
    charging: ["Charge host via USB — pods are not charged separately"],
    flavours: ["See SP2S 32-flavour guide for full matrix"],
    pros: ["Wide flavour choice", "Mesh coil clarity", "Strong ecosystem"],
    cons: ["Must match Gen 2 hosts", "Counterfeit risk from grey market"],
    faq: [{ q: "Gen 1 or Gen 2?", a: "This product page covers Gen 2 universal pods — verify your host label first." }],
    relatedSlugs: ["sp2s-vs-lana"],
    region: "taiwan",
    heroImage: "/images/podpick-flavor-selection.png",
    imageAlt: "SP2S universal pods",
    shopUrl: "https://lanatw1.com/product/sp2s-universal-pods",
    datePublished: "2026-04-03",
    dateModified: "2026-07-08",
  },
  {
    slug: "lana-pods",
    brandSlug: "lana",
    name: "LANA Pods",
    title: "LANA Pods: Specifications & Flavour Overview",
    description: "LANA pre-filled pods — compatibility, flavour families and buying tips for Taiwan.",
    overview: [
      "LANA pods pair with LANA hosts for a closed pod MTL experience.",
      "Flavour line emphasises balanced sweetness and retail-friendly packaging.",
    ],
    specifications: [
      { label: "Type", value: "Closed pre-filled pod" },
      { label: "Draw", value: "MTL" },
      { label: "Nicotine", value: "Salt nicotine (region-dependent)" },
    ],
    battery: ["Host-powered"],
    charging: ["USB charge on host device"],
    flavours: ["Fruit", "Tea", "Ice", "Classic profiles"],
    pros: ["Consistent quality", "Good for rotation"],
    cons: ["Host lock-in"],
    faq: [],
    relatedSlugs: ["sp2s-vs-lana"],
    region: "taiwan",
    heroImage: "/images/podpick-brand-choice.png",
    imageAlt: "LANA pods",
    shopUrl: "https://lanatw1.com/product/lana-pods",
    datePublished: "2026-04-05",
    dateModified: "2026-07-08",
  },
];

export function getProduct(slug: string): HubProduct | undefined {
  return hubProducts.find((p) => p.slug === slug);
}

export function getProductsByBrand(brandSlug: string): HubProduct[] {
  return hubProducts.filter((p) => p.brandSlug === brandSlug);
}
