import { ILoginState } from "./login/types";
import { IsystemState } from "./main/system/types";
export interface IRootState {
  entireChannel: any[];
  rechargeState: any[];
  powerAmount: any;
  rechargeAmount: any;
  payorderAmount: any;
  oilcardList: any[];
  oilproductList: any[];
  applicationStateList: any;
  applicationDataList: any;
  applicationDeliverList: any;
}

export interface IRootWithModule {
  login: ILoginState;
  system: IsystemState;
  member: IsystemState;
  application: IsystemState;
}

export type IStoreType = IRootState & IRootWithModule;
