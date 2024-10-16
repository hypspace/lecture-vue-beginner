<template>
  <div>
    <!-- 템플릿 태그는 화면에 반영x 그러나 최상위 template 태그의 하위 태그는 반드시 태그가 하나 존재해야 함 -->
    <template>
      <p>{{ message }}</p>
      <!-- computed 속성은 성능 측면에서 유리함. 이는 캐싱의 됨. 만약 message가 바뀌는 경우에는 template 태그 내부의 DOM(전체 부분)이 다시 그려지는데, 이 때 computed 속성에 정의된 값은 리턴 값이 캐싱되어 성능에 최적화에 유리함. 만약 computed를 안쓴다면 {{ this.firstNumber * this.secondNumber }} 이렇게 쓴다는 것인데 이러면 이 코드도 같이 재실행되어(캐싱x) 성능상 이점을 가져가지 못함 -->
      <span>{{ multiplyNumber }}</span>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, ut.',
      firstNumber: 10,
      secondNumber: 20,
    }
  },
  computed: {
    multiplyNumber() {
      return this.firstNumber * this.secondNumber
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
