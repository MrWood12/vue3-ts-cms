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
  exportPageData,
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
      cardmanageList: [],
      cardmanageCount: 0,
      importuserList: [],
      importuserCount: 0,
      importlistList: [],
      importlistCount: 0,
      importamountCount: 0,
      importamountList: [],
      usersCount: 0,
      usersList: [],
      normalmemberCount: 0,
      normalmemberList: [],
      exportlistList: [],
      exportlistCount: 0,
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
    changeCardmanageList(state, cardmanageList: any[]) {
      state.cardmanageList = cardmanageList;
    },
    changeCardmanageCount(state, cardmanageCount: number) {
      state.cardmanageCount = cardmanageCount;
    },
    changeImportuserList(state, importuserList: any[]) {
      state.importuserList = importuserList;
    },
    changeImportuserCount(state, importuserCount: number) {
      state.importuserCount = importuserCount;
    },
    changeImportlistList(state, importlistList: any[]) {
      state.importlistList = importlistList;
    },
    changeImportlistCount(state, importlistCount: number) {
      state.importlistCount = importlistCount;
    },
    changeImportamountList(state, importamountList: any[]) {
      state.importamountList = importamountList;
    },
    changeImportamountCount(state, importamountCount: number) {
      state.importamountCount = importamountCount;
    },
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList;
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount;
    },
    changeNormalmemberList(state, normalmemberList: any[]) {
      state.normalmemberList = normalmemberList;
    },
    changeNormalmemberCount(state, normalmemberCount: number) {
      state.normalmemberCount = normalmemberCount;
    },
    changeExportlistList(state, exportlistList: any[]) {
      state.exportlistList = exportlistList;
    },
    changeExportlistCount(state, exportlistCount: number) {
      state.exportlistCount = exportlistCount;
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
    // ????????????
    async getPageListAction({ commit }, payload: any) {
      // 1?????????pageUrl
      const pageName = payload.pageName;
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
        case "cardmanage":
          pageUrl.value = "/petoleum/bindList";
          break;
        case "importuser":
          pageUrl.value = "/Import/memberList";
          break;
        case "importlist":
          pageUrl.value = "/Import/index";
          break;
        case "importamount":
          pageUrl.value = "/Import/balanceList";
          break;
        case "users":
          pageUrl.value = "/user/index";
          break;
        case "normalmember":
          pageUrl.value = "/member/potentialList";
          break;
        case "exportlist":
          pageUrl.value = "/explode/index";
          break;
      }
      // 2????????????????????????
      const pageResult = await getPageListData(
        pageUrl.value,
        payload.queryInfo
      );

      // 3?????????????????????state???
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
    // ??????
    async createPageDataAction({ dispatch }, payload: any) {
      // 1?????????????????????
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
        case "users":
          pageUrl.value = "/user/create";
          break;
      }
      await createPageData(pageUrl.value, queryInfo);
      // 2?????????????????????
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
    // ??????
    async editPageDataAction({ dispatch }, payload: any) {
      // 1?????????????????????
      const { pageName, queryInfo } = payload;
      const pageUrl = ref("");

      switch (pageName) {
        case "users":
          pageUrl.value = "/user/updateUser";
          break;
        case "channel":
          pageUrl.value = "/channel/updateChannel";
          break;
      }
      await editPageData(pageUrl.value, queryInfo);
      // 2?????????????????????
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
    // ??????
    async updatePageDataAction({ dispatch }, payload: any) {
      // 1?????????????????????
      const { pageName, queryInfo } = payload;
      if (pageName == "shop") {
        const pageUrl = "/shop/updateDebt";
        await updateStatus(pageUrl, queryInfo);
        // 2?????????????????????
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
        // 2?????????????????????
        dispatch("getPageListAction", {
          pageName,
          queryInfo: {
            start: 1,
            limit: 10,
          },
        });
      }
    },
    // ??????
    async uploadPageDataAction({ dispatch }, payload: any) {
      // 1?????????????????????
      const { pageName, queryInfo } = payload;
      const pageUrl = `/${pageName}/import`;
      await upLoadFile(pageUrl, queryInfo);
      // 2?????????????????????
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
    // ????????????
    async handleUploadAmountClick({ dispatch }, payload: any) {
      // 1?????????????????????
      const { pageName, queryInfo } = payload;
      const pageUrl = "/balance/import";
      await upLoadFile(pageUrl, queryInfo);
      // 2?????????????????????
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    },
    // ??????
    async editExportDataAction({ dispatch }, payload: any) {
      // 1?????????????????????
      const { pageName, queryInfo } = payload;
      const pageUrl = ref("");

      switch (pageName) {
        case "member":
          pageUrl.value = "/explode/rightMember";
          break;
        case "capitalpool":
          pageUrl.value = "/explode/platformRecharge";
          break;
        case "powerorders":
          pageUrl.value = "/explode/rightOrder";
          break;
        case "payorders":
          pageUrl.value = "/explode/trans";
          break;
        case "cardapplication":
          pageUrl.value = "/explode/applyOrder";
          break;
        case "cardorder":
          pageUrl.value = "/explode/rechargeOrder";
          break;
        case "recharge":
          pageUrl.value = "/explode/balanceRechargeOrder";
          break;
      }
      await exportPageData(pageUrl.value, queryInfo);
      // 2?????????????????????
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
