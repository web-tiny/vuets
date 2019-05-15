/*
 * @Author: Tiny
 * @Date: 2019-05-15 10:55:18
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-15 10:58:00
 */
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $myGlobal: string
  }
}
