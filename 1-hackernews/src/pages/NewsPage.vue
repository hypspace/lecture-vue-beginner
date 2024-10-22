<template>
  <div>
    news page

    <div v-for="(user, idx) in users" v-bind:key="idx">{{ user }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api'

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetchNewsList()
      .then(response => {
        console.log('[NewsPage] fetchNewsList()', response)
        this.users = response.data
      })
      .catch(error => new Error(error))
  },
}
</script>

<style scoped></style>
