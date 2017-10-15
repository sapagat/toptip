import Vue from 'vue'
import MainPage from './pages/MainPage'
import TipsService from './services/TipsService'
import Bus from './infrastructure/Bus'

Vue.config.productionTip = false

/* eslint-disable no-new */
new TipsService(Bus)

new Vue({
  el: '#app',
  template: '<MainPage/>',
  components: { MainPage }
})
