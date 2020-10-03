<template>
  <div :class="`opsi-formulir-${nama}`" class="opsi-formulir flex flex-align-center">
    <label :for="nama">{{ label }}:</label>
    <input
      :value="value"
      :type="tipe"
      :id="nama"
      class="margin-left"
      @input="ketikaNilaiBerubah"
    >
    <slot name="aksi"/>
  </div>
</template>

<script>
import { formulir } from '../mixins'

export default {
  name: 'AppFormulirInput',
  mixins: [formulir],
  props: {
    tipe: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    ketikaNilaiBerubah(event) {
      if (this.tipe === 'number') {
        this.$emit('input', parseInt(event.target.value))
      } else {
        this.$emit('input', event.target.value)
      }
    }
  }
}
</script>
