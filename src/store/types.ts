import { ILoginState } from "./login/types";
import { IsystemState } from "./main/system/types";
export interface IRootState {
  name?: string;
  age?: number;
}

export interface IRootWithModule {
  login: ILoginState;
  system: IsystemState;
}

export type IStoreType = IRootState & IRootWithModule;
