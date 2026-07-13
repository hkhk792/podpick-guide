import type { HubBrand } from "./types";

const AU = "/images/australia";
const TW = "/images";

type BrandSectionProfile = {
  name: string;
  format: string;
  flagship: string;
  regionFocus: string;
  historyAngle: string;
  productAngle: string;
  featureAngle: string;
  compatibilityAngle: string;
  flavourAngle: string;
  buyingAngle: string;
  marketAngle: string;
  bullets: string[];
};

function makeBrandSections(profile: BrandSectionProfile): HubBrand["sections"] {
  return [
    {
      heading: "Brand Overview",
      paragraphs: [
        `${profile.name} is best understood through its core format: ${profile.format}. For PodPick Guide readers, that means looking past headline marketing and asking how the brand behaves in daily use, how easy it is to buy the correct product, and whether the ecosystem is clear enough for adults comparing options across Australia and Taiwan.`,
        `The current brand story centres on ${profile.flagship}. ${profile.regionFocus} This context matters because a brand can be excellent for one type of buyer and frustrating for another if compatibility, supply or flavour expectations are misunderstood.`,
      ],
      bullets: profile.bullets,
    },
    {
      heading: "History",
      paragraphs: [
        `${profile.name}'s recent reputation has been shaped by ${profile.historyAngle}. Like many vape brands, its market position is not only the result of device specifications; it is also shaped by retailer education, user recommendations and how consistently products are available.`,
        "The important lesson for buyers is that brand age alone is not the full story. A mature brand may have more recognition, while a newer or more focused brand may have clearer hardware, stronger displays or a better flavour-bundle strategy.",
      ],
    },
    {
      heading: "Popular Products",
      paragraphs: [
        `${profile.productAngle} These products are the best starting point because they reveal the brand's intended user experience rather than isolated flavour names.`,
        "When comparing popular products, check capacity, battery behaviour, pod or device generation, display information, and whether the product is sold as a single unit, pod pack, host kit or multi-flavour bundle.",
      ],
    },
    {
      heading: "Main Features",
      paragraphs: [
        `${profile.featureAngle} These features should be evaluated through real use: draw consistency, flavour stability, leakage resistance, ease of setup and how obvious it is when the product is reaching end-of-life.`,
        "A feature is only useful if it solves a practical buyer problem. Displays help with planning, large flavour catalogues help rotation, and strict pod matching helps reliability when the retailer communicates it clearly.",
      ],
    },
    {
      heading: "Compatible Products",
      paragraphs: [
        `${profile.compatibilityAngle} Compatibility is especially important for pod ecosystems, where generation mismatches can make a correct-looking purchase unusable.`,
        "For all-in-one disposables, compatibility is simpler because there are no pods or refills. For pod brands, save host packaging, check generation labels and avoid assuming that physical fit means electrical compatibility.",
      ],
    },
    {
      heading: "Flavour Range",
      paragraphs: [
        `${profile.flavourAngle} Flavour range should be judged by breadth, clarity and repeatability rather than only by the number of SKUs.`,
        "A useful range gives adults clear choices across fruit, ice, tea, soda, menthol and classic profiles. The best first purchase is usually a small variety, not a bulk order of an untested flavour.",
      ],
    },
    {
      heading: "Buying Advice",
      paragraphs: [
        `${profile.buyingAngle} Buy from traceable regional retailers, compare the exact model or pod generation, and keep packaging until you have confirmed the product works as expected.`,
        "Adults should also check local regulations, age requirements, nicotine labelling, shipping policy and returns process before buying. PodPick Guide is independent educational content, not legal or medical advice.",
      ],
    },
    {
      heading: "Market Position",
      paragraphs: [
        `${profile.marketAngle} This is where the brand sits in the wider market rather than whether it is universally best.`,
        "The best brand for a buyer is the one that matches their format preference, flavour tolerance, budget, local availability and willingness to manage charging or compatibility. That is why PodPick Guide compares brands by use case instead of ranking one name above all others.",
      ],
    },
  ];
}

