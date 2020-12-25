import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/main/App.vue'
import router from '@/main/router/index'
import store from '@/main/store/index'

Vue.config.productionTip = false

Vue.use(Vuex)
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
