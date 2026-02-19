import { defineConfig, presetWind4 } from "unocss";
export default defineConfig({
  safelist: ["uno-w-64"],
  presets: [presetWind4({ prefix: "uno-" })],
});
