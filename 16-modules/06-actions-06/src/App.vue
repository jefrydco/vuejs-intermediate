<template>
  <main>
    <button @click="getNama">
      Ubah Nama
    </button>
    <p>{{ nama }}</p>
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
