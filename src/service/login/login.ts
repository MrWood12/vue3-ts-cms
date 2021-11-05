import { hyRequest } from "../index";
import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginAPI {
  AccountLogin = "/common/login",
}

export function loginAccountRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}
