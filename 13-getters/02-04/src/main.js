import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {
      jumlahPenjualan: 10,
      hargaPenjualan: 7000
    }
  },
  getters: {
    totalPenjualan(state) {
      return state.jumlahPenjualan * state.hargaPenjualan
    }
  }
})

window.vm = new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
