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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}