module.exports = function (eleventyConfig) {
  // Specify a different layouts directory.
  // eleventyConfig.addLayoutAlias("base", "base.liquid"); // Removed this line

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
    templateFormats: ["md", "liquid", "html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
