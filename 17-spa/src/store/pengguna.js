import { URL_API } from "../constants"
import { kirimData } from '../utils'

function state() {
  return {
    idPengguna: null,
    namaPengguna: null
  }
}

const mutations = {
  aturDataPengguna(state, { idPengguna, namaPengguna }) {
    state.idPengguna = idPengguna
    state.namaPengguna = namaPengguna
  },
  resetDataPengguna(state) {
    state.idPengguna = null
    state.namaPengguna = null
  }
}

const actions = {
  async masuk({ commit, dispatch }, { namaPengguna }) {
    try {
      dispatch('proses/tampilkanProses', null, { root: true })
      const url = `${URL_API}/user/login`

      const respon = await kirimData(url, {
        name: namaPengguna
      })

      if (respon.success && !respon.error) {
        commit('aturDataPengguna', {
          idPengguna: respon.data.id,
          namaPengguna: respon.data.name
        })
        const dataNotifikasi = {
          apakahTampil: true,
          pesan: 'Berhasil masuk'
        }
        await dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasi, { root: true })
      } else {
        throw new Error(respon.message)
      }
    } catch (error) {
      const dataNotifikasiGalat = {
        apakahTampil: true,
        pesan: error.message
      }
      dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat, { root: true })
      console.log(error)
    } finally {
      dispatch('proses/hilangkanProses', null, { root: true })
    }
  },
  async daftar({ commit, dispatch }, { namaPengguna }) {
    try {
      dispatch('proses/tampilkanProses', null, { root: true })
      const url = `${URL_API}/user/register`

      const respon = await kirimData(url, {
        name: namaPengguna
      })

      if (respon.success && !respon.error) {
        commit('aturDataPengguna', {
          idPengguna: respon.data.id,
          namaPengguna: respon.data.name
        })
        const dataNotifikasi = {
          apakahTampil: true,
          pesan: 'Berhasil daftar'
        }
        await dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasi, { root: true })
      } else {
        throw new Error(respon.message)
      }
    } catch (error) {
      const dataNotifikasiGalat = {
        apakahTampil: true,
        pesan: error.message
      }
      dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat, { root: true })
      console.log(error)
    } finally {
      dispatch('proses/hilangkanProses', null, { root: true })
    }
  },
  keluar({ commit, dispatch }) {
    commit('resetDataPengguna')
    commit('kode/resetDaftarKode', null, { root: true })
    const dataNotifikasi = {
      apakahTampil: true,
      pesan: 'Berhasil keluar'
    }
    dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasi, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
