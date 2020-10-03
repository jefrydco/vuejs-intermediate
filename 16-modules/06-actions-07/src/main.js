import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import pengguna from './store/pengguna'
import keranjang from './store/keranjang'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {}
  },
  modules: {
    pengguna: pengguna,
    keranjang: keranjang
  }
})

window.vm = new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
