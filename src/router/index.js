import Vue from 'vue'
import VueRouter from 'vue-router'
import Formations from '../views/Formations'
import Experience from '../views/Experience'
import Hobbies from '../views/Hobbies'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Experience
    },
  {
    path: '/formations',
    name: 'Formations',
    component: Formations
  },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: Hobbies
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
