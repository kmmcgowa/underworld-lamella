import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics'
import { VueHammer } from 'vue2-hammer'
import App from './App.vue'
import router from './router'
import store from './store'
import 'web-animations-js'

Vue.use(VueAxios, axios)
Vue.use(VueAnalytics, {
  // TODO: get ID from env
  id: process.env.VUE_APP_GA,
  router
})
Vue.use(VueHammer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    this.$store.dispatch('loadObjects')
  },
  render: h => h(App)
}).$mount('#app')
