<template>
  <main>
    <button @click="ubahNamaPengguna">
      Ubah Nama Pengguna
    </button>
    <p>{{ namaPengguna }}</p>
  </main>
</template>

<script>
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
    ubahNamaPengguna() {
      this.$store
        .commit('setNamaPengguna', 'Evan You')
    }
  }
}
</script>