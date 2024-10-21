<template>
  <div>
    <div v-if="this.$route.params.name === 'header-view'"></div>
    <div v-else-if="this.$route.params.name === 'form-view'"></div>
  </div>
</template>

<script>
import HeaderView from './HeaderView'
import FooterView from './FooterView'

export default {
  components: {
    HeaderView,
    FooterView,
  },
  mounted() {
    console.log(this.$router)
    console.log(this.$route)
  },
}
</script>
