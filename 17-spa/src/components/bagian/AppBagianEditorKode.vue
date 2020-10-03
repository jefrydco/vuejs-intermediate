<template>
  <section class="editor-kode flex">
    <app-formulir-area-teks
      :value="inputKode"
      nama="input-kode"
      label="Input Kode"
      @input="$emit('update:inputKode', $event)"
    />
    <app-kode
      :kode="hasilHighlight"
      :bahasa-pemrograman="bahasaPemrogramanTerpilih"
      class="tampilan-kode--kustom"
    />
  </section>
</template>

<script>
import AppKode from '../AppKode'

import { validator } from '../../utils'

export default {
  components: {
    AppKode
  },
  props: {
    inputKode: {
      default: '',
      required: true,
      validator
    },
    hasilHighlight: {
      type: String,
      default: '',
      required: true
    },
    bahasaPemrogramanTerpilih: {
      default: '',
      required: true,
      validator
    }
  }
}
</script>