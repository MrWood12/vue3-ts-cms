import axios from "axios";

// axios的实例对象
// 1、get请求
// axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
//   console.log(res);
// });
// // 2、get请求并传入参数
// axios
//   .get("http://httpbin.org/get", {
//     params: {
//       name: "coderwhy",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });
// // 3、post请求
// axios
//   .post("http://httpbin.org/post", {
//     data: {
//       name: "why",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 额外补充的Promise中类型的使用
// new Promise<string>((resolve) => {
//   resolve("abc");
// }).then((res) => {
//   console.log(res.length);
// });

// 4、axios的配置选项
// 全局配置
axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 10000;
axios.defaults.headers = {};
axios
  .get("/get", {
    params: {
      name: "coderwhy",
      age: 18,
    },
    // 单独配置
    timeout: 5000,
  })
  .then((res) => {
    console.log(res);
  });
// 3、post请求
axios
  .post("/post", {
    data: {
      name: "why",
      age: 18,
    },
  })
  .then((res) => {
    console.log(res);
  });

// axios.all 多个请求，一起返回
axios
  .all([
    axios.get("/get", { params: { name: "why", age: 18 } }),
    axios.post("/post", { params: { name: "why", age: 18 } }),
  ])
  .then((res) => {
    console.log(res);
    console.log(res[0]);
    console.log(res[1]);
  });

// 6.axios的拦截器
// 比如在每个请求发送到服务器之前，拦截请求，并且给这个请求添加token
// 再比如loading的出现和消失
// axios.interceptors.request.use 请求拦截
// axios.interceptors.response.use 响应拦截
// fn1:请求成功会执行的函数
// fn2:请求失败成功会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1、给请求添加token
    // 2、isloading动画

    return config;
  },
  (err) => {
    console.log("请求发送错误");
    return err;
  }
);
// fn1:数据响应成功（服务器正常的返回了数据 20x）
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");
    return res;
  },
  (err) => {
    console.log("响应失败的拦截");
    return err;
  }
);
