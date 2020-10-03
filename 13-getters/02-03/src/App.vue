<template>
  <main>
    {{ totalPenjualan }}
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'totalPenjualan'
    ])
  }
}
</script>
