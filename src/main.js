import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './pages/MainPage'
import TipsService from './services/TipsService'
import Bus from './infrastructure/Bus'

Vue.config.productionTip = false

/* eslint-disable no-new */
new TipsService(Bus)

const router = new VueRouter({
  routes: [
    { path: '/', component: MainPage }
  ]
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
