<template>
  <main>
    {{ total }}
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('penjualan', [
      'total'
    ])
  }
}
</script>
