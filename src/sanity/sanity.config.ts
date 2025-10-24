// sanity/sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas";
import { codeInput } from "@sanity/code-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID for Studio");
}

export default defineConfig({
  name: "default",
  title: "blog-portfolio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool(),
    ...(process.env.NODE_ENV === "development" ? [visionTool()] : []),
    codeInput(),
  ],
  schema: { types: schemas },
});
