// 本地缓存封装
class localCache {
  // 存储
  setCache(key: string, value: any) {
    // obj=>string
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  // 获取
  getCache(key: string) {
    // string=>obj
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  // 删除
  removeCache(key: string) {
    window.localStorage.removeItem(key);
  }

  // 清空
  clearCache() {
    window.localStorage.clear();
  }
}
export default new localCache();
