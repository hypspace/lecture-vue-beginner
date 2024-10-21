import Vue from 'vue'
import VueRouter from 'vue-router'
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'
import ViewMatcher from './ViewMatcher.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/header-view', component: HeaderView },
    { path: '/footer-view', component: FooterView },
    { path: '/footer-view', component: FooterView },
    {
      path: '/view-matcher/:name',
      name: 'view-matcher',
      component: ViewMatcher,
    },
  ],
})
