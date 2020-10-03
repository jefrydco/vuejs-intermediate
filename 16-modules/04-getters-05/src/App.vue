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
    ...mapGetters('penjualan', {
      totalAlias: 'total'
    })
  }
}
</script>
