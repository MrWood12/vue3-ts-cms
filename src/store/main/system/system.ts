import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { IsystemState } from "./types";
import { getPageListData } from "@/service/main/system/system";
const systemModule: Module<IsystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      channelList: [],
      channelCount: 0,
    };
  },
  mutations: {
    changeChannelList(state, channelList: any[]) {
      state.channelList = channelList;
    },
    changeChannelCount(state, channelCount: number) {
      state.channelCount = channelCount;
    },
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload);
      // 1、对页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.qeuryInfo
      );
      console.log(pageResult);
      const count = pageResult.count;
      const list = pageResult.data;
      commit("changeChannelList", list);
      commit("changeChannelCount", count);
    },
  },
};
export default systemModule;
