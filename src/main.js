import Vue from 'vue'

import '@babel/polyfill'
import './plugins/vuetify'
import './plugins/api'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
