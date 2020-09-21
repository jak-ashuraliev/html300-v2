import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Images from '../components/Images.vue'
import Accordion from '../components/Accordion.vue'
import Grid from '../components/Grid.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/images',
    name: 'Images',
    component: Images
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: Accordion
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router