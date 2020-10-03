<template>
  <main>
    {{ namaPengguna }}
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState([
      'namaPengguna'
    ]),
    namaPenggunaDariStore() {
      return this.$store
        .state
        .namaPengguna
    }
  },
  created() {
    this.namaPengguna = 'Posva'
    this.namaPenggunaDariStore = 'Posva'
  }
}
</script>
