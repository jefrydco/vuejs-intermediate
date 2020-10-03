function state() {
  return {
    totalBelanja: 0
  }
}

const mutations = {
  setTotalBelanja(state, parameter) {
    state.totalBelanja = parameter
  }
}

const actions = {
  getTotalBelanja(konteks, parameter) {
    konteks.commit('setTotalBelanja', parameter)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
