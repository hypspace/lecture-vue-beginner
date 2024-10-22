<template>
  <div>
    jobs page

    <div v-for="(user, idx) in users" v-bind:key="idx">{{ user }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api'

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetchJobsList()
      .then(response => {
        console.log('[JobsPage] fetchJobsList()', response)
        this.users = response.data
      })
      .catch(error => new Error(error))
  },
}
</script>

<style scoped></style>
