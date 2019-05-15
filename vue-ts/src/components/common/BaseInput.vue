<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class BaseInput extends Vue {
  msg: string = 'baseInput'
  count: number = 0

  @Prop({
    type: String,
    default: 'user name',
    validator: val => {
      return val.length > 3
    }
  })
  name: string

  @Emit()
  addToCount (n: number) {
    this.count += n
  }

  created () {
    this.addToCount(8)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
