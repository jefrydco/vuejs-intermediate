<template>
  <main>
    <button @click="getNama">
      Ubah Nama
    </button>
    <p>{{ nama }}</p>
    <p>{{ totalBelanja }}</p>
  </main>
</template>

<script>
export default {
  name: 'App',
  computed: {
    nama() {
      return this.$store
        .state
        .pengguna
        .nama
    },
    totalBelanja() {
      return this.$store
        .state
        .keranjang
        .totalBelanja
    }
  },
  methods: {
    getNama() {
      this.$store
        .dispatch('pengguna/getNama')
    }
  }
}
</script>
