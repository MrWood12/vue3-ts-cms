import { hyRequest } from "../../index";

//获取用户有效渠道
export function getStateNumberData(queryInfo: any) {
  return hyRequest.post({
    url: "/balance/state",
    data: queryInfo,
  });
}

//获取权益总数
export function getRechargeAmountData(queryInfo?: any) {
  return hyRequest.post({
    url: "/balance/amount",
    data: {
      start: 1,
      limit: 10,
      ...queryInfo,
    },
  });
}
