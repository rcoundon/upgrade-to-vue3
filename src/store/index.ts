import { createStore } from "vuex";

export type State = { counter: number };

const state: State = { counter: 0 };

export const store = createStore({
  state,
  mutations: {
    INCREMENT_COUNTER(state) {
      state.counter++;
    },
  },
  actions: {
    incrementCounter({ commit }) {
      commit("INCREMENT_COUNTER");
    },
  },
  getters: {
    counter: (state) => state.counter,
  },
  modules: {},
});
