module.exports = function(eleventyConfig) {
  // re-add this so `layout: base` -> `_layouts/base.liquid`
  eleventyConfig.addLayoutAlias("base", "base.liquid");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    templateFormats: ["md","liquid","html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};
