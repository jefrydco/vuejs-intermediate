import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import pengguna from './store/pengguna'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {}
  },
  modules: {
    pengguna: pengguna
  }
})

window.vm = new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
