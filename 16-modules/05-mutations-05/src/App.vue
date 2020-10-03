<template>
  <main>
    <button @click="setNamaAlias">Ubah Nama</button>
    <p>{{ namaPengguna }}</p>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  computed: {
    namaPengguna() {
      return this.$store
        .state
        .pengguna
        .nama
    }
  },
  methods: {
    ...mapMutations('pengguna', {
      setNamaAlias: 'setNama'
    })
  }
}
</script>
