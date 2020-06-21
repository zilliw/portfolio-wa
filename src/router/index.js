import Vue from 'vue'
import VueRouter from 'vue-router'
import Experience from '../views/Experience.vue'
import Formations from '../views/Formations.vue'
import Interets from '../views/Interets.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/Formations',
    name: 'Formations',
    component: Formations
  },
  {
    path: '/Interets',
    name: 'Interets',
    component: Interets
  }
]

const router = new VueRouter({
  routes
})

export default router
