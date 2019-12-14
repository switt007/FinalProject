module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/styles/variables.scss";
            @import "@/styles/smap.scss";
          `
        }
      }
    }
  };