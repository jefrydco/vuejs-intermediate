<template>
  <main>
    <button @click="getNama">
      Ubah Nama
    </button>
    <p>{{ nama }}</p>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    nama() {
      return this.$store
        .state
        .pengguna
        .nama
    }
  },
  methods: {
    ...mapActions('pengguna', [
      'getNama'
    ])
  }
}
</script>
