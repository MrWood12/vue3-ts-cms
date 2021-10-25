import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import { loginAccountRequest } from "@/service/login/login";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: "",
    };
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 1、实现登录逻辑
      const loginResult = await loginAccountRequest(payload);
      const { id, token } = loginResult.data;
    },
  },
};
export default loginModule;
