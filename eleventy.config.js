import { $ } from "bun";

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("assets/**/*.{css,js}");
  eleventyConfig.addBundle("js");
  eleventyConfig.on("eleventy.before", async ({ directories }) => {
    await $`just build-uno`;
  });
};
