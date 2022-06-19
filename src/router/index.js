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
    component: () => import('@/views/About/AboutView.vue')
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
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: () => import('@/views/Sponsors/SponsorsView.vue')
  },
  {
    path: '/media',
    name: 'Media',
    component: () => import('@/views/Media/MediaView.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('@/views/Contact/ContactView.vue')
  },
  {
    path: '/attend',
    name: 'Attend',
    component: () => import('@/views/Attend/AttendView.vue')
  },
  {
    path:'/sponsorship',
    name:'SponsorShip',
    component: () => import('@/views/Sponsorship/SponsorshipView.vue')
  },
  {
    path:'/speaker/:id',
    name:'SpeakerView',
    component: () => import('@/views/Speaker/SpeakerView.vue')
  },
  {
    path:'/thankyou',
    name:'Thankyou',
    component: () => import('@/components/ThankyouPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
