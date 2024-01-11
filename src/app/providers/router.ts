import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages'
import { NAME } from './config'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  routes
})

router.beforeEach((to, from) => {
  document.title = `${to.meta.title} - ${NAME}`
})
