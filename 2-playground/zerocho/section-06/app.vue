<template>
  <div>
    <button v-on:click="handleClick">click</button>
    <span>{{ show }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    },
  },
  watch: {
    show(newValue, oldValue) {
      console.log('[Root] show()', newValue, oldValue)
    },
  },
}
</script>

<style scoped></style>
