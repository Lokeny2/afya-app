import { type SchemaTypeDefinition } from "sanity";

const condition: SchemaTypeDefinition = {
  name: "condition",
  title: "Condition",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Common", value: "common" },
          { title: "Major", value: "major" },
          { title: "Wellness", value: "wellness" },
        ],
        layout: "radio",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "symptoms",
      title: "Symptoms",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "riskFactors",
      title: "Risk Factors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "earlyWarningSigns",
      title: "Early Warning Signs",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "diagnosticOverview",
      title: "Diagnostic Overview",
      type: "text",
    },
    {
      name: "screeningGuidelines",
      title: "Screening Guidelines",
      type: "text",
    },
    {
      name: "mythBusting",
      title: "Myth Busting",
      type: "text",
    },
    {
      name: "showClinicalDisclaimer",
      title: "Show Clinical Disclaimer",
      type: "boolean",
      initialValue: true,
    },
  ],
};

export const schema = {
  types: [condition],
};
