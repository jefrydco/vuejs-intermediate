import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {}
  },
  modules: {
    pengguna: {
      namespaced: true,
      state() {
        return {
          nama: 'Evan You',
          umur: 30
        }
      }
    }
  }
})

window.vm = new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
