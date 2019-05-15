import VueRouter, { Route } from 'vue-router'
import Vue from 'vue'

declare module '*.vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route,
    $Message: any,
    $refs: any
  }
  export default Vue
}
