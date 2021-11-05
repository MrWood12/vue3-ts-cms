import { App } from "vue";

import { getChannelById } from "@/utils/date-channel";
import { getMemberStatusNameById } from "@/utils/date-member";
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    channelName(id: number) {
      return getChannelById(id);
    },
    memberStatusName(status: number) {
      return getMemberStatusNameById(status);
    },
  };
}
