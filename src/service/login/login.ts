import { hyRequest } from "../index";
import { IAccount } from "./type";

export function loginAccountRequest(account: IAccount) {
  return hyRequest.post({
    url: "/common/login",
    data: account,
  });
}
