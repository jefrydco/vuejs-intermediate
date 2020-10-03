import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {
      namaPengguna: null
    }
  },
  mutations: {
    setNamaPengguna(state, parameter) {
      state.namaPengguna = parameter
    }
  }
})

window.vm = new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
