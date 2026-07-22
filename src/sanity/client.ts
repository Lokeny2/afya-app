// src/sanity/client.ts
import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";
import { allConditionsQuery } from "./queries";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you want real-time updates during local development
});

export async function getConditions() {
  return client.fetch(allConditionsQuery);
}