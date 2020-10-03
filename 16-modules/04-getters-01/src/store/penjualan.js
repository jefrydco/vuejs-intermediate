function state() {
  return {
    jumlah: 70,
    harga: 70000
  }
}

const getters = {
  totalPenjualan(state) {
    return state.jumlah * state.harga
  }
}

export default {
  namespaced: true,
  state,
  getters
}