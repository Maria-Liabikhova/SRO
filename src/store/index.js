import Vue from "vue";
import Vuex from "vuex";
import requestModal from "./modules/requestModal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    requestModal,
  },
});
