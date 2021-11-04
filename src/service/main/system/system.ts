import { hyRequest } from "../../index";

// 不需要请求参数的获取列表数据请求
export function getPageNormalData(url: string) {
  return hyRequest.get({
    url: url,
  });
}

// 需要携带参数的获取列表数据请求
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.get({
    url: url,
    params: queryInfo,
  });
}

//创建
export function createPageData(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    data: queryInfo,
  });
}

// 编辑
export function editPageData(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    data: queryInfo,
  });
}
