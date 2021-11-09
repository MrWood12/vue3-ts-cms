import { hyRequest } from "../../index";
import { ElMessage } from "element-plus";

//获取用户有效渠道
export function memberChannel(queryInfo: any) {
  return hyRequest.post({
    url: "/member/channelList",
    data: { member_id: queryInfo.member_id },
  });
}
//充值
export function memberRecharge(queryInfo: any) {
  return hyRequest.post({
    url: "/member/recharge",
    data: {
      member_id: queryInfo.member_id,
      channel_id: queryInfo.channel_id,
      amount: Number(queryInfo.amount),
    },
  });
}
