import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import localCache from "@/utils/localCache";

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
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/main/main.vue"),
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: () => import("@/views/not-found/not-found.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "./login";
    }
  }
});
export default router;
