<template>
  <main>
    <app-bagian-pengguna
      @keluar="ketikaTombolResetDiKlik"
    />
    <hr>
    <app-bagian-editor-opsi
      :input-kode="dataKode.inputKode"
      :bahasa-pemrograman-terpilih.sync="dataKode.bahasaPemrogramanTerpilih"
      :twoslash-terpilih.sync="dataKode.twoslashTerpilih"
      :nama-berkas.sync="dataKode.namaBerkas"
      :highlight.sync="dataKode.highlight"
      :hasil-highlight="hasilHighlight"
      @tersimpan="dapatkanDaftarKode"
      @reset="ketikaTombolResetDiKlik"
    />
    <hr>
    <app-bagian-editor-kode
      :input-kode.sync="dataKode.inputKode"
      :hasil-highlight="hasilHighlight"
      :bahasa-pemrograman-terpilih="dataKode.bahasaPemrogramanTerpilih"
    />
    <hr>
    <div v-if="$store.state.pengguna.idPengguna">
      <app-bagian-opsi-daftar-kode
        :halaman.sync="filter.halaman"
        :banyak-data.sync="filter.banyakData"
        :urutkan-berdasarkan.sync="filter.urutkanBerdasarkan"
        :urutkan.sync="filter.urutkan"
        :apakah-highlight-menyala.sync="filter.apakahHighlightMenyala"
      />
      <hr>
      <app-bagian-daftar-kode
        :apakah-highlight-menyala="filter.apakahHighlightMenyala"
        :dapatkan-daftar-kode="dapatkanDaftarKode"
      />
    </div>
    <app-notifikasi />
    <app-proses />
  </main>
</template>

<script>
import { stringifyUrl } from 'query-string'
import debounce from 'debounce-fn'
import cleanDeep from 'clean-deep'

import AppBagianPengguna from './components/bagian/AppBagianPengguna'
import AppBagianEditorOpsi from './components/bagian/AppBagianEditorOpsi'
import AppBagianEditorKode from './components/bagian/AppBagianEditorKode'
import AppBagianOpsiDaftarKode from './components/bagian/AppBagianOpsiDaftarKode'
import AppBagianDaftarKode from './components/bagian/AppBagianDaftarKode'

import AppNotifikasi from './components/AppNotifikasi'
import AppProses from './components/AppProses'

import { dapatkanOpsi, kirimData, unduhKode } from './utils'
import { URL_API, OPSI_STRINGIFY } from './constants'

