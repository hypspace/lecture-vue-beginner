import Vue from 'vue'
import VueRouter from 'vue-router'
import AskPage from '@/pages/AskPage.vue'
import JobsPage from '@/pages/JobsPage.vue'
import NewsPage from '@/pages/NewsPage.vue'
import ItemPage from '@/pages/ItemPage.vue'
import UserPage from '@/pages/UserPage.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/ask',
      component: AskPage,
    },
    {
      path: '/jobs',
      component: JobsPage,
    },
    {
      path: '/news',
      component: NewsPage,
    },
    {
      path: '/item',
      component: ItemPage,
    },
    {
      path: '/user',
      component: UserPage,
    },
  ],
})
