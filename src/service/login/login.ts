import { hyRequest } from "../index";

export function loginAccountRequest(queryInfo: any) {
  return hyRequest.post({
    url: "/common/login",
    data: { ...queryInfo },
  });
}
