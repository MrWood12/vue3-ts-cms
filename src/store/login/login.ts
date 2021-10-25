import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import {
  loginAccountRequest,
  requestUserInfoById,
  requestUserMenusByRoleId,
} from "@/service/login/login";
import localCache from "@/utils/cache";
import router from "@/router";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
      console.log(token);
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 1、实现登录逻辑
      const loginResult = await loginAccountRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      localCache.setCache("token", token);

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      localCache.setCache("userInfo", userInfo);

      // 3、请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
      const userMenus = userMenusResult.data;
      console.log(userMenus);
      commit("changeUserMenus", userMenus);
      localCache.setCache("userMenus", userMenus);

      // 4、跳转首页
      router.push("/main");
    },
  },
};
export default loginModule;
