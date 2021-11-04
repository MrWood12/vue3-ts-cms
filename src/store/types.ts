import { ILoginState } from "./login/types";
import { IsystemState } from "./main/system/types";
export interface IRootState {
  entireChannel: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: IsystemState;
}

export type IStoreType = IRootState & IRootWithModule;