export default {
  name: 'App',
  components: {
    AppBagianPengguna,
    AppBagianEditorOpsi,
    AppBagianEditorKode,
    AppBagianOpsiDaftarKode,
    AppBagianDaftarKode,

    AppNotifikasi,
    AppProses
  },
  data() {
    return {
      dataKode: {
        inputKode: null,
        bahasaPemrogramanTerpilih: null,
        namaBerkas: null,
        highlight: null,
        twoslashTerpilih: null,
      },
      filter: {
        halaman: 1,
        banyakData: 6,
        urutkanBerdasarkan: 'createdAt',
        urutkan: 'DESC',
        apakahHighlightMenyala: 1
      },
      hasilHighlight: '',
      daftarBahasaPemrograman: []
    }
  },
  watch: {
    '$store.state.pengguna.idPengguna'(idPengguna) {
      if (idPengguna) {
        this.dapatkanDaftarKode()
      }
    },
    dataKode: {
      handler: debounce(function(dataKode) {
        this.hasilHighlight = ''
        this.highlighter(dataKode.inputKode)
      }, { wait: 500 }),
      deep: true
    },
    filter: {
      handler: debounce(function() {
        this.dapatkanDaftarKode()
      }, { wait: 500 }),
      deep: true
    }
  },
  async created() {
    await this.dapatkanDaftarBahasaPemrograman()
    await this.dapatkanDaftarKode()
  },
  methods: {
    ketikaTombolResetDiKlik() {
      this.dataKode = {
        inputKode: null,
        bahasaPemrogramanTerpilih: 'typescript',
        namaBerkas: null,
        highlight: null,
        twoslashTerpilih: null,
      }
    },
    async dapatkanDaftarKode() {
      await this.$store.dispatch('kode/dapatkanSemuaKode', {
        idPengguna: this.$store.state.pengguna.idPengguna,
        filter: {
          halaman: this.filter.halaman,
          banyakData: this.filter.banyakData,
          urutkanBerdasarkan: this.filter.urutkanBerdasarkan,
          urutkan: this.filter.urutkan,
          apakahHighlightMenyala: this.filter.apakahHighlightMenyala
        }
      })
    },
    async ketikaTombolUnduhDiKlik() {
      try {
        this.$store.dispatch('proses/tampilkanProses', null)
        const objekUrl = {
          url: URL_API,
          query: {
            lang: this.dataKode.bahasaPemrogramanTerpilih,
            fileName: this.dataKode.namaBerkas,
            highlight: this.dataKode.highlight,
            twoslash: this.dataKode.twoslashTerpilih,
            download: 1
          }
        }
        const url = stringifyUrl(objekUrl, OPSI_STRINGIFY)
        await unduhKode(url, {
          code: this.dataKode.inputKode
        })
      } catch (error) {
        const dataNotifikasiGalat = {
          apakahTampil: true,
          pesan: error.message || 'Gagal mengunduh'
        }
        this.$store.dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat)
        console.log(error)
      } finally {
        this.$store.dispatch('proses/hilangkanProses', null)
      }
    },
    async ketikaTombolSimpanDiKlik() {
      try {
        const konten = cleanDeep({
          kode: this.dataKode.inputKode,
          bahasaPemrograman: this.dataKode.bahasaPemrogramanTerpilih,
          highlight: this.dataKode.highlight,
          namaBerkas: this.dataKode.namaBerkas,
          twoslash: this.dataKode.twoslashTerpilih
        })
        await this.$store.dispatch('kode/simpanKode', {
          idPengguna: this.$store.state.pengguna.idPengguna,
          konten: konten
        })
        await this.dapatkanDaftarKode()
      } catch (error) {
        const dataNotifikasiGalat = {
          apakahTampil: true,
          pesan: error.message || 'Gagal menyimpan'
        }
        this.$store.dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat)
        console.log(error)
      }
    },
    async dapatkanDaftarBahasaPemrograman() {
      try {
        const respon = await dapatkanOpsi()
        if (respon.success && !respon.error) {
          this.daftarBahasaPemrograman = respon.data.languages
        }
      } catch (error) {
        const dataNotifikasiGalat = {
          apakahTampil: true,
          pesan: error.message
        }
        this.$store.dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat)
        console.log(error)
      }
    },
    async highlighter(inputKode, download) {
      try {
        this.$store.dispatch('proses/tampilkanProses', null)
        const objekUrl = {
          url: URL_API,
          query: {
            lang: this.dataKode.bahasaPemrogramanTerpilih,
            fileName: this.dataKode.namaBerkas,
            highlight: this.dataKode.highlight,
            twoslash: this.dataKode.twoslashTerpilih,
            download
          }
        }
        const url = stringifyUrl(objekUrl, OPSI_STRINGIFY)

        const respon = await kirimData(url, {
          code: inputKode
        })

        if (respon.success && !respon.error) {
          this.hasilHighlight = respon.data
        } else {
          throw new Error(respon.message)
        }
      } catch (error) {
        const dataNotifikasiGalat = {
          apakahTampil: true,
          pesan: error.message || 'Bahasa Pemrograman dan Kode wajib diisi'
        }
        this.$store.dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat)
        console.log(error)
      } finally {
        this.$store.dispatch('proses/hilangkanProses', null)
      }
    }
  }
}
</script>
