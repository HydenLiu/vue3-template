import axios from 'axios'
import { notification } from 'ant-design-vue'
import router from "@/router";

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 30000
})

// 请求拦截
service.interceptors.request.use(config => {
  // token 封装，或者接口请求加密
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
  const res = response.data
  if (!res?.result) {
    // 统一错误返回处理
    if (res?.code === 403 || res?.code === 60002) {
      router.replace('/login')
      return
    }

    if (res?.code === 500) {
      return Promise.reject(new Error('系统繁忙'))
    }
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