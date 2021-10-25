import { createStore } from "vuex";
import { IRootState } from "./types";
import login from "./login/login";
export default createStore<IRootState>({
  state: {
    name: "coderwhy",
  },
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});
