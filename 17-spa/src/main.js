import Vue from 'vue'
import Vuex from 'vuex'

import './assets/normalize.css'
import './assets/highlighter.css'
import './assets/tooltip.css'
import './assets/aplikasi.css'

import App from './App.vue'
import DataCode from './components/preset/DataCode'
import DataLsp from './components/preset/DataLsp'
import DataErr from './components/preset/DataErr'

import AppRadio from './components/AppRadio'
import AppTombol from './components/AppTombol'
import AppFormulirAreaTeks from './components/AppFormulirAreaTeks'
import AppFormulirInput from './components/AppFormulirInput'
import AppFormulirPilihan from './components/AppFormulirPilihan'

import pengguna from './store/pengguna'
import kode from './store/kode'
import notifikasi from './store/notifikasi'
import proses from './store/proses'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.component(DataCode.name, DataCode)
Vue.component(DataLsp.name, DataLsp)
Vue.component(DataErr.name, DataErr)

Vue.component(AppRadio.name, AppRadio)
Vue.component(AppTombol.name, AppTombol)
Vue.component(AppFormulirAreaTeks.name, AppFormulirAreaTeks)
Vue.component(AppFormulirInput.name, AppFormulirInput)
Vue.component(AppFormulirPilihan.name, AppFormulirPilihan)

const store = new Vuex.Store({
  state() {
    return {}
  },
  modules: {
    pengguna,
    kode,
    notifikasi,
    proses
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
