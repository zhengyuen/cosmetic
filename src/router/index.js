import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component:() =>  import('@/views/Products/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component:() =>  import('@/views/About/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component:() =>  import('@/views/Cart/index.vue')
    },
    {
      path: '/member',
      name: 'member',
      component:() =>  import('@/views/Member/index.vue')
    },
  ]
})

export default router