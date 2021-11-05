import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import {
  loginAccountRequest,
  // requestUserInfoById,
  // requestUserMenusByRoleId,
} from "@/service/login/login";
import localCache from "@/utils/localCache";
import router from "@/router";
import { mapMenusToRoutes } from "@/utils/map-menus";
import mokeUserMenus from "./mock-userMenus";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      createTime: 0,
      permissions: [],
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      // 1、存储userMenu
      state.userMenus = userMenus;
      //2、Menu映射到routes路由内
      const routes = mapMenusToRoutes(userMenus);
      //  routes=>router.main.children
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
      // 获取用户按钮的权限
      // const permissions = mapMenusToPermissions(userMenus);
      // console.log(permissions);
      // state.permissions = permissions;
    },
    changCreateTime(state, createTime: number) {
      state.createTime = createTime;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 1、实现登录逻辑
      const loginResult = await loginAccountRequest(payload);
      const { token } = loginResult.data;
      commit("changeToken", token);
      const username = localCache.getCache("username");
      if (username) {
        localCache.clearCache();
        localCache.setlocalCache("token", token);
      } else {
        localCache.clearCache();
        localCache.setsessionCache("token", token);
      }

      // // 2、存储用户信息以及创建时间
      const userInfo = loginResult.data;
      commit("changeUserInfo", userInfo);
      localCache.setlocalCache("userInfo", userInfo);
      const createTime = new Date().getTime();
      commit("changCreateTime", createTime);
      localCache.setlocalCache("createTime", createTime);

      // // 3、请求用户菜单
      // // const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
      // // const userMenus = userMenusResult.data;
      const userMenus = mokeUserMenus;
      // console.log(userMenus);
      commit("changeUserMenus", userMenus);
      localCache.setlocalCache("userMenus", userMenus);

      // 4、跳转首页
      router.push("/main");
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
      const createTime = localCache.getCache("createTime");
      if (createTime) {
        commit("changCreateTime", createTime);
      }
    },
  },
};
export default loginModule;
