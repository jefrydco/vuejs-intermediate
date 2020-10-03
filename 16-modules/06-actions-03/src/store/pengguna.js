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

const actions = {
  getNama(konteks, parameter) {
    konteks.commit('setNama', parameter)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}