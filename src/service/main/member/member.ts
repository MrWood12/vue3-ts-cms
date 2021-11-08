import { hyRequest } from "../../index";
import { ElMessage } from "element-plus";

//创建
export function memberChannel(queryInfo: any) {
  return hyRequest.post({
    url: "/member/channelList",
    data: { member_id: queryInfo },
  });
}
