import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPageFusion from './fusion/MainPage.vue'
import RegistryPageFusion from './fusion/RegistryPage.vue'
import ReviewPageFusion from './fusion/ReviewPage.vue'
import TipsService from './services/Tips'
import RouterService from './services/Router'
import Bus from './infrastructure/Bus'

Vue.config.productionTip = false

/* eslint-disable no-new */
new TipsService(Bus)
new RouterService(Bus)

const router = new VueRouter({
  routes: [
    { path: '/', component: MainPageFusion },
    { path: '/registry', component: RegistryPageFusion },
    { path: '/review/:id', component: ReviewPageFusion }
  ]
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
