<template>
  <section class="daftar-kode flex">
    <app-kode
      v-for="itemKode in $store.state.kode.daftarKode"
      :key="itemKode.id"
      :id-kode="itemKode.id"
      :kode="itemKode.code"
      :bahasa-pemrograman="itemKode.lang"
      :apakah-highlight-menyala="apakahHighlightMenyala"
      @terhapus="dapatkanDaftarKode"
    />
  </section>
</template>

<script>
import AppKode from '../AppKode'

export default {
  components: {
    AppKode
  },
  props: {
    apakahHighlightMenyala: {
      type: Number,
      default: 1,
      required: true
    },
    dapatkanDaftarKode: {
      type: Function,
      default() {
        return () => {}
      },
      required: true
    }
  }
}
</script>
