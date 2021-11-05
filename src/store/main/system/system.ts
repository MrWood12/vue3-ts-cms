import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { IsystemState } from "./types";
import {
  getPageListData,
  createPageData,
  editPageData,
  updateStatus,
} from "@/service/main/system/system";
const systemModule: Module<IsystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      channelList: [],
      channelCount: 0,
      memberList: [],
      memberCount: 0,
    };
  },
  mutations: {
    changeChannelList(state, channelList: any[]) {
      state.channelList = channelList;
    },
    changeChannelCount(state, channelCount: number) {
      state.channelCount = channelCount;
    },
    changeMemberList(state, memberList: any[]) {
      state.memberList = memberList;
    },
    changeMemberCount(state, memberCount: number) {
      state.memberCount = memberCount;
    },
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
        // switch (pageName) {
        //   case "member":
        //     return state.memberList;
        //   case "channel":
        //     return state.channelList;
        // }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    },
  },
  actions: {
    // 请求列表
    async getPageListAction({ commit }, payload: any) {
      // 1、获取pageUrl
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/index`;
      // switch (pageName) {
      //   case "channel":
      //     pageUrl = "/channel";
      //     break;
      //   case "member":
      //     pageUrl = "/member";
      //     break;
      // }
      // 2、对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      // 3、将数据存储到state中
      const count = pageResult.count;
      const list = pageResult.data;
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, count);

      // switch (pageName) {
      //   case "channel":
      //     commit(`changeChannelList`, list);
      //     commit(`changeChannelCount`, count);
      //     break;
      //   case "member":
      //     commit(`changeMemberList`, list);
      //     commit(`changeMemberCount`, count);
      //     break;
      // }
    },
    // 创建
    async createPageDataAction({ dispatch }, payload: any) {
      // 1、创建数据请求
      const { pageName, queryInfo } = payload;
      console.log(pageName);
      const pageUrl = `/${pageName}/create`;
      await createPageData(pageUrl, queryInfo);
      // 2、请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
    // 编辑
    async editPageDataAction({ dispatch }, payload: any) {
      // 1、创建数据请求
      const { pageName, queryInfo, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, queryInfo);
      // 2、请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
    // 更新
    async updatePageDataAction({ dispatch }, payload: any) {
      // 1、创建数据请求
      const { pageName, queryInfo } = payload;
      const pageUrl = `/${pageName}/updateStatus`;
      console.log(queryInfo);
      await updateStatus(pageUrl, queryInfo);
      // 2、请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
  },
};
export default systemModule;
