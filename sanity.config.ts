import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { appSchema } from "./schemaTypes/game";

export default defineConfig({
  name: "styngms",
  title: "AllYonoGamesh Studio",
  projectId: "r0d9oz57",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [appSchema],
  },
});
