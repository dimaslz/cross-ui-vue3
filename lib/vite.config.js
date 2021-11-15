import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       use: {
  //           loader: "vue-loader",
  //           options: {
  //               compilerOptions: {
  //               isCustomElement: (tag) => {
  //                       return /^cross-/.test(tag);
  //                   }
  //               }
  //           }
  //       }
  //   }
  //   ],
  // },
  // resolve: {
  //   // rules: [
  //   //   {
  //   //     test: /\.vue$/,
  //   //     use: {
  //   //         loader: "vue-loader",
  //   //         options: {
  //   //             compilerOptions: {
  //   //                 isCustomElement: (tag) => {
  //   //                     return /^cross-button/.test(tag);
  //   //                 }
  //   //             }
  //   //         }
  //   //     }
  //   // }
  //   // ],
  // },
  // server:
  plugins: [vue()],
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap(options => {
  //       options.compilerOptions = {
  //         ...options.compilerOptions,
  //         isCustomElement: tag => tag.startsWith('cross-')
  //       }
  //       return options
  //     })
  // }
});
