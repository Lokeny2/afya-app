// src/sanity/schemaTypes/index.ts
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
  ],
};

export const schema = {
  types: [condition],
};
