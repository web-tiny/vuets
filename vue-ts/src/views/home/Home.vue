<template>
  <div class="home">
    {{ phone }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

@Component
export default class Home extends Vue {
  private name: string
  @Getter('getterPhone') phone

  constructor () {
    super()
    this.name = 'xiaoli'
  }

  public getName () {
    return this.name
  }
}
</script>
