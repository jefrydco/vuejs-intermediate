<template>
  <main>
    {{ nama }}
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      nama: null
    }
  },
  created() {
    this.nama = this.$store
      .state
      .pengguna
      .nama
  }
}
</script>
