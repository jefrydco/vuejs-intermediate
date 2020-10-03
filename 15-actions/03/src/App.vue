<template>
  <main>
    <button @click="getNamaPengguna">
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
    getNamaPengguna() {
      this.$store
        .dispatch('getNamaPengguna', 'Evan You')
    }
  }
}
</script>