import { hyRequest } from "../../index";
import { ElMessage } from "element-plus";

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
    interceptors: {
      responseInterceptor: (res) => {
        ElMessage.success(res.msg);
        // console.log("单独响应的response");
        return res;
      },
    },
  });
}

// 编辑
export function editPageData(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    data: queryInfo,
  });
}
// 更新状态
export function updateStatus(url: string, qeuryInfo: any) {
  return hyRequest.post({
    url: url,
    data: qeuryInfo,
    interceptors: {
      responseInterceptor: (res) => {
        ElMessage.success(res.msg);
        // console.log("单独响应的response");
        return res;
      },
    },
  });
}
export function upLoadFile(url: string, queryInfo: any) {
  const formData = new FormData();
  formData.append("file", queryInfo);
  return hyRequest.post({
    url: url,
    data: formData,
    interceptors: {
      responseInterceptor: (res) => {
        ElMessage.success(res.msg);
        // console.log("单独响应的response");
        return res;
      },
    },
  });
}
