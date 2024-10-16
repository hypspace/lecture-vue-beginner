<template>
  <button v-on:click="handleClickBtn">click me!</button>
</template>

<script>
import EventBus from './EventBus'

export default {
  created() {
    console.log('[Button] created()', this.$root.$data.show)
    console.log('[Button] created()', this.$parent.$data.headerViewData)
  },
  methods: {
    handleClickBtn() {
      console.log('[Button][$emit] handleClickBtn()')
      EventBus.$emit('onClickBtn')
    },
  },
}
</script>

<style scoped></style>
