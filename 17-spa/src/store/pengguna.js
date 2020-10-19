import { URL_API } from "../constants"
import { kirimData } from '../utils'
import { router } from '../main'

function state() {
  return {
    idPengguna: null,
    namaPengguna: null
  }
}

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0;i < ca.length;i++) {
//       var c = ca[i];
//       while (c.charAt(0)==' ') c = c.substring(1,c.length);
//       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//   }
//   return null;
// }

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
        setCookie('id', respon.data.id, 3)
        router.push({path: 'convert'})
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
