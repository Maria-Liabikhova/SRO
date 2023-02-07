export default {
  namespaced: true,
  state: {
    clearInput: false,
  },
  mutations: {
    SET_CLEAR_INPUT(state, payload) {
      state.clearInput = payload;
    },
  },
};
