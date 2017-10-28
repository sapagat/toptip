import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPageEnsemble from './ensembles/MainPage.vue'
import RegistryPageEnsemble from './ensembles/RegistryPage.vue'
import ReviewPageEnsemble from './ensembles/ReviewPage.vue'
import TipsService from './services/TipsService'
import Bus from './infrastructure/Bus'

Vue.config.productionTip = false

/* eslint-disable no-new */
new TipsService(Bus)

const router = new VueRouter({
  routes: [
    { path: '/', component: MainPageEnsemble },
    { path: '/registry', component: RegistryPageEnsemble },
    { path: '/review/:id', component: ReviewPageEnsemble }
  ]
})

Vue.use(VueRouter)

class VueBus {
  static install (Vue) {
    Vue.prototype.$bus = Bus
  }
}

Vue.use(VueBus)

new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
