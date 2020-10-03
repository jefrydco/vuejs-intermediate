<template>
  <main>
    <button @click="getNamaPenggunaAlias">
      Ubah Nama Pengguna
    </button>
    <p>{{ namaPengguna }}</p>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

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
    ...mapActions({
      getNamaPenggunaAlias: 'getNamaPengguna'
    })
  }
}
</script>