<template>
  <div :class="`opsi-formulir-${nama}`">
    <label :for="nama">
      {{ label }}:
    </label>
    <br/>
    <textarea
      :value="value"
      :id="nama"
      :class="nama"
      @input="ketikaNilaiBerubah"
    ></textarea>
  </div>
</template>

<script>
import { formulir } from '../mixins'

export default {
  name: 'AppFormulirAreaTeks',
  mixins: [formulir],
  methods: {
    ketikaNilaiBerubah(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
