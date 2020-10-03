<template>
  <main>
    {{ totalPenjualan }}
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      totalPenjualan: 0
    }
  },
  created() {
    this.totalPenjualan = this.$store
      .getters['penjualan/total']
  }
}
</script>
