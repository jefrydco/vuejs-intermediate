<template>
  <main>
    {{ nama }}
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
  }
}
</script>
