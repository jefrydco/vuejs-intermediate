function state() {
  return {
    apakahProsesTampil: false
  }
}

const mutations = {
  aturProsesTampil(state, { apakahProsesTampil }) {
    state.apakahProsesTampil = apakahProsesTampil
  }
}

const actions = {
  tampilkanProses({ commit }) {
    commit('aturProsesTampil', {
      apakahProsesTampil: true
    })
  },
  hilangkanProses({ commit }) {
    commit('aturProsesTampil', {
      apakahProsesTampil: false
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
