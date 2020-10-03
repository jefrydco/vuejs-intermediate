import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import penjualan from './store/penjualan'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {}
  },
  modules: {
    penjualan: penjualan
  }
})

window.vm = new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
