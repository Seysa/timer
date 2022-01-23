import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Pomodoro from "../views/Pomodoro.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/pomodoro",
  },
  {
    path: "/pomodoro",
    name: "Pomodoro",
    component: Pomodoro,
  },
  {
    path: "/custom",
    name: "Custom",
    component: () => import("../views/Custom.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
