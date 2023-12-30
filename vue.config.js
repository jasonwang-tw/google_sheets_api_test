const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://script.google.com", // 目標 API 端點
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `@import "@/styles/scss/variables.scss";`,
  //     },
  //   },
  // },
});
