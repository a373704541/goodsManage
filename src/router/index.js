import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'login'}
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
