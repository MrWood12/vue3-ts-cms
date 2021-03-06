import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IRootState, IStoreType } from "./types";
import { getPageNormalData } from "@/service/main/system/system";
import {
  getStateNumberData,
  getRechargeAmountData,
} from "@/service/main/recharge/recharge";
import { getPowerAmountData } from "@/service/main/powerorders/powerorders";
import { getPayorderAmountData } from "@/service/main/payorder/payorder";
import {
  getApplicationStateData,
  getApplicationDetailData,
  getApplicationDeliverData,
} from "@/service/main/application/application";

import { getMemberStateData } from "@/service/main/member/member";
import localCache from "@/utils/localCache";

import login from "./login/login";
import system from "./main/system/system";
import member from "./main/member/member";
const store = createStore<IRootState>({
  state: {
    entireChannel: [],
    rechargeState: [],
    powerAmount: {},
    rechargeAmount: {},
    payorderAmount: {},
    oilcardList: [],
    oilproductList: [],
    applicationStateList: {},
    applicationDataList: {},
    applicationDeliverList: {},
    memberStateList: {},
    cardManageDataList: {},
    entireRoleList: [],
  },
  mutations: {
    changeEntireChannel(state, list) {
      state.entireChannel = list;
    },
    changeRechargeState(state, rechargeState) {
      state.rechargeState = rechargeState;
    },
    changePowerAmount(state, powerAmount) {
      state.powerAmount = powerAmount;
    },
    changeRechargeAmount(state, rechargeAmount) {
      state.rechargeAmount = rechargeAmount;
    },
    changePayorderAmount(state, payorderAmount) {
      state.payorderAmount = payorderAmount;
    },
    changeOilcardList(state, oilcardList) {
      state.oilcardList = oilcardList;
    },
    changeOilproductList(state, oilproductList) {
      state.oilproductList = oilproductList;
    },
    changeApplicationStateList(state, applicationStateList) {
      state.applicationStateList = applicationStateList;
    },
    changeApplicationDataList(state, applicationDataList) {
      state.applicationDataList = applicationDataList;
    },
    changeApplicationDeliverList(state, applicationDeliverList) {
      state.applicationDeliverList = applicationDeliverList;
    },
    changeMemberStateList(state, memberStateList) {
      state.memberStateList = memberStateList;
    },
    changeCardManageDataList(state, cardManageDataList) {
      state.cardManageDataList = cardManageDataList;
    },
    changeEntireRole(state, entireRoleList) {
      state.entireRoleList = entireRoleList;
    },
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //??????????????????????????????
      const entireChannelResult = await getPageNormalData("/channel/validList");
      const entireChannelList = entireChannelResult.data;
      // ??????????????????????????????
      commit("changeEntireChannel", entireChannelList);
    },

    async getMemberStateAction({ commit }) {
      //??????????????????
      const memberStateResult = await getMemberStateData();
      const memberStateList = memberStateResult.data;
      commit("changeMemberStateList", memberStateList);
    },

    async getStateNumber({ commit }) {
      //??????????????????????????????
      const rechargeStateResult = await getStateNumberData("/balance/state");
      const rechargeState = rechargeStateResult.data;
      // ??????????????????
      commit("changeRechargeState", rechargeState);
    },

    async getPowerAmount({ commit }, payload: any) {
      //????????????????????????
      const powerAmountResult = await getPowerAmountData(payload);
      const powerAmount = powerAmountResult.data;
      // ??????????????????????????????
      commit("changePowerAmount", powerAmount);
    },

    async getRechargeAmount({ commit }, payload?: any) {
      //????????????????????????
      const rechargeAmountResult = await getRechargeAmountData(payload);
      const rechargeAmount = rechargeAmountResult.data;
      // ??????????????????????????????
      commit("changeRechargeAmount", rechargeAmount);
    },

    async getPayorderAmount({ commit }, payload?: any) {
      //????????????????????????
      const payorderAmountResult = await getPayorderAmountData(payload);
      const payorderAmount = payorderAmountResult.data;
      // ??????????????????????????????
      commit("changePayorderAmount", payorderAmount);
    },

    async getOilcardAction({ commit }) {
      //??????????????????
      const oilcardResult = await getPageNormalData("/petoleum/types");
      const oilcardList = oilcardResult.data;
      // ??????????????????????????????
      commit("changeOilcardList", oilcardList);
    },

    async getOilproductAction({ commit }) {
      //??????????????????
      const oilproductResult = await getPageNormalData("/petoleum/gases");
      const oilproductList = oilproductResult.data;
      // ??????????????????????????????
      commit("changeOilproductList", oilproductList);
    },

    async getApplicationStateAction({ commit }, payload?: any) {
      //??????????????????????????????
      const applicationStateResult = await getApplicationStateData(payload);
      const applicationStateList = applicationStateResult.data;
      // ??????????????????????????????
      commit("changeApplicationStateList", applicationStateList);
    },

    async getApplicationDetailAction({ commit }, payload?: any) {
      // console.log(payload);
      // return getApplicationDetailData(payload).then((res) => {
      //   console.log(res);
      //   commit("changeApplicationDataList", res.data);
      // });
      //??????????????????
      const applicationDatalResult = await getApplicationDetailData(payload);
      const applicationDataList = applicationDatalResult.data;
      localCache.setsessionCache("applicationDataList", applicationDataList);
      // ??????????????????????????????
      commit("changeApplicationDataList", applicationDataList);
    },
    // ??????
    async getApplicationDeliverAction({ dispatch }, payload?: any) {
      // console.log(payload.queryInfo);
      await getApplicationDeliverData(payload.queryInfo);
      // const applicationDeliverList = applicationDeliverResult.data;
      dispatch("getApplicationStateAction");
      dispatch(
        "system/getPageListAction",
        {
          pageName: "cardapplication",
          queryInfo: {
            start: 1,
            limit: 10,
          },
        },
        { root: true }
      );
      // commit("changeApplicationDeliverList", applicationDeliverList);
    },
    // ??????????????????
    async getRoleDataAction({ commit }) {
      //??????????????????????????????
      const entireRoleResult = await getPageNormalData("/user/roleList");
      const entireRoleList = entireRoleResult.data;
      // ??????????????????????????????
      commit("changeEntireRole", entireRoleList);
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
  // store.dispatch("getInitialDataAction");
  // store.dispatch("getStateNumber");
  // store.dispatch("getPowerAmount");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
