import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => {
            return tag.startsWith("cross-");
          },
        },
      },
    }),
  ],
  // resolve: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.vue$/,
  //         use: "vue-loader",
  //         options: {
  //           compilerOptions: {
  //             isCustomElement: tag => {
  //               console.log("tag", tag);
  //               return tag.startsWith("cross-") || tag.startsWith("cui-");
  //             },
  //           },
  //         },
  //       },
  //       // ...
  //     ],
  //   },
  // },
});
