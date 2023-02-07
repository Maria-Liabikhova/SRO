import Vue from "vue";
import Vuex from "vuex";
import requestModal from "./modules/requestModal";
import sharedComponents from "./modules/sharedComponents";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    requestModal,
    sharedComponents,
  },
});
