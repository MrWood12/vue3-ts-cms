// 自动修改开发环境和生产环境
// 根据process.env.NODE_ENV
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = "";
const TIME_OUT = 10000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "/backend";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "/backend";
} else {
  BASE_URL = "";
}
export { BASE_URL, TIME_OUT };
