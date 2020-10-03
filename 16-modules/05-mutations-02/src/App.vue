<template>
  <main>
    <button @click="setNama">Ubah Nama</button>
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
        .pengguna
        .nama
    }
  },
  methods: {
    setNama() {
      this.$store
        .commit('pengguna/setNama')
    }
  }
}
</script>
