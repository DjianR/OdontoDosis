import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Farmacos from '../views/Farmacos.vue'
import DetalleFarmaco from '../views/DetalleFarmaco.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/farmacos',
    name: 'Farmacos',
    component: Farmacos
  },
  {
    path: '/farmacos/:id',
    name: 'DetalleFarmaco',
    component: DetalleFarmaco,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
