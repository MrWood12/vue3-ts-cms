import { createStore } from "vuex";
import { IRootState } from "./types";
import login from "./login/login";
const store = createStore<IRootState>({
  state: {
    name: "coderwhy",
  },
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export default store;
