import fs from "node:fs";

function countQ(file) {
  return (fs.readFileSync(file, "utf8").match(/\bq:\s*"/g) || []).length;
}
function countSlug(file, re = /\bslug:\s*"/g) {
  return (fs.readFileSync(file, "utf8").match(re) || []).length;
}

console.log({
  faqItems: countQ("src/data/hub/faq.ts"),
  faqTopics: countSlug("src/data/hub/faq.ts"),
  guides: countSlug("src/data/hub/guides.ts"),
  reviews: countSlug("src/data/hub/reviews.ts"),
  news: countSlug("src/data/hub/news.ts"),
  comparisons: countSlug("src/data/hub/comparisons.ts"),
  brands: countSlug("src/data/hub/brands.ts"),
  products: countSlug("src/data/hub/products.ts"),
});
