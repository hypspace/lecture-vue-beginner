<template>
  <div>
    <HeaderView></HeaderView>
    <FooterView>
      <template v-slot:title>
        <span>Lorem, ipsum dolor.</span>
      </template>
      <template v-slot:description>
        <p>Lorem, ipsum dolor.</p>
      </template>
    </FooterView>
  </div>
</template>

<script>
import FooterView from './FooterView.vue'
import HeaderView from './HeaderView.vue'

export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style scoped></style>
