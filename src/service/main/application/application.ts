import { hyRequest } from "../../index";
import { ElMessage } from "element-plus";

//获取消费金额总数
export function getApplicationStateData(queryInfo?: any) {
  return hyRequest.post({
    url: "/petoleum/applyState",
    data: {
      start: 1,
      limit: 10,
      ...queryInfo,
    },
  });
}
//获取详情
export function getApplicationDetailData(queryInfo: any) {
  return hyRequest.post({
    url: "/petoleum/applyInfo",
    data: {
      id: queryInfo,
    },
  });
}

// 发货
export function getApplicationDeliverData(queryInfo: any) {
  return hyRequest.post({
    url: "/petoleum/bindDispatch",
    data: {
      ...queryInfo,
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
