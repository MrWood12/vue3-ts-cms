const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
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
