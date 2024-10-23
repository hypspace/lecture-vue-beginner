<template>
  <div>
    <p>id: {{ users.id }}</p>
    <p>karma: {{ users.karma }}</p>
    <p>created: {{ users.created }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['users']),
  },
  created() {
    this.$store.dispatch('FETCH_USERS', this.$route.params.id)
  },
}
</script>

<style scoped></style>
