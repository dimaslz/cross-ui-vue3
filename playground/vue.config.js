export default {
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       use: "vue-loader",
  //       options: {
  //         compilerOptions: {
  //           isCustomElement: tag => {
  //             return tag.startsWith("cross-") || tag.startsWith("cui-");
  //           },
  //         },
  //       },
  //     },
  //     // ...
  //   ],
  // },
  // chainWebpack: config => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap(options => {
  //       options.compilerOptions = {
  //         ...(options.compilerOptions || {}),
  //         isCustomElement: tag => tag.startsWith("cui-"),
  //       };
  //       return options;
  //     });
  // },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        // modify the options...
        console.log("OPTIONS", options);
        return options;
      });
  },
};
