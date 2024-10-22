<template>
  <div>
    ask page

    <div v-for="(user, idx) in users" v-bind:key="idx">{{ user }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api'

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetchAskList()
      .then(response => {
        console.log('[AskPage] fetchAskList()', response)
        this.users = response.data
      })
      .catch(error => new Error(error))
  },
}
</script>

<style scoped></style>
