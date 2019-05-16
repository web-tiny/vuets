<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  private name: string

  constructor () {
    super()
    this.name = 'xiaoli'
  }

  public getName () {
    return this.name
  }
}
</script>
