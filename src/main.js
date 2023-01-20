import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.scss";
import VScrollLock from "v-scroll-lock";
import vueTheMask from "vue-the-mask";

Vue.use(VScrollLock);
Vue.use(vueTheMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
