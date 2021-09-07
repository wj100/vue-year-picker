import Vue from 'vue'
import App from './App'
import yearPicker from './lib/index'

Vue.config.productionTip = false
Vue.use(yearPicker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
