<template>
  <main>
    {{ nama }}
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState('pengguna', [
      'nama'
    ])
  }
}
</script>
