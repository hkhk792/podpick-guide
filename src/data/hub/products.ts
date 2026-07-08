import type { HubProduct } from "./types";

const AU = "/images/australia";

type ProductSectionProfile = {
  productName: string;
  format: string;
  specStory: string;
  batteryStory: string;
  chargingStory: string;
  flavourStory: string;
  performanceStory: string;
  buyerStory: string;
  tradeoffStory: string;
  buyingStory: string;
};

function makeProductSections(profile: ProductSectionProfile): HubProduct["sections"] {
  return [
    {
      heading: "Overview",
      paragraphs: [
        `${profile.productName} is a ${profile.format}. The most useful way to evaluate it is not by a single headline claim, but by how the format behaves after repeated daily use.`,
        "PodPick Guide looks at setup, draw style, capacity, flavour stability, maintenance and regional buying context so adults can compare it against both disposables and pod systems without mixing categories.",
      ],
    },
    {
      heading: "Specs narrative",
      paragraphs: [
        profile.specStory,
        "Specifications are most helpful when they answer a practical question: how long it may last, whether it needs charging, what parts need replacing and how much the buyer has to manage after opening the box.",
      ],
    },
    {
      heading: "Battery",
      paragraphs: [
        profile.batteryStory,
        "Battery behaviour affects flavour more than many shoppers expect. Stable output helps the coil perform consistently, while low charge can make vapour feel weak or uneven.",
      ],
    },
    {
      heading: "Charging",
      paragraphs: [
        profile.chargingStory,
        "Do not improvise charging on any product that is not designed for it. Rechargeable hosts should use appropriate cables, while sealed non-rechargeable devices should be replaced or recycled when finished.",
      ],
    },
    {
      heading: "Flavours",
      paragraphs: [
        profile.flavourStory,
        "The best first purchase is usually a small range across flavour families. Once sweetness, cooling and profile preference are known, repeat buying becomes much easier.",
      ],
    },
    {
      heading: "Performance",
      paragraphs: [
        profile.performanceStory,
        "Performance should be judged across the full product life, not only the first ten puffs. Watch for flavour fade, leaking, weak output, burnt taste and whether the product gives clear end-of-life signals.",
      ],
    },
    {
      heading: "Who Should Buy",
      paragraphs: [
        profile.buyerStory,
        "Adults who do not already smoke or vape should not start. Buyers should also check local rules, nicotine labelling and retailer policies before ordering.",
      ],
    },
    {
      heading: "Pros/Cons analysis",
      paragraphs: [
        profile.tradeoffStory,
        "A good product is not universal. Capacity, portability, flavour choice, setup time, waste profile and compatibility risk all push buyers toward different formats.",
      ],
    },
    {
      heading: "Buying Tips",
      paragraphs: [
        profile.buyingStory,
        "Keep packaging until the product has been checked, buy from traceable retailers, avoid suspiciously cheap listings and compare exact product names rather than relying only on brand recognition.",
      ],
    },
  ];
}

