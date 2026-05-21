import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/pages/IndexPage.vue"),
  },
  {
    path: "/finance",
    name: "Finance",
    component: () => import("@/container/FinanceContainer.vue"),
  },
  {
    path: "/channel",
    name: "Channel",
    component: () => import("@/container/ChannelContainer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
