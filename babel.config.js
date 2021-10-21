module.exports = {
  // elementui修改了引入方式，所以弃用
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "element-plus",
  //       customStyleName: (name) => {
  //         // css路径
  //         name = name.slice(3);
  //         return `element-plus/lib/components/${name}/style/css`;
  //       },
  //     },
  //   ],
  // ],
  presets: ["@vue/cli-plugin-babel/preset"],
};