export const hubBrands: HubBrand[] = [
  {
    slug: "alibarbar",
    name: "Alibarbar",
    title: "Alibarbar Brand Guide: Ingot 9000 & Australian Disposable Range",
    description:
      "Independent overview of Alibarbar - flagship Ingot 9000 disposable, LED display, flavour packs and how it compares in Australia.",
    intro:
      "Alibarbar is an Australian-focused disposable vape brand built around the Ingot 9000, a high-capacity device with smart LED battery and e-liquid display.",
    overview: [
      "Alibarbar is the clearest example of a high-capacity disposable brand designed around a single flagship idea: make the device last longer, show the user what is left, and remove setup from the buying experience. The Ingot 9000 is the centre of that idea, with a large 22ml e-liquid capacity, a 2350mAh built-in battery and a gold ingot-inspired body.",
      "The brand's strength is practical simplicity. Adults do not need to understand coil resistance, refill bottles, pod generations or host charging routines before using the device. They need to choose a flavour, remove the packaging and take a gentle draw. That makes Alibarbar easy to explain and easy to compare against compact disposable brands.",
      "Alibarbar also leans into pack flexibility. A single-device range can feel limiting if shoppers must commit to one flavour at a time, so custom flavour packs are important. They let adults test several profiles or combine daily-use flavours with occasional change-up flavours such as soda or tropical blends.",
      "The smart LED display is the feature that separates the Ingot 9000 from many older disposable formats. It reduces guesswork by showing battery and e-liquid status, which is useful for a large device that may last many days or weeks depending on draw style.",
      "For PodPick Guide, Alibarbar is not treated as the owner of this knowledge hub. It is one brand in a broader regional landscape, with www.alibarbar.mom understood as a regional retailer for Australian buyers who want current stock, bundles and shipping information.",
      "The main buying question is whether an adult wants maximum simplicity and capacity in one device. If the answer is yes, Alibarbar is one of the strongest disposable options to compare first.",
    ],
    sections: makeBrandSections({
      name: "Alibarbar",
      format: "high-capacity all-in-one disposable devices",
      flagship: "the Ingot 9000 and its flavour-pack system",
      regionFocus:
        "Its most visible content and retail context is Australia, where adult buyers often compare it against IGET, HQD, Gunnpod, KUZ and pod-system alternatives.",
      historyAngle:
        "a move away from small low-puff disposables toward longer-lasting devices with display feedback and clearer pack value",
      productAngle:
        "The Alibarbar Ingot 9000 is the anchor product, supported by single flavours and custom multi-device packs.",
      featureAngle:
        "The key features are up to 9000 puffs, 22ml e-liquid capacity, a 2350mAh non-rechargeable battery, inhale activation and a smart LED battery plus e-liquid display.",
      compatibilityAngle:
        "Alibarbar disposables are self-contained, so there are no compatible pods, hosts, refills or coils to match.",
      flavourAngle:
        "The range is built around berry, ice, mango, grape, peach, soda, lychee and tropical profiles, with custom packs helping buyers sample more than one direction.",
      buyingAngle:
        "Alibarbar is best bought by comparing the exact Ingot 9000 spec sheet, the available flavour list and the retailer's current pack pricing.",
      marketAngle:
        "Alibarbar sits at the longevity and convenience end of the Australian disposable market, competing less on tiny form factor and more on device life, display clarity and flavour-bundle control.",
      bullets: ["Best for long device life", "Best for display visibility", "Strong custom pack story"],
    }),
    latestArticleSlugs: [
      "what-is-alibarbar-ingot-9000",
      "best-alibarbar-flavours-australia",
      "alibarbar-quadruple-berry-review",
    ],
    history: [
      "Alibarbar entered the Australian market with the Ingot line, positioning around longevity and flavour flexibility rather than ultra-compact form factors.",
      "The brand is best known for the Ingot 9000 rated up to 9000 puffs, 22ml e-liquid capacity and build-your-own multi-flavour packs.",
    ],
    popularProducts: ["Alibarbar Ingot 9000", "5 Flavour Custom Pack", "3-pack and 10-pack bundles"],
    mainFeatures: [
      "Up to 9000 puffs per device",
      "Smart LED battery and e-liquid display",
      "22ml e-liquid and 2350mAh battery",
      "Inhale-activated MTL draw",
    ],
    compatibleProducts: ["Standalone disposable - no pods or refills required"],
    flavourRange: [
      "Quadruple Berry",
      "Peach Ice",
      "Fanta",
      "Mango",
      "Grape",
      "Strawberry Watermelon",
      "Custom 5-flavour mix packs",
    ],
    pros: ["High puff count", "On-device display", "Strong flavour catalogue for AU", "Custom pack flexibility"],
    cons: ["Non-rechargeable", "Larger than compact 2000-puff devices", "Adult 18+ only - check local laws"],
    faq: [
      {
        q: "Is Alibarbar rechargeable?",
        a: "The Ingot 9000 is a non-rechargeable disposable designed for a single lifecycle until the battery or e-liquid is depleted.",
      },
      {
        q: "What is Alibarbar best known for?",
        a: "It is best known for the Ingot 9000, a high-capacity disposable with up to 9000 puffs, 22ml e-liquid capacity and an LED battery plus e-liquid display.",
      },
      {
        q: "Where can Australians buy Alibarbar?",
        a: "Australian buyers can compare current stock, bundles and shipping information at regional retailers such as www.alibarbar.mom.",
      },
      {
        q: "Does Alibarbar use pods?",
        a: "No. The Ingot 9000 is a self-contained disposable, so there are no separate pods, coils or refills to match.",
      },
      {
        q: "Which Alibarbar flavour is safest for beginners?",
        a: "Quadruple Berry and Peach Ice are common first picks because they are familiar, balanced and easy to understand.",
      },
      {
        q: "How does Alibarbar compare with IGET?",
        a: "Alibarbar usually wins on headline puff count and display visibility, while IGET has wider model recognition and many legacy flavour options.",
      },
      {
        q: "Is Alibarbar suitable for non-smokers?",
        a: "No. Vaping products are intended only for adults who already smoke or vape and are not for minors, non-smokers or pregnant people.",
      },
      {
        q: "What should I check before buying?",
        a: "Check the product spec, flavour, nicotine information on packaging, regional rules, shipping policy and retailer traceability.",
      },
    ],
    relatedSlugs: ["iget", "hqd", "kuz"],
    compareSlug: "alibarbar-vs-iget",
    productSlug: "alibarbar-ingot-9000",
    region: "australia",
    heroImage: `${AU}/hero-device.png`,
    imageAlt: "Alibarbar Ingot 9000 disposable vape device",
    shopUrl: "https://www.alibarbar.mom",
    datePublished: "2026-03-20",
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
    slug: "sp2s",
    name: "SP2S",
    title: "SP2S Brand Guide: Pods, Hosts & Flavour Ecosystem",
    description:
      "SP2S (Si Bo Rui) closed pod systems - Gen 1 vs Gen 2 compatibility, 32-flavour line-up and Taiwan buying context.",
    intro:
      "SP2S is one of the most discussed pod brands in Taiwan, known for mesh-coil pods, wide flavour variety and distinct Gen 1 / Gen 2 compatibility rules.",
    overview: [
      "SP2S is a flavour-led closed pod ecosystem. Its strongest advantage is breadth: adults comparing Taiwan pod systems often encounter SP2S because the flavour catalogue is large, the host ecosystem is well discussed, and the brand appears in many compatibility conversations.",
      "The brand is also more complex than a simple disposable. Buyers need to understand pod generation, host matching and retailer terminology. Gen 1 and Gen 2 are not interchangeable, so a good SP2S purchase starts with identifying the host before choosing flavours.",
      "When matched correctly, SP2S can be very rewarding. Mesh-coil pods deliver clear mouth-to-lung flavour, and the wide range makes it easy to rotate between fruit, tea, ice and unusual profiles without changing the whole device.",
      "The risk is overconfidence. A shopper may recognise the SP2S name, buy a popular flavour, and still end up with the wrong pod generation. That is why PodPick Guide treats SP2S as a brand where education is part of the product experience.",
      "For Taiwan readers, SP2S is often compared with LANA. SP2S usually wins on flavour breadth and ecosystem discussion, while LANA can feel simpler and more curated.",
      "SP2S is best for adults who want flavour exploration and are willing to verify compatibility before buying.",
    ],
    sections: makeBrandSections({
      name: "SP2S",
      format: "closed pre-filled pods powered by compatible rechargeable hosts",
      flagship: "Gen 2 universal pods, Gen 1 pods and host devices such as SP2S Pro or Bullet-style hosts",
      regionFocus:
        "Its strongest PodPick Guide context is Taiwan, where buyers often compare pod generation, flavour menus and host compatibility before ordering.",
      historyAngle:
        "broad flavour expansion and a growing host ecosystem that made compatibility guides essential",
      productAngle:
        "SP2S Gen 2 universal pods and SP2S host devices are the most important products to understand before exploring the wider flavour matrix.",
      featureAngle:
        "The main features are mesh-coil pod clarity, nicotine-salt mouth-to-lung draw, broad flavour selection and a recognisable generation structure.",
      compatibilityAngle:
        "SP2S compatibility depends on host generation and pod generation. Gen 1 and Gen 2 should be treated as separate systems.",
      flavourAngle:
        "SP2S is known for a wide set of fruit, tea, mineral, ice and sweet profiles, making it attractive to adults who rotate flavours frequently.",
      buyingAngle:
        "Buy SP2S only after confirming the exact host and pod generation, then choose a small flavour set before committing to bulk quantities.",
      marketAngle:
        "SP2S occupies the flavour-explorer lane of the Taiwan pod market, where catalogue size and community knowledge are key strengths.",
      bullets: ["Best for flavour variety", "Requires generation checks", "Strong Taiwan pod discussion"],
    }),
    latestArticleSlugs: ["sp2s-vs-lana"],
    history: [
      "SP2S built recognition through universal pod lines compatible with multiple host devices.",
      "The brand expanded flavour SKUs aggressively, making flavour guides essential before bulk purchases.",
    ],
    popularProducts: ["SP2S Gen 2 universal pods", "SP2S Gen 1 pods", "SP2S Pro host", "Bullet host"],
    mainFeatures: ["Mesh coil pods", "Nicotine salt MTL", "32+ flavour SKUs", "Gen 1 / Gen 2 pod families"],
    compatibleProducts: ["SP2S Pro", "Bullet", "Cartoon host", "Atomizer host - check generation"],
    flavourRange: ["Grape", "Honey Peach", "Jasmine Green Tea", "Antarctic Ice", "Mineral Water", "Tea series"],
    pros: ["Huge flavour catalogue", "Stable MTL experience", "Strong third-party host ecosystem"],
    cons: ["Gen 1/2 not interchangeable", "Counterfeit risk if sourcing is unclear", "Flavour naming varies by batch"],
    faq: [
      {
        q: "Can SP2S Gen 1 and Gen 2 pods mix?",
        a: "No. Always match pod generation to your host. Gen 1 and Gen 2 are separate compatibility families.",
      },
      {
        q: "Why is SP2S popular in Taiwan?",
        a: "It combines a large flavour catalogue with a well-known pod ecosystem, which makes it attractive for adults who enjoy rotating flavours.",
      },
      {
        q: "Is SP2S beginner-friendly?",
        a: "Yes if the buyer checks compatibility first. The draw is simple, but choosing the wrong pod generation is an easy mistake.",
      },
      {
        q: "What flavours is SP2S known for?",
        a: "SP2S is known for fruit, tea, ice and mineral-style profiles, including grape, honey peach and jasmine green tea style flavours.",
      },
      {
        q: "Can SP2S pods fit LANA hosts?",
        a: "Assume no unless exact compatibility is confirmed. Treat SP2S and LANA as separate ecosystems.",
      },
      {
        q: "How can I avoid fake SP2S pods?",
        a: "Buy from traceable retailers, check packaging quality, verify generation labels and avoid suspiciously cheap listings.",
      },
      {
        q: "Should I buy many SP2S flavours at once?",
        a: "Start with a small variety across different flavour families. Bulk buying is safer after you know your cooling and sweetness preferences.",
      },
    ],
    relatedSlugs: ["lana", "relx"],
    compareSlug: "sp2s-vs-lana",
    productSlug: "sp2s-universal-pods",
    region: "taiwan",
    heroImage: `${TW}/podpick-flavor-selection.png`,
    imageAlt: "SP2S pod flavour lineup",
    shopUrl: "https://lanatw1.com/product/sp2s-universal-pods",
    datePublished: "2026-04-01",
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
    slug: "lana",
    name: "LANA",
    title: "LANA Brand Guide: Pods, Hosts & Flavour Strategy",
    description:
      "LANA closed pod brand overview - device line-up, flavour positioning and how it compares with SP2S in Taiwan.",
    intro:
      "LANA focuses on refined flavour profiles and a cohesive host + pod ecosystem popular among Taiwan pod users.",
    overview: [
      "LANA is a closed pod brand with a more curated personality than SP2S. Instead of trying to win every flavour-count comparison, it presents itself through balanced sweetness, tidy retail bundles and a host-plus-pod experience that feels easier for many beginners.",
      "The brand suits adults who want a predictable pod routine. A LANA buyer is usually choosing a host, choosing matching pods and rotating flavours within a more controlled ecosystem rather than navigating many third-party host combinations.",
      "That simplicity is valuable in Taiwan, where pod shoppers often face compatibility confusion. LANA does not remove every risk, but the product story is easier to explain: match LANA pods with the intended LANA host and buy from traceable sellers.",
      "Flavour is still central. LANA profiles tend to feel balanced rather than extreme, with fruit, tea, ice and classic options for adults who prefer steady daily use over novelty chasing.",
      "Compared with SP2S, LANA gives up some flavour breadth but gains a more cohesive buying path. That makes it a strong recommendation for adults who value clarity and repeatability.",
      "For PodPick Guide, LANA is one of the main Taiwan ecosystem brands to understand because it shows the trade-off between maximum variety and a cleaner matched-device experience.",
    ],
    sections: makeBrandSections({
      name: "LANA",
      format: "closed pod systems with matched hosts and pre-filled pods",
      flagship: "LANA pods, LANA host devices and retail-friendly pod bundles",
      regionFocus:
        "Its main PodPick Guide context is Taiwan, where it is commonly compared with SP2S for flavour strategy and ease of buying.",
      historyAngle:
        "a retail-led pod ecosystem that grew through host and pod bundles rather than flavour count alone",
      productAngle:
        "LANA pods and LANA hosts define the brand experience, with compatible bundles making the entry path clearer for new buyers.",
      featureAngle:
        "The main features are closed-pod convenience, balanced flavour delivery, host colour options and a simple mouth-to-lung routine.",
      compatibilityAngle:
        "LANA pods should be matched with intended LANA hosts. Cross-brand compatibility should not be assumed.",
      flavourAngle:
        "LANA focuses on fruit, tea, ice and classic profiles that tend to feel balanced rather than aggressively sweet or cold.",
      buyingAngle:
        "LANA is best bought as a matched ecosystem: choose the host, confirm pod compatibility and then sample a few flavours before stocking up.",
      marketAngle:
        "LANA sits in the curated pod lane, competing with SP2S by offering a simpler product story and balanced flavour experience.",
      bullets: ["Best for curated pods", "Strong beginner path", "Balanced flavour style"],
    }),
    latestArticleSlugs: ["sp2s-vs-lana"],
    history: [
      "LANA grew through pod + host bundles and consistent retail availability.",
      "The brand competes on flavour clarity and accessory ecosystem rather than sheer SKU count alone.",
    ],
    popularProducts: ["LANA pods", "LANA host", "LANA e-liquid 30ml"],
    mainFeatures: ["Closed pod system", "MTL nicotine salt", "Retail-friendly packaging", "Host colour variants"],
    compatibleProducts: ["LANA-branded hosts", "Check pod SKU before cross-brand attempts"],
    flavourRange: ["Fruit series", "Tea series", "Ice series", "Tobacco-alternative profiles"],
    pros: ["Balanced sweetness", "Retail traceability", "Good for flavour rotation"],
    cons: ["Smaller flavour matrix vs SP2S", "Host-specific compatibility", "Regional SKU differences"],
    faq: [
      {
        q: "LANA vs SP2S - which is better?",
        a: "Neither is universally better. SP2S offers more flavour breadth, while LANA is often simpler and more curated.",
      },
      {
        q: "Do LANA pods fit every LANA host?",
        a: "Check the exact SKU and host model. LANA is simpler than some ecosystems, but compatibility should still be verified.",
      },
      {
        q: "Is LANA good for beginners?",
        a: "Yes. LANA can be beginner-friendly because the host and pod story is comparatively cohesive.",
      },
      {
        q: "What flavours does LANA focus on?",
        a: "LANA typically focuses on fruit, tea, ice and classic profiles with balanced sweetness.",
      },
      {
        q: "Can LANA pods fit SP2S hosts?",
        a: "Assume no unless exact compatibility is confirmed by a trusted source.",
      },
      {
        q: "Why choose LANA over a disposable?",
        a: "Choose LANA if you prefer a reusable host and replaceable pods instead of replacing the whole device.",
      },
      {
        q: "How should I buy LANA safely?",
        a: "Use traceable retailers, keep packaging, confirm host compatibility and avoid listings with unclear product photos.",
      },
    ],
    relatedSlugs: ["sp2s", "relx"],
    compareSlug: "sp2s-vs-lana",
    productSlug: "lana-pods",
    region: "taiwan",
    heroImage: `${TW}/podpick-brand-choice.png`,
    imageAlt: "LANA pod and host products",
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
  {
    slug: "iget",
    name: "IGET",
    title: "IGET Brand Guide: Australian Disposable Line-up",
    description: "IGET disposable vapes in Australia - models, flavours and comparison with Alibarbar Ingot 9000.",
    intro: "IGET is one of Australia's most recognised disposable brands with a broad model and flavour catalogue.",
    overview: [
      "IGET is a recognition-led disposable brand in Australia. Many adult buyers know the name before they know the exact model, which gives the brand a strong starting position in comparisons.",
      "The challenge with IGET is that the brand covers multiple device sizes and puff classes. A comparison only makes sense when you know whether the buyer is considering an IGET Bar, Legend, King or another model.",
      "IGET's strength is breadth. It offers familiar fruit, ice and classic profiles across several device formats, which makes it easy for adults to find a known flavour style.",
      "Against Alibarbar, IGET usually wins on brand familiarity and model variety, while Alibarbar wins on a clearer high-capacity spec sheet and display visibility.",
      "For buyers, the practical question is not simply IGET or Alibarbar. It is whether the preferred IGET model offers enough capacity, flavour and device feedback for the price.",
    ],
    sections: makeBrandSections({
      name: "IGET",
      format: "disposable vapes across several model sizes",
      flagship: "IGET Bar, IGET Legend and other well-known disposable models",
      regionFocus:
        "Its strongest context here is Australia, where adult buyers frequently compare familiar IGET models with newer high-capacity devices.",
      historyAngle:
        "wide retail recognition and a broad flavour catalogue built across multiple disposable formats",
      productAngle:
        "IGET's popular products vary by model, so buyers should compare exact puff count, battery, e-liquid capacity and flavour availability.",
      featureAngle:
        "The key features are simple inhale activation, familiar flavour choices and a wide spread of device sizes.",
      compatibilityAngle:
        "IGET disposables are self-contained and do not accept pods or refills.",
      flavourAngle:
        "IGET is known for fruit, ice, mint and classic profiles, with many flavours becoming familiar to Australian disposable buyers.",
      buyingAngle:
        "Buy IGET by model, not just by brand name. Specs vary too much to treat every IGET as the same device.",
      marketAngle:
        "IGET sits in the established-disposable lane, competing on recognition and variety rather than a single flagship spec.",
      bullets: ["Strong brand recognition", "Many model sizes", "Broad flavour familiarity"],
    }),
    latestArticleSlugs: ["alibarbar-vs-iget"],
    history: [
      "IGET gained market share through familiar naming and wide retail distribution.",
      "Model puff counts range from compact bars to mid/high capacity devices.",
    ],
    popularProducts: ["IGET Bar", "IGET Legend", "IGET King"],
    mainFeatures: ["Wide model range", "Established AU flavour catalogue", "Inhale activation"],
    compatibleProducts: ["Self-contained disposables"],
    flavourRange: ["Fruit", "Mint", "Tobacco-style", "Ice blends"],
    pros: ["Brand familiarity", "Many flavour options", "Multiple price tiers"],
    cons: ["Specs vary heavily by model", "Often no battery display", "Less custom pack flexibility"],
    faq: [
      { q: "IGET vs Alibarbar?", a: "IGET has broader model familiarity; Alibarbar has a clearer Ingot 9000 high-capacity display-led offer." },
      { q: "Are all IGET devices the same?", a: "No. Puff count, battery and size vary by model, so compare exact SKUs." },
      { q: "Does IGET use pods?", a: "IGET is best known for self-contained disposables, not closed pod systems." },
      { q: "Is IGET good for beginners?", a: "It can be simple to use, but beginners still need to choose the right model and understand adult-only rules." },
      { q: "Does IGET have many flavours?", a: "Yes. IGET's flavour familiarity is one of its major strengths." },
      { q: "Does IGET usually have a display?", a: "Many familiar IGET models do not include a battery and e-liquid display, though specs can change by model." },
    ],
    relatedSlugs: ["alibarbar", "hqd"],
    compareSlug: "alibarbar-vs-iget",
    region: "australia",
    heroImage: `${AU}/products/flavor-grape.png`,
    imageAlt: "IGET style disposable vape flavours",
    datePublished: "2026-03-21",
    dateModified: "2026-07-08",
  },
  {
    slug: "hqd",
    name: "HQD",
    title: "HQD Brand Guide",
    description: "HQD disposable brand - compact designs and how they compare with high-puff devices.",
    intro: "HQD is known for compact disposable form factors and familiar flavour selections in Australia.",
    overview: [
      "HQD is best understood as a compact-disposable reference point. Many adults encounter it when comparing simple, pocketable devices against larger high-puff alternatives.",
      "The brand's appeal is straightforward: simple activation, familiar flavours and a smaller feel in the hand. That can be more important than maximum capacity for some buyers.",
      "Against Alibarbar, HQD usually represents the portability side of the trade-off. Alibarbar is larger and longer-lasting, while HQD-style devices can feel more discreet and lightweight.",
      "Specs vary by HQD model, so any comparison should be done against the exact device rather than the brand name alone.",
      "For PodPick Guide, HQD is useful because it shows why bigger is not always automatically better. The right device depends on whether the buyer values pocket size or fewer replacements.",
    ],
    sections: makeBrandSections({
      name: "HQD",
      format: "compact disposable vape devices across several models",
      flagship: "Cuvie-style and other compact disposable formats",
      regionFocus:
        "Its key context is Australia, where compact devices are often compared with high-puff display disposables.",
      historyAngle:
        "recognition in the earlier compact disposable category before very high-puff devices became more visible",
      productAngle:
        "HQD products are best compared by exact model because puff count and battery capacity vary across the catalogue.",
      featureAngle:
        "The main features are portability, inhale activation and familiar flavour options.",
      compatibilityAngle:
        "HQD disposables are self-contained and do not use separate pods or refills.",
      flavourAngle:
        "HQD generally covers fruit, mint and classic profiles that are easy for adults to understand.",
      buyingAngle:
        "Choose HQD if compact size matters more than display technology or maximum puff count.",
      marketAngle:
        "HQD occupies the portability and simplicity lane of the disposable market.",
      bullets: ["Compact form factor", "Simple activation", "Model-specific specs"],
    }),
    latestArticleSlugs: ["alibarbar-vs-hqd"],
    history: ["HQD built recognition on portable devices before high-puff models became mainstream."],
    popularProducts: ["HQD Cuvie-style devices", "Compact disposables"],
    mainFeatures: ["Portable designs", "Simple inhale activation"],
    compatibleProducts: ["Standalone disposables"],
    flavourRange: ["Fruit", "Mint", "Classic profiles"],
    pros: ["Compact", "Easy for beginners"],
    cons: ["Lower capacity vs 9000-puff class"],
    faq: [
      { q: "Is HQD better than Alibarbar?", a: "HQD can be better for pocket size; Alibarbar is stronger for high capacity and display visibility." },
      { q: "Does HQD have high puff options?", a: "Some models may be higher capacity, but specs vary. Always compare the exact device." },
      { q: "Is HQD rechargeable?", a: "It depends on the model. Many compact disposables are non-rechargeable." },
      { q: "Does HQD use pods?", a: "HQD is mainly discussed here as a standalone disposable brand." },
      { q: "Who should choose HQD?", a: "Adults who want a compact, simple device and do not need maximum puff count may consider HQD." },
      { q: "What should I check before buying HQD?", a: "Check puff rating, battery, e-liquid capacity, authenticity, local rules and seller traceability." },
    ],
    relatedSlugs: ["alibarbar", "iget"],
    compareSlug: "alibarbar-vs-hqd",
    region: "australia",
    heroImage: `${AU}/products/flavor-peach-ice.png`,
    imageAlt: "HQD disposable vape",
    datePublished: "2026-03-22",
    dateModified: "2026-07-08",
  },
  {
    slug: "relx",
    name: "RELX",
    title: "RELX Brand Guide: Pod Systems & Market Position",
    description: "RELX closed pod overview for Taiwan and Asia-Pacific pod shoppers.",
    intro: "RELX is a major closed pod brand with strong retail presence and device + pod bundles.",
    overview: [
      "RELX is one of the clearest examples of a polished closed pod system. Its appeal comes from reusable hardware, replaceable pods, sleek device design and a retail ecosystem that is easier to recognise than many smaller pod brands.",
      "Unlike all-in-one disposables, RELX asks the adult buyer to manage a host device. That means charging the device, buying compatible pods and understanding generation rules.",
      "The benefit is a more reusable routine. Adults who dislike replacing the whole device every time may prefer a pod system because only the pod changes during regular use.",
      "RELX competes with Taiwan pod brands such as SP2S and LANA, but it often feels more mainstream and hardware-led. It may not offer the same niche flavour breadth as SP2S, but the device experience is polished.",
      "Against Alibarbar, RELX is a format comparison rather than a like-for-like brand comparison. Alibarbar wins on zero setup; RELX wins for users who want a rechargeable body and pod replacement routine.",
    ],
    sections: makeBrandSections({
      name: "RELX",
      format: "rechargeable closed pod systems with replaceable pods",
      flagship: "RELX device generations and matching RELX pods",
      regionFocus:
        "Its context spans Taiwan and broader Asia-Pacific pod shopping, where buyers compare reusable pod systems with disposables.",
      historyAngle:
        "hardware polish, retail presence and a recognisable closed-pod experience",
      productAngle:
        "RELX products are best understood as a host-plus-pod system where generation matching matters.",
      featureAngle:
        "The main features are rechargeable hosts, replaceable pods, smooth mouth-to-lung draw and a polished device feel.",
      compatibilityAngle:
        "RELX pods should be matched to the correct RELX device generation. Cross-brand compatibility should not be assumed.",
      flavourAngle:
        "RELX usually covers fruit, menthol and classic profiles, with a more mainstream range than flavour-heavy specialist pod brands.",
      buyingAngle:
        "Choose RELX if you want a reusable host and are comfortable managing charging and pod replacement.",
      marketAngle:
        "RELX sits in the polished mainstream pod-system lane, between compact closed pods and broader flavour-explorer ecosystems.",
      bullets: ["Reusable host", "Polished hardware", "Generation matching required"],
    }),
    latestArticleSlugs: ["alibarbar-vs-relx", "sp2s-vs-lana"],
    history: ["RELX expanded through sleek hardware and pre-filled pod convenience."],
    popularProducts: ["RELX device generations", "RELX pods"],
    mainFeatures: ["Closed pods", "Leak-resistant design focus", "Retail ecosystem"],
    compatibleProducts: ["RELX-matched pods per device generation"],
    flavourRange: ["Classic tobacco", "Fruit", "Menthol"],
    pros: ["Polished hardware", "Wide retail", "Beginner-friendly"],
    cons: ["Pod lock-in per generation", "Fewer niche flavours vs SP2S"],
    faq: [
      { q: "Is RELX a disposable?", a: "RELX is primarily known for rechargeable closed pod systems, not all-in-one disposables." },
      { q: "Do RELX pods fit other brands?", a: "Assume no unless exact compatibility is confirmed." },
      { q: "Is RELX easier than SP2S?", a: "RELX can feel simpler as a mainstream pod system, while SP2S offers broader flavour exploration." },
      { q: "Does RELX need charging?", a: "Yes. The host device is rechargeable; pods are replaced rather than charged." },
      { q: "Who should choose RELX?", a: "Adults who want polished reusable hardware and a straightforward pod routine may prefer RELX." },
      { q: "How does RELX compare with Alibarbar?", a: "RELX is reusable and pod-based; Alibarbar is disposable and ready out of the box." },
    ],
    relatedSlugs: ["sp2s", "lana"],
    compareSlug: "alibarbar-vs-relx",
    region: "global",
    heroImage: `${TW}/podpick-disposable-refillable.png`,
    imageAlt: "RELX pod system",
    datePublished: "2026-04-10",
    dateModified: "2026-07-08",
  },
  {
    slug: "kuz",
    name: "KUZ",
    title: "KUZ Brand Guide",
    description: "KUZ disposable brand in Australia and comparison with Alibarbar Ingot 9000.",
    intro: "KUZ competes in the high-puff disposable segment with alternative flavour positioning.",
    overview: [
      "KUZ is a high-puff disposable competitor in the Australian comparison set. It matters because many adults are no longer choosing between tiny disposables only; they are comparing large-capacity devices with different flavour claims and spec clarity.",
      "The main issue with KUZ is model specificity. Like many disposable brands, headline performance depends on the exact unit, so buyers should not assume every KUZ device has the same battery, display or e-liquid capacity.",
      "KUZ can be attractive when a specific flavour or form factor appeals. It gives adult shoppers another option in the high-puff category rather than forcing a choice between only legacy compact devices and Alibarbar.",
      "Against Alibarbar, KUZ is best compared through clarity. Alibarbar's Ingot 9000 has a simple spec story: up to 9000 puffs, 22ml, 2350mAh and LED display. KUZ needs exact model comparison.",
      "For PodPick Guide, KUZ is a useful reminder that high-puff marketing should always be checked against real product details, retailer traceability and regional compliance.",
    ],
    sections: makeBrandSections({
      name: "KUZ",
      format: "high-puff disposable vape devices",
      flagship: "KUZ high-puff disposables across model-specific flavour ranges",
      regionFocus:
        "Its key context is Australia, where adult buyers compare high-puff disposables for capacity, flavour and value.",
      historyAngle:
        "competition in the high-puff disposable segment as buyers moved toward longer-lasting devices",
      productAngle:
        "KUZ products should be compared by exact model because the practical experience depends on battery, capacity and display details.",
      featureAngle:
        "The main features are high-puff positioning, disposable simplicity and alternative flavour mixes.",
      compatibilityAngle:
        "KUZ disposables are standalone devices and do not require separate pods, refills or host matching.",
      flavourAngle:
        "KUZ generally competes through fruit, ice and mixed profiles that give buyers alternatives to better-known disposable names.",
      buyingAngle:
        "Choose KUZ only after checking the model's puff rating, e-liquid capacity, battery and whether a display is included.",
      marketAngle:
        "KUZ sits in the alternative high-puff disposable lane, competing with Alibarbar on value and flavour but requiring careful spec comparison.",
      bullets: ["High-puff positioning", "Alternative flavours", "Check exact model"],
    }),
    latestArticleSlugs: ["alibarbar-vs-kuz"],
    history: ["KUZ targets vapers comparing capacity and value in the AU disposable category."],
    popularProducts: ["KUZ high-puff disposables"],
    mainFeatures: ["High-puff options", "Alternative flavour mixes"],
    compatibleProducts: ["Standalone disposables"],
    flavourRange: ["Fruit", "Ice", "Mixed profiles"],
    pros: ["Competitive puff marketing"],
    cons: ["Model-dependent specs", "Less display tech than Ingot 9000"],
    faq: [
      { q: "Is KUZ similar to Alibarbar?", a: "Both compete in the disposable category, but model specs and flavour ranges differ." },
      { q: "Does KUZ have the same puff count as Alibarbar?", a: "It depends on the KUZ model. Compare the exact device against the Ingot 9000 spec sheet." },
      { q: "Does KUZ use pods?", a: "KUZ is discussed here as a standalone disposable brand, not a pod ecosystem." },
      { q: "Who should consider KUZ?", a: "Adults comparing high-puff disposables who want alternative flavours or model choices may consider KUZ." },
      { q: "What is KUZ's main risk?", a: "Specs are model-dependent, so vague listings can make comparisons difficult." },
      { q: "How should I compare KUZ with Alibarbar?", a: "Compare puff count, e-liquid capacity, battery, display, flavour range, price and retailer traceability." },
    ],
    relatedSlugs: ["alibarbar"],
    compareSlug: "alibarbar-vs-kuz",
    region: "australia",
    heroImage: `${AU}/products/flavor-mango.png`,
    imageAlt: "KUZ disposable vape",
    datePublished: "2026-03-24",
    dateModified: "2026-07-08",
  },
];

export function getBrand(slug: string | undefined): HubBrand | undefined {
  if (!slug) return undefined;
  return hubBrands.find((brand) => brand.slug === slug);
}
