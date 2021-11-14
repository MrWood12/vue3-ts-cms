import { hyRequest } from "../../index";

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
  console.log(queryInfo);
  return hyRequest.post({
    url: "/petoleum/applyInfo",
    data: {
      id: queryInfo,
    },
  });
}
