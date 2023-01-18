module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/vars.scss";
        `,
      },
    },
  },
};
