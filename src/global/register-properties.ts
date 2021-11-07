import { App } from "vue";

import { getChannelById, getChannelData } from "@/utils/date-channel";
import { getMemberStatusNameById } from "@/utils/date-member";
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    channelName(id: number) {
      console.log(id);
      return getChannelById(id);
    },
    channelData(data: any) {
      return getChannelData(data);
    },
    memberStatusName(status: number) {
      return getMemberStatusNameById(status);
    },
  };
}
