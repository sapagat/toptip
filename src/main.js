import Vue from 'vue'
import App from './App'
import TipsService from './services/TipsService'
import Bus from './infrastructure/Bus'

Vue.config.productionTip = false

/* eslint-disable no-new */
new TipsService(Bus)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
