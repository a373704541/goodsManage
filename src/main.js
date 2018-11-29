// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 页面入口js文件
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入scss包
import './styles/index.css'
// 默认找到 index.js 根据查找规则
import router from './router'

// 路由守卫者

router.beforeEach((to, from, next) => {
  // console.log(to)
  // 获取token的值
  const token = localStorage.getItem('itcastToken')
  if (token || to.path === '/login') {
    next()
  } else {
    next({path: '/login'})
  }
})

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 用于渲染页面级组件 跟之前渲染一样的意思
  components: {
    App
  },
  template: '<App/>'
})
