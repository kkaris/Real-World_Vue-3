import { createRouter, createWebHistory } from 'vue-router'
import EventDetails from '@/components/EventDetails'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
//  history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/vue/'),
  routes
})

export default router
