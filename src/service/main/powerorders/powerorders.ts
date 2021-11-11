import { hyRequest } from "../../index";

//获取权益总数
export function getPowerAmountData(queryInfo?: any) {
  return hyRequest.post({
    url: "/Rights/amount",
    data: {
      start: 1,
      limit: 10,
      ...queryInfo,
    },
  });
}
