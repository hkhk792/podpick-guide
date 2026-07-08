import type { HubFaqTopic } from "./types";

export const hubFaqTopics: HubFaqTopic[] = [
  {
    slug: "charging",
    title: "Charging FAQ",
    description: "Charging questions for rechargeable pod hosts, disposable devices and safe cable use.",
    intro:
      "Charging rules depend on the format. Rechargeable pod hosts are designed for regular charging, while many high-capacity disposables are not.",
    items: [
      {
        q: "Are all disposable vapes rechargeable?",
        a: "No. Some disposables include a charging port, but many devices are single-lifecycle products. The Alibarbar Ingot 9000, for example, is described as a non-rechargeable disposable with a battery sized for its e-liquid capacity.",
      },
      {
        q: "Can I charge a device that has no charging port?",
        a: "No. Do not open, wire or modify a device that was not designed for charging. Improvised charging can damage the battery and create a fire risk.",
      },
      {
        q: "Why does my pod taste weak when the host battery is low?",
        a: "Pod hosts can deliver lower output near the end of a charge. Recharge the host and retest before assuming the pod is empty or faulty.",
      },
      {
        q: "What cable should I use for a rechargeable pod host?",
        a: "Use the cable type recommended by the device maker and a reputable low-power USB wall adapter. Avoid damaged cables, loose ports and high-heat charging environments.",
      },
      {
        q: "Can I leave my pod device charging overnight?",
        a: "It is better to unplug the host once charged. Modern devices often include safeguards, but unattended charging is still a poor habit for small lithium batteries.",
      },
      {
        q: "Why is my device warm while charging?",
        a: "Slight warmth can be normal, but hot casing, swelling, odour or erratic lights are warning signs. Stop charging, place the device on a non-flammable surface and replace it if needed.",
      },
      {
        q: "Do pods themselves need charging?",
        a: "No. Pre-filled pods do not charge separately. The rechargeable part is the host device that powers the pod.",
      },
    ],
  },
  {
    slug: "battery",
    title: "Battery Life FAQ",
    description: "Battery lifespan, flashing lights, device output and everyday power habits.",
    intro:
      "Battery life depends on cell size, device type, puff length, storage temperature and whether the device is rechargeable.",
    items: [
      {
        q: "What affects disposable battery life?",
        a: "Draw length, draw frequency, ambient temperature and battery capacity all matter. A display can help you notice when power is falling before vapour drops sharply.",
      },
      {
        q: "Why is my disposable flashing?",
        a: "A flashing light often means the battery is empty, the e-liquid is depleted, or the device has triggered a protection mode after a long draw.",
      },
      {
        q: "Does cold weather reduce battery performance?",
        a: "Yes. Cold batteries can feel weaker and recover after warming to room temperature. Do not heat a device directly; let it warm naturally.",
      },
      {
        q: "Does hot weather damage batteries?",
        a: "Heat is worse than cold for battery health. Avoid cars, windowsills and direct sun because heat can stress the cell and thin the e-liquid.",
      },
      {
        q: "How long should a rechargeable pod host last?",
        a: "It varies by host and charge cycles. If the host drains unusually fast, has a loose port or produces unstable output, it may be time to replace it.",
      },
      {
        q: "Can a large battery improve flavour?",
        a: "Indirectly, yes. Stable output helps the coil vaporise e-liquid consistently, which can keep flavour steadier across the device life.",
      },
      {
        q: "Should I recycle devices with batteries?",
        a: "Yes where local programs are available. Disposable vapes and old pod hosts contain lithium batteries and should be handled as e-waste or battery waste.",
      },
    ],
  },
  {
    slug: "flavours",
    title: "Flavours FAQ",
    description: "How to choose, compare and rotate vape flavours across disposables and pods.",
    intro:
      "Flavour choice is personal, but understanding sweetness, cooling and profile families makes first purchases easier.",
    items: [
      {
        q: "How do I pick a first flavour?",
        a: "Start with a familiar profile and moderate intensity. Berry, peach, grape, mango and tea profiles are common beginner anchors.",
      },
      {
        q: "What does ice mean in a flavour name?",
        a: "Ice usually means a cooling finish, often menthol-like. It does not always mean extremely cold, so read reviews for the actual cooling level.",
      },
      {
        q: "Are soda flavours good for all-day use?",
        a: "Soda profiles such as orange soda can be fun and distinctive, but some adults prefer them as rotation flavours because sweetness can feel stronger over time.",
      },
      {
        q: "Why do flavours taste different between devices?",
        a: "Coil type, airflow, power output, e-liquid formula and device age all influence flavour. The same named flavour can feel different across brands.",
      },
      {
        q: "What is the safest flavour choice for a fruit lover?",
        a: "Mixed berry is often a safe first pick because it is familiar, layered and less polarising than very icy or very creamy profiles.",
      },
      {
        q: "How many flavours should I buy first?",
        a: "If you are new to a brand, buy a small variety rather than a bulk quantity of one flavour. Custom packs are useful when available.",
      },
      {
        q: "Why does a flavour fade near the end?",
        a: "Low e-liquid, a tired coil or weaker battery output can all reduce flavour intensity. A burnt note usually means the device or pod is finished.",
      },
      {
        q: "Are tea flavours usually sweet?",
        a: "Many tea pods are lightly sweet with aromatic notes. They can be a good option for adults who find candy fruit flavours too heavy.",
      },
    ],
  },
  {
    slug: "compatibility",
    title: "Compatibility FAQ",
    description: "Pod generation matching, host fit and cross-brand compatibility questions.",
    intro:
      "Compatibility is one of the biggest pod-system risks. Brand name alone is not enough; generation and host model matter.",
    items: [
      {
        q: "Can SP2S Gen 1 pods fit Gen 2 hosts?",
        a: "No. Treat SP2S Gen 1 and Gen 2 as separate pod families. Mismatched generations can cause poor contact or no vapour.",
      },
      {
        q: "Can I use LANA pods in an SP2S host?",
        a: "Generally no. Unless a reliable retailer or manufacturer explicitly confirms the exact combination, assume closed pod brands are not cross-compatible.",
      },
      {
        q: "What should I check before buying pods?",
        a: "Check the host brand, host generation, pod generation, connector shape and retailer compatibility notes before ordering.",
      },
      {
        q: "Why does a pod fit physically but not fire?",
        a: "Physical fit does not guarantee electrical contact or correct airflow. The host contacts may not align with the pod.",
      },
      {
        q: "Are disposable vapes compatible with pods?",
        a: "No. A disposable is an all-in-one device. It does not accept separate pods, tanks or refills unless the product is specifically designed that way.",
      },
      {
        q: "Do pod colours change compatibility?",
        a: "Usually colour does not matter, but edition names can. Always check the actual host model and generation rather than relying on colour.",
      },
      {
        q: "How can I avoid compatibility mistakes?",
        a: "Buy pods and hosts from the same ecosystem, save the host packaging, and compare the exact SKU against the retailer description before checkout.",
      },
    ],
  },
  {
    slug: "safety",
    title: "Safety FAQ",
    description: "Responsible use, warning signs, battery handling and adult-only guidance.",
    intro:
      "Safety starts with adult-only use, authentic products, correct storage and respecting the limits of small lithium battery devices.",
    items: [
      {
        q: "Who should not use vaping products?",
        a: "Vaping products are not for minors, non-smokers, people who are pregnant or breastfeeding, or anyone advised by a health professional to avoid nicotine.",
      },
      {
        q: "What are warning signs of a faulty device?",
        a: "Stop using a device if it becomes hot, leaks heavily, smells burnt from first use, swells, cracks, or behaves unpredictably.",
      },
      {
        q: "Can I carry a vape in my pocket?",
        a: "Yes, but keep it away from keys, coins and sharp objects. For pod hosts, avoid pressing buttons accidentally if the device has a button.",
      },
      {
        q: "Can I use a wet device?",
        a: "No. If a device has been soaked or washed, stop using it. Water can damage electronics and battery protection circuits.",
      },
      {
        q: "Is chain-vaping safe for the coil?",
        a: "Chain-vaping can overheat the coil and cause burnt taste. Let the wick recover between puffs, especially with thicker or sweeter liquids.",
      },
      {
        q: "How should I store products around children?",
        a: "Keep all devices, pods and packaging locked away and out of sight. Nicotine products and batteries should never be accessible to children or pets.",
      },
      {
        q: "What should I do with a damaged battery device?",
        a: "Do not charge or use it. Place it away from flammable materials and follow local e-waste or battery disposal guidance.",
      },
    ],
  },
  {
    slug: "shipping",
    title: "Shipping FAQ",
    description: "Shipping, delivery timing, tracking and address questions for regional vape retailers.",
    intro:
      "Shipping policies vary by retailer and region. Always check the store page before ordering, especially for adult-only delivery rules.",
    items: [
      {
        q: "Does ailibarbar.com ship within Australia?",
        a: "Ailibarbar.com is a regional retailer for Alibarbar products and has presented Australia-focused ordering information. Check its current shipping page before placing an order.",
      },
      {
        q: "How long does delivery usually take?",
        a: "Many Australian regional deliveries are estimated in business days and vary by state, metro area and remote routing. Payment verification can also affect dispatch timing.",
      },
      {
        q: "Can I track a vape order?",
        a: "Most retailers provide tracking when the parcel service supports it. Keep your order number so support can locate the shipment.",
      },
      {
        q: "Why has my order not dispatched yet?",
        a: "Common reasons include payment still being verified, missing order reference, incomplete address details, or stock checks before fulfilment.",
      },
      {
        q: "Can I change my address after ordering?",
        a: "Contact the retailer quickly. Address changes may be possible before dispatch but are usually difficult once the parcel is in the carrier network.",
      },
      {
        q: "Do regional areas take longer?",
        a: "Yes. Remote or regional postcodes can add transit time compared with Sydney, Melbourne, Brisbane and other metro routes.",
      },
      {
        q: "Can someone under 18 receive a parcel?",
        a: "No. Vaping products are adult-only. The person ordering and receiving products should meet the legal age requirement in their region.",
      },
      {
        q: "What if a parcel arrives damaged?",
        a: "Take photos before opening further, keep the packaging, and contact the retailer promptly with your order number and evidence.",
      },
    ],
  },
  {
    slug: "payment",
    title: "Payment FAQ",
    description: "Bank transfer, order references, verification and payment support questions.",
    intro:
      "Payment methods vary by regional retailer. The practical rule is to follow checkout instructions exactly and keep proof of payment.",
    items: [
      {
        q: "Why do some vape retailers use bank transfer?",
        a: "Payment processing for regulated products can be limited, so some regional retailers use bank transfer and manual verification.",
      },
      {
        q: "What reference should I use for a bank transfer?",
        a: "Use the order number exactly as shown at checkout. This helps the retailer match the payment to the correct order.",
      },
      {
        q: "Why upload a payment screenshot?",
        a: "A screenshot helps support verify amount, timing and reference details while the bank transfer is still processing.",
      },
      {
        q: "What if I paid the wrong amount?",
        a: "Contact support immediately with the order number, transfer amount and screenshot. The retailer can explain whether a top-up, refund or manual review is needed.",
      },
      {
        q: "Are prices usually in local currency?",
        a: "Regional stores normally price in the local currency for that market. For Australia pages, expect AUD unless the checkout says otherwise.",
      },
      {
        q: "Is checkout secure without card payment?",
        a: "HTTPS checkout still matters because your order details are transmitted online. Bank transfer means the retailer should not need to store card numbers.",
      },
      {
        q: "Can I cancel before paying?",
        a: "Usually yes. If payment has not been sent, contact support with the order number and ask for cancellation if the store requires it.",
      },
    ],
  },
  {
    slug: "authenticity",
    title: "Authenticity FAQ",
    description: "Counterfeit checks, packaging clues, batch information and retailer traceability.",
    intro:
      "Counterfeit vapes are a real risk in both disposable and pod categories. Buy from traceable retailers and inspect packaging before use.",
    items: [
      {
        q: "How do I spot a counterfeit vape?",
        a: "Look for poor printing, missing batch codes, incorrect device shape, strange odour, damaged seals, unusually low price, and performance that does not match the product description.",
      },
      {
        q: "Does a working LED display prove a device is genuine?",
        a: "Not by itself. A display is one clue, but packaging, retailer traceability, build quality and batch details also matter.",
      },
      {
        q: "Why are some listings much cheaper?",
        a: "Very low pricing can indicate grey-market stock, old inventory or counterfeits. Compare the price with reputable regional retailers before buying.",
      },
      {
        q: "Should I keep packaging?",
        a: "Yes. Packaging helps verify batch details and supports any fault or authenticity claim with the retailer.",
      },
      {
        q: "What if the flavour tastes wrong immediately?",
        a: "Stop using the device or pod, compare packaging with known genuine examples, and contact the retailer with photos and batch information.",
      },
      {
        q: "Are custom packs genuine?",
        a: "A custom pack should contain the same genuine single devices or pods, only grouped differently. Check that each unit has consistent packaging.",
      },
      {
        q: "Where should I buy authentic Alibarbar in Australia?",
        a: "Use traceable regional retailers such as ailibarbar.com and avoid anonymous marketplace listings with unclear origin or missing support information.",
      },
    ],
  },
  {
    slug: "cleaning",
    title: "Cleaning FAQ",
    description: "Simple cleaning, condensation, pod contacts and mouthpiece care.",
    intro:
      "Most vape cleaning is simple surface care. Do not wash devices or put liquid into battery compartments.",
    items: [
      {
        q: "Can I clean a disposable vape?",
        a: "Only clean the outside and mouthpiece gently with a dry cloth. Do not rinse, open or soak a disposable device.",
      },
      {
        q: "How do I clean pod host contacts?",
        a: "Remove the pod and use a dry cotton swab to wipe the contact area. Make sure the host is dry before inserting a pod again.",
      },
      {
        q: "What is condensation under a pod?",
        a: "Small droplets can form from normal vapour condensation. Wipe them away regularly so contacts stay clean.",
      },
      {
        q: "Can I use alcohol to clean a device?",
        a: "Avoid soaking or dripping alcohol into the device. If needed, use a barely damp wipe on the exterior only and let it dry fully.",
      },
      {
        q: "Why does my mouthpiece feel blocked?",
        a: "Pocket lint, condensation or a protective plug can block airflow. Inspect the mouthpiece and air inlet without pushing sharp objects into the device.",
      },
      {
        q: "How often should I clean a pod host?",
        a: "A quick wipe every few pod changes is enough for most users. Clean sooner if you notice condensation, weak contact or residue.",
      },
      {
        q: "Can cleaning fix burnt taste?",
        a: "Usually no. Burnt taste comes from the coil or wick. Cleaning the outside will not restore a burnt pod or finished disposable.",
      },
    ],
  },
  {
    slug: "regulations",
    title: "Regulations FAQ",
    description: "General regulatory questions for adults in Australia, Taiwan and travel contexts.",
    intro:
      "This FAQ is general information, not legal advice. Rules change, so check official sources for your state, territory or country.",
    items: [
      {
        q: "Are vape laws the same everywhere?",
        a: "No. Vaping rules differ by country and often by state or territory. Product access, nicotine rules, import rules and public-use rules can all vary.",
      },
      {
        q: "Is this legal advice?",
        a: "No. PodPick Guide content is general educational information for adults. Check official government guidance or a qualified professional for legal questions.",
      },
      {
        q: "Why do retailers require age gates?",
        a: "Age gates help restrict adult-only content and products. They are one part of responsible retailing, not a substitute for legal compliance.",
      },
      {
        q: "Can I travel internationally with vapes?",
        a: "Check airline and destination rules before travel. Some countries restrict possession, import or use, even if your origin country allows it.",
      },
      {
        q: "Can I vape in public places?",
        a: "Public-use rules vary. Many areas treat vaping similarly to smoking, with restrictions in indoor spaces, public transport and near entrances.",
      },
      {
        q: "Why do regulations change so often?",
        a: "Governments adjust rules as public health policy, enforcement priorities and product markets change. Always check recent sources.",
      },
      {
        q: "Do nicotine rules differ from non-nicotine rules?",
        a: "Often yes. Nicotine classification can affect sale, possession, import and prescription requirements depending on the region.",
      },
    ],
  },
  {
    slug: "australia",
    title: "Australia FAQ",
    description: "Australia-specific questions about adult use, ordering, shipping and responsible disposal.",
    intro:
      "Australia has a changing regulatory environment. Adults should verify current rules in their state or territory before buying or using products.",
    items: [
      {
        q: "Are vapes adult-only in Australia?",
        a: "Yes. Vaping products are intended for adults and should not be sold or supplied to minors.",
      },
      {
        q: "Where can adults read regional product information?",
        a: "PodPick Guide provides independent educational pages, while regional retailers such as ailibarbar.com provide store-specific product and shipping details.",
      },
      {
        q: "Does Australia-wide shipping mean same-day delivery?",
        a: "No. Australia-wide usually means the retailer can send to many states and territories, but delivery time depends on carrier routes and postcode.",
      },
      {
        q: "What should Australians know about disposal?",
        a: "Disposable vapes contain batteries and should be taken to battery or e-waste collection points where available, not thrown loose into general rubbish.",
      },
      {
        q: "Are Australian rules different by state?",
        a: "Some practical rules and enforcement details can vary. Always check current state or territory guidance.",
      },
      {
        q: "Can non-smokers use vapes recreationally?",
        a: "Vaping products are not intended for non-smokers. Adults considering nicotine should seek health advice, especially if trying to quit smoking.",
      },
      {
        q: "What information should a product page show?",
        a: "A helpful product page should show puff rating, battery type, e-liquid capacity, nicotine information where applicable, warnings, region and support contact details.",
      },
    ],
  },
  {
    slug: "taiwan",
    title: "Taiwan FAQ",
    description: "Taiwan pod ecosystem questions, including SP2S, LANA, compatibility and flavour selection.",
    intro:
      "Taiwan pod shoppers often compare SP2S, LANA and RELX-style systems. Compatibility and retailer trust matter as much as flavour.",
    items: [
      {
        q: "Why are SP2S generation rules important?",
        a: "SP2S Gen 1 and Gen 2 pods are not interchangeable. Buying the wrong generation is one of the most common compatibility mistakes.",
      },
      {
        q: "Is LANA simpler than SP2S?",
        a: "LANA can feel simpler because the ecosystem is more cohesive. SP2S offers more flavour breadth but requires careful generation checks.",
      },
      {
        q: "What flavours are popular in Taiwan pod systems?",
        a: "Fruit, tea, ice and lighter aromatic profiles are common. Jasmine tea, grape, peach and mineral-style profiles often appear in buyer discussions.",
      },
      {
        q: "Are Taiwan pods the same as Australian disposables?",
        a: "No. Taiwan pod systems usually use a rechargeable host with replaceable pods, while many Australia-focused pages discuss all-in-one disposables.",
      },
      {
        q: "How do I reduce counterfeit risk in Taiwan pods?",
        a: "Use traceable retailers, inspect packaging, verify generation labels and avoid listings with unclear photos or unusually low prices.",
      },
      {
        q: "Can RELX pods fit SP2S or LANA devices?",
        a: "Assume no unless exact compatibility is confirmed. Closed pod systems usually require matched pods and hosts.",
      },
      {
        q: "Should beginners buy many Taiwan pod flavours at once?",
        a: "Start with a small set across different flavour families. Once you know your preferred cooling and sweetness, bulk buying is less risky.",
      },
    ],
  },
  {
    slug: "pods",
    title: "Pods FAQ",
    description: "Pre-filled pods, hosts, leakage, coil life and flavour rotation.",
    intro:
      "Pods make flavour changes easy, but they rely on correct host matching and clean electrical contacts.",
    items: [
      {
        q: "What is a closed pod?",
        a: "A closed pod is a pre-filled cartridge designed for a matching host device. You replace the pod when flavour or vapour drops.",
      },
      {
        q: "Can I refill a closed pod?",
        a: "Closed pods are not designed for refilling. Refilling can cause leaks, poor flavour and battery contact problems.",
      },
      {
        q: "How do I know a pod is empty?",
        a: "Signs include weak flavour, burnt taste, low vapour and visible low liquid if the pod window allows inspection.",
      },
      {
        q: "Why does my pod leak?",
        a: "Heat, pressure changes, hard draws, old pods or damaged seals can cause leaks. Store pods upright and avoid leaving them in hot places.",
      },
      {
        q: "Can I switch flavours often?",
        a: "Yes. That is one advantage of pod systems. Keep spare pods capped and store them away from heat and light.",
      },
      {
        q: "Do pod hosts need cleaning?",
        a: "Yes. Wipe condensation and contacts with a dry swab so pods seat correctly and fire consistently.",
      },
      {
        q: "Why does a new pod taste muted?",
        a: "The host battery may be low, contacts may be dirty, or the pod may need a few gentle primer puffs. If it tastes burnt immediately, stop using it.",
      },
    ],
  },
  {
    slug: "disposables",
    title: "Disposables FAQ",
    description: "All-in-one disposable vape questions: puff count, displays, storage and end-of-life.",
    intro:
      "Disposables prioritise simplicity: no pods, no filling and often no charging. The trade-off is that the whole device is replaced at end-of-life.",
    items: [
      {
        q: "What is a disposable vape?",
        a: "A disposable vape is an all-in-one device with battery, coil and e-liquid built in. It is used until the battery or e-liquid is depleted.",
      },
      {
        q: "What does up to 9000 puffs mean?",
        a: "It is a manufacturer rating based on test puff length. Real-world puff count depends on how long and often you draw.",
      },
      {
        q: "What does a smart LED display show?",
        a: "On devices that include one, a display can show remaining battery, e-liquid level or both. It helps adults avoid surprise depletion.",
      },
      {
        q: "Can I refill a disposable?",
        a: "No. Standard disposables are sealed and not designed for refilling. Opening them can cause leaks or battery damage.",
      },
      {
        q: "Why is my disposable not producing vapour?",
        a: "It may be empty, the battery may be depleted, an air inlet may be blocked, or the device may have reached its auto cut-off after a long draw.",
      },
      {
        q: "Are bigger disposables always better?",
        a: "Not always. Bigger devices can last longer, but some adults prefer compact size, lower upfront cost or reusable pod systems.",
      },
      {
        q: "What should I do when a disposable is finished?",
        a: "Stop using it and recycle it through battery or e-waste pathways where available. Do not crush, burn or throw loose batteries into general rubbish.",
      },
      {
        q: "Are disposables good for beginners?",
        a: "They are simple to use, but beginners should still understand age restrictions, nicotine information, safe storage and responsible disposal.",
      },
    ],
  },
  {
    slug: "nicotine",
    title: "Nicotine FAQ",
    description: "Nicotine strength, labels, salts, throat hit and adult-only health context.",
    intro:
      "Nicotine information should come from the product label and current regional rules. This topic is educational and not medical advice.",
    items: [
      {
        q: "How do I know the nicotine strength?",
        a: "Check the packaging and product label for mg/ml, percentage or nicotine statement. Do not rely on flavour name or device colour.",
      },
      {
        q: "What is nicotine salt?",
        a: "Nicotine salt is a common e-liquid format in pods and disposables. It often feels smoother at higher strengths than some freebase liquids.",
      },
      {
        q: "Is nicotine addictive?",
        a: "Yes. Nicotine is addictive. Products containing nicotine are intended only for adults who already smoke or vape.",
      },
      {
        q: "Can nicotine strength vary by region?",
        a: "Yes. Regulations and product batches differ, so the same brand may not have the same strength in every market.",
      },
      {
        q: "What causes throat hit?",
        a: "Nicotine strength, cooling, flavouring, airflow and coil output can all affect throat sensation.",
      },
      {
        q: "Should I use nicotine if I do not smoke?",
        a: "No. Nicotine products are not intended for non-smokers. If you are trying to quit smoking, speak with a qualified health professional.",
      },
      {
        q: "Can I mix nicotine pods between brands?",
        a: "Do not mix pods between brands unless compatibility is confirmed. Nicotine strength does not determine physical compatibility.",
      },
    ],
  },
  {
    slug: "storage",
    title: "Storage FAQ",
    description: "How to store devices, pods, liquids and spare products safely.",
    intro:
      "Good storage protects flavour, battery health and safety. Heat, sunlight and child access are the main risks.",
    items: [
      {
        q: "Where should I store unopened devices?",
        a: "Store them in a cool, dry place away from direct sunlight, heaters, cars, children and pets.",
      },
      {
        q: "Should disposables be stored upright?",
        a: "Upright storage is a good habit because it reduces the chance of seepage around the mouthpiece or air path.",
      },
      {
        q: "Can I leave a vape in a hot car?",
        a: "No. Heat can stress the battery, thin the e-liquid and increase leakage risk.",
      },
      {
        q: "Can I refrigerate pods?",
        a: "Refrigeration is usually unnecessary and condensation can create problems. Room-temperature, dry storage is better for most users.",
      },
      {
        q: "How long can I keep spare pods?",
        a: "Use the package date guidance where available. Flavour can fade over time, especially if pods are stored hot or exposed to light.",
      },
      {
        q: "How should I store a used device before disposal?",
        a: "Keep it away from children, pets, heat and metal objects until you can take it to an appropriate recycling point.",
      },
      {
        q: "Should I remove pods from the host when not using it?",
        a: "For long storage, removing the pod can reduce condensation and accidental firing. Keep the pod capped if possible.",
      },
    ],
  },
];

export function getFaqTopic(slug: string | undefined): HubFaqTopic | undefined {
  if (!slug) return undefined;
  return hubFaqTopics.find((topic) => topic.slug === slug);
}

export function countFaqItems(): number {
  return hubFaqTopics.reduce((total, topic) => total + topic.items.length, 0);
}
