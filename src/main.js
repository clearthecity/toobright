import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

const SunCalc = require('suncalc')
Object.defineProperty(Vue.prototype, '$suncalc', { value: SunCalc })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
