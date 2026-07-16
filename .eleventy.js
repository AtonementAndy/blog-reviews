module.exports = function(eleventyConfig) {
  // Copia o global.css e global.js diretamente para a pasta final sem alterar nada
  eleventyConfig.addPassthroughCopy("src/global.css");
  eleventyConfig.addPassthroughCopy("src/global.js");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};