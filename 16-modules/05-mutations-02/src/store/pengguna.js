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

export default {
  namespaced: true,
  state,
  mutations
}