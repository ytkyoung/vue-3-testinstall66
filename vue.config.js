module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/scss/main.scss";
            @import "@/scss/base";
            @import "@/scss/fonts";
            @import "@/scss/normalize";
            @import "@/scss/variables";
          `
        }
      }
    }
  };
