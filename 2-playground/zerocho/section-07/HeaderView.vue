<template>
  <header>
    {{ arr }}
    <button v-on:click="handleClickBtn">click me</button>
    <Button></Button>
  </header>
</template>

<script>
import Vue from 'vue'
import Button from './Button.vue'
import EventBus from './EventBus'

export default {
  components: {
    Button,
  },
  data() {
    return {
      headerViewData: 'headerViewData...',
      arr: [
        [0, 1],
        [0, 2],
      ],
    }
  },
  methods: {
    handleClickBtn() {
      /* Vue에서 2차원 배열인 경우에 index로 접근하여 값을 바꾸는 것은 허용되지 않음

          this.$data.arr[0][0] = 10
          this.$data.arr[0][1] = 20

          this.$data.arr2[0] = 200

         그래서 Vue.set()을 활용하여 해결함. 마찬가지로 객체의 key값을 바꾸는 경우 this.$set으로 접근하여 변경하여야 함
      */
      Vue.set(this.arr[0], 0, 10)
      Vue.set(this.arr[0], 1, 20)
    },
    print() {
      console.log('[HeaderView][$on] print()')
    },
  },
  created() {
    // Vue에서는 Vuex 없이도 혹은 this.$root, this.$parent로 접근하는 방식없이도 Event Bus를 활용하여 이벤트를 방출 또는 수신할 수 있음. 그러나 모듈화 관점에서는 Vuex가 더 효율적이기 때문에 Vuex를 사용함. 중앙 통제하는 코드가 해당 .vue 컴포넌트 파일 자체에 많이 들어가기 때문
    EventBus.$on('onClickBtn', this.print)
  },
}
</script>

<style scoped></style>
