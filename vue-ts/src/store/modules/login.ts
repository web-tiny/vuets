/*
 * @Author: Tiny
 * @Date: 2019-05-14 18:48:41
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-14 18:49:47
 */
const login = {
  state: {
    phone: '',
    code: ''
  },

  getters: {
    getterPhone: (state: any) => state.phone
  },

  mutations: {
    SET_DATALOGIN: (state: any, data: any) => {
      state.phone = data
    }
  },

  actions: {
    succeseLogin (context: any, payLod: any) {
      context.commit('SET_DATALOGIN', payLod)
    }
  }
}
export default login
