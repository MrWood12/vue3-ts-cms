import { App } from "vue";

import { getChannelById, getChannelData } from "@/utils/date-channel";
import { getRoleByName } from "@/utils/date-role";
import {
  getMemberStatusNameById,
  getpowerordersTypeById,
  rechargeTypeById,
  cardorderTypeById,
  cardorderStatusById,
  cardapplicationStatusById,
} from "@/utils/dateStatus";
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    channelName(id: number) {
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
    cardorderTypeName(type: number) {
      return cardorderTypeById(type);
    },
    cardorderStatusName(status: number) {
      return cardorderStatusById(status);
    },
    cardapplicationStatusName(status: number) {
      return cardapplicationStatusById(status);
    },
    roleName(name: string) {
      return getRoleByName(name);
    },
  };
}
