import { App } from "vue";

import { getChannelById, getChannelData } from "@/utils/date-channel";
import {
  getMemberStatusNameById,
  getpowerordersTypeById,
  rechargeTypeById,
} from "@/utils/dateStatus";
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
    powerordersTypeName(type: number) {
      return getpowerordersTypeById(type);
    },
    rechargeStatusName(status: number) {
      return rechargeTypeById(status);
    },
  };
}
