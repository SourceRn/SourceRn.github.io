// src/lib/sanity.client.ts
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error("Missing env var: NEXT_PUBLIC_SANITY_PROJECT_ID");
}
if (!dataset) {
  throw new Error("Missing env var: NEXT_PUBLIC_SANITY_DATASET");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true, // true para lecturas rápidas de contenido publicado
});
