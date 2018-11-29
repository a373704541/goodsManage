import axios from 'axios'

// 设置基本路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 在发送请求之前实现响应的页面
// 添加请求拦截器 -- 为axios设置拦截器
// 获取token的值,如果有token值就通过请求头方式的设置
// 如果没有就按照常规的设置拦截
axios.interceptors.request.use(function (config) {
  // console.log('config============>', config.headers)
  // 在发送请求之前做些什么
  // 存储token值
  var token = localStorage.getItem('itcastToken')
  if (token) {
    // 给请求头设置 Authorization=token
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 发送登陆请求
export const login = (pa) => {
  // 第一个参数 是 跳转的地址 第二个是参数值
  return axios.post('login', pa)
    .then((result) => {
      return result.data
    })
}

// 发送首页列表请求
export const getuserlist = (pa) => {
  return axios.get('users', {params: pa})
    .then((result) => {
      return result.data
    })
}
