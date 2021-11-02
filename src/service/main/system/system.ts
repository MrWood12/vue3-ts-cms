import { hyRequest } from "../../index";

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.get({
    url: url,
    params: queryInfo,
  });
}
