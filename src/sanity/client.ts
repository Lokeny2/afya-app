// src/sanity/client.ts
import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you want real-time updates during local development
});

export async function getConditions() {
  return client.fetch(`*[_type == "condition"]{
    _id,
    title,
    description,
    symptoms
  }`);
}
