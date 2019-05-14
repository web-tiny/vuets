/*
 * @Author: Tiny
 * @Date: 2019-05-14 17:43:28
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-14 17:54:34
 */
import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router.ts'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true
})

const handleErr = function (err: any) {
  if (err) {
    switch (err.status) {
      case 401:
        router.push('/login')
        break
    }
    Message({
      message: err.data.message,
      type: 'error',
      duration: 5 * 1000
    })
  } else {
    Message({
      message: '连接服务器失败',
      type: 'error',
      duration: 5 * 1000
    })
  }
}

// 响应拦截
service.interceptors.response.use((res: any) => {
  if (res.status === 200) {
    // exportExcel(res, res.headers['filename'])
    return res
  }
}, (err) => {
  handleErr(err.response)
  return Promise.reject(err)
})

export default service
