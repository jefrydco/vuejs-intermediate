<template>
  <div :class="`tombol-${nama}`">
    <button
      :disabled="nonaktif"
      @click="ketikaTombolDiKlik"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppTombol',
  props: {
    nama: {
      type: String,
      required: true,
      default: ''
    },
    label: {
      type: String,
      required: true,
      default: ''
    },
    nonaktif: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ketikaTombolDiKlik(event) {
      this.$emit('klik', event)
    }
  }
}
</script>
