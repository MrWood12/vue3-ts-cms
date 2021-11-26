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
      console.log(1);
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
      //请求当前余额总量状态
      const rechargeStateResult = await getStateNumberData("/balance/state");
      const rechargeState = rechargeStateResult.data;
      console.log(rechargeStateResult.data);
      // 保存当前数据
      commit("changeRechargeState", rechargeState);
    },

    async getPowerAmount({ commit }, payload: any) {
      //请求当前权益总数
      console.log(payload);
      const powerAmountResult = await getPowerAmountData(payload);
      const powerAmount = powerAmountResult.data;
      console.log(powerAmount);
      // 保存当前有效渠道数据
      commit("changePowerAmount", powerAmount);
    },

    async getRechargeAmount({ commit }, payload?: any) {
      //请求余额充值总数
      console.log(payload);
      const rechargeAmountResult = await getRechargeAmountData(payload);
      const rechargeAmount = rechargeAmountResult.data;
      // 保存余额充值总数数据
      commit("changeRechargeAmount", rechargeAmount);
    },

    async getPayorderAmount({ commit }, payload?: any) {
      //请求消费订单总数
      console.log(payload);
      const payorderAmountResult = await getPayorderAmountData(payload);
      const payorderAmount = payorderAmountResult.data;
      // 保存消费订单总数数据
      commit("changePayorderAmount", payorderAmount);
    },

    async getOilcardAction({ commit }) {
      //请求油卡类型
      const oilcardResult = await getPageNormalData("/petoleum/types");
      const oilcardList = oilcardResult.data;
      // 保存当前有效渠道数据
      commit("changeOilcardList", oilcardList);
    },

    async getOilproductAction({ commit }) {
      //请求油品类型
      const oilproductResult = await getPageNormalData("/petoleum/gases");
      const oilproductList = oilproductResult.data;
      // 保存当前有效渠道数据
      commit("changeOilproductList", oilproductList);
    },
    async getApplicationStateAction({ commit }, payload?: any) {
      //请求油品类型
      const applicationStateResult = await getApplicationStateData(payload);
      const applicationStateList = applicationStateResult.data;
      // 保存当前有效渠道数据
      commit("changeApplicationStateList", applicationStateList);
    },
    async getApplicationDetailAction({ commit }, payload?: any) {
      // console.log(payload);
      // return getApplicationDetailData(payload).then((res) => {
      //   console.log(res);
      //   commit("changeApplicationDataList", res.data);
      // });
      //请求申请详情
      const applicationDatalResult = await getApplicationDetailData(payload);
      const applicationDataList = applicationDatalResult.data;
      console.log(applicationDataList);
      localCache.setsessionCache("applicationDataList", applicationDataList);
      // 保存当前有效渠道数据
      commit("changeApplicationDataList", applicationDataList);
      console.log(store.state.applicationDataList);
    },
    // 发货
    async getApplicationDeliverAction({ dispatch }, { commit }, payload?: any) {
      const applicationDeliverResult = await getApplicationDeliverData(
        payload.queryInfo
      );
      const applicationDeliverList = applicationDeliverResult.data;
      dispatch("system/getPageListAction", {
        pageName: payload.pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
      commit("changeApplicationDeliverList", applicationDeliverList);
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
