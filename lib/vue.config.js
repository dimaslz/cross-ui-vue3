export default {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            compilerOptions: {
              isCustomElement: tag => {
                return /^cross-/.test(tag);
              },
            },
          },
        },
      },
    ],
  },
  //   chainWebpack: config => {
  //     config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap(options => {
  //       options.compilerOptions = {
  //         ...(options.compilerOptions || {}),
  //          isCustomElement: tag => tag.startsWith('cross-')
  //       };
  //       return options;
  //     })
  // }
};
