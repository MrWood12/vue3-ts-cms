// axios封装
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";
import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus/lib/components/loading/src/loading.type";

const DEAFULT_LOADING = true;

class HCRequest {
  // 变量  instance 实例
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors;
  showLoading: boolean;
  loading?: ILoadingInstance;
  // constructor类的构造器
  // axios.create会创造一个axios实例,把每个实例存储到instance中
  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    //保存基本信息
    this.interceptors = config.interceptors;
    // 双问号，如果值为none或undefined 默认为true
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;

    // 使用拦截器
    // 1、从config中取出的拦截器是对应的实例的拦截器
    // request拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    // response拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2、添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("所有实例都有拦截器，请求拦截成功1");
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据....",
            background: "rgba(0,0,0,0.5)",
          });
        }

        return config;
      },
      (err) => {
        // console.log("所有实例都有拦截器，请求拦截失败1");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("所有实例都有拦截器，响应拦截成功1");
        // 移除loading
        // 可选链，有值的时候调用，没值的时候不调用，可以不写if
        this.loading?.close();
        const data = res.data;
        if (data.returnCode === "-1001") {
          console.log("请求失败，错误信息");
        } else {
          return res.data;
        }
      },
      (err) => {
        // console.log("所有实例都有拦截器，响应拦截失败1");
        // 移除loading
        // 可选链，有值的时候调用，没值的时候不调用，可以不写if
        this.loading?.close();
        // 例子：判断不同的HttpErrorCode来显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404错误");
        }
        return err;
      }
    );
  }
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1、是否显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      // 2、单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.重置showloading
          // 在上方showloading被设计为false，为了不影响其他请求，需要在请求结束获取响应的时候将其设置为true
          this.showLoading = DEAFULT_LOADING;
          // console.log(res);
          // 3、将结果通过resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING;
          reject(err);
        });
    });
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}
export default HCRequest;
