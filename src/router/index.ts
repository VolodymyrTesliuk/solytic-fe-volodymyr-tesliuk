import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LogInView.vue'),
      beforeEnter: (to, from, next) => {
        if (useUserStore().isLoggedIn) next({ name: 'user' })
        else next()
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => ({}),
      beforeEnter: (to, from, next) => {
        if (useUserStore().isLoggedIn) useUserStore().logOutUser()
        next({ name: 'login' })
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      beforeEnter: (to, from, next) => {
        if (useUserStore().isLoggedIn) next()
        else next({ name: 'login' })
      }
    }
  ]
})

export default router
