<template>
  <div>
    <button v-on:click="handleClick">click</button>
    <span>{{ show }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    handleClick() {
      console.log('[Root] handleClick()', this.show)
      this.show = !this.show
    },
  },
  // beforeCreate: 생성 단계. 컴포넌트가 만들어지기 전, 아무것도 준비되지 않은 상태(인스턴스가 초기화되기 전, 데이터와 이벤트가 설정되지 않음)
  beforeCreate() {
    console.log('[Root] beforeCreate()')
  },
  // created: 생성 단계. 컴포넌트가 만들어지고, 데이터와 설정이 준비된 상태. 하지만 아직 화면에 보이지 않음(인스턴스가 생성된 후, 데이터가 설정되었고, 이벤트가 바인딩됨. DOM은 생성되지 않음)
  created() {
    console.log('[Root] created()')
  },
  // beforeMount: 마운트 단계. 화면에 나타나기 직전(DOM에 마운트되기 전에 호출됨)
  beforeMount() {
    console.log('[Root] beforeMount()')
  },
  // mounted: 마운트 단계. 컴포넌트가 화면에 나타난 후. 이제 화면에 보이기 시작하고, DOM에 접근할 수 있음(컴포넌트가 DOM에 부착된 후 호출됨. 이 시점에 DOM에 접근할 수 있음)
  mounted() {
    console.log('[Root] mounted()')
  },
  // beforeUpdate: 업데이트 단계. 데이터가 바뀌어서 다시 그리기 전에 호출됨(데이터가 변경되어 DOM이 다시 렌더링되기 전에 호출됨)
  beforeUpdate() {
    console.log('[Root] beforeUpdate()')
  },
  // updated: 업데이트 단계. 데이터가 바뀌고, 화면이 다시 그려진 후(DOM이 업데이트된 후 호출됨)
  updated() {
    console.log('[Root] updated()')
  },
  // 파괴 단계:
  //  - 조건부 렌더링 v-if: 특정 조건에 따라 컴포넌트가 화면에 보였다가 사라질 수 있음. 이럴 때 beforeUnmount와 unmounted가 호출됨
  //  - 라우팅: 페이지 간 전환 시 컴포넌트가 마운트되고 언마운트되는 경우가 많음. 이때도 라이프사이클 훅이 작동함
  //  - 동적 컴포넌트: <component :is="컴포넌트명">와 같이 동적으로 컴포넌트를 변경할 때, 이전 컴포넌트가 사라지고 새로운 컴포넌트가 나타나면서 호출됨
  //  - 부모 컴포넌트의 상태 변화: 부모 컴포넌트가 상태를 변경하여 자식 컴포넌트를 제거하는 경우에도 해당 훅이 호출됨

  // beforeUnmount: 파괴 단계. 컴포넌트가 사라지기 전에 호출됨. 정리할 일이 있을 때 사용(인스턴스가 파괴되기 전에 호출됨. 정리 작업을 수행할 수 있음)
  beforeUnmount() {
    console.log('[Root] beforeUnmount()')
  },
  // unmounted: 컴포넌트가 화면에서 완전히 사라진 후(인스턴스가 파괴된 후 호출됨. 더 이상 DOM에 연결되지 않음)
  unmounted() {
    console.log('[Root] unmounted()')
  },
}
</script>

<style scoped></style>
