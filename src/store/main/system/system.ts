import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { IsystemState } from "./types";
import { ref } from "vue";
import {
  getPageListData,
  createPageData,
  editPageData,
  updateStatus,
  upLoadFile,
} from "@/service/main/system/system";
const systemModule: Module<IsystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      channelList: [],
      channelCount: 0,
      memberList: [],
      memberCount: 0,
      capitalpoolList: [],
      capitalpoolCount: 0,
      powerordersList: [],
      powerordersCount: 0,
      payordersList: [],
      payordersCount: 0,
      rechargeList: [],
      rechargeCount: 0,
      cardorderList: [],
      cardorderCount: 0,
      cardapplicationList: [],
      cardapplicationCount: 0,
      shopList: [],
      shopCount: 0,
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
    changeCapitalpoolList(state, capitalpoolList: any[]) {
      state.capitalpoolList = capitalpoolList;
    },
    changeCapitalpoolCount(state, capitalpoolCount: number) {
      state.capitalpoolCount = capitalpoolCount;
    },
    changePowerordersList(state, powerordersList: any[]) {
      state.powerordersList = powerordersList;
    },
    changePowerordersCount(state, powerordersCount: number) {
      state.powerordersCount = powerordersCount;
    },
    changePayordersList(state, payordersList: any[]) {
      state.payordersList = payordersList;
    },
    changePayordersCount(state, payordersCount: number) {
      state.payordersCount = payordersCount;
    },
    changeRechargeList(state, rechargeList: any[]) {
      state.rechargeList = rechargeList;
    },
    changeRechargeCount(state, rechargeCount: number) {
      state.rechargeCount = rechargeCount;
    },
    changeCardorderList(state, cardorderList: any[]) {
      state.cardorderList = cardorderList;
    },
    changeCardorderCount(state, cardorderCount: number) {
      state.cardorderCount = cardorderCount;
    },
    changeCardapplicationList(state, cardapplicationList: any[]) {
      state.cardapplicationList = cardapplicationList;
    },
    changeCardapplicationCount(state, cardapplicationCount: number) {
      state.cardapplicationCount = cardapplicationCount;
    },
    changeShopList(state, shopList: any[]) {
      state.shopList = shopList;
    },
    changeShopCount(state, shopCount: number) {
      state.shopCount = shopCount;
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
      console.log(payload.pageName);
      const pageUrl = ref("");
      // const pageUrl = `/${pageName}/index`;
      switch (pageName) {
        case "channel":
          pageUrl.value = "/channel/index";
          break;
        case "member":
          pageUrl.value = "/member/index";
          break;
        case "capitalpool":
          pageUrl.value = "/Platform/rechargeList";
          break;
        case "powerorders":
          pageUrl.value = "/Rights/index";
          break;
        case "payorders":
          pageUrl.value = "/Trans/index";
          break;
        case "recharge":
          pageUrl.value = "/balance/index";
          break;
        case "cardorder":
          pageUrl.value = "/petoleum/rechargeList";
          break;
        case "cardapplication":
          pageUrl.value = "/petoleum/applyList";
          break;
        case "shop":
          pageUrl.value = "/shop/index";
          break;
      }
      // 2、对页面发送请求
      const pageResult = await getPageListData(
        pageUrl.value,
        payload.queryInfo
      );

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

      const pageUrl = ref("");
      switch (pageName) {
        case "channel":
          pageUrl.value = "/channel/create";
          break;
        case "member":
          pageUrl.value = "/member/create";
          break;
        case "capitalpool":
          pageUrl.value = "/Platform/createRecharge";
          break;
        case "shop":
          pageUrl.value = "/shop/create";
          break;
      }
      await createPageData(pageUrl.value, queryInfo);
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
      if (pageName == "shop") {
        const pageUrl = "/shop/updateDebt";
        await updateStatus(pageUrl, queryInfo);
        // 2、请求最新数据
        dispatch("getPageListAction", {
          pageName,
          queryInfo: {
            start: 1,
            limit: 10,
          },
        });
      } else {
        const pageUrl = `/${pageName}/updateStatus`;
        await updateStatus(pageUrl, queryInfo);
        // 2、请求最新数据
        dispatch("getPageListAction", {
          pageName,
          queryInfo: {
            start: 1,
            limit: 10,
          },
        });
      }
    },
    // 导入
    async uploadPageDataAction({ dispatch }, payload: any) {
      // 1、创建数据请求
      const { pageName, queryInfo } = payload;
      const pageUrl = `/${pageName}/import`;
      await upLoadFile(pageUrl, queryInfo);
      // 2、请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
    // 余额导入
    async handleUploadAmountClick({ dispatch }, payload: any) {
      // 1、创建数据请求
      const { pageName, queryInfo } = payload;
      const pageUrl = "/balance/import";
      await upLoadFile(pageUrl, queryInfo);
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
