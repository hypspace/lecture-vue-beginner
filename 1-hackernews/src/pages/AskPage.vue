<template>
  <div>
    <p v-for="(item, idx) in ask" :key="idx">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['ask']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>

<style scoped></style>
