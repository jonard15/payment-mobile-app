import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import HomeView from '../views/HomeView.vue'
import QrView from '../views/QrView.vue'
import ProfileView from '../views/ProfileView.vue'
import TransactionView from '../views/TransactionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/qr',
    name: 'qr',
    component: QrView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: TransactionView
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
