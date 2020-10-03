<template>
  <main>
    <button @click="setNama">Ubah Nama</button>
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
    ...mapMutations('pengguna', [
      'setNama'
    ])
  }
}
</script>
