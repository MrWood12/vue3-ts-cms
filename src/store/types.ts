import { ILoginState } from "./login/types";
import { IsystemState } from "./main/system/types";
export interface IRootState {
  entireChannel: any[];
  rechargeState: any[];
  powerAmount: any;
  rechargeAmount: any;
}

export interface IRootWithModule {
  login: ILoginState;
  system: IsystemState;
  member: IsystemState;
}

export type IStoreType = IRootState & IRootWithModule;
