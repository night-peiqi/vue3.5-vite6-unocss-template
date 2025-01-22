import axios from 'axios'

// 这里是用于设定请求头的 Token KEY
export const REQUEST_TOKEN_KEY = 'Authorization'

// 这里是用于设定本地存储的 Token KEY
export const STORAGE_TOKEN_KEY = 'ACCESS_TOKEN'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
})

// 异常拦截处理器
function errorHandler(error) {
  if (error.response) {
    //
  }
  return Promise.reject(error.response)
}

// 请求拦截器
function requestHandler(config) {
  const savedToken = localStorage.getItem(STORAGE_TOKEN_KEY)

  if (savedToken) {
    config.headers[REQUEST_TOKEN_KEY] = savedToken
  }

  return config
}

// Add a request interceptor
request.interceptors.request.use(requestHandler, errorHandler)

// 响应拦截器
function responseHandler(response) {
  return response.data
}

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler)

export default request
