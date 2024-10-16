<template>
  <div>
    <ul>
      <li v-for="item in items">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ formatPrice(item.price) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: '겨울 극세사 이불 이부자리 침구 겨울이불 먼지없는 이불',
          price: '31410',
        },
        {
          id: 2,
          name: '블랑뷰 베이직 차렵 이불세트',
          price: '27900',
        },
        {
          id: 3,
          name: '무로 쿨쿨넨네이불 피치스킨 양면 차렵이불',
          price: '30900',
        },
      ],
    }
  },
  methods: {
    formatPrice(price) {
      console.log('[Root] formatPrice()', price)

      const result = Number(parseInt(price)).toLocaleString('ko-KR', {
        style: 'currency',
        currency: 'KRW',
      })
      return result
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
