import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IRootState, IStoreType } from "./types";
import { getPageNormalData } from "@/service/main/system/system";
import login from "./login/login";
import system from "./main/system/system";
const store = createStore<IRootState>({
  state: {
    entireChannel: [],
  },
  mutations: {
    changeEntireChannel(state, list) {
      state.entireChannel = list;
    },
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //请求当前有效渠道数据
      const entireChannelResult = await getPageNormalData("/channel/validList");
      console.log(entireChannelResult);
      const entireChannelList = entireChannelResult.data;
      // 保存当前有效渠道数据
      commit("changeEntireChannel", entireChannelList);
    },
  },
  modules: {
    login,
    system,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalLogin");
  store.dispatch("getInitialDataAction");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
