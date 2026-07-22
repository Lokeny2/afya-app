// src/sanity/queries.ts

// Fetch all conditions for your main listing/dashboard page
export const allConditionsQuery = `*[_type == "condition"] | order(title asc) {
  _id,
  title,
  category,
  description,
  symptoms,
  riskFactors,
  earlyWarningSigns,
  diagnosticOverview,
  screeningGuidelines,
  mythBusting,
  showClinicalDisclaimer
}`;

// Fetch a single condition by its title (or slug, if you add one later)
export const singleConditionQuery = `*[_type == "condition" && title == $title][0]{
  _id,
  title,
  category,
  description,
  symptoms,
  riskFactors,
  earlyWarningSigns,
  diagnosticOverview,
  screeningGuidelines,
  mythBusting,
  showClinicalDisclaimer
}`;
