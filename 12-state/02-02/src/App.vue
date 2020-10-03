<template>
  <main>
    {{ namaPengguna }}
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
  }
}
</script>
