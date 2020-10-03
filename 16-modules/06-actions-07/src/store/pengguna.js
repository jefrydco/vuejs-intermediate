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
  getNama(konteks) {
    konteks.commit('setNama')
    konteks.dispatch('keranjang/getTotalBelanja', 10, {
      root: true
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}