module.exports = function(eleventyConfig) {
  // re-add this so `layout: base` -> `_layouts/base.liquid`
  eleventyConfig.addLayoutAlias("base", "base.liquid");

  // Add a passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets");

  // Add a filter for date formatting (example)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  });

  // Add a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").sort(function(a, b) {
      return b.date - a.date; // Sort by date in descending order
    });
  });

  // Add a collection for projects
  eleventyConfig.addCollection("project", function(collectionApi) {
    return collectionApi.getFilteredByGlob("projects/**/*.md").sort(function(a, b) {
      return b.date - a.date; // Sort by date in descending order
    });
  });

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
