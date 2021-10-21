import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { globalRegister } from "./global/index";
// import "./service/axios-demo";
import { hyRequest } from "./service/index";

const app = createApp(App);

// 注册elementplus
// globalRegister(app);
app.use(globalRegister);
app.use(store);
app.use(router);

app.mount("#app");

interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}

hyRequest
  .get<DataType>({
    url: "/home/multidata",
    method: "GET",
    interceptors: {
      requestInterceptor: (config) => {
        console.log("单独请求的config");
        return config;
      },
      responseInterceptor: (res) => {
        console.log("单独响应的response");
        return res;
      },
    },
    showLoading: false,
  })
  .then((res) => {
    console.log(res.data);
    console.log(res.returnCode);
    console.log(res.success);
  });
