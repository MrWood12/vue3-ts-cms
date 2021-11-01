const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  devServer: {
    // proxy: "http://api.yikah.cn",
    proxy: {
      "/backend": {
        target: "http://api.yikah.cn",
        secure: false,
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    module: {
      unknownContextCritical: false,
    },
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
};
