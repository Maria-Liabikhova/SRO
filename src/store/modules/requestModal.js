export default {
  namespaced: true,
  state: {
    showRequestModal: false,
  },
  mutations: {
    SET_REQUEST_MODAL(state, payload) {
      state.showRequestModal = payload;
    },
  },
};
