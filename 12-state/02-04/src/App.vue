<template>
  <main>
    {{ namaAlias }}
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      namaAlias: 'namaPengguna'
    })
  }
}
</script>
