<template>
  <div>
    <p v-for="(item, idx) in news" :key="idx">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['news']),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  },
}
</script>

<style scoped></style>
