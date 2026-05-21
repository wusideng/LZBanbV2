import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/IndexPage.vue')
  },
  {
    path: '/finance',
    name: 'Finance',
    component: () => import('@/container/FinanceContainer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router