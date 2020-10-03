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
    ...mapState({
      nama(state) {
        return state.namaPengguna
      }
    })
  }
}
</script>
