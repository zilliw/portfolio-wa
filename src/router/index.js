import Vue from 'vue'
import VueRouter from 'vue-router'
import Experience from '../views/Experience.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
