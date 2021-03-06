// service统一的出口

import HCRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import localCatch from "@/utils/localCache";
import { ElMessage } from "element-plus";

const hyRequest = new HCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = localCatch.getCache("token");
      if (token) {
        config.headers.Authorization = token;
      }
      // 刷新token的过期时间
      const nowDate = new Date().getTime();
      localCatch.setlocalCache("nowDate", nowDate);
      // console.log("请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      // console.log("请求失败的拦截");
      return err;
    },
    responseInterceptor: (res) => {
      // console.log("响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (err) => {
      // console.log("响应失败的拦截");
      const errData = err.response.data;
      if (errData.status == 0) {
        ElMessage.error(err.response.data.message);
      }
      return err;
    },
  },
});

// constructor 用类的构造器对创建不同的实例
// const hyRequest2 = new HCRequest({
//   baseURL: "地址2",
// });
// export { hyRequest, hyRequest2 };
export { hyRequest };
