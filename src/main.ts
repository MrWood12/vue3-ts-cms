import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import router from "./router";
import store from "./store";
import { globalRegister } from "./global/index";

// import "./service/axios-demo";
// import { hyRequest } from "./service/index";
import "normalize.css";
import "./assets/css/index.less";
setupStore();

const app = createApp(App);

// 注册elementplus
// globalRegister(app);
app.use(globalRegister);
app.use(store);
// 注册动态路由
app.use(router);

app.mount("#app");

// 示例
// interface DataType {
//   data: any;
//   returnCode: string;
//   success: boolean;
// }

// hyRequest
//   .get<DataType>({
//     url: "/home/multidata",
//     method: "GET",
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log("单独请求的config");
//         return config;
//       },
//       responseInterceptor: (res) => {
//         console.log("单独响应的response");
//         return res;
//       },
//     },
//     showLoading: false,
//   })
//   .then((res) => {
//     console.log(res.data);
//     console.log(res.returnCode);
//     console.log(res.success);
//   });
