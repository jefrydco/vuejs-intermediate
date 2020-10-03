<template>
  <main>
    <button @click="setNamaPengguna">
      Ubah Nama Pengguna
    </button>
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
        .namaPengguna
    }
  },
  methods: {
    ...mapMutations([
      'setNamaPengguna'
    ])
  }
}
</script>