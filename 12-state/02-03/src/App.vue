<template>
  <main>
    {{ namaPengguna }}
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState([
      'namaPengguna'
    ])
  }
}
</script>
