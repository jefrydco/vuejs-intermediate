import { stringifyUrl } from 'query-string'
import { kirimData } from '../utils'
import { URL_API, OPSI_STRINGIFY } from '../constants'

function state() {
  return {
    daftarKode: []
  }
}

const mutations = {
  aturDaftarKode(state, { daftarKode }) {
    state.daftarKode = daftarKode
  },
  resetDaftarKode(state) {
    state.daftarKode = []
  }
}

const actions = {
  async dapatkanSemuaKode({ commit, dispatch }, { idPengguna, filter }) {
    try {
      dispatch('proses/tampilkanProses', null, { root: true })
      const objekUrl = {
        url: `${URL_API}/code/list`,
        query: {
          page: filter.halaman,
          limit: filter.banyakData,
          sortBy: filter.urutkanBerdasarkan,
          sort: filter.urutkan,
          highlighted: filter.apakahHighlightMenyala
        }
      }
      const url = stringifyUrl(objekUrl, OPSI_STRINGIFY)

      const respon = await kirimData(url, {
        user: idPengguna
      })

      if (respon.success && !respon.error) {
        commit('aturDaftarKode', {
          daftarKode: respon.data
        })
      } else {
        throw new Error(respon.message)
      }
    } catch (error) {
      commit('resetDaftarKode')
      const dataNotifikasiGalat = {
        apakahTampil: true,
        pesan: error.message || 'Silahkan masuk terlebih dahulu'
      }
      dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat, { root: true })
      console.log(error)
    } finally {
      dispatch('proses/hilangkanProses', null, { root: true })
    }
  },
  async simpanKode({ dispatch }, { idPengguna, konten }) {
    try {
      dispatch('proses/tampilkanProses', null, { root: true })
      const url = `${URL_API}/code/store`
      const data = {
        user: idPengguna,
        content: {
          code: konten.kode,
          lang: konten.bahasaPemrograman,
          highlight: konten.highlight,
          fileName: konten.namaBerkas,
          twoslash: konten.twoslash
        }
      }

      const respon = await kirimData(url, data)

      if (respon.success && !respon.error) {
        const dataNotifikasi = {
          apakahTampil: true,
          pesan: 'Kode berhasil disimpan'
        }

        await dispatch(`notifikasi/tampilkanNotifikasi`, dataNotifikasi, { root: true })
      } else {
        throw new Error(respon.message)
      }
    } catch (error) {
      const dataNotifikasiGalat = {
        apakahTampil: true,
        pesan: error.message || 'Silahkan masuk terlebih dahulu'
      }
      dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat, { root: true })
      console.log(error)
    } finally {
      dispatch('proses/hilangkanProses', null, { root: true })
    }
  },
  async ubahKode({ dispatch }, { idPengguna, idKode, konten }) {
    try {
      dispatch('proses/tampilkanProses', null, { root: true })
      const url = `${URL_API}/code/edit`
      const data = {
        id: idKode,
        user: idPengguna,
        content: {
          code: konten.kode,
          lang: konten.bahasaPemrograman,
          highlight: konten.highlight,
          fileName: konten.namaBerkas,
          twoslash: konten.twoslash
        }
      }

      const respon = await kirimData(url, data)

      if (respon.success && !respon.error) {
        const dataNotifikasi = {
          apakahTampil: true,
          pesan: 'Kode berhasil diubah'
        }

        await dispatch(`notifikasi/tampilkanNotifikasi`, dataNotifikasi, { root: true })
      } else {
        throw new Error(respon.message)
      }
    } catch (error) {
      const dataNotifikasiGalat = {
        apakahTampil: true,
        pesan: error.message || 'Silahkan masuk terlebih dahulu'
      }
      dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat, { root: true })
      console.log(error)
    } finally {
      dispatch('proses/hilangkanProses', null, { root: true })
    }
  },
  async hapusKode({ dispatch }, { idPengguna, idKode }) {
    try {
      dispatch('proses/tampilkanProses', null, { root: true })
      const url = `${URL_API}/code/delete`
      const data = {
        id: idKode,
        user: idPengguna
      }

      const respon = await kirimData(url, data)

      if (respon.success && !respon.error) {
        const dataNotifikasi = {
          apakahTampil: true,
          pesan: 'Kode berhasil dihapus'
        }

        await dispatch(`notifikasi/tampilkanNotifikasi`, dataNotifikasi, { root: true })
      } else {
        throw new Error(respon.message)
      }
    } catch (error) {
      const dataNotifikasiGalat = {
        apakahTampil: true,
        pesan: error.message || 'Silahkan masuk terlebih dahulu'
      }
      dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat, { root: true })
      console.log(error)
    } finally {
      dispatch('proses/hilangkanProses', null, { root: true })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
