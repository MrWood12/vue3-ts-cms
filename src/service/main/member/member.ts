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
    interceptors: {
      responseInterceptor: (res) => {
        ElMessage.success(res.msg);
        // console.log("单独响应的response");
        return res;
      },
    },
  });
}
//更新状态
export function changeStatus(queryInfo: any) {
  console.log(queryInfo);
  return hyRequest.post({
    url: "/member/updateStatus",
    data: {
      member_id: queryInfo.member_id,
      status: queryInfo.status,
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
