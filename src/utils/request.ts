import axios from 'axios'
import { notification } from 'ant-design-vue'

console.log(import.meta.env)
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 30000
})

// 请求拦截
service.interceptors.request.use(config => {
  // token 封装，或者接口请求加密
  return config
})

// 响应拦截
service.interceptors.response.use(response => {
  const res = response.data
  if (!res?.result) {
    // 错误返回
    return Promise.reject(new Error(res.message))
  } else {
    return res
  }
}, error => {
  notification.open({
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error)
})

export default service