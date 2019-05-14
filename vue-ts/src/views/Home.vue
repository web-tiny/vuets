<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { Route } from 'vue-router'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private name: string
  @Watch('$route')
  routeChange (val: Route, ov: Route) {

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
