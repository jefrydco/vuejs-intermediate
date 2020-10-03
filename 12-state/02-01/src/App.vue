<template>
  <main>
    {{ namaPengguna }}
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      namaPengguna: ''
    }
  },
  created() {
    this.namaPengguna = this.$store
      .state
      .namaPengguna
  }
}
</script>
