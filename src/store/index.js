import { createStore } from 'vuex'

export default createStore({
  state: {
    scrollPosition: 0
  },
  getters: {
  },
  mutations: {
    saveScrollPosition(state, scrollPosition) {
      state.scrollPosition = scrollPosition;
    }
  },
  actions: {
  },
  modules: {
  }
})
