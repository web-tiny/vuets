/*
 * @Author: Tiny
 * @Date: 2019-05-15 17:57:16
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-15 18:01:51
 */
import axios from '@/https/https'

const apiGetCode = (phone: number) => axios({
  url: '/login/getsmscode',
  method: 'get',
  params: {
    phone: phone
  }
})

const apiLogin = (data: any) => axios({
  url: '/login/byphone',
  method: 'post',
  data: {
    phone: data.phone,
    code: data.verificatCode
  }
})

export {
  apiGetCode,
  apiLogin
}
