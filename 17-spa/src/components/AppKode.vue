<template>
  <div class="tampilan-kode">
    <data-code
      :code="kode"
      :lang="bahasaPemrograman"
      :is-highlighted="apakahHighlightMenyala"
    />
    <button
      v-if="idKode"
      @click="ketikaTombolHapusDiKlik"
    >
      Hapus
    </button>
  </div>
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'AppKode',
  props: {
    idKode: {
      type: String,
      default: null
    },
    kode: {
      default: '',
      required: true,
      validator
    },
    bahasaPemrograman: {
      default: '',
      required: true,
      validator
    },
    apakahHighlightMenyala: {
      type: Number,
      default: 1
    }
  },
  methods: {
    async ketikaTombolHapusDiKlik() {
      const hasilKonfirmasi = confirm('Apakah kamu yakin?')
      if (hasilKonfirmasi && this.idKode) {
        await this.$store.dispatch('kode/hapusKode', {
          idPengguna: this.$store.state.pengguna.idPengguna,
          idKode: this.idKode
        })
        await this.$emit('terhapus')
      }
    }
  }
}
</script>
