import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import localCache from "@/utils/localCache";
import { firstMenu } from "@/utils/map-menus";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue"),
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: () => import("@/views/main/main.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router导航守卫
router.beforeEach((to) => {
  console.log(to);
  console.log(router.getRoutes());
  // 登录校验
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    const userInfo = localCache.getCache("userInfo");
    const createTime = localCache.getCache("createTime");
    if (!token) {
      return "/login";
    } else {
      const nowDate = localCache.getCache("nowDate");
      const finaldata = (nowDate - createTime) / 1000;
      if (finaldata > userInfo.expires_in) {
        localCache.clearCache();
        return "/login";
      }
    }
  }

  if (to.path === "/main") {
    return firstMenu.url;
  }
});
export default router;
