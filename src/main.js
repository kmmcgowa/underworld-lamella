import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'web-animations-js'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    this.$store.dispatch('loadObjects')
  },
  render: h => h(App)
}).$mount('#app')
