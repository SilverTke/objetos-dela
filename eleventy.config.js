import { $ } from "bun";
import { spawn, move } from "multithreading";

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("assets/**/*.{css,js}");
  eleventyConfig.addBundle("js");
  eleventyConfig.on("eleventy.before", async () => {
    await $`just build-uno`;
  });
};
