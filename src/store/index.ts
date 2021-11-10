import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IRootState, IStoreType } from "./types";
import { getPageNormalData } from "@/service/main/system/system";
import { getStateNumberData } from "@/service/main/recharge/recharge";
import login from "./login/login";
import system from "./main/system/system";
import member from "./main/member/member";
const store = createStore<IRootState>({
  state: {
    entireChannel: [],
    rechargeState: [],
  },
  mutations: {
    changeEntireChannel(state, list) {
      state.entireChannel = list;
    },
    changeRechargeState(state, rechargeState) {
      state.rechargeState = rechargeState;
    },
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //请求当前有效渠道数据
      const entireChannelResult = await getPageNormalData("/channel/validList");
      const entireChannelList = entireChannelResult.data;
      // 保存当前有效渠道数据
      commit("changeEntireChannel", entireChannelList);
    },

    async getStateNumber({ commit }) {
      //请求当前余额状态总数
      const rechargeStateResult = await getStateNumberData("/balance/state");
      const rechargeState = rechargeStateResult.data;
      console.log(rechargeStateResult.data);
      // 保存当前有效渠道数据
      commit("changeRechargeState", rechargeState);
    },
  },
  modules: {
    login,
    system,
    member,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalLogin");
  store.dispatch("getInitialDataAction");
  store.dispatch("getStateNumber");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
