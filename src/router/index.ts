import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'Log in',
      component: () => import('@/views/LogInView.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/UserView.vue')
    }
  ]
})

export default router
