// 本地缓存封装
class localCache {
  // local存储
  setlocalCache(key: string, value: any) {
    // obj=>string
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  // session存储
  setsessionCache(key: string, value: any) {
    // obj=>string
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
  // 获取
  getCache(key: string) {
    // string=>obj
    const value =
      window.localStorage.getItem(key) || window.sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  // 删除
  removeCache(key: string) {
    window.localStorage.removeItem(key);
    window.sessionStorage.removeItem(key);
  }

  // 清空
  clearCache() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
}
export default new localCache();
