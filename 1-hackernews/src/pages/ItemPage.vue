<template>
  <div>
    <p>id: {{ items.id }}</p>
    <p>title: {{ items.title }}</p>
    <p v-html="formattedItemsContent"></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['items']),
    formattedItemsContent() {
      return this.$store.state.items.content.replace(/<p>/, '<p>content: ')
    },
  },
  created() {
    this.$store.dispatch('FETCH_ITEMS', this.$route.params.id)
  },
}
</script>

<style scoped></style>
