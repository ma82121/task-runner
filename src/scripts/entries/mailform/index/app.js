import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/mailform/App.vue'
import router from '@/mailform/router'
import store from '@/mailform/store'

Vue.config.productionTip = false

Vue.use(Vuex)
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
