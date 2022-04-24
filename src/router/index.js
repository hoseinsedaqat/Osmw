import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/HomeView.vue')
  },
  {
    path: '/about-us',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/AboutView.vue')
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('@/views/Agenda/AgendaView.vue')
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import('@/views/Speakers/SpeakersView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
