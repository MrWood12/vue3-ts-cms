import { hyRequest } from "../../index";
import { ElMessage } from "element-plus";

//删除服务点
export function deleteShop(queryInfo: any) {
  return hyRequest.post({
    url: "/shop/delete",
    data: {
      id: queryInfo,
    },
    interceptors: {
      responseInterceptor: (res) => {
        ElMessage.success(res.msg);
        // console.log("单独响应的response");
        return res;
      },
    },
  });
}
