import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Log in',
      component: LogInView
    },
    {
      path: '/user',
      name: 'User',
      component: UserView
    }
  ]
})

export default router
