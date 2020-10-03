function state() {
  return {
    nama: null,
    umur: 30
  }
}

const mutations = {
  setNama(state) {
    state.nama = 'Evan You'
  }
}

const actions = {
  getUmur(konteks) {
    console.log(konteks.state.umur)
  },
  getNama(konteks) {
    konteks.commit('setNama')
    konteks.dispatch('getUmur')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}