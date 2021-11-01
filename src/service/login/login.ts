import { hyRequest } from "../index";
import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginAPI {
  AccountLogin = "/backend/common/login",
}

export function loginAccountRequest(account: IAccount) {
  return hyRequest.get<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    params: account,
  });
}
