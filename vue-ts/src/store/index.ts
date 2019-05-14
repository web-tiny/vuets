/*
 * @Author: Tiny
 * @Date: 2019-05-14 18:44:51
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-14 18:47:51
 */

import Vue from 'vue'
import Vuex from 'vuex'
import _module from './config'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: _module
})

export default store
