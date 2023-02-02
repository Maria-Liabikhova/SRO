export default {
  namespaced: true,
  state: {
    showRequestModal: false,
    showServiceModal: false,
    showSroModal: false,
  },
  mutations: {
    SET_REQUEST_MODAL(state, payload) {
      state.showRequestModal = payload;
    },
    SET_SERVICE_MODAL(state, payload) {
      state.showServiceModal = payload;
    },
    SET_SRO_MODAL(state, payload) {
      state.showSroModal = payload;
    },
  },
};
