<template>
  <div>
    <div>
      <!-- 히스토리 라우팅 -->
      <router-link to="/header-view">go to header-view</router-link>
      <router-link to="/footer-view">go to footer-view</router-link>
      <!-- 동적(다이나믹) 라우팅 매칭 -->
      <router-link
        :to="{ name: 'view-matcher', params: { name: 'footer-view' } }"
      >
        go to view-matcher to params
      </router-link>
      <!-- 주소 쿼리 스트링 -->
      <router-link
        to="/view-matcher/footer-view?data=1&courseSlug=web-vue&unitID=23213&tab=curriculum&subtitleLanguage=ko"
        >go to view-matcher to query string</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'

export default {
  router,
}
</script>

<style scoped></style>
