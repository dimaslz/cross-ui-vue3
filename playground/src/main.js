import { createApp } from "vue";
import App from "./App.vue";

// import CrossUI from "@cross-ui/vue3";
// import CrossUI from "../../lib";
import CrossUI from "../../lib/src/index";

import "@cross-ui/core/dist/cross-ui/cross-ui.css";
const app = createApp(App);

app.use(CrossUI);
app.mount("#app");
