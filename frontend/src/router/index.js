import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../views/Home.vue'
import LoginScreen from '../components/LoginScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginScreen',
    component: LoginScreen
  },
  {
    path: '/home',
    name: 'HomeContainer',
    component: HomeContainer
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
