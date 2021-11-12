import { hyRequest } from "../../index";

//获取消费金额总数
export function getPayorderAmountData(queryInfo?: any) {
  return hyRequest.post({
    url: "/Trans/amount",
    data: {
      start: 1,
      limit: 10,
      ...queryInfo,
    },
  });
}
