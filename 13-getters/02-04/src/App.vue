<template>
  <main>
    {{ totalAlias }}
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      totalAlias: 'totalPenjualan'
    })
  }
}
</script>
