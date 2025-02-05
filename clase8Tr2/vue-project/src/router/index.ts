import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ejercicio from '../views/ejercicio.vue'
import ejercicio6 from '../views/ejercicio6.vue'
import ejercicio7 from '../views/ejercicio7.vue'
import ejercicio8 from '../views/ejercicio8.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ejercicio',
      name: 'ejercicio',
      component: ejercicio,
    },
    {
      path: '/ejercicio6',
      name: 'ejercicio6',
      component: ejercicio6,
    },
    {
      path: '/ejercicio7',
      name: 'ejercicio7',
      component: ejercicio7,
    },
    {
      path: '/ejercicio8',
      name: 'ejercicio8',
      component: ejercicio8,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
