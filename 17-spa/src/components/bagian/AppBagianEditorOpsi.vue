<template>
  <section class="editor-opsi">
    <app-formulir-pilihan
      :value="bahasaPemrogramanTerpilih"
      nama="bahasa-pemrograman"
      label="Pilih Bahasa Pemrograman"
      class="margin-bottom"
      :daftar-pilihan="daftarBahasaPemrograman"
      @input="$emit('update:bahasaPemrogramanTerpilih', $event)"
    />
    <app-formulir-pilihan
      v-if="bahasaPemrogramanTerpilih === 'typescript' || bahasaPemrogramanTerpilih === 'json'"
      :value="twoslashTerpilih"
      nama="twoslash"
      label="Pilih Twoslash"
      class="margin-bottom"
      :daftar-pilihan="daftarTwoslash"
      @input="$emit('update:twoslashTerpilih', $event)"
    />
    <app-formulir-input
      :value="namaBerkas"
      nama="nama-berkas"
      label="Nama Berkas"
      class="margin-bottom"
      @input="$emit('update:namaBerkas', $event)"
    />
    <app-formulir-input
      :value="highlight"
      nama="highlight"
      label="Baris Highlight"
      class="margin-bottom"
      @input="$emit('update:highlight', $event)"
    />
    <div class="opsi-aksi-editor flex">
      <app-tombol
        nama="reset"
        label="Reset"
        @klik="$emit('reset')"
      />
      <app-tombol
        v-if="hasilHighlight && hasilHighlight.length > 0"
        nama="unduh"
        label="Unduh"
        class="margin-left"
        @klik="ketikaTombolUnduhDiKlik"
      />
      <app-tombol
        v-if="$store.state.pengguna.idPengguna"
        nama="simpan"
        label="Simpan"
        class="margin-left"
        @klik="ketikaTombolSimpanDiKlik"
      />
    </div>
  </section>
</template>

<script>
import { stringifyUrl } from 'query-string'
import cleanDeep from 'clean-deep'

import {
  validator,
  dapatkanOpsi,
  unduhKode
} from '../../utils'
import { URL_API, OPSI_STRINGIFY } from '../../constants'

import AppTombol from '../AppTombol'
import AppFormulirInput from '../AppFormulirInput'
import AppFormulirPilihan from '../AppFormulirPilihan'

export default {
  components: {
    AppTombol,
    AppFormulirInput,
    AppFormulirPilihan
  },
  props: {
    inputKode: {
      required: true,
      validator
    },
    bahasaPemrogramanTerpilih: {
      required: true,
      validator
    },
    twoslashTerpilih: {
      required: true,
      validator
    },
    namaBerkas: {
      required: true,
      validator
    },
    highlight: {
      required: true,
      validator
    },
    hasilHighlight: {
      required: true,
      validator
    }
  },
  data() {
    return {
      daftarBahasaPemrograman: [],
      daftarTwoslash: ['twoslash', 'tsconfig']
    }
  },
  created() {
    this.dapatkanDaftarBahasaPemrograman()
  },
  methods: {
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
    async ketikaTombolUnduhDiKlik() {
      try {
        this.$store.dispatch('proses/tampilkanProses', null)
        const objekUrl = {
          url: URL_API,
          query: {
            lang: this.bahasaPemrogramanTerpilih,
            fileName: this.namaBerkas,
            highlight: this.highlight,
            twoslash: this.twoslashTerpilih,
            download: 1
          }
        }
        const url = stringifyUrl(objekUrl, OPSI_STRINGIFY)
        await unduhKode(url, {
          code: this.inputKode
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
          kode: this.inputKode,
          bahasaPemrograman: this.bahasaPemrogramanTerpilih,
          highlight: this.highlight,
          namaBerkas: this.namaBerkas,
          twoslash: this.twoslashTerpilih
        })
        await this.$store.dispatch('kode/simpanKode', {
          idPengguna: this.$store.state.pengguna.idPengguna,
          konten: konten
        })
        await this.$emit('tersimpan')
      } catch (error) {
        const dataNotifikasiGalat = {
          apakahTampil: true,
          pesan: error.message || 'Gagal menyimpan'
        }
        this.$store.dispatch('notifikasi/tampilkanNotifikasi', dataNotifikasiGalat)
        console.log(error)
      }
    }
  }
}
</script>