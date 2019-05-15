<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <BaseInput></BaseInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/login/Login.vue' // @ is an alias to /src
import BaseInput from '@/components/common/BaseInput.vue'
import { Route } from 'vue-router'

@Component({
  components: {
    HelloWorld,
    BaseInput
  }
})
export default class Home extends Vue {
  private name: string

  @Watch('$route')
  routeChange (v: Route, ov: Route) {
    console.log(v, ov)
  }

  constructor () {
    super()
    this.name = 'xiaoli'
  }

  public getName () {
    return this.name
  }
}
</script>
