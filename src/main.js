// STYLES
import "w3-css";
// LIBRARIES and PLUGINS
import Vue from "vue";
import VueRouter from "vue-router";
import { firestorePlugin, rtdbPlugin } from "vuefire";
// OBJECTS and UTILITIES
import routes from "./routes.js";
// COMPONENTS
import App from "./App.vue";
import card from "./components/card.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.use(rtdbPlugin);

const router = new VueRouter({
  mode: "history",
  routes
});

const components = { card };

new Vue({
  el: "#app",
  router,
  components,
  render: h => h(App)
});
