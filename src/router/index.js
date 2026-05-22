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
  {
    path: "/wealth",
    name: "Wealth",
    component: () => import("@/container/WealthContainer.vue"),
  },
  {
    path: "/loan",
    name: "Loan",
    component: () => import("@/container/LoanContainer.vue"),
  },
  {
    path: "/digital",
    name: "Digital",
    component: () => import("@/container/DigitalContainer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
