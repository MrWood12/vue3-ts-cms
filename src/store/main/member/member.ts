import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ImemberState } from "./types";
import { memberChannel } from "@/service/main/member/member";
const memberModule: Module<ImemberState, IRootState> = {
  namespaced: true,
  state() {
    return {
      channelList: [],
      memberId: 0,
    };
  },
  mutations: {
    changeChannel(state, list: any[]) {
      state.channelList = list;
    },
    changeMemberId(state, payload: any) {
      state.memberId = payload;
    },
  },

  actions: {
    // 请求列表
    async getchannelListAction({ commit }, payload: any) {
      commit(`changeMemberId`, payload);
      const pageResult = await memberChannel(payload.queryInfo);
      const list = pageResult.data;
      commit(`changeChannel`, list);
    },
  },
};
export default memberModule;