export const hubProducts: HubProduct[] = [
  {
    slug: "alibarbar-ingot-9000",
    brandSlug: "alibarbar",
    name: "Alibarbar Ingot 9000",
    title: "Alibarbar Ingot 9000 Review & Specifications",
    description:
      "Full specs for the Alibarbar Ingot 9000 - up to 9000 puffs, 22ml e-liquid, LED display and Australian flavour range.",
    tldr:
      "The Alibarbar Ingot 9000 is the strongest long-life disposable in this hub: high capacity, display feedback, simple draw and flexible flavour packs.",
    overview: [
      "The Alibarbar Ingot 9000 is a high-capacity disposable vape for adult users who want longevity without refilling or charging. It is designed around a single-device lifecycle: open it, use it, monitor the display and replace or recycle it responsibly when finished.",
      "A 2350mAh built-in battery and 22ml e-liquid reservoir support the headline up-to-9000-puff rating. Real-world use depends on draw length and frequency, but the spec clearly places the Ingot in the long-life disposable category.",
      "The smart LED display is the most practical usability feature. It shows remaining battery and e-liquid, reducing the guesswork that often happens with sealed disposables.",
      "The device is inhale-activated, so there is no button sequence or setup. This makes it approachable for adults who want a simple mouth-to-lung experience without learning a pod or refillable system.",
      "Its main trade-off is size and single-use format. It is larger than compact disposables, and it is not rechargeable or refillable. Adults who want a reusable device should compare it with pod systems such as RELX, SP2S or LANA.",
    ],
    sections: makeProductSections({
      productName: "The Alibarbar Ingot 9000",
      format: "high-capacity all-in-one disposable vape for adult Australian buyers",
      specStory:
        "The core specification story is unusually clear: up to 9000 puffs, 22ml pre-filled e-liquid, a 2350mAh non-rechargeable battery, inhale activation, LED battery plus e-liquid display and an approximate 90g device weight.",
      batteryStory:
        "The built-in 2350mAh cell is sized to support the large e-liquid reservoir without asking the user to recharge. That is the key reason the device can remain simple while still targeting a high puff count.",
      chargingStory:
        "The Ingot 9000 is non-rechargeable. When the battery or e-liquid indicator reaches the end and vapour drops, the device has reached end-of-life.",
      flavourStory:
        "The range covers familiar fruit, ice, soda and tropical profiles, including Quadruple Berry, Peach Ice, Fanta, Mango, Grape and Strawberry Watermelon. Custom packs are useful because they let adults test several flavours in one order.",
      performanceStory:
        "The large battery and e-liquid capacity make the Ingot feel more consistent than many smaller disposables. The display also helps users understand whether a weak draw is likely battery, e-liquid or end-of-life related.",
      buyerStory:
        "It suits adults who want maximum simplicity, high capacity and no pod compatibility decisions. It is especially practical for buyers who dislike charging routines or want a device that can last longer between replacements.",
      tradeoffStory:
        "The main pros are longevity, display visibility and flavour-pack flexibility. The main cons are larger size, no recharging and the waste profile of a disposable device.",
      buyingStory:
        "Compare current flavour availability, pack pricing, shipping policy and authenticity details. Ailibarbar.com is a regional retailer reference for Australian Alibarbar stock and ordering information.",
    }),
    whoShouldBuy: [
      "Adult Australian buyers who want a long-lasting disposable with no setup",
      "Adults who value an LED battery and e-liquid display",
      "Flavour explorers who want custom pack flexibility",
      "Users who do not want pod generation or charging routines",
    ],
    performance: [
      "Best performance comes from gentle, moderate mouth-to-lung draws.",
      "The LED display helps users plan replacement before flavour and vapour fade unexpectedly.",
      "Cooling and sweetness vary by flavour, with Quadruple Berry and Peach Ice being approachable first picks.",
      "Heat exposure and chain-vaping can shorten perceived device life.",
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
      "Battery is not intended for user charging or modification.",
    ],
    charging: ["Non-rechargeable - dispose responsibly when depleted per local recycling guidance."],
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
        a: "It depends on draw length and frequency. Light users may stretch a device for weeks, while heavy users will finish it faster.",
      },
      {
        q: "Is the Alibarbar Ingot 9000 rechargeable?",
        a: "No. It is a non-rechargeable disposable with a built-in battery sized for the device lifecycle.",
      },
      {
        q: "What does the LED display show?",
        a: "It shows remaining battery and e-liquid level so adults can see when the device is nearing end-of-life.",
      },
      {
        q: "Can I refill it?",
        a: "No. The Ingot 9000 is sealed and pre-filled. Do not open or refill it.",
      },
      {
        q: "Which flavour should I try first?",
        a: "Quadruple Berry is a safe fruit-first choice, while Peach Ice is a good first cooling flavour.",
      },
      {
        q: "Is it better than a pod system?",
        a: "It is better for zero setup and convenience. A pod system is better if you want a rechargeable host and replaceable pods.",
      },
      {
        q: "Where can Australians buy it?",
        a: "Regional retailers such as ailibarbar.com provide current stock, bundles and shipping information for Australian buyers.",
      },
      {
        q: "How should I store it?",
        a: "Store it upright in a cool, dry place away from heat, sunlight, children and pets.",
      },
      {
        q: "What should I do when it is empty?",
        a: "Stop using it and recycle it through battery or e-waste channels where available.",
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
    priceNote: "Pricing varies by flavour and pack size - check the regional AU retailer.",
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
    description: "SP2S Gen 2 universal pods - mesh coil, 32 flavours and host compatibility for Taiwan buyers.",
    tldr:
      "SP2S Gen 2 Universal Pods are best for Taiwan pod users who want flavour variety and understand Gen 2 host compatibility.",
    overview: [
      "SP2S Gen 2 Universal Pods are closed pre-filled pods designed for compatible SP2S Gen 2 hosts. They are not standalone devices and they do not work like disposables.",
      "The value of SP2S is flavour breadth. Adults can rotate between fruit, tea, ice, mineral and sweeter profiles while keeping the same rechargeable host.",
      "The risk is compatibility. Gen 2 pods should be matched with Gen 2 hosts. SP2S Gen 1 pods and Gen 2 pods should not be treated as interchangeable.",
      "Mesh coil construction helps the pods deliver a clear mouth-to-lung draw when the host is charged and contacts are clean.",
      "SP2S is a good fit for adults who enjoy exploring flavours and are willing to read compatibility notes carefully before buying.",
    ],
    sections: makeProductSections({
      productName: "SP2S Gen 2 Universal Pods",
      format: "closed pre-filled pod product for compatible rechargeable SP2S Gen 2 hosts",
      specStory:
        "The key specifications are the closed pod format, mesh coil, mouth-to-lung nicotine-salt style draw and Gen 2 universal compatibility within the SP2S ecosystem.",
      batteryStory:
        "SP2S pods do not contain the main rechargeable battery. The host powers the pod, so weak vapour often means the host needs charging or the contacts need cleaning.",
      chargingStory:
        "Charge the host device according to its instructions. The pod itself is not charged and should be replaced when flavour, vapour or liquid level indicates it is finished.",
      flavourStory:
        "SP2S has one of the broadest Taiwan pod flavour catalogues, spanning grape, honey peach, jasmine green tea, ice, mineral-style and other rotation-friendly profiles.",
      performanceStory:
        "Performance is best when the correct Gen 2 host is used, contacts are clean and the pod is not overheated by rapid chain-vaping.",
      buyerStory:
        "These pods suit adults who already own or plan to buy a compatible SP2S Gen 2 host and want a large flavour matrix.",
      tradeoffStory:
        "The main pros are flavour variety and mesh-coil clarity. The main cons are generation mismatch risk and counterfeit risk from unclear sellers.",
      buyingStory:
        "Confirm your host generation before buying. Save host packaging, compare product photos and start with a small flavour set before bulk orders.",
    }),
    whoShouldBuy: [
      "Adults with a compatible SP2S Gen 2 host",
      "Flavour explorers who want a broad Taiwan pod matrix",
      "Users who prefer a rechargeable host over disposable replacement",
      "Buyers willing to verify generation labels before checkout",
    ],
    performance: [
      "Mesh coils support clear flavour when the pod and host are matched correctly.",
      "Low host battery can make flavour feel weak.",
      "Condensation under the pod should be wiped away to maintain contact.",
      "Generation mismatch is the most common cause of no-vapour complaints.",
    ],
    specifications: [
      { label: "Type", value: "Closed pre-filled pod" },
      { label: "Coil", value: "Mesh coil" },
      { label: "Draw", value: "MTL nicotine salt" },
      { label: "Generation", value: "Gen 2 universal" },
    ],
    battery: ["Powered by compatible host device", "Host output affects pod flavour and vapour stability"],
    charging: ["Charge host via USB - pods are not charged separately"],
    flavours: ["See SP2S flavour guide for fruit, tea, ice and mineral-style profiles"],
    pros: ["Wide flavour choice", "Mesh coil clarity", "Strong ecosystem"],
    cons: ["Must match Gen 2 hosts", "Counterfeit risk from grey market"],
    faq: [
      { q: "Gen 1 or Gen 2?", a: "This product page covers Gen 2 universal pods. Verify your host label before buying." },
      { q: "Do SP2S pods need charging?", a: "No. The host charges; the pod is replaced when finished." },
      { q: "Can I refill SP2S pods?", a: "Closed pods are not designed for refilling." },
      { q: "Why does my pod not fire?", a: "The host may be the wrong generation, low on battery, dirty at the contacts or incompatible." },
      { q: "Are SP2S pods beginner-friendly?", a: "Yes if compatibility is checked. The draw is simple once the correct host and pod are matched." },
      { q: "Can SP2S pods fit LANA hosts?", a: "Assume no unless exact compatibility is confirmed by a trusted source." },
      { q: "Which flavours should I start with?", a: "Choose one fruit, one tea and one ice profile to learn your preference before buying many pods." },
      { q: "How should I store spare pods?", a: "Keep them sealed, cool, dry and away from sunlight, children and pets." },
    ],
    relatedSlugs: ["sp2s-vs-lana"],
    region: "taiwan",
    heroImage: "/images/podpick-flavor-selection.png",
    imageAlt: "SP2S universal pods",
    shopUrl: "https://lanatw1.com/product/sp2s-universal-pods",
    datePublished: "2026-04-03",
    dateModified: "2026-07-08",
    score: {
      flavorAccuracy: 9.1,
      cooling: 8.5,
      sweetness: 8.4,
      batteryLife: 8.0,
      leakResistance: 8.7,
      beginnerFriendly: 9.2,
      overall: 8.9,
    },
  },
  {
    slug: "lana-pods",
    brandSlug: "lana",
    name: "LANA Pods",
    title: "LANA Pods: Specifications & Flavour Overview",
    description: "LANA pre-filled pods - compatibility, flavour families and buying tips for Taiwan.",
    tldr:
      "LANA Pods are a cleaner, more curated Taiwan pod option for adults who want matched hosts, balanced flavours and less flavour-matrix complexity than SP2S.",
    overview: [
      "LANA Pods are closed pre-filled pods intended for matching LANA hosts. They are part of a reusable host routine rather than an all-in-one disposable lifecycle.",
      "The product story is built around balance and clarity. LANA generally offers a more curated flavour range than SP2S, which can make it easier for beginners to choose.",
      "Compatibility still matters. Buyers should match the pod SKU to the intended LANA host and avoid assuming cross-brand fit.",
      "LANA is especially useful for adults who want a reliable flavour rotation without navigating very large pod matrices or several third-party hosts.",
      "The trade-off is narrower variety. SP2S may offer more exploration, while LANA focuses on a smoother path from host to pod to repeat purchase.",
    ],
    sections: makeProductSections({
      productName: "LANA Pods",
      format: "closed pre-filled pod product for compatible LANA hosts",
      specStory:
        "The core specification story is a closed pre-filled mouth-to-lung pod, host-powered operation and region-dependent nicotine labelling.",
      batteryStory:
        "The pod relies on the LANA host battery. If flavour becomes weak, charge the host and clean contacts before deciding the pod is finished.",
      chargingStory:
        "Only the host charges by USB. The pod is not charged, opened or refilled; it is replaced when empty or burnt.",
      flavourStory:
        "LANA focuses on fruit, tea, ice and classic profiles with a balanced sweetness style that suits adults who want repeatable daily flavours.",
      performanceStory:
        "Performance is strongest when pods are fresh, stored correctly and paired with the correct LANA host. Clean contacts help prevent weak firing.",
      buyerStory:
        "LANA suits adults who want a coherent host and pod ecosystem with less compatibility sprawl than broader pod systems.",
      tradeoffStory:
        "The main pros are consistent quality, balanced flavour and easy rotation. The main cons are host lock-in and a smaller flavour matrix than SP2S.",
      buyingStory:
        "Buy LANA pods with the host model in mind, keep packaging, and sample a small set before choosing a daily flavour.",
    }),
    whoShouldBuy: [
      "Adults who own a compatible LANA host",
      "Beginners who want a clearer Taiwan pod ecosystem",
      "Users who prefer balanced sweetness over extreme cooling",
      "Buyers who want pod rotation without disposable replacement",
    ],
    performance: [
      "Best with a charged LANA host and clean contacts.",
      "Balanced flavours make LANA suitable for daily rotation.",
      "Host lock-in means the correct pod SKU matters.",
      "Store spare pods cool and sealed for best flavour stability.",
    ],
    specifications: [
      { label: "Type", value: "Closed pre-filled pod" },
      { label: "Draw", value: "MTL" },
      { label: "Nicotine", value: "Salt nicotine (region-dependent)" },
      { label: "Power", value: "Compatible LANA host" },
    ],
    battery: ["Host-powered", "Battery performance depends on the rechargeable LANA device"],
    charging: ["USB charge on host device", "Pods are not charged separately"],
    flavours: ["Fruit", "Tea", "Ice", "Classic profiles"],
    pros: ["Consistent quality", "Good for rotation", "Beginner-friendly ecosystem"],
    cons: ["Host lock-in", "Smaller flavour matrix than SP2S"],
    faq: [
      { q: "Do LANA Pods fit every host?", a: "No. Match the pod SKU to the intended LANA host and do not assume cross-brand fit." },
      { q: "Are LANA Pods refillable?", a: "No. They are closed pre-filled pods designed for replacement." },
      { q: "Do LANA Pods need charging?", a: "No. Charge the host device; replace the pod when finished." },
      { q: "Is LANA better than SP2S?", a: "LANA is simpler and more curated; SP2S offers broader flavour variety." },
      { q: "What flavours does LANA focus on?", a: "Fruit, tea, ice and classic profiles with balanced sweetness." },
      { q: "Why is my LANA pod weak?", a: "The host may need charging, contacts may need cleaning, or the pod may be near end-of-life." },
      { q: "Is LANA good for beginners?", a: "Yes. It can be easier to understand than larger multi-generation pod ecosystems." },
      { q: "How should I store LANA Pods?", a: "Keep pods sealed, upright where possible, cool, dry and away from children and pets." },
    ],
    relatedSlugs: ["sp2s-vs-lana"],
    region: "taiwan",
    heroImage: "/images/podpick-brand-choice.png",
    imageAlt: "LANA pods",
    shopUrl: "https://lanatw1.com/product/lana-pods",
    datePublished: "2026-04-05",
    dateModified: "2026-07-08",
    score: {
      flavorAccuracy: 9.0,
      cooling: 8.3,
      sweetness: 8.0,
      batteryLife: 8.2,
      leakResistance: 8.8,
      beginnerFriendly: 8.9,
      overall: 8.8,
    },
  },
];

export function getProduct(slug: string | undefined): HubProduct | undefined {
  if (!slug) return undefined;
  return hubProducts.find((product) => product.slug === slug);
}

export function getProductsByBrand(brandSlug: string): HubProduct[] {
  return hubProducts.filter((product) => product.brandSlug === brandSlug);
}
