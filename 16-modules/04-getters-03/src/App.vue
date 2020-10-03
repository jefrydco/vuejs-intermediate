<template>
  <main>
    {{ totalPenjualan }}
  </main>
</template>

<script>
export default {
  name: 'App',
  computed: {
    totalPenjualan() {
      return this.$store
        .getters['penjualan/total']
    }
  }
}
</script>
