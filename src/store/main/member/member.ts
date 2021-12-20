import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ImemberState } from "./types";
import {
  changeStatus,
  memberChannel,
  memberRecharge,
  getRechargeList,
} from "@/service/main/member/member";
const memberModule: Module<ImemberState, IRootState> = {
  namespaced: true,
  state() {
    return {
      channelList: [],
      memberId: 0,
      rechargeList: [],
    };
  },
  mutations: {
    changeChannelList(state, list: any[]) {
      state.channelList = list;
    },
    changeMemberId(state, payload: any) {
      state.memberId = payload;
    },
    changeRechargeList(state, list: any[]) {
      state.rechargeList = list;
    },
  },

  actions: {
    // 请求用户有效渠道列表
    async getchannelListAction({ commit }, payload: any) {
      commit(`changeMemberId`, payload);
      const pageResult = await memberChannel(payload.queryInfo);
      const list = pageResult.data;
      commit(`changeChannelList`, list);
    },
    // 充值
    async memberchargeAction({ dispatch }, payload: any) {
      const { pageName, queryInfo } = payload;
      await memberRecharge(queryInfo);
      dispatch(
        "system/getPageListAction",
        {
          pageName,
          queryInfo: {
            start: 1,
            limit: 10,
          },
        },
        { root: true }
      );
    },
    // 更新状态
    async changeStatus({ dispatch }, payload: any) {
      const { pageName, queryInfo } = payload;
      await changeStatus(queryInfo);

      dispatch(
        "system/getPageListAction",
        {
          pageName,
          queryInfo: {
            start: 1,
            limit: 10,
          },
        },
        { root: true }
      );
    },
    // 充值余额列表
    async getRechargeList({ commit }, payload: any) {
      const pageResult = await getRechargeList(payload.queryInfo);
      const list = pageResult.data;
      commit(`changeRechargeList`, list);
    },
  },
};
export default memberModule;
