module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/"); // eleventy triggers a build when this folder changes
    eleventyConfig.addPassthroughCopy("src/images/");
    eleventyConfig.addPassthroughCopy("src/js/");
  
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };

  };