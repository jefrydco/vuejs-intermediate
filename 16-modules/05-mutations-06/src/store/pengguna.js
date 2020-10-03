function state() {
  return {
    nama: null,
    umur: 30
  }
}

const mutations = {
  setNama(state, parameter) {
    state.nama = parameter
  }
}

export default {
  namespaced: true,
  state,
  mutations
}