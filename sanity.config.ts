import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { appSchema } from "./schemaTypes/game";

export default defineConfig({
  name: "styngms",
  title: "AllYonoGamesh Studio",
  projectId: "",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [appSchema],
  },
});
