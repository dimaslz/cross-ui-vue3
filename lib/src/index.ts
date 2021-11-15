import { App, Plugin } from "vue";
import { default as kebabCase } from "lodash.kebabcase";

import CuiButton from "./components/CuiButton.vue";
import CuiInputText from "./components/CuiInputText.vue";
import * as CROSS_COMPONENTS from "@cross-ui/core";

const install = (app: App) => {
  const components: any = CROSS_COMPONENTS;
  for (const component in components) {
    if (/Cross/.test(component)) {
      const tagName = kebabCase(component);
      customElements.define(tagName, components[component]);
    }
  }

  app.component("CuiButton", CuiButton);
  app.component("CuiInputText", CuiInputText);
};

export default {
  install,
} as Plugin;
