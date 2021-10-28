import { RouteRecordRaw } from "vue-router";

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 1、先去加载默认所有的routes地址
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("../router/main", true, /\.ts/);
  console.log(routeFiles);
  routeFiles.keys().forEach((key) => {
    console.log(key);
    const route = require("../router/main" + key.split(".")[1]);
    console.log(route);
    allRoutes.push(route.default);
  });
  // 2、根据菜单获取需要添加的routes
  // 设置递归函数，当为一级菜单时，重新调用函数，直到没有更下一级菜单
  const _recureseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url;
        });
        if (route) {
          routes.push(route);
        }
      } else {
        _recureseGetRoute(menu.children);
      }
    }
  };
  _recureseGetRoute(userMenus);
  return routes;
}
